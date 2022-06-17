<style scoped>

.btn {
  @apply w-full px-3 py-2 rounded-lg font-medium;
}

.blur-circle {
  @apply rounded-full blur-xl bg-opacity-50 absolute;
  z-index: -9;
}

</style>

<template>
  <main class="flex flex-col md:flex-row">
    <!-- Tagline -->
    <section class="w-full md:w-6/12">
      <h1 class="text-gray-50 text-3xl font-antic-slab font-medium mb-2">A Greatest NFT Become From Indonesia, This Is Bekantan NFT</h1>
      <p class="text-gray-300 text-lg">Nunc eu mi non augue iaculis facilisis. Morbi interdum. Donec nisi arcu, rhoncus ac, vestibulum ut, pellentesque nec, risus.</p>
      <!-- CTA -->
      <section class="flex gap-6 my-8">
        <button class="btn bg-indigo-600 text-gray-100">
          <i class="fa-solid fa-store"></i>
          Buy Now
        </button>
        <button class="btn border border-indigo-500 text-indigo-500">Explore</button>
      </section>
      <!-- Stats -->
      <section class="flex justify-between gap-3 bg-slate-800 bg-opacity-50 backdrop-blur-md p-2 rounded-lg">
        <template v-for="(stat, x) in stats" :key="x">
          <div class="flex flex-col items-center w-full text-gray-400 w-3/12">
            <strong class="text-indigo-400 text-xl">{{ stat.value }}<small>{{ stat.subfix }}</small></strong>
            <small class="text-sm">{{ stat.name }}</small>
          </div>
        </template>
      </section>
    </section>
    <!-- Ilustration -->
    <section class="w-full">
      <!-- blur effects -->
      <section class="relative">
        <div class="p-20 bg-indigo-500 blur-circle -top-full left-5"></div>
        <div class="p-16 bg-pink-500 blur-circle left-3 md:left-0 md:-right-full"></div>
      </section>
    </section>
  </main>
</template>

<script setup>

const stats = [
  {
    name: 'Arts',
    value: 300,
    subfix: ''
  },
  {
    name: 'Artists',
    value: 20,
    subfix: '',
  },
  {
    name: 'Solds',
    value: 32,
    subfix: 'k'
  },
  {
    name: 'Members',
    value: 12,
    subfix: 'k'
  }
]

</script>
