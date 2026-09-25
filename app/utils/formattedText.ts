import { parseDocument } from "htmlparser2";
import { h, type VNodeChild } from "vue";

const allowedTags = new Set([
  "strong",
  "b",
  "em",
  "i",
  "br",
  "p",
  "ul",
  "ol",
  "li",
  "a",
]);
const discardedTags = new Set([
  "script",
  "style",
  "iframe",
  "object",
  "template",
]);
type ParsedNode = ReturnType<typeof parseDocument>["children"][number];

export type FormattedNode =
  | string
  | {
      tag: string;
      href?: string;
      children: FormattedNode[];
    };

// Parse equally on the server and client; never assign markup to the DOM.
export function parseFormattedText(text: string): FormattedNode[] {
  function convert(nodes: ParsedNode[]): FormattedNode[] {
    return nodes.flatMap((node): FormattedNode[] => {
      if (node.type === "text") return [node.data];
      if (node.type !== "tag" || discardedTags.has(node.name)) return [];
      const children = convert(node.children);
      if (!allowedTags.has(node.name)) return children;
      const href = node.attribs.href?.trim();
      return [
        {
          tag: node.name,
          ...(node.name === "a" &&
          href &&
          /^(https?:|mailto:|tel:|\/|#)/i.test(href)
            ? { href }
            : {}),
          children,
        },
      ];
    });
  }
  return convert(parseDocument(text, { decodeEntities: true }).children);
}

export function renderFormattedText(
  nodes: FormattedNode[],
  resolveLink: (href: string) => string,
  openConsultation: () => void,
): VNodeChild[] {
  return nodes.map((node): VNodeChild => {
    if (typeof node === "string") return node;
    const attributes: Record<string, unknown> = {};
    if (node.tag === "a" && node.href) {
      const isConsultation = node.href.startsWith("#popup:");
      attributes.href = isConsultation
        ? "#consultation"
        : resolveLink(node.href);
      if (isConsultation)
        attributes.onClick = (event: MouseEvent) => {
          event.preventDefault();
          openConsultation();
        };
    }
    return h(
      node.tag,
      attributes,
      renderFormattedText(node.children, resolveLink, openConsultation),
    );
  });
}
