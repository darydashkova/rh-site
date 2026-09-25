<script setup lang="ts">
import "./team.css";

interface Person {
  name: string;
  role: string;
  place: string;
  flag: string;
  image: string;
  bio?: string;
  linkedin?: string;
}
const leaders: Person[] = [
  {
    name: "Kristina",
    role: "Chief Executive Officer",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-kristina.jpg",
    bio: "Kristina joined Reputation House in 2022 and helped build the company’s digital risk protection technology. She leads the shift from reputation agency to technology-driven platform.",
  },
  {
    name: "Antony",
    role: "Chief Technical Officer",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-antony.png",
    bio: "Antony leads product architecture, engineering and delivery, turning business needs into scalable digital products.",
  },
  {
    name: "Daria",
    role: "Chief Human Resources Officer",
    place: "Netherlands, The Hague",
    flag: "netherlands",
    image: "/images/team-daria.png",
    bio: "Daria leads the HR function and develops the culture of a remote international team.",
  },
  {
    name: "Julia",
    role: "Chief Marketing Officer",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-julia.png",
    bio: "Julia leads the company’s market strategy and the development of the digital risk protection category.",
  },
];
const core: Person[] = [
  {
    name: "Anastasia",
    role: "Head of Client Relationships",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-anastasia-relationships.jpg",
  },
  {
    name: "Denis",
    role: "Head of PR",
    place: "USA, New York",
    flag: "usa",
    image: "/images/team-denis.png",
    linkedin: "https://www.linkedin.com/in/denis-puzhalin-358558183/",
  },
  {
    name: "Vlad",
    role: "Head of Operations Development",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-vlad.jpg",
  },
  {
    name: "Anastasia",
    role: "Head of Consulting Analytics",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-anastasia-analytics.jpg",
    linkedin: "https://www.linkedin.com/in/anastasia-lapir/",
  },
  {
    name: "Anastasia",
    role: "Head of Business Operations",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-anastasia-operations.jpg",
    linkedin: "https://www.linkedin.com/in/apbiserova/",
  },
  {
    name: "Iliya",
    role: "Team Lead of Analytics & Intelligence",
    place: "UAE, Dubai",
    flag: "uae",
    image: "/images/team-iliya.png",
    linkedin: "https://www.linkedin.com/in/ilya-vorontsov-9162ba303/",
  },
  {
    name: "Helga",
    role: "Account Manager",
    place: "Italy, Sardinia",
    flag: "italy",
    image: "/images/team-helga.jpg",
    linkedin: "https://www.linkedin.com/in/olga-kabras-025100352/",
  },
  {
    name: "Aibike",
    role: "Account Manager",
    place: "Kyrgyzstan, Bishkek",
    flag: "kyrgyzstan",
    image: "/images/team-aibike.webp",
    linkedin: "https://www.linkedin.com/in/aibike-dzhanybekova/",
  },
];
const values = [
  {
    number: "01",
    title: "Results & expertise",
    text: "We hold a high bar of expertise and stand behind the quality of our work, the depth of analysis and the results.",
  },
  {
    number: "02",
    title: "Openness",
    text: "We stay open with each other, communicate directly and treat honest feedback as a tool for growth.",
  },
  {
    number: "03",
    title: "Purpose",
    text: "Every action connects to a goal, and everyone understands the impact behind their work.",
  },
  {
    number: "04",
    title: "Humanity",
    text: "We see the person behind every task and extend the same respect to everyone.",
  },
  {
    number: "05",
    title: "Support",
    text: "We step in when a colleague needs it and ask for help just as openly.",
  },
  {
    number: "06",
    title: "Growth",
    text: "We grow through real projects, shared knowledge and honest reflection.",
  },
];
const reasons = [
  {
    number: "01",
    title: "International Environment",
    text: "A team of professionals from 14 countries across 3 continents, working in a truly global context.",
  },
  {
    number: "02",
    title: "Real Product, Real Impact",
    text: "A genuine technology product in AI and digital risk, where your work shapes what we ship.",
  },
  {
    number: "03",
    title: "Freedom over control",
    text: "Clear goals in place of micromanagement, with trust placed in how you deliver.",
  },
  {
    number: "04",
    title: "Flexibility",
    text: "100% remote and async-friendly: build life around your work and the work around your life.",
  },
];
const questions = [
  {
    title: "Is Reputation House currently hiring?",
    answer:
      "Current vacancies are listed in the openings section and updated automatically through our careers portal.",
  },
  {
    title: "Where is Reputation House headquartered?",
    answer:
      "The company has an office in Dubai and an international remote team.",
  },
  {
    title: "Is the position fully remote?",
    answer:
      "The team works remotely across countries and time zones. Individual role requirements are listed with each opening.",
  },
  {
    title: "What does Reputation House do?",
    answer:
      "We develop digital risk protection technology and provide expert support across search, AI, media and reviews.",
  },
  {
    title: "How do I apply if I don't see a suitable role?",
    answer:
      "You can follow the careers page for new openings and contact the team with your experience.",
  },
];
const selectedPerson = ref<Person | null>(null);
function onKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") selectedPerson.value = null;
}
onMounted(() => document.addEventListener("keydown", onKeydown));
onBeforeUnmount(() => document.removeEventListener("keydown", onKeydown));
watch(selectedPerson, (person) => {
  if (import.meta.client) document.body.style.overflow = person ? "hidden" : "";
});
useSeoMeta({
  title: "Meet Our Team & Careers | Reputation House",
  description:
    "Meet the remote-first international team building digital risk protection technology at Reputation House.",
});
</script>

