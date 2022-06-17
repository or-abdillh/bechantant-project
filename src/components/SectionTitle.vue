<template>
  <main class="w-full md:text-center">
    <h1 class="text-3xl font-medium text-indigo-400">{{ props.title }}</h1>
    <small class="text-gray-300">{{ props.subtitle }}</small>
  </main>
</template>

<script setup>

const props = defineProps({
  title: {
    type: String,
    default: 'This is Section Title'
  },
  subtitle: {
    type: String,
    default: 'Ut consectetuer leo vehicula augue. Aliquam cursus. Integer pharetra rhoncus massa. Cras et.'
  }
})

</script>
