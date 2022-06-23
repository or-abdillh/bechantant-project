<template>
  <main>
    <template v-for="list in 4" :key="list">
      <section 
        :class="list % 2 === 0 ? 'md:flex-row-reverse md:text-right pr-2 md:pr-8' : 'md:flex-row pl-2 md:pl-8'"
        class="flex md:gap-8 items-center flex-col mb-6 rounded-lg">
        <!-- Thumbnail -->
        <span class="w-4/12 md:w-2/12">
          <img src="/tiers/elite.jpg" alt="Tier Elite" class="border border-gray-300 rounded-full mb-2">
        </span>
        <!-- Contents -->
        <div>
          <h1 class="font-antic-slab text-indigo-500 font-bold text-lg">Tier Elite</h1>
          <small class="text-gray-400">Have 100 Bekantan Hamox NFT's</small>
          <ul class="text-gray-300">
            <li>Id, consequat id, lobortis nec, <i class="fa-solid fa-check text-indigo-500 mx-2"></i></li>
            <li>Id, consequat id, lobortis nec, <i class="fa-solid fa-check text-indigo-500 mx-2"></i></li>
            <li>Id, consequat id, lobortis nec, <i class="fa-solid fa-check text-indigo-500 mx-2"></i></li>
            <li>Id, consequat id, lobortis nec, <i class="fa-solid fa-check text-indigo-500 mx-2"></i></li>
          </ul>
        </div>
      </section>
    </template>
  </main>
</template>
