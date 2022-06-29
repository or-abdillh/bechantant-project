<template>
  <main data-aos="zoom-in-up" class="mt-12 p-6 md:px-12 py-16 rounded-lg bg-indigo-700 grid place-items-center text-center">
    <section class="md:w-8/12 mx-auto flex flex-col gap-4" data-aos="zoom-in-up">
      <h1 class="font-antic-slab text-gray-300 text-xl md:text-2xl font-bold">
        Are You Ready To Share And Build Something Great With Us ?
      </h1>
      <!-- Comunity -->
      <section class="w-full flex justify-center">
        <div class="w-6/12 flex">
          <img 
            src="/profiles/male.jpg" 
            class="rounded-full border border-gray-300 w-[25%] translate-x-2">
          <img 
            src="/profiles/female.jpg" 
            class="rounded-full border border-gray-300 w-[25%] z-20">
          <img 
            src="/tiers/level-3.png" 
            class="rounded-full border border-gray-300 w-[25%] -translate-x-3 z-30">
          <img 
            src="/tiers/level-1.png" 
            class="rounded-full border border-gray-300 w-[25%] -translate-x-6 z-30">
          <span class="block grid place-items-center text-gray-200 font-medium text-lg -translate-x-4">
            100+
          </span>
        </div>
      </section>
      <!-- CTA -->
      <section class="mt-3">
        <button class="border border-gray-300 px-3 py-2 rounded-lg text-gray-300">Join Our Community</button>
      </section>
    </section>
  </main>
</template>

<script setup>

const overlaps = [
  'translate-x-3', '-translate-x-1', '-translate-x-5'
]

const createTranslate = val => `-translate-x-[${val}rem]`

</script>
