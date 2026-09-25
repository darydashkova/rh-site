<script setup lang="ts">
import metadata from "~/data/situations/cis-market-entry-strategy.json";
const {
  openConsultation,
  expanded,
  toggleQuestion,
  activeModule,
  changeModule,
  scrollCarousel,
  sentForms,
  submitPreview,
} = useSituationInteractions(
  {
    accordion1_2832722501: false,
    accordion2_2832722501: false,
    accordion3_2832722501: false,
    accordion4_2832722501: false,
    accordion5_2832722501: false,
    accordion6_2832722501: false,
    accordion7_2832722501: false,
    accordion8_2832722501: false,
    accordion9_2832722501: false,
  },
  2,
);
const moduleLists = [
  [
    { title: "Overview & RPN Score", icon: "/images/service-bef6ac29bf.svg", active: false },
    { title: "Social Listening", icon: "/images/service-6ee4059b0e.svg", active: true },
    { title: "Search Results", icon: "/images/service-2d81851ff5.svg", active: true },
    { title: "Reviews Platforms", icon: "/images/service-9d54b83e1b.svg", active: false },
    { title: "AI Representation", icon: "/images/service-45c009e2d1.svg", active: false },
    { title: "Narrative & Tone", icon: "/images/service-08a148fb50.svg", active: false },
    { title: "Risk Signals & Alerts", icon: "/images/service-b8b8a70f64.svg", active: false },
    { title: "Action Plan", icon: "/images/service-1ef5842535.svg", active: false },
  ],
];
useSeoMeta({ title: metadata.title, description: metadata.description });
</script>
<template>
  <SituationLayout slug="cis-market-entry-strategy">
    <section
      id="rec2832718201"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_90 t-rec_pb-res-480_45"
      style="padding-top: 60px; padding-bottom: 90px; background-color: #dfecd9"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="800"
          data-artboard-height-res-320="1583"
          data-artboard-height-res-480="1338"
          data-artboard-height-res-640="1180"
          data-artboard-height-res-960="874"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__elem tn-elem tn-elem__28327182011786354820618"
            data-elem-id="1786354820618"
            data-elem-type="image"
            data-field-top-value="-209"
            data-field-height-value="795"
            data-field-height-res-320-value="795"
            data-field-height-res-480-value="795"
            data-field-height-res-640-value="795"
            data-field-height-res-960-value="795"
          >
            <div class="tn-atom">
              <img
                class="tn-atom__img t-img"
                src="/images/service-982a2e6322.svg"
                alt=""
                loading="eager"
              />
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__28327182011786031818005000001 t396__group-flex"
            data-group-id="1786031818005000001"
            data-group-top-value="100"
            data-group-heightmode="hug"
            data-group-height-value="700"
            data-group-top-res-320-value="777"
            data-group-height-res-320-value="806"
            data-group-top-res-480-value="652"
            data-group-height-res-480-value="686"
            data-group-top-res-640-value="648"
            data-group-height-res-640-value="532"
            data-group-top-res-960-value="136"
            data-group-height-res-960-value="714"
          >
            <div class="tn-molecule" id="molecule-1786031818005000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327182011786031818006000021 t396__group-flex"
                data-group-id="1786031818006000021"
                data-group-top-value="100"
                data-group-heightmode="hug"
                data-group-height-value="54"
                data-group-top-res-320-value="777"
                data-group-height-res-320-value="64"
                data-group-top-res-480-value="652"
                data-group-height-res-480-value="64"
                data-group-top-res-640-value="648"
                data-group-height-res-640-value="54"
                data-group-top-res-960-value="136"
                data-group-height-res-960-value="68"
              >
                <div class="tn-molecule" id="molecule-1786031818006000021">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031889245000031"
                    data-elem-id="1786031889245000031"
                    data-elem-type="text"
                    data-field-top-value="124"
                    data-field-height-value="14"
                    data-field-top-res-320-value="801"
                    data-field-height-res-320-value="12"
                    data-field-top-res-480-value="676"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="672"
                    data-field-height-res-640-value="14"
                    data-field-top-res-960-value="160"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">What this CIS go-to-market program covers</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327182011786031818006000018 t396__group-flex"
                data-group-id="1786031818006000018"
                data-group-top-value="154"
                data-group-heightmode="hug"
                data-group-height-value="154"
                data-group-top-res-320-value="841"
                data-group-height-res-320-value="178"
                data-group-top-res-480-value="716"
                data-group-height-res-480-value="130"
                data-group-top-res-640-value="702"
                data-group-height-res-640-value="106"
                data-group-top-res-960-value="204"
                data-group-height-res-960-value="154"
              >
                <div class="tn-molecule" id="molecule-1786031818006000018">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031882137000030"
                    data-elem-id="1786031882137000030"
                    data-elem-type="image"
                    data-field-top-value="170"
                    data-field-height-value="24"
                    data-field-top-res-320-value="857"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="732"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="718"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="220"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-cefbe8f17d.svg"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031834436000023"
                    data-elem-id="1786031834436000023"
                    data-elem-type="text"
                    data-field-top-value="170"
                    data-field-height-value="96"
                    data-field-top-res-320-value="857"
                    data-field-height-res-320-value="96"
                    data-field-top-res-480-value="732"
                    data-field-height-res-480-value="96"
                    data-field-top-res-640-value="718"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="220"
                    data-field-height-res-960-value="120"
                  >
                    <div class="tn-atom">
                      <strong>Yandex &amp; Google SERP presence</strong> — built from zero for the
                      new name, not a Google-only build that ignores the engine that holds most of
                      the search market share in this region
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031818006000017"
                data-elem-id="1786031818006000017"
                data-elem-type="shape"
                data-field-top-value="308"
                data-field-height-value="1"
                data-field-top-res-320-value="1019"
                data-field-height-res-320-value="1"
                data-field-top-res-480-value="846"
                data-field-height-res-480-value="1"
                data-field-top-res-640-value="808"
                data-field-height-res-640-value="1"
                data-field-top-res-960-value="358"
                data-field-height-res-960-value="1"
              >
                <div class="tn-atom"></div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327182011786031818006000014 t396__group-flex"
                data-group-id="1786031818006000014"
                data-group-top-value="309"
                data-group-heightmode="hug"
                data-group-height-value="106"
                data-group-top-res-320-value="1020"
                data-group-height-res-320-value="130"
                data-group-top-res-480-value="847"
                data-group-height-res-480-value="106"
                data-group-top-res-640-value="809"
                data-group-height-res-640-value="82"
                data-group-top-res-960-value="359"
                data-group-height-res-960-value="106"
              >
                <div class="tn-molecule" id="molecule-1786031818006000014">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031874491000029"
                    data-elem-id="1786031874491000029"
                    data-elem-type="image"
                    data-field-top-value="325"
                    data-field-height-value="24"
                    data-field-top-res-320-value="1036"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="863"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="825"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="375"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-743caa8ee3.svg"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031840915000024"
                    data-elem-id="1786031840915000024"
                    data-elem-type="text"
                    data-field-top-value="325"
                    data-field-height-value="72"
                    data-field-top-res-320-value="1036"
                    data-field-height-res-320-value="96"
                    data-field-top-res-480-value="863"
                    data-field-height-res-480-value="120"
                    data-field-top-res-640-value="825"
                    data-field-height-res-640-value="96"
                    data-field-top-res-960-value="375"
                    data-field-height-res-960-value="72"
                  >
                    <div class="tn-atom">
                      <strong>VK, Telegram &amp; forum listening</strong> — live from day one, so
                      the first local mentions get caught where this audience actually talks
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031818005000013"
                data-elem-id="1786031818005000013"
                data-elem-type="shape"
                data-field-top-value="415"
                data-field-height-value="1"
                data-field-top-res-320-value="1150"
                data-field-height-res-320-value="1"
                data-field-top-res-480-value="953"
                data-field-height-res-480-value="1"
                data-field-top-res-640-value="891"
                data-field-height-res-640-value="1"
                data-field-top-res-960-value="465"
                data-field-height-res-960-value="1"
              >
                <div class="tn-atom"></div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327182011786031818005000010 t396__group-flex"
                data-group-id="1786031818005000010"
                data-group-top-value="416"
                data-group-heightmode="hug"
                data-group-height-value="106"
                data-group-top-res-320-value="1151"
                data-group-height-res-320-value="130"
                data-group-top-res-480-value="954"
                data-group-height-res-480-value="106"
                data-group-top-res-640-value="892"
                data-group-height-res-640-value="82"
                data-group-top-res-960-value="466"
                data-group-height-res-960-value="106"
              >
                <div class="tn-molecule" id="molecule-1786031818005000010">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031865795000028"
                    data-elem-id="1786031865795000028"
                    data-elem-type="image"
                    data-field-top-value="432"
                    data-field-height-value="24"
                    data-field-top-res-320-value="1167"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="970"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="908"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="482"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-833424e1c8.svg"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031847610000025"
                    data-elem-id="1786031847610000025"
                    data-elem-type="text"
                    data-field-top-value="432"
                    data-field-height-value="72"
                    data-field-top-res-320-value="1167"
                    data-field-height-res-320-value="96"
                    data-field-top-res-480-value="970"
                    data-field-height-res-480-value="120"
                    data-field-top-res-640-value="908"
                    data-field-height-res-640-value="96"
                    data-field-top-res-960-value="482"
                    data-field-height-res-960-value="72"
                  >
                    <div class="tn-atom">
                      <strong>Local business media placement</strong> — RBC, Kommersant, Vedomosti
                      and sector press, not one translated press release
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031818005000009"
                data-elem-id="1786031818005000009"
                data-elem-type="shape"
                data-field-top-value="522"
                data-field-height-value="1"
                data-field-top-res-320-value="1281"
                data-field-height-res-320-value="1"
                data-field-top-res-480-value="1060"
                data-field-height-res-480-value="1"
                data-field-top-res-640-value="974"
                data-field-height-res-640-value="1"
                data-field-top-res-960-value="572"
                data-field-height-res-960-value="1"
              >
                <div class="tn-atom"></div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327182011786031818005000006 t396__group-flex"
                data-group-id="1786031818005000006"
                data-group-top-value="523"
                data-group-heightmode="hug"
                data-group-height-value="130"
                data-group-top-res-320-value="1282"
                data-group-height-res-320-value="130"
                data-group-top-res-480-value="1061"
                data-group-height-res-480-value="130"
                data-group-top-res-640-value="975"
                data-group-height-res-640-value="82"
                data-group-top-res-960-value="573"
                data-group-height-res-960-value="130"
              >
                <div class="tn-molecule" id="molecule-1786031818005000006">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031818005000008"
                    data-elem-id="1786031818005000008"
                    data-elem-type="image"
                    data-field-top-value="539"
                    data-field-height-value="24"
                    data-field-top-res-320-value="1298"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="1077"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="991"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="589"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-611f08fbc9.svg"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031853258000026"
                    data-elem-id="1786031853258000026"
                    data-elem-type="text"
                    data-field-top-value="539"
                    data-field-height-value="72"
                    data-field-top-res-320-value="1298"
                    data-field-height-res-320-value="96"
                    data-field-top-res-480-value="1077"
                    data-field-height-res-480-value="96"
                    data-field-top-res-640-value="991"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="589"
                    data-field-height-res-960-value="96"
                  >
                    <div class="tn-atom">
                      <strong>Growth logic, not insurance</strong> — priced against market size and
                      the value of the market entered, not against a risk being hedged
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031818005000005"
                data-elem-id="1786031818005000005"
                data-elem-type="shape"
                data-field-top-value="653"
                data-field-height-value="1"
                data-field-top-res-320-value="1412"
                data-field-height-res-320-value="1"
                data-field-top-res-480-value="1191"
                data-field-height-res-480-value="1"
                data-field-top-res-640-value="1057"
                data-field-height-res-640-value="1"
                data-field-top-res-960-value="703"
                data-field-height-res-960-value="1"
              >
                <div class="tn-atom"></div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327182011786031818005000002 t396__group-flex"
                data-group-id="1786031818005000002"
                data-group-top-value="654"
                data-group-heightmode="hug"
                data-group-height-value="138"
                data-group-top-res-320-value="1413"
                data-group-height-res-320-value="162"
                data-group-top-res-480-value="1192"
                data-group-height-res-480-value="138"
                data-group-top-res-640-value="1058"
                data-group-height-res-640-value="114"
                data-group-top-res-960-value="704"
                data-group-height-res-960-value="138"
              >
                <div class="tn-molecule" id="molecule-1786031818005000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031818005000004"
                    data-elem-id="1786031818005000004"
                    data-elem-type="image"
                    data-field-top-value="670"
                    data-field-height-value="24"
                    data-field-top-res-320-value="1429"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="1208"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="1074"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="720"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-faf2382e87.svg"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786031858463000027"
                    data-elem-id="1786031858463000027"
                    data-elem-type="text"
                    data-field-top-value="670"
                    data-field-height-value="72"
                    data-field-top-res-320-value="1429"
                    data-field-height-res-320-value="96"
                    data-field-top-res-480-value="1208"
                    data-field-height-res-480-value="72"
                    data-field-top-res-640-value="1074"
                    data-field-height-res-640-value="48"
                    data-field-top-res-960-value="720"
                    data-field-height-res-960-value="96"
                  >
                    <div class="tn-atom">
                      <strong>Dedicated build team, not a self-serve dashboard</strong> —
                      local-market strategist and content team executing the build, plus platform
                      access
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__28327182011786001517354000001 t396__group-flex"
            data-group-id="1786001517354000001"
            data-group-top-value="712"
            data-group-heightmode="hug"
            data-group-height-value="88"
            data-group-top-res-320-value="633"
            data-group-height-res-320-value="104"
            data-group-top-res-480-value="527"
            data-group-height-res-480-value="85"
            data-group-top-res-640-value="520"
            data-group-height-res-640-value="88"
            data-group-top-res-960-value="764"
            data-group-height-res-960-value="110"
          >
            <div class="tn-molecule" id="molecule-1786001517354000001">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786001517354000003"
                data-elem-id="1786001517354000003"
                data-elem-type="button"
                data-field-top-value="712"
                data-field-height-value="54"
                data-field-top-res-320-value="633"
                data-field-height-res-320-value="54"
                data-field-top-res-480-value="527"
                data-field-height-res-480-value="54"
                data-field-top-res-640-value="520"
                data-field-height-res-640-value="54"
                data-field-top-res-960-value="764"
                data-field-height-res-960-value="54"
              >
                <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                  <div class="tn-atom__button-content">
                    <span class="tn-atom__button-text">Request a confidential audit</span>
                  </div>
                  <span class="tn-atom__button-border"></span>
                </a>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011786001517354000002"
                data-elem-id="1786001517354000002"
                data-elem-type="text"
                data-field-top-value="778"
                data-field-height-value="22"
                data-field-top-res-320-value="699"
                data-field-height-res-320-value="38"
                data-field-top-res-480-value="593"
                data-field-height-res-480-value="19"
                data-field-top-res-640-value="586"
                data-field-height-res-640-value="22"
                data-field-top-res-960-value="830"
                data-field-height-res-960-value="44"
              >
                <div class="tn-atom">
                  NDA from the first contact — every engagement, without exception
                </div>
              </div>
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__28327182011786002016874000001 t396__group-flex"
            data-group-id="1786002016874000001"
            data-group-top-value="144"
            data-group-heightmode="hug"
            data-group-height-value="477"
            data-group-top-res-320-value="129"
            data-group-height-res-320-value="480"
            data-group-top-res-480-value="128"
            data-group-height-res-480-value="367"
            data-group-top-res-640-value="126"
            data-group-height-res-640-value="362"
            data-group-top-res-960-value="136"
            data-group-height-res-960-value="489"
          >
            <div class="tn-molecule" id="molecule-1786002016874000001">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011782818395752000001"
                data-elem-id="1782818395752000001"
                data-elem-type="text"
                data-field-top-value="144"
                data-field-height-value="201"
                data-field-top-res-320-value="129"
                data-field-height-res-320-value="114"
                data-field-top-res-480-value="128"
                data-field-height-res-480-value="114"
                data-field-top-res-640-value="126"
                data-field-height-res-640-value="86"
                data-field-top-res-960-value="136"
                data-field-height-res-960-value="129"
              >
                <h1 class="tn-atom">Enter The CIS Market With The Local Field Already Built</h1>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327182011784612971124000001"
                data-elem-id="1784612971124000001"
                data-elem-type="text"
                data-field-top-value="369"
                data-field-height-value="252"
                data-field-top-res-320-value="259"
                data-field-height-res-320-value="450"
                data-field-top-res-480-value="220"
                data-field-height-res-480-value="350"
                data-field-top-res-640-value="236"
                data-field-height-res-640-value="308"
                data-field-top-res-960-value="289"
                data-field-height-res-960-value="336"
              >
                <div class="tn-atom">
                  The CIS information field runs on different infrastructure — Yandex alongside
                  Google, VK and Telegram instead of Meta, 2GIS and Otzovik instead of Trustpilot,
                  hh.ru instead of Glassdoor. We build the local profile this audience finds — in
                  the order that holds up here: local market analysis, then a communication
                  strategy, then creation and packaging — as one build run by a dedicated
                  market-entry team, not a translated global template.
                </div>
              </div>
            </div>
          </div>
          <div
            class="t396__elem tn-elem tn-elem__28327182011783938718278000002"
            data-elem-id="1783938718278000002"
            data-elem-type="text"
            data-field-top-value="90"
            data-field-height-value="14"
            data-field-top-res-320-value="80"
            data-field-height-res-320-value="25"
            data-field-top-res-480-value="80"
            data-field-height-res-480-value="24"
            data-field-top-res-640-value="80"
            data-field-height-res-640-value="28"
            data-field-top-res-960-value="90"
            data-field-height-res-960-value="28"
          >
            <div class="tn-atom">Go-to-Market Strategy · CIS</div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2887350701"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f3f3f3"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              What problems we help to resolve
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Signs Your Go-to-market Strategy Is&nbsp;Missing The CIS Layer
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2886349201"
      class="r t-rec t-rec_pt_45 t-rec_pt-res-480_15 t-rec_pb_90 t-rec_pb-res-480_90"
      style="padding-top: 45px; padding-bottom: 90px; background-color: #f2f2f2"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="4"
          style="--column-margin: 20px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__7598461198050"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-8b5574e7ef.svg&quot;);
                      background-image: url(&quot;/images/service-8b5574e7ef.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-8b5574e7ef.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Built for Google, not Yandex
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    The global SEO build looks solid — and returns almost nothing on Yandex, which
                    holds the larger market share of search across the CIS.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__8768461198051"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-943c1e87ed.svg&quot;);
                      background-image: url(&quot;/images/service-943c1e87ed.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-943c1e87ed.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Listening on the wrong platforms
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Monitoring is set up for Meta and X — while this audience's actual conversation
                    runs on VK, Telegram and local forums, unwatched.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__8768461198052"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-0413ac8982.svg&quot;);
                      background-image: url(&quot;/images/service-0413ac8982.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-0413ac8982.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    One translated press release
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Launch communications are a global release run through translation — not a
                    narrative built for what RBC, Kommersant or Vedomosti cover.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786363965619"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-4baf4c4b9f.svg&quot;);
                      background-image: url(&quot;/images/service-4baf4c4b9f.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-4baf4c4b9f.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    No local review footprint
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Candidates check hh.ru, customers check 2GIS and Otzovik for a signal of
                    satisfaction — and find a listing with zero history, while the global page looks
                    built.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section
      id="rec2888294201"
      class="r t-rec t-rec_pt_90 t-rec_pt-res-480_15"
      style="padding-top: 90px"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              What's included
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              What It Takes To Enter The CIS Market From Zero
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2832718501"
      class="r t-rec t-rec_pt_45 t-rec_pt-res-480_15"
      style="padding-top: 45px"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="273"
          data-artboard-height-res-320="754"
          data-artboard-height-res-480="588"
          data-artboard-height-res-640="565"
          data-artboard-height-res-960="364"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__28327185011785942269422000001 t396__group-flex"
            data-group-id="1785942269422000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="273"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="754"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="588"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="565"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="364"
          >
            <div class="tn-molecule" id="molecule-1785942269422000001">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327185011782901434363000135"
                data-elem-id="1782901434363000135"
                data-elem-type="text"
                data-field-top-value="0"
                data-field-height-value="224"
                data-field-top-res-320-value="0"
                data-field-height-res-320-value="125"
                data-field-top-res-480-value="0"
                data-field-height-res-480-value="100"
                data-field-top-res-640-value="0"
                data-field-height-res-640-value="196"
                data-field-top-res-960-value="0"
                data-field-height-res-960-value="280"
              >
                <div class="tn-atom">
                  A launch press release run through translation fades inside a news cycle. What
                  this market indexes — and what an AI assistant reads back about the new name — is
                  whatever Yandex and Google results, VK/Telegram mentions and local media coverage
                  exist six months later.<br /><br /><span
                    class="ql-undercut"
                    contenteditable="false"
                    style="--undercut-color: #000000; --undercut-style: none"
                    >﻿<span contenteditable="false">Show more</span>﻿</span
                  >
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327185011784118002646000004 t396__group-flex"
                data-group-id="1784118002646000004"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="273"
                data-group-top-res-320-value="390"
                data-group-height-res-320-value="364"
                data-group-top-res-480-value="315"
                data-group-height-res-480-value="273"
                data-group-top-res-640-value="292"
                data-group-height-res-640-value="273"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="364"
              >
                <div class="tn-molecule" id="molecule-1784118002646000004">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327185011784118082304000006"
                    data-elem-id="1784118082304000006"
                    data-elem-type="image"
                    data-field-top-value="0"
                    data-field-height-value="273"
                    data-field-top-res-320-value="390"
                    data-field-height-res-320-value="364"
                    data-field-top-res-480-value="315"
                    data-field-height-res-480-value="273"
                    data-field-top-res-640-value="292"
                    data-field-height-res-640-value="273"
                    data-field-top-res-960-value="0"
                    data-field-height-res-960-value="364"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/situation-e36611b6d7efc0.png"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__28327185011784117535592000002 t396__group-flex"
                    data-group-id="1784117535592000002"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="273"
                    data-group-top-res-320-value="390"
                    data-group-height-res-320-value="364"
                    data-group-top-res-480-value="315"
                    data-group-height-res-480-value="273"
                    data-group-top-res-640-value="292"
                    data-group-height-res-640-value="273"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="364"
                  >
                    <div
                      class="tn-molecule t-bgimg"
                      id="molecule-1784117535592000002"
                      style="
                        background-image: url(&quot;/images/service-49aaa5f9d5.png&quot;);
                        background-image: url(&quot;/images/service-49aaa5f9d5.png&quot;);
                      "
                    >
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327185011784117535593000005"
                        data-elem-id="1784117535593000005"
                        data-elem-type="text"
                        data-field-top-value="24"
                        data-field-height-value="112"
                        data-field-top-res-320-value="410"
                        data-field-height-res-320-value="250"
                        data-field-top-res-480-value="339"
                        data-field-height-res-480-value="72"
                        data-field-top-res-640-value="316"
                        data-field-height-res-640-value="140"
                        data-field-top-res-960-value="24"
                        data-field-height-res-960-value="196"
                      >
                        <div class="tn-atom">
                          What this market indexes — and what an AI assistant reads back about the
                          new name — is whatever Yandex and Google results, VK/Telegram mentions and
                          local media coverage exist six months later.
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327185011784117535593000003"
                        data-elem-id="1784117535593000003"
                        data-elem-type="text"
                        data-field-top-value="227"
                        data-field-height-value="22"
                        data-field-top-res-320-value="696"
                        data-field-height-res-320-value="38"
                        data-field-top-res-480-value="545"
                        data-field-height-res-480-value="48"
                        data-field-top-res-640-value="519"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="296"
                        data-field-height-res-960-value="44"
                      >
                        <div class="tn-atom">Go-to-Market Strategy · CIS — this page's program</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2887056501"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_45"
      style="padding-top: 60px"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="4"
          style="--column-margin: 20px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #f4f8f2">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__4128863492010"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-89fda118d0.svg&quot;);
                      background-image: url(&quot;/images/service-89fda118d0.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-89fda118d0.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Local market research baseline
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    VK, Telegram and forum listening set up before there's anything to listen to,
                    read against local search patterns and the market players already there.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #f4f8f2">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__4128863492011"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-bcc55975c3.svg&quot;);
                      background-image: url(&quot;/images/service-bcc55975c3.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-bcc55975c3.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Yandex &amp; Google SERP build
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Proactive search presence built for both engines, following the communication
                    strategy and aimed at the key market queries that matter.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #f4f8f2">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__4128863492012"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-0413ac8982.svg&quot;);
                      background-image: url(&quot;/images/service-0413ac8982.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-0413ac8982.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Local media placement
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Content and coverage created and packaged for RBC, Kommersant, Vedomosti and
                    sector press — not a global release localized after the fact.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #f4f8f2">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__4128863492013"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-8609ae939f.svg&quot;);
                      background-image: url(&quot;/images/service-8609ae939f.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-8609ae939f.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Dedicated build strategist
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    A CIS-market strategist and content team scoping and executing the build — not
                    four vendors for Yandex SEO, VK/Telegram listening, local PR and content.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec2889030001" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t-cover-outer">
        <div
          class="t-cover"
          id="recorddiv2889030001"
          bgimgfield="img"
          style="height: 40vh; background-image: url(&quot;/images/service-d7dc4da04f.png&quot;)"
        >
          <div
            class="t-cover__carrier"
            id="coverCarry2889030001"
            style="
              height: 40vh;
              background-attachment: scroll;
              background-image: url(&quot;/images/service-d7dc4da04f.png&quot;);
            "
            itemscope
            itemtype="http://schema.org/ImageObject"
          >
            <meta itemprop="image" content="/images/service-d7dc4da04f.png" />
          </div>
          <div
            class="t-cover__filter"
            style="height: 40vh; background-color: #000; opacity: 0"
          ></div>
          <div class="t164">
            <div class="t-container">
              <div class="t-cover__wrapper t-valign_middle" style="height: 40vh">
                <div class="t-col t-col_12 t-align_left">
                  <div>
                    <div class="t164__wrapper">
                      <div class="t164__descr t-descr t-descr_xxxl">
                        End-to-end build for a new market or brand
                      </div>
                      <div class="t164__text t-text t-text_md">
                        This program runs Yandex/Google search presence, VK/Telegram mention
                        monitoring and local media placement under one retainer or scoped project,
                        not a campaign that goes quiet after launch week. Once the market is
                        established, ongoing management moves to Search Engine Reputation Management
                        or Brand Reputation &amp; Narrative Management.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2918334501"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f2f2f2"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              Regional specifics
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              What's Actually Different About&nbsp;The&nbsp;CIS Market Landscape
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t-text t-text_md">
              A go-to-market build ported from a Western template misses the infrastructure this
              audience actually uses. Four layers of the information field change, not just the
              language.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2889259201"
      class="r t-rec t-rec_pt_60 t-rec_pb_90"
      style="padding-top: 60px; padding-bottom: 90px; background-color: #f2f2f2"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="4"
          style="--column-margin: 20px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__9428863492010"
                    style="
                      width: 32px;
                      height: 32px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-bcc55975c3.svg&quot;);
                      background-image: url(&quot;/images/service-bcc55975c3.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-bcc55975c3.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Search: Yandex, not Just Google
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Yandex holds the larger market share of search across the CIS — a build tuned
                    only for Google leaves the region's default engine untouched.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__9428863492011"
                    style="
                      width: 32px;
                      height: 32px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-89fda118d0.svg&quot;);
                      background-image: url(&quot;/images/service-89fda118d0.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-89fda118d0.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Social: VK and Telegram, Not Meta
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    The conversation runs on VK and Telegram channels — monitoring scoped to
                    Instagram or X misses where this market reacts first.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__9428863492012"
                    style="
                      width: 32px;
                      height: 32px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-0413ac8982.svg&quot;);
                      background-image: url(&quot;/images/service-0413ac8982.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-0413ac8982.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Reviews: 2GIS, Otzovik, hh.ru
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Consumer trust runs through 2GIS and Otzovik; employer reputation through hh.ru
                    — a Trustpilot-and-Glassdoor build leaves these platforms empty.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__9428863492013"
                    style="
                      width: 32px;
                      height: 32px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-4baf4c4b9f.svg&quot;);
                      background-image: url(&quot;/images/service-4baf4c4b9f.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-4baf4c4b9f.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Media: RBC, Kommersant, Vedomosti
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Business credibility is read through RBC, Kommersant, Vedomosti and sector
                    titles — a translated release rarely lands where due-diligence teams check.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec2889438201" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              How we're different
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              CIS Market Growth Infrastructure, Not&nbsp;A&nbsp;Translated Campaign
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t-text t-text_md">
              Most market-entry spend here is a global launch plan run through a translation vendor,
              then it stops. This is built to still be running the Yandex/Google presence, the
              VK/Telegram baseline and the RBC/Kommersant relationships six months after launch
              week.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2910042501"
      class="r t-rec t-rec_pt_60 t-rec_pb_90"
      style="padding-top: 60px; padding-bottom: 90px"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="476"
          data-artboard-height-res-320="476"
          data-artboard-height-res-480="500"
          data-artboard-height-res-640="476"
          data-artboard-height-res-960="640"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group scroll-block tn-group__29100425011783695484064000001 t396__group-flex"
            data-group-id="1783695484064000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="476"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="476"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="500"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="476"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="640"
          >
            <div class="tn-molecule" id="molecule-1783695484064000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__29100425011786114684134000003 t396__group-flex"
                data-group-id="1786114684134000003"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="476"
                data-group-height-res-320-value="476"
                data-group-height-res-480-value="500"
                data-group-height-res-640-value="476"
                data-group-height-res-960-value="640"
              >
                <div class="tn-molecule" id="molecule-1786114684134000003">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__29100425011783513292833000049 t396__group-flex"
                    data-group-id="1783513292833000049"
                    data-group-top-value="0"
                    data-group-heightmode="hug"
                    data-group-height-value="476"
                    data-group-top-res-320-value="0"
                    data-group-height-res-320-value="476"
                    data-group-top-res-480-value="0"
                    data-group-height-res-480-value="500"
                    data-group-top-res-640-value="0"
                    data-group-height-res-640-value="476"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="640"
                  >
                    <div class="tn-molecule" id="molecule-1783513292833000049">
                      <div
                        class="t396__group tn-group border-2 t396__elem-flex tn-group__29100425011783513193105000002 t396__group-flex"
                        data-group-id="1783513193105000002"
                        data-group-top-value="0"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="0"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="0"
                        data-group-height-res-480-value="74"
                        data-group-top-res-640-value="0"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="0"
                        data-group-height-res-960-value="94"
                      >
                        <div class="tn-molecule" id="molecule-1783513193105000002">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783513193106000013 t396__group-flex"
                            data-group-id="1783513193106000013"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="94"
                          >
                            <div class="tn-molecule" id="molecule-1783513193106000013">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783513193106000016"
                                data-elem-id="1783513193106000016"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  <span style="color: rgb(249, 249, 249)">A</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523650876000042 t396__group-flex"
                            data-group-id="1783523650876000042"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="94"
                          >
                            <div class="tn-molecule" id="molecule-1783523650876000042">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523650876000043"
                                data-elem-id="1783523650876000043"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Translation / localization vendor</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011784121114038000020"
                                data-elem-id="1784121114038000020"
                                data-elem-type="text"
                                data-field-top-value="36"
                                data-field-height-value="22"
                                data-field-top-res-320-value="36"
                                data-field-height-res-320-value="19"
                                data-field-top-res-480-value="36"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="36"
                                data-field-height-res-640-value="22"
                                data-field-top-res-960-value="36"
                                data-field-height-res-960-value="44"
                              >
                                <div class="tn-atom">ports the global launch as-is</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011784121134657000021 t396__group-flex"
                            data-group-id="1784121134657000021"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="94"
                          >
                            <div class="tn-molecule" id="molecule-1784121134657000021">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011784121134658000023"
                                data-elem-id="1784121134658000023"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">In-house marketing team</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011784121134658000022"
                                data-elem-id="1784121134658000022"
                                data-elem-type="text"
                                data-field-top-value="36"
                                data-field-height-value="22"
                                data-field-top-res-320-value="36"
                                data-field-height-res-320-value="19"
                                data-field-top-res-480-value="36"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="36"
                                data-field-height-res-640-value="22"
                                data-field-top-res-960-value="36"
                                data-field-height-res-960-value="44"
                              >
                                <div class="tn-atom">handling entry alongside everything else</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523652331000044 t396__group-flex"
                            data-group-id="1783523652331000044"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="94"
                          >
                            <div class="tn-molecule" id="molecule-1783523652331000044">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523652331000045"
                                data-elem-id="1783523652331000045"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="48"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">Go-to-Market Strategy · CIS</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29100425011783523714786000046 t396__group-flex"
                        data-group-id="1783523714786000046"
                        data-group-top-value="74"
                        data-group-heightmode="hug"
                        data-group-height-value="98"
                        data-group-top-res-320-value="74"
                        data-group-height-res-320-value="98"
                        data-group-top-res-480-value="74"
                        data-group-height-res-480-value="98"
                        data-group-top-res-640-value="74"
                        data-group-height-res-640-value="98"
                        data-group-top-res-960-value="94"
                        data-group-height-res-960-value="122"
                      >
                        <div class="tn-molecule" id="molecule-1783523714786000046">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523714787000055 t396__group-flex"
                            data-group-id="1783523714787000055"
                            data-group-top-value="74"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="74"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="74"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="74"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="94"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523714787000055">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523714787000056"
                                data-elem-id="1783523714787000056"
                                data-elem-type="text"
                                data-field-top-value="86"
                                data-field-height-value="24"
                                data-field-top-res-320-value="86"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="86"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="86"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="106"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">What it does</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523714787000053 t396__group-flex"
                            data-group-id="1783523714787000053"
                            data-group-top-value="74"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="74"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="74"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="74"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="94"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523714787000053">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523714787000054"
                                data-elem-id="1783523714787000054"
                                data-elem-type="text"
                                data-field-top-value="86"
                                data-field-height-value="72"
                                data-field-top-res-320-value="86"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="86"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="86"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="106"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  Translates existing copy and press materials word-for-word
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523714787000049 t396__group-flex"
                            data-group-id="1783523714787000049"
                            data-group-top-value="74"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="74"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="74"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="74"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="94"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523714787000049">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523714787000050"
                                data-elem-id="1783523714787000050"
                                data-elem-type="text"
                                data-field-top-value="86"
                                data-field-height-value="48"
                                data-field-top-res-320-value="86"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="86"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="86"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="106"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Builds presence ad hoc, without dedicated CIS-market
                                  infrastructure
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523714786000047 t396__group-flex"
                            data-group-id="1783523714786000047"
                            data-group-top-value="74"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="74"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="74"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="74"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="94"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523714786000047">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523714787000048"
                                data-elem-id="1783523714787000048"
                                data-elem-type="text"
                                data-field-top-value="86"
                                data-field-height-value="72"
                                data-field-top-res-320-value="86"
                                data-field-height-res-320-value="72"
                                data-field-top-res-480-value="86"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="86"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="106"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Builds Yandex/Google presence, VK/Telegram monitoring and local
                                  media placement as one program
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29100425011783523842699000059 t396__group-flex"
                        data-group-id="1783523842699000059"
                        data-group-top-value="172"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="172"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="172"
                        data-group-height-res-480-value="74"
                        data-group-top-res-640-value="172"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="216"
                        data-group-height-res-960-value="98"
                      >
                        <div class="tn-molecule" id="molecule-1783523842699000059">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523842699000068 t396__group-flex"
                            data-group-id="1783523842699000068"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="172"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="172"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="172"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="216"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000068">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523842699000069"
                                data-elem-id="1783523842699000069"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="24"
                                data-field-top-res-320-value="184"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="184"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="184"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="228"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Who acts on it</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523842699000066 t396__group-flex"
                            data-group-id="1783523842699000066"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="172"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="172"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="172"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="216"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000066">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523842699000067"
                                data-elem-id="1783523842699000067"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="48"
                                data-field-top-res-320-value="184"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="184"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="184"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="228"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  A translation vendor, not a market strategist
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523842699000062 t396__group-flex"
                            data-group-id="1783523842699000062"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="172"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="172"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="172"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="216"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000062">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523842699000063"
                                data-elem-id="1783523842699000063"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="48"
                                data-field-top-res-320-value="184"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="184"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="184"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="228"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  The marketing team, alongside everything else already on their
                                  plate
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523842699000060 t396__group-flex"
                            data-group-id="1783523842699000060"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="172"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="172"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="172"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="216"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000060">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523842699000061"
                                data-elem-id="1783523842699000061"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="48"
                                data-field-top-res-320-value="184"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="184"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="184"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="228"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  A dedicated CIS market-entry team, for the length of the build
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29100425011783523852780000074 t396__group-flex"
                        data-group-id="1783523852780000074"
                        data-group-top-value="246"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="246"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="246"
                        data-group-height-res-480-value="74"
                        data-group-top-res-640-value="246"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="314"
                        data-group-height-res-960-value="98"
                      >
                        <div class="tn-molecule" id="molecule-1783523852780000074">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523852781000083 t396__group-flex"
                            data-group-id="1783523852781000083"
                            data-group-top-value="246"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="246"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="246"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="246"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="314"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000083">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523852781000084"
                                data-elem-id="1783523852781000084"
                                data-elem-type="text"
                                data-field-top-value="258"
                                data-field-height-value="24"
                                data-field-top-res-320-value="258"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="258"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="258"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="326"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Coverage</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523852781000081 t396__group-flex"
                            data-group-id="1783523852781000081"
                            data-group-top-value="246"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="246"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="246"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="246"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="314"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000081">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523852781000082"
                                data-elem-id="1783523852781000082"
                                data-elem-type="text"
                                data-field-top-value="258"
                                data-field-height-value="48"
                                data-field-top-res-320-value="258"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="258"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="258"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="326"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  Translated copy only — not Yandex SEO, VK/Telegram or local press
                                  relationships
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523852781000077 t396__group-flex"
                            data-group-id="1783523852781000077"
                            data-group-top-value="246"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="246"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="246"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="246"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="314"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000077">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523852781000078"
                                data-elem-id="1783523852781000078"
                                data-elem-type="text"
                                data-field-top-value="258"
                                data-field-height-value="48"
                                data-field-top-res-320-value="258"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="258"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="258"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="326"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Whatever bandwidth allows, with no measurement baseline
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523852781000075 t396__group-flex"
                            data-group-id="1783523852781000075"
                            data-group-top-value="246"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="246"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="246"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="246"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="314"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000075">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523852781000076"
                                data-elem-id="1783523852781000076"
                                data-elem-type="text"
                                data-field-top-value="258"
                                data-field-height-value="48"
                                data-field-top-res-320-value="258"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="258"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="258"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="326"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Yandex/Google, VK/Telegram and local business media, measured
                                  against a zero baseline from day one
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29100425011783523855016000085 t396__group-flex"
                        data-group-id="1783523855016000085"
                        data-group-top-value="320"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="320"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="320"
                        data-group-height-res-480-value="74"
                        data-group-top-res-640-value="320"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="412"
                        data-group-height-res-960-value="98"
                      >
                        <div class="tn-molecule" id="molecule-1783523855016000085">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523855016000094 t396__group-flex"
                            data-group-id="1783523855016000094"
                            data-group-top-value="320"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="320"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="320"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="320"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="412"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523855016000094">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523855016000095"
                                data-elem-id="1783523855016000095"
                                data-elem-type="text"
                                data-field-top-value="332"
                                data-field-height-value="24"
                                data-field-top-res-320-value="332"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="332"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="332"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="424"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Pricing model</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523855016000092 t396__group-flex"
                            data-group-id="1783523855016000092"
                            data-group-top-value="320"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="320"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="320"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="320"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="412"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523855016000092">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523855016000093"
                                data-elem-id="1783523855016000093"
                                data-elem-type="text"
                                data-field-top-value="332"
                                data-field-height-value="48"
                                data-field-top-res-320-value="332"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="332"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="332"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="424"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  Per-word or per-asset translation fee, ends when the copy is
                                  delivered
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523855016000088 t396__group-flex"
                            data-group-id="1783523855016000088"
                            data-group-top-value="320"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="320"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="320"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="320"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="412"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523855016000088">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523855016000089"
                                data-elem-id="1783523855016000089"
                                data-elem-type="text"
                                data-field-top-value="332"
                                data-field-height-value="48"
                                data-field-top-res-320-value="332"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="332"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="332"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="424"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Absorbed into existing headcount, no dedicated budget line
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523855016000086 t396__group-flex"
                            data-group-id="1783523855016000086"
                            data-group-top-value="320"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="320"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="320"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="320"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="412"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523855016000086">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523855016000087"
                                data-elem-id="1783523855016000087"
                                data-elem-type="text"
                                data-field-top-value="332"
                                data-field-height-value="48"
                                data-field-top-res-320-value="332"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="332"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="332"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="424"
                                data-field-height-res-960-value="72"
                              >
                                <div class="tn-atom">
                                  Retainer or scoped project, scaled to market size, not to a fixed
                                  campaign fee
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__29100425011783523907538000098 t396__group-flex"
                        data-group-id="1783523907538000098"
                        data-group-top-value="394"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="394"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="394"
                        data-group-height-res-480-value="98"
                        data-group-top-res-640-value="394"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="510"
                        data-group-height-res-960-value="122"
                      >
                        <div class="tn-molecule" id="molecule-1783523907538000098">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523907538000107 t396__group-flex"
                            data-group-id="1783523907538000107"
                            data-group-top-value="394"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="394"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="394"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="394"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="510"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000107">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523907539000108"
                                data-elem-id="1783523907539000108"
                                data-elem-type="text"
                                data-field-top-value="406"
                                data-field-height-value="48"
                                data-field-top-res-320-value="406"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="406"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="406"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="522"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Analytical foundation</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523907538000105 t396__group-flex"
                            data-group-id="1783523907538000105"
                            data-group-top-value="394"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="394"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="394"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="394"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="510"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000105">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523907538000106"
                                data-elem-id="1783523907538000106"
                                data-elem-type="text"
                                data-field-top-value="406"
                                data-field-height-value="48"
                                data-field-top-res-320-value="406"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="406"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="406"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="522"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">Language accuracy, not market behaviour</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523907538000101 t396__group-flex"
                            data-group-id="1783523907538000101"
                            data-group-top-value="394"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="394"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="394"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="394"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="510"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000101">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523907538000102"
                                data-elem-id="1783523907538000102"
                                data-elem-type="text"
                                data-field-top-value="406"
                                data-field-height-value="48"
                                data-field-top-res-320-value="406"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="406"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="406"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="522"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  Internal knowledge of the home market only
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29100425011783523907538000099 t396__group-flex"
                            data-group-id="1783523907538000099"
                            data-group-top-value="394"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="394"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="394"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="394"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="510"
                            data-group-height-res-960-value="122"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000099">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29100425011783523907538000100"
                                data-elem-id="1783523907538000100"
                                data-elem-type="text"
                                data-field-top-value="406"
                                data-field-height-value="48"
                                data-field-top-res-320-value="406"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="406"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="406"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="522"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  RH Research Center market data across 2M+ mentions and 39 global
                                  brands
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2890205701"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f3f3f3"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              Who it's for
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Built For Whoever Owns The
              <span style="color: rgb(96, 108, 89)">CIS Market Entry</span>
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2890357401"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_90 t-rec_pb-res-480_90"
      style="padding-top: 60px; padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="3"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong>CEO &amp; Founder</strong>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <span style="font-size: 14px"
                      >Entering a CIS market, or launching a new brand there</span
                    ><br /><br />
                    <ul>
                      <li>
                        A coherent Yandex, VK and media profile in place before the market starts
                        asking questions
                      </li>
                      <li>
                        Search, mentions and media placement built to the same standard as the home
                        market, not translated
                      </li>
                      <li>
                        Weekly visibility into how the new footprint is forming, not a report after
                        launch
                      </li>
                    </ul>
                    <br /><em style="color: rgb(96, 108, 89)"
                      >“I don't want our first real impression in this market to be whatever happens
                      to rank on Yandex. I want it built on purpose.”</em
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong>Head of Marketing / Growth</strong>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <span style="font-size: 14px"
                      >Owns the CIS market entry plan across channels</span
                    ><br /><br />
                    <ul>
                      <li>
                        One team coordinating Yandex/Google, VK/Telegram and media instead of a
                        translation vendor plus three others
                      </li>
                      <li>A measurable baseline from day one, not a launch-week vanity metric</li>
                      <li>A build that keeps running after the press cycle ends</li>
                    </ul>
                    <br /><em style="color: rgb(96, 108, 89)"
                      >“Launch day gets all the budget and none of the follow-through. I need the
                      follow-through.”</em
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong>Regional / Country Manager</strong>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <span style="font-size: 14px">Accountable for the CIS market specifically</span
                    ><br /><br />
                    <ul>
                      <li>
                        A build native to Yandex, VK and local media, not a global template
                        translated word-for-word
                      </li>
                      <li>Early warning on the first mentions and reviews as the market reacts</li>
                      <li>
                        A partner who has run this exact transition before, elsewhere in the region
                      </li>
                    </ul>
                    <br /><em style="color: rgb(96, 108, 89)"
                      >“Head office measures the launch. I have to live with what this market
                      actually finds on Yandex afterward.”</em
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec2891048501" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              What we do
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              From First Contact To A Working CIS Footprint
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2890801601"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30"
      style="padding-top: 60px"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="3"
          style="--column-margin: 40px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <span style="font-size: 18px; font-weight: 400; color: rgb(244, 248, 242)"
                      >01</span
                    ><br /><br />Local market analysis
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    A baseline audit across Google, Yandex, VK/Telegram and local business media —
                    audience behavior, competitors and regional search patterns, mapped before
                    anything gets spent.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <span style="font-size: 18px; font-weight: 400; color: rgb(244, 248, 242)"
                      >02</span
                    ><br /><br />Communication strategy
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    What gets built first on Yandex and Google, what gets monitored on VK and
                    Telegram, which media targets matter — priced to the entry, not a generic
                    package.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <span style="font-size: 18px; font-weight: 400; color: rgb(244, 248, 242)"
                      >03</span
                    ><br /><br />Creation &amp; packaging
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Content, narrative and media assets packaged for the CIS market — adapted to the
                    region's language and media habits, not a translated global template.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <span style="color: rgb(244, 248, 242); font-weight: 400; font-size: 18px"
                      >04</span
                    ><br /><br />Launch &amp; platform access
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Yandex/Google search and VK/Telegram monitoring go live with the first media
                    placements — and the Risk Control Center login opens.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_4 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <span style="font-size: 18px; font-weight: 400; color: rgb(244, 248, 242)"
                      >05</span
                    ><br /><br />Continuous operation
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Search presence and the mention baseline get shaped in real time as the market
                    moves, not reported on once after launch.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec2891316901" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t-cover-outer">
        <div
          class="t-cover"
          id="recorddiv2891316901"
          bgimgfield="img"
          style="height: 200px; background-image: url(&quot;/images/service-d7dc4da04f.png&quot;)"
        >
          <div
            class="t-cover__carrier"
            id="coverCarry2891316901"
            style="
              height: 200px;
              background-attachment: scroll;
              background-image: url(&quot;/images/service-d7dc4da04f.png&quot;);
            "
            itemscope
            itemtype="http://schema.org/ImageObject"
          >
            <meta itemprop="image" content="/images/service-d7dc4da04f.png" />
          </div>
          <div
            class="t-cover__filter"
            style="
              height: 200px;
              background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
            "
          ></div>
          <div class="t-container">
            <div class="t-col t-col_7">
              <div
                class="t-cover__wrapper t-valign_middle"
                style="height: 200px; position: relative; z-index: 1"
              >
                <div class="t189">
                  <div>
                    <div class="t189__wrapper">
                      <div class="t189__title t-title">Scope your CIS market entry strategy</div>
                      <div class="t189__descr t-descr t-descr_sm">
                        Tell us the market or brand you're building into. We'll map what exists on
                        Yandex, Google, VK/Telegram and in local business media, and scope the
                        build.
                      </div>
                      <div class="t189__buttons-wrapper">
                        <a
                          class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md"
                          href="#consultation"
                          @click.prevent="openConsultation()"
                          ><span class="t-btnflex__text">Request a confidential audit</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2891468701"
      class="r t-rec t-rec_pt_75"
      style="padding-top: 75px; background-color: #ddecd7"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              Inside Your Build Modules
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              What Market Data You Get Access To From Day One
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t-text t-text_md">
              This retainer runs on two modules of the Risk Control Center — Search Results and
              Social Listening — the same screen your build team works from, scoped to the new
              market or brand specifically.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2832719901"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_90 t-rec_pb-res-480_45"
      style="padding-top: 60px; padding-bottom: 90px; background-color: #ddecd7"
      data-module-slide="0"
      v-show="activeModule === 0"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="431"
          data-artboard-height-res-320="591"
          data-artboard-height-res-480="630"
          data-artboard-height-res-640="722"
          data-artboard-height-res-960="352"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__elem tn-elem tn-elem__28327199011784736906769"
            data-elem-id="1784736906769"
            data-elem-type="image"
            data-field-top-value="0"
            data-field-height-value="429"
            data-field-height-res-320-value="233"
            data-field-height-res-480-value="298"
            data-field-height-res-640-value="404"
            data-field-height-res-960-value="352"
          >
            <div class="tn-atom">
              <img
                class="tn-atom__img t-img"
                src="/images/service-c8e5009e81.webp"
                alt=""
                loading="eager"
              />
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__28327199011784738760510000013 t396__group-flex"
            data-group-id="1784738760510000013"
            data-group-top-value="2"
            data-group-heightmode="fixed"
            data-group-height-value="429"
            data-group-top-res-320-value="241"
            data-group-height-res-320-value="350"
            data-group-top-res-480-value="310"
            data-group-height-res-480-value="320"
            data-group-top-res-640-value="412"
            data-group-height-res-640-value="310"
            data-group-top-res-960-value="2"
            data-group-height-res-960-value="348"
          >
            <div class="tn-molecule" id="molecule-1784738760510000013">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327199011784738760512000026 t396__group-flex"
                data-group-id="1784738760512000026"
                data-group-top-value="34"
                data-group-heightmode="fill"
                data-group-height-value="268"
                data-group-top-res-320-value="261"
                data-group-height-res-320-value="221"
                data-group-top-res-480-value="330"
                data-group-height-res-480-value="173"
                data-group-top-res-640-value="432"
                data-group-height-res-640-value="149"
                data-group-top-res-960-value="22"
                data-group-height-res-960-value="201"
              >
                <div class="tn-molecule" id="molecule-1784738760512000026">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784738943273000046"
                    data-elem-id="1784738943273000046"
                    data-elem-type="image"
                    data-field-top-value="34"
                    data-field-height-value="40"
                    data-field-top-res-320-value="261"
                    data-field-height-res-320-value="28"
                    data-field-top-res-480-value="330"
                    data-field-height-res-480-value="28"
                    data-field-top-res-640-value="432"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="22"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-cefbe8f17d.svg"
                        alt="Star"
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784738760512000028"
                    data-elem-id="1784738760512000028"
                    data-elem-type="text"
                    data-field-top-value="90"
                    data-field-height-value="28"
                    data-field-top-res-320-value="301"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="370"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="472"
                    data-field-height-res-640-value="25"
                    data-field-top-res-960-value="58"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom">Search Results</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784738760512000027"
                    data-elem-id="1784738760512000027"
                    data-elem-type="text"
                    data-field-top-value="134"
                    data-field-height-value="110"
                    data-field-top-res-320-value="338"
                    data-field-height-res-320-value="144"
                    data-field-top-res-480-value="407"
                    data-field-height-res-480-value="96"
                    data-field-top-res-640-value="509"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="91"
                    data-field-height-res-960-value="120"
                  >
                    <div class="tn-atom">
                      What the new market sees on page one of Yandex and Google for the name,
                      colour-coded by sentiment — built and tracked from the first result onward,
                      not audited after the fact.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784811654174"
                data-elem-id="1784811654174"
                data-elem-type="shape"
                data-field-top-value="326"
                data-field-height-value="1"
                data-field-top-res-320-value="505"
                data-field-height-res-320-value="1"
                data-field-top-res-480-value="535"
                data-field-height-res-480-value="1"
                data-field-top-res-640-value="618"
                data-field-height-res-640-value="1"
                data-field-top-res-960-value="253"
                data-field-height-res-960-value="1"
              >
                <div class="tn-atom"></div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327199011784811520227000002 t396__group-flex"
                data-group-id="1784811520227000002"
                data-group-top-value="351"
                data-group-heightmode="hug"
                data-group-height-value="48"
                data-group-top-res-320-value="529"
                data-group-height-res-320-value="40"
                data-group-top-res-480-value="568"
                data-group-height-res-480-value="40"
                data-group-top-res-640-value="656"
                data-group-height-res-640-value="44"
                data-group-top-res-960-value="284"
                data-group-height-res-960-value="44"
              >
                <div class="tn-molecule" id="molecule-1784811520227000002">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__28327199011784811520227000006 t396__group-flex"
                    data-group-id="1784811520227000006"
                    data-group-top-value="353"
                    data-group-heightmode="hug"
                    data-group-height-value="44"
                    data-group-top-res-320-value="530"
                    data-group-height-res-320-value="38"
                    data-group-top-res-480-value="569"
                    data-group-height-res-480-value="38"
                    data-group-top-res-640-value="656"
                    data-group-height-res-640-value="44"
                    data-group-top-res-960-value="284"
                    data-group-height-res-960-value="44"
                  >
                    <div class="tn-molecule" id="molecule-1784811520227000006">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784811520227000008"
                        data-elem-id="1784811520227000008"
                        data-elem-type="text"
                        data-field-top-value="353"
                        data-field-height-value="22"
                        data-field-top-res-320-value="530"
                        data-field-height-res-320-value="19"
                        data-field-top-res-480-value="569"
                        data-field-height-res-480-value="19"
                        data-field-top-res-640-value="656"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="284"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">Build modules</div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784811520227000007"
                        data-elem-id="1784811520227000007"
                        data-elem-type="text"
                        data-field-top-value="375"
                        data-field-height-value="22"
                        data-field-top-res-320-value="549"
                        data-field-height-res-320-value="19"
                        data-field-top-res-480-value="588"
                        data-field-height-res-480-value="19"
                        data-field-top-res-640-value="678"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="306"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">01/02</div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__28327199011784811520227000003 t396__group-flex"
                    data-group-id="1784811520227000003"
                    data-group-top-value="351"
                    data-group-heightmode="hug"
                    data-group-height-value="48"
                    data-group-top-res-320-value="529"
                    data-group-height-res-320-value="40"
                    data-group-top-res-480-value="568"
                    data-group-height-res-480-value="40"
                    data-group-top-res-640-value="658"
                    data-group-height-res-640-value="40"
                    data-group-top-res-960-value="286"
                    data-group-height-res-960-value="40"
                  >
                    <div class="tn-molecule" id="molecule-1784811520227000003">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784811520227000005"
                        data-elem-id="1784811520227000005"
                        data-elem-type="button"
                        data-field-top-value="351"
                        data-field-height-value="48"
                        data-field-top-res-320-value="529"
                        data-field-height-res-320-value="40"
                        data-field-top-res-480-value="568"
                        data-field-height-res-480-value="40"
                        data-field-top-res-640-value="658"
                        data-field-height-res-640-value="40"
                        data-field-top-res-960-value="286"
                        data-field-height-res-960-value="40"
                      >
                        <a
                          class="tn-atom"
                          href="#prev"
                          aria-label="Previous module"
                          @click.prevent="changeModule(-1)"
                        >
                          <div class="tn-atom__button-content">
                            <span
                              class="tn-atom__button-icon tn-atom__button-icon-no-hover tn-atom__button-icon-arrow-default"
                            ></span>
                            <span class="tn-atom__button-text"></span>
                          </div>
                          <span class="tn-atom__button-border"></span>
                        </a>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327199011784811520227000004"
                        data-elem-id="1784811520227000004"
                        data-elem-type="button"
                        data-field-top-value="351"
                        data-field-height-value="48"
                        data-field-top-res-320-value="529"
                        data-field-height-res-320-value="40"
                        data-field-top-res-480-value="568"
                        data-field-height-res-480-value="40"
                        data-field-top-res-640-value="658"
                        data-field-height-res-640-value="40"
                        data-field-top-res-960-value="286"
                        data-field-height-res-960-value="40"
                      >
                        <a
                          class="tn-atom"
                          href="#next"
                          aria-label="Next module"
                          @click.prevent="changeModule(1)"
                        >
                          <div class="tn-atom__button-content">
                            <span
                              class="tn-atom__button-icon tn-atom__button-icon-no-hover tn-atom__button-icon-arrow-default"
                            ></span>
                            <span class="tn-atom__button-text"></span>
                          </div>
                          <span class="tn-atom__button-border"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2832720001"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_90 t-rec_pb-res-480_45"
      style="padding-top: 60px; padding-bottom: 90px; background-color: #ddecd7"
      data-module-slide="1"
      v-show="activeModule === 1"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="431"
          data-artboard-height-res-320="591"
          data-artboard-height-res-480="630"
          data-artboard-height-res-640="722"
          data-artboard-height-res-960="352"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__elem tn-elem tn-elem__28327200011784736906769"
            data-elem-id="1784736906769"
            data-elem-type="image"
            data-field-top-value="0"
            data-field-height-value="429"
            data-field-height-res-320-value="233"
            data-field-height-res-480-value="298"
            data-field-height-res-640-value="404"
            data-field-height-res-960-value="352"
          >
            <div class="tn-atom">
              <img
                class="tn-atom__img t-img"
                src="/images/service-6366485e87.png"
                alt=""
                loading="eager"
              />
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__28327200011784738760510000013 t396__group-flex"
            data-group-id="1784738760510000013"
            data-group-top-value="2"
            data-group-heightmode="fixed"
            data-group-height-value="429"
            data-group-top-res-320-value="241"
            data-group-height-res-320-value="350"
            data-group-top-res-480-value="310"
            data-group-height-res-480-value="320"
            data-group-top-res-640-value="412"
            data-group-height-res-640-value="310"
            data-group-top-res-960-value="2"
            data-group-height-res-960-value="348"
          >
            <div class="tn-molecule" id="molecule-1784738760510000013">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327200011784738760512000026 t396__group-flex"
                data-group-id="1784738760512000026"
                data-group-top-value="34"
                data-group-heightmode="fill"
                data-group-height-value="268"
                data-group-top-res-320-value="261"
                data-group-height-res-320-value="210"
                data-group-top-res-480-value="330"
                data-group-height-res-480-value="172"
                data-group-top-res-640-value="432"
                data-group-height-res-640-value="187"
                data-group-top-res-960-value="22"
                data-group-height-res-960-value="245"
              >
                <div class="tn-molecule" id="molecule-1784738760512000026">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784738943273000046"
                    data-elem-id="1784738943273000046"
                    data-elem-type="image"
                    data-field-top-value="34"
                    data-field-height-value="40"
                    data-field-top-res-320-value="261"
                    data-field-height-res-320-value="28"
                    data-field-top-res-480-value="330"
                    data-field-height-res-480-value="28"
                    data-field-top-res-640-value="432"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="22"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-a238f5354d.svg"
                        alt="Star"
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784738760512000028"
                    data-elem-id="1784738760512000028"
                    data-elem-type="text"
                    data-field-top-value="90"
                    data-field-height-value="28"
                    data-field-top-res-320-value="301"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="370"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="472"
                    data-field-height-res-640-value="25"
                    data-field-top-res-960-value="58"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom">Social Listening</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784738760512000027"
                    data-elem-id="1784738760512000027"
                    data-elem-type="text"
                    data-field-top-value="134"
                    data-field-height-value="88"
                    data-field-top-res-320-value="338"
                    data-field-height-res-320-value="144"
                    data-field-top-res-480-value="407"
                    data-field-height-res-480-value="96"
                    data-field-top-res-640-value="509"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="91"
                    data-field-height-res-960-value="120"
                  >
                    <div class="tn-atom">
                      Every early mention across VK, Telegram, forums, video and news for the new
                      name — filterable by sentiment, source and geography — so the first reactions
                      to the entry get caught in real time, not discovered weeks later.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784811654174"
                data-elem-id="1784811654174"
                data-elem-type="shape"
                data-field-top-value="326"
                data-field-height-value="1"
                data-field-top-res-320-value="500"
                data-field-height-res-320-value="1"
                data-field-top-res-480-value="535"
                data-field-height-res-480-value="1"
                data-field-top-res-640-value="637"
                data-field-height-res-640-value="1"
                data-field-top-res-960-value="275"
                data-field-height-res-960-value="1"
              >
                <div class="tn-atom"></div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__28327200011784811520227000002 t396__group-flex"
                data-group-id="1784811520227000002"
                data-group-top-value="351"
                data-group-heightmode="hug"
                data-group-height-value="48"
                data-group-top-res-320-value="529"
                data-group-height-res-320-value="40"
                data-group-top-res-480-value="568"
                data-group-height-res-480-value="40"
                data-group-top-res-640-value="656"
                data-group-height-res-640-value="44"
                data-group-top-res-960-value="284"
                data-group-height-res-960-value="44"
              >
                <div class="tn-molecule" id="molecule-1784811520227000002">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__28327200011784811520227000006 t396__group-flex"
                    data-group-id="1784811520227000006"
                    data-group-top-value="353"
                    data-group-heightmode="hug"
                    data-group-height-value="44"
                    data-group-top-res-320-value="530"
                    data-group-height-res-320-value="38"
                    data-group-top-res-480-value="569"
                    data-group-height-res-480-value="38"
                    data-group-top-res-640-value="656"
                    data-group-height-res-640-value="44"
                    data-group-top-res-960-value="284"
                    data-group-height-res-960-value="44"
                  >
                    <div class="tn-molecule" id="molecule-1784811520227000006">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784811520227000008"
                        data-elem-id="1784811520227000008"
                        data-elem-type="text"
                        data-field-top-value="353"
                        data-field-height-value="22"
                        data-field-top-res-320-value="530"
                        data-field-height-res-320-value="19"
                        data-field-top-res-480-value="569"
                        data-field-height-res-480-value="19"
                        data-field-top-res-640-value="656"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="284"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">Build modules</div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784811520227000007"
                        data-elem-id="1784811520227000007"
                        data-elem-type="text"
                        data-field-top-value="375"
                        data-field-height-value="22"
                        data-field-top-res-320-value="549"
                        data-field-height-res-320-value="19"
                        data-field-top-res-480-value="588"
                        data-field-height-res-480-value="19"
                        data-field-top-res-640-value="678"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="306"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">02/02</div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__28327200011784811520227000003 t396__group-flex"
                    data-group-id="1784811520227000003"
                    data-group-top-value="351"
                    data-group-heightmode="hug"
                    data-group-height-value="48"
                    data-group-top-res-320-value="529"
                    data-group-height-res-320-value="40"
                    data-group-top-res-480-value="568"
                    data-group-height-res-480-value="40"
                    data-group-top-res-640-value="658"
                    data-group-height-res-640-value="40"
                    data-group-top-res-960-value="286"
                    data-group-height-res-960-value="40"
                  >
                    <div class="tn-molecule" id="molecule-1784811520227000003">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784811520227000005"
                        data-elem-id="1784811520227000005"
                        data-elem-type="button"
                        data-field-top-value="351"
                        data-field-height-value="48"
                        data-field-top-res-320-value="529"
                        data-field-height-res-320-value="40"
                        data-field-top-res-480-value="568"
                        data-field-height-res-480-value="40"
                        data-field-top-res-640-value="658"
                        data-field-height-res-640-value="40"
                        data-field-top-res-960-value="286"
                        data-field-height-res-960-value="40"
                      >
                        <a
                          class="tn-atom"
                          href="#prev"
                          aria-label="Previous module"
                          @click.prevent="changeModule(-1)"
                        >
                          <div class="tn-atom__button-content">
                            <span
                              class="tn-atom__button-icon tn-atom__button-icon-no-hover tn-atom__button-icon-arrow-default"
                            ></span>
                            <span class="tn-atom__button-text"></span>
                          </div>
                          <span class="tn-atom__button-border"></span>
                        </a>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__28327200011784811520227000004"
                        data-elem-id="1784811520227000004"
                        data-elem-type="button"
                        data-field-top-value="351"
                        data-field-height-value="48"
                        data-field-top-res-320-value="529"
                        data-field-height-res-320-value="40"
                        data-field-top-res-480-value="568"
                        data-field-height-res-480-value="40"
                        data-field-top-res-640-value="658"
                        data-field-height-res-640-value="40"
                        data-field-top-res-960-value="286"
                        data-field-height-res-960-value="40"
                      >
                        <a
                          class="tn-atom"
                          href="#next"
                          aria-label="Next module"
                          @click.prevent="changeModule(1)"
                        >
                          <div class="tn-atom__button-content">
                            <span
                              class="tn-atom__button-icon tn-atom__button-icon-no-hover tn-atom__button-icon-arrow-default"
                            ></span>
                            <span class="tn-atom__button-text"></span>
                          </div>
                          <span class="tn-atom__button-border"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2891780701" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              Part of a bigger platform
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Search &amp; Listening Are Two Modules Inside The Risk Control Center
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t-text t-text_md">
              This retainer runs on the Search Results and Social Listening modules specifically,
              scoped to the new market or brand. The same platform also covers AI answers, reviews
              and narrative — available as their own single-workstream retainers once the footprint
              exists, or together under Strategic Information-Field Management, the full-platform
              program.
            </div>
          </div>
        </div>
      </div>
    </section>
    <ModuleNavigation :items="moduleLists[0]!" />
    <section
      id="rec2892037601"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f3f3f3"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h3 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              End-to-end solution
            </h3>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Platform &amp; Expert Team Support
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t-text t-text_md">
              The Search and Listening modules give you the data on the new market, always on. The
              build team gives you what to do with it — deciding what to build next, what to place
              in the media, and what to escalate the moment an early signal needs a response.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2910213701"
      class="r t-rec t-rec_pt_45 t-rec_pb_90"
      style="padding-top: 45px; padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="424"
          data-artboard-height-res-320="421"
          data-artboard-height-res-480="421"
          data-artboard-height-res-640="424"
          data-artboard-height-res-960="424"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group scroll-block tn-group__29102137011783695484064000001 t396__group-flex"
            data-group-id="1783695484064000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="424"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="421"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="421"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="424"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="424"
          >
            <div class="tn-molecule" id="molecule-1783695484064000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__29102137011786114810982000002 t396__group-flex"
                data-group-id="1786114810982000002"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="424"
                data-group-height-res-320-value="421"
                data-group-height-res-480-value="421"
                data-group-height-res-640-value="424"
                data-group-height-res-960-value="424"
              >
                <div class="tn-molecule" id="molecule-1786114810982000002">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__29102137011783513292833000049 t396__group-flex"
                    data-group-id="1783513292833000049"
                    data-group-top-value="0"
                    data-group-heightmode="hug"
                    data-group-height-value="424"
                    data-group-top-res-320-value="0"
                    data-group-height-res-320-value="421"
                    data-group-top-res-480-value="0"
                    data-group-height-res-480-value="421"
                    data-group-top-res-640-value="0"
                    data-group-height-res-640-value="424"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="424"
                  >
                    <div class="tn-molecule" id="molecule-1783513292833000049">
                      <div
                        class="t396__group tn-group border-2 t396__elem-flex tn-group__29102137011783513193105000002 t396__group-flex"
                        data-group-id="1783513193105000002"
                        data-group-top-value="0"
                        data-group-heightmode="hug"
                        data-group-height-value="72"
                        data-group-top-res-320-value="0"
                        data-group-height-res-320-value="69"
                        data-group-top-res-480-value="0"
                        data-group-height-res-480-value="69"
                        data-group-top-res-640-value="0"
                        data-group-height-res-640-value="72"
                        data-group-top-res-960-value="0"
                        data-group-height-res-960-value="72"
                      >
                        <div class="tn-molecule" id="molecule-1783513193105000002">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783513193106000013 t396__group-flex"
                            data-group-id="1783513193106000013"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="72"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="69"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="69"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="72"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="72"
                          >
                            <div class="tn-molecule" id="molecule-1783513193106000013">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783513193106000016"
                                data-elem-id="1783513193106000016"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  <span style="color: rgb(249, 249, 249)">A</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523650876000042 t396__group-flex"
                            data-group-id="1783523650876000042"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="72"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="69"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="69"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="72"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="72"
                          >
                            <div class="tn-molecule" id="molecule-1783523650876000042">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523650876000043"
                                data-elem-id="1783523650876000043"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Narrative &amp; Listening Modules</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011784121114038000020"
                                data-elem-id="1784121114038000020"
                                data-elem-type="text"
                                data-field-top-value="36"
                                data-field-height-value="22"
                                data-field-top-res-320-value="36"
                                data-field-height-res-320-value="19"
                                data-field-top-res-480-value="36"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="36"
                                data-field-height-res-640-value="22"
                                data-field-top-res-960-value="36"
                                data-field-height-res-960-value="44"
                              >
                                <div class="tn-atom">the platform layer</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523652331000044 t396__group-flex"
                            data-group-id="1783523652331000044"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="72"
                            data-group-top-res-320-value="0"
                            data-group-height-res-320-value="69"
                            data-group-top-res-480-value="0"
                            data-group-height-res-480-value="69"
                            data-group-top-res-640-value="0"
                            data-group-height-res-640-value="72"
                            data-group-top-res-960-value="0"
                            data-group-height-res-960-value="72"
                          >
                            <div class="tn-molecule" id="molecule-1783523652331000044">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523652331000045"
                                data-elem-id="1783523652331000045"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">Reputation House</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011785922010374000001"
                                data-elem-id="1785922010374000001"
                                data-elem-type="text"
                                data-field-top-value="36"
                                data-field-height-value="22"
                                data-field-top-res-320-value="36"
                                data-field-height-res-320-value="19"
                                data-field-top-res-480-value="36"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="36"
                                data-field-height-res-640-value="22"
                                data-field-top-res-960-value="36"
                                data-field-height-res-960-value="44"
                              >
                                <div class="tn-atom">the team on top of it</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29102137011783523714786000046 t396__group-flex"
                        data-group-id="1783523714786000046"
                        data-group-top-value="72"
                        data-group-heightmode="hug"
                        data-group-height-value="98"
                        data-group-top-res-320-value="69"
                        data-group-height-res-320-value="98"
                        data-group-top-res-480-value="69"
                        data-group-height-res-480-value="98"
                        data-group-top-res-640-value="72"
                        data-group-height-res-640-value="98"
                        data-group-top-res-960-value="72"
                        data-group-height-res-960-value="98"
                      >
                        <div class="tn-molecule" id="molecule-1783523714786000046">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523714787000055 t396__group-flex"
                            data-group-id="1783523714787000055"
                            data-group-top-value="72"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="69"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="69"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="72"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="72"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523714787000055">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523714787000056"
                                data-elem-id="1783523714787000056"
                                data-elem-type="text"
                                data-field-top-value="84"
                                data-field-height-value="24"
                                data-field-top-res-320-value="81"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="81"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="84"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="84"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">What it gives you</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523714787000053 t396__group-flex"
                            data-group-id="1783523714787000053"
                            data-group-top-value="72"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="69"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="69"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="72"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="72"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523714787000053">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523714787000054"
                                data-elem-id="1783523714787000054"
                                data-elem-type="text"
                                data-field-top-value="84"
                                data-field-height-value="48"
                                data-field-top-res-320-value="81"
                                data-field-height-res-320-value="72"
                                data-field-top-res-480-value="81"
                                data-field-height-res-480-value="72"
                                data-field-top-res-640-value="84"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="84"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  Live data on what's ranking and what's being said, and which
                                  market trends are forming, updated continuously
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523714786000047 t396__group-flex"
                            data-group-id="1783523714786000047"
                            data-group-top-value="72"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="69"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="69"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="72"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="72"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523714786000047">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523714787000048"
                                data-elem-id="1783523714787000048"
                                data-elem-type="text"
                                data-field-top-value="84"
                                data-field-height-value="72"
                                data-field-top-res-320-value="81"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="81"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="84"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="84"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  A build plan that decides what gets created next, and where
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29102137011783523842699000059 t396__group-flex"
                        data-group-id="1783523842699000059"
                        data-group-top-value="170"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="167"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="167"
                        data-group-height-res-480-value="74"
                        data-group-top-res-640-value="170"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="170"
                        data-group-height-res-960-value="74"
                      >
                        <div class="tn-molecule" id="molecule-1783523842699000059">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523842699000068 t396__group-flex"
                            data-group-id="1783523842699000068"
                            data-group-top-value="170"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="167"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="167"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="170"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="170"
                            data-group-height-res-960-value="74"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000068">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523842699000069"
                                data-elem-id="1783523842699000069"
                                data-elem-type="text"
                                data-field-top-value="182"
                                data-field-height-value="24"
                                data-field-top-res-320-value="179"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="179"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="182"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="182"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Who's watching it</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523842699000066 t396__group-flex"
                            data-group-id="1783523842699000066"
                            data-group-top-value="170"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="167"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="167"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="170"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="170"
                            data-group-height-res-960-value="74"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000066">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523842699000067"
                                data-elem-id="1783523842699000067"
                                data-elem-type="text"
                                data-field-top-value="182"
                                data-field-height-value="24"
                                data-field-top-res-320-value="179"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="179"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="182"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="182"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">You, whenever you log in</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523842699000060 t396__group-flex"
                            data-group-id="1783523842699000060"
                            data-group-top-value="170"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="167"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="167"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="170"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="170"
                            data-group-height-res-960-value="74"
                          >
                            <div class="tn-molecule" id="molecule-1783523842699000060">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523842699000061"
                                data-elem-id="1783523842699000061"
                                data-elem-type="text"
                                data-field-top-value="182"
                                data-field-height-value="48"
                                data-field-top-res-320-value="179"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="179"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="182"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="182"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  A dedicated market-entry strategist, tracking the build every week
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__29102137011783523852780000074 t396__group-flex"
                        data-group-id="1783523852780000074"
                        data-group-top-value="244"
                        data-group-heightmode="hug"
                        data-group-height-value="74"
                        data-group-top-res-320-value="241"
                        data-group-height-res-320-value="74"
                        data-group-top-res-480-value="241"
                        data-group-height-res-480-value="74"
                        data-group-top-res-640-value="244"
                        data-group-height-res-640-value="74"
                        data-group-top-res-960-value="244"
                        data-group-height-res-960-value="74"
                      >
                        <div class="tn-molecule" id="molecule-1783523852780000074">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523852781000083 t396__group-flex"
                            data-group-id="1783523852781000083"
                            data-group-top-value="244"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="241"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="241"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="244"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="244"
                            data-group-height-res-960-value="74"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000083">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523852781000084"
                                data-elem-id="1783523852781000084"
                                data-elem-type="text"
                                data-field-top-value="256"
                                data-field-height-value="24"
                                data-field-top-res-320-value="253"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="253"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="256"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="256"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">When something changes</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523852781000081 t396__group-flex"
                            data-group-id="1783523852781000081"
                            data-group-top-value="244"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="241"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="241"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="244"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="244"
                            data-group-height-res-960-value="74"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000081">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523852781000082"
                                data-elem-id="1783523852781000082"
                                data-elem-type="text"
                                data-field-top-value="256"
                                data-field-height-value="24"
                                data-field-top-res-320-value="253"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="253"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="256"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="256"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">The tracked numbers move in the dashboard</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523852781000075 t396__group-flex"
                            data-group-id="1783523852781000075"
                            data-group-top-value="244"
                            data-group-heightmode="fill"
                            data-group-height-value="74"
                            data-group-top-res-320-value="241"
                            data-group-height-res-320-value="74"
                            data-group-top-res-480-value="241"
                            data-group-height-res-480-value="74"
                            data-group-top-res-640-value="244"
                            data-group-height-res-640-value="74"
                            data-group-top-res-960-value="244"
                            data-group-height-res-960-value="74"
                          >
                            <div class="tn-molecule" id="molecule-1783523852781000075">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523852781000076"
                                data-elem-id="1783523852781000076"
                                data-elem-type="text"
                                data-field-top-value="256"
                                data-field-height-value="48"
                                data-field-top-res-320-value="253"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="253"
                                data-field-height-res-480-value="72"
                                data-field-top-res-640-value="256"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="256"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  The strategist reads whether it's early traction or a signal to
                                  redirect the build
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__29102137011783523907538000098 t396__group-flex"
                        data-group-id="1783523907538000098"
                        data-group-top-value="318"
                        data-group-heightmode="hug"
                        data-group-height-value="98"
                        data-group-top-res-320-value="315"
                        data-group-height-res-320-value="98"
                        data-group-top-res-480-value="315"
                        data-group-height-res-480-value="98"
                        data-group-top-res-640-value="318"
                        data-group-height-res-640-value="98"
                        data-group-top-res-960-value="318"
                        data-group-height-res-960-value="98"
                      >
                        <div class="tn-molecule" id="molecule-1783523907538000098">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523907538000107 t396__group-flex"
                            data-group-id="1783523907538000107"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="315"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="315"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="318"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="318"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000107">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523907539000108"
                                data-elem-id="1783523907539000108"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="24"
                                data-field-top-res-320-value="327"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="327"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="330"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="330"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">What backs the judgment calls</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523907538000105 t396__group-flex"
                            data-group-id="1783523907538000105"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="315"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="315"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="318"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="318"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000105">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523907538000106"
                                data-elem-id="1783523907538000106"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="24"
                                data-field-top-res-320-value="327"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="327"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="330"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="330"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">This company's own data alone</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__29102137011783523907538000099 t396__group-flex"
                            data-group-id="1783523907538000099"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="98"
                            data-group-top-res-320-value="315"
                            data-group-height-res-320-value="98"
                            data-group-top-res-480-value="315"
                            data-group-height-res-480-value="98"
                            data-group-top-res-640-value="318"
                            data-group-height-res-640-value="98"
                            data-group-top-res-960-value="318"
                            data-group-height-res-960-value="98"
                          >
                            <div class="tn-molecule" id="molecule-1783523907538000099">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__29102137011783523907538000100"
                                data-elem-id="1783523907538000100"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="72"
                                data-field-top-res-320-value="327"
                                data-field-height-res-320-value="72"
                                data-field-top-res-480-value="327"
                                data-field-height-res-480-value="72"
                                data-field-top-res-640-value="330"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="330"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  That data, read against RH Research Center studies across 2M+
                                  mentions and 39 global brands
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2892232801" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              Case Studies
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              What Go-to-market Risk Actually Looks Like For CIS Market Players
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t-text t-text_md">
              None of the four cases below are Reputation House clients — all four are documented,
              sourced CIS market events. Each "What Happened" box is the public record. Each "If
              They Had Worked With RH" box is our own analytical read of where a monitored, planned
              information field would have changed the outcome — and where it honestly wouldn't
              have.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2921328501"
      class="r t-rec t-rec_pt_45 t-rec_pt-res-480_15"
      style="padding-top: 45px"
    >
      <div class="t1186">
        <div class="t1186__header t1186__header_center">
          <div class="t1186__scroll-icon-wrapper" style="mix-blend-mode: multiply">
            <svg
              role="presentation"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 300"
              height="42"
              width="42"
            >
              <rect
                class="tooltip-horizontal-scroll-icon_card"
                x="480"
                width="200"
                height="200"
                rx="5"
                fill="rgba(190,190,190,0.3)"
              ></rect>
              <rect
                class="tooltip-horizontal-scroll-icon_card"
                y="0"
                width="200"
                height="200"
                rx="5"
                fill="rgba(190,190,190,0.3)"
              ></rect>
              <rect
                class="tooltip-horizontal-scroll-icon_card"
                x="240"
                width="200"
                height="200"
                rx="5"
                fill="rgba(190,190,190,0.3)"
              ></rect>
              <path
                class="tooltip-horizontal-scroll-icon_hand"
                d="M78.9579 285.7C78.9579 285.7 37.8579 212.5 20.5579 180.8C-2.44209 138.6 -6.2422 120.8 9.6579 112C19.5579 106.5 33.2579 108.8 41.6579 123.4L61.2579 154.6V32.3C61.2579 32.3 60.0579 0 83.0579 0C107.558 0 105.458 32.3 105.458 32.3V91.7C105.458 91.7 118.358 82.4 133.458 86.6C141.158 88.7 150.158 92.4 154.958 104.6C154.958 104.6 185.658 89.7 200.958 121.4C200.958 121.4 236.358 114.4 236.358 151.1C236.358 187.8 192.158 285.7 192.158 285.7H78.9579Z"
                fill="rgba(190,190,190,1)"
              ></path>
            </svg>
          </div>
        </div>
        <div class="t1186__gallery">
          <div class="t1186__controls t1186__controls_gallery">
            <button
              class="t-btn t1186__control t1186__control_left t1186__control_md"
              style="border-radius: 50px; background-color: rgba(96, 108, 89, 1)"
              type="button"
              aria-controls="carousel_2921328501"
              aria-label="Previous slide"
              @click="scrollCarousel('carousel_2921328501', -1)"
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                role="presentation"
              >
                <path
                  d="M23 13L15.5 20L23 27"
                  stroke="#ffffff"
                  stroke-width="1px"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
            <button
              class="t-btn t1186__control t1186__control_right t1186__control_md"
              style="border-radius: 50px; background-color: rgba(96, 108, 89, 1)"
              type="button"
              aria-controls="carousel_2921328501"
              aria-label="Next slide"
              @click="scrollCarousel('carousel_2921328501', 1)"
            >
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
                role="presentation"
              >
                <path
                  d="M23 13L15.5 20L23 27"
                  stroke="#ffffff"
                  stroke-width="1px"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
          </div>
          <div class="t1186__slider" id="carousel_2921328501" aria-live="polite">
            <div
              class="t1186__item t-col t-col_8"
              role="group"
              aria-roledescription="slide"
              draggable="false"
              aria-label="1 of 3"
              aria-current="true"
            >
              <div class="t1186__card t1186__card_circle">
                <div class="t1186__head">
                  <div
                    class="t1186__bgimg t1186__bgimg_circle t-bgimg"
                    bgimgfield="li_img__1724720758130"
                    style="
                      background-image: url(&quot;/images/service-3763107e6b.jpeg&quot;);
                      background-image: url(&quot;/images/service-3763107e6b.jpeg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                    role="img"
                    aria-label="Nike"
                  >
                    <meta itemprop="image" content="/images/service-3763107e6b.jpeg" />
                    <meta itemprop="caption" content="Nike" />
                  </div>
                  <div class="t1186__profile">
                    <div class="t1186__title t-heading t-heading_xs">
                      <strong>Wildberries</strong>
                    </div>
                    <div class="t1186__descr t-descr t-descr_xs">
                      <span style="font-weight: 400; font-size: 16px; color: rgb(88, 88, 88)"
                        >E-commerce marketplace · shareholder conflict, CIS</span
                      >
                    </div>
                  </div>
                </div>
                <div class="t1186__text t-text t-text_md">
                  <strong style="font-size: 18px; color: rgb(162, 103, 100)">What happened:</strong
                  ><br />A shareholder conflict went public — raiding accusations involving roughly
                  <strong>37 billion rubles</strong> and a shooting at the Moscow office with
                  casualties. The brand became associated with violence and corporate chaos; vendor
                  and investor trust came into question. Viral negative coverage held for months and
                  drove the platform's first-ever seller outflow,
                  <strong>at 24.5%</strong>.<br /><br /><strong
                    style="color: rgb(96, 108, 89); font-size: 18px"
                    >If Wildberries had worked with&nbsp;RH:</strong
                  ><br />Ongoing monitoring catches a conflict entering its acute phase before each
                  new development becomes its own media event. A managed counter-narrative doesn't
                  end a shareholder war, but it keeps public chaos from becoming the platform's
                  defining market image.
                  <strong
                    >Result: a 24.5% seller outflow is the cost of a narrative vacuum the media
                    filled, not the company.</strong
                  >
                  Resolving the dispute isn't something RH can do. Occupying the narrative vacuum
                  ahead of the market is.<br /><br /><span
                    style="color: rgb(88, 88, 88); font-size: 14px"
                    >Profil magazine, 2024–2026; Kommersant/Vostock Photo coverage. Reputation House
                    analysis, not a client engagement.</span
                  >
                </div>
              </div>
            </div>
            <div
              class="t1186__item t-col t-col_8"
              role="group"
              aria-roledescription="slide"
              draggable="false"
              aria-label="2 of 3"
              aria-current="false"
            >
              <div class="t1186__card t1186__card_circle">
                <div class="t1186__head">
                  <div
                    class="t1186__bgimg t1186__bgimg_circle t-bgimg"
                    bgimgfield="li_img__1724720758131"
                    style="
                      background-image: url(&quot;/images/service-dd9d189b73.webp&quot;);
                      background-image: url(&quot;/images/service-dd9d189b73.webp&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                    role="img"
                    aria-label="Supermicro"
                  >
                    <meta itemprop="image" content="/images/service-dd9d189b73.webp" />
                    <meta itemprop="caption" content="Supermicro" />
                  </div>
                  <div class="t1186__profile">
                    <div class="t1186__title t-heading t-heading_xs">
                      <strong>Rendez-Vous</strong>
                    </div>
                    <div class="t1186__descr t-descr t-descr_xs">
                      <span style="font-weight: 400; font-size: 16px; color: rgb(88, 88, 88)"
                        >Retail chain · internal/external narrative gap, CIS</span
                      >
                    </div>
                  </div>
                </div>
                <div class="t1186__text t-text t-text_md">
                  <strong style="font-size: 18px; color: rgb(162, 103, 100)">What happened:</strong
                  ><br />The retailer spent roughly <strong>30 million rubles</strong> on an
                  anniversary press tour featuring Patricia Kaas, helicopters and Courchevel
                  dinners. It then emerged that Moscow store staff had salaries and bonuses cut in
                  2025. Against a wartime backdrop, the contrast read publicly as "feasting while
                  staff go without" and dominated the agenda for a month.<br /><br /><strong
                    style="color: rgb(96, 108, 89); font-size: 18px"
                    >If Rendez-Vous had worked with&nbsp;RH:</strong
                  ><br />A pre-launch information-field analysis reads the planned narrative against
                  the internal reality before the tour ships, not after — flagging that a luxury
                  event staged against reduced staff pay will be read this way before it airs.
                  <strong
                    >Result: 30 million rubles doesn't convert into a month of viral negative
                    coverage</strong
                  >
                  — the audit costs a fraction of the campaign it would have stopped. Setting
                  salaries is the company's call, not RH's. Seeing the gap between the storefront
                  and the backstage before the market does is.<br /><br /><span
                    style="color: rgb(88, 88, 88); font-size: 14px"
                    >CIS retail and business press coverage, January 2026. Reputation House
                    analysis, not a client engagement.</span
                  >
                </div>
              </div>
            </div>
            <div
              class="t1186__item t-col t-col_8"
              role="group"
              aria-roledescription="slide"
              draggable="false"
              aria-label="3 of 3"
              aria-current="false"
            >
              <div class="t1186__card t1186__card_circle">
                <div class="t1186__head">
                  <div
                    class="t1186__bgimg t1186__bgimg_circle t-bgimg"
                    bgimgfield="li_img__1724720758132"
                    style="
                      background-image: url(&quot;/images/service-69173a7b7e.png&quot;);
                      background-image: url(&quot;/images/service-69173a7b7e.png&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                    role="img"
                    aria-label="University system hack"
                  >
                    <meta itemprop="image" content="/images/service-69173a7b7e.png" />
                    <meta itemprop="caption" content="University system hack" />
                  </div>
                  <div class="t1186__profile">
                    <div class="t1186__title t-heading t-heading_xs"><strong>Yandex</strong></div>
                    <div class="t1186__descr t-descr t-descr_xs">
                      <span style="font-weight: 400; font-size: 16px; color: rgb(88, 88, 88)"
                        >Technology · corporate reorganization, CIS</span
                      >
                    </div>
                  </div>
                </div>
                <div class="t1186__text t-text t-text_md">
                  <strong style="color: rgb(162, 103, 100); font-size: 18px">What happened:</strong
                  ><br />A business split, the exit of foreign managers and the founder's distancing
                  from the company left a narrative vacuum. The frame "Yandex stopped being a
                  technology company" formed and spread with no counter-narrative from the brand
                  itself.<br /><br /><strong style="font-size: 18px; color: rgb(96, 108, 89)"
                    >If Yandex had worked with&nbsp;RH:</strong
                  ><br />A managed transition narrative — what's happening, why, where the company
                  is headed — gets prepared before a strategic event like a split or an ownership
                  change, and published as it unfolds, so the field isn't left empty for the market
                  to fill.
                  <strong
                    >Result: investment perception and deal reception are protected at the moment
                    they're worth the most.</strong
                  >
                  The reorganization structure is the company's decision, not RH's. Making the
                  company the author of its own story in public is what RH does.<br /><br /><span
                    style="font-size: 14px; color: rgb(88, 88, 88)"
                    >Vedomosti Kapital, 2026; T-Bank Media, 2026. Reputation House analysis, not a
                    client engagement.</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2885936101" class="r t-rec t-rec_pt_45" style="padding-top: 45px">
      <div class="t1331">
        <div class="t-container">
          <div class="t-col t-col_12">
            <div class="t1331__row t1331__row_center">
              <a class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md" href="/case-studies"
                ><span class="t-btnflex__text">See more industry anti-cases</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2892634201"
      class="r t-rec t-rec_pt_90 t-rec_pt-res-480_90"
      style="padding-top: 90px"
    >
      <div
        class="t-cover"
        id="recorddiv2892634201"
        bgimgfield="img"
        style="height: 40vh; background-image: url(&quot;/images/service-37a0fe3475.png&quot;)"
      >
        <div
          class="t-cover__carrier"
          id="coverCarry2892634201"
          style="
            height: 40vh;
            background-attachment: scroll;
            background-image: url(&quot;/images/service-37a0fe3475.png&quot;);
          "
          itemscope
          itemtype="http://schema.org/ImageObject"
        >
          <meta itemprop="image" content="/images/service-37a0fe3475.png" />
        </div>
        <div
          class="t-cover__filter"
          style="
            height: 40vh;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
          "
        ></div>
        <div class="t716">
          <div class="t-container">
            <div class="t-width t-width_100 t716__mainblock t-align_left">
              <div
                class="t-cover__wrapper t-valign_middle"
                style="height: 40vh; position: relative; z-index: 1"
              >
                <div class="t716__mainwrapper">
                  <div class="t716__textwrapper">
                    <div class="t716__title t-title t-title_lg">
                      Want to see how this would work for your CIS entry?
                    </div>
                    <div class="t716__descr t-descr t-descr_xs">
                      Tell us the market or brand you're building into and we'll walk through what a
                      from-zero build would look like for your specific entry.
                    </div>
                  </div>
                  <div class="">
                    <form
                      id="form2892634201"
                      name="form2892634201"
                      role="form"
                      class="t-form js-form-proccess t-form_inputs-total_2"
                      @submit.prevent="submitPreview('form-0')"
                    >
                      <div class="t-form__inputsbox t-form__inputsbox_horizontal">
                        <div class="t-input-group t-input-group_nm">
                          <div class="t-input-block" style="border-radius: 100px">
                            <input
                              type="text"
                              autocomplete="name"
                              name="Name"
                              id="input_7111158314562"
                              class="t-input js-tilda-rule"
                              value=""
                              placeholder="Name"
                              aria-describedby="error_7111158314562"
                              style="
                                color: #e6e6e6;
                                border: 1px solid #464646;
                                background-color: #262626;
                                border-radius: 100px;
                              "
                            />
                          </div>
                          <div
                            class="t-input-error"
                            aria-live="polite"
                            id="error_7111158314562"
                          ></div>
                        </div>
                        <div class="t-input-group t-input-group_em">
                          <div class="t-input-block" style="border-radius: 100px">
                            <input
                              type="email"
                              autocomplete="email"
                              name="Email"
                              id="input_7111158314560"
                              class="t-input js-tilda-rule"
                              value=""
                              placeholder="Your Email"
                              aria-describedby="error_7111158314560"
                              style="
                                color: #e6e6e6;
                                border: 1px solid #464646;
                                background-color: #262626;
                                border-radius: 100px;
                              "
                            />
                          </div>
                          <div
                            class="t-input-error"
                            aria-live="polite"
                            id="error_7111158314560"
                          ></div>
                        </div>
                        <div class="t-form__submit">
                          <button
                            class="t-submit t-btnflex t-btnflex_type_submit t-btnflex_md"
                            type="submit"
                          >
                            <span class="t-btnflex__text">Talk to the market-entry team</span>
                          </button>
                        </div>
                      </div>
                      <p v-if="sentForms['form-0']" role="status">
                        Preview form — no information has been sent.
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2893410301"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f3f3f3"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              What we don't promise
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              The Limits Of This Solution
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2893425401"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_15"
      style="padding-top: 60px; background-color: #f3f3f3"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="4"
          style="--column-margin: 20px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__3128870565010"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-64abd57624.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Not a press release
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    We're not selling one press push around launch day. If a market entry only needs
                    announcement coverage, a launch-focused PR agency is cheaper.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786373993791"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-64abd57624.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    No guaranteed coverage
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    We can't guarantee a specific media placement, ranking or sentiment number —
                    only compliant methods, and we say so upfront.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786374015877"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-64abd57624.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Not a fix for an existing footprint
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    If the brand already has search results, reviews or an AI answer that need
                    correcting, that's Search Engine Reputation Management or Brand Reputation &amp;
                    Narrative Management.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786374058745"
                    style="
                      width: 28px;
                      height: 28px;
                      margin-bottom: 32px;
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                      background-image: url(&quot;/images/service-64abd57624.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-64abd57624.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    We don't replace your team
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    We build alongside the in-house marketing, comms or country-launch team — as
                    build capacity, not a replacement.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section
      id="rec2893210601"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f3f3f3"
    >
      <div class="t-cover-outer">
        <div
          class="t-cover"
          id="recorddiv2893210601"
          bgimgfield="img"
          style="height: 280px; background-image: url(&quot;/images/service-d7dc4da04f.png&quot;)"
        >
          <div
            class="t-cover__carrier"
            id="coverCarry2893210601"
            style="
              height: 280px;
              background-attachment: scroll;
              background-image: url(&quot;/images/service-d7dc4da04f.png&quot;);
            "
            itemscope
            itemtype="http://schema.org/ImageObject"
          >
            <meta itemprop="image" content="/images/service-d7dc4da04f.png" />
          </div>
          <div
            class="t-cover__filter"
            style="
              height: 280px;
              background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
            "
          ></div>
          <div class="t-container">
            <div class="t-col t-col_7">
              <div
                class="t-cover__wrapper t-valign_middle"
                style="height: 280px; position: relative; z-index: 1"
              >
                <div class="t189">
                  <div>
                    <div class="t189__wrapper">
                      <div class="t189__title t-title">Didn't find what you were looking for?</div>
                      <div class="t189__descr t-descr t-descr_sm">
                        Explore our other business solutions
                      </div>
                      <div class="t189__buttons-wrapper">
                        <a
                          class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md"
                          href="/reputation-services-for-companies"
                          ><span class="t-btnflex__text">Explore</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2893598301"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #ffffff"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              The investment logic
            </h2>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              What You're Actually Paying For
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2893650901"
      class="r t-rec t-rec_pt_60"
      style="padding-top: 60px; background-color: #ffffff"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="2"
          style="--column-margin: 40px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_6 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786374558775"
                    style="
                      width: 28px;
                      height: 28px;
                      background-image: url(&quot;/images/service-1427375182.svg&quot;);
                      background-image: url(&quot;/images/service-1427375182.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-1427375182.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    You're not pricing content
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    You're pricing what entering a market invisibly costs — a partner who can't find
                    the company, a candidate who never applies, a due-diligence check that comes
                    back thin. Priced against that gap, not a headcount of writers.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_6 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786374674743"
                    style="
                      width: 28px;
                      height: 28px;
                      background-image: url(&quot;/images/service-35dfa34380.svg&quot;);
                      background-image: url(&quot;/images/service-35dfa34380.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-35dfa34380.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    We don't price like a launch agency
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    This runs as ongoing infrastructure sized to the market being entered — not a
                    flat campaign fee that ends the day the press cycle does.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_6 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786374698630"
                    style="
                      width: 28px;
                      height: 28px;
                      background-image: url(&quot;/images/service-0fcdbce45a.svg&quot;);
                      background-image: url(&quot;/images/service-0fcdbce45a.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-0fcdbce45a.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    The price includes the Search &amp; Listening modules
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Covers the Search Results and Social Listening modules for the new market.
                    AI-answer correction, reviews and narrative management run as their own
                    workstreams, or under the full-platform Control retainer.
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_6 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #606c59">
              <div class="t858__wrap">
                <div class="t858__wrap_top">
                  <div
                    class="t858__bgimg t-bgimg"
                    bgimgfield="li_img__1786374699929"
                    style="
                      width: 28px;
                      height: 28px;
                      background-image: url(&quot;/images/service-babb0ce0fd.svg&quot;);
                      background-image: url(&quot;/images/service-babb0ce0fd.svg&quot;);
                    "
                    itemscope
                    itemtype="http://schema.org/ImageObject"
                  >
                    <meta itemprop="image" content="/images/service-babb0ce0fd.svg" />
                  </div>
                </div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    Retainer or project, sized to the entry
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    A single-market launch or rebrand usually runs as a scoped project with an end
                    date. Ongoing expansion across several countries runs as a retainer.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section
      id="rec2893947801"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #ffffff"
    >
      <div class="t-cover-outer">
        <div
          class="t-cover"
          id="recorddiv2893947801"
          bgimgfield="img"
          style="height: 280px; background-image: url(&quot;/images/service-b1f0c39bda.png&quot;)"
        >
          <div
            class="t-cover__carrier"
            id="coverCarry2893947801"
            style="
              height: 280px;
              background-attachment: scroll;
              background-image: url(&quot;/images/service-b1f0c39bda.png&quot;);
            "
            itemscope
            itemtype="http://schema.org/ImageObject"
          >
            <meta itemprop="image" content="/images/service-b1f0c39bda.png" />
          </div>
          <div
            class="t-cover__filter"
            style="
              height: 280px;
              background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
            "
          ></div>
          <div class="t-container">
            <div class="t-col t-col_7">
              <div
                class="t-cover__wrapper t-valign_middle"
                style="height: 280px; position: relative; z-index: 1"
              >
                <div class="t189">
                  <div>
                    <div class="t189__wrapper">
                      <div class="t189__title t-title">Curious where you'd land in the range?</div>
                      <div class="t189__descr t-descr t-descr_sm">
                        See how pricing breaks down by region and scope
                      </div>
                      <div class="t189__buttons-wrapper">
                        <a
                          class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md"
                          href="/reputation-management-pricing"
                          ><span class="t-btnflex__text">See pricing</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2912313001"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #f3f3f3"
    >
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Not just logic — the numbers
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2912790401"
      class="r t-rec t-rec_pt_15 t-rec_pb_90"
      style="padding-top: 15px; padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="4"
          style="--column-margin: 20px"
        >
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong style="color: rgb(96, 108, 89); font-size: 32px">92%</strong><br />of
                    S&amp;P 500 market value now sits in intangible assets — brand, reputation, IP
                    and data
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <strong>SOURCE:</strong><br />Ocean Tomo, Intangible Asset Market Value Study
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong style="font-size: 32px; color: rgb(96, 108, 89)">44%</strong><br />of
                    company market value is attributed by executives to CEO reputation alone
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <strong>SOURCE:</strong><br />Weber Shandwick, The CEO Reputation Premium
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong style="color: rgb(162, 103, 100); font-size: 32px">$130B</strong
                    ><br />in capital projects blocked or delayed in a single quarter after local
                    communities organised against launches with no narrative plan
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <strong>SOURCE:</strong><br />The Guardian, 3 Jul 2026
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li
            class="t858__col t-item t-card__col t-card__col_withoutbtn t-col t-col_3 t-align_left"
          >
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <strong style="font-size: 32px; color: rgb(162, 103, 100)">27%</strong
                    ><br />stock drop overnight when a high-growth narrative outran what the
                    business could actually back up
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    <strong>SOURCE:</strong><br />Morningstar, 26 May 2026
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec2893200801" class="r t-rec" style="">
      <div
        class="t-cover"
        id="recorddiv2893200801"
        bgimgfield="img"
        style="height: 80vh; background-image: url(&quot;/images/service-37a0fe3475.png&quot;)"
      >
        <div
          class="t-cover__carrier"
          id="coverCarry2893200801"
          style="
            height: 80vh;
            background-attachment: scroll;
            background-image: url(&quot;/images/service-37a0fe3475.png&quot;);
          "
          itemscope
          itemtype="http://schema.org/ImageObject"
        >
          <meta itemprop="image" content="/images/service-37a0fe3475.png" />
        </div>
        <div
          class="t-cover__filter"
          style="
            height: 80vh;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
          "
        ></div>
        <div class="t-container">
          <div class="t-col t-col_7">
            <div
              class="t-cover__wrapper t-valign_middle"
              style="height: 80vh; position: relative; z-index: 1"
            >
              <div class="t189">
                <div>
                  <div class="t189__wrapper">
                    <div class="t189__title t-title">
                      Get Your CIS Entry's First Impression Right
                    </div>
                    <div class="t189__descr t-descr t-descr_sm">
                      Tell us what CIS market or brand you're building into. We'll map what
                      currently exists — usually close to nothing — across Yandex, Google,
                      VK/Telegram and local business media, and send back a short market report
                      scoping the build before anything starts.<br /><br />This program runs
                      <strong>$5–30K/month</strong> ⚑ as a retainer, or as a scoped project for a
                      single-market launch, priced at the audit.
                    </div>
                    <div class="t189__buttons-wrapper">
                      <a
                        class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md"
                        href="#consultation"
                        @click.prevent="openConsultation()"
                        ><span class="t-btnflex__text">Request a confidential audit</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2913572101" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h3 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              Related
            </h3>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Explore Related RH Programs
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2913614001"
      class="r t-rec t-rec_pt_45 t-rec_pt-res-480_15 t-rec_pb_90 t-rec_pb-res-480_90"
      style="padding-top: 45px; padding-bottom: 90px"
    >
      <div class="t858">
        <ul
          class="t858__container t-card__container t-container t-container_flex"
          role="list"
          data-columns-in-row="4"
          style="--column-margin: 20px"
        >
          <li class="t858__col t-item t-card__col t-col t-col_3 t-align_left">
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <a
                      href="/online-reputation-management"
                      class="t-card__link"
                      id="cardtitle1_2913614001"
                      target="_blank"
                      aria-labelledby="cardtitle1_2913614001 cardbtn1_2913614001"
                    >
                      <span style="font-weight: 400; color: rgb(96, 108, 89); font-size: 14px"
                        >RH Control · Full Platform</span
                      ><br /><br />Strategic Information-Field Management
                    </a>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Once the market is established, manage search, reviews, narrative and AI answers
                    together under one retainer.
                  </div>
                </div>
                <div class="t858__btn-container t858__btn-container_topmargin">
                  <div class="t-card__btn-wrapper">
                    <div
                      class="t-btn t-btnflex t-btnflex_type_button t-btnflex_xs t-card__btn"
                      type="button"
                      id="cardbtn1_2913614001"
                    >
                      <span class="t-btnflex__text">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="t858__col t-item t-card__col t-col t-col_3 t-align_left">
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <a
                      href="/serm-services"
                      class="t-card__link"
                      id="cardtitle2_2913614001"
                      target="_blank"
                      aria-labelledby="cardtitle2_2913614001 cardbtn2_2913614001"
                    >
                      <span style="font-size: 14px; color: rgb(96, 108, 89); font-weight: 400"
                        >RH Control · Influence</span
                      ><br /><br />Search Engine Reputation Management
                    </a>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    For a footprint that already exists and needs ongoing search management, not a
                    build from zero.
                  </div>
                </div>
                <div class="t858__btn-container t858__btn-container_topmargin">
                  <div class="t-card__btn-wrapper">
                    <div
                      class="t-btn t-btnflex t-btnflex_type_button t-btnflex_xs t-card__btn"
                      type="button"
                      id="cardbtn2_2913614001"
                    >
                      <span class="t-btnflex__text">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="t858__col t-item t-card__col t-col t-col_3 t-align_left">
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <a
                      href="/reputation-narrative-management"
                      class="t-card__link"
                      id="cardtitle3_2913614001"
                      target="_blank"
                      aria-labelledby="cardtitle3_2913614001 cardbtn3_2913614001"
                    >
                      <span style="font-weight: 400; color: rgb(96, 108, 89); font-size: 14px"
                        >RH Control · Influence</span
                      ><br /><br />Brand Reputation &amp; Narrative Management
                    </a>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    Ongoing narrative management once the new market has a footprint worth actively
                    shaping.
                  </div>
                </div>
                <div class="t858__btn-container t858__btn-container_topmargin">
                  <div class="t-card__btn-wrapper">
                    <div
                      class="t-btn t-btnflex t-btnflex_type_button t-btnflex_xs t-card__btn"
                      type="button"
                      id="cardbtn3_2913614001"
                    >
                      <span class="t-btnflex__text">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="t858__col t-item t-card__col t-col t-col_3 t-align_left">
            <div class="t858__inner-col" style="background-color: #ffffff">
              <div class="t858__wrap">
                <div class="t858__wrap_top"></div>
                <div class="t858__wrap_bottom">
                  <div class="t-card__title t-name t-name_lg t858__bottommargin">
                    <a
                      href="/crisis-management-agency"
                      class="t-card__link"
                      id="cardtitle4_2913614001"
                      target="_blank"
                      aria-labelledby="cardtitle4_2913614001 cardbtn4_2913614001"
                    >
                      <span style="font-size: 14px; color: rgb(96, 108, 89); font-weight: 400"
                        >RH Defence</span
                      ><br /><br />Crisis Management
                    </a>
                  </div>
                  <div class="t-card__descr t-descr t-descr_sm">
                    If the entry has already triggered an active crisis, not ongoing build work —
                    different team, different pricing model.
                  </div>
                </div>
                <div class="t858__btn-container t858__btn-container_topmargin">
                  <div class="t-card__btn-wrapper">
                    <div
                      class="t-btn t-btnflex t-btnflex_type_button t-btnflex_xs t-card__btn"
                      type="button"
                      id="cardbtn4_2913614001"
                    >
                      <span class="t-btnflex__text">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec2914432101" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h3 class="js-block-header-title t-section__title t-title t-title_xs t-align_left">
              FAQ
            </h3>
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              Straight Answers On CIS Market Entry
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section
      id="rec2832722501"
      class="r t-rec t-rec_pb_90"
      style="padding-bottom: 90px; background-color: #ffffff"
    >
      <div class="t668">
        <div class="t-container">
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion1_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion1_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion1_2832722501']"
                    @click="toggleQuestion('accordion1_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >What is this go-to-market strategy program for the CIS?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion1_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion1_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      The CIS-market variant of the Reputation Building / Market Entry retainer, or
                      scoped project — it constructs a positive information field from zero across
                      Yandex, Google, VK/Telegram and local business media for a new market, a new
                      brand or a rebrand where almost nothing currently exists in the region. A
                      dedicated build team runs it, not a one-off translated press push.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion2_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion2_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion2_2832722501']"
                    @click="toggleQuestion('accordion2_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Do you cover Yandex and VK/Telegram, not just Google and Meta?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion2_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion2_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Yes. Search Results and Social Listening are built for Yandex alongside
                      Google, and for VK and Telegram alongside the platforms a global default build
                      usually covers — scoped to where this specific audience actually searches and
                      talks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion3_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion3_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion3_2832722501']"
                    @click="toggleQuestion('accordion3_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >What's the difference between this and Search Engine Reputation Management or
                      Brand Reputation &amp; Narrative Management?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion3_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion3_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Those workstreams manage and correct a footprint that already exists. This
                      program is for the opposite situation — building the first coherent profile
                      where there's close to nothing to correct yet. Once the market is established,
                      those workstreams take over the ongoing management.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion4_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion4_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion4_2832722501']"
                    @click="toggleQuestion('accordion4_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >How long until we see results?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion4_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion4_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Search visibility for the new name typically builds within 8–12 weeks. A
                      coherent, ranking media and mention presence usually takes 3–6 months,
                      depending on market size and how contested the entry is.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion5_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion5_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion5_2832722501']"
                    @click="toggleQuestion('accordion5_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Is this confidential?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion5_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion5_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Yes. Every engagement runs under strict confidentiality — market-entry and
                      rebrand plans are commercially sensitive by nature, and we treat them that way
                      from the first contact.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion6_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion6_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion6_2832722501']"
                    @click="toggleQuestion('accordion6_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Do you replace our in-house marketing team?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion6_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion6_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      No. We work alongside the in-house marketing, communications or country-launch
                      team as the build capacity for search, mentions and media placement — not a
                      replacement for the function.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion7_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion7_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion7_2832722501']"
                    @click="toggleQuestion('accordion7_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Do you guarantee media placements or specific rankings?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion7_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion7_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      No. We commit to compliant methods and transparent reporting on what actually
                      ran and ranked — not guaranteed placements, fake reviews or blackhat SEO.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion8_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion8_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion8_2832722501']"
                    @click="toggleQuestion('accordion8_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >What CIS markets and industries do you work with?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion8_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion8_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      CIS geographies, across any vertical entering genuinely new territory —
                      geographic expansion, a new brand launch, or a rebrand or spin-off with no
                      existing digital record in the region. Russia is usually the largest market in
                      the entry, though Kazakhstan, Uzbekistan and Belarus each behave as their own
                      dynamic market. Comparable case studies are available on request.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_12" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion9_2832722501'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion9_2832722501"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion9_2832722501']"
                    @click="toggleQuestion('accordion9_2832722501')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >How is pricing structured?</span
                    >
                    <span class="t668__icon" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#222222">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover" style="right: 0px">
                      <span class="t668__lines">
                        <svg
                          role="presentation"
                          focusable="false"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                        >
                          <g
                            stroke="none"
                            stroke-width="1px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#99ad8f">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion9_2832722501"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion9_2832722501']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Either a monthly retainer, $5–30K/month ⚑, or a scoped project for a
                      single-market launch — depending on whether the entry is one market or an
                      ongoing multi-market expansion. Full tiers are on the pricing page, or a
                      confidential audit confirms the exact quote.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </SituationLayout>
</template>
