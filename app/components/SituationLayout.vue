<script setup lang="ts">
const props = defineProps<{ slug: string }>();
const root = ref<HTMLElement>();
let resizeObserver: ResizeObserver | undefined;
let frame = 0;
function fitBoards() {
  const width = window.innerWidth;
  const breakpoint = [1200, 960, 640, 480, 320].find((n) => width >= n) || 320;
  function field(el: HTMLElement, prefix: string, name: string) {
    for (const size of [320, 480, 640, 960, 1200].filter(
      (n) => n >= breakpoint,
    )) {
      const suffix = size === 1200 ? "" : `-res-${size}`;
      const value = el.getAttribute(
        `${prefix}${name}${suffix}${prefix === "data-artboard-" ? "" : "-value"}`,
      );
      if (value !== null) return parseFloat(value) || 0;
    }
    return 0;
  }
  root.value
    ?.querySelectorAll<HTMLElement>(
      '.t396__artboard[data-artboard-heightmode="hug"]',
    )
    .forEach((board) => {
      if (!board.offsetWidth || board.classList.contains("t396__artboard-flex"))
        return;
      const children = [...board.children].filter(
        (e): e is HTMLElement =>
          e instanceof HTMLElement &&
          (e.classList.contains("tn-group") ||
            e.getAttribute("data-elem-type") === "text" ||
            e.getAttribute("data-elem-type") === "form"),
      );
      const visible = children.filter(
        (e) => e.offsetWidth && getComputedStyle(e).display !== "none",
      );
      if (!visible.length) return;
      const box = board.getBoundingClientRect();
      const originalBottom = Math.max(
        ...visible.map((e) => {
          const p = e.classList.contains("tn-group")
            ? "data-group-"
            : "data-field-";
          return field(e, p, "top") + field(e, p, "height");
        }),
      );
      const gap = Math.max(
        0,
        field(board, "data-artboard-", "height") - originalBottom,
      );
      const content = [
        ...board.querySelectorAll<HTMLElement>(
          '.tn-elem[data-elem-type="text"],.tn-elem[data-elem-type="button"],.tn-elem[data-elem-type="form"]',
        ),
      ].filter((e) => e.offsetWidth);
      const bottom = Math.max(
        ...visible.map((e) => e.getBoundingClientRect().bottom - box.top),
        ...content.map((e) => e.getBoundingClientRect().bottom - box.top + 5),
      );
      board.style.height = `${Math.ceil(bottom + gap)}px`;
    });
  root.value?.setAttribute("data-layout-ready", "true");
}
function scheduleFit() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(fitBoards);
}
async function observeLayout() {
  await nextTick();
  root.value?.removeAttribute("data-layout-ready");
  await document.fonts.ready;
  fitBoards();
  resizeObserver?.disconnect();
  resizeObserver = new ResizeObserver(scheduleFit);
  root.value
    ?.querySelectorAll(
      '.t396__artboard > .tn-group, .tn-elem[data-elem-type="text"]',
    )
    .forEach((e) => resizeObserver!.observe(e));
}
onMounted(() => {
  observeLayout();
  window.addEventListener("resize", scheduleFit);
});

onBeforeUnmount(() => {
  resizeObserver?.disconnect();
  cancelAnimationFrame(frame);
  window.removeEventListener("resize", scheduleFit);
});

useHead(() => ({
  link: [{ rel: "stylesheet", href: `/styles/situations/${props.slug}.css` }],
}));
</script>
<template>
  <main
    id="main-content"
    ref="root"
    class="reference-page t-records"
    :data-page="slug"
  >
    <slot />
  </main>
</template>
<style src="./situation-page.css"></style>
