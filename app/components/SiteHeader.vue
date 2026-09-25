<script setup lang="ts">
import navigationData from "~/data/navigation.json";

interface NavigationLink {
  label: string;
  to: string;
  target?: string;
  badge?: string;
  description?: string;
  variant?: string;
  sections?: { label: string; description?: string; items: NavigationLink[] }[];
}
interface NavigationGroup extends NavigationLink {
  items?: NavigationLink[];
  menuFooter?: { text: string; actions: NavigationLink[] };
}
const navigation: NavigationGroup[] = navigationData;
const menuOpen = ref(false);
const activeGroup = ref<string | null>(null);
const mobileMenu = ref<HTMLElement>();
const closeButton = ref<HTMLButtonElement>();
const header = ref<HTMLElement>();
const consultation = useConsultation();
const route = useRoute();
let previousFocus: HTMLElement | null = null;
let previousOverflow = "";
let desktopQuery: MediaQueryList | undefined;
let restoringFocus = false;

function hasMega(group: NavigationGroup) {
  return group.items?.some((item) => item.sections?.length);
}
function closeMenu() {
  menuOpen.value = false;
  activeGroup.value = null;
}
function openGroup(group: NavigationGroup) {
  if (!restoringFocus)
    activeGroup.value = group.items?.length ? group.label : null;
}
function onFocusOut(event: FocusEvent) {
  if (!header.value?.contains(event.relatedTarget as Node | null))
    activeGroup.value = null;
}
async function openConsultation() {
  closeMenu();
  await nextTick();
  consultation.open();
}
function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    if (activeGroup.value) {
      const trigger = header.value?.querySelector<HTMLElement>(
        ".app-header__group--open > a",
      );
      restoringFocus = true;
      trigger?.focus();
      restoringFocus = false;
    }
    closeMenu();
  }
  if (event.key === "Tab" && menuOpen.value && mobileMenu.value) {
    const focusable = [
      ...mobileMenu.value.querySelectorAll<HTMLElement>(
        "a[href],button,summary",
      ),
    ].filter((el) => el.getClientRects().length);
    const first = focusable[0],
      last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
}
function onBreakpointChange() {
  closeMenu();
}
watch(() => route.fullPath, closeMenu);
watch(menuOpen, async (value) => {
  if (value) {
    previousFocus = document.activeElement as HTMLElement;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    await nextTick();
    closeButton.value?.focus();
  } else {
    document.body.style.overflow = previousOverflow;
    previousFocus?.focus();
  }
});
onMounted(() => {
  document.addEventListener("keydown", onKeydown);
  desktopQuery = matchMedia("(min-width: 1201px)");
  desktopQuery.addEventListener("change", onBreakpointChange);
});
onBeforeUnmount(() => {
  document.removeEventListener("keydown", onKeydown);
  desktopQuery?.removeEventListener("change", onBreakpointChange);
  if (menuOpen.value) document.body.style.overflow = previousOverflow;
});
</script>

