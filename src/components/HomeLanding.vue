<style scoped>

.btn {
  @apply w-full px-3 py-2 rounded-lg font-medium;
}

.blur-circle {
  @apply rounded-full blur-xl bg-opacity-50 absolute;
  z-index: -9;
}

</style>

<template>
  <main id="home" class="flex flex-col md:flex-row justify-between gap-5 md:gap-0 py-4">
    <!-- Tagline -->
    <section class="w-full md:w-6/12 animate__animated animate__jello">
      <h1 class="text-gray-50 text-3xl font-antic-slab font-medium mb-2">A Greatest NFT Become From Indonesia, This Is Bekantan NFT</h1>
      <p class="text-gray-300 text-lg">
        Only here you can make a real contribution to the survival and habitat of proboscis monkeys through an educational and innovative digital platform
      </p>
      <!-- CTA -->
      <section class="flex gap-6 my-8">
        <button class="btn bg-indigo-600 text-gray-100">
          <i class="fa-solid fa-store"></i>
          Buy Now
        </button>
        <button class="btn border border-indigo-500 text-indigo-500">Explore</button>
      </section>
      <!-- Stats -->
      <section class="flex justify-between gap-3 bg-gray-800 bg-opacity-50 backdrop-blur-sm p-2 rounded-lg">
        <template v-for="(stat, x) in stats" :key="x">
          <div class="flex flex-col items-center w-full text-gray-400 w-3/12">
            <strong class="text-indigo-400 text-xl">{{ stat.value }}<small>{{ stat.subfix }}</small></strong>
            <small class="text-sm">{{ stat.name }}</small>
          </div>
        </template>
      </section>
    </section>
    <!-- Ilustration -->
    <section class="w-full md:w-4/12 mt-8 md:mt-0 animate__animated animate__jello">
      <!-- blur effects -->
      <section class="relative md:w-6/12">
        <div class="p-20 bg-indigo-500 blur-circle -top-full left-5"></div>
        <div class="p-16 bg-pink-500 blur-circle left-3 md:left-0 md:-right-full"></div>
      </section>
      <!-- Featured NFT -->
      <card-item class="w-9/12 mx-auto md:w-full" img="/featured-nft.png" title="The Great Bechant" artist="Rifqi Rahman"></card-item>
    </section>
  </main>
  <!-- Sponsors -->
  <section class="mt-6 py-6 w-full flex justify-around flex-wrap md:flex-nowrap md:gap-5">
    <template v-for="(sponsor, x) in sponsors" :key="x">
      <div class="w-[45%] md:w-full grid place-items-center mb-4 md:mb-0"><img :src="sponsor" class="md:w-full saturate-50" :alt="sponsor"></div>
    </template>
  </section>
</template>

<script setup>

import CardItem from '@component/CardItem.vue'
import 'animate.css'

const stats = [
  {
    name: 'Arts',
    value: 300,
    subfix: ''
  },
  {
    name: 'Artists',
    value: 20,
    subfix: '',
  },
  {
    name: 'Solds',
    value: 32,
    subfix: 'k'
  },
  {
    name: 'Members',
    value: 12,
    subfix: 'k'
  }
]

const sponsors = ['/sponsors/metaverse.png', '/sponsors/metamask.png', '/sponsors/etherum.png', '/sponsors/opensea.png', '/sponsors/solidity.png']

</script>
