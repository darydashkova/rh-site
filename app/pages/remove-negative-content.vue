<script setup lang="ts">
import metadata from "~/data/situations/remove-negative-content.json";
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
    accordion1_2445175353: true,
    accordion2_2445175353: false,
    accordion3_2445175353: false,
    accordion4_2445175353: false,
    accordion5_2445175353: false,
    accordion6_2445175353: false,
  },
  0,
);
const moduleLists = [];
useSeoMeta({ title: metadata.title, description: metadata.description });
</script>
<template>
  <SituationLayout slug="remove-negative-content">
    <section id="rec2445175133" class="r t-rec t-rec_pt_0" style="padding-top: 0px" data-dark="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="915"
          data-artboard-height-res-320="998"
          data-artboard-height-res-480="927"
          data-artboard-height-res-640="1018"
          data-artboard-height-res-960="952"
        >
          <div
            class="t396__carrier t-bgimg"
            style="background-image: url(&quot;/images/situation-50806e1b240c78.svg&quot;)"
          ></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24451751331780652978236000008 t396__group-flex"
            data-group-id="1780652978236000008"
            data-group-top-value="200"
            data-group-heightmode="hug"
            data-group-height-value="595"
            data-group-top-res-320-value="100"
            data-group-height-res-320-value="838"
            data-group-top-res-480-value="100"
            data-group-height-res-480-value="767"
            data-group-top-res-640-value="200"
            data-group-height-res-640-value="698"
            data-group-top-res-960-value="200"
            data-group-height-res-960-value="632"
          >
            <div class="tn-molecule" id="molecule-1780652978236000008">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24451751331775810060720000004 t396__group-flex"
                data-group-id="1775810060720000004"
                data-group-top-value="200"
                data-group-heightmode="hug"
                data-group-height-value="499"
                data-group-top-res-320-value="100"
                data-group-height-res-320-value="718"
                data-group-top-res-480-value="100"
                data-group-height-res-480-value="636"
                data-group-top-res-640-value="200"
                data-group-height-res-640-value="610"
                data-group-top-res-960-value="200"
                data-group-height-res-960-value="544"
              >
                <div class="tn-molecule" id="molecule-1775810060720000004">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24451751331783330655112000003 t396__group-flex"
                    data-group-id="1783330655112000003"
                    data-group-top-value="200"
                    data-group-heightmode="hug"
                    data-group-height-value="499"
                    data-group-height-res-320-value="718"
                    data-group-top-res-480-value="100"
                    data-group-height-res-480-value="636"
                    data-group-height-res-640-value="610"
                    data-group-height-res-960-value="544"
                  >
                    <div class="tn-molecule" id="molecule-1783330655112000003">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24451751331775026241529"
                        data-elem-id="1775026241529"
                        data-elem-type="text"
                        data-field-top-value="200"
                        data-field-height-value="22"
                        data-field-top-res-320-value="100"
                        data-field-height-res-320-value="22"
                        data-field-top-res-480-value="100"
                        data-field-height-res-480-value="22"
                        data-field-top-res-640-value="200"
                        data-field-height-res-640-value="22"
                        data-field-top-res-960-value="200"
                        data-field-height-res-960-value="22"
                      >
                        <div class="tn-atom">RH Defence · Remove Negative Search Results</div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24451751331634290236407"
                        data-elem-id="1634290236407"
                        data-elem-type="text"
                        data-field-top-value="243"
                        data-field-height-value="174"
                        data-field-top-res-320-value="144"
                        data-field-height-res-320-value="216"
                        data-field-top-res-480-value="143"
                        data-field-height-res-480-value="215"
                        data-field-top-res-640-value="243"
                        data-field-height-res-640-value="129"
                        data-field-top-res-960-value="243"
                        data-field-height-res-960-value="129"
                      >
                        <h1 class="tn-atom">
                          Remove Negative Content from the Internet
                          <span style="color: rgb(191, 216, 179)"
                            >or Build Something Stronger in Its Place</span
                          >
                        </h1>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24451751331698156577806"
                        data-elem-id="1698156577806"
                        data-elem-type="text"
                        data-field-top-value="438"
                        data-field-height-value="60"
                        data-field-top-res-320-value="381"
                        data-field-height-res-320-value="108"
                        data-field-top-res-480-value="379"
                        data-field-height-res-480-value="56"
                        data-field-top-res-640-value="393"
                        data-field-height-res-640-value="99"
                        data-field-top-res-960-value="393"
                        data-field-height-res-960-value="90"
                      >
                        <div class="tn-atom">
                          <span style="font-weight: 400"
                            >Deleting content rarely works the way people expect — and neither does
                            trying to remove negative search results on your own. Here's what
                            actually does.</span
                          >
                        </div>
                      </div>
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24451751331783330016261000001"
                        data-elem-id="1783330016261000001"
                        data-elem-type="text"
                        data-field-top-value="519"
                        data-field-height-value="180"
                        data-field-top-res-320-value="480"
                        data-field-height-res-320-value="338"
                        data-field-top-res-480-value="456"
                        data-field-height-res-480-value="280"
                        data-field-top-res-640-value="480"
                        data-field-height-res-640-value="330"
                        data-field-top-res-960-value="480"
                        data-field-height-res-960-value="264"
                      >
                        <div class="tn-atom">
                          You found something online that shouldn’t be&nbsp;there&nbsp;—
                          a&nbsp;damaging article, a&nbsp;misleading review, an&nbsp;old story that
                          no&nbsp;longer reflects reality. Your first instinct is to remove negative
                          internet content and be done with it. That instinct makes sense. But the
                          path from "I need this gone" to&nbsp;an&nbsp;actual solution
                          is&nbsp;rarely a&nbsp;straight line. We&nbsp;work with this every day, and
                          the right question isn’t just "can this be&nbsp;deleted?" — it’s "what
                          needs to&nbsp;happen so&nbsp;this stops causing damage?"
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24451751331780663086619000007 t396__group-flex"
                data-group-id="1780663086619000007"
                data-group-top-value="739"
                data-group-heightmode="hug"
                data-group-height-value="56"
                data-group-top-res-320-value="858"
                data-group-height-res-320-value="80"
                data-group-top-res-480-value="776"
                data-group-height-res-480-value="91"
                data-group-top-res-640-value="850"
                data-group-height-res-640-value="48"
                data-group-top-res-960-value="784"
                data-group-height-res-960-value="48"
              >
                <div class="tn-molecule" id="molecule-1780663086619000007">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24451751331780663086619000009"
                    data-elem-id="1780663086619000009"
                    data-elem-type="button"
                    data-field-top-value="739"
                    data-field-height-value="56"
                    data-field-top-res-320-value="858"
                    data-field-height-res-320-value="45"
                    data-field-top-res-480-value="776"
                    data-field-height-res-480-value="48"
                    data-field-top-res-640-value="850"
                    data-field-top-res-960-value="784"
                    data-field-height-res-960-value="48"
                  >
                    <a class="tn-atom" href="#consultation" @click.prevent="openConsultation()">
                      <div class="tn-atom__button-content">
                        <span class="tn-atom__button-text">Discuss My Case</span>
                      </div>
                      <span class="tn-atom__button-border"></span>
                    </a>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24451751331780663086619000008"
                    data-elem-id="1780663086619000008"
                    data-elem-type="text"
                    data-field-top-value="748"
                    data-field-height-value="38"
                    data-field-top-res-320-value="919"
                    data-field-height-res-320-value="19"
                    data-field-top-res-480-value="848"
                    data-field-height-res-480-value="19"
                    data-field-top-res-640-value="865"
                    data-field-top-res-960-value="799"
                    data-field-height-res-960-value="22"
                  >
                    <div class="tn-atom">We&nbsp;respond within 1&nbsp;business day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2445175123"
      class="r t-rec t-rec_pt_15 t-rec_pb_0"
      style="padding-top: 15px; padding-bottom: 0px; background-color: #262626"
      data-dark=""
    >
      <div class="t758">
        <div class="t-container">
          <div class="t758__col t-col t-col_12">
            <div class="t758__wrapper t-align_left">
              <ul class="t758__list">
                <li class="t758__list_item">
                  <div class="t758__link-item__wrapper">
                    <SiteLink class="t-menu__link-item" href="/"> Main page </SiteLink>
                  </div>
                  <span class="t758__breadcrumb-divider">/</span>
                </li>
                <li class="t758__list_item">
                  <div class="t758__link-item__wrapper">
                    <SiteLink class="t-menu__link-item" href="/solutions">Solutions of RH</SiteLink>
                  </div>
                  <span class="t758__breadcrumb-divider">/</span>
                </li>
                <li class="t758__list_item">
                  <div class="t758__link-item__wrapper">
                    <div class="t-menu__link-item t758__link-item_active">
                      Remove Negative Content
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2445715923" class="r t-rec" style="background-color: #262626" data-dark="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="311"
          data-artboard-height-res-320="290"
          data-artboard-height-res-480="213"
          data-artboard-height-res-640="274"
          data-artboard-height-res-960="299"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24457159231765779786680000002 t396__group-flex"
            data-group-id="1765779786680000002"
            data-group-top-value="90"
            data-group-heightmode="hug"
            data-group-height-value="161"
            data-group-top-res-320-value="60"
            data-group-height-res-320-value="200"
            data-group-top-res-480-value="60"
            data-group-height-res-480-value="123"
            data-group-top-res-640-value="80"
            data-group-height-res-640-value="149"
            data-group-top-res-960-value="90"
            data-group-height-res-960-value="149"
          >
            <div class="tn-molecule" id="molecule-1765779786680000002">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457159231765779690151000002 t396__group-flex"
                data-group-id="1765779690151000002"
                data-group-top-value="90"
                data-group-heightmode="hug"
                data-group-height-value="161"
                data-group-top-res-320-value="60"
                data-group-height-res-320-value="200"
                data-group-top-res-480-value="60"
                data-group-height-res-480-value="123"
                data-group-top-res-640-value="80"
                data-group-height-res-640-value="149"
                data-group-top-res-960-value="90"
                data-group-height-res-960-value="149"
              >
                <div class="tn-molecule" id="molecule-1765779690151000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457159231766738835038000003"
                    data-elem-id="1766738835038000003"
                    data-elem-type="text"
                    data-field-top-value="90"
                    data-field-height-value="22"
                    data-field-top-res-320-value="60"
                    data-field-height-res-320-value="23"
                    data-field-top-res-480-value="60"
                    data-field-height-res-480-value="22"
                    data-field-top-res-640-value="80"
                    data-field-height-res-640-value="23"
                    data-field-top-res-960-value="90"
                    data-field-height-res-960-value="23"
                  >
                    <div class="tn-atom">The Problem</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457159231764597036881"
                    data-elem-id="1764597036881"
                    data-elem-type="text"
                    data-field-top-value="137"
                    data-field-height-value="114"
                    data-field-top-res-320-value="108"
                    data-field-height-res-320-value="70"
                    data-field-top-res-480-value="107"
                    data-field-height-res-480-value="70"
                    data-field-top-res-640-value="127"
                    data-field-height-res-640-value="144"
                    data-field-top-res-960-value="137"
                    data-field-height-res-960-value="144"
                  >
                    <h2 class="tn-atom">
                      Why removal is&nbsp;harder&nbsp;and less effective&nbsp; than it&nbsp;looks
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2445717693" class="r t-rec" style="background-color: #262626" data-dark="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="452"
          data-artboard-height-res-320="1344"
          data-artboard-height-res-480="872"
          data-artboard-height-res-640="823"
          data-artboard-height-res-960="499"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24457176931765731144407000024 t396__group-flex"
            data-group-id="1765731144407000024"
            data-group-top-value="30"
            data-group-heightmode="hug"
            data-group-height-value="332"
            data-group-top-res-320-value="30"
            data-group-height-res-320-value="1254"
            data-group-top-res-480-value="30"
            data-group-height-res-480-value="782"
            data-group-top-res-640-value="30"
            data-group-height-res-640-value="713"
            data-group-top-res-960-value="30"
            data-group-height-res-960-value="379"
          >
            <div class="tn-molecule" id="molecule-1765731144407000024">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457176931765731057765000011 t396__group-flex"
                data-group-id="1765731057765000011"
                data-group-top-value="30"
                data-group-heightmode="fill"
                data-group-height-value="332"
                data-group-top-res-320-value="30"
                data-group-height-res-320-value="1254"
                data-group-top-res-480-value="30"
                data-group-height-res-480-value="782"
                data-group-top-res-640-value="30"
                data-group-height-res-640-value="713"
                data-group-top-res-960-value="30"
                data-group-height-res-960-value="379"
              >
                <div class="tn-molecule" id="molecule-1765731057765000011">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457176931765731018973000003 t396__group-flex"
                    data-group-id="1765731018973000003"
                    data-group-top-value="30"
                    data-group-heightmode="fill"
                    data-group-height-value="332"
                    data-group-top-res-320-value="30"
                    data-group-height-res-320-value="370"
                    data-group-top-res-480-value="30"
                    data-group-height-res-480-value="214"
                    data-group-top-res-640-value="30"
                    data-group-height-res-640-value="191"
                    data-group-top-res-960-value="30"
                    data-group-height-res-960-value="379"
                  >
                    <div class="tn-molecule" id="molecule-1765731018973000003">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765730235186"
                        data-elem-id="1765730235186"
                        data-elem-type="shape"
                        data-field-top-value="30"
                        data-field-height-value="332"
                        data-field-top-res-320-value="393"
                        data-field-height-res-320-value="370"
                        data-field-top-res-480-value="434"
                        data-field-height-res-480-value="214"
                        data-field-top-res-640-value="0"
                        data-field-height-res-640-value="191"
                        data-field-top-res-960-value="30"
                        data-field-height-res-960-value="379"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457176931765730980188000002 t396__group-flex"
                        data-group-id="1765730980188000002"
                        data-group-top-value="30"
                        data-group-heightmode="fill"
                        data-group-height-value="332"
                        data-group-top-res-320-value="30"
                        data-group-height-res-320-value="370"
                        data-group-top-res-480-value="30"
                        data-group-height-res-480-value="214"
                        data-group-top-res-640-value="30"
                        data-group-height-res-640-value="191"
                        data-group-top-res-960-value="30"
                        data-group-height-res-960-value="379"
                      >
                        <div class="tn-molecule" id="molecule-1765730980188000002">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__24457176931769065669348000001 t396__group-flex"
                            data-group-id="1769065669348000001"
                            data-group-top-value="30"
                            data-group-heightmode="hug"
                            data-group-height-value="147"
                            data-group-top-res-320-value="30"
                            data-group-height-res-320-value="280"
                            data-group-top-res-480-value="30"
                            data-group-height-res-480-value="124"
                            data-group-top-res-640-value="30"
                            data-group-height-res-640-value="101"
                            data-group-top-res-960-value="30"
                            data-group-height-res-960-value="194"
                          >
                            <div class="tn-molecule" id="molecule-1769065669348000001">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765730103839000004"
                                data-elem-id="1765730103839000004"
                                data-elem-type="text"
                                data-field-top-value="30"
                                data-field-height-value="24"
                                data-field-top-res-320-value="30"
                                data-field-height-res-320-value="27"
                                data-field-top-res-480-value="30"
                                data-field-height-res-480-value="27"
                                data-field-top-res-640-value="30"
                                data-field-height-res-640-value="27"
                                data-field-top-res-960-value="30"
                                data-field-height-res-960-value="27"
                              >
                                <h3 class="tn-atom">Platforms set the rules, not you</h3>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765730103839000003"
                                data-elem-id="1765730103839000003"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="23"
                                data-field-top-res-320-value="86"
                                data-field-height-res-320-value="46"
                                data-field-top-res-480-value="62"
                                data-field-height-res-480-value="46"
                                data-field-top-res-640-value="62"
                                data-field-height-res-640-value="23"
                                data-field-top-res-960-value="86"
                                data-field-height-res-960-value="92"
                              >
                                <div class="tn-atom">
                                  Even when content clearly violates a&nbsp;platform’s own policies,
                                  the review process takes months. Appeals often go&nbsp;nowhere.
                                  Platforms aren’t legally obligated to&nbsp;act on&nbsp;your
                                  timeline.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765730154879000005"
                            data-elem-id="1765730154879000005"
                            data-elem-type="text"
                            data-field-top-value="297"
                            data-field-height-value="65"
                            data-field-top-res-320-value="335"
                            data-field-height-res-320-value="65"
                            data-field-top-res-480-value="179"
                            data-field-height-res-480-value="65"
                            data-field-top-res-640-value="156"
                            data-field-height-res-640-value="65"
                            data-field-top-res-960-value="344"
                            data-field-height-res-960-value="130"
                          >
                            <div class="tn-atom">01</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457176931765731052286000005 t396__group-flex"
                    data-group-id="1765731052286000005"
                    data-group-top-value="30"
                    data-group-heightmode="fill"
                    data-group-height-value="332"
                    data-group-top-res-320-value="470"
                    data-group-height-res-320-value="370"
                    data-group-top-res-480-value="314"
                    data-group-height-res-480-value="214"
                    data-group-top-res-640-value="291"
                    data-group-height-res-640-value="191"
                    data-group-top-res-960-value="30"
                    data-group-height-res-960-value="379"
                  >
                    <div class="tn-molecule" id="molecule-1765731052286000005">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731052286000010"
                        data-elem-id="1765731052286000010"
                        data-elem-type="shape"
                        data-field-top-value="30"
                        data-field-height-value="332"
                        data-field-top-res-320-value="754"
                        data-field-height-res-320-value="203"
                        data-field-top-res-480-value="772"
                        data-field-top-res-640-value="670"
                        data-field-height-res-640-value="180"
                        data-field-top-res-960-value="30"
                        data-field-height-res-960-value="379"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457176931765731052286000006 t396__group-flex"
                        data-group-id="1765731052286000006"
                        data-group-top-value="30"
                        data-group-heightmode="fill"
                        data-group-height-value="332"
                        data-group-top-res-320-value="470"
                        data-group-height-res-320-value="370"
                        data-group-top-res-480-value="314"
                        data-group-height-res-480-value="214"
                        data-group-top-res-640-value="291"
                        data-group-height-res-640-value="191"
                        data-group-top-res-960-value="30"
                        data-group-height-res-960-value="379"
                      >
                        <div class="tn-molecule" id="molecule-1765731052286000006">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__24457176931769065675652000002 t396__group-flex"
                            data-group-id="1769065675652000002"
                            data-group-top-value="30"
                            data-group-heightmode="hug"
                            data-group-height-value="147"
                            data-group-top-res-320-value="470"
                            data-group-height-res-320-value="280"
                            data-group-top-res-480-value="314"
                            data-group-height-res-480-value="124"
                            data-group-top-res-640-value="291"
                            data-group-height-res-640-value="101"
                            data-group-top-res-960-value="30"
                            data-group-height-res-960-value="194"
                          >
                            <div class="tn-molecule" id="molecule-1769065675652000002">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731052286000009"
                                data-elem-id="1765731052286000009"
                                data-elem-type="text"
                                data-field-top-value="30"
                                data-field-height-value="24"
                                data-field-top-res-320-value="470"
                                data-field-height-res-320-value="27"
                                data-field-top-res-480-value="314"
                                data-field-height-res-480-value="27"
                                data-field-top-res-640-value="291"
                                data-field-height-res-640-value="27"
                                data-field-top-res-960-value="30"
                                data-field-height-res-960-value="27"
                              >
                                <h3 class="tn-atom">Google indexes — it doesn't delete</h3>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731052286000008"
                                data-elem-id="1765731052286000008"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="23"
                                data-field-top-res-320-value="526"
                                data-field-height-res-320-value="46"
                                data-field-top-res-480-value="346"
                                data-field-height-res-480-value="46"
                                data-field-top-res-640-value="323"
                                data-field-height-res-640-value="23"
                                data-field-top-res-960-value="86"
                                data-field-height-res-960-value="69"
                              >
                                <div class="tn-atom">
                                  Removing a page at the source doesn't erase it from search — that
                                  only happens through Google de-indexing, and even then, cached
                                  versions, archive sites, and content aggregators can continue to
                                  surface the same information, often indefinitely.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731052286000007"
                            data-elem-id="1765731052286000007"
                            data-elem-type="text"
                            data-field-top-value="297"
                            data-field-height-value="65"
                            data-field-top-res-320-value="775"
                            data-field-height-res-320-value="65"
                            data-field-top-res-480-value="463"
                            data-field-height-res-480-value="65"
                            data-field-top-res-640-value="417"
                            data-field-height-res-640-value="65"
                            data-field-top-res-960-value="344"
                            data-field-height-res-960-value="65"
                          >
                            <div class="tn-atom">02</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457176931765731079654000012 t396__group-flex"
                    data-group-id="1765731079654000012"
                    data-group-top-value="30"
                    data-group-heightmode="fill"
                    data-group-height-value="332"
                    data-group-top-res-320-value="910"
                    data-group-height-res-320-value="374"
                    data-group-top-res-480-value="598"
                    data-group-height-res-480-value="214"
                    data-group-top-res-640-value="552"
                    data-group-height-res-640-value="191"
                    data-group-top-res-960-value="30"
                    data-group-height-res-960-value="379"
                  >
                    <div class="tn-molecule" id="molecule-1765731079654000012">
                      <div
                        class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731079654000017"
                        data-elem-id="1765731079654000017"
                        data-elem-type="shape"
                        data-field-top-value="30"
                        data-field-height-value="332"
                        data-field-top-res-320-value="1049"
                        data-field-height-res-320-value="203"
                        data-field-top-res-480-value="1044"
                        data-field-height-res-480-value="214"
                        data-field-top-res-640-value="852"
                        data-field-height-res-640-value="191"
                        data-field-top-res-960-value="30"
                        data-field-height-res-960-value="379"
                      >
                        <div class="tn-atom"></div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457176931765731079654000013 t396__group-flex"
                        data-group-id="1765731079654000013"
                        data-group-top-value="30"
                        data-group-heightmode="fill"
                        data-group-height-value="332"
                        data-group-top-res-320-value="910"
                        data-group-height-res-320-value="374"
                        data-group-top-res-480-value="598"
                        data-group-height-res-480-value="214"
                        data-group-top-res-640-value="552"
                        data-group-height-res-640-value="191"
                        data-group-top-res-960-value="30"
                        data-group-height-res-960-value="379"
                      >
                        <div class="tn-molecule" id="molecule-1765731079654000013">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__24457176931769065682610000003 t396__group-flex"
                            data-group-id="1769065682610000003"
                            data-group-top-value="30"
                            data-group-heightmode="hug"
                            data-group-height-value="147"
                            data-group-top-res-320-value="910"
                            data-group-height-res-320-value="284"
                            data-group-top-res-480-value="598"
                            data-group-height-res-480-value="124"
                            data-group-top-res-640-value="552"
                            data-group-height-res-640-value="101"
                            data-group-top-res-960-value="30"
                            data-group-height-res-960-value="170"
                          >
                            <div class="tn-molecule" id="molecule-1769065682610000003">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731079654000016"
                                data-elem-id="1765731079654000016"
                                data-elem-type="text"
                                data-field-top-value="30"
                                data-field-height-value="24"
                                data-field-top-res-320-value="910"
                                data-field-height-res-320-value="27"
                                data-field-top-res-480-value="598"
                                data-field-height-res-480-value="27"
                                data-field-top-res-640-value="552"
                                data-field-height-res-640-value="27"
                                data-field-top-res-960-value="30"
                                data-field-height-res-960-value="27"
                              >
                                <h3 class="tn-atom">A gap gets filled</h3>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731079654000015"
                                data-elem-id="1765731079654000015"
                                data-elem-type="text"
                                data-field-top-value="62"
                                data-field-height-value="23"
                                data-field-top-res-320-value="942"
                                data-field-height-res-320-value="46"
                                data-field-top-res-480-value="630"
                                data-field-height-res-480-value="46"
                                data-field-top-res-640-value="584"
                                data-field-height-res-640-value="23"
                                data-field-top-res-960-value="62"
                                data-field-height-res-960-value="46"
                              >
                                <div class="tn-atom">
                                  When negative content disappears without anything replacing it,
                                  search engines fill the space&nbsp;— often with other unfavorable
                                  results. Deletion creates a&nbsp;vacuum. Vacuums get filled.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457176931765731079654000014"
                            data-elem-id="1765731079654000014"
                            data-elem-type="text"
                            data-field-top-value="297"
                            data-field-height-value="65"
                            data-field-top-res-320-value="1219"
                            data-field-height-res-320-value="65"
                            data-field-top-res-480-value="747"
                            data-field-height-res-480-value="65"
                            data-field-top-res-640-value="678"
                            data-field-height-res-640-value="65"
                            data-field-top-res-960-value="344"
                            data-field-height-res-960-value="65"
                          >
                            <div class="tn-atom">03</div>
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
    <section id="rec2445721273" class="r t-rec" style="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="454"
          data-artboard-height-res-320="1264"
          data-artboard-height-res-480="1313"
          data-artboard-height-res-640="674"
          data-artboard-height-res-960="662"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24457212731766740441437000003 t396__group-flex"
            data-group-id="1766740441437000003"
            data-group-top-value="90"
            data-group-heightmode="hug"
            data-group-height-value="274"
            data-group-top-res-320-value="60"
            data-group-height-res-320-value="235"
            data-group-top-res-480-value="60"
            data-group-height-res-480-value="230"
            data-group-top-res-640-value="60"
            data-group-height-res-640-value="361"
            data-group-top-res-960-value="90"
            data-group-height-res-960-value="291"
          >
            <div class="tn-molecule" id="molecule-1766740441437000003">
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783338193693000006"
                data-elem-id="1783338193693000006"
                data-elem-type="text"
                data-field-top-value="90"
                data-field-height-value="22"
                data-field-top-res-320-value="60"
                data-field-height-res-320-value="23"
                data-field-top-res-480-value="60"
                data-field-height-res-480-value="22"
                data-field-top-res-640-value="90"
                data-field-height-res-640-value="23"
                data-field-top-res-960-value="100"
                data-field-height-res-960-value="23"
              >
                <div class="tn-atom">What's Possible</div>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731766740344806"
                data-elem-id="1766740344806"
                data-elem-type="text"
                data-field-top-value="136"
                data-field-height-value="57"
                data-field-top-res-320-value="99"
                data-field-height-res-320-value="114"
                data-field-top-res-480-value="106"
                data-field-height-res-480-value="82"
                data-field-top-res-640-value="60"
                data-field-height-res-640-value="86"
                data-field-top-res-960-value="90"
                data-field-height-res-960-value="57"
              >
                <h2 class="tn-atom">
                  The Honest Answer on What Content Removal Can Actually Achieve
                </h2>
              </div>
              <div
                class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731766740173648"
                data-elem-id="1766740173648"
                data-elem-type="text"
                data-field-top-value="274"
                data-field-height-value="30"
                data-field-top-res-320-value="191"
                data-field-height-res-320-value="378"
                data-field-top-res-480-value="206"
                data-field-height-res-480-value="224"
                data-field-top-res-640-value="141"
                data-field-height-res-640-value="168"
                data-field-top-res-960-value="185"
                data-field-height-res-960-value="112"
              >
                <div class="tn-atom">
                  Negative content removal has real paths and real limits: some removal paths are
                  legitimate and effective — when applied to the right situation.
                </div>
              </div>
            </div>
          </div>
          <div
            class="t396__group tn-group tn-group__24457212731783336617585000001 t396__group-flex"
            data-group-id="1783336617585000001"
            data-group-top-value="90"
            data-group-heightmode="hug"
            data-group-height-value="479"
            data-group-top-res-320-value="316"
            data-group-height-res-320-value="889"
            data-group-top-res-480-value="331"
            data-group-height-res-480-value="923"
            data-group-top-res-640-value="161"
            data-group-height-res-640-value="1429"
            data-group-top-res-960-value="181"
            data-group-height-res-960-value="1162"
          >
            <div class="tn-molecule" id="molecule-1783336617585000001">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000022 t396__group-flex"
                data-group-id="1783336617586000022"
                data-group-top-value="90"
                data-group-heightmode="hug"
                data-group-height-value="102"
                data-group-top-res-320-value="316"
                data-group-height-res-320-value="215"
                data-group-top-res-480-value="331"
                data-group-height-res-480-value="209"
                data-group-top-res-640-value="161"
                data-group-height-res-640-value="534"
                data-group-top-res-960-value="181"
                data-group-height-res-960-value="380"
              >
                <div class="tn-molecule" id="molecule-1783336617586000022">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000024 t396__group-flex"
                    data-group-id="1783336617586000024"
                    data-group-top-value="90"
                    data-group-heightmode="hug"
                    data-group-height-value="85"
                    data-group-top-res-320-value="316"
                    data-group-height-res-320-value="190"
                    data-group-top-res-480-value="331"
                    data-group-height-res-480-value="168"
                    data-group-top-res-640-value="202"
                    data-group-height-res-640-value="452"
                    data-group-top-res-960-value="222"
                    data-group-height-res-960-value="298"
                  >
                    <div class="tn-molecule" id="molecule-1783336617586000024">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000032 t396__group-flex"
                        data-group-id="1783336617586000032"
                        data-group-top-value="90"
                        data-group-heightmode="hug"
                        data-group-height-value="85"
                        data-group-top-res-320-value="316"
                        data-group-height-res-320-value="59"
                        data-group-top-res-480-value="331"
                        data-group-height-res-480-value="59"
                        data-group-top-res-640-value="202"
                        data-group-height-res-640-value="124"
                        data-group-top-res-960-value="222"
                        data-group-height-res-960-value="279"
                      >
                        <div class="tn-molecule" id="molecule-1783336617586000032">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000034"
                            data-elem-id="1783336617586000034"
                            data-elem-type="text"
                            data-field-top-value="90"
                            data-field-height-value="22"
                            data-field-top-res-320-value="316"
                            data-field-height-res-320-value="19"
                            data-field-top-res-480-value="331"
                            data-field-height-res-480-value="19"
                            data-field-top-res-640-value="202"
                            data-field-height-res-640-value="19"
                            data-field-top-res-960-value="222"
                            data-field-height-res-960-value="19"
                          >
                            <div class="tn-atom">Method</div>
                          </div>
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000033"
                            data-elem-id="1783336617586000033"
                            data-elem-type="text"
                            data-field-top-value="128"
                            data-field-height-value="23"
                            data-field-top-res-320-value="351"
                            data-field-height-res-320-value="116"
                            data-field-top-res-480-value="366"
                            data-field-height-res-480-value="93"
                            data-field-top-res-640-value="233"
                            data-field-height-res-640-value="93"
                            data-field-top-res-960-value="253"
                            data-field-height-res-960-value="54"
                          >
                            <div class="tn-atom">
                              <strong>GDPR Right to&nbsp;Be&nbsp;Forgotten</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000025 t396__group-flex"
                        data-group-id="1783336617586000025"
                        data-group-top-value="90"
                        data-group-heightmode="hug"
                        data-group-height-value="82"
                        data-group-top-res-320-value="405"
                        data-group-height-res-320-value="101"
                        data-group-top-res-480-value="420"
                        data-group-height-res-480-value="79"
                        data-group-top-res-640-value="356"
                        data-group-height-res-640-value="298"
                        data-group-top-res-960-value="222"
                        data-group-height-res-960-value="298"
                      >
                        <div class="tn-molecule" id="molecule-1783336617586000025">
                          <div
                            class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000029 t396__group-flex"
                            data-group-id="1783336617586000029"
                            data-group-top-value="90"
                            data-group-heightmode="hug"
                            data-group-height-value="82"
                            data-group-top-res-320-value="405"
                            data-group-height-res-320-value="101"
                            data-group-top-res-480-value="420"
                            data-group-height-res-480-value="79"
                            data-group-top-res-640-value="356"
                            data-group-height-res-640-value="298"
                            data-group-top-res-960-value="222"
                            data-group-height-res-960-value="298"
                          >
                            <div class="tn-molecule" id="molecule-1783336617586000029">
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000031"
                                data-elem-id="1783336617586000031"
                                data-elem-type="text"
                                data-field-top-value="90"
                                data-field-height-value="22"
                                data-field-top-res-320-value="405"
                                data-field-top-res-480-value="420"
                                data-field-height-res-480-value="19"
                                data-field-top-res-640-value="356"
                                data-field-height-res-640-value="19"
                                data-field-top-res-960-value="222"
                                data-field-height-res-960-value="19"
                              >
                                <div class="tn-atom">When it applies</div>
                              </div>
                              <div
                                class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000030"
                                data-elem-id="1783336617586000030"
                                data-elem-type="text"
                                data-field-top-value="128"
                                data-field-height-value="22"
                                data-field-top-res-320-value="440"
                                data-field-top-res-480-value="455"
                                data-field-height-res-480-value="69"
                                data-field-top-res-640-value="390"
                                data-field-height-res-640-value="92"
                                data-field-top-res-960-value="256"
                                data-field-height-res-960-value="92"
                              >
                                <div class="tn-atom">
                                  EU&nbsp;residents only, specific personal data types, eligible
                                  platforms&nbsp;— not a&nbsp;universal right
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000023"
                    data-elem-id="1783336617586000023"
                    data-elem-type="shape"
                    data-field-top-value="191"
                    data-field-height-value="1"
                    data-field-top-res-320-value="530"
                    data-field-height-res-320-value="1"
                    data-field-top-res-480-value="539"
                    data-field-height-res-480-value="1"
                    data-field-top-res-640-value="694"
                    data-field-height-res-640-value="1"
                    data-field-top-res-960-value="560"
                    data-field-height-res-960-value="1"
                  >
                    <div class="tn-atom"></div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000012 t396__group-flex"
                data-group-id="1783336617586000012"
                data-group-top-value="208"
                data-group-heightmode="hug"
                data-group-height-value="83"
                data-group-top-res-320-value="555"
                data-group-height-res-320-value="145"
                data-group-top-res-480-value="580"
                data-group-height-res-480-value="139"
                data-group-top-res-640-value="735"
                data-group-height-res-640-value="397"
                data-group-top-res-960-value="601"
                data-group-height-res-960-value="351"
              >
                <div class="tn-molecule" id="molecule-1783336617586000012">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000014 t396__group-flex"
                    data-group-id="1783336617586000014"
                    data-group-top-value="208"
                    data-group-heightmode="hug"
                    data-group-height-value="66"
                    data-group-top-res-320-value="555"
                    data-group-height-res-320-value="120"
                    data-group-top-res-480-value="580"
                    data-group-height-res-480-value="98"
                    data-group-top-res-640-value="735"
                    data-group-height-res-640-value="366"
                    data-group-top-res-960-value="601"
                    data-group-height-res-960-value="310"
                  >
                    <div class="tn-molecule" id="molecule-1783336617586000014">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000020 t396__group-flex"
                        data-group-id="1783336617586000020"
                        data-group-top-value="208"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="555"
                        data-group-height-res-320-value="24"
                        data-group-top-res-480-value="580"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="735"
                        data-group-height-res-640-value="116"
                        data-group-top-res-960-value="601"
                        data-group-height-res-960-value="310"
                      >
                        <div class="tn-molecule" id="molecule-1783336617586000020">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000021"
                            data-elem-id="1783336617586000021"
                            data-elem-type="text"
                            data-field-top-value="208"
                            data-field-height-value="23"
                            data-field-top-res-320-value="555"
                            data-field-height-res-320-value="185"
                            data-field-top-res-480-value="580"
                            data-field-height-res-480-value="116"
                            data-field-top-res-640-value="735"
                            data-field-height-res-640-value="116"
                            data-field-top-res-960-value="601"
                            data-field-height-res-960-value="54"
                          >
                            <div class="tn-atom"><strong>DMCA takedown</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617586000018 t396__group-flex"
                        data-group-id="1783336617586000018"
                        data-group-top-value="208"
                        data-group-heightmode="hug"
                        data-group-height-value="66"
                        data-group-top-res-320-value="609"
                        data-group-height-res-320-value="66"
                        data-group-top-res-480-value="634"
                        data-group-height-res-480-value="44"
                        data-group-top-res-640-value="881"
                        data-group-height-res-640-value="220"
                        data-group-top-res-960-value="601"
                        data-group-height-res-960-value="220"
                      >
                        <div class="tn-molecule" id="molecule-1783336617586000018">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000019"
                            data-elem-id="1783336617586000019"
                            data-elem-type="text"
                            data-field-top-value="208"
                            data-field-height-value="22"
                            data-field-top-res-320-value="609"
                            data-field-top-res-480-value="634"
                            data-field-height-res-480-value="69"
                            data-field-top-res-640-value="881"
                            data-field-height-res-640-value="92"
                            data-field-top-res-960-value="601"
                            data-field-height-res-960-value="92"
                          >
                            <div class="tn-atom">
                              Your copyrighted content used without permission&nbsp;— not applicable
                              to&nbsp;opinions or&nbsp;reported facts
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000013"
                    data-elem-id="1783336617586000013"
                    data-elem-type="shape"
                    data-field-top-value="290"
                    data-field-height-value="1"
                    data-field-top-res-320-value="699"
                    data-field-height-res-320-value="1"
                    data-field-top-res-480-value="718"
                    data-field-height-res-480-value="1"
                    data-field-top-res-640-value="1131"
                    data-field-height-res-640-value="1"
                    data-field-top-res-960-value="951"
                    data-field-height-res-960-value="1"
                  >
                    <div class="tn-atom"></div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617585000002 t396__group-flex"
                data-group-id="1783336617585000002"
                data-group-top-value="307"
                data-group-heightmode="hug"
                data-group-height-value="64"
                data-group-top-res-320-value="723"
                data-group-height-res-320-value="145"
                data-group-top-res-480-value="758"
                data-group-height-res-480-value="139"
                data-group-top-res-640-value="1171"
                data-group-height-res-640-value="419"
                data-group-top-res-960-value="992"
                data-group-height-res-960-value="351"
              >
                <div class="tn-molecule" id="molecule-1783336617585000002">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617585000004 t396__group-flex"
                    data-group-id="1783336617585000004"
                    data-group-top-value="307"
                    data-group-heightmode="hug"
                    data-group-height-value="47"
                    data-group-top-res-320-value="723"
                    data-group-height-res-320-value="120"
                    data-group-top-res-480-value="758"
                    data-group-height-res-480-value="98"
                    data-group-top-res-640-value="1171"
                    data-group-height-res-640-value="388"
                    data-group-top-res-960-value="992"
                    data-group-height-res-960-value="310"
                  >
                    <div class="tn-molecule" id="molecule-1783336617585000004">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617585000010 t396__group-flex"
                        data-group-id="1783336617585000010"
                        data-group-top-value="307"
                        data-group-heightmode="hug"
                        data-group-height-value="47"
                        data-group-top-res-320-value="723"
                        data-group-height-res-320-value="24"
                        data-group-top-res-480-value="758"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="1171"
                        data-group-height-res-640-value="116"
                        data-group-top-res-960-value="992"
                        data-group-height-res-960-value="310"
                      >
                        <div class="tn-molecule" id="molecule-1783336617585000010">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617586000011"
                            data-elem-id="1783336617586000011"
                            data-elem-type="text"
                            data-field-top-value="307"
                            data-field-height-value="23"
                            data-field-top-res-320-value="723"
                            data-field-height-res-320-value="162"
                            data-field-top-res-480-value="758"
                            data-field-height-res-480-value="116"
                            data-field-top-res-640-value="1171"
                            data-field-height-res-640-value="116"
                            data-field-top-res-960-value="992"
                            data-field-height-res-960-value="54"
                          >
                            <div class="tn-atom"><strong>Platform policy violation</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783336617585000008 t396__group-flex"
                        data-group-id="1783336617585000008"
                        data-group-top-value="307"
                        data-group-heightmode="hug"
                        data-group-height-value="44"
                        data-group-top-res-320-value="777"
                        data-group-height-res-320-value="66"
                        data-group-top-res-480-value="812"
                        data-group-height-res-480-value="44"
                        data-group-top-res-640-value="1317"
                        data-group-height-res-640-value="242"
                        data-group-top-res-960-value="992"
                        data-group-height-res-960-value="242"
                      >
                        <div class="tn-molecule" id="molecule-1783336617585000008">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617585000009"
                            data-elem-id="1783336617585000009"
                            data-elem-type="text"
                            data-field-top-value="307"
                            data-field-height-value="22"
                            data-field-top-res-320-value="777"
                            data-field-top-res-480-value="812"
                            data-field-height-res-480-value="69"
                            data-field-top-res-640-value="1317"
                            data-field-height-res-640-value="92"
                            data-field-top-res-960-value="992"
                            data-field-height-res-960-value="92"
                          >
                            <div class="tn-atom">
                              Content that provably breaks the platform’s own rules&nbsp;— review
                              is&nbsp;slow and unpredictable
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783336617585000003"
                    data-elem-id="1783336617585000003"
                    data-elem-type="shape"
                    data-field-top-value="370"
                    data-field-height-value="1"
                    data-field-top-res-320-value="867"
                    data-field-height-res-320-value="1"
                    data-field-top-res-480-value="896"
                    data-field-height-res-480-value="1"
                    data-field-top-res-640-value="1589"
                    data-field-height-res-640-value="1"
                    data-field-top-res-960-value="1342"
                    data-field-height-res-960-value="1"
                  >
                    <div class="tn-atom"></div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457212731783337553689000036 t396__group-flex"
                data-group-id="1783337553689000036"
                data-group-top-value="387"
                data-group-heightmode="hug"
                data-group-height-value="83"
                data-group-top-res-320-value="892"
                data-group-height-res-320-value="145"
                data-group-top-res-480-value="937"
                data-group-height-res-480-value="139"
                data-group-top-res-640-value="1181"
                data-group-height-res-640-value="419"
                data-group-top-res-960-value="1002"
                data-group-height-res-960-value="351"
              >
                <div class="tn-molecule" id="molecule-1783337553689000036">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457212731783337553689000038 t396__group-flex"
                    data-group-id="1783337553689000038"
                    data-group-top-value="387"
                    data-group-heightmode="hug"
                    data-group-height-value="66"
                    data-group-top-res-320-value="892"
                    data-group-height-res-320-value="120"
                    data-group-top-res-480-value="937"
                    data-group-height-res-480-value="98"
                    data-group-top-res-640-value="1181"
                    data-group-height-res-640-value="388"
                    data-group-top-res-960-value="1002"
                    data-group-height-res-960-value="310"
                  >
                    <div class="tn-molecule" id="molecule-1783337553689000038">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783337553689000041 t396__group-flex"
                        data-group-id="1783337553689000041"
                        data-group-top-value="387"
                        data-group-heightmode="hug"
                        data-group-height-value="47"
                        data-group-top-res-320-value="892"
                        data-group-height-res-320-value="24"
                        data-group-top-res-480-value="937"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="1181"
                        data-group-height-res-640-value="116"
                        data-group-top-res-960-value="1002"
                        data-group-height-res-960-value="310"
                      >
                        <div class="tn-molecule" id="molecule-1783337553689000041">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783337553689000042"
                            data-elem-id="1783337553689000042"
                            data-elem-type="text"
                            data-field-top-value="387"
                            data-field-height-value="23"
                            data-field-top-res-320-value="892"
                            data-field-height-res-320-value="162"
                            data-field-top-res-480-value="937"
                            data-field-height-res-480-value="116"
                            data-field-top-res-640-value="1181"
                            data-field-height-res-640-value="116"
                            data-field-top-res-960-value="1002"
                            data-field-height-res-960-value="54"
                          >
                            <div class="tn-atom"><strong>Direct source request</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783337553689000039 t396__group-flex"
                        data-group-id="1783337553689000039"
                        data-group-top-value="387"
                        data-group-heightmode="hug"
                        data-group-height-value="66"
                        data-group-top-res-320-value="946"
                        data-group-height-res-320-value="66"
                        data-group-top-res-480-value="991"
                        data-group-height-res-480-value="44"
                        data-group-top-res-640-value="1327"
                        data-group-height-res-640-value="242"
                        data-group-top-res-960-value="1002"
                        data-group-height-res-960-value="242"
                      >
                        <div class="tn-molecule" id="molecule-1783337553689000039">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783337553689000040"
                            data-elem-id="1783337553689000040"
                            data-elem-type="text"
                            data-field-top-value="387"
                            data-field-height-value="22"
                            data-field-top-res-320-value="946"
                            data-field-top-res-480-value="991"
                            data-field-height-res-480-value="69"
                            data-field-top-res-640-value="1327"
                            data-field-height-res-640-value="92"
                            data-field-top-res-960-value="1002"
                            data-field-height-res-960-value="92"
                          >
                            <div class="tn-atom">
                              When the publisher is&nbsp;willing&nbsp;— happens in&nbsp;roughly 1
                              in&nbsp;5 cases, often requires a&nbsp;factual error
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783337553689000037"
                    data-elem-id="1783337553689000037"
                    data-elem-type="shape"
                    data-field-top-value="469"
                    data-field-height-value="1"
                    data-field-top-res-320-value="1036"
                    data-field-height-res-320-value="1"
                    data-field-top-res-480-value="1075"
                    data-field-height-res-480-value="1"
                    data-field-top-res-640-value="1599"
                    data-field-height-res-640-value="1"
                    data-field-top-res-960-value="1352"
                    data-field-height-res-960-value="1"
                  >
                    <div class="tn-atom"></div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24457212731783337554896000043 t396__group-flex"
                data-group-id="1783337554896000043"
                data-group-top-value="486"
                data-group-heightmode="hug"
                data-group-height-value="83"
                data-group-top-res-320-value="1060"
                data-group-height-res-320-value="145"
                data-group-top-res-480-value="1115"
                data-group-height-res-480-value="139"
                data-group-top-res-640-value="1191"
                data-group-height-res-640-value="419"
                data-group-top-res-960-value="1012"
                data-group-height-res-960-value="351"
              >
                <div class="tn-molecule" id="molecule-1783337554896000043">
                  <div
                    class="t396__group tn-group t396__elem-flex tn-group__24457212731783337554897000045 t396__group-flex"
                    data-group-id="1783337554897000045"
                    data-group-top-value="486"
                    data-group-heightmode="hug"
                    data-group-height-value="66"
                    data-group-top-res-320-value="1060"
                    data-group-height-res-320-value="120"
                    data-group-top-res-480-value="1115"
                    data-group-height-res-480-value="98"
                    data-group-top-res-640-value="1191"
                    data-group-height-res-640-value="388"
                    data-group-top-res-960-value="1012"
                    data-group-height-res-960-value="310"
                  >
                    <div class="tn-molecule" id="molecule-1783337554897000045">
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783337554897000048 t396__group-flex"
                        data-group-id="1783337554897000048"
                        data-group-top-value="486"
                        data-group-heightmode="hug"
                        data-group-height-value="24"
                        data-group-top-res-320-value="1060"
                        data-group-height-res-320-value="24"
                        data-group-top-res-480-value="1115"
                        data-group-height-res-480-value="24"
                        data-group-top-res-640-value="1191"
                        data-group-height-res-640-value="116"
                        data-group-top-res-960-value="1012"
                        data-group-height-res-960-value="310"
                      >
                        <div class="tn-molecule" id="molecule-1783337554897000048">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783337554897000049"
                            data-elem-id="1783337554897000049"
                            data-elem-type="text"
                            data-field-top-value="486"
                            data-field-height-value="23"
                            data-field-top-res-320-value="1060"
                            data-field-height-res-320-value="162"
                            data-field-top-res-480-value="1115"
                            data-field-height-res-480-value="116"
                            data-field-top-res-640-value="1191"
                            data-field-height-res-640-value="116"
                            data-field-top-res-960-value="1012"
                            data-field-height-res-960-value="54"
                          >
                            <div class="tn-atom"><strong>Legal action</strong></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="t396__group tn-group t396__elem-flex tn-group__24457212731783337554897000046 t396__group-flex"
                        data-group-id="1783337554897000046"
                        data-group-top-value="486"
                        data-group-heightmode="hug"
                        data-group-height-value="66"
                        data-group-top-res-320-value="1114"
                        data-group-height-res-320-value="66"
                        data-group-top-res-480-value="1169"
                        data-group-height-res-480-value="44"
                        data-group-top-res-640-value="1337"
                        data-group-height-res-640-value="242"
                        data-group-top-res-960-value="1012"
                        data-group-height-res-960-value="242"
                      >
                        <div class="tn-molecule" id="molecule-1783337554897000046">
                          <div
                            class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783337554897000047"
                            data-elem-id="1783337554897000047"
                            data-elem-type="text"
                            data-field-top-value="486"
                            data-field-height-value="22"
                            data-field-top-res-320-value="1114"
                            data-field-top-res-480-value="1169"
                            data-field-height-res-480-value="69"
                            data-field-top-res-640-value="1337"
                            data-field-height-res-640-value="92"
                            data-field-top-res-960-value="1012"
                            data-field-height-res-960-value="92"
                          >
                            <div class="tn-atom">
                              Proven defamation with documentation and budget&nbsp;— timelines range
                              from months to&nbsp;years
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24457212731783337554896000044"
                    data-elem-id="1783337554896000044"
                    data-elem-type="shape"
                    data-field-top-value="568"
                    data-field-height-value="1"
                    data-field-top-res-320-value="1204"
                    data-field-height-res-320-value="1"
                    data-field-top-res-480-value="1253"
                    data-field-height-res-480-value="1"
                    data-field-top-res-640-value="1609"
                    data-field-height-res-640-value="1"
                    data-field-top-res-960-value="1362"
                    data-field-height-res-960-value="1"
                  >
                    <div class="tn-atom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2464679673" class="r t-rec" style="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="350"
          data-artboard-height-res-320="425"
          data-artboard-height-res-480="398"
          data-artboard-height-res-640="367"
          data-artboard-height-res-960="356"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24646796731783085827066000002 t396__group-flex"
            data-group-id="1783085827066000002"
            data-group-top-value="0"
            data-group-heightmode="hug"
            data-group-height-value="260"
            data-group-top-res-320-value="0"
            data-group-height-res-320-value="365"
            data-group-top-res-480-value="0"
            data-group-height-res-480-value="338"
            data-group-top-res-640-value="0"
            data-group-height-res-640-value="307"
            data-group-top-res-960-value="0"
            data-group-height-res-960-value="266"
          >
            <div class="tn-molecule" id="molecule-1783085827066000002">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24646796731783085825952000001 t396__group-flex"
                data-group-id="1783085825952000001"
                data-group-top-value="60"
                data-group-heightmode="hug"
                data-group-height-value="140"
                data-group-top-res-320-value="24"
                data-group-height-res-320-value="317"
                data-group-top-res-480-value="24"
                data-group-height-res-480-value="290"
                data-group-top-res-640-value="24"
                data-group-height-res-640-value="259"
                data-group-top-res-960-value="40"
                data-group-height-res-960-value="186"
              >
                <div class="tn-molecule" id="molecule-1783085825952000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24646796731754299775220"
                    data-elem-id="1754299775220"
                    data-elem-type="text"
                    data-field-top-value="60"
                    data-field-height-value="22"
                    data-field-top-res-320-value="24"
                    data-field-top-res-480-value="24"
                    data-field-top-res-640-value="24"
                    data-field-height-res-640-value="165"
                    data-field-top-res-960-value="40"
                    data-field-height-res-960-value="22"
                  >
                    <h2 class="tn-atom">The Real Cost of Negative Results in Search</h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24646796731754299795761"
                    data-elem-id="1754299795761"
                    data-elem-type="text"
                    data-field-top-value="60"
                    data-field-height-value="84"
                    data-field-top-res-320-value="66"
                    data-field-height-res-320-value="275"
                    data-field-top-res-480-value="66"
                    data-field-height-res-480-value="248"
                    data-field-top-res-640-value="66"
                    data-field-height-res-640-value="434"
                    data-field-top-res-960-value="40"
                    data-field-height-res-960-value="310"
                  >
                    <div class="tn-atom">
                      Negative news screening has become a standard part of due diligence across
                      industries. What others find when they search for you — your company, your
                      executives, your brand — has direct financial consequences. It's rarely just
                      one type of problem: a defamatory review, outdated content still sitting in
                      search, or a doxxed phone number all surface the same way, and each needs a
                      different fix. That's where online reputation management earns its keep. The
                      question isn't whether it matters — it's what you're going to do about it.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2464692653" class="r t-rec" style="background-color: #efefef">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="311"
          data-artboard-height-res-320="290"
          data-artboard-height-res-480="213"
          data-artboard-height-res-640="274"
          data-artboard-height-res-960="299"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24646926531765779786680000002 t396__group-flex"
            data-group-id="1765779786680000002"
            data-group-top-value="90"
            data-group-heightmode="hug"
            data-group-height-value="161"
            data-group-top-res-320-value="60"
            data-group-height-res-320-value="200"
            data-group-top-res-480-value="60"
            data-group-height-res-480-value="123"
            data-group-top-res-640-value="80"
            data-group-height-res-640-value="149"
            data-group-top-res-960-value="90"
            data-group-height-res-960-value="149"
          >
            <div class="tn-molecule" id="molecule-1765779786680000002">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24646926531765779690151000002 t396__group-flex"
                data-group-id="1765779690151000002"
                data-group-top-value="90"
                data-group-heightmode="hug"
                data-group-height-value="161"
                data-group-top-res-320-value="60"
                data-group-height-res-320-value="200"
                data-group-top-res-480-value="60"
                data-group-height-res-480-value="123"
                data-group-top-res-640-value="80"
                data-group-height-res-640-value="149"
                data-group-top-res-960-value="90"
                data-group-height-res-960-value="149"
              >
                <div class="tn-molecule" id="molecule-1765779690151000002">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24646926531766738835038000003"
                    data-elem-id="1766738835038000003"
                    data-elem-type="text"
                    data-field-top-value="90"
                    data-field-height-value="22"
                    data-field-top-res-320-value="60"
                    data-field-height-res-320-value="23"
                    data-field-top-res-480-value="60"
                    data-field-height-res-480-value="22"
                    data-field-top-res-640-value="80"
                    data-field-height-res-640-value="23"
                    data-field-top-res-960-value="90"
                    data-field-height-res-960-value="23"
                  >
                    <div class="tn-atom">Our approach</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24646926531764597036881"
                    data-elem-id="1764597036881"
                    data-elem-type="text"
                    data-field-top-value="137"
                    data-field-height-value="114"
                    data-field-top-res-320-value="108"
                    data-field-height-res-320-value="70"
                    data-field-top-res-480-value="107"
                    data-field-height-res-480-value="70"
                    data-field-top-res-640-value="127"
                    data-field-height-res-640-value="144"
                    data-field-top-res-960-value="137"
                    data-field-height-res-960-value="144"
                  >
                    <h2 class="tn-atom">
                      <span style="color: rgb(93, 108, 87)">Remove</span> what can be removed.<br /><span
                        style="color: rgb(93, 108, 87)"
                        >Replace</span
                      >
                      what can't be erased
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
      id="rec2464696723"
      class="r t-rec t-rec_pt_0 t-rec_pb_30 t-rec_pb-res-480_30"
      style="padding-top: 0px; padding-bottom: 30px; background-color: #efefef"
    >
      <div class="t774">
        <div
          class="t-card__container t774__container t774__container_mobile-grid"
          style="row-gap: 40px"
        >
          <div
            class="t-card__col t-card__col_withoutbtn t774__col t-col t-col_4 t-align_left t-item t774__col_mobile-grid"
          >
            <div
              class="t774__wrapper"
              style="background-color: #ffffff; box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1)"
            >
              <div class="t774__content">
                <div class="t774__textwrapper">
                  <div class="t-card__title t-name t-name_md">Map the landscape</div>
                  <div class="t-card__descr t-descr t-descr_xxs">
                    Before taking any action, understand what's out there, where it lives, how much
                    weight it carries in search, and who is most likely to encounter it. Guessing is
                    expensive.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="t-card__col t-card__col_withoutbtn t774__col t-col t-col_4 t-align_left t-item t774__col_mobile-grid"
          >
            <div
              class="t774__wrapper"
              style="background-color: #ffffff; box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1)"
            >
              <div class="t774__content">
                <div class="t774__textwrapper">
                  <div class="t-card__title t-name t-name_md">Remove what's removable</div>
                  <div class="t-card__descr t-descr t-descr_xxs">
                    With a clear picture of the situation, apply the right tool to each piece of
                    content — legal, platform-based, or direct outreach. No single method works for
                    everything.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="t-card__col t-card__col_withoutbtn t774__col t-col t-col_4 t-align_left t-item t774__col_mobile-grid"
          >
            <div
              class="t774__wrapper"
              style="background-color: #ffffff; box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1)"
            >
              <div class="t774__content">
                <div class="t774__textwrapper">
                  <div class="t-card__title t-name t-name_md">Build what replaces it</div>
                  <div class="t-card__descr t-descr t-descr_xxs">
                    Permanent improvement comes from publishing genuinely positive content and
                    building a stronger, more accurate information presence that occupies the space
                    where the negative content lived. That's the work that lasts.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="t-card__col t-card__col_withoutbtn t774__col t-col t-col_4 t-align_left t-item t774__col_mobile-grid"
          >
            <div
              class="t774__wrapper"
              style="background-color: #ffffff; box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.1)"
            >
              <div class="t774__content">
                <div class="t774__textwrapper">
                  <div class="t-card__title t-name t-name_md"><strong>Mugshot removal</strong></div>
                  <div class="t-card__descr t-descr t-descr_xxs">
                    Arrest photo published by a booking-data site — governed by state-specific
                    expungement and sealing laws, not a universal takedown right.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2464708953" class="r t-rec" style="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="134"
          data-artboard-height-res-320="170"
          data-artboard-height-res-480="126"
          data-artboard-height-res-640="126"
          data-artboard-height-res-960="134"
        >
          <div class="t396__carrier"></div>
          <div class="t396__filter"></div>
          <div
            class="t396__elem tn-elem tn-elem__24647089531754299795761"
            data-elem-id="1754299795761"
            data-elem-type="text"
            data-field-top-value="0"
            data-field-height-value="44"
            data-field-top-res-320-value="0"
            data-field-height-res-320-value="275"
            data-field-top-res-480-value="0"
            data-field-height-res-480-value="248"
            data-field-top-res-640-value="0"
            data-field-height-res-640-value="434"
            data-field-top-res-960-value="0"
            data-field-height-res-960-value="310"
          >
            <div class="tn-atom">
              Each case is different. The method depends on the source, the content type, the
              platform, and the objective — which is why the conversation about your specific
              situation always comes first.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="rec2445175353"
      class="r t-rec t-rec_pt_90 t-rec_pt-res-480_45 t-rec_pb_90 t-rec_pb-res-480_45"
      style="padding-top: 90px; padding-bottom: 90px; background-color: #ffffff"
    >
      <div class="t668">
        <div class="t-section__container t-container t-container_flex js-block-header">
          <div class="t-col t-col_12">
            <h2
              class="js-block-header-title t-section__title t-title t-title_xs t-align_center t-margin_auto"
            >
              Common questions about removing content online
            </h2>
          </div>
        </div>
        <div class="t-container">
          <div class="t668__col t-col t-col_10 t-prefix_1" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper" style="background-color: #f6f6f6">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion1_2445175353'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion1_2445175353"
                    :aria-expanded="expanded['accordion1_2445175353']"
                    @click="toggleQuestion('accordion1_2445175353')"
                  >
                    <span class="t668__title t-name t-name_xl" style=""
                      >Can I remove negative content from Google on my own?</span
                    >
                    <span class="t668__icon">
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
                            stroke-width="2px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#bfd8b3">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover">
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
                            stroke-width="2px"
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
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion1_2445175353"
                  style="display: block"
                  v-show="expanded['accordion1_2445175353']"
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="">
                      You can submit removal requests to Google for specific content categories —
                      personal information, non-consensual imagery, and certain legal violations.
                      Outside those categories, you can't remove Google search results directly;
                      Google only stops indexing pages that no longer exist or have been marked as
                      blocked by the source.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_10 t-prefix_1" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper" style="background-color: #f6f6f6">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion2_2445175353'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion2_2445175353"
                    :aria-expanded="expanded['accordion2_2445175353']"
                    @click="toggleQuestion('accordion2_2445175353')"
                  >
                    <span class="t668__title t-name t-name_xl" style=""
                      >What is the Right to Be Forgotten — and does it apply to me?</span
                    >
                    <span class="t668__icon">
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
                            stroke-width="2px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#bfd8b3">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover">
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
                            stroke-width="2px"
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
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion2_2445175353"
                  v-show="expanded['accordion2_2445175353']"
                  style=""
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="">
                      A legal right under GDPR for EU residents to request removal of certain
                      personal data from search results and digital platforms. It applies to
                      specific data types — outdated, irrelevant, or excessive personal information
                      — and only to platforms under EU jurisdiction. It doesn't apply universally,
                      doesn't guarantee removal, and platforms review requests on their own
                      timeline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_10 t-prefix_1" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper" style="background-color: #f6f6f6">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion3_2445175353'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion3_2445175353"
                    :aria-expanded="expanded['accordion3_2445175353']"
                    @click="toggleQuestion('accordion3_2445175353')"
                  >
                    <span class="t668__title t-name t-name_xl" style=""
                      >How long does it take to remove negative content or fix negative search
                      results?</span
                    >
                    <span class="t668__icon">
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
                            stroke-width="2px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#bfd8b3">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover">
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
                            stroke-width="2px"
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
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion3_2445175353"
                  v-show="expanded['accordion3_2445175353']"
                  style=""
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="">
                      Platform-based removals, when successful, take weeks to months. Reactive
                      removal of a single piece of content — our core service here — typically
                      resolves within the hour; broader search-result cleanup takes longer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_10 t-prefix_1" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper" style="background-color: #f6f6f6">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion4_2445175353'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion4_2445175353"
                    :aria-expanded="expanded['accordion4_2445175353']"
                    @click="toggleQuestion('accordion4_2445175353')"
                  >
                    <span class="t668__title t-name t-name_xl" style=""
                      >Is it possible to remove a negative news article?</span
                    >
                    <span class="t668__icon">
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
                            stroke-width="2px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#bfd8b3">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover">
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
                            stroke-width="2px"
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
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion4_2445175353"
                  v-show="expanded['accordion4_2445175353']"
                  style=""
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="">
                      Rarely through direct removal. News articles are protected by editorial
                      independence, and publishers almost never delete coverage on request.
                      Corrections are sometimes possible when there are factual errors. In most
                      cases, the more effective path is building enough authoritative content that
                      the article loses its prominence in search rankings.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_10 t-prefix_1" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper" style="background-color: #f6f6f6">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion5_2445175353'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion5_2445175353"
                    :aria-expanded="expanded['accordion5_2445175353']"
                    @click="toggleQuestion('accordion5_2445175353')"
                  >
                    <span class="t668__title t-name t-name_xl" style=""
                      >What's the difference between removing and suppressing content?</span
                    >
                    <span class="t668__icon">
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
                            stroke-width="2px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#bfd8b3">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover">
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
                            stroke-width="2px"
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
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion5_2445175353"
                  v-show="expanded['accordion5_2445175353']"
                  style=""
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="">
                      Removal means the content is taken down — it no longer exists at the source or
                      appears in search. Suppression means the content still exists, but is pushed
                      off the first page of results by stronger, more relevant content ranking above
                      it. Suppression is often more realistic and more durable than removal.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="t668__col t-col t-col_10 t-prefix_1" style="margin-bottom: 2px">
            <div class="t668__accordion">
              <div class="t668__wrapper" style="background-color: #f6f6f6">
                <div
                  class="t668__header"
                  :class="{ t668__opened: expanded['accordion6_2445175353'] }"
                >
                  <button
                    type="button"
                    class="t668__trigger-button"
                    aria-controls="accordion6_2445175353"
                    :aria-expanded="expanded['accordion6_2445175353']"
                    @click="toggleQuestion('accordion6_2445175353')"
                  >
                    <span class="t668__title t-name t-name_xl" style=""
                      >A damaging article about our company is ranking on page one — what can we
                      do?</span
                    >
                    <span class="t668__icon">
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
                            stroke-width="2px"
                            fill="none"
                            fill-rule="evenodd"
                            stroke-linecap="square"
                          >
                            <g transform="translate(1.000000, 1.000000)" stroke="#bfd8b3">
                              <path d="M0,11 L22,11"></path>
                              <path d="M11,0 L11,22"></path>
                            </g>
                          </g>
                        </svg>
                      </span>
                      <span class="t668__circle" style="background-color: transparent"></span>
                    </span>
                    <span class="t668__icon t668__icon-hover">
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
                            stroke-width="2px"
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
                      <span class="t668__circle" style="background-color: #eee"></span>
                    </span>
                  </button>
                </div>
                <div
                  class="t668__content"
                  id="accordion6_2445175353"
                  v-show="expanded['accordion6_2445175353']"
                  style=""
                >
                  <div class="t668__textwrapper">
                    <div class="t668__text t-descr t-descr_xs" style="">
                      The first step is understanding why it ranks — its domain authority, the
                      keywords it targets, and the competitive landscape around it. A combination of
                      direct outreach, content strategy, and in some cases legal or platform-based
                      requests determines the path. There is no universal answer, which is why the
                      conversation about your specific situation always comes first.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="rec2464721863" class="r t-rec t-rec_pt_0" style="padding-top: 0px" data-dark="">
      <div class="t396">
        <div
          class="t396__artboard t396__artboard-flex"
          data-artboard-height="773"
          data-artboard-height-res-320="1145"
          data-artboard-height-res-480="1125"
          data-artboard-height-res-640="1159"
          data-artboard-height-res-960="795"
        >
          <div
            class="t396__carrier t-bgimg"
            style="background-image: url(&quot;/images/situation-7bc9709aba7d4e.svg&quot;)"
          ></div>
          <div class="t396__filter"></div>
          <div
            class="t396__group tn-group tn-group__24647218631783934768157000002 t396__group-flex"
            data-group-id="1783934768157000002"
            data-group-top-value="90"
            data-group-heightmode="hug"
            data-group-height-value="593"
            data-group-top-res-320-value="60"
            data-group-height-res-320-value="1025"
            data-group-top-res-480-value="60"
            data-group-height-res-480-value="1005"
            data-group-top-res-640-value="90"
            data-group-height-res-640-value="979"
            data-group-top-res-960-value="90"
            data-group-height-res-960-value="615"
          >
            <div class="tn-molecule" id="molecule-1783934768157000002">
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24647218631783932103120000001 t396__group-flex"
                data-group-id="1783932103120000001"
                data-group-top-value="90"
                data-group-heightmode="hug"
                data-group-height-value="350"
                data-group-height-res-320-value="390"
                data-group-top-res-480-value="60"
                data-group-height-res-480-value="366"
                data-group-height-res-640-value="366"
                data-group-height-res-960-value="366"
              >
                <div class="tn-molecule" id="molecule-1783932103120000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24647218631775026241529"
                    data-elem-id="1775026241529"
                    data-elem-type="text"
                    data-field-top-value="90"
                    data-field-height-value="22"
                    data-field-top-res-320-value="60"
                    data-field-height-res-320-value="22"
                    data-field-top-res-480-value="60"
                    data-field-height-res-480-value="22"
                    data-field-top-res-640-value="90"
                    data-field-top-res-960-value="90"
                    data-field-height-res-960-value="22"
                  >
                    <div class="tn-atom">get in touch</div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24647218631634290236407"
                    data-elem-id="1634290236407"
                    data-elem-type="text"
                    data-field-top-value="136"
                    data-field-height-value="100"
                    data-field-top-res-320-value="106"
                    data-field-height-res-320-value="102"
                    data-field-top-res-480-value="106"
                    data-field-height-res-480-value="86"
                    data-field-top-res-640-value="136"
                    data-field-height-res-640-value="129"
                    data-field-top-res-960-value="136"
                    data-field-height-res-960-value="86"
                  >
                    <h2 class="tn-atom">
                      Not sure what<br />you're&nbsp;<span style="color: rgb(191, 216, 179)"
                        >dealing with</span
                      >?
                    </h2>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24647218631698156577806"
                    data-elem-id="1698156577806"
                    data-elem-type="text"
                    data-field-top-value="260"
                    data-field-height-value="180"
                    data-field-top-res-320-value="198"
                    data-field-height-res-320-value="280"
                    data-field-top-res-480-value="216"
                    data-field-height-res-480-value="210"
                    data-field-top-res-640-value="246"
                    data-field-top-res-960-value="246"
                    data-field-height-res-960-value="210"
                  >
                    <div class="tn-atom">
                      We’ll help you understand what’s actually possible&nbsp;— before you decide
                      anything. Hundreds of&nbsp;companies and individuals have come
                      to&nbsp;us&nbsp;with a&nbsp;piece of&nbsp;content they needed handled. The
                      first thing we&nbsp;do&nbsp;is listen. No&nbsp;pitch. No&nbsp;commitment. Just
                      clarity on&nbsp;your situation.
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="t396__group tn-group t396__elem-flex tn-group__24647218631776157240519000001 t396__group-flex"
                data-group-id="1776157240519000001"
                data-group-top-value="90"
                data-group-heightmode="hug"
                data-group-height-value="593"
                data-group-top-res-320-value="490"
                data-group-height-res-320-value="595"
                data-group-top-res-480-value="466"
                data-group-height-res-480-value="599"
                data-group-top-res-640-value="476"
                data-group-height-res-640-value="593"
                data-group-top-res-960-value="90"
                data-group-height-res-960-value="615"
              >
                <div class="tn-molecule" id="molecule-1776157240519000001">
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24647218631776103593811"
                    data-elem-id="1776103593811"
                    data-elem-type="form"
                    data-field-top-value="130"
                    data-field-height-value="475"
                    data-field-top-res-320-value="514"
                    data-field-height-res-320-value="493"
                    data-field-top-res-480-value="498"
                    data-field-height-res-480-value="475"
                    data-field-top-res-640-value="516"
                    data-field-height-res-640-value="475"
                    data-field-top-res-960-value="130"
                    data-field-height-res-960-value="475"
                  >
                    <div class="tn-atom tn-atom__form">
                      <form
                        class="local-source-form"
                        style="
                          --input-background: #d2d2d2;
                          --input-border: #4a4a4a;
                          --input-height: 48px;
                          --input-radius: 5px;
                          --label-color: #ffffff;
                          --form-gap: 24px;
                          --button-background: #bfd8b3;
                          --button-color: #28292d;
                          --button-radius: 5px;
                          --button-width: 160px;
                          --button-height: 48px;
                        "
                        @submit.prevent="submitPreview('form-0')"
                      >
                        <label
                          >Name<input
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            required /></label
                        ><label
                          >Email<input
                            type="email"
                            name="email"
                            placeholder="mail@example.com"
                            required /></label
                        ><label
                          >Company<input
                            type="text"
                            name="Company"
                            placeholder="Acme Inc"
                            required /></label
                        ><label
                          >Describe what you found (optional)<textarea
                            rows="3"
                            name="Describe what you found (optional)"
                            placeholder=""
                          ></textarea></label
                        ><button type="submit">Book a Demo</button>
                        <p v-if="sentForms['form-0']" role="status">
                          Preview form — no information has been sent.
                        </p>
                      </form>
                    </div>
                  </div>
                  <div
                    class="t396__elem tn-elem t396__elem-flex tn-elem__24647218631776159221046"
                    data-elem-id="1776159221046"
                    data-elem-type="text"
                    data-field-top-value="621"
                    data-field-height-value="22"
                    data-field-top-res-320-value="1023"
                    data-field-height-res-320-value="38"
                    data-field-top-res-480-value="989"
                    data-field-height-res-480-value="44"
                    data-field-top-res-640-value="1007"
                    data-field-height-res-640-value="22"
                    data-field-top-res-960-value="621"
                    data-field-height-res-960-value="44"
                  >
                    <div class="tn-atom">
                      We&nbsp;respond within 1 business day. No&nbsp;commitment required.
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
