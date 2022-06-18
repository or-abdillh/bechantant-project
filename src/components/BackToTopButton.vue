<template>
  <button 
    v-if="isVisible"
    @click="toTopPage"
    class="lg:hidden duration-300 fixed right-3 bottom-5 py-2 px-3 border border-gray-400 bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg">
    <i class="fa-solid fa-circle-chevron-up text-indigo-500 text-lg"></i>
  </button>
</template>

<script setup>

import { ref } from 'vue'

const isVisible = ref(false)

const toTopPage = () => { document.getElementById('app').scrollIntoView({ behavior: 'smooth' }) }

window.addEventListener('scroll', () => {
  if ( window.scrollY > 200 ) isVisible.value = true
  else isVisible.value = false
})


</script>
