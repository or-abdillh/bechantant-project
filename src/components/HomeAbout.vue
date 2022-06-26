<template>
  <main class="mt-16">
    <section-title title="About Bekantan Hamox"></section-title>
    <!-- About -->
    <section class="mt-8 md:mt-10 flex flex-col md:items-center md:gap-4 lg:gap-6 md:justify-between">
      <!-- Ilustration -->
      <div class="w-full md:w-4/12 mb-4 md:mb-0 relative" data-aos="zoom-in-up">
        <!-- Blur effect -->
        <span class="block p-16 rounded-full absolute top-5 -left-3 bg-indigo-600 blur-xl z-[-9]"></span>
        <img src="/icons/icon-512x512.png" alt="Bekantan Hamox" class="border-b-2 border-gray-400 rounded-full w-full shadow-lg" />
      </div>
      <!-- Contents -->
      <div class="text-gray-200 lg:w-10/12" data-aos="zoom-in-up">
        <h1 class="text-indigo-400 font-medium text-xl mb-3 md:text-center">The Our Future</h1>
        <div class="w-full md:flex justify-between gap-3">
          <p class="mb-4 md:w-6/12">At, mollis vitae, faucibus quis, leo. Ut feugiat. Vivamus urna quam, congue vulputate, convallis non, cursus cursus, risus. Quisque aliquet. Donec. Mollis velit. Sed vitae metus. Morbi posuere mi id odio. Donec elit sem, tempor at, pharetra eu, sodales sit amet, elit. Curabitur urna tellus, aliquam vitae, ultrices eget, <strong>vehicula nec, diam. Integer elementum, felis non faucibus</strong>.</p>
          <p class="md:w-6/12">Imperdiet id, sapien. Phasellus auctor nunc. Vivamus eget augue quis neque vestibulum placerat. Duis placerat. Maecenas accumsan rutrum lacus. Vestibulum lacinia. Eget, pretium ut, sapien. Suspendisse potenti. In hac habitasse <strong>platea dictumst.</strong> Cras quis lacus. Vestibulum rhoncus congue.</p>
        </div>
        <!-- Learn More -->
        <button class="px-4 py-2 text-sm rounded-lg bg-indigo-700 text-gray-100 mt-4"><i class="fa-solid fa-users mr-2"></i> Learn More About Our Project</button>
      </div>
    </section>
    <!-- About Our Verse -->
    <about-our-verse></about-our-verse>
    <!-- About Our Heroes -->
    <about-our-heroes></about-our-heroes>
    <!-- Featured Creators -->
    <about-featured-creators></about-featured-creators>
    <!-- About Our Tiers -->
    <about-our-tiers></about-our-tiers>
  </main>
</template>

<script setup>

import SectionTitle from '@component/SectionTitle.vue'
import AboutOurVerse from '@component/AboutOurVerse.vue'
import AboutOurHeroes from '@component/AboutOurHeroes.vue'
import AboutOurTiers from '@component/AboutOurTiers.vue'
import AboutFeaturedCreators from '@component/AboutFeaturedCreators.vue'

</script>
