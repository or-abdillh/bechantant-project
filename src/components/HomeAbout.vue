<template>
  <main id="about" class="mt-16">
    <section-title title="About Bekantan Hamox" subtitle="Don't know then don't love, let us introduce this project"></section-title>
    <!-- About -->
    <section class="mt-8 md:mt-10 flex flex-col md:items-center md:gap-4 lg:gap-6 md:justify-between">
      <!-- Ilustration -->
      <div class="w-full md:w-4/12 mb-4 md:mb-0 relative" data-aos="zoom-in-up">
        <img src="https://drive.google.com/uc?id=15lhRWdqNb6TcWgu0K9UCIdl8dVedE74L&export=download" alt="Bekantan Hamox" class="border-b-2 border-gray-400 rounded-full w-10/12 mx-auto md:w-full shadow-lg" />
      </div>
      <!-- Contents -->
      <div class="text-gray-200 lg:w-10/12" data-aos="zoom-in-up">
        <h1 class="text-indigo-400 font-medium text-xl mb-3 md:text-center">The Our Future</h1>
        <div class="w-full md:flex justify-between gap-3">
          <p class="mb-4 md:w-6/12">Did you know that currently the habitat and survival of the proboscis monkey in South Kalimantan <strong>is increasingly threatened by the ego and lust of a group of humans</strong> in dredging up the wealth of the island of Borneo, Borneo without knowing and caring about the endemic animal of South Borneo.</p>
          <p class="md:w-6/12">Bekantan hamox comes with <strong>modern and educative innovations</strong> through the <strong>Metaverse and NFT platforms</strong> that allow the wider community to help maintain and restore the habitat and survival of proboscis monkeys and by <strong>not forgetting to bring elements of the culture</strong> of the Banjar community that are thick from generation to generation.</p>
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