<template>
  <div class="header-shell">
    <header
      ref="header"
      class="app-header"
      @mouseleave="activeGroup = null"
      @focusout="onFocusOut"
    >
      <div class="app-header__inner">
        <SiteLink
          class="app-header__logo"
          href="/"
          aria-label="Reputation House home"
          @click="closeMenu"
          ><img
            src="/images/logo-white-1.png"
            alt="Reputation House"
            width="100"
            height="38"
        /></SiteLink>
        <nav class="app-header__nav" aria-label="Primary navigation">
          <div
            v-for="(group, index) in navigation"
            :key="group.label"
            class="app-header__group"
            :class="{ 'app-header__group--open': activeGroup === group.label }"
            @mouseenter="openGroup(group)"
            @focusin="openGroup(group)"
          >
            <SiteLink
              class="app-header__link app-header__group-button"
              :href="group.to"
              :aria-expanded="
                group.items ? activeGroup === group.label : undefined
              "
              :aria-controls="group.items ? `header-panel-${index}` : undefined"
              @click="closeMenu"
              @keydown.down.prevent="openGroup(group)"
            >
              {{ group.label
              }}<span
                v-if="group.items"
                class="app-header__arrow"
                aria-hidden="true"
              />
            </SiteLink>
            <div
              v-if="group.items"
              :id="`header-panel-${index}`"
              :class="hasMega(group) ? 'app-header__mega' : 'app-header__menu'"
              :aria-hidden="activeGroup !== group.label"
              :inert="activeGroup !== group.label"
            >
              <div class="app-header__panel-inner">
                <div v-if="hasMega(group)" class="app-header__mega-grid">
                  <section
                    v-for="tab in group.items.filter(
                      (item) => item.sections?.length,
                    )"
                    :key="tab.label"
                    class="app-header__mega-column"
                  >
                    <SiteLink
                      class="app-header__mega-title"
                      :href="tab.to"
                      :target="tab.target"
                      :rel="
                        tab.target === '_blank'
                          ? 'noopener noreferrer'
                          : undefined
                      "
                      @click="closeMenu"
                      >{{ tab.label }}</SiteLink
                    >
                    <div class="app-header__mega-sections">
                      <section
                        v-for="section in tab.sections"
                        :key="section.label"
                        class="app-header__submenu-section"
                      >
                        <h3>{{ section.label }}</h3>
                        <p v-if="section.description">
                          {{ section.description }}
                        </p>
                        <SiteLink
                          v-for="item in section.items"
                          :key="item.label"
                          :href="item.to"
                          :target="item.target"
                          :rel="
                            item.target === '_blank'
                              ? 'noopener noreferrer'
                              : undefined
                          "
                          :class="{
                            'app-header__mega-link--muted': item.badge,
                          }"
                          @click="closeMenu"
                          ><span>{{ item.label }}</span
                          ><span v-if="item.badge" class="app-header__badge">{{
                            item.badge
                          }}</span></SiteLink
                        >
                      </section>
                    </div>
                  </section>
                </div>
                <div v-else class="app-header__dropdown-grid">
                  <SiteLink
                    v-for="item in group.items"
                    :key="item.label"
                    class="app-header__dropdown-card"
                    :href="item.to"
                    :target="item.target"
                    :rel="
                      item.target === '_blank'
                        ? 'noopener noreferrer'
                        : undefined
                    "
                    @click="closeMenu"
                  >
                    <span class="app-header__dropdown-title"
                      ><span>{{ item.label }}</span
                      ><span v-if="item.badge" class="app-header__badge">{{
                        item.badge
                      }}</span></span
                    >
                    <span
                      v-if="item.description"
                      class="app-header__dropdown-description"
                      >{{ item.description }}</span
                    >
                  </SiteLink>
                </div>
                <div v-if="group.menuFooter" class="app-header__menu-footer">
                  <p>{{ group.menuFooter.text }}</p>
                  <div class="app-header__menu-actions">
                    <SiteLink
                      v-for="action in group.menuFooter.actions"
                      :key="action.label"
                      class="app-header__menu-action"
                      :class="`app-header__menu-action--${action.variant || 'filled'}`"
                      :href="action.to"
                      :target="action.target"
                      :rel="
                        action.target === '_blank'
                          ? 'noopener noreferrer'
                          : undefined
                      "
                      @click="closeMenu"
                      >{{ action.label
                      }}<span
                        class="app-header__menu-action-arrow"
                        aria-hidden="true"
                        >↗</span
                      ></SiteLink
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div class="app-header__actions">
          <SiteLink
            href="https://strategy.reputation.house/strategy/"
            class="app-header__cta app-header__cta--outline"
            target="_blank"
            rel="noopener noreferrer"
            >Find strategy online</SiteLink
          >
          <button class="app-header__cta" @click="openConsultation">
            Get your tailored strategy
          </button>
          <button
            class="app-header__burger"
            :class="{ 'app-header__burger--open': menuOpen }"
            type="button"
            :aria-expanded="menuOpen"
            aria-controls="mobile-menu"
            :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
            @click="menuOpen = !menuOpen"
          >
            <span /><span /><span /><span />
          </button>
        </div>
      </div>
    </header>
    <div
      v-if="menuOpen"
      id="mobile-menu"
      ref="mobileMenu"
      class="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden="false"
    >
      <aside class="mobile-menu__panel">
        <header class="mobile-menu__header">
          <SiteLink
            class="mobile-menu__logo"
            href="/"
            aria-label="Reputation House home"
            @click="closeMenu"
            ><img
              src="/images/logo-white-1.png"
              alt="Reputation House"
              width="110"
              height="42"
          /></SiteLink>
          <button
            ref="closeButton"
            class="mobile-menu__close"
            type="button"
            aria-label="Close menu"
            @click="closeMenu"
          />
        </header>
        <nav class="mobile-menu__nav" aria-label="Mobile navigation">
          <section
            v-for="group in navigation"
            :key="group.label"
            class="mobile-menu__group"
          >
            <SiteLink
              v-if="!group.items"
              class="mobile-menu__direct"
              :href="group.to"
              @click="closeMenu"
              >{{ group.label }}</SiteLink
            >
            <details v-else class="mobile-menu__details">
              <summary>{{ group.label }}<span aria-hidden="true" /></summary>
              <div v-if="hasMega(group)" class="mobile-menu__mega">
                <details
                  v-for="tab in group.items.filter(
                    (item) => item.sections?.length,
                  )"
                  :key="tab.label"
                  class="mobile-menu__subdetails"
                >
                  <summary>{{ tab.label }}<span aria-hidden="true" /></summary>
                  <details
                    v-for="section in tab.sections"
                    :key="section.label"
                    class="mobile-menu__section"
                  >
                    <summary>
                      <span
                        ><strong>{{ section.label }}</strong
                        ><em v-if="section.description">{{
                          section.description
                        }}</em></span
                      ><i aria-hidden="true" />
                    </summary>
                    <ul>
                      <li v-for="item in section.items" :key="item.label">
                        <SiteLink
                          :href="item.to"
                          :target="item.target"
                          :rel="
                            item.target === '_blank'
                              ? 'noopener noreferrer'
                              : undefined
                          "
                          @click="closeMenu"
                          >{{ item.label
                          }}<span
                            v-if="item.badge"
                            class="mobile-menu__badge"
                            >{{ item.badge }}</span
                          ></SiteLink
                        >
                      </li>
                    </ul>
                  </details>
                </details>
              </div>
              <ul v-else>
                <li v-for="item in group.items" :key="item.label">
                  <SiteLink
                    :href="item.to"
                    :target="item.target"
                    :rel="
                      item.target === '_blank'
                        ? 'noopener noreferrer'
                        : undefined
                    "
                    @click="closeMenu"
                    >{{ item.label }}</SiteLink
                  >
                </li>
              </ul>
            </details>
          </section>
        </nav>
        <div class="mobile-menu__actions">
          <SiteLink
            class="mobile-menu__cta mobile-menu__cta--outline"
            href="https://strategy.reputation.house/strategy/"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMenu"
            >Find strategy online</SiteLink
          >
          <button class="mobile-menu__cta" @click="openConsultation">
            Get your tailored strategy
          </button>
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped src="./site-header.css"></style>
