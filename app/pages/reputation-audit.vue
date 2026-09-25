<script setup lang="ts">
import metadata from "~/data/situations/reputation-audit.json";
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
    accordion1_3070277801: false,
    accordion2_3070277801: false,
    accordion3_3070277801: false,
    accordion4_3070277801: false,
    accordion5_3070277801: false,
    accordion6_3070277801: false,
    accordion7_3070277801: false,
  },
  0,
);
const moduleLists = [];
useSeoMeta({ title: metadata.title, description: metadata.description });
</script>
<template>
  <SituationLayout slug="reputation-audit">
    <section
      id="rec3070274101"
      class="r t-rec t-rec_pt_60 t-rec_pt-res-480_30 t-rec_pb_90 t-rec_pb-res-480_45"
      style="padding-top: 60px; padding-bottom: 90px; background-color: #262626"
      data-dark=""
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="726"
          data-artboard-height-res-320="1133"
          data-artboard-height-res-480="1093"
          data-artboard-height-res-640="1107"
          data-artboard-height-res-960="678"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30702741011786954491263000003 t396__group-flex"
            data-group-id="1786954491263000003"
            data-group-top-value="616"
            data-group-heightmode="hug"
            data-group-height-value="110"
            data-group-top-res-320-value="1029"
            data-group-height-res-320-value="104"
            data-group-top-res-480-value="989"
            data-group-height-res-480-value="104"
            data-group-top-res-640-value="997"
            data-group-height-res-640-value="110"
            data-group-top-res-960-value="568"
            data-group-height-res-960-value="110"
          >
            <div class="tn-molecule" id="molecule-1786954491263000003">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702741011786954491264000007"
                data-elem-id="1786954491264000007"
                data-elem-type="button"
                data-field-top-value="616"
                data-field-height-value="54"
                data-field-top-res-320-value="1029"
                data-field-height-res-320-value="54"
                data-field-top-res-480-value="989"
                data-field-height-res-480-value="54"
                data-field-top-res-640-value="997"
                data-field-height-res-640-value="54"
                data-field-top-res-960-value="568"
                data-field-height-res-960-value="54"
              >
                <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                  <div class="tn-atom__button-content">
                    <span class="tn-atom__button-text">Request the Audit</span>
                  </div>
                  <span class="tn-atom__button-border"></span>
                </a>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702741011786954491263000004"
                data-elem-id="1786954491263000004"
                data-elem-type="text"
                data-field-top-value="682"
                data-field-height-value="44"
                data-field-top-res-320-value="1095"
                data-field-height-res-320-value="38"
                data-field-top-res-480-value="1055"
                data-field-height-res-480-value="38"
                data-field-top-res-640-value="1063"
                data-field-height-res-640-value="44"
                data-field-top-res-960-value="634"
                data-field-height-res-960-value="44"
              >
                <div class="tn-atom">
                  No commitment to any remediation. <br />If we find nothing worth acting on, we
                  will tell you that.
                </div>
              </div>
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__30702741011786954524128000008 t396__group-flex"
            data-group-id="1786954524128000008"
            data-group-top-value="144"
            data-group-heightmode="hug"
            data-group-height-value="432"
            data-group-height-res-320-value="428"
            data-group-height-res-480-value="288"
            data-group-top-res-640-value="126"
            data-group-height-res-640-value="293"
            data-group-top-res-960-value="136"
            data-group-height-res-960-value="392"
          >
            <div class="tn-molecule" id="molecule-1786954524128000008">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702741011782818395752000001"
                data-elem-id="1782818395752000001"
                data-elem-type="text"
                data-field-top-value="144"
                data-field-height-value="268"
                data-field-top-res-320-value="126"
                data-field-height-res-320-value="152"
                data-field-top-res-480-value="126"
                data-field-height-res-480-value="114"
                data-field-top-res-640-value="126"
                data-field-height-res-640-value="86"
                data-field-top-res-960-value="136"
                data-field-height-res-960-value="172"
              >
                <h1 class="tn-atom">
                  See What The Market Really Thinks About You, Before You Spend A Cent Fixing It
                </h1>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702741011784612971124000001"
                data-elem-id="1784612971124000001"
                data-elem-type="text"
                data-field-top-value="436"
                data-field-height-value="140"
                data-field-top-res-320-value="302"
                data-field-height-res-320-value="200"
                data-field-top-res-480-value="264"
                data-field-height-res-480-value="150"
                data-field-top-res-640-value="279"
                data-field-height-res-640-value="308"
                data-field-top-res-960-value="332"
                data-field-height-res-960-value="280"
              >
                <div class="tn-atom">
                  One score for everything the market sees about you, with the risks named and a
                  plan attached. We check your search results, suggestions, reviews, ratings,
                  mentions, media narratives, AI answers and compliance databases. Because brand
                  equity is measurable, and now provable.
                </div>
              </div>
            </div>
          </div>
          <div
            class="t396__elem tn-elem tn-elem__30702741011783938718278000002"
            data-elem-id="1783938718278000002"
            data-elem-type="text"
            data-field-top-value="90"
            data-field-height-value="14"
            data-field-top-res-320-value="80"
            data-field-height-res-320-value="37"
            data-field-top-res-480-value="80"
            data-field-height-res-480-value="25"
            data-field-top-res-640-value="80"
            data-field-height-res-640-value="28"
            data-field-top-res-960-value="90"
            data-field-height-res-960-value="28"
          >
            <div class="tn-atom">Reputation Audit &amp; Research Services</div>
          </div>
          <div
            class="t396__group tn-group tn-group__30702741011787039534578000002 t396__group-flex"
            data-group-id="1787039534578000002"
            data-group-top-value="172"
            data-group-heightmode="hug"
            data-group-height-value="498"
            data-group-top-res-320-value="594"
            data-group-height-res-320-value="395"
            data-group-top-res-480-value="454"
            data-group-height-res-480-value="495"
            data-group-top-res-640-value="459"
            data-group-height-res-640-value="498"
            data-group-top-res-960-value="144"
            data-group-height-res-960-value="498"
          >
            <div class="tn-molecule" id="molecule-1787039534578000002">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702741011786954550449000010"
                data-elem-id="1786954550449000010"
                data-elem-type="image"
                data-field-top-value="172"
                data-field-height-value="460"
                data-field-top-res-320-value="594"
                data-field-height-res-320-value="360"
                data-field-top-res-480-value="454"
                data-field-height-res-480-value="460"
                data-field-top-res-640-value="459"
                data-field-height-res-640-value="460"
                data-field-top-res-960-value="144"
                data-field-height-res-960-value="460"
              >
                <div class="tn-atom">
                  <img
                    class="tn-atom__img t-img"
                    src="/images/service-2d260a13da.svg"
                    alt=""
                    loading="eager"
                  />
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702741011787039522234000001"
                data-elem-id="1787039522234000001"
                data-elem-type="text"
                data-field-top-value="648"
                data-field-height-value="22"
                data-field-top-res-320-value="970"
                data-field-top-res-480-value="930"
                data-field-top-res-640-value="935"
                data-field-height-res-640-value="22"
                data-field-top-res-960-value="620"
              >
                <div class="tn-atom">RPN –– everything the market sees about you</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3070274201"
      class="r t-rec t-rec_pt_75"
      style="padding-top: 75px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="289"
          data-artboard-height-res-320="456"
          data-artboard-height-res-480="345"
          data-artboard-height-res-640="388"
          data-artboard-height-res-960="262"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30702742011784883216464000001 t396__group-flex"
            data-group-id="1784883216464000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="289"
            data-group-height-res-320-value="456"
            data-group-height-res-480-value="345"
            data-group-height-res-640-value="388"
            data-group-height-res-960-value="262"
          >
            <div class="tn-molecule" id="molecule-1784883216464000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30702742011783420935752000001 t396__group-flex"
                data-group-id="1783420935752000001"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="40"
                data-group-height-res-320-value="38"
                data-group-height-res-480-value="38"
                data-group-height-res-640-value="40"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="40"
              >
                <div class="tn-molecule" id="molecule-1783420935752000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702742011784117186390000001"
                    data-elem-id="1784117186390000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-320-value="10"
                    data-field-height-res-480-value="10"
                    data-field-height-res-640-value="10"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702742011782893831397000001"
                    data-elem-id="1782893831397000001"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="14"
                    data-field-height-res-320-value="12"
                    data-field-height-res-480-value="12"
                    data-field-height-res-640-value="14"
                    data-field-top-res-960-value="26"
                    data-field-height-res-960-value="14"
                  >
                    <div class="tn-atom">Two audits, one research method</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30702742011786962042039000002 t396__group-flex"
                data-group-id="1786962042039000002"
                data-group-top-value="84"
                data-group-heightmode="hug"
                data-group-height-value="205"
                data-group-height-res-320-value="394"
                data-group-top-res-480-value="62"
                data-group-height-res-480-value="283"
                data-group-height-res-640-value="316"
                data-group-top-res-960-value="72"
                data-group-height-res-960-value="190"
              >
                <div class="tn-molecule" id="molecule-1786962042039000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702742011782821563728000008"
                    data-elem-id="1782821563728000008"
                    data-elem-type="text"
                    data-field-top-value="84"
                    data-field-height-value="57"
                    data-field-top-res-320-value="62"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="62"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="72"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">A Company And A Person Are Checked Differently</h2>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30702742011786962091929000005 t396__group-flex"
                    data-group-id="1786962091929000005"
                    data-group-top-value="165"
                    data-group-heightmode="hug"
                    data-group-height-value="124"
                    data-group-top-res-320-value="194"
                    data-group-height-res-320-value="262"
                    data-group-top-res-480-value="158"
                    data-group-height-res-480-value="187"
                    data-group-top-res-640-value="180"
                    data-group-height-res-640-value="208"
                    data-group-top-res-960-value="138"
                    data-group-height-res-960-value="124"
                  >
                    <div class="tn-molecule" id="molecule-1786962091929000005">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30702742011786962035963000001"
                        data-elem-id="1786962035963000001"
                        data-elem-type="text"
                        data-field-top-value="165"
                        data-field-height-value="28"
                        data-field-top-res-320-value="194"
                        data-field-height-res-320-value="108"
                        data-field-top-res-480-value="158"
                        data-field-height-res-480-value="108"
                        data-field-top-res-640-value="180"
                        data-field-height-res-640-value="42"
                        data-field-top-res-960-value="138"
                        data-field-height-res-960-value="28"
                      >
                        <h2 class="tn-atom">
                          <strong
                            >One method, two tracks: pick the one that matches what you need
                            checked.</strong
                          >
                        </h2>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30702742011786962083728000004"
                        data-elem-id="1786962083728000004"
                        data-elem-type="text"
                        data-field-top-value="205"
                        data-field-height-value="84"
                        data-field-top-res-320-value="281"
                        data-field-height-res-320-value="108"
                        data-field-top-res-480-value="220"
                        data-field-height-res-480-value="108"
                        data-field-top-res-640-value="248"
                        data-field-height-res-640-value="42"
                        data-field-top-res-960-value="178"
                        data-field-height-res-960-value="84"
                      >
                        <h2 class="tn-atom">
                          The scoring model is identical. What sits under it is not: a company is
                          judged on reviews, ratings and map listings, a person is judged on images,
                          biography sources and compliance databases. Pick the track that matches
                          what you need diagnosed.
                        </h2>
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
      id="rec3077314101"
      class="r t-rec t-rec_pt_45 t-rec_pb_90"
      style="padding-top: 45px; padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="594"
          data-artboard-height-res-320="1204"
          data-artboard-height-res-480="1224"
          data-artboard-height-res-640="1006"
          data-artboard-height-res-960="661"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30773141011766660917739000024 t396__group-flex"
            data-group-id="1766660917739000024"
            data-group-top-value="0"
            data-group-heightmode="fill"
            data-group-height-value="522"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="1116"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="1156"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="934"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="589"
          >
            <div class="tn-molecule" id="molecule-1766660917739000024">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30773141011766659567936000023 t396__group-flex"
                data-group-id="1766659567936000023"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="522"
                data-group-top-res-320-value="0"
                data-group-height-res-320-value="572"
                data-group-top-res-480-value="0"
                data-group-height-res-480-value="568"
                data-group-top-res-640-value="0"
                data-group-height-res-640-value="469"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="589"
              >
                <div class="tn-molecule" id="molecule-1766659567936000023">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30773141011766649510438000001 t396__group-flex"
                    data-group-id="1766649510438000001"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="522"
                    data-group-top-res-320-value="0"
                    data-group-height-res-320-value="572"
                    data-group-top-res-480-value="0"
                    data-group-height-res-480-value="568"
                    data-group-top-res-640-value="0"
                    data-group-height-res-640-value="469"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="589"
                  >
                    <div class="tn-molecule" id="molecule-1766649510438000001">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30773141011766647912741000001 t396__group-flex"
                        data-group-id="1766647912741000001"
                        data-group-top-value="40"
                        data-group-heightmode="hug"
                        data-group-height-value="388"
                        data-group-top-res-320-value="24"
                        data-group-height-res-320-value="470"
                        data-group-top-res-480-value="32"
                        data-group-height-res-480-value="450"
                        data-group-top-res-640-value="40"
                        data-group-height-res-640-value="335"
                        data-group-top-res-960-value="40"
                        data-group-height-res-960-value="455"
                      >
                        <div class="tn-molecule" id="molecule-1766647912741000001">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011786962779019000001"
                            data-elem-id="1786962779019000001"
                            data-elem-type="text"
                            data-field-top-value="40"
                            data-field-height-value="22"
                            data-field-top-res-320-value="24"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="32"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="40"
                            data-field-height-res-640-value="22"
                            data-field-top-res-960-value="40"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">For companies</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011766647912741000003"
                            data-elem-id="1766647912741000003"
                            data-elem-type="text"
                            data-field-top-value="72"
                            data-field-height-value="36"
                            data-field-top-res-320-value="53"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="61"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="72"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="72"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom"><strong>Brand Reputation Audit</strong></div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011766647912741000002"
                            data-elem-id="1766647912741000002"
                            data-elem-type="text"
                            data-field-top-value="118"
                            data-field-height-value="24"
                            data-field-top-res-320-value="92"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="100"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="113"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="113"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              For brands, holdings and multi-market operations. Built for boards,
                              investors, banks and diligence rooms. Just as useful for day-to-day
                              brand management.
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011786962889710000006"
                            data-elem-id="1786962889710000006"
                            data-elem-type="text"
                            data-field-top-value="200"
                            data-field-height-value="120"
                            data-field-top-res-320-value="222"
                            data-field-height-res-320-value="240"
                            data-field-top-res-480-value="206"
                            data-field-height-res-480-value="216"
                            data-field-top-res-640-value="195"
                            data-field-height-res-640-value="120"
                            data-field-top-res-960-value="219"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              <ul>
                                <li>Search results and suggestions across markets and languages</li>
                                <li>Review platforms, maps, apps and employer sites</li>
                                <li>Mentions, media narratives and coordinated attack detection</li>
                                <li>AI answers and the sources models cite</li>
                                <li>Customer loss estimate and competitor benchmark</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011766649225906000001"
                        data-elem-id="1766649225906000001"
                        data-elem-type="button"
                        data-field-top-value="428"
                        data-field-height-value="54"
                        data-field-top-res-320-value="494"
                        data-field-height-res-320-value="54"
                        data-field-top-res-480-value="482"
                        data-field-height-res-480-value="54"
                        data-field-top-res-640-value="375"
                        data-field-height-res-640-value="54"
                        data-field-top-res-960-value="495"
                        data-field-height-res-960-value="51"
                      >
                        <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                          <div class="tn-atom__button-content">
                            <span class="tn-atom__button-text">Request the Business Audit</span>
                          </div>
                          <span class="tn-atom__button-border"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30773141011766660913093000001 t396__group-flex"
                data-group-id="1766660913093000001"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="522"
                data-group-top-res-320-value="592"
                data-group-height-res-320-value="524"
                data-group-top-res-480-value="588"
                data-group-height-res-480-value="568"
                data-group-top-res-640-value="489"
                data-group-height-res-640-value="445"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="589"
              >
                <div class="tn-molecule" id="molecule-1766660913093000001">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30773141011766660913093000002 t396__group-flex"
                    data-group-id="1766660913093000002"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="522"
                    data-group-top-res-320-value="592"
                    data-group-height-res-320-value="524"
                    data-group-top-res-480-value="588"
                    data-group-height-res-480-value="568"
                    data-group-top-res-640-value="489"
                    data-group-height-res-640-value="445"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="589"
                  >
                    <div class="tn-molecule" id="molecule-1766660913093000002">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30773141011766660913094000021 t396__group-flex"
                        data-group-id="1766660913094000021"
                        data-group-top-value="40"
                        data-group-heightmode="hug"
                        data-group-height-value="340"
                        data-group-top-res-320-value="616"
                        data-group-height-res-320-value="422"
                        data-group-top-res-480-value="620"
                        data-group-height-res-480-value="450"
                        data-group-top-res-640-value="529"
                        data-group-height-res-640-value="311"
                        data-group-top-res-960-value="40"
                        data-group-height-res-960-value="431"
                      >
                        <div class="tn-molecule" id="molecule-1766660913094000021">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011786962801829000002"
                            data-elem-id="1786962801829000002"
                            data-elem-type="text"
                            data-field-top-value="40"
                            data-field-height-value="22"
                            data-field-top-res-320-value="616"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="620"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="529"
                            data-field-height-res-640-value="22"
                            data-field-top-res-960-value="40"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">For executives and private clients</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011766660913094000023"
                            data-elem-id="1766660913094000023"
                            data-elem-type="text"
                            data-field-top-value="72"
                            data-field-height-value="36"
                            data-field-top-res-320-value="645"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="649"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="561"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="72"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom"><strong>Personal Reputation Audit</strong></div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011766660913094000022"
                            data-elem-id="1766660913094000022"
                            data-elem-type="text"
                            data-field-top-value="118"
                            data-field-height-value="24"
                            data-field-top-res-320-value="684"
                            data-field-height-res-320-value="72"
                            data-field-top-res-480-value="688"
                            data-field-height-res-480-value="72"
                            data-field-top-res-640-value="602"
                            data-field-height-res-640-value="48"
                            data-field-top-res-960-value="113"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              For owners, C-level, public figures, beneficiaries and anyone facing
                              KYC, AML or investor screening.
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011786962879789000005"
                            data-elem-id="1786962879789000005"
                            data-elem-type="text"
                            data-field-top-value="176"
                            data-field-height-value="144"
                            data-field-top-res-320-value="766"
                            data-field-height-res-320-value="240"
                            data-field-top-res-480-value="770"
                            data-field-height-res-480-value="240"
                            data-field-top-res-640-value="660"
                            data-field-height-res-640-value="120"
                            data-field-top-res-960-value="195"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              <br />
                              <ul>
                                <li>Name search, suggestions and image results</li>
                                <li>Everything published about you, with attack detection</li>
                                <li>AI answers across five platforms and their top sources</li>
                                <li>LexisNexis, World-Check and Dow Jones exposure</li>
                                <li>Compliance readiness for banks, visas and diligence</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30773141011766660913093000005"
                        data-elem-id="1766660913093000005"
                        data-elem-type="button"
                        data-field-top-value="428"
                        data-field-height-value="54"
                        data-field-top-res-320-value="1038"
                        data-field-height-res-320-value="54"
                        data-field-top-res-480-value="1070"
                        data-field-height-res-480-value="54"
                        data-field-top-res-640-value="840"
                        data-field-height-res-640-value="54"
                        data-field-top-res-960-value="495"
                        data-field-height-res-960-value="51"
                      >
                        <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                          <div class="tn-atom__button-content">
                            <span class="tn-atom__button-text">Request the Personal Audit</span>
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
          <div
            class="t396__elem tn-elem tn-elem__30773141011786962942547000009"
            data-elem-id="1786962942547000009"
            data-elem-type="text"
            data-field-top-value="546"
            data-field-height-value="48"
            data-field-top-res-320-value="1132"
            data-field-height-res-320-value="161"
            data-field-top-res-480-value="1176"
            data-field-height-res-480-value="92"
            data-field-top-res-640-value="958"
            data-field-height-res-640-value="48"
            data-field-top-res-960-value="613"
            data-field-height-res-960-value="48"
          >
            <div class="tn-atom">
              Holdings and their beneficial owners are advised to be audited together. <br />The two
              scopes are quoted as one project.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec3078665101" class="r t-rec t-rec_pt_75" style="padding-top: 75px">
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="308"
          data-artboard-height-res-320="394"
          data-artboard-height-res-480="308"
          data-artboard-height-res-640="320"
          data-artboard-height-res-960="222"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30786651011784883216464000001 t396__group-flex"
            data-group-id="1784883216464000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="308"
            data-group-height-res-320-value="394"
            data-group-height-res-480-value="308"
            data-group-height-res-640-value="320"
            data-group-height-res-960-value="222"
          >
            <div class="tn-molecule" id="molecule-1784883216464000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30786651011783420935752000001 t396__group-flex"
                data-group-id="1783420935752000001"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="40"
                data-group-height-res-320-value="38"
                data-group-height-res-480-value="38"
                data-group-height-res-640-value="40"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="40"
              >
                <div class="tn-molecule" id="molecule-1783420935752000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30786651011784117186390000001"
                    data-elem-id="1784117186390000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-320-value="10"
                    data-field-height-res-480-value="10"
                    data-field-height-res-640-value="10"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30786651011782893831397000001"
                    data-elem-id="1782893831397000001"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="14"
                    data-field-height-res-320-value="12"
                    data-field-height-res-480-value="12"
                    data-field-height-res-640-value="14"
                    data-field-top-res-960-value="26"
                    data-field-height-res-960-value="14"
                  >
                    <div class="tn-atom">Why audit is the first mandatory step</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30786651011786962042039000002 t396__group-flex"
                data-group-id="1786962042039000002"
                data-group-top-value="84"
                data-group-heightmode="hug"
                data-group-height-value="224"
                data-group-height-res-320-value="332"
                data-group-top-res-480-value="62"
                data-group-height-res-480-value="246"
                data-group-height-res-640-value="248"
                data-group-top-res-960-value="72"
                data-group-height-res-960-value="150"
              >
                <div class="tn-molecule" id="molecule-1786962042039000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30786651011782821563728000008"
                    data-elem-id="1782821563728000008"
                    data-elem-type="text"
                    data-field-top-value="84"
                    data-field-height-value="115"
                    data-field-top-res-320-value="62"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="62"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="72"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">Fixing A Problem You Haven't Measured Costs The Most</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30786651011786962083728000004"
                    data-elem-id="1786962083728000004"
                    data-elem-type="text"
                    data-field-top-value="223"
                    data-field-height-value="85"
                    data-field-top-res-320-value="194"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="158"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="180"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="138"
                    data-field-height-res-960-value="84"
                  >
                    <h2 class="tn-atom">
                      Most companies discover their information field through the damage: a deal
                      that goes quiet, a bank that asks an unexpected question, a hiring funnel that
                      dries up. By then you are paying for both: the problem itself and the
                      guesswork.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3078376901"
      class="r t-rec t-rec_pt_45 t-rec_pb_60"
      style="padding-top: 45px; padding-bottom: 60px"
    >
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="402"
          data-artboard-height-res-320="962"
          data-artboard-height-res-480="898"
          data-artboard-height-res-640="766"
          data-artboard-height-res-960="469"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30783769011766660917739000024 t396__group-flex"
            data-group-id="1766660917739000024"
            data-group-top-value="0"
            data-group-heightmode="fill"
            data-group-height-value="402"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="962"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="898"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="766"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="469"
          >
            <div class="tn-molecule" id="molecule-1766660917739000024">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30783769011766659567936000023 t396__group-flex"
                data-group-id="1766659567936000023"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="402"
                data-group-top-res-320-value="0"
                data-group-height-res-320-value="507"
                data-group-top-res-480-value="0"
                data-group-height-res-480-value="475"
                data-group-top-res-640-value="0"
                data-group-height-res-640-value="373"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="469"
              >
                <div class="tn-molecule" id="molecule-1766659567936000023">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30783769011766649510438000001 t396__group-flex"
                    data-group-id="1766649510438000001"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="402"
                    data-group-top-res-320-value="0"
                    data-group-height-res-320-value="507"
                    data-group-top-res-480-value="0"
                    data-group-height-res-480-value="475"
                    data-group-top-res-640-value="0"
                    data-group-height-res-640-value="373"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="469"
                  >
                    <div class="tn-molecule" id="molecule-1766649510438000001">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30783769011766647912741000001 t396__group-flex"
                        data-group-id="1766647912741000001"
                        data-group-top-value="40"
                        data-group-heightmode="hug"
                        data-group-height-value="320"
                        data-group-top-res-320-value="24"
                        data-group-height-res-320-value="457"
                        data-group-top-res-480-value="32"
                        data-group-height-res-480-value="409"
                        data-group-top-res-640-value="40"
                        data-group-height-res-640-value="291"
                        data-group-top-res-960-value="40"
                        data-group-height-res-960-value="387"
                      >
                        <div class="tn-molecule" id="molecule-1766647912741000001">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30783769011766647912741000003"
                            data-elem-id="1766647912741000003"
                            data-elem-type="text"
                            data-field-top-value="40"
                            data-field-height-value="36"
                            data-field-top-res-320-value="24"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="32"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="40"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="40"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">
                              <strong style="color: rgb(162, 103, 100)">Acting Blind</strong>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30783769011786962889710000006"
                            data-elem-id="1786962889710000006"
                            data-elem-type="text"
                            data-field-top-value="96"
                            data-field-height-value="120"
                            data-field-top-res-320-value="73"
                            data-field-height-res-320-value="240"
                            data-field-top-res-480-value="81"
                            data-field-height-res-480-value="216"
                            data-field-top-res-640-value="91"
                            data-field-height-res-640-value="120"
                            data-field-top-res-960-value="91"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              <ul>
                                <li>
                                  You treat what you noticed, not what is costing you. The loudest
                                  complaint is rarely the most important one.
                                </li>
                                <li>
                                  You buy services by name, reviews, PR, SEO or market research
                                  companies, with no way to know which one moves the number.
                                </li>
                                <li>
                                  You have no baseline, so you can never prove the work paid for
                                  itself.
                                </li>
                                <li>
                                  Blind spots stay blind: suggestions, AI answers, HR platforms,
                                  regional review sites, closed communities.
                                </li>
                                <li>
                                  You cannot distinguish an organic complaint from a coordinated
                                  attack, and they need opposite responses.
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30783769011766660913093000001 t396__group-flex"
                data-group-id="1766660913093000001"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="402"
                data-group-top-res-320-value="527"
                data-group-height-res-320-value="435"
                data-group-top-res-480-value="495"
                data-group-height-res-480-value="403"
                data-group-top-res-640-value="393"
                data-group-height-res-640-value="373"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="469"
              >
                <div class="tn-molecule" id="molecule-1766660913093000001">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30783769011766660913093000002 t396__group-flex"
                    data-group-id="1766660913093000002"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="402"
                    data-group-top-res-320-value="527"
                    data-group-height-res-320-value="435"
                    data-group-top-res-480-value="495"
                    data-group-height-res-480-value="403"
                    data-group-top-res-640-value="393"
                    data-group-height-res-640-value="373"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="469"
                  >
                    <div class="tn-molecule" id="molecule-1766660913093000002">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30783769011766660913094000021 t396__group-flex"
                        data-group-id="1766660913094000021"
                        data-group-top-value="40"
                        data-group-heightmode="hug"
                        data-group-height-value="296"
                        data-group-top-res-320-value="551"
                        data-group-height-res-320-value="385"
                        data-group-top-res-480-value="527"
                        data-group-height-res-480-value="337"
                        data-group-top-res-640-value="433"
                        data-group-height-res-640-value="291"
                        data-group-top-res-960-value="40"
                        data-group-height-res-960-value="339"
                      >
                        <div class="tn-molecule" id="molecule-1766660913094000021">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30783769011766660913094000023"
                            data-elem-id="1766660913094000023"
                            data-elem-type="text"
                            data-field-top-value="40"
                            data-field-height-value="36"
                            data-field-top-res-320-value="551"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="527"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="433"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="40"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">
                              <strong style="color: rgb(96, 108, 89)"
                                >Acting with the Audit Done</strong
                              >
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30783769011786962879789000005"
                            data-elem-id="1786962879789000005"
                            data-elem-type="text"
                            data-field-top-value="96"
                            data-field-height-value="120"
                            data-field-top-res-320-value="600"
                            data-field-height-res-320-value="240"
                            data-field-top-res-480-value="576"
                            data-field-height-res-480-value="240"
                            data-field-top-res-640-value="484"
                            data-field-height-res-640-value="120"
                            data-field-top-res-960-value="91"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              <ul>
                                <li>
                                  You know which surface is actually leaking money, and in which
                                  market.
                                </li>
                                <li>
                                  Every proposed action is tied to a finding, and every finding to a
                                  number.
                                </li>
                                <li>
                                  You get a baseline. Every month afterwards is measured against it.
                                </li>
                                <li>
                                  You see the whole field at once, including the surfaces you didn't
                                  know were being read.
                                </li>
                                <li>
                                  You can walk into a board, a bank or a diligence room with
                                  evidence instead of an impression.
                                </li>
                              </ul>
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
    <section id="rec3078740601" class="r t-rec t-rec_pb_0" style="padding-bottom: 0px">
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
                  <div class="t-card__title t-name t-name_lg">
                    <strong style="color: rgb(162, 103, 100); font-size: 32px">95%</strong><br />of
                    users look only at the first page of search results.
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
                  <div class="t-card__title t-name t-name_lg">
                    <strong style="color: rgb(162, 103, 100); font-size: 32px">41.6%</strong
                    ><br />of all clicks are attracted by negative search suggestions.
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
                  <div class="t-card__title t-name t-name_lg">
                    <strong style="font-size: 32px; color: rgb(162, 103, 100)">41.8%</strong
                    ><br />less likely to purchase after exposure to negative search results.
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
                  <div class="t-card__title t-name t-name_lg">
                    <strong style="color: rgb(162, 103, 100); font-size: 32px">79%</strong><br />of
                    organisations screen reputation factors during due diligence on partners and
                    third parties.
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section id="rec3078787101" class="r t-rec" style="">
      <div class="t1152">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <div class="js-block-header-descr t-section__descr t-descr t-descr_xl t-align_left">
              <div style="font-size: 16px" data-customstyle="yes">
                Industry research compiled by Reputation House. Figures are indicative of category
                behaviour, not&nbsp;a&nbsp;forecast for your case. The audit replaces them with
                insight drawn from your own numbers.
              </div>
            </div>
          </div>
        </div>
        <div class="t-container">
          <div class="t-col t-col_12"><div class="t-text t-text_md"></div></div>
        </div>
      </div>
    </section>
    <section id="rec3094164101" class="r t-rec" style="">
      <div
        class="t-cover"
        id="recorddiv3094164101"
        bgimgfield="img"
        style="height: 60vh; background-image: url(&quot;/images/service-37a0fe3475.png&quot;)"
      >
        <div
          class="t-cover__carrier"
          id="coverCarry3094164101"
          style="
            height: 60vh;
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
            height: 60vh;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
          "
        ></div>
        <div class="t-container">
          <div class="t-col t-col_7">
            <div
              class="t-cover__wrapper t-valign_middle"
              style="height: 60vh; position: relative; z-index: 1"
            >
              <div class="t189">
                <div>
                  <div class="t189__wrapper">
                    <div class="t189__title t-title">Start With What's Already&nbsp;There</div>
                    <div class="t189__descr t-descr t-descr_sm">
                      A 30-minute call and we'll tell you what the audit would cover for&nbsp;your
                      markets, what it would likely find, and whether you&nbsp;need one&nbsp;at all.
                    </div>
                    <div class="t189__buttons-wrapper">
                      <a
                        class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md"
                        href="#consultation"
                        @click.prevent="openConsultation()"
                        ><span class="t-btnflex__text">Request the Audit</span>
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
    <section
      id="rec3078979801"
      class="r t-rec t-rec_pt_75"
      style="padding-top: 75px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="363"
          data-artboard-height-res-320="469"
          data-artboard-height-res-480="358"
          data-artboard-height-res-640="376"
          data-artboard-height-res-960="278"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30789798011784883216464000001 t396__group-flex"
            data-group-id="1784883216464000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="363"
            data-group-height-res-320-value="469"
            data-group-height-res-480-value="358"
            data-group-height-res-640-value="376"
            data-group-height-res-960-value="278"
          >
            <div class="tn-molecule" id="molecule-1784883216464000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30789798011783420935752000001 t396__group-flex"
                data-group-id="1783420935752000001"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="40"
                data-group-height-res-320-value="38"
                data-group-height-res-480-value="38"
                data-group-height-res-640-value="40"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="40"
              >
                <div class="tn-molecule" id="molecule-1783420935752000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30789798011784117186390000001"
                    data-elem-id="1784117186390000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-320-value="10"
                    data-field-height-res-480-value="10"
                    data-field-height-res-640-value="10"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30789798011782893831397000001"
                    data-elem-id="1782893831397000001"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="14"
                    data-field-height-res-320-value="12"
                    data-field-height-res-480-value="12"
                    data-field-height-res-640-value="14"
                    data-field-top-res-960-value="26"
                    data-field-height-res-960-value="14"
                  >
                    <div class="tn-atom">What we analyse</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30789798011786962042039000002 t396__group-flex"
                data-group-id="1786962042039000002"
                data-group-top-value="84"
                data-group-heightmode="hug"
                data-group-height-value="279"
                data-group-height-res-320-value="407"
                data-group-top-res-480-value="62"
                data-group-height-res-480-value="296"
                data-group-height-res-640-value="304"
                data-group-top-res-960-value="72"
                data-group-height-res-960-value="206"
              >
                <div class="tn-molecule" id="molecule-1786962042039000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30789798011782821563728000008"
                    data-elem-id="1782821563728000008"
                    data-elem-type="text"
                    data-field-top-value="84"
                    data-field-height-value="115"
                    data-field-top-res-320-value="62"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="62"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="72"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">
                      Five Places Where Your Brand Online Reputation is Formed
                    </h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30789798011786962083728000004"
                    data-elem-id="1786962083728000004"
                    data-elem-type="text"
                    data-field-top-value="223"
                    data-field-height-value="140"
                    data-field-top-res-320-value="194"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="158"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="180"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="138"
                    data-field-height-res-960-value="84"
                  >
                    <h2 class="tn-atom">
                      Positive, negative or neutral online reputation — all of it shapes buyers,
                      banks, regulators and candidates decisions on your brand. Each direction is
                      scored separately, then rolled into one index. This index shows brand
                      performance the way the market actually perceive it, across target audiences
                      and regions, so leadership can make informed decisions, backed by something
                      data-driven, instead of guessing.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3070274601"
      class="r t-rec t-rec_pt_60 t-rec_pb_60"
      style="padding-top: 60px; padding-bottom: 60px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="200"
          data-artboard-height-res-320="414"
          data-artboard-height-res-480="289"
          data-artboard-height-res-640="288"
          data-artboard-height-res-960="204"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30702746011784189614328000001 t396__group-flex"
            data-group-id="1784189614328000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="228"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="414"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="289"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="288"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="204"
          >
            <div
              class="tn-molecule t-bgimg"
              id="molecule-1784189614328000001"
              style="
                background-image: url(&quot;/images/service-cf3307be13.png&quot;);
                background-image: url(&quot;/images/service-cf3307be13.png&quot;);
              "
            >
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30702746011784189614328000003 t396__group-flex"
                data-group-id="1784189614328000003"
                data-group-top-value="24"
                data-group-heightmode="hug"
                data-group-height-value="28"
                data-group-top-res-320-value="24"
                data-group-height-res-320-value="50"
                data-group-top-res-480-value="24"
                data-group-height-res-480-value="25"
                data-group-top-res-640-value="24"
                data-group-height-res-640-value="28"
                data-group-top-res-960-value="24"
                data-group-height-res-960-value="28"
              >
                <div class="tn-molecule" id="molecule-1784189614328000003">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702746011784189614328000005"
                    data-elem-id="1784189614328000005"
                    data-elem-type="image"
                    data-field-top-value="24"
                    data-field-height-value="25"
                    data-field-top-res-320-value="24"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="24"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="24"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/service-6e75ef3c21.svg"
                        alt="key"
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702746011784189614328000004"
                    data-elem-id="1784189614328000004"
                    data-elem-type="text"
                    data-field-top-value="24"
                    data-field-height-value="28"
                    data-field-top-res-320-value="24"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="24"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="24"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">Clearer Consumer Insight, Not Just Sentiment</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702746011784189614328000002"
                data-elem-id="1784189614328000002"
                data-elem-type="text"
                data-field-top-value="64"
                data-field-height-value="140"
                data-field-top-res-320-value="90"
                data-field-height-res-320-value="144"
                data-field-top-res-480-value="65"
                data-field-height-res-480-value="96"
                data-field-top-res-640-value="68"
                data-field-height-res-640-value="72"
                data-field-top-res-960-value="68"
                data-field-height-res-960-value="48"
              >
                <div class="tn-atom">
                  We track what keeps repeating, not just the tone of mentions: the same complaint,
                  the same phrase in a search suggestion, the same flag in a screening database.
                  That is <strong>consumer's insights </strong>you can act on. It also helps
                  <strong>uncover blind spots by region and audience segmentation</strong>, so you
                  can identify opportunities as well as risks, and see with real clarity where you
                  stand out from the competition around you. In a crowded market, that's what gives
                  you an advantage.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3079087501"
      class="r t-rec t-rec_pb_90"
      style="padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="20"
          data-artboard-height-res-320="2634"
          data-artboard-height-res-480="2442"
          data-artboard-height-res-640="2349"
          data-artboard-height-res-960="1182"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30790875011766660917739000024 t396__group-flex"
            data-group-id="1766660917739000024"
            data-group-top-value="0"
            data-group-heightmode="fill"
            data-group-height-value="20"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="2634"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="2442"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="2349"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="1182"
          >
            <div class="tn-molecule" id="molecule-1766660917739000024">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30790875011786965227943000011 t396__group-flex"
                data-group-id="1786965227943000011"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="486"
                data-group-height-res-320-value="1307"
                data-group-height-res-480-value="1187"
                data-group-height-res-640-value="1175"
                data-group-height-res-960-value="593"
              >
                <div class="tn-molecule" id="molecule-1786965227943000011">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30790875011786965375480000015 t396__group-flex"
                    data-group-id="1786965375480000015"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="486"
                    data-group-top-res-320-value="0"
                    data-group-height-res-320-value="372"
                    data-group-top-res-480-value="0"
                    data-group-height-res-480-value="364"
                    data-group-top-res-640-value="0"
                    data-group-height-res-640-value="367"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="593"
                  >
                    <div class="tn-molecule" id="molecule-1786965375480000015">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965375480000022"
                        data-elem-id="1786965375480000022"
                        data-elem-type="image"
                        data-field-top-value="40"
                        data-field-height-value="32"
                        data-field-top-res-320-value="24"
                        data-field-height-res-320-value="32"
                        data-field-top-res-480-value="32"
                        data-field-height-res-480-value="32"
                        data-field-height-res-640-value="32"
                        data-field-top-res-960-value="32"
                        data-field-height-res-960-value="32"
                      >
                        <div class="tn-atom">
                          <img
                            class="tn-atom__img t-img"
                            src="/images/service-bcc55975c3.svg"
                            alt=""
                            loading="eager"
                          />
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30790875011786965375480000018 t396__group-flex"
                        data-group-id="1786965375480000018"
                        data-group-top-value="92"
                        data-group-heightmode="hug"
                        data-group-height-value="166"
                        data-group-top-res-320-value="76"
                        data-group-height-res-320-value="132"
                        data-group-top-res-480-value="84"
                        data-group-height-res-480-value="108"
                        data-group-height-res-640-value="111"
                        data-group-top-res-960-value="84"
                        data-group-height-res-960-value="184"
                      >
                        <div class="tn-molecule" id="molecule-1786965375480000018">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965375480000021"
                            data-elem-id="1786965375480000021"
                            data-elem-type="text"
                            data-field-top-value="92"
                            data-field-height-value="22"
                            data-field-top-res-320-value="76"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="84"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="84"
                            data-field-height-res-640-value="22"
                            data-field-top-res-960-value="84"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">I. Search</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965375480000020"
                            data-elem-id="1786965375480000020"
                            data-elem-type="text"
                            data-field-top-value="122"
                            data-field-height-value="28"
                            data-field-top-res-320-value="103"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="111"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="114"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="114"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">Search Results and Suggestions</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965375480000019"
                            data-elem-id="1786965375480000019"
                            data-elem-type="text"
                            data-field-top-value="186"
                            data-field-height-value="24"
                            data-field-top-res-320-value="136"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="144"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="147"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="172"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              What a user sees before they ever reach your site, in every market and
                              language in scope.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965375480000017"
                        data-elem-id="1786965375480000017"
                        data-elem-type="text"
                        data-field-top-value="278"
                        data-field-height-value="120"
                        data-field-top-res-320-value="228"
                        data-field-height-res-320-value="240"
                        data-field-top-res-480-value="212"
                        data-field-height-res-480-value="216"
                        data-field-top-res-640-value="215"
                        data-field-height-res-640-value="120"
                        data-field-top-res-960-value="288"
                        data-field-height-res-960-value="115"
                      >
                        <div class="tn-atom">
                          <ul>
                            <li>Search suggestions management;</li>
                            <li>Top-10 / 20 / 30 results;</li>
                            <li>General vs. reputational queries;</li>
                            <li>Video and image results;</li>
                            <li>Google and Yandex, by region.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30790875011786965388037000023 t396__group-flex"
                    data-group-id="1786965388037000023"
                    data-group-top-value="0"
                    data-group-heightmode="hug"
                    data-group-height-value="486"
                    data-group-top-res-320-value="392"
                    data-group-height-res-320-value="475"
                    data-group-top-res-480-value="384"
                    data-group-height-res-480-value="419"
                    data-group-top-res-640-value="387"
                    data-group-height-res-640-value="401"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="593"
                  >
                    <div class="tn-molecule" id="molecule-1786965388037000023">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965388038000030"
                        data-elem-id="1786965388038000030"
                        data-elem-type="image"
                        data-field-top-value="40"
                        data-field-height-value="32"
                        data-field-top-res-320-value="416"
                        data-field-height-res-320-value="32"
                        data-field-top-res-480-value="416"
                        data-field-height-res-480-value="32"
                        data-field-top-res-640-value="419"
                        data-field-height-res-640-value="32"
                        data-field-top-res-960-value="32"
                        data-field-height-res-960-value="32"
                      >
                        <div class="tn-atom">
                          <img
                            class="tn-atom__img t-img"
                            src="/images/service-9a5058fcae.svg"
                            alt=""
                            loading="eager"
                          />
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30790875011786965388038000026 t396__group-flex"
                        data-group-id="1786965388038000026"
                        data-group-top-value="92"
                        data-group-heightmode="hug"
                        data-group-height-value="166"
                        data-group-top-res-320-value="468"
                        data-group-height-res-320-value="187"
                        data-group-top-res-480-value="468"
                        data-group-height-res-480-value="163"
                        data-group-top-res-640-value="471"
                        data-group-height-res-640-value="145"
                        data-group-top-res-960-value="84"
                        data-group-height-res-960-value="217"
                      >
                        <div class="tn-molecule" id="molecule-1786965388038000026">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30790875011786969408867000003 t396__group-flex"
                            data-group-id="1786969408867000003"
                            data-group-top-value="92"
                            data-group-heightmode="hug"
                            data-group-height-value="26"
                            data-group-height-res-320-value="50"
                            data-group-top-res-480-value="468"
                            data-group-height-res-480-value="50"
                            data-group-top-res-640-value="471"
                            data-group-height-res-640-value="56"
                            data-group-top-res-960-value="84"
                            data-group-height-res-960-value="56"
                          >
                            <div class="tn-molecule" id="molecule-1786969408867000003">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965388038000029"
                                data-elem-id="1786965388038000029"
                                data-elem-type="text"
                                data-field-top-value="94"
                                data-field-height-value="22"
                                data-field-top-res-320-value="468"
                                data-field-height-res-320-value="19"
                                data-field-top-res-480-value="468"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="471"
                                data-field-height-res-640-value="22"
                                data-field-top-res-960-value="84"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">II. Reviews</div>
                              </div>
                              <div
                                class="t396__group tn-group t396__elem-flex tn-group__30790875011786969361515000001 t396__group-flex"
                                data-group-id="1786969361515000001"
                                data-group-top-value="92"
                                data-group-heightmode="hug"
                                data-group-height-value="26"
                                data-group-top-res-320-value="495"
                                data-group-height-res-320-value="23"
                                data-group-top-res-480-value="495"
                                data-group-height-res-480-value="23"
                                data-group-top-res-640-value="501"
                                data-group-height-res-640-value="26"
                                data-group-top-res-960-value="114"
                                data-group-height-res-960-value="26"
                              >
                                <div class="tn-molecule" id="molecule-1786969361515000001">
                                  <div
                                    class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969361515000002"
                                    data-elem-id="1786969361515000002"
                                    data-elem-type="text"
                                    data-field-top-value="94"
                                    data-field-height-value="22"
                                    data-field-top-res-320-value="497"
                                    data-field-height-res-320-value="19"
                                    data-field-top-res-480-value="497"
                                    data-field-height-res-480-value="19"
                                    data-field-top-res-640-value="503"
                                    data-field-height-res-640-value="22"
                                    data-field-top-res-960-value="116"
                                    data-field-height-res-960-value="22"
                                  >
                                    <div class="tn-atom">
                                      <span style="color: rgb(96, 108, 89)">Business</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965388038000028"
                            data-elem-id="1786965388038000028"
                            data-elem-type="text"
                            data-field-top-value="126"
                            data-field-height-value="28"
                            data-field-top-res-320-value="526"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="526"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="535"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="148"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">Ratings and Reviews</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965388038000027"
                            data-elem-id="1786965388038000027"
                            data-elem-type="text"
                            data-field-top-value="162"
                            data-field-height-value="24"
                            data-field-top-res-320-value="559"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="559"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="568"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="181"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              Every platform your buyers and candidates actually check for real
                              consumer insight, not just the one you monitor.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965388038000025"
                        data-elem-id="1786965388038000025"
                        data-elem-type="text"
                        data-field-top-value="278"
                        data-field-height-value="168"
                        data-field-top-res-320-value="675"
                        data-field-height-res-320-value="240"
                        data-field-top-res-480-value="651"
                        data-field-height-res-480-value="216"
                        data-field-top-res-640-value="636"
                        data-field-height-res-640-value="120"
                        data-field-top-res-960-value="321"
                        data-field-height-res-960-value="240"
                      >
                        <div class="tn-atom">
                          <ul>
                            <li>Review platforms and average rating;</li>
                            <li>Map listings, location by location;</li>
                            <li>App Store, Google Play, etc.;</li>
                            <li>Employer and HR review sites;</li>
                            <li>Official response rate and recurring themes.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30790875011786965393529000031 t396__group-flex"
                    data-group-id="1786965393529000031"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="486"
                    data-group-top-res-320-value="887"
                    data-group-height-res-320-value="420"
                    data-group-top-res-480-value="823"
                    data-group-height-res-480-value="364"
                    data-group-top-res-640-value="808"
                    data-group-height-res-640-value="367"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="593"
                  >
                    <div class="tn-molecule" id="molecule-1786965393529000031">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965393529000038"
                        data-elem-id="1786965393529000038"
                        data-elem-type="image"
                        data-field-top-value="40"
                        data-field-height-value="32"
                        data-field-top-res-320-value="911"
                        data-field-height-res-320-value="32"
                        data-field-top-res-480-value="855"
                        data-field-height-res-480-value="32"
                        data-field-top-res-640-value="840"
                        data-field-height-res-640-value="32"
                        data-field-top-res-960-value="32"
                        data-field-height-res-960-value="32"
                      >
                        <div class="tn-atom">
                          <img
                            class="tn-atom__img t-img"
                            src="/images/service-89fda118d0.svg"
                            alt=""
                            loading="eager"
                          />
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30790875011786965393529000034 t396__group-flex"
                        data-group-id="1786965393529000034"
                        data-group-top-value="92"
                        data-group-heightmode="hug"
                        data-group-height-value="138"
                        data-group-top-res-320-value="963"
                        data-group-height-res-320-value="132"
                        data-group-top-res-480-value="907"
                        data-group-height-res-480-value="108"
                        data-group-top-res-640-value="892"
                        data-group-height-res-640-value="111"
                        data-group-top-res-960-value="84"
                        data-group-height-res-960-value="135"
                      >
                        <div class="tn-molecule" id="molecule-1786965393529000034">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965393529000037"
                            data-elem-id="1786965393529000037"
                            data-elem-type="text"
                            data-field-top-value="92"
                            data-field-height-value="22"
                            data-field-top-res-320-value="963"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="907"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="892"
                            data-field-height-res-640-value="22"
                            data-field-top-res-960-value="84"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">III. Mentions</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965393529000036"
                            data-elem-id="1786965393529000036"
                            data-elem-type="text"
                            data-field-top-value="122"
                            data-field-height-value="28"
                            data-field-top-res-320-value="990"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="934"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="922"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="114"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">Mentions and Media</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965393529000035"
                            data-elem-id="1786965393529000035"
                            data-elem-type="text"
                            data-field-top-value="158"
                            data-field-height-value="24"
                            data-field-top-res-320-value="1023"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="967"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="955"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="147"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              What is being said, where it started, who is amplifying it, and
                              whether it is organic.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786965393529000033"
                        data-elem-id="1786965393529000033"
                        data-elem-type="text"
                        data-field-top-value="250"
                        data-field-height-value="168"
                        data-field-top-res-320-value="1115"
                        data-field-height-res-320-value="240"
                        data-field-top-res-480-value="1035"
                        data-field-height-res-480-value="216"
                        data-field-top-res-640-value="1023"
                        data-field-height-res-640-value="120"
                        data-field-top-res-960-value="239"
                        data-field-height-res-960-value="192"
                      >
                        <div class="tn-atom">
                          <ul>
                            <li>Volume, sentiment, reach, engagement;</li>
                            <li>Source, region and target-audience insight;</li>
                            <li>Narrative and topic analysis;</li>
                            <li>Media attack detection;</li>
                            <li>Loyalty index.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582306000011 t396__group-flex"
                data-group-id="1786969582306000011"
                data-group-top-value="506"
                data-group-heightmode="hug"
                data-group-height-value="534"
                data-group-top-res-320-value="1327"
                data-group-height-res-320-value="1307"
                data-group-top-res-480-value="1207"
                data-group-height-res-480-value="1235"
                data-group-top-res-640-value="1195"
                data-group-height-res-640-value="1154"
                data-group-top-res-960-value="613"
                data-group-height-res-960-value="569"
              >
                <div class="tn-molecule" id="molecule-1786969582306000011">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582307000029 t396__group-flex"
                    data-group-id="1786969582307000029"
                    data-group-top-value="506"
                    data-group-heightmode="fill"
                    data-group-height-value="534"
                    data-group-top-res-320-value="1327"
                    data-group-height-res-320-value="420"
                    data-group-top-res-480-value="1207"
                    data-group-height-res-480-value="388"
                    data-group-top-res-640-value="1195"
                    data-group-height-res-640-value="367"
                    data-group-top-res-960-value="613"
                    data-group-height-res-960-value="569"
                  >
                    <div class="tn-molecule" id="molecule-1786969582307000029">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000035"
                        data-elem-id="1786969582307000035"
                        data-elem-type="image"
                        data-field-top-value="546"
                        data-field-height-value="32"
                        data-field-top-res-320-value="1351"
                        data-field-height-res-320-value="32"
                        data-field-top-res-480-value="1239"
                        data-field-height-res-480-value="32"
                        data-field-top-res-640-value="1227"
                        data-field-height-res-640-value="32"
                        data-field-top-res-960-value="645"
                        data-field-height-res-960-value="32"
                      >
                        <div class="tn-atom">
                          <img
                            class="tn-atom__img t-img"
                            src="/images/service-09422c31cb.svg"
                            alt=""
                            loading="eager"
                          />
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582307000031 t396__group-flex"
                        data-group-id="1786969582307000031"
                        data-group-top-value="598"
                        data-group-heightmode="hug"
                        data-group-height-value="138"
                        data-group-top-res-320-value="1403"
                        data-group-height-res-320-value="132"
                        data-group-top-res-480-value="1291"
                        data-group-height-res-480-value="108"
                        data-group-top-res-640-value="1279"
                        data-group-height-res-640-value="111"
                        data-group-top-res-960-value="697"
                        data-group-height-res-960-value="159"
                      >
                        <div class="tn-molecule" id="molecule-1786969582307000031">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000034"
                            data-elem-id="1786969582307000034"
                            data-elem-type="text"
                            data-field-top-value="598"
                            data-field-height-value="22"
                            data-field-top-res-320-value="1403"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="1291"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="1279"
                            data-field-height-res-640-value="22"
                            data-field-top-res-960-value="697"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">IV. AI Search results</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000033"
                            data-elem-id="1786969582307000033"
                            data-elem-type="text"
                            data-field-top-value="628"
                            data-field-height-value="28"
                            data-field-top-res-320-value="1430"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="1318"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="1309"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="727"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">AI Answers</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000032"
                            data-elem-id="1786969582307000032"
                            data-elem-type="text"
                            data-field-top-value="664"
                            data-field-height-value="24"
                            data-field-top-res-320-value="1463"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="1351"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="1342"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="760"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              The surface almost nobody is auditing yet, and the one your buyers
                              increasingly ask first.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000030"
                        data-elem-id="1786969582307000030"
                        data-elem-type="text"
                        data-field-top-value="756"
                        data-field-height-value="120"
                        data-field-top-res-320-value="1555"
                        data-field-height-res-320-value="240"
                        data-field-top-res-480-value="1419"
                        data-field-height-res-480-value="216"
                        data-field-top-res-640-value="1410"
                        data-field-height-res-640-value="120"
                        data-field-top-res-960-value="876"
                        data-field-height-res-960-value="115"
                      >
                        <div class="tn-atom">
                          <ul>
                            <li>ChatGPT, Copilot, Gemini, AI Overview, Perplexity;</li>
                            <li>Identification accuracy and answer sentiment;</li>
                            <li>Top-25 sources the models cite;</li>
                            <li>Which of those sources carry risk;</li>
                            <li>Visibility versus competitors.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582306000019 t396__group-flex"
                    data-group-id="1786969582306000019"
                    data-group-top-value="506"
                    data-group-heightmode="hug"
                    data-group-height-value="534"
                    data-group-top-res-320-value="1767"
                    data-group-height-res-320-value="451"
                    data-group-top-res-480-value="1615"
                    data-group-height-res-480-value="419"
                    data-group-top-res-640-value="1582"
                    data-group-height-res-640-value="401"
                    data-group-top-res-960-value="613"
                    data-group-height-res-960-value="569"
                  >
                    <div class="tn-molecule" id="molecule-1786969582306000019">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000028"
                        data-elem-id="1786969582307000028"
                        data-elem-type="image"
                        data-field-top-value="546"
                        data-field-height-value="32"
                        data-field-top-res-320-value="1791"
                        data-field-height-res-320-value="32"
                        data-field-top-res-480-value="1647"
                        data-field-height-res-480-value="32"
                        data-field-top-res-640-value="1614"
                        data-field-height-res-640-value="32"
                        data-field-top-res-960-value="645"
                        data-field-height-res-960-value="32"
                      >
                        <div class="tn-atom">
                          <img
                            class="tn-atom__img t-img"
                            src="/images/situation-b7fabcd848707b.svg"
                            alt=""
                            loading="eager"
                          />
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582307000021 t396__group-flex"
                        data-group-id="1786969582307000021"
                        data-group-top-value="598"
                        data-group-heightmode="hug"
                        data-group-height-value="166"
                        data-group-top-res-320-value="1843"
                        data-group-height-res-320-value="163"
                        data-group-top-res-480-value="1699"
                        data-group-height-res-480-value="163"
                        data-group-top-res-640-value="1666"
                        data-group-height-res-640-value="145"
                        data-group-top-res-960-value="697"
                        data-group-height-res-960-value="193"
                      >
                        <div class="tn-molecule" id="molecule-1786969582307000021">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582307000024 t396__group-flex"
                            data-group-id="1786969582307000024"
                            data-group-top-value="598"
                            data-group-heightmode="hug"
                            data-group-height-value="26"
                            data-group-top-res-320-value="1843"
                            data-group-height-res-320-value="50"
                            data-group-top-res-480-value="1699"
                            data-group-height-res-480-value="50"
                            data-group-top-res-640-value="1666"
                            data-group-height-res-640-value="56"
                            data-group-top-res-960-value="697"
                            data-group-height-res-960-value="56"
                          >
                            <div class="tn-molecule" id="molecule-1786969582307000024">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000027"
                                data-elem-id="1786969582307000027"
                                data-elem-type="text"
                                data-field-top-value="600"
                                data-field-height-value="22"
                                data-field-top-res-320-value="1843"
                                data-field-height-res-320-value="19"
                                data-field-top-res-480-value="1699"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="1666"
                                data-field-height-res-640-value="22"
                                data-field-top-res-960-value="697"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">V. Compliance</div>
                              </div>
                              <div
                                class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582307000025 t396__group-flex"
                                data-group-id="1786969582307000025"
                                data-group-top-value="598"
                                data-group-heightmode="hug"
                                data-group-height-value="26"
                                data-group-top-res-320-value="1870"
                                data-group-height-res-320-value="23"
                                data-group-top-res-480-value="1726"
                                data-group-height-res-480-value="23"
                                data-group-top-res-640-value="1696"
                                data-group-height-res-640-value="26"
                                data-group-top-res-960-value="727"
                                data-group-height-res-960-value="26"
                              >
                                <div class="tn-molecule" id="molecule-1786969582307000025">
                                  <div
                                    class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000026"
                                    data-elem-id="1786969582307000026"
                                    data-elem-type="text"
                                    data-field-top-value="600"
                                    data-field-height-value="22"
                                    data-field-top-res-320-value="1872"
                                    data-field-height-res-320-value="19"
                                    data-field-top-res-480-value="1728"
                                    data-field-height-res-480-value="19"
                                    data-field-top-res-640-value="1698"
                                    data-field-height-res-640-value="22"
                                    data-field-top-res-960-value="729"
                                    data-field-height-res-960-value="22"
                                  >
                                    <div class="tn-atom">
                                      <span style="color: rgb(96, 108, 89)">Personal</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000023"
                            data-elem-id="1786969582307000023"
                            data-elem-type="text"
                            data-field-top-value="632"
                            data-field-height-value="28"
                            data-field-top-res-320-value="1901"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="1757"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="1730"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="761"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">Screening Databases</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000022"
                            data-elem-id="1786969582307000022"
                            data-elem-type="text"
                            data-field-top-value="668"
                            data-field-height-value="24"
                            data-field-top-res-320-value="1934"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="1790"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="1763"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="794"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              What a bank, a fund or a migration officer sees when they run your
                              name through a professional system.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582307000020"
                        data-elem-id="1786969582307000020"
                        data-elem-type="text"
                        data-field-top-value="784"
                        data-field-height-value="216"
                        data-field-top-res-320-value="2026"
                        data-field-height-res-320-value="240"
                        data-field-top-res-480-value="1882"
                        data-field-height-res-480-value="216"
                        data-field-top-res-640-value="1831"
                        data-field-height-res-640-value="120"
                        data-field-top-res-960-value="910"
                        data-field-height-res-960-value="240"
                      >
                        <div class="tn-atom">
                          <ul>
                            <li>LexisNexis, World-Check, Dow Jones;</li>
                            <li>Sanctions and watchlist exposure;</li>
                            <li>International registry consistency (LEI, SWIFT);</li>
                            <li>Wikipedia and encyclopaedic sources;</li>
                            <li>Adverse media hits by jurisdiction.</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582306000012 t396__group-flex"
                    data-group-id="1786969582306000012"
                    data-group-top-value="506"
                    data-group-heightmode="fill"
                    data-group-height-value="534"
                    data-group-top-res-320-value="2238"
                    data-group-height-res-320-value="396"
                    data-group-top-res-480-value="2054"
                    data-group-height-res-480-value="388"
                    data-group-top-res-640-value="2003"
                    data-group-height-res-640-value="346"
                    data-group-top-res-960-value="613"
                    data-group-height-res-960-value="569"
                  >
                    <div class="tn-molecule" id="molecule-1786969582306000012">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582306000018"
                        data-elem-id="1786969582306000018"
                        data-elem-type="image"
                        data-field-top-value="546"
                        data-field-height-value="32"
                        data-field-top-res-320-value="2262"
                        data-field-height-res-320-value="32"
                        data-field-top-res-480-value="2086"
                        data-field-height-res-480-value="32"
                        data-field-top-res-640-value="2035"
                        data-field-height-res-640-value="32"
                        data-field-top-res-960-value="645"
                        data-field-height-res-960-value="32"
                      >
                        <div class="tn-atom">
                          <img
                            class="tn-atom__img t-img"
                            src="/images/situation-3274096ec08fd9.svg"
                            alt=""
                            loading="eager"
                          />
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30790875011786969582306000014 t396__group-flex"
                        data-group-id="1786969582306000014"
                        data-group-top-value="598"
                        data-group-heightmode="hug"
                        data-group-height-value="210"
                        data-group-top-res-320-value="2314"
                        data-group-height-res-320-value="180"
                        data-group-top-res-480-value="2138"
                        data-group-height-res-480-value="156"
                        data-group-top-res-640-value="2087"
                        data-group-height-res-640-value="138"
                        data-group-top-res-960-value="697"
                        data-group-height-res-960-value="262"
                      >
                        <div class="tn-molecule" id="molecule-1786969582306000014">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582306000017"
                            data-elem-id="1786969582306000017"
                            data-elem-type="text"
                            data-field-top-value="598"
                            data-field-height-value="22"
                            data-field-top-res-320-value="2314"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="2138"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="2087"
                            data-field-height-res-640-value="22"
                            data-field-top-res-960-value="697"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">VI. The output</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582306000016"
                            data-elem-id="1786969582306000016"
                            data-elem-type="text"
                            data-field-top-value="628"
                            data-field-height-value="28"
                            data-field-top-res-320-value="2341"
                            data-field-height-res-320-value="29"
                            data-field-top-res-480-value="2165"
                            data-field-height-res-480-value="29"
                            data-field-top-res-640-value="2117"
                            data-field-height-res-640-value="31"
                            data-field-top-res-960-value="727"
                            data-field-height-res-960-value="48"
                          >
                            <div class="tn-atom">One Score for Full Presence</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582306000015"
                            data-elem-id="1786969582306000015"
                            data-elem-type="text"
                            data-field-top-value="664"
                            data-field-height-value="48"
                            data-field-top-res-320-value="2374"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="2198"
                            data-field-height-res-480-value="96"
                            data-field-top-res-640-value="2153"
                            data-field-height-res-640-value="72"
                            data-field-top-res-960-value="791"
                            data-field-height-res-960-value="115"
                          >
                            <div class="tn-atom">
                              Each surface produces its own RPN Score: Search Results RPN,
                              Suggestions RPN, Images RPN, Reviews RPN, Maps RPN, App Reviews RPN,
                              HR Reviews RPN, Mentions RPN, AI RPN.
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30790875011786969582306000013"
                        data-elem-id="1786969582306000013"
                        data-elem-type="text"
                        data-field-top-value="828"
                        data-field-height-value="72"
                        data-field-top-res-320-value="2514"
                        data-field-height-res-320-value="240"
                        data-field-top-res-480-value="2314"
                        data-field-height-res-480-value="216"
                        data-field-top-res-640-value="2245"
                        data-field-height-res-640-value="120"
                        data-field-top-res-960-value="979"
                        data-field-height-res-960-value="115"
                      >
                        <div class="tn-atom">
                          <ul>
                            <li>Per market and per language;</li>
                            <li>Per entity and per beneficiary;</li>
                            <li>The same score for your competitors on request.</li>
                          </ul>
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
    <section id="rec3070274701" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="274"
          data-artboard-height-res-320="643"
          data-artboard-height-res-480="543"
          data-artboard-height-res-640="558"
          data-artboard-height-res-960="376"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30702747011783513628528000022 t396__group-flex"
            data-group-id="1783513628528000022"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="274"
            data-group-height-res-320-value="643"
            data-group-height-res-480-value="543"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="558"
            data-group-height-res-960-value="376"
          >
            <div class="tn-molecule" id="molecule-1783513628528000022">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30702747011783513193106000020 t396__group-flex"
                data-group-id="1783513193106000020"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="48"
                data-group-height-res-320-value="45"
                data-group-height-res-480-value="45"
                data-group-height-res-640-value="48"
                data-group-height-res-960-value="48"
              >
                <div class="tn-molecule" id="molecule-1783513193106000020">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702747011784120777832000001"
                    data-elem-id="1784120777832000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702747011783513193106000021"
                    data-elem-id="1783513193106000021"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="22"
                    data-field-height-res-320-value="25"
                    data-field-height-res-480-value="25"
                    data-field-height-res-640-value="25"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom">our methodology</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30702747011783523431798000002 t396__group-flex"
                data-group-id="1783523431798000002"
                data-group-top-value="88"
                data-group-heightmode="hug"
                data-group-height-value="186"
                data-group-top-res-320-value="69"
                data-group-height-res-320-value="574"
                data-group-top-res-480-value="69"
                data-group-height-res-480-value="474"
                data-group-height-res-640-value="478"
                data-group-top-res-960-value="80"
                data-group-height-res-960-value="296"
              >
                <div class="tn-molecule" id="molecule-1783523431798000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702747011783513193106000019"
                    data-elem-id="1783513193106000019"
                    data-elem-type="text"
                    data-field-top-value="88"
                    data-field-height-value="114"
                    data-field-top-res-320-value="69"
                    data-field-height-res-320-value="36"
                    data-field-top-res-480-value="69"
                    data-field-height-res-480-value="36"
                    data-field-height-res-640-value="84"
                    data-field-top-res-960-value="80"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">RPN: One Score for Full Brand Presence Estimation</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702747011783523405384000001"
                    data-elem-id="1783523405384000001"
                    data-elem-type="text"
                    data-field-top-value="218"
                    data-field-height-value="56"
                    data-field-top-res-320-value="193"
                    data-field-height-res-320-value="75"
                    data-field-top-res-480-value="193"
                    data-field-height-res-480-value="50"
                    data-field-top-res-640-value="222"
                    data-field-height-res-640-value="364"
                    data-field-top-res-960-value="180"
                    data-field-height-res-960-value="224"
                  >
                    <div class="tn-atom">
                      Positive, neutral and negative shares, calculated across every direction in
                      scope, with a sub-score for each specific component. You can see exactly where
                      the damage sits.
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
      id="rec3083175601"
      class="r t-rec t-rec_pt_45 t-rec_pb_90"
      style="padding-top: 45px; padding-bottom: 90px"
    >
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="66"
          data-artboard-height-res-320="1229"
          data-artboard-height-res-480="1219"
          data-artboard-height-res-640="1144"
          data-artboard-height-res-960="578"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30831756011766660917739000024 t396__group-flex"
            data-group-id="1766660917739000024"
            data-group-top-value="0"
            data-group-heightmode="fill"
            data-group-height-value="66"
            data-group-top-res-320-value="-64"
            data-group-height-res-320-value="1357"
            data-group-top-res-480-value="54"
            data-group-height-res-480-value="1111"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="1144"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="578"
          >
            <div class="tn-molecule" id="molecule-1766660917739000024">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30831756011786965388037000023 t396__group-flex"
                data-group-id="1786965388037000023"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="66"
                data-group-top-res-320-value="-64"
                data-group-height-res-320-value="707"
                data-group-top-res-480-value="54"
                data-group-height-res-480-value="509"
                data-group-top-res-640-value="0"
                data-group-height-res-640-value="526"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="578"
              >
                <div class="tn-molecule" id="molecule-1786965388037000023">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971244960000129"
                    data-elem-id="1786971244960000129"
                    data-elem-type="image"
                    data-field-top-value="32"
                    data-field-height-value="164"
                    data-field-top-res-320-value="-40"
                    data-field-height-res-320-value="83"
                    data-field-top-res-480-value="86"
                    data-field-height-res-480-value="105"
                    data-field-height-res-640-value="148"
                    data-field-height-res-960-value="121"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/situation-a23374110b697d.svg"
                        alt=""
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30831756011786972665785000001 t396__group-flex"
                    data-group-id="1786972665785000001"
                    data-group-top-value="220"
                    data-group-heightmode="hug"
                    data-group-height-value="220"
                    data-group-top-res-320-value="83"
                    data-group-height-res-320-value="456"
                    data-group-top-res-480-value="231"
                    data-group-height-res-480-value="220"
                    data-group-top-res-640-value="204"
                    data-group-height-res-640-value="220"
                    data-group-top-res-960-value="216"
                    data-group-height-res-960-value="220"
                  >
                    <div class="tn-molecule" id="molecule-1786972665785000001">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786972665786000022 t396__group-flex"
                        data-group-id="1786972665786000022"
                        data-group-top-value="220"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="83"
                        data-group-height-res-320-value="71"
                        data-group-top-res-480-value="231"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="204"
                        data-group-height-res-640-value="24"
                        data-group-top-res-960-value="216"
                        data-group-height-res-960-value="24"
                      >
                        <div class="tn-molecule" id="molecule-1786972665786000022">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665786000024"
                            data-elem-id="1786972665786000024"
                            data-elem-type="text"
                            data-field-top-value="220"
                            data-field-height-value="24"
                            data-field-top-res-320-value="83"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="231"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="204"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="216"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom">Search results</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972925480000025"
                            data-elem-id="1786972925480000025"
                            data-elem-type="image"
                            data-field-top-value="228"
                            data-field-height-value="9"
                            data-field-top-res-320-value="115"
                            data-field-height-res-320-value="7"
                            data-field-top-res-480-value="241"
                            data-field-height-res-480-value="4"
                            data-field-top-res-640-value="214"
                            data-field-height-res-640-value="5"
                            data-field-top-res-960-value="226"
                            data-field-height-res-960-value="5"
                          >
                            <div class="tn-atom">
                              <img
                                class="tn-atom__img t-img"
                                src="/images/situation-ddaddcde6a8534.svg"
                                alt=""
                                loading="eager"
                              />
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665786000023"
                            data-elem-id="1786972665786000023"
                            data-elem-type="text"
                            data-field-top-value="220"
                            data-field-height-value="24"
                            data-field-top-res-320-value="130"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="231"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="204"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="216"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom"><strong>48%</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665786000021"
                        data-elem-id="1786972665786000021"
                        data-elem-type="shape"
                        data-field-top-value="256"
                        data-field-height-value="1"
                        data-field-top-res-320-value="166"
                        data-field-height-res-320-value="1"
                        data-field-top-res-480-value="267"
                        data-field-height-res-480-value="1"
                        data-field-top-res-640-value="240"
                        data-field-height-res-640-value="1"
                        data-field-top-res-960-value="252"
                        data-field-height-res-960-value="1"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786972665786000018 t396__group-flex"
                        data-group-id="1786972665786000018"
                        data-group-top-value="269"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="179"
                        data-group-height-res-320-value="71"
                        data-group-top-res-480-value="280"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="253"
                        data-group-height-res-640-value="24"
                        data-group-top-res-960-value="265"
                        data-group-height-res-960-value="24"
                      >
                        <div class="tn-molecule" id="molecule-1786972665786000018">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665786000020"
                            data-elem-id="1786972665786000020"
                            data-elem-type="text"
                            data-field-top-value="269"
                            data-field-height-value="24"
                            data-field-top-res-320-value="179"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="280"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="253"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="265"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom">Suggestions</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973006639000029"
                            data-elem-id="1786973006639000029"
                            data-elem-type="image"
                            data-field-top-value="277"
                            data-field-height-value="9"
                            data-field-top-res-320-value="211"
                            data-field-height-res-320-value="7"
                            data-field-top-res-480-value="290"
                            data-field-height-res-480-value="4"
                            data-field-top-res-640-value="263"
                            data-field-height-res-640-value="5"
                            data-field-top-res-960-value="275"
                            data-field-height-res-960-value="5"
                          >
                            <div class="tn-atom">
                              <img
                                class="tn-atom__img t-img"
                                src="/images/situation-bf73a7fb4366c4.svg"
                                alt=""
                                loading="eager"
                              />
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973006639000028"
                            data-elem-id="1786973006639000028"
                            data-elem-type="text"
                            data-field-top-value="269"
                            data-field-height-value="24"
                            data-field-top-res-320-value="226"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="280"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="253"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="265"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom"><strong>62%</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665786000017"
                        data-elem-id="1786972665786000017"
                        data-elem-type="shape"
                        data-field-top-value="305"
                        data-field-height-value="1"
                        data-field-top-res-320-value="263"
                        data-field-height-res-320-value="1"
                        data-field-top-res-480-value="316"
                        data-field-height-res-480-value="1"
                        data-field-top-res-640-value="289"
                        data-field-height-res-640-value="1"
                        data-field-top-res-960-value="301"
                        data-field-height-res-960-value="1"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786972665786000014 t396__group-flex"
                        data-group-id="1786972665786000014"
                        data-group-top-value="318"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="276"
                        data-group-height-res-320-value="71"
                        data-group-top-res-480-value="329"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="302"
                        data-group-height-res-640-value="24"
                        data-group-top-res-960-value="314"
                        data-group-height-res-960-value="24"
                      >
                        <div class="tn-molecule" id="molecule-1786972665786000014">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665786000016"
                            data-elem-id="1786972665786000016"
                            data-elem-type="text"
                            data-field-top-value="318"
                            data-field-height-value="24"
                            data-field-top-res-320-value="276"
                            data-field-height-res-320-value="120"
                            data-field-top-res-480-value="329"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="302"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="314"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom">Reviews and ratings</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973022942000032"
                            data-elem-id="1786973022942000032"
                            data-elem-type="image"
                            data-field-top-value="326"
                            data-field-height-value="9"
                            data-field-top-res-320-value="308"
                            data-field-height-res-320-value="7"
                            data-field-top-res-480-value="339"
                            data-field-height-res-480-value="4"
                            data-field-top-res-640-value="312"
                            data-field-height-res-640-value="5"
                            data-field-top-res-960-value="324"
                            data-field-height-res-960-value="5"
                          >
                            <div class="tn-atom">
                              <img
                                class="tn-atom__img t-img"
                                src="/images/situation-10c36393dc536c.svg"
                                alt=""
                                loading="eager"
                              />
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973022942000031"
                            data-elem-id="1786973022942000031"
                            data-elem-type="text"
                            data-field-top-value="318"
                            data-field-height-value="24"
                            data-field-top-res-320-value="323"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="329"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="302"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="314"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom"><strong>72%</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665785000013"
                        data-elem-id="1786972665785000013"
                        data-elem-type="shape"
                        data-field-top-value="354"
                        data-field-height-value="1"
                        data-field-top-res-320-value="359"
                        data-field-height-res-320-value="1"
                        data-field-top-res-480-value="365"
                        data-field-height-res-480-value="1"
                        data-field-top-res-640-value="338"
                        data-field-height-res-640-value="1"
                        data-field-top-res-960-value="350"
                        data-field-height-res-960-value="1"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786972665785000010 t396__group-flex"
                        data-group-id="1786972665785000010"
                        data-group-top-value="367"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="372"
                        data-group-height-res-320-value="71"
                        data-group-top-res-480-value="378"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="351"
                        data-group-height-res-640-value="24"
                        data-group-top-res-960-value="363"
                        data-group-height-res-960-value="24"
                      >
                        <div class="tn-molecule" id="molecule-1786972665785000010">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665785000012"
                            data-elem-id="1786972665785000012"
                            data-elem-type="text"
                            data-field-top-value="367"
                            data-field-height-value="24"
                            data-field-top-res-320-value="372"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="378"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="351"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="363"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom">Mentions</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973024662000035"
                            data-elem-id="1786973024662000035"
                            data-elem-type="image"
                            data-field-top-value="375"
                            data-field-height-value="9"
                            data-field-top-res-320-value="404"
                            data-field-height-res-320-value="7"
                            data-field-top-res-480-value="388"
                            data-field-height-res-480-value="4"
                            data-field-top-res-640-value="361"
                            data-field-height-res-640-value="5"
                            data-field-top-res-960-value="373"
                            data-field-height-res-960-value="5"
                          >
                            <div class="tn-atom">
                              <img
                                class="tn-atom__img t-img"
                                src="/images/situation-34436ab75a4c0e.svg"
                                alt=""
                                loading="eager"
                              />
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973024662000034"
                            data-elem-id="1786973024662000034"
                            data-elem-type="text"
                            data-field-top-value="367"
                            data-field-height-value="24"
                            data-field-top-res-320-value="419"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="378"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="351"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="363"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom"><strong>81%</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665785000009"
                        data-elem-id="1786972665785000009"
                        data-elem-type="shape"
                        data-field-top-value="403"
                        data-field-height-value="1"
                        data-field-top-res-320-value="455"
                        data-field-height-res-320-value="1"
                        data-field-top-res-480-value="414"
                        data-field-height-res-480-value="1"
                        data-field-top-res-640-value="387"
                        data-field-height-res-640-value="1"
                        data-field-top-res-960-value="399"
                        data-field-height-res-960-value="1"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786972665785000006 t396__group-flex"
                        data-group-id="1786972665785000006"
                        data-group-top-value="416"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="468"
                        data-group-height-res-320-value="71"
                        data-group-top-res-480-value="427"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="400"
                        data-group-height-res-640-value="24"
                        data-group-top-res-960-value="412"
                        data-group-height-res-960-value="24"
                      >
                        <div class="tn-molecule" id="molecule-1786972665785000006">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786972665785000008"
                            data-elem-id="1786972665785000008"
                            data-elem-type="text"
                            data-field-top-value="416"
                            data-field-height-value="24"
                            data-field-top-res-320-value="468"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="427"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="400"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="412"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom">AI answers</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973026324000038"
                            data-elem-id="1786973026324000038"
                            data-elem-type="image"
                            data-field-top-value="424"
                            data-field-height-value="9"
                            data-field-top-res-320-value="500"
                            data-field-height-res-320-value="7"
                            data-field-top-res-480-value="437"
                            data-field-height-res-480-value="4"
                            data-field-top-res-640-value="410"
                            data-field-height-res-640-value="5"
                            data-field-top-res-960-value="422"
                            data-field-height-res-960-value="5"
                          >
                            <div class="tn-atom">
                              <img
                                class="tn-atom__img t-img"
                                src="/images/situation-3ea322aa7246aa.svg"
                                alt=""
                                loading="eager"
                              />
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786973026324000037"
                            data-elem-id="1786973026324000037"
                            data-elem-type="text"
                            data-field-top-value="416"
                            data-field-height-value="24"
                            data-field-top-res-320-value="515"
                            data-field-height-res-320-value="24"
                            data-field-top-res-480-value="427"
                            data-field-height-res-480-value="24"
                            data-field-top-res-640-value="400"
                            data-field-height-res-640-value="24"
                            data-field-top-res-960-value="412"
                            data-field-height-res-960-value="24"
                          >
                            <div class="tn-atom"><strong>39%</strong></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971936786000001"
                    data-elem-id="1786971936786000001"
                    data-elem-type="text"
                    data-field-top-value="464"
                    data-field-height-value="22"
                    data-field-top-res-320-value="579"
                    data-field-height-res-320-value="120"
                    data-field-top-res-480-value="491"
                    data-field-height-res-480-value="38"
                    data-field-top-res-640-value="448"
                    data-field-height-res-640-value="44"
                    data-field-top-res-960-value="500"
                    data-field-height-res-960-value="44"
                  >
                    <div class="tn-atom">
                      <em>Illustrative values. Your brand report carries your personal figures.</em>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30831756011786969582306000011 t396__group-flex"
                data-group-id="1786969582306000011"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="604"
                data-group-top-res-320-value="667"
                data-group-height-res-320-value="626"
                data-group-top-res-480-value="587"
                data-group-height-res-480-value="578"
                data-group-top-res-640-value="566"
                data-group-height-res-640-value="578"
                data-group-height-res-960-value="578"
              >
                <div class="tn-molecule" id="molecule-1786969582306000011">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200583000076 t396__group-flex"
                    data-group-id="1786971200583000076"
                    data-group-top-value="0"
                    data-group-heightmode="fill"
                    data-group-height-value="321"
                    data-group-top-res-320-value="667"
                    data-group-height-res-320-value="366"
                    data-group-top-res-480-value="587"
                    data-group-height-res-480-value="318"
                    data-group-top-res-640-value="566"
                    data-group-height-res-640-value="318"
                    data-group-top-res-960-value="0"
                    data-group-height-res-960-value="318"
                  >
                    <div class="tn-molecule" id="molecule-1786971200583000076">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000101"
                        data-elem-id="1786971200584000101"
                        data-elem-type="text"
                        data-field-top-value="0"
                        data-field-height-value="28"
                        data-field-top-res-320-value="667"
                        data-field-height-res-320-value="29"
                        data-field-top-res-480-value="587"
                        data-field-height-res-480-value="25"
                        data-field-top-res-640-value="566"
                        data-field-height-res-640-value="25"
                        data-field-top-res-960-value="0"
                        data-field-height-res-960-value="25"
                      >
                        <div class="tn-atom">How the overall result is read</div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200583000077 t396__group-flex"
                        data-group-id="1786971200583000077"
                        data-group-top-value="52"
                        data-group-heightmode="hug"
                        data-group-height-value="269"
                        data-group-top-res-320-value="716"
                        data-group-height-res-320-value="317"
                        data-group-top-res-480-value="636"
                        data-group-height-res-480-value="269"
                        data-group-top-res-640-value="615"
                        data-group-height-res-640-value="269"
                        data-group-top-res-960-value="49"
                        data-group-height-res-960-value="269"
                      >
                        <div class="tn-molecule" id="molecule-1786971200583000077">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200584000098 t396__group-flex"
                            data-group-id="1786971200584000098"
                            data-group-top-value="52"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="716"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="636"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="615"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="49"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786971200584000098">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000100"
                                data-elem-id="1786971200584000100"
                                data-elem-type="text"
                                data-field-top-value="52"
                                data-field-height-value="24"
                                data-field-top-res-320-value="716"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="636"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="615"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="49"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Positive result</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000099"
                                data-elem-id="1786971200584000099"
                                data-elem-type="text"
                                data-field-top-value="52"
                                data-field-height-value="24"
                                data-field-top-res-320-value="716"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="636"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="615"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="49"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Positive &gt; 50%</strong></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000097"
                            data-elem-id="1786971200584000097"
                            data-elem-type="shape"
                            data-field-top-value="88"
                            data-field-height-value="1"
                            data-field-top-res-320-value="752"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="672"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="651"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="85"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200584000094 t396__group-flex"
                            data-group-id="1786971200584000094"
                            data-group-top-value="101"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="765"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="685"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="664"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="98"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786971200584000094">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000096"
                                data-elem-id="1786971200584000096"
                                data-elem-type="text"
                                data-field-top-value="101"
                                data-field-height-value="24"
                                data-field-top-res-320-value="765"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="685"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="664"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="98"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Negative result</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000095"
                                data-elem-id="1786971200584000095"
                                data-elem-type="text"
                                data-field-top-value="101"
                                data-field-height-value="24"
                                data-field-top-res-320-value="765"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="685"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="664"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="98"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Negative &gt; 25%</strong></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000093"
                            data-elem-id="1786971200584000093"
                            data-elem-type="shape"
                            data-field-top-value="137"
                            data-field-height-value="1"
                            data-field-top-res-320-value="801"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="721"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="700"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="134"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200583000090 t396__group-flex"
                            data-group-id="1786971200583000090"
                            data-group-top-value="150"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="814"
                            data-group-height-res-320-value="48"
                            data-group-top-res-480-value="734"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="713"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="147"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786971200583000090">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200584000092"
                                data-elem-id="1786971200584000092"
                                data-elem-type="text"
                                data-field-top-value="150"
                                data-field-height-value="24"
                                data-field-top-res-320-value="814"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="734"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="713"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="147"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Mixed result</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000091"
                                data-elem-id="1786971200583000091"
                                data-elem-type="text"
                                data-field-top-value="150"
                                data-field-height-value="24"
                                data-field-top-res-320-value="814"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="734"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="713"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="147"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  <strong>Positive + Negative &gt; 50%</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000089"
                            data-elem-id="1786971200583000089"
                            data-elem-type="shape"
                            data-field-top-value="186"
                            data-field-height-value="1"
                            data-field-top-res-320-value="874"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="770"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="749"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="183"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200583000086 t396__group-flex"
                            data-group-id="1786971200583000086"
                            data-group-top-value="199"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="887"
                            data-group-height-res-320-value="48"
                            data-group-top-res-480-value="783"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="762"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="196"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786971200583000086">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000088"
                                data-elem-id="1786971200583000088"
                                data-elem-type="text"
                                data-field-top-value="199"
                                data-field-height-value="24"
                                data-field-top-res-320-value="887"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="783"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="762"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="196"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Neutral result</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000087"
                                data-elem-id="1786971200583000087"
                                data-elem-type="text"
                                data-field-top-value="199"
                                data-field-height-value="24"
                                data-field-top-res-320-value="887"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="783"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="762"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="196"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">
                                  <strong>Positive + Negative &lt; 50%</strong>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000085"
                            data-elem-id="1786971200583000085"
                            data-elem-type="shape"
                            data-field-top-value="235"
                            data-field-height-value="1"
                            data-field-top-res-320-value="947"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="819"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="798"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="232"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200583000082 t396__group-flex"
                            data-group-id="1786971200583000082"
                            data-group-top-value="248"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="960"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="832"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="811"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="245"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786971200583000082">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000084"
                                data-elem-id="1786971200583000084"
                                data-elem-type="text"
                                data-field-top-value="248"
                                data-field-height-value="24"
                                data-field-top-res-320-value="960"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="832"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="811"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="245"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Noticeable positivity</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000083"
                                data-elem-id="1786971200583000083"
                                data-elem-type="text"
                                data-field-top-value="248"
                                data-field-height-value="24"
                                data-field-top-res-320-value="960"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="832"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="811"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="245"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Positive &gt; 30%</strong></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000081"
                            data-elem-id="1786971200583000081"
                            data-elem-type="shape"
                            data-field-top-value="284"
                            data-field-height-value="1"
                            data-field-top-res-320-value="996"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="868"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="847"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="281"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786971200583000078 t396__group-flex"
                            data-group-id="1786971200583000078"
                            data-group-top-value="297"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="1009"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="881"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="860"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="294"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786971200583000078">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000080"
                                data-elem-id="1786971200583000080"
                                data-elem-type="text"
                                data-field-top-value="297"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1009"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="881"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="860"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="294"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Noticeable negativity</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786971200583000079"
                                data-elem-id="1786971200583000079"
                                data-elem-type="text"
                                data-field-top-value="297"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1009"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="881"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="860"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="294"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Negative &gt; 15%</strong></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30831756011786970452944000058 t396__group-flex"
                    data-group-id="1786970452944000058"
                    data-group-top-value="381"
                    data-group-heightmode="fill"
                    data-group-height-value="223"
                    data-group-top-res-320-value="1073"
                    data-group-height-res-320-value="220"
                    data-group-top-res-480-value="945"
                    data-group-height-res-480-value="220"
                    data-group-top-res-640-value="924"
                    data-group-height-res-640-value="220"
                    data-group-top-res-960-value="358"
                    data-group-height-res-960-value="220"
                  >
                    <div class="tn-molecule" id="molecule-1786970452944000058">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000075"
                        data-elem-id="1786970452945000075"
                        data-elem-type="text"
                        data-field-top-value="381"
                        data-field-height-value="28"
                        data-field-top-res-320-value="1073"
                        data-field-height-res-320-value="29"
                        data-field-top-res-480-value="945"
                        data-field-height-res-480-value="25"
                        data-field-top-res-640-value="924"
                        data-field-height-res-640-value="25"
                        data-field-top-res-960-value="358"
                        data-field-height-res-960-value="25"
                      >
                        <div class="tn-atom">How ratings convert</div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30831756011786970452944000059 t396__group-flex"
                        data-group-id="1786970452944000059"
                        data-group-top-value="433"
                        data-group-heightmode="hug"
                        data-group-height-value="171"
                        data-group-top-res-320-value="1122"
                        data-group-height-res-320-value="171"
                        data-group-top-res-480-value="994"
                        data-group-height-res-480-value="171"
                        data-group-top-res-640-value="973"
                        data-group-height-res-640-value="171"
                        data-group-top-res-960-value="407"
                        data-group-height-res-960-value="171"
                      >
                        <div class="tn-molecule" id="molecule-1786970452944000059">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786970452945000072 t396__group-flex"
                            data-group-id="1786970452945000072"
                            data-group-top-value="433"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="1122"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="994"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="973"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="407"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786970452945000072">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000074"
                                data-elem-id="1786970452945000074"
                                data-elem-type="text"
                                data-field-top-value="433"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1122"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="994"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="973"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="407"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Rating score</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000073"
                                data-elem-id="1786970452945000073"
                                data-elem-type="text"
                                data-field-top-value="433"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1122"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="994"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="973"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="407"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>(Average ÷ 5) × 100</strong></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000071"
                            data-elem-id="1786970452945000071"
                            data-elem-type="shape"
                            data-field-top-value="469"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1158"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1030"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="1009"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="443"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786970452945000068 t396__group-flex"
                            data-group-id="1786970452945000068"
                            data-group-top-value="482"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="1171"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="1043"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="1022"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="456"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786970452945000068">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000070"
                                data-elem-id="1786970452945000070"
                                data-elem-type="text"
                                data-field-top-value="482"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1171"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1043"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="1022"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="456"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Positive</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000069"
                                data-elem-id="1786970452945000069"
                                data-elem-type="text"
                                data-field-top-value="482"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1171"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1043"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="1022"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="456"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>&gt; 4.0 (80–100%)</strong></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000067"
                            data-elem-id="1786970452945000067"
                            data-elem-type="shape"
                            data-field-top-value="518"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1207"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1079"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="1058"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="492"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786970452945000064 t396__group-flex"
                            data-group-id="1786970452945000064"
                            data-group-top-value="531"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="1220"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="1092"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="1071"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="505"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786970452945000064">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000066"
                                data-elem-id="1786970452945000066"
                                data-elem-type="text"
                                data-field-top-value="531"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1220"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1092"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="1071"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="505"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Mixed</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452945000065"
                                data-elem-id="1786970452945000065"
                                data-elem-type="text"
                                data-field-top-value="531"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1220"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1092"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="1071"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="505"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>3.01–3.99 (60–79%)</strong></div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452944000063"
                            data-elem-id="1786970452944000063"
                            data-elem-type="shape"
                            data-field-top-value="567"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1256"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1128"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="1107"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="541"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30831756011786970452944000060 t396__group-flex"
                            data-group-id="1786970452944000060"
                            data-group-top-value="580"
                            data-group-heightmode="hug"
                            data-group-height-value="24"
                            data-group-top-res-320-value="1269"
                            data-group-height-res-320-value="24"
                            data-group-top-res-480-value="1141"
                            data-group-height-res-480-value="24"
                            data-group-top-res-640-value="1120"
                            data-group-height-res-640-value="24"
                            data-group-top-res-960-value="554"
                            data-group-height-res-960-value="24"
                          >
                            <div class="tn-molecule" id="molecule-1786970452944000060">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452944000062"
                                data-elem-id="1786970452944000062"
                                data-elem-type="text"
                                data-field-top-value="580"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1269"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1141"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="1120"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="554"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Negative</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30831756011786970452944000061"
                                data-elem-id="1786970452944000061"
                                data-elem-type="text"
                                data-field-top-value="580"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1269"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1141"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="1120"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="554"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>&lt; 3.0 (≤ 58%)</strong></div>
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
      id="rec3085614701"
      class="r t-rec t-rec_pt_75"
      style="padding-top: 75px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="249"
          data-artboard-height-res-320="272"
          data-artboard-height-res-480="222"
          data-artboard-height-res-640="250"
          data-artboard-height-res-960="222"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30856147011784883216464000001 t396__group-flex"
            data-group-id="1784883216464000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="249"
            data-group-height-res-320-value="272"
            data-group-height-res-480-value="222"
            data-group-height-res-640-value="250"
            data-group-height-res-960-value="222"
          >
            <div class="tn-molecule" id="molecule-1784883216464000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30856147011783420935752000001 t396__group-flex"
                data-group-id="1783420935752000001"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="40"
                data-group-height-res-320-value="38"
                data-group-height-res-480-value="38"
                data-group-height-res-640-value="40"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="40"
              >
                <div class="tn-molecule" id="molecule-1783420935752000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30856147011784117186390000001"
                    data-elem-id="1784117186390000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-320-value="10"
                    data-field-height-res-480-value="10"
                    data-field-height-res-640-value="10"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30856147011782893831397000001"
                    data-elem-id="1782893831397000001"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="14"
                    data-field-height-res-320-value="12"
                    data-field-height-res-480-value="12"
                    data-field-height-res-640-value="14"
                    data-field-top-res-960-value="26"
                    data-field-height-res-960-value="14"
                  >
                    <div class="tn-atom">The deliverable</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30856147011786962042039000002 t396__group-flex"
                data-group-id="1786962042039000002"
                data-group-top-value="84"
                data-group-heightmode="hug"
                data-group-height-value="165"
                data-group-height-res-320-value="210"
                data-group-top-res-480-value="62"
                data-group-height-res-480-value="160"
                data-group-height-res-640-value="178"
                data-group-top-res-960-value="72"
                data-group-height-res-960-value="150"
              >
                <div class="tn-molecule" id="molecule-1786962042039000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30856147011782821563728000008"
                    data-elem-id="1782821563728000008"
                    data-elem-type="text"
                    data-field-top-value="84"
                    data-field-height-value="57"
                    data-field-top-res-320-value="62"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="62"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="72"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">What You Get</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30856147011786962083728000004"
                    data-elem-id="1786962083728000004"
                    data-elem-type="text"
                    data-field-top-value="165"
                    data-field-height-value="84"
                    data-field-top-res-320-value="122"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="122"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="138"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="138"
                    data-field-height-res-960-value="84"
                  >
                    <h2 class="tn-atom">
                      You will get not a dashboard login, but a document your team, your board and
                      your counsel can make the objective decisions on: findings, evidence, insight,
                      and what to do about each one. Delivered as a PDF with full and complete
                      information.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3085666801"
      class="r t-rec t-rec_pt_60 t-rec_pb_60"
      style="padding-top: 60px; padding-bottom: 60px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="172"
          data-artboard-height-res-320="414"
          data-artboard-height-res-480="289"
          data-artboard-height-res-640="288"
          data-artboard-height-res-960="204"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30856668011784189614328000001 t396__group-flex"
            data-group-id="1784189614328000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="200"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="414"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="289"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="288"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="204"
          >
            <div
              class="tn-molecule t-bgimg"
              id="molecule-1784189614328000001"
              style="
                background-image: url(&quot;/images/service-cf3307be13.png&quot;);
                background-image: url(&quot;/images/service-cf3307be13.png&quot;);
              "
            >
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30856668011784189614328000003 t396__group-flex"
                data-group-id="1784189614328000003"
                data-group-top-value="24"
                data-group-heightmode="hug"
                data-group-height-value="28"
                data-group-top-res-320-value="24"
                data-group-height-res-320-value="50"
                data-group-top-res-480-value="24"
                data-group-height-res-480-value="25"
                data-group-top-res-640-value="24"
                data-group-height-res-640-value="28"
                data-group-top-res-960-value="24"
                data-group-height-res-960-value="28"
              >
                <div class="tn-molecule" id="molecule-1784189614328000003">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30856668011784189614328000005"
                    data-elem-id="1784189614328000005"
                    data-elem-type="image"
                    data-field-top-value="24"
                    data-field-height-value="25"
                    data-field-top-res-320-value="24"
                    data-field-height-res-320-value="24"
                    data-field-top-res-480-value="24"
                    data-field-height-res-480-value="24"
                    data-field-top-res-640-value="24"
                    data-field-height-res-640-value="24"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="24"
                  >
                    <div class="tn-atom">
                      <img
                        class="tn-atom__img t-img"
                        src="/images/situation-ecb888a6689e94.svg"
                        alt="key"
                        loading="eager"
                      />
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30856668011784189614328000004"
                    data-elem-id="1784189614328000004"
                    data-elem-type="text"
                    data-field-top-value="24"
                    data-field-height-value="28"
                    data-field-top-res-320-value="24"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="24"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="24"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">A Full Analysis, Not a Dashboard Export</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30856668011784189614328000002"
                data-elem-id="1784189614328000002"
                data-elem-type="text"
                data-field-top-value="64"
                data-field-height-value="112"
                data-field-top-res-320-value="90"
                data-field-height-res-320-value="144"
                data-field-top-res-480-value="65"
                data-field-height-res-480-value="96"
                data-field-top-res-640-value="68"
                data-field-height-res-640-value="72"
                data-field-top-res-960-value="68"
                data-field-height-res-960-value="48"
              >
                <div class="tn-atom">
                  The final report reads like a full-service market research solution built for one
                  job: naming the risk and the fix, sub-score them. A company have the full and
                  clear picture and can act instantly. It's tailored for teams (C-level, marketing,
                  sales, growth, product etc.) that needs something actionable, and strategic enough
                  for a board that needs brand positioning spelled out in one document.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3085911801"
      class="r t-rec t-rec_pb_90"
      style="padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t1196">
        <div class="t1196__container_flex t-container t-container_flex">
          <div class="t-col t-col_12 t1196__col"></div>
          <div class="t1196__scroll-icon-wrapper" style="mix-blend-mode: multiply">
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
        <div class="t1196__items">
          <div class="t1196__controls t1196__controls_slider">
            <button
              class="t-btn t1196__control t1196__control_left t1196__control_md"
              style="border-radius: 50px; background-color: rgba(96, 108, 89, 1)"
              type="button"
              aria-controls="carousel_3085911801"
              aria-label="Previous slide"
              @click="scrollCarousel('carousel_3085911801', -1)"
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
              class="t-btn t1196__control t1196__control_right t1196__control_md"
              style="border-radius: 50px; background-color: rgba(96, 108, 89, 1)"
              type="button"
              aria-controls="carousel_3085911801"
              aria-label="Next slide"
              @click="scrollCarousel('carousel_3085911801', 1)"
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
          <div
            class="t1196__slider t1196__slider_width_12"
            id="carousel_3085911801"
            aria-live="polite"
          >
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="1 of 15"
              aria-current="true"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">01</div>
                  <div class="t-card__title t-name t-name_md">RPN Scorecard</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Your overall index and every sub-score, with the interpretation spelled out.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="2 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">02</div>
                  <div class="t-card__title t-name t-name_md">Search Suggestions</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Every branded or name query tested for negative autocomplete: which ones are
                    compromised, and what they steer users toward.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="3 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">03</div>
                  <div class="t-card__title t-name t-name_md">SERP Map</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Top-10/20/30 for general and reputational queries, each link classified
                    positive, negative, neutral, official or irrelevant, with monthly search volume
                    attached.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="4 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">04</div>
                  <div class="t-card__title t-name t-name_md">Negative Source Register</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Every unique negative site, where it ranks, and how many queries it appears
                    across, with repeat counts.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="5 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">05</div>
                  <div class="t-card__title t-name t-name_md">Image and Video Results</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    What the visual layer of search returns, and which images route traffic to
                    hostile sources.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="6 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">
                    06 • <span style="color: rgb(153, 173, 143)">BUSINESS</span>
                  </div>
                  <div class="t-card__title t-name t-name_md">Customer Loss Estimate</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    The share of prospects likely lost to negative content in search. The audit's
                    core financial finding.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="7 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">
                    07 • <span style="color: rgb(153, 173, 143)">BUSINESS</span>
                  </div>
                  <div class="t-card__title t-name t-name_md">Review Platform Analysis</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Ratings, review velocity, official response rate, and the recurring themes
                    behind praise and criticism.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="8 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">
                    08 • <span style="color: rgb(153, 173, 143)">BUSINESS</span>
                  </div>
                  <div class="t-card__title t-name t-name_md">Maps, Apps and HR Platforms</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    The surfaces most companies never check, and where candidates and local buyers
                    are actually deciding.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="9 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">09</div>
                  <div class="t-card__title t-name t-name_md">Mention and Narrative Analysis</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Volume, sentiment, reach, engagement, region and audience breakdown, topic map,
                    and the most viewed and most engaging posts.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="10 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">10</div>
                  <div class="t-card__title t-name t-name_md">Media Attack Detection</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Hour-by-hour and week-by-week dynamics, repeated phrasing and coordination
                    markers, the through-line narrative, and the risks it carries.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="11 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">11</div>
                  <div class="t-card__title t-name t-name_md">AI Search Results Analysis</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Identification accuracy and sentiment per platform, plus the top-25 sources the
                    models cite, each marked as controlled, neutral or high risk.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="12 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">12 • PERSONAL</div>
                  <div class="t-card__title t-name t-name_md">Compliance Dossier</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    What LexisNexis and comparable screening systems return on your name, and what a
                    bank or fund will do with it.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="13 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">13</div>
                  <div class="t-card__title t-name t-name_md">Risk Zones</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    Where you are exposed right now: named, ranked, and tied to a business
                    consequence.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="14 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">14</div>
                  <div class="t-card__title t-name t-name_md">Action Plan and Forecast</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    What to do first, what it should move, and by when, with quantified targets per
                    instrument.
                  </div>
                </div>
              </div>
            </div>
            <div
              class="t1196__item t1196__item_top t1196__item_has_bg"
              role="group"
              aria-roledescription="slide"
              aria-label="15 of 15"
              aria-current="false"
            >
              <div class="t1196__content">
                <div class="t1196__content-inner">
                  <div class="t-card__uptitle t-uptitle t-uptitle_xs">15</div>
                  <div class="t-card__title t-name t-name_md">Competitor or Peer Benchmark</div>
                  <div class="t-card__descr t-descr t-descr_xs">
                    The same scoring applied to your competitors or peers, so the number has a
                    reference point.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec3094199801" class="r t-rec" style="">
      <div
        class="t-cover"
        id="recorddiv3094199801"
        bgimgfield="img"
        style="height: 60vh; background-image: url(&quot;/images/service-37a0fe3475.png&quot;)"
      >
        <div
          class="t-cover__carrier"
          id="coverCarry3094199801"
          style="
            height: 60vh;
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
            height: 60vh;
            background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
          "
        ></div>
        <div class="t-container">
          <div class="t-col t-col_7">
            <div
              class="t-cover__wrapper t-valign_middle"
              style="height: 60vh; position: relative; z-index: 1"
            >
              <div class="t189">
                <div>
                  <div class="t189__wrapper">
                    <div class="t189__title t-title">Find Out Where You Stand</div>
                    <div class="t189__descr t-descr t-descr_sm">
                      Tell us the company name or the person name you would like to protect. We'll
                      map what a bank, partner or&nbsp;journalist currently finds: in search,
                      mentions, reviews and AI&nbsp;answers — and&nbsp;scope the audit from there.
                    </div>
                    <div class="t189__buttons-wrapper">
                      <a
                        class="t-btn t-btnflex t-btnflex_type_button t-btnflex_md"
                        href="#consultation"
                        @click.prevent="openConsultation()"
                        ><span class="t-btnflex__text">Request the Audit</span>
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
    <section id="rec3086433401" class="r t-rec t-rec_pt_90" style="padding-top: 90px">
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="246"
          data-artboard-height-res-320="268"
          data-artboard-height-res-480="207"
          data-artboard-height-res-640="236"
          data-artboard-height-res-960="236"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30864334011783513628528000022 t396__group-flex"
            data-group-id="1783513628528000022"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="246"
            data-group-height-res-320-value="268"
            data-group-height-res-480-value="207"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="236"
            data-group-height-res-960-value="236"
          >
            <div class="tn-molecule" id="molecule-1783513628528000022">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30864334011783513193106000020 t396__group-flex"
                data-group-id="1783513193106000020"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="48"
                data-group-height-res-320-value="45"
                data-group-height-res-480-value="45"
                data-group-height-res-640-value="48"
                data-group-height-res-960-value="48"
              >
                <div class="tn-molecule" id="molecule-1783513193106000020">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30864334011784120777832000001"
                    data-elem-id="1784120777832000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30864334011783513193106000021"
                    data-elem-id="1783513193106000021"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="22"
                    data-field-height-res-320-value="25"
                    data-field-height-res-480-value="25"
                    data-field-height-res-640-value="25"
                    data-field-height-res-960-value="22"
                  >
                    <div class="tn-atom">From research to action</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30864334011783523431798000002 t396__group-flex"
                data-group-id="1783523431798000002"
                data-group-top-value="88"
                data-group-heightmode="hug"
                data-group-height-value="158"
                data-group-top-res-320-value="69"
                data-group-height-res-320-value="199"
                data-group-top-res-480-value="69"
                data-group-height-res-480-value="138"
                data-group-height-res-640-value="156"
                data-group-top-res-960-value="80"
                data-group-height-res-960-value="156"
              >
                <div class="tn-molecule" id="molecule-1783523431798000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30864334011783513193106000019"
                    data-elem-id="1783513193106000019"
                    data-elem-type="text"
                    data-field-top-value="88"
                    data-field-height-value="114"
                    data-field-top-res-320-value="69"
                    data-field-height-res-320-value="36"
                    data-field-top-res-480-value="69"
                    data-field-height-res-480-value="36"
                    data-field-height-res-640-value="84"
                    data-field-top-res-960-value="80"
                    data-field-height-res-960-value="84"
                  >
                    <h2 class="tn-atom">Every Risk Comes With What To Do Next</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30864334011783523405384000001"
                    data-elem-id="1783523405384000001"
                    data-elem-type="text"
                    data-field-top-value="218"
                    data-field-height-value="28"
                    data-field-top-res-320-value="193"
                    data-field-height-res-320-value="75"
                    data-field-top-res-480-value="157"
                    data-field-height-res-480-value="50"
                    data-field-top-res-640-value="180"
                    data-field-height-res-640-value="364"
                    data-field-top-res-960-value="180"
                    data-field-height-res-960-value="56"
                  >
                    <div class="tn-atom">
                      We don't leave you with the list of findings alone and will provide the action
                      plan for all the risks found.
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
      id="rec3094228801"
      class="r t-rec t-rec_pt_60 t-rec_pb_90"
      style="padding-top: 60px; padding-bottom: 90px"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="0"
          data-artboard-height-res-320="476"
          data-artboard-height-res-480="500"
          data-artboard-height-res-640="476"
          data-artboard-height-res-960="640"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group scroll-block tn-group__30942288011783695484064000001 t396__group-flex"
            data-group-id="1783695484064000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="716"
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
                class="t396__group tn-group t396__elem-flex tn-group__30942288011786114684134000003 t396__group-flex"
                data-group-id="1786114684134000003"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="716"
                data-group-height-res-320-value="476"
                data-group-height-res-480-value="500"
                data-group-height-res-640-value="476"
                data-group-height-res-960-value="640"
              >
                <div class="tn-molecule" id="molecule-1786114684134000003">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30942288011783513292833000049 t396__group-flex"
                    data-group-id="1783513292833000049"
                    data-group-top-value="0"
                    data-group-heightmode="hug"
                    data-group-height-value="716"
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
                        class="t396__group tn-group border-2 t396__elem-flex tn-group__30942288011783513193105000002 t396__group-flex"
                        data-group-id="1783513193105000002"
                        data-group-top-value="0"
                        data-group-heightmode="hug"
                        data-group-height-value="50"
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
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783513193106000013 t396__group-flex"
                            data-group-id="1783513193106000013"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="50"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011786989566651000001"
                                data-elem-id="1786989566651000001"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="22"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="22"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="22"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="22"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Risk Zone</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523650876000042 t396__group-flex"
                            data-group-id="1783523650876000042"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="50"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523650876000043"
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
                                <div class="tn-atom">What We Are Looking For</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011784121134657000021 t396__group-flex"
                            data-group-id="1784121134657000021"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="50"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011784121134658000023"
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
                                <div class="tn-atom">What It Costs Your Business</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523652331000044 t396__group-flex"
                            data-group-id="1783523652331000044"
                            data-group-top-value="0"
                            data-group-heightmode="fill"
                            data-group-height-value="50"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523652331000045"
                                data-elem-id="1783523652331000045"
                                data-elem-type="text"
                                data-field-top-value="12"
                                data-field-height-value="24"
                                data-field-top-res-320-value="12"
                                data-field-height-res-320-value="48"
                                data-field-top-res-480-value="12"
                                data-field-height-res-480-value="48"
                                data-field-top-res-640-value="12"
                                data-field-height-res-640-value="48"
                                data-field-top-res-960-value="12"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">What We Do About It</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__30942288011783523714786000046 t396__group-flex"
                        data-group-id="1783523714786000046"
                        data-group-top-value="50"
                        data-group-heightmode="hug"
                        data-group-height-value="122"
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
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523714787000055 t396__group-flex"
                            data-group-id="1783523714787000055"
                            data-group-top-value="50"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523714787000056"
                                data-elem-id="1783523714787000056"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="48"
                                data-field-top-res-320-value="86"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="86"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="86"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="106"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Search and suggestions</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523714787000053 t396__group-flex"
                            data-group-id="1783523714787000053"
                            data-group-top-value="50"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523714787000054"
                                data-elem-id="1783523714787000054"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="96"
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
                                  Negative content indexed in the visible zone, compromised
                                  autocomplete on branded or name queries, hostile image results.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523714787000049 t396__group-flex"
                            data-group-id="1783523714787000049"
                            data-group-top-value="50"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523714787000050"
                                data-elem-id="1783523714787000050"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="72"
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
                                  Loss of trust at first contact. Marketing spend routed straight
                                  into a negative first impression.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523714786000047 t396__group-flex"
                            data-group-id="1783523714786000047"
                            data-group-top-value="50"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523714787000048"
                                data-elem-id="1783523714787000048"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="96"
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
                                  Rebuild the first page with credible content, optimise
                                  suggestions, and pursue removal or de-indexing where law and
                                  platform policy allow.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__30942288011783523842699000059 t396__group-flex"
                        data-group-id="1783523842699000059"
                        data-group-top-value="172"
                        data-group-heightmode="hug"
                        data-group-height-value="146"
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
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523842699000068 t396__group-flex"
                            data-group-id="1783523842699000068"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523842699000069"
                                data-elem-id="1783523842699000069"
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
                                <div class="tn-atom">Ratings and reviews</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523842699000066 t396__group-flex"
                            data-group-id="1783523842699000066"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523842699000067"
                                data-elem-id="1783523842699000067"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="96"
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
                                  Average rating below the threshold buyers accept, no official
                                  responses, recurring unanswered complaint themes.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523842699000062 t396__group-flex"
                            data-group-id="1783523842699000062"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523842699000063"
                                data-elem-id="1783523842699000063"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="72"
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
                                  Lower conversion and lower loyalty, often invisible in your funnel
                                  because it happens before the click.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523842699000060 t396__group-flex"
                            data-group-id="1783523842699000060"
                            data-group-top-value="172"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523842699000061"
                                data-elem-id="1783523842699000061"
                                data-elem-type="text"
                                data-field-top-value="184"
                                data-field-height-value="120"
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
                                  Response management, rating recovery, listing and profile
                                  correction, and fixing the operational cause behind the recurring
                                  theme.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__30942288011783523852780000074 t396__group-flex"
                        data-group-id="1783523852780000074"
                        data-group-top-value="318"
                        data-group-heightmode="hug"
                        data-group-height-value="122"
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
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523852781000083 t396__group-flex"
                            data-group-id="1783523852781000083"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523852781000084"
                                data-elem-id="1783523852781000084"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="48"
                                data-field-top-res-320-value="258"
                                data-field-height-res-320-value="24"
                                data-field-top-res-480-value="258"
                                data-field-height-res-480-value="24"
                                data-field-top-res-640-value="258"
                                data-field-height-res-640-value="24"
                                data-field-top-res-960-value="326"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom">Mentions and media</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523852781000081 t396__group-flex"
                            data-group-id="1783523852781000081"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523852781000082"
                                data-elem-id="1783523852781000082"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="72"
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
                                  Rising negative or coordinated mentions, a narrative forming
                                  before it reaches mainstream media.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523852781000077 t396__group-flex"
                            data-group-id="1783523852781000077"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523852781000078"
                                data-elem-id="1783523852781000078"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="72"
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
                                  A crisis you find out about from a journalist rather than from
                                  your own monitoring.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523852781000075 t396__group-flex"
                            data-group-id="1783523852781000075"
                            data-group-top-value="318"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523852781000076"
                                data-elem-id="1783523852781000076"
                                data-elem-type="text"
                                data-field-top-value="330"
                                data-field-height-value="96"
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
                                  Continuous monitoring with early-warning thresholds, containment
                                  while the story is still small, and 24/7 crisis scenarios.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group border-1 t396__elem-flex tn-group__30942288011783523855016000085 t396__group-flex"
                        data-group-id="1783523855016000085"
                        data-group-top-value="440"
                        data-group-heightmode="hug"
                        data-group-height-value="122"
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
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523855016000094 t396__group-flex"
                            data-group-id="1783523855016000094"
                            data-group-top-value="440"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523855016000095"
                                data-elem-id="1783523855016000095"
                                data-elem-type="text"
                                data-field-top-value="452"
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
                                <div class="tn-atom">AI answers</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523855016000092 t396__group-flex"
                            data-group-id="1783523855016000092"
                            data-group-top-value="440"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523855016000093"
                                data-elem-id="1783523855016000093"
                                data-elem-type="text"
                                data-field-top-value="452"
                                data-field-height-value="72"
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
                                  Models describing you inaccurately, or citing your worst sources
                                  as their evidence.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523855016000088 t396__group-flex"
                            data-group-id="1783523855016000088"
                            data-group-top-value="440"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523855016000089"
                                data-elem-id="1783523855016000089"
                                data-elem-type="text"
                                data-field-top-value="452"
                                data-field-height-value="72"
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
                                  A negative summary delivered with the authority of an answer, to
                                  buyers who never see your site.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523855016000086 t396__group-flex"
                            data-group-id="1783523855016000086"
                            data-group-top-value="440"
                            data-group-heightmode="fill"
                            data-group-height-value="122"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523855016000087"
                                data-elem-id="1783523855016000087"
                                data-elem-type="text"
                                data-field-top-value="452"
                                data-field-height-value="96"
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
                                  AI presence optimisation: authoritative, well-structured sources
                                  the models will actually read and cite.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30942288011783523907538000098 t396__group-flex"
                        data-group-id="1783523907538000098"
                        data-group-top-value="562"
                        data-group-heightmode="hug"
                        data-group-height-value="146"
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
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523907538000107 t396__group-flex"
                            data-group-id="1783523907538000107"
                            data-group-top-value="562"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523907539000108"
                                data-elem-id="1783523907539000108"
                                data-elem-type="text"
                                data-field-top-value="574"
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
                                <div class="tn-atom">Compliance exposure</div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523907538000105 t396__group-flex"
                            data-group-id="1783523907538000105"
                            data-group-top-value="562"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523907538000106"
                                data-elem-id="1783523907538000106"
                                data-elem-type="text"
                                data-field-top-value="574"
                                data-field-height-value="72"
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
                                  Adverse media, sanctions-adjacent records or inconsistent registry
                                  data attached to your name.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523907538000101 t396__group-flex"
                            data-group-id="1783523907538000101"
                            data-group-top-value="562"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523907538000102"
                                data-elem-id="1783523907538000102"
                                data-elem-type="text"
                                data-field-top-value="574"
                                data-field-height-value="72"
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
                                  Refused accounts, frozen assets, visa and residency problems,
                                  failed diligence on a deal you needed.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30942288011783523907538000099 t396__group-flex"
                            data-group-id="1783523907538000099"
                            data-group-top-value="562"
                            data-group-heightmode="fill"
                            data-group-height-value="146"
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
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30942288011783523907538000100"
                                data-elem-id="1783523907538000100"
                                data-elem-type="text"
                                data-field-top-value="574"
                                data-field-height-value="120"
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
                                  Compliance preparation: registry synchronisation, database
                                  correction, Wikipedia work, removal, and publication of verifiable
                                  material.
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
      id="rec3086781401"
      class="r t-rec t-rec_pt_90"
      style="padding-top: 90px; background-color: #dfecd9"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="193"
          data-artboard-height-res-320="237"
          data-artboard-height-res-480="237"
          data-artboard-height-res-640="194"
          data-artboard-height-res-960="170"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30867814011783513628528000022 t396__group-flex"
            data-group-id="1783513628528000022"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="193"
            data-group-height-res-320-value="237"
            data-group-height-res-480-value="237"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="194"
            data-group-height-res-960-value="170"
          >
            <div class="tn-molecule" id="molecule-1783513628528000022">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30867814011783513193106000020 t396__group-flex"
                data-group-id="1783513193106000020"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="48"
                data-group-height-res-320-value="45"
                data-group-height-res-480-value="45"
                data-group-height-res-640-value="48"
                data-group-height-res-960-value="48"
              >
                <div class="tn-molecule" id="molecule-1783513193106000020">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867814011784120777832000001"
                    data-elem-id="1784120777832000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867814011783513193106000021"
                    data-elem-id="1783513193106000021"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="22"
                    data-field-height-res-320-value="25"
                    data-field-height-res-480-value="25"
                    data-field-height-res-640-value="25"
                    data-field-height-res-960-value="22"
                  >
                    <div class="tn-atom">How it works</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30867814011786974999276000002 t396__group-flex"
                data-group-id="1786974999276000002"
                data-group-top-value="88"
                data-group-heightmode="hug"
                data-group-height-value="105"
                data-group-height-res-320-value="168"
                data-group-top-res-480-value="69"
                data-group-height-res-480-value="168"
                data-group-height-res-640-value="114"
                data-group-top-res-960-value="80"
                data-group-height-res-960-value="90"
              >
                <div class="tn-molecule" id="molecule-1786974999276000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867814011783513193106000019"
                    data-elem-id="1783513193106000019"
                    data-elem-type="text"
                    data-field-top-value="88"
                    data-field-height-value="57"
                    data-field-top-res-320-value="69"
                    data-field-height-res-320-value="72"
                    data-field-top-res-480-value="69"
                    data-field-height-res-480-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="80"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">Four Steps For Clear Brand Presence Visibility</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867814011786974972144000001"
                    data-elem-id="1786974972144000001"
                    data-elem-type="text"
                    data-field-top-value="169"
                    data-field-height-value="24"
                    data-field-top-res-320-value="165"
                    data-field-height-res-320-value="72"
                    data-field-top-res-480-value="165"
                    data-field-height-res-480-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="146"
                    data-field-height-res-960-value="24"
                  >
                    <h2 class="tn-atom">
                      <em
                        >Turnaround depends on the number of markets, languages and entities in
                        scope and is confirmed at the scoping call.</em
                      >
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3086783601"
      class="r t-rec t-rec_pt_45 t-rec_pb_90"
      style="padding-top: 45px; padding-bottom: 90px; background-color: #dfecd9"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="344"
          data-artboard-height-res-320="944"
          data-artboard-height-res-480="848"
          data-artboard-height-res-640="764"
          data-artboard-height-res-960="373"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30867836011784642721499000001 t396__group-flex"
            data-group-id="1784642721499000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="344"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="944"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="848"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="764"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="373"
          >
            <div class="tn-molecule" id="molecule-1784642721499000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30867836011786020514387000001 t396__group-flex"
                data-group-id="1786020514387000001"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="344"
                data-group-top-res-320-value="0"
                data-group-height-res-320-value="218"
                data-group-top-res-480-value="0"
                data-group-height-res-480-value="194"
                data-group-top-res-640-value="0"
                data-group-height-res-640-value="173"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="373"
              >
                <div class="tn-molecule" id="molecule-1786020514387000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011786020514387000005"
                    data-elem-id="1786020514387000005"
                    data-elem-type="text"
                    data-field-top-value="32"
                    data-field-height-value="28"
                    data-field-top-res-320-value="24"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="24"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="24"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">01</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011786020514387000004"
                    data-elem-id="1786020514387000004"
                    data-elem-type="text"
                    data-field-top-value="76"
                    data-field-height-value="28"
                    data-field-top-res-320-value="61"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="61"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="64"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="68"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom">
                      <span style="color: rgb(96, 108, 89)">Scoping Call</span>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011786020514387000002"
                    data-elem-id="1786020514387000002"
                    data-elem-type="text"
                    data-field-top-value="120"
                    data-field-height-value="168"
                    data-field-top-res-320-value="98"
                    data-field-height-res-320-value="120"
                    data-field-top-res-480-value="98"
                    data-field-height-res-480-value="72"
                    data-field-top-res-640-value="101"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="109"
                    data-field-height-res-960-value="336"
                  >
                    <div class="tn-atom">
                      Tell us your markets, your languages, your entities and beneficial owners, the
                      queries that matter, the platforms your buyers use for the start. It will take
                      ~30 minutes.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30867836011784642721500000017 t396__group-flex"
                data-group-id="1784642721500000017"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="344"
                data-group-top-res-320-value="234"
                data-group-height-res-320-value="242"
                data-group-top-res-480-value="210"
                data-group-height-res-480-value="218"
                data-group-top-res-640-value="189"
                data-group-height-res-640-value="197"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="373"
              >
                <div class="tn-molecule" id="molecule-1784642721500000017">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000021"
                    data-elem-id="1784642721500000021"
                    data-elem-type="text"
                    data-field-top-value="32"
                    data-field-height-value="28"
                    data-field-top-res-320-value="258"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="234"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="213"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">02</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000020"
                    data-elem-id="1784642721500000020"
                    data-elem-type="text"
                    data-field-top-value="76"
                    data-field-height-value="28"
                    data-field-top-res-320-value="295"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="271"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="253"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="68"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">
                      <span style="color: rgb(96, 108, 89)">Data Collection</span>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000018"
                    data-elem-id="1784642721500000018"
                    data-elem-type="text"
                    data-field-top-value="120"
                    data-field-height-value="192"
                    data-field-top-res-320-value="332"
                    data-field-height-res-320-value="96"
                    data-field-top-res-480-value="308"
                    data-field-height-res-480-value="72"
                    data-field-top-res-640-value="290"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="109"
                    data-field-height-res-960-value="216"
                  >
                    <div class="tn-atom">
                      We run the field research: search, suggestions, images, reviews, maps, apps,
                      HR sites, media, communities, AI answers and screening databases, across every
                      market in scope.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30867836011784642721500000012 t396__group-flex"
                data-group-id="1784642721500000012"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="344"
                data-group-top-res-320-value="492"
                data-group-height-res-320-value="218"
                data-group-top-res-480-value="444"
                data-group-height-res-480-value="194"
                data-group-top-res-640-value="402"
                data-group-height-res-640-value="173"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="373"
              >
                <div class="tn-molecule" id="molecule-1784642721500000012">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000016"
                    data-elem-id="1784642721500000016"
                    data-elem-type="text"
                    data-field-top-value="32"
                    data-field-height-value="28"
                    data-field-top-res-320-value="516"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="468"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="426"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">03</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000015"
                    data-elem-id="1784642721500000015"
                    data-elem-type="text"
                    data-field-top-value="76"
                    data-field-height-value="28"
                    data-field-top-res-320-value="553"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="505"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="466"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="68"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom"><span style="color: rgb(96, 108, 89)">Analysis</span></div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000013"
                    data-elem-id="1784642721500000013"
                    data-elem-type="text"
                    data-field-top-value="120"
                    data-field-height-value="144"
                    data-field-top-res-320-value="590"
                    data-field-height-res-320-value="120"
                    data-field-top-res-480-value="542"
                    data-field-height-res-480-value="96"
                    data-field-top-res-640-value="503"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="109"
                    data-field-height-res-960-value="192"
                  >
                    <div class="tn-atom">
                      Analysts research and score each surface, classify every source, separate
                      organic negativity from coordinated activity, and name the risk zones.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30867836011784642721499000007 t396__group-flex"
                data-group-id="1784642721499000007"
                data-group-top-value="0"
                data-group-heightmode="fill"
                data-group-height-value="344"
                data-group-top-res-320-value="726"
                data-group-height-res-320-value="218"
                data-group-top-res-480-value="654"
                data-group-height-res-480-value="194"
                data-group-top-res-640-value="591"
                data-group-height-res-640-value="173"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="373"
              >
                <div class="tn-molecule" id="molecule-1784642721499000007">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721500000011"
                    data-elem-id="1784642721500000011"
                    data-elem-type="text"
                    data-field-top-value="32"
                    data-field-height-value="28"
                    data-field-top-res-320-value="750"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="678"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="615"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="24"
                    data-field-height-res-960-value="28"
                  >
                    <div class="tn-atom">04</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721499000010"
                    data-elem-id="1784642721499000010"
                    data-elem-type="text"
                    data-field-top-value="76"
                    data-field-height-value="28"
                    data-field-top-res-320-value="787"
                    data-field-height-res-320-value="25"
                    data-field-top-res-480-value="715"
                    data-field-height-res-480-value="25"
                    data-field-top-res-640-value="655"
                    data-field-height-res-640-value="28"
                    data-field-top-res-960-value="68"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom">
                      <span style="color: rgb(96, 108, 89)">Walkthrough</span>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30867836011784642721499000008"
                    data-elem-id="1784642721499000008"
                    data-elem-type="text"
                    data-field-top-value="120"
                    data-field-height-value="120"
                    data-field-top-res-320-value="824"
                    data-field-height-res-320-value="120"
                    data-field-top-res-480-value="752"
                    data-field-height-res-480-value="72"
                    data-field-top-res-640-value="692"
                    data-field-height-res-640-value="72"
                    data-field-top-res-960-value="109"
                    data-field-height-res-960-value="144"
                  >
                    <div class="tn-atom">
                      We present the report live, answer the hard questions, and hand over the
                      action plan. What you do next is your decision.
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
      id="rec3086967201"
      class="r t-rec t-rec_pt_75"
      style="padding-top: 75px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="221"
          data-artboard-height-res-320="283"
          data-artboard-height-res-480="258"
          data-artboard-height-res-640="264"
          data-artboard-height-res-960="194"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30869672011784883216464000001 t396__group-flex"
            data-group-id="1784883216464000001"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="221"
            data-group-height-res-320-value="283"
            data-group-height-res-480-value="258"
            data-group-height-res-640-value="264"
            data-group-height-res-960-value="194"
          >
            <div class="tn-molecule" id="molecule-1784883216464000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30869672011783420935752000001 t396__group-flex"
                data-group-id="1783420935752000001"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="40"
                data-group-height-res-320-value="38"
                data-group-height-res-480-value="38"
                data-group-height-res-640-value="40"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="40"
              >
                <div class="tn-molecule" id="molecule-1783420935752000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30869672011784117186390000001"
                    data-elem-id="1784117186390000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-height-res-320-value="10"
                    data-field-height-res-480-value="10"
                    data-field-height-res-640-value="10"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30869672011782893831397000001"
                    data-elem-id="1782893831397000001"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="14"
                    data-field-height-res-320-value="12"
                    data-field-height-res-480-value="12"
                    data-field-height-res-640-value="14"
                    data-field-top-res-960-value="26"
                    data-field-height-res-960-value="14"
                  >
                    <div class="tn-atom">next steps</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30869672011786962042039000002 t396__group-flex"
                data-group-id="1786962042039000002"
                data-group-top-value="84"
                data-group-heightmode="hug"
                data-group-height-value="137"
                data-group-height-res-320-value="221"
                data-group-top-res-480-value="62"
                data-group-height-res-480-value="196"
                data-group-height-res-640-value="192"
                data-group-top-res-960-value="72"
                data-group-height-res-960-value="122"
              >
                <div class="tn-molecule" id="molecule-1786962042039000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30869672011782821563728000008"
                    data-elem-id="1782821563728000008"
                    data-elem-type="text"
                    data-field-top-value="84"
                    data-field-height-value="57"
                    data-field-top-res-320-value="62"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="62"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="72"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="72"
                    data-field-height-res-960-value="42"
                  >
                    <h2 class="tn-atom">You Finish With A Clear Plan. Ready for Action</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30869672011786962083728000004"
                    data-elem-id="1786962083728000004"
                    data-elem-type="text"
                    data-field-top-value="165"
                    data-field-height-value="56"
                    data-field-top-res-320-value="158"
                    data-field-height-res-320-value="108"
                    data-field-top-res-480-value="158"
                    data-field-height-res-480-value="108"
                    data-field-top-res-640-value="180"
                    data-field-height-res-640-value="42"
                    data-field-top-res-960-value="138"
                    data-field-height-res-960-value="84"
                  >
                    <h2 class="tn-atom">
                      Each risk profile maps to a defined action plan with its own instruments,
                      timeline and forecast. <br />You are free to run it in-house, with another
                      agency, or with us.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3086982201"
      class="r t-rec t-rec_pt_45 t-rec_pb_90"
      style="padding-top: 45px; padding-bottom: 90px; background-color: #f3f3f3"
    >
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="772"
          data-artboard-height-res-320="1672"
          data-artboard-height-res-480="1584"
          data-artboard-height-res-640="1498"
          data-artboard-height-res-960="799"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30869822011766660917739000024 t396__group-flex"
            data-group-id="1766660917739000024"
            data-group-top-value="0"
            data-group-heightmode="fill"
            data-group-height-value="772"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="1672"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="1584"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="1498"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="799"
          >
            <div class="tn-molecule" id="molecule-1766660917739000024">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30869822011766649510438000001 t396__group-flex"
                data-group-id="1766649510438000001"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="772"
                data-group-top-res-320-value="0"
                data-group-height-res-320-value="826"
                data-group-top-res-480-value="0"
                data-group-height-res-480-value="794"
                data-group-top-res-640-value="0"
                data-group-height-res-640-value="727"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="799"
              >
                <div class="tn-molecule" id="molecule-1766649510438000001">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30869822011786975715395000120 t396__group-flex"
                    data-group-id="1786975715395000120"
                    data-group-top-value="40"
                    data-group-heightmode="hug"
                    data-group-height-value="598"
                    data-group-top-res-320-value="24"
                    data-group-height-res-320-value="684"
                    data-group-top-res-480-value="32"
                    data-group-height-res-480-value="636"
                    data-group-height-res-640-value="569"
                    data-group-top-res-960-value="32"
                    data-group-height-res-960-value="641"
                  >
                    <div class="tn-molecule" id="molecule-1786975715395000120">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786962779019000001"
                        data-elem-id="1786962779019000001"
                        data-elem-type="text"
                        data-field-top-value="40"
                        data-field-height-value="22"
                        data-field-top-res-320-value="24"
                        data-field-height-res-320-value="19"
                        data-field-top-res-480-value="32"
                        data-field-height-res-480-value="19"
                        data-field-top-res-640-value="32"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="32"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">Company track</div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011766647912741000003"
                        data-elem-id="1766647912741000003"
                        data-elem-type="text"
                        data-field-top-value="82"
                        data-field-height-value="36"
                        data-field-top-res-320-value="63"
                        data-field-height-res-320-value="29"
                        data-field-top-res-480-value="71"
                        data-field-height-res-480-value="29"
                        data-field-top-res-640-value="74"
                        data-field-height-res-640-value="31"
                        data-field-top-res-960-value="74"
                        data-field-height-res-960-value="31"
                      >
                        <div class="tn-atom"><strong>Brand strategies</strong></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30869822011786975445923000001 t396__group-flex"
                        data-group-id="1786975445923000001"
                        data-group-top-value="138"
                        data-group-heightmode="hug"
                        data-group-height-value="500"
                        data-group-top-res-320-value="112"
                        data-group-height-res-320-value="596"
                        data-group-top-res-480-value="120"
                        data-group-height-res-480-value="548"
                        data-group-top-res-640-value="125"
                        data-group-height-res-640-value="476"
                        data-group-top-res-960-value="125"
                        data-group-height-res-960-value="548"
                      >
                        <div class="tn-molecule" id="molecule-1786975445923000001">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975445924000022 t396__group-flex"
                            data-group-id="1786975445924000022"
                            data-group-top-value="138"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="112"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="120"
                            data-group-height-res-480-value="104"
                            data-group-top-res-640-value="125"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="125"
                            data-group-height-res-960-value="104"
                          >
                            <div class="tn-molecule" id="molecule-1786975445924000022">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975445925000023"
                                data-elem-id="1786975445925000023"
                                data-elem-type="text"
                                data-field-top-value="138"
                                data-field-height-value="24"
                                data-field-top-res-320-value="112"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="120"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="125"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="125"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>SERP Therapy</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975445925000024"
                                data-elem-id="1786975445925000024"
                                data-elem-type="text"
                                data-field-top-value="170"
                                data-field-height-value="24"
                                data-field-top-res-320-value="144"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="152"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="157"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="157"
                                data-field-height-res-960-value="72"
                              >
                                <div class="tn-atom">
                                  Negative content occupies the visible zone. Rebuild the first page
                                  and push hostile results down.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975445924000021"
                            data-elem-id="1786975445924000021"
                            data-elem-type="shape"
                            data-field-top-value="230"
                            data-field-height-value="1"
                            data-field-top-res-320-value="228"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="236"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="217"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="241"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975562465000081 t396__group-flex"
                            data-group-id="1786975562465000081"
                            data-group-top-value="243"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="241"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="249"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="230"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="254"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975562465000081">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975562466000083"
                                data-elem-id="1786975562466000083"
                                data-elem-type="text"
                                data-field-top-value="243"
                                data-field-height-value="24"
                                data-field-top-res-320-value="241"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="249"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="230"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="254"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Past Negative</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975562466000082"
                                data-elem-id="1786975562466000082"
                                data-elem-type="text"
                                data-field-top-value="275"
                                data-field-height-value="24"
                                data-field-top-res-320-value="273"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="281"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="262"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="286"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Specific materials need to be gone, not just outranked. Legal
                                  removal and de-indexing.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975445924000017"
                            data-elem-id="1786975445924000017"
                            data-elem-type="shape"
                            data-field-top-value="335"
                            data-field-height-value="1"
                            data-field-top-res-320-value="357"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="341"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="322"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="346"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975574818000084 t396__group-flex"
                            data-group-id="1786975574818000084"
                            data-group-top-value="348"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="370"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="354"
                            data-group-height-res-480-value="104"
                            data-group-top-res-640-value="335"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="359"
                            data-group-height-res-960-value="104"
                          >
                            <div class="tn-molecule" id="molecule-1786975574818000084">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975574818000086"
                                data-elem-id="1786975574818000086"
                                data-elem-type="text"
                                data-field-top-value="348"
                                data-field-height-value="24"
                                data-field-top-res-320-value="370"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="354"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="335"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="359"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Mention Watchtower</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975574818000085"
                                data-elem-id="1786975574818000085"
                                data-elem-type="text"
                                data-field-top-value="380"
                                data-field-height-value="24"
                                data-field-top-res-320-value="402"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="386"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="367"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="391"
                                data-field-height-res-960-value="72"
                              >
                                <div class="tn-atom">
                                  Volume is high and moving. Continuous brand tracking, response
                                  management and containment.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975445924000013"
                            data-elem-id="1786975445924000013"
                            data-elem-type="shape"
                            data-field-top-value="440"
                            data-field-height-value="1"
                            data-field-top-res-320-value="486"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="470"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="427"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="475"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975587709000087 t396__group-flex"
                            data-group-id="1786975587709000087"
                            data-group-top-value="453"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="499"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="483"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="440"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="488"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975587709000087">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975587709000089"
                                data-elem-id="1786975587709000089"
                                data-elem-type="text"
                                data-field-top-value="453"
                                data-field-height-value="24"
                                data-field-top-res-320-value="499"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="483"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="440"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="488"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Brand Start</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975587709000088"
                                data-elem-id="1786975587709000088"
                                data-elem-type="text"
                                data-field-top-value="485"
                                data-field-height-value="24"
                                data-field-top-res-320-value="531"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="515"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="472"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="520"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Little or no presence yet. Build the field before the market
                                  builds it for you.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975445924000009"
                            data-elem-id="1786975445924000009"
                            data-elem-type="shape"
                            data-field-top-value="545"
                            data-field-height-value="1"
                            data-field-top-res-320-value="615"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="575"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="532"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="580"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975599922000090 t396__group-flex"
                            data-group-id="1786975599922000090"
                            data-group-top-value="558"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="628"
                            data-group-height-res-320-value="80"
                            data-group-top-res-480-value="588"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="545"
                            data-group-height-res-640-value="56"
                            data-group-top-res-960-value="593"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975599922000090">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975599923000092"
                                data-elem-id="1786975599923000092"
                                data-elem-type="text"
                                data-field-top-value="558"
                                data-field-height-value="24"
                                data-field-top-res-320-value="628"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="588"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="545"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="593"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Lead and Grow</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975599923000091"
                                data-elem-id="1786975599923000091"
                                data-elem-type="text"
                                data-field-top-value="590"
                                data-field-height-value="24"
                                data-field-top-res-320-value="660"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="620"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="577"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="625"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  The field is healthy. Hold it, deepen it, and stay ready for a
                                  crisis.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975623521000093"
                    data-elem-id="1786975623521000093"
                    data-elem-type="button"
                    data-field-top-value="678"
                    data-field-height-value="54"
                    data-field-top-res-320-value="748"
                    data-field-top-res-480-value="708"
                    data-field-top-res-640-value="641"
                    data-field-top-res-960-value="713"
                    data-field-height-res-960-value="54"
                  >
                    <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                      <div class="tn-atom__button-content">
                        <span class="tn-atom__button-text">Business Audit in Detail</span>
                      </div>
                      <span class="tn-atom__button-border"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000095 t396__group-flex"
                data-group-id="1786975654947000095"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="772"
                data-group-top-res-320-value="846"
                data-group-height-res-320-value="826"
                data-group-top-res-480-value="814"
                data-group-height-res-480-value="770"
                data-group-top-res-640-value="747"
                data-group-height-res-640-value="751"
                data-group-top-res-960-value="0"
                data-group-height-res-960-value="799"
              >
                <div class="tn-molecule" id="molecule-1786975654947000095">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__30869822011786975704390000119 t396__group-flex"
                    data-group-id="1786975704390000119"
                    data-group-top-value="40"
                    data-group-heightmode="hug"
                    data-group-height-value="598"
                    data-group-top-res-320-value="870"
                    data-group-height-res-320-value="684"
                    data-group-top-res-480-value="846"
                    data-group-height-res-480-value="612"
                    data-group-top-res-640-value="779"
                    data-group-height-res-640-value="593"
                    data-group-top-res-960-value="32"
                    data-group-height-res-960-value="617"
                  >
                    <div class="tn-molecule" id="molecule-1786975704390000119">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000118"
                        data-elem-id="1786975654947000118"
                        data-elem-type="text"
                        data-field-top-value="40"
                        data-field-height-value="22"
                        data-field-top-res-320-value="870"
                        data-field-height-res-320-value="19"
                        data-field-top-res-480-value="846"
                        data-field-height-res-480-value="19"
                        data-field-top-res-640-value="779"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="32"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">Personal track</div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000117"
                        data-elem-id="1786975654947000117"
                        data-elem-type="text"
                        data-field-top-value="82"
                        data-field-height-value="36"
                        data-field-top-res-320-value="909"
                        data-field-height-res-320-value="29"
                        data-field-top-res-480-value="885"
                        data-field-height-res-480-value="29"
                        data-field-top-res-640-value="821"
                        data-field-height-res-640-value="31"
                        data-field-top-res-960-value="74"
                        data-field-height-res-960-value="31"
                      >
                        <div class="tn-atom"><strong>Personal strategies</strong></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000097 t396__group-flex"
                        data-group-id="1786975654947000097"
                        data-group-top-value="138"
                        data-group-heightmode="hug"
                        data-group-height-value="500"
                        data-group-top-res-320-value="958"
                        data-group-height-res-320-value="596"
                        data-group-top-res-480-value="934"
                        data-group-height-res-480-value="524"
                        data-group-top-res-640-value="872"
                        data-group-height-res-640-value="500"
                        data-group-top-res-960-value="125"
                        data-group-height-res-960-value="524"
                      >
                        <div class="tn-molecule" id="molecule-1786975654947000097">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000114 t396__group-flex"
                            data-group-id="1786975654947000114"
                            data-group-top-value="138"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="958"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="934"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="872"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="125"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975654947000114">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000116"
                                data-elem-id="1786975654947000116"
                                data-elem-type="text"
                                data-field-top-value="138"
                                data-field-height-value="24"
                                data-field-top-res-320-value="958"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="934"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="872"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="125"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Digital Shield</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000115"
                                data-elem-id="1786975654947000115"
                                data-elem-type="text"
                                data-field-top-value="170"
                                data-field-height-value="24"
                                data-field-top-res-320-value="990"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="966"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="904"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="157"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Visibility audited, risks closed, the personal profile protected
                                  against exposure.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000113"
                            data-elem-id="1786975654947000113"
                            data-elem-type="shape"
                            data-field-top-value="230"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1074"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1026"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="964"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="217"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000110 t396__group-flex"
                            data-group-id="1786975654947000110"
                            data-group-top-value="243"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="1087"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="1039"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="977"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="230"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975654947000110">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000112"
                                data-elem-id="1786975654947000112"
                                data-elem-type="text"
                                data-field-top-value="243"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1087"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1039"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="977"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="230"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Key to Access</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000111"
                                data-elem-id="1786975654947000111"
                                data-elem-type="text"
                                data-field-top-value="275"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1119"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1071"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1009"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="262"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Built for passing compliance: banks, funds, migration authorities
                                  and regulators.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000109"
                            data-elem-id="1786975654947000109"
                            data-elem-type="shape"
                            data-field-top-value="335"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1203"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1131"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="1069"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="322"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000106 t396__group-flex"
                            data-group-id="1786975654947000106"
                            data-group-top-value="348"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="1216"
                            data-group-height-res-320-value="80"
                            data-group-top-res-480-value="1144"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="1082"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="335"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975654947000106">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000108"
                                data-elem-id="1786975654947000108"
                                data-elem-type="text"
                                data-field-top-value="348"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1216"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1144"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1082"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="335"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>Stop Crisis</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000107"
                                data-elem-id="1786975654947000107"
                                data-elem-type="text"
                                data-field-top-value="380"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1248"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1176"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1114"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="367"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  An attack is live. Neutralise, refute, remove, and take back the
                                  agenda.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000105"
                            data-elem-id="1786975654947000105"
                            data-elem-type="shape"
                            data-field-top-value="440"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1308"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1236"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="1174"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="427"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000102 t396__group-flex"
                            data-group-id="1786975654947000102"
                            data-group-top-value="453"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="1321"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="1249"
                            data-group-height-res-480-value="80"
                            data-group-top-res-640-value="1187"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="440"
                            data-group-height-res-960-value="80"
                          >
                            <div class="tn-molecule" id="molecule-1786975654947000102">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000104"
                                data-elem-id="1786975654947000104"
                                data-elem-type="text"
                                data-field-top-value="453"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1321"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1249"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1187"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="440"
                                data-field-height-res-960-value="24"
                              >
                                <div class="tn-atom"><strong>New Horizon</strong></div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000103"
                                data-elem-id="1786975654947000103"
                                data-elem-type="text"
                                data-field-top-value="485"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1353"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1281"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1219"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="472"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  No structured footprint yet. Build the profile, the sources and
                                  the media presence.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000101"
                            data-elem-id="1786975654947000101"
                            data-elem-type="shape"
                            data-field-top-value="545"
                            data-field-height-value="1"
                            data-field-top-res-320-value="1437"
                            data-field-height-res-320-value="1"
                            data-field-top-res-480-value="1341"
                            data-field-height-res-480-value="1"
                            data-field-top-res-640-value="1279"
                            data-field-height-res-640-value="1"
                            data-field-top-res-960-value="532"
                            data-field-height-res-960-value="1"
                          >
                            <div class="tn-atom"></div>
                          </div>
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__30869822011786975654947000098 t396__group-flex"
                            data-group-id="1786975654947000098"
                            data-group-top-value="558"
                            data-group-heightmode="hug"
                            data-group-height-value="80"
                            data-group-top-res-320-value="1450"
                            data-group-height-res-320-value="104"
                            data-group-top-res-480-value="1354"
                            data-group-height-res-480-value="104"
                            data-group-top-res-640-value="1292"
                            data-group-height-res-640-value="80"
                            data-group-top-res-960-value="545"
                            data-group-height-res-960-value="104"
                          >
                            <div class="tn-molecule" id="molecule-1786975654947000098">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000100"
                                data-elem-id="1786975654947000100"
                                data-elem-type="text"
                                data-field-top-value="558"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1450"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1354"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1292"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="545"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  <strong>Get to the Top / Personal Business / Expert Power</strong>
                                </div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000099"
                                data-elem-id="1786975654947000099"
                                data-elem-type="text"
                                data-field-top-value="590"
                                data-field-height-value="24"
                                data-field-top-res-320-value="1506"
                                data-field-height-res-320-value="120"
                                data-field-top-res-480-value="1410"
                                data-field-height-res-480-value="96"
                                data-field-top-res-640-value="1324"
                                data-field-height-res-640-value="72"
                                data-field-top-res-960-value="601"
                                data-field-height-res-960-value="48"
                              >
                                <div class="tn-atom">
                                  Turn the profile into an asset for the company, the deal flow or
                                  the practice.
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30869822011786975654947000096"
                    data-elem-id="1786975654947000096"
                    data-elem-type="button"
                    data-field-top-value="678"
                    data-field-height-value="54"
                    data-field-top-res-320-value="1594"
                    data-field-top-res-480-value="1498"
                    data-field-top-res-640-value="1412"
                    data-field-top-res-960-value="713"
                    data-field-height-res-960-value="54"
                  >
                    <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                      <div class="tn-atom__button-content">
                        <span class="tn-atom__button-text">Personal Audit in Detail</span>
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
    </section>
    <section
      id="rec3070277701"
      class="r t-rec t-rec_pt_90 t-rec_pb_30"
      style="padding-top: 90px; padding-bottom: 30px; background-color: #ffffff"
    >
      <div class="t396">
        <div
          class="t396__artboard"
          data-artboard-height="148"
          data-artboard-height-res-320="37"
          data-artboard-height-res-480="111"
          data-artboard-height-res-640="125"
          data-artboard-height-res-960="125"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__30702777011783508100973000047 t396__group-flex"
            data-group-id="1783508100973000047"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="148"
            data-group-top-res-320-value="-74"
            data-group-height-res-320-value="111"
            data-group-height-res-480-value="111"
            data-group-height-res-640-value="125"
            data-group-height-res-960-value="125"
          >
            <div class="tn-molecule" id="molecule-1783508100973000047">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__30702777011783508100973000049 t396__group-flex"
                data-group-id="1783508100973000049"
                data-group-top-value="0"
                data-group-heightmode="hug"
                data-group-height-value="51"
                data-group-top-res-320-value="-74"
                data-group-height-res-320-value="51"
                data-group-height-res-480-value="51"
                data-group-height-res-640-value="51"
                data-group-height-res-960-value="51"
              >
                <div class="tn-molecule" id="molecule-1783508100973000049">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702777011784284865045000001"
                    data-elem-id="1784284865045000001"
                    data-elem-type="vector"
                    data-field-top-value="0"
                    data-field-height-value="2"
                    data-field-top-res-320-value="-74"
                    data-field-height-res-960-value="10"
                  >
                    <div class="tn-atom tn-atom__vector">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1156.51 2.00"
                        role="img"
                        aria-label="false"
                      >
                        <defs></defs>
                        <path
                          fill="transparent"
                          stroke="#cccccc"
                          fill-opacity="1"
                          stroke-width="1"
                          stroke-opacity="1"
                          id="tSvgf9a073126f"
                          title="Path 3"
                          d="M1 1C0 1 1155.5088 1 1155.5088 1"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__30702777011783508100973000050"
                    data-elem-id="1783508100973000050"
                    data-elem-type="text"
                    data-field-top-value="26"
                    data-field-height-value="25"
                    data-field-top-res-320-value="-48"
                    data-field-height-res-320-value="25"
                    data-field-height-res-480-value="25"
                    data-field-height-res-640-value="25"
                    data-field-height-res-960-value="25"
                  >
                    <div class="tn-atom">Frequently Asked Questions</div>
                  </div>
                </div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__30702777011783508100973000048"
                data-elem-id="1783508100973000048"
                data-elem-type="text"
                data-field-top-value="91"
                data-field-height-value="57"
                data-field-top-res-320-value="1"
                data-field-height-res-320-value="72"
                data-field-top-res-480-value="75"
                data-field-height-res-480-value="36"
                data-field-height-res-640-value="42"
                data-field-top-res-960-value="83"
                data-field-height-res-960-value="42"
              >
                <div class="tn-atom">Questions We Get Asked</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec3070277801"
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
                  :class="{ t668__opened: expanded['accordion1_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion1_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion1_3070277801']"
                    @click="toggleQuestion('accordion1_3070277801')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Do I have to buy remediation afterwards?</span
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
                  id="accordion1_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion1_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      No. The audit is a standalone deliverable and it is yours. Some clients run
                      it, fix what they can in-house, and come back a year later. Some never come
                      back. That is a legitimate outcome and we price the audit accordingly.
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
                  :class="{ t668__opened: expanded['accordion2_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion2_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion2_3070277801']"
                    @click="toggleQuestion('accordion2_3070277801')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >How much does it cost?</span
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
                  id="accordion2_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion2_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      It depends on how many markets, languages, entities and beneficiaries are in
                      scope. A single-market brand and a multi-geo holding are not the same job. We
                      quote after a 30-minute scoping call, and the quote is fixed.
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
                  :class="{ t668__opened: expanded['accordion3_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion3_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion3_3070277801']"
                    @click="toggleQuestion('accordion3_3070277801')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >What makes this different from a monitoring dashboard?</span
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
                  id="accordion3_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion3_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      A dashboard tells you what is happening. An audit tells you what it means,
                      what it is costing you, and what to do about it. Every finding in our report
                      has been read, classified and interpreted by an analyst before it reaches you.
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
                  :class="{ t668__opened: expanded['accordion4_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion4_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion4_3070277801']"
                    @click="toggleQuestion('accordion4_3070277801')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Should we audit the company, the executives, or both?</span
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
                  id="accordion4_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion4_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      For regulated or high-risk sectors we recommend both. Personal digital
                      profiles are what banks, KYC and AML processes and diligence teams actually
                      screen, and they routinely carry more risk than the corporate brand does. The
                      two scopes are quoted as one project.
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
                  :class="{ t668__opened: expanded['accordion5_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion5_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion5_3070277801']"
                    @click="toggleQuestion('accordion5_3070277801')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >Can you audit us in markets where you have no presence?</span
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
                  id="accordion5_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion5_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Yes. The audit runs per market and per language, including regional platforms
                      and local review sites. Tell us the geographies at the scoping call and they
                      go into the scope.
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
                  :class="{ t668__opened: expanded['accordion6_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion6_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion6_3070277801']"
                    @click="toggleQuestion('accordion6_3070277801')"
                  >
                    <span class="t668__title t-name t-name_xl" style="color: #464646"
                      >What if you find nothing?</span
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
                  id="accordion6_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion6_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Then we say so, we hand you the baseline, and we do not pitch you a programme
                      you do not need. A clean audit is a useful document. It is exactly what a bank
                      or an acquirer wants to see.
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
                  :class="{ t668__opened: expanded['accordion7_3070277801'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion7_3070277801"
                    style="padding-left: 0px; padding-right: 0px"
                    :aria-expanded="expanded['accordion7_3070277801']"
                    @click="toggleQuestion('accordion7_3070277801')"
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
                  id="accordion7_3070277801"
                  style="padding-left: 0px; padding-right: 0px"
                  v-show="expanded['accordion7_3070277801']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="color: #464646">
                      Yes. Work runs on our own servers, every team member is under NDA, and the
                      report is delivered to you alone. We never publish an identifiable client case
                      without written consent.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec3087650901" class="r t-rec" style="">
      <div
        class="t-cover"
        id="recorddiv3087650901"
        bgimgfield="img"
        style="height: 80vh; background-image: url(&quot;/images/service-37a0fe3475.png&quot;)"
      >
        <div
          class="t-cover__carrier"
          id="coverCarry3087650901"
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
        <div class="t716">
          <div class="t-container">
            <div class="t-width t-width_100 t716__mainblock t-align_left">
              <div
                class="t-cover__wrapper t-valign_middle"
                style="height: 80vh; position: relative; z-index: 1"
              >
                <div class="t716__mainwrapper">
                  <div class="t716__textwrapper">
                    <div class="t716__title t-title t-title_lg">Find Out Where You Stand</div>
                    <div class="t716__descr t-descr t-descr_xs">
                      Start with a 30-minute call. We will help you to understand what the audit
                      would cover, and whether you need one at all.<br /><br /><span
                        style="font-size: 16px"
                        >We will reply by email or message you on WhatsApp, Telegram, whichever you
                        prefer.
                      </span>
                    </div>
                  </div>
                  <div class="">
                    <form
                      id="form3087650901"
                      name="form3087650901"
                      role="form"
                      class="t-form js-form-proccess t-form_inputs-total_3"
                      @submit.prevent="submitPreview('form-0')"
                    >
                      <div class="t-form__inputsbox t-form__inputsbox_horizontal">
                        <div class="t-input-group t-input-group_nm">
                          <div class="t-input-block" style="border-radius: 100px">
                            <input
                              type="text"
                              autocomplete="name"
                              name="Name"
                              id="input_9530274166010"
                              class="t-input js-tilda-rule"
                              value=""
                              placeholder="Name"
                              aria-describedby="error_9530274166010"
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
                            id="error_9530274166010"
                          ></div>
                        </div>
                        <div class="t-input-group t-input-group_em">
                          <div class="t-input-block" style="border-radius: 100px">
                            <input
                              type="email"
                              autocomplete="email"
                              name="Email"
                              id="input_9530274166011"
                              class="t-input js-tilda-rule"
                              value=""
                              placeholder="Your Email"
                              aria-describedby="error_9530274166011"
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
                            id="error_9530274166011"
                          ></div>
                        </div>
                        <div class="t-input-group t-input-group_ph">
                          <div class="t-input-block" style="border-radius: 100px">
                            <input
                              type="tel"
                              autocomplete="tel"
                              name="Phone"
                              id="input_1786976246312"
                              class="t-input js-phonemask-input js-tilda-rule"
                              value=""
                              placeholder="+1(000)000-0000"
                              aria-describedby="error_1786976246312"
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
                            id="error_1786976246312"
                          ></div>
                        </div>
                        <div class="t-form__submit">
                          <button
                            class="t-submit t-btnflex t-btnflex_type_submit t-btnflex_md"
                            type="submit"
                          >
                            <span class="t-btnflex__text">Request the Audit</span>
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
  </SituationLayout>
</template>
