<template>
  <main>
    <template v-for="list in Tiers" :key="list">
      <section 
        :class="list.id % 2 === 0 ? 'md:flex-row-reverse md:text-right pr-2 md:pr-8' : 'md:flex-row pl-2 md:pl-8'"
        class="flex md:gap-8 items-center justify-evenly flex-col mb-8 md:mb-12 rounded-lg">
        <!-- Thumbnail -->
        <span class="w-4/12 md:w-3/12 mb-3 md:mb-0" data-aos="zoom-in-up">
          <img :src="list.img" alt="Tier Elite" class="border border-gray-400 shadow-lg rounded-full md:w-[95%]" loading="lazy">
        </span>
        <!-- Contents -->
        <div class="/text-center">
          <h1 class="font-antic-slab text-gray-100 font-bold text-lg" data-aos="zoom-in-up">Tier {{ list.name }}</h1>
          <small class="text-gray-400" data-aos="zoom-in-up">Have {{ list.amount }} Bekantan Hamox NFT's</small>
          <ul class="text-gray-300">
            <template v-for="check in list.checks" :key="check">
              <li 
                data-aos="zoom-in-up"
                :class="list.id % 2 === 0 ? 'md:flex-row-reverse' : ''"
                class="flex gap-1 items-center"><i class="fa-solid fa-check text-gray-300 mx-2"></i>{{ check }}</li>
            </template>
          </ul>
        </div>
      </section>
    </template>
  </main>
</template>

<script setup>

import Tiers from '@content/Tiers.js'

</script>
