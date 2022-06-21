<template>
  <main class="mt-12">
    <sub-section-title align="end" title="Wasaka Town, 2055, Indonesia" subtitle="Welcome to our verse, your new journey start here"></sub-section-title> 
    <!-- Caraousels -->
    <Splide class="mb-6" :options="{ rewind: true, autoplay: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img class="rounded-lg" src="/verse/town.png" alt="Sample 1">
      </SplideSlide>
      <SplideSlide>
        <img class="rounded-lg" src="/verse/town.png" alt="Sample 2">
      </SplideSlide>
    </Splide>
    <!-- Content -->
    <section class="flex flex-wrap justify-between gap-5">
      <template v-for="item in 4" :key="item">
        <p class="inline-block md:w-[48%] text-gray-200">Quam. Nunc ante. Nulla mi nulla, <strong>vehicula nec, ultrices a</strong>, tincidunt vel, enim. Suspendisse potenti. Aenean sed velit. Nunc. Tristique senectus et netus et malesuada fames ac turpis egestas. <strong>Praesent lacus diam, auctor quis</strong>, venenatis in, hendrerit at.</p>
      </template>
    </section>
  </main>
</template>

<script setup>

import { Splide, SplideSlide } from '@splidejs/vue-splide'
import SubSectionTitle from '@component/SubSectionTitle.vue'
import '@splidejs/vue-splide/css'

</script>
