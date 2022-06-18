<template>
  <!-- Navigation Bar -->
  <navbar></navbar>
  <!-- Main Container -->
  <main class="md:w-10/12 lg:w-9/12 xl:w-8/12 md:mx-auto min-h-screen pt-20 md:pt-32 px-10 pb-10">
    <home-landing></home-landing>
    <home-about></home-about>
  </main>
  <!-- back to top -->
  <back-to-top-button></back-to-top-button>
</template>

<script setup>

import HomeLanding from '@component/HomeLanding.vue'
import HomeAbout from '@component/HomeAbout.vue'
import Navbar from '@component/Navbar.vue'
import BackToTopButton from '@component/BackToTopButton.vue'

</script>
