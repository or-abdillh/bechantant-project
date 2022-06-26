<template>
  <!-- Navigation Bar -->
  <navbar></navbar>
  <!-- Main Container -->
  <main class="md:w-10/12 lg:w-9/12 xl:w-8/12 md:mx-auto min-h-screen pt-20 md:pt-32 px-10 pb-10">
    <home-landing></home-landing>
    <home-about></home-about>
    <home-roadmap></home-roadmap>
    <home-teams></home-teams>
    <join-our-community></join-our-community>
  </main>
  <!-- back to top -->
  <back-to-top-button></back-to-top-button>
  <!-- Footer -->
  <app-footer></app-footer>
</template>

<script setup>

import HomeLanding from '@component/HomeLanding.vue'
import HomeAbout from '@component/HomeAbout.vue'
import HomeRoadmap from '@component/HomeRoadmap.vue'
import HomeTeams from '@component/HomeTeams.vue'
import JoinOurCommunity from '@component/JoinOurCommunity.vue'
import Navbar from '@component/Navbar.vue'
import BackToTopButton from '@component/BackToTopButton.vue'
import AppFooter from '@component/AppFooter.vue'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init({
  offset: 120,
  delay: 100
})

</script>
