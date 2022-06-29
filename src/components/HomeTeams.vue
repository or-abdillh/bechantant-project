<template>
  <main id="teams">
    <section-title title="Our Teams" subtitle="Introduce the core team behind the scenes of Bechantan Hamox"></section-title>
    <!-- Contents -->
    <section class="flex flex-wrap gap-5 justify-evenly mt-12">
      <template v-for="team in teams" :key="team">
        <div class="flex flex-col items-center gap-4 w-[35%] md:w-[20%] mb-5" data-aos="zoom-in-up">
          <div>
            <img :src="team.thumb" :alt="team.name" class="rounded-full border border-gray-400" loading="lazy">
          </div>
          <div class="text-center">
            <h1 class="text-gray-200 text-lg">{{ team.name }}</h1>
            <small class="text-gray-500">{{ team.job }}</small>
            <span class="flex gap-2 text-indigo-500 justify-center mt-2">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-twitter"></i>
            </span>
          </div>
        </div>
      </template>
    </section>
  </main>
</template>

<script setup>

import SectionTitle from '@component/SectionTitle.vue'

const teams = [
  {
    name: 'OR Abdillh',
    job: 'Chief Technology Officer',
    thumb: '/profiles/male.jpg'
  },
  {
    name:'Rifqi Rahman',
    job: 'Chief Product Officer',
    thumb: '/profiles/male.jpg'
  },
  {
    name: 'Mina Fitria',
    job: 'Chief Finance Officer',
    thumb: '/profiles/female.jpg'
  },
  {
    name: 'Julia Syahisti',
    job: 'Chief Branding Officer',
    thumb: '/profiles/female.jpg'
  }, 
  {
    name: 'Jonh Doe',
    job: 'Officer',
    thumb: '/profiles/male.jpg'
  },
  {
    name: 'Jonh Doe',
    job: 'Officer',
    thumb: '/profiles/male.jpg'
  },
  {
    name: 'Jonh Doe',
    job: 'Officer',
    thumb: '/profiles/male.jpg'
  }
]

</script>
