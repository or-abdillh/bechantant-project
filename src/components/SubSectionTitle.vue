<template>
  <main class="w-full flex mb-6" :class="align === 'start' ? 'flex-row' : 'flex-row-reverse text-right'">
    <section class="w-8/12">
      <h1 class="font-antic-slab text-xl fomt-semibold text-indigo-300">{{ props.title }}</h1>
      <small class="text-xs text-gray-200">{{ props.subtitle }}</small>
    </section>
  </main>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'This is a title'
  }, 
  subtitle: {
    type: String, 
    default: 'Consectetuer ut, metus. Phasellus dui purus, vehicula sed, venenatis.'
  }, 
  align: {
    type: String,
    default: 'start' // or 'end'
  }
})

</script>
