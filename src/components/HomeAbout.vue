<template>
  <main class="mt-16">
    <section-title title="About Bekantan Hamox"></section-title>
    <!-- About -->
    <section class="mt-8 md:mt-10 flex flex-col md:flex-row md:justify-between">
      <!-- Ilustration -->
      <div class="w-full md:w-4/12 mb-4 md:mb-0 relative">
        <!-- Blur effect -->
        <span class="block p-16 rounded-full absolute top-5 -left-3 bg-indigo-600 blur-xl z-[-9]"></span>
        <img src="/nft-asset-3.jpg" alt="Bekantan Hamox" class="border border-gray-500 rounded-full w-full" />
      </div>
      <!-- Contents -->
      <div class="md:w-7/12 text-gray-200">
        <h1 class="text-indigo-400 font-medium text-xl">The Our Future</h1>
        <p class="mb-4">At, mollis vitae, faucibus quis, leo. Ut feugiat. Vivamus urna quam, congue vulputate, convallis non, cursus cursus, risus. Quisque aliquet. Donec.</p>
        <p>Imperdiet id, sapien. Phasellus auctor nunc. Vivamus eget augue quis neque vestibulum placerat. Duis placerat. Maecenas accumsan rutrum lacus. Vestibulum lacinia. Eget, pretium ut, sapien.</p>
        <!-- Join Our Community -->
        <button class="px-4 py-2 text-sm rounded-lg bg-indigo-700 text-gray-100 mt-4"><i class="fa-solid fa-users mr-2"></i> Join Our Community</button>
      </div>
    </section>
    <!-- About Our Verse -->
    <about-our-verse></about-our-verse>
    <!-- About Our Heroes -->
    <about-our-heroes></about-our-heroes>
  </main>
</template>

<script setup>

import SectionTitle from '@component/SectionTitle.vue'
import AboutOurVerse from '@component/AboutOurVerse.vue'
import AboutOurHeroes from '@component/AboutOurHeroes.vue'

</script>
