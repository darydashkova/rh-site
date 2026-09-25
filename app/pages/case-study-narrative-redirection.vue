<script setup lang="ts">
const study = {
  title:
    "Rewriting a Business Narrative Across 4 RegionsWithout Erasing the Past",
  description:
    "Shifting what search associates with an entrepreneur's name — from old ventures to the new business — across Bing, Google local, UK, and UAE, before a partner or investor ever ran a check",
  image: "/images/case-detail-4563a613544e.png",
  meta: [
    "Client: Entrepreneur in Transition (NDA)",
    "Timeline:Mar 2025 – Nov 2025",
    "Reading time:6 min",
    "Personal Reputation, Narrative Shift, SERM",
  ],
  breadcrumb: "Rewriting a Business Narrative Across 4 Regions",
  services: [
    {
      title: "Narrative Redirection",
      text: "Shift the name's association from old ventures to the new business",
      icon: "/images/case-detail-87a8eba3373f.svg",
    },
    {
      title: "Bilingual Content",
      text: "Local + English streams — two, not four, covering all 4 regions",
      icon: "/images/case-detail-629a078ba7b9.svg",
    },
    {
      title: "UK → UAE Leverage",
      text: "UK articles rank organically in UAE — no separate regional spend",
      icon: "/images/case-detail-7ec64500eae7.svg",
    },
    {
      title: "Crowd-Marketing Trust Layer",
      text: "12 third-party links so the new story reads as established",
      icon: "/images/case-detail-8223b8b25be9.svg",
    },
    {
      title: "Content at Volume",
      text: "41 pieces: 11 local + 10 EN articles + 12 crowd + 8 reposts",
      icon: "/images/case-detail-1a58c00be0a4.svg",
    },
    {
      title: "Old-Signal Removal",
      text: "Deindexing of remaining previous-company material",
      icon: "/images/case-detail-871e12e090e2.svg",
    },
  ],
  results: [
    {
      value: "0 → 70%",
      label: "Positive share · Bing (local) top-10",
    },
    {
      value: "20% → 0%",
      label: "Negative share · Google (local) top-10",
    },
    {
      value: "3 → 70%",
      label: "Positive share · Google UK top-10",
    },
    {
      value: "3 → 65%",
      label: "Positive share · Google UAE (via UK, no spend)",
    },
    {
      value: "41",
      label: "Content pieces created over 8 months",
    },
    {
      value: "4",
      label: "Regions covered · UAE reached organically",
    },
  ],
};
useSeoMeta({
  title: study.title + " | Reputation House",
  description: study.description,
});
</script>
<template>
  <CaseStudyLayout
    :study="study"
    slug="case-study-narrative-redirection"
    :filters="true"
  >
    <template #intro
      >Shifting what search associates with an entrepreneur's name —
      <strong>from old ventures to the new business</strong> — across Bing,
      Google local, UK, and UAE, before a partner or investor ever ran a
      check</template
    >
    <template #challenge
      ><h2>THE CHALLENGE</h2>
      <p class="case-challenge-lead">
        An entrepreneur moved on to a new venture — but search didn't move with
        him. Investors and partners in the UK and UAE researching his name would
        find his previous companies first, not the current business. And simply
        removing the old associations wouldn't fix it: the space they left would
        stay empty, or refill with the same outdated material.
      </p>
      <p>
        The real task wasn't suppression — it was
        <strong>narrative redirection.</strong> Shift what search engines
        associate with the name,
        <strong>from past ventures to present ones</strong>, across four regions
        at once: Bing local, Google local, Google UK, and Google UAE. That's
        structurally harder than clearing negativity — you have to
        <strong
          >both sever the old signals and fill the space with a new
          story</strong
        >, or the past simply moves back in.
      </p></template
    >
    <template #audit>
      <h3>The Audit</h3>
      <div class="case-prose">
        Before publishing anything, we ran a structured audit of what search
        associated with the client's name across four regions:<br /><br />
        <ol>
          <li>
            Bing (local) top-10 — positive vs negative share and dominant
            association;
          </li>
          <li>
            Google (local) top-10 — how strongly old companies held the results;
          </li>
          <li>Google UK top-10 — what a UK partner sees first;</li>
          <li>Google UAE top-10 — coverage reachable via UK content;</li>
          <li>
            Target query set — the names and terms partners actually search;
          </li>
          <li>
            Owned positive presence — the base for the new narrative (baseline:
            near zero).
          </li>
        </ol>
      </div>
      <div class="case-prose">
        The methodology was built for a public figure inside a permanent news
        cycle: <strong>weekly audits, not monthly</strong> — so emerging
        negative content is caught before it gains ranking momentum.
      </div>
      <aside class="case-callout">
        <strong>Audit scope</strong><br />4 regions · 11 target queries · Bing
        local: 0% positive, 12% negative, ~80% neutral · Google local: 0%
        positive, 20% negative · Google UK: 3% positive, 11% negative · Google
        UAE: 3% positive · UAE reachable organically via UK content
      </aside>
      <div class="case-prose">
        The problem wasn't heavy negativity — it was association. Positive
        presence sat at 0–3% everywhere, so search had nothing current to show;
        it defaulted to the old companies. Any partner or investor running a
        pre-meeting check would meet the past first, and the new business would
        start every relationship already explaining someone else's story.
      </div>
      <h3>What Search Was Saying</h3>
      <div class="case-prose">
        The audit reframed the problem: this wasn't heavy negativity to
        suppress, it was association. Positive presence sat at 0–3% across every
        region, so search had nothing current to show — it defaulted to the
        client's previous companies. Any partner running a pre-meeting check
        would meet the past first.
      </div>
      <div
        class="case-table-scroll"
        tabindex="0"
        role="region"
        aria-label="Case study comparison table"
      >
        <table>
          <tbody>
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">Before (Mar 2025)</th>
              <th scope="col">After (Nov 2025)</th>
            </tr>
            <tr>
              <td>Bing (local) — positive</td>
              <td>0%</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Bing (local) — negative</td>
              <td>12%</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>Google (local) — positive</td>
              <td>0%</td>
              <td>56%</td>
            </tr>
            <tr>
              <td>Google (local) — negative</td>
              <td>20%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Google UK — positive</td>
              <td>3%</td>
              <td>70%</td>
            </tr>
            <tr>
              <td>Google UK — negative</td>
              <td>11%</td>
              <td>6%</td>
            </tr>
            <tr>
              <td>Google UAE — positive</td>
              <td>3%</td>
              <td>65% (via UK, no spend)</td>
            </tr>
            <tr>
              <td>Content islands</td>
              <td>Near zero</td>
              <td>41 pieces · 58–77 positions per region</td>
            </tr>
            <tr>
              <td>Dominant association</td>
              <td>Previous companies</td>
              <td>Previous companies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="case-prose">
        The gap wasn't a bad page — it was the wrong story. Search returned old
        ventures for the client's name across all four regions, so investors and
        partners in the UK and UAE started every relationship on the back foot,
        correcting a record that should have already moved on. Fixing it meant
        redirection: build enough current-business content to become the answer
        search gives — not just remove the old, but replace what the name means.
      </div>
      <h3>STRATEGY</h3>
      <div class="case-prose">
        The plan rested on redirection, not erasure — build enough
        current-business content to become the answer search gives for the name.
        Three principles drove it:<br />
        <ul>
          <li>
            <strong>Bilingual, two streams not four</strong> — local-language
            content for the home market, English for UK and UAE, since each
            region responds to different language signals. Two content streams
            carried all four regions;
          </li>
          <li>
            <strong>UK content doing double duty</strong> — UAE audience and
            search behaviour overlap closely with UK-facing English, so UK
            articles ranked organically in UAE too — no separately budgeted
            fourth stream;
          </li>
          <li>
            <strong>Crowd-marketing as an organic trust layer</strong> —
            third-party mentions search engines weight differently than owned
            publications, making the new narrative read as established rather
            than manufactured.
          </li>
        </ul>
      </div>
      <h3>Channel Priority Matrix</h3>
      <div
        class="case-table-scroll"
        tabindex="0"
        role="region"
        aria-label="Case study comparison table"
      >
        <table>
          <tbody>
            <tr>
              <th scope="col">Tier 1, Must own</th>
              <th scope="col">Tier 2, Build presence</th>
              <th scope="col">Tier 3, Monitor</th>
            </tr>
            <tr>
              <td>Bing &amp; Google (local) top-10</td>
              <td>Google UK (English content)</td>
              <td>Google UAE (via UK overlap)</td>
            </tr>
            <tr>
              <td>New-business narrative articles</td>
              <td>New-business narrative articles</td>
              <td>Old-company associations</td>
            </tr>
            <tr>
              <td>Bilingual anchor content</td>
              <td>Reposts in blogs &amp; social</td>
              <td>Target query set (11)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="case-prose">
        Each region pulled a different language lever, so each got its own
        content — coordinated centrally. The written base carried the home
        market in local language on Bing and Google; English content built the
        UK narrative. The one leverage point worked in the client's favour:
        UK-facing English ranked organically in UAE too, closing the fourth
        region without a fourth budget. Around all of it, crowd-marketing links
        added a third-party trust layer so the new story read as established,
        not manufactured.
      </div>
    </template>
    <template #cta
      ><CaseStudyCta title="CHANGED BUSINESS, BUT SEARCH DIDN'T?"
        >We redirect what your name returns — from old ventures to your current
        business — across every region a partner or investor
        checks</CaseStudyCta
      ></template
    >
    <template #story>
      <h2>Phase 1 (March–May 2025)</h2>
      <div class="case-prose">
        Audit, strategy, and the first local-language publications on Bing and
        Google (local). The home-market narrative goes first.<br /><br /><strong
          >Audit &amp; strategy</strong
        ><br /><br />Baseline measured across 4 regions and 11 target queries.
        Positive presence at 0–3% everywhere; search defaulting to the client's
        previous companies.<br /><br /><strong>Local-language layer live</strong
        ><br /><br />First articles published for the home market (Bing/Google
        local) — the base of the new-business narrative begins.
      </div>
      <h2>Phase 2 (June–August 2025)</h2>
      <div class="case-prose">
        English content launches for the UK; organic UAE coverage begins.<br /><br /><strong
          >English content launched</strong
        ><br /><br />UK-facing articles go live, extending the new narrative
        into English-language search.<br /><br /><strong
          >UAE reached organically</strong
        ><br /><br />UK articles start ranking in UAE too — the fourth region
        covered without a separate budget.
      </div>
      <aside class="case-callout">
        <strong>Redirection approach</strong><br /><br />Removing the old
        associations was never the whole plan — an empty gap just refills with
        the same outdated pages. So content and removal ran together, but
        content led: enough current-business material to <em>become</em> the
        answer search gives for the name. The principle:
        <strong
          >don't just delete the past — outrank it, until search returns the
          business you run now.</strong
        >
      </aside>
      <h2>Phase 3 (September–November 2025)</h2>
      <div class="case-prose">
        Consolidation, removal/deindexing of remaining old material, and final
        audit.<br /><br /><strong>Consolidation &amp; removal</strong
        ><br /><br />Content islands reinforced across all four regions;
        remaining previous-company material removed/deindexed where needed.<br /><br /><strong
          >Final audit</strong
        ><br /><br />By close, search returns the current business for the
        client's name across Bing, Google local, UK, and UAE.
      </div>
      <div class="case-stat-grid">
        <div class="case-stat">
          <div class="case-stat__label">Bing (local)</div>
          <div class="case-stat__value">0 → 70%<br />positive</div>
        </div>
        <div class="case-stat">
          <div class="case-stat__label">Google (local)</div>
          <div class="case-stat__value">20% → 0%<br />negative</div>
        </div>
        <div class="case-stat">
          <div class="case-stat__label">Google UK</div>
          <div class="case-stat__value">3 → 70%<br />positive</div>
        </div>
        <div class="case-stat">
          <div class="case-stat__label">Google UAE</div>
          <div class="case-stat__value">3 → 65%<br />via UK</div>
        </div>
      </div>
      <h3>Results</h3>
      <div class="case-prose">
        By November 2025 — 8 months in — search told the current story across
        all four regions. The old-company associations no longer led the
        results; the new business did. Positive presence was built from
        near-zero to 56–70% per region, and Google (local) negative went to 0% —
        displaced by content volume alone.
      </div>
      <div class="case-result-grid">
        <div class="case-result">
          <div class="case-result__value">20% → 0%</div>
          <div class="case-result__label">Negative in Google (local)</div>
          <div class="case-result__sub">displaced by content alone</div>
        </div>
        <div class="case-result">
          <div class="case-result__value">0 → 70%</div>
          <div class="case-result__label">Positive in Bing (local)</div>
          <div class="case-result__sub">new-business narrative</div>
        </div>
        <div class="case-result">
          <div class="case-result__value">41</div>
          <div class="case-result__label">Content pieces built</div>
          <div class="case-result__sub">4 regions · UAE via UK</div>
        </div>
      </div>
      <aside class="case-callout">
        <strong>What Made This Work</strong><br /><br />Three factors separated
        this engagement from a standard cleanup:<br /><br />
        <ol>
          <li>
            Bilingual content covering 4 regions — two streams (local +
            English), not four regional campaigns, carried the full narrative
            shift;
          </li>
          <li>
            UK content reaching UAE organically — overlapping audience behaviour
            meant UK articles ranked in UAE with no extra production or spend;
          </li>
          <li>
            Displacement closing Google (local) negative to 0% — the old
            narrative was fully displaced through content volume alone, without
            separate removal work.
          </li>
        </ol>
        <br />The sequence mattered as much as the tactics: redirect the
        association, don't just delete the past.
      </aside>
      <div class="case-prose">
        The result held across all four regions: positive presence built from
        near-zero to 56–70%, the old-company associations displaced, and the new
        business established as what search returns for the name. The real
        metric isn't a clean SERP today — it's that search now sells the
        business the client actually runs.
      </div>
      <h3>What If the Client Had Gone It Alone</h3>
      <div class="case-prose">
        Let's run the counterfactual. Without intervention, a UK partner
        researching the client ahead of a meeting would have found the old
        company associations still dominating Google (local), alongside the 11%
        negative share at baseline.
        <strong>Here's what that costs, step by step.</strong
        ><br /><br /><strong>Search answers with the past</strong
        ><br /><br />Type the name, and previous ventures lead the results.
        Positive presence sat at 0–3%, so search had nothing current to show —
        the old companies <em>are</em> the answer.<br /><br /><strong
          >The partner meets the wrong story first</strong
        ><br /><br />In the UK and UAE, a pre-meeting check surfaces old
        associations before a single conversation. The client starts every
        relationship explaining what he's already moved on from.<br /><br /><strong
          >The gap doesn't self-correct</strong
        ><br /><br />Remove the old material and the space just stays empty — or
        refills with the same outdated pages. Without new content, search has
        nothing else to rank, so the past quietly moves back in.<br /><br /><strong
          >The new business inherits someone else's narrative</strong
        ><br /><br />A venture built on that foundation begins on the back foot
        — correcting the record instead of making the case. In the UAE, reached
        only through UK content, the same picture would have repeated with no
        coverage at all.
      </div>
      <figure><hr /></figure>
      <div class="case-prose">
        <strong
          >When you change businesses, search doesn't change with you — it keeps
          selling the old one. Here, the new story was built until search
          returned it, before a single partner ran a check.</strong
        >
      </div>
      <blockquote>
        Search doesn't know a business has changed. Left alone, it keeps selling
        the old one — and you spend every new relationship correcting a story
        that should have already moved on.
      </blockquote>
    </template>
  </CaseStudyLayout>
</template>
