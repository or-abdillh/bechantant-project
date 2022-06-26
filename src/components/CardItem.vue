<template>
  <main class="bg-gray-200 border border-gray-300 flex flex-col rounded-lg overflow-hidden" data-aos="zoom-in-up">
    <!-- Image -->
    <section class="relative" data-aos="zoom-in-up">
      <img :src="props.img" :alt="props.title" loading="lazy">
      <!-- Overlay Banner -->
      <div v-if="useOverLayer" class="flex justify-between px-3 py-2 bg-gray-600 bg-opacity-50 backdrop-blur-sm absolute bottom-3 left-3 right-3 text-gray-100 text-xs">
        <!-- Price -->
        <div>
          <small>Price item</small>
          <p>{{ props.price }}ETH</p>
        </div>
       <!-- Release -->
        <div>
          <small>Release Date</small>
          <p>{{ props.releaseDate }}</p>
        </div>
      </div>
    </section>
    <!-- Description -->
    <section class="p-3 text-gray-700 flex justify-between text-sm">
      <div>
        <strong>{{ props.artist }}</strong>
        <p>{{ props.title }}</p>
      </div>
      <div v-if="useButtonCTA">
        <button class="bg-indigo-500 text-gray-100 px-4 py-2 rounded-xl text-sm flex items-center gap-1">
          Get
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>

const props = defineProps({
  img: {
    type: String,
    default: '/nft-asset-2.jpg'
  },
  price: {
    type: Number,
    default: 0.019
  }, 
  title: {
    type: String,
    default: 'Abstract Ball'
  },
  artist: {
    type: String,
    default: 'John Doe'
  },
  releaseDate: {
    type: String,
    default: '11/7/2022'
  },
  useOverLayer: {
    type: Boolean,
    default: true
  },
  useButtonCTA: {
    type: Boolean,
    default: true
  }
})

</script>
