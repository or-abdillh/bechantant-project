<template>
  <main class="mt-12">
    <sub-section-title align="start" title="Wasaka Town, 2055, Indonesia" subtitle="Welcome to our verse, your new journey start here"></sub-section-title> 
    <!-- Ilustration -->
    <img class="w-full rounded-lg my-6 mx-auto border border-gray-400" src="/verse/town.png" alt="Floating Town">
    <!-- Content -->
    <section class="flex flex-wrap justify-between gap-5">
      <template v-for="item in 4" :key="item">
        <p class="inline-block md:w-[48%] text-gray-200">Quam. Nunc ante. Nulla mi nulla, <strong>vehicula nec, ultrices a</strong>, tincidunt vel, enim. Suspendisse potenti. Aenean sed velit. Nunc. Tristique senectus et netus et malesuada fames ac turpis egestas. <strong>Praesent lacus diam, auctor quis</strong>, venenatis in, hendrerit at.</p>
      </template>
    </section>
  </main>
</template>

<script setup>

import SubSectionTitle from '@component/SubSectionTitle.vue'

</script>
