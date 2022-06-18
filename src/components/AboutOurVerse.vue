<style scoped>

@keyframes floating-motion {
  from {
    transform: translateY(-5%);
  } 45% {
    transform: translateY(-7%);
  } 75% {
    transform: translateY(-3%);
  } 85% {
    transform: translateY(0);
  } to {
    transform: translateY(-2%);
  }
}

.floating-motion {
  animation: floating-motion 5.5s ease-in-out infinite;
}
</style>

<template>
  <main class="mt-12">
    <sub-section-title align="start" title="Wasaka Town, 2055, Indonesia" subtitle="Welcome to our verse, your new journey start here"></sub-section-title> 
    <!-- Content -->
    <section class="flex flex-wrap justify-between gap-5">
      <template v-for="item in 4" :key="item">
        <p class="inline-block md:w-[45%] text-gray-200">Quam. Nunc ante. Nulla mi nulla, <strong>vehicula nec, ultrices a</strong>, tincidunt vel, enim. Suspendisse potenti. Aenean sed velit. Nunc.</p>
      </template>
    </section>
    <!-- Ilustration -->
    <img class="w-full mt-6 mx-auto border border-gray-400" src="/verse/town.png" alt="Floating Town">
  </main>
</template>

<script setup>

import SubSectionTitle from '@component/SubSectionTitle.vue'

</script>
