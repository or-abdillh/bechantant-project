<template>
  <main class="mt-12">
    <sub-section-title align="start" title="They Are Our Heroes" subtitle="Introducing our main Andaira Village saviors"></sub-section-title>
    <!-- Contents -->
    <section class="mt-6 flex md:gap-5 gap-2 justify-between flex-wrap md:flex-nowrap">
      <template v-for="card in heroes" :key="card">
        <card-item :use-button-CTA="false" :use-over-layer="false" :img="card.thumb" title="Andaira Saviors" :artist="card.name" class="w-[46%] mb-2 md:mb-0 md:w-4/12"></card-item>
      </template>
    </section>
    <!-- Quotes -->
    <section class="mt-6 md:w-8/12 mx-auto" data-aos="zoom-in-up">
      <h1 class="font-antic-slab text-2xl font-medium text-gray-200 text-center">
        <i class="fa-solid fa-quote-left"></i>
        They are only fictional characters, but their passion and philosophy are real
        <i class="fa-solid fa-quote-right"></i>
      </h1>
    </section>
  </main>
</template>

<script setup>

import SubSectionTitle from '@component/SubSectionTitle.vue'
import CardItem from '@component/CardItem.vue'

const heroes = [
  {
    name: 'Bechant',
    thumb: '/tiers/level-4.png'
  },
  {
    name: 'Thantant',
    thumb: '/tiers/level-3.png'
  },
  {
    name: 'Anank',
    thumb: '/tiers/level-2.png'
  },
  {
    name: 'Aloeh',
    thumb: '/tiers/level-1.png'
  },
]

</script>
