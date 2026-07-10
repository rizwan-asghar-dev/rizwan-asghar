<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const groups = [
  {
    title: 'Frontend',
    skills: [
      ['HTML5', 92],
      ['CSS3', 88],
      ['JavaScript', 86],
      ['JQuery', 90],
      ['Vue.js', 80],
    ],
  },
  {
    title: 'Backend',
    skills: [
      ['PHP', 86],
      ['Laravel', 84],
      ['REST APIs', 86],
      ['Payment Gateway', 86],
      ['Firebase', 80],
      ['Third Party Apis', 80],
    ],
  },
  {
    title: 'Database & Tools',
    skills: [
      ['MySQL', 88],
      ['MongoDB', 76],
      ['Firebase', 72],
      ['Git', 82],
      ['Optimize Queries', 88],
    ],
  },
];

onMounted(() => {
  gsap.from('.skills-title', {
    clipPath: 'inset(0 100% 0 0)',
    duration: 0.7,
    scrollTrigger: { trigger: '.skills-title', start: 'top 75%' },
  });
  gsap.utils.toArray('.skill-fill').forEach((bar) => {
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: bar, start: 'top 85%' },
      },
    );
  });
});
</script>

<template>
  <section id="skills" class="skills section-shell">
    <div class="section-kicker">
      <span class="eyebrow">Skills</span>
      <h2 class="section-title skills-title">Technical arsenal <em>mapped by strength</em></h2>
      <p>Technologies used to ship secure, scalable, and maintainable applications.</p>
    </div>
    <div class="skill-groups">
      <article v-for="group in groups" :key="group.title" class="skill-card glass-card">
        <h3>{{ group.title }}</h3>
        <div v-for="[name, value] in group.skills" :key="name" class="skill-row">
          <div class="skill-meta">
            <span>{{ name }}</span>
            <b>{{ value }}%</b>
          </div>
          <div class="skill-track">
            <span class="skill-fill" :style="{ width: `${value}%` }"></span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
