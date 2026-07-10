<script setup>
import { computed, onMounted, onBeforeUnmount, ref } from 'vue';
import { useHead } from '@vueuse/head';
import GalaxyCanvas from './components/GalaxyCanvas.vue';
import NavBar from './components/NavBar.vue';
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import TimelineSection from './components/TimelineSection.vue';
import ContactSection from './components/ContactSection.vue';

const siteUrl = 'https://github.com/rizwan-asghar-dev/rizwan-asghar.git';
const profileImage = `${siteUrl}profile-pic.jpeg`;
const cvUrl = `${siteUrl}rizwan-developer.pdf`;
const githubUrl = 'https://github.com/rizwan-asghar-dev';
const linkedInUrl = 'https://www.linkedin.com/in/muhammad-rizwan-php-laravel-developer/';
const description =
  'Muhammad Rizwan is a Full Stack Developer building Laravel, MERN, Vue.js, Node.js, API, dashboard, and production web applications.';

const sectionMeta = {
  '#home': {
    title: 'Muhammad Rizwan | Full Stack Developer',
    description,
  },
  '#about': {
    title: 'About Muhammad Rizwan | Full Stack Developer',
    description: 'Learn about Muhammad Rizwan, a Full Stack Developer specializing in Laravel, Vue.js, MERN, APIs, dashboards, and maintainable web products.',
  },
  '#projects': {
    title: 'Projects by Muhammad Rizwan | Laravel, MERN, Vue.js',
    description: 'Explore production projects by Muhammad Rizwan, including Laravel platforms, Vue.js interfaces, booking systems, dashboards, APIs, and business tools.',
  },
  '#skills': {
    title: 'Skills | Muhammad Rizwan Full Stack Developer',
    description: 'Technical skills for Muhammad Rizwan: Laravel, PHP, Vue.js, React, Node.js, Express, MERN, MySQL, MongoDB, Firebase, REST APIs, and Git.',
  },
  '#experience': {
    title: 'Experience | Muhammad Rizwan',
    description: 'Professional full stack development experience for Muhammad Rizwan across freelance builds, business applications, APIs, dashboards, and web platforms.',
  },
  '#contact': {
    title: 'Contact Muhammad Rizwan | Full Stack Developer',
    description: 'Contact Muhammad Rizwan for full stack development work involving Laravel, Vue.js, MERN, dashboards, APIs, and production web applications.',
  },
  '#resume': {
    title: 'Resume | Muhammad Rizwan CV',
    description: 'Download the CV of Muhammad Rizwan, Full Stack Developer specializing in Laravel, MERN, Vue.js, Node.js, APIs, and web applications.',
  },
};

const currentHash = ref(typeof window === 'undefined' ? '#home' : window.location.hash || '#home');
const activeMeta = computed(() => sectionMeta[currentHash.value] || sectionMeta['#home']);

function updateHash() {
  currentHash.value = window.location.hash || '#home';
}

onMounted(() => {
  window.addEventListener('hashchange', updateHash);
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', updateHash);
});

useHead(
  computed(() => ({
    title: activeMeta.value.title,
    meta: [
      { name: 'description', content: activeMeta.value.description },
      { name: 'author', content: 'Muhammad Rizwan' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'googlebot', content: 'index, follow, max-image-preview:large' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:site_name', content: 'Muhammad Rizwan Portfolio' },
      { property: 'og:title', content: activeMeta.value.title },
      { property: 'og:description', content: activeMeta.value.description },
      { property: 'og:url', content: siteUrl },
      { property: 'og:image', content: profileImage },
      { property: 'og:image:alt', content: 'Muhammad Rizwan Full Stack Developer' },
      { property: 'profile:first_name', content: 'Jahanzaib' },
      { property: 'profile:last_name', content: 'Zafar' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: activeMeta.value.title },
      { name: 'twitter:description', content: activeMeta.value.description },
      { name: 'twitter:image', content: profileImage },
      { name: 'twitter:image:alt', content: 'Muhammad Rizwan Full Stack Developer' },
    ],
    link: [
      { rel: 'canonical', href: siteUrl },
      { rel: 'me', href: githubUrl },
      { rel: 'me', href: linkedInUrl },
      { rel: 'author', href: linkedInUrl },
    ],
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${siteUrl}#jahanzaib-zafar`,
          name: 'Muhammad Rizwan',
          givenName: 'Jahanzaib',
          familyName: 'Zafar',
          jobTitle: 'Full Stack Developer',
          url: siteUrl,
          image: profileImage,
          email: 'mailto:rizwandnp266@gmail.com',
          description,
          knowsAbout: ['Laravel', 'MERN Stack', 'Vue.js', 'Node.js', 'React', 'PHP', 'REST APIs', 'MySQL', 'MongoDB'],
          sameAs: [githubUrl, linkedInUrl, siteUrl],
          mainEntityOfPage: siteUrl,
          hasCredential: {
            '@type': 'CreativeWork',
            name: 'Muhammad Rizwan CV',
            url: cvUrl,
          },
        }),
      },
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${siteUrl}#website`,
          name: 'Muhammad Rizwan Portfolio',
          url: siteUrl,
          description,
          publisher: {
            '@id': `${siteUrl}#jahanzaib-zafar`,
          },
        }),
      },
    ],
  })),
);
</script>

<template>
  <GalaxyCanvas />
  <NavBar />
  <main>
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <SkillsSection />
    <TimelineSection />
    <section id="resume" class="resume section-shell">
      <div class="resume-card glass-card">
        <div>
          <span class="eyebrow">Resume</span>
          <h2 class="section-title">Muhammad Rizwan <em>CV</em></h2>
          <p>
            Download the CV for Muhammad Rizwan, Full Stack Developer specializing in Laravel, MERN, Vue.js, Node.js,
            REST APIs, dashboards, and production web applications.
          </p>
        </div>
        <a class="btn primary" :href="cvUrl" download="rizwan-developer.pdf">Download CV</a>
      </div>
    </section>
    <ContactSection />
  </main>
  <footer class="site-footer">
    <a href="#home" aria-label="Back to top">JZ</a>
    <p>Crafted with precision by Muhammad Rizwan</p>
    <div class="footer-socials">
      <a href="https://github.com/rizwan-asghar-dev" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/muhammad-rizwan-php-laravel-developer/" target="_blank" rel="noreferrer">LinkedIn</a>
      <a :href="cvUrl" download="rizwan-developer.pdf">Download CV</a>
      <a href="https://www.upwork.com/freelancers/~016f49da46aa1df5fe" target="_blank" rel="noreferrer">Upwork</a>
    </div>
    <span>(c) 2026 Muhammad Rizwan. All rights reserved.</span>
  </footer>
</template>