<template>
  <main id="main-content" class="team-page">
    <section class="team-hero">
      <div class="team-container">
        <p class="team-hero__eyebrow">Careers in Reputation House</p>
        <h1>The People Behind<br />Digital Reputation</h1>
        <p>
          Reputation House is a remote-first team of professionals from 13
          countries building digital risk protection technology. We help brands
          and executives manage their online reputation across search, AI and
          media.
        </p>
        <div>
          <a href="#openings">Open Roles</a><a href="#values">Our Values</a>
        </div>
      </div>
    </section>
    <div class="team-stat-strip">
      <div class="team-container">
        <div><strong>14</strong><span>Countries</span></div>
        <div><strong>100%</strong><span>Remote</span></div>
        <div><strong>7</strong><span>Years on market</span></div>
        <div><strong>3</strong><span>Continents</span></div>
      </div>
    </div>
    <section class="team-directory">
      <div class="team-container">
        <nav class="team-breadcrumb" aria-label="Breadcrumb">
          <SiteLink href="/">Reputation.house</SiteLink> /
          <SiteLink href="/company">Company</SiteLink> / Team
        </nav>
        <div class="team-directory__intro">
          <p>Who we are</p>
          <h2>
            Professionals from 13 countries, united by expertise and a shared
            product
          </h2>
        </div>
        <h3 class="team-directory__label">Leadership</h3>
        <div class="team-grid">
          <article
            v-for="person in leaders"
            :key="person.role"
            class="team-person"
          >
            <button
              :aria-label="`Read about ${person.name}, ${person.role}`"
              @click="selectedPerson = person"
            >
              <img :src="person.image" :alt="person.name" loading="lazy" />
            </button>
            <h4>{{ person.name }} <span aria-hidden="true">↗</span></h4>
            <p>{{ person.role }}</p>
            <span class="team-person__place"
              ><img :src="`/images/flag-${person.flag}.svg`" alt="" />{{
                person.place
              }}</span
            >
          </article>
        </div>
        <h3 class="team-directory__label team-directory__label--core">
          Core team
        </h3>
        <div class="team-grid">
          <article
            v-for="person in core"
            :key="person.role"
            class="team-person"
          >
            <button
              :aria-label="`Read about ${person.name}, ${person.role}`"
              @click="selectedPerson = person"
            >
              <img :src="person.image" :alt="person.name" loading="lazy" />
            </button>
            <h4>{{ person.name }} <span aria-hidden="true">↗</span></h4>
            <p>{{ person.role }}</p>
            <span class="team-person__place"
              ><img :src="`/images/flag-${person.flag}.svg`" alt="" />{{
                person.place
              }}</span
            >
            <SiteLink
              v-if="person.linkedin"
              class="team-person__linkedin"
              :href="person.linkedin"
              >Linkedin</SiteLink
            >
          </article>
        </div>
      </div>
    </section>
    <section id="values" class="team-values">
      <div class="team-container">
        <p>What we stand for</p>
        <h2>Our values</h2>
        <h3>What guides how we work, make decisions and support each other</h3>
        <ContentCarousel label="Our values" :columns="4" :card-width="300"
          ><article v-for="value in values" :key="value.number">
            <span>{{ value.number }}</span>
            <h4>{{ value.title }}</h4>
            <p>{{ value.text }}</p>
          </article></ContentCarousel
        >
      </div>
    </section>
    <div class="team-awards"><AwardsSection /></div>
    <section class="team-why">
      <div class="team-container">
        <p>Best place for work</p>
        <h2>Why Reputation House</h2>
        <h3>
          A place where clear goals, real ownership and a product we're proud of
          come together
        </h3>
        <div>
          <article v-for="reason in reasons" :key="reason.number">
            <span>{{ reason.number }}</span>
            <h4>{{ reason.title }}</h4>
            <p>{{ reason.text }}</p>
          </article>
        </div>
      </div>
    </section>
    <section id="openings" class="team-openings">
      <div class="team-container">
        <h2>Current openings</h2>
        <p>All positions are updated automatically from our careers portal</p>
        <SiteLink href="https://reputation.zohorecruit.com/jobs/Careers"
          >Open Roles</SiteLink
        >
      </div>
    </section>
    <section class="team-faq">
      <div class="team-container">
        <h2>Frequently Asked Question</h2>
        <QuestionList :questions="questions" />
      </div>
    </section>
    <div
      v-if="selectedPerson"
      class="team-modal"
      role="presentation"
      @click.self="selectedPerson = null"
    >
      <div role="dialog" aria-modal="true" :aria-label="selectedPerson.name">
        <button
          class="team-modal__close"
          aria-label="Close profile"
          @click="selectedPerson = null"
        >
          ×</button
        ><img :src="selectedPerson.image" :alt="selectedPerson.name" />
        <div>
          <h2>{{ selectedPerson.name }}</h2>
          <strong>{{ selectedPerson.role }}</strong>
          <p>
            {{
              selectedPerson.bio ||
              `${selectedPerson.name} is part of the international Reputation House team.`
            }}
          </p>
          <span class="team-person__place"
            ><img :src="`/images/flag-${selectedPerson.flag}.svg`" alt="" />{{
              selectedPerson.place
            }}</span
          >
        </div>
      </div>
    </div>
  </main>
</template>
