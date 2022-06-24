<template>
  <main>
    <template v-for="list in 4" :key="list">
      <section 
        :class="list % 2 === 0 ? 'md:flex-row-reverse md:text-right pr-2 md:pr-8' : 'md:flex-row pl-2 md:pl-8'"
        class="flex md:gap-8 items-center justify-evenly flex-col mb-8 md:mb-12 rounded-lg">
        <!-- Thumbnail -->
        <span class="w-4/12 md:w-3/12 md:mb-0">
          <img src="/nft-asset-2.jpg" alt="Tier Elite" class="border border-gray-300 rounded-full md:w-[85%]">
        </span>
        <!-- Contents -->
        <div>
          <h1 class="font-antic-slab text-gray-100 font-bold text-lg">Tier Elite</h1>
          <small class="text-gray-400">Have 100 Bekantan Hamox NFT's</small>
          <ul class="text-gray-300">
            <template v-for="check in 4" :key="check">
              <li 
                :class="list % 2 === 0 ? 'md:flex-row-reverse' : ''"
                class="flex gap-1 items-center"><i class="fa-solid fa-check text-gray-300 mx-2"></i> Idle, consequat id, lobortis nec</li>
            </template>
          </ul>
        </div>
      </section>
    </template>
  </main>
</template>
