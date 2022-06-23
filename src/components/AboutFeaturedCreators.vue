<template>
  <main class="mt-12">
    <sub-section-title align="end" title="Our Featured Creators" subtitle="Meet the best creatives and imaginers this week"></sub-section-title>
    <!-- Contents -->
    <section class="flex gap-3 flex-col md:flex-row justify-between md:flex-wrap">
      <template v-for="item in 6" :key="item">
        <!-- List Wrapper -->
        <section class="w-full md:w-[48%] flex gap-3 px-5 py-3 rounded-lg bg-slate-800 bg-opacity-25 backdrop-blur-sm justify-between items-center border border-gray-700">
          <!-- Profile -->
          <div class="w-3/12">
            <img src="/nft-asset-4.jpg" alt="Profile" class="w-full rounded-lg">
          </div>
          <!-- Stats -->
          <div class="w-6/12 text-gray-200 flex flex-col gap-2">
            <h1 class="font-bold">Jonathan Doe</h1>
            <div class="text-sm">
              <!-- Tiers -->
              <span>
                <i class="fa-solid fa-crown text-yellow-300"></i>
                Elite
              </span>
              <!-- Currency -->
              <span>
                <i class="fa-brands fa-ethereum text-slate-500"></i>
                0.045
              </span>
            </div>
          </div>
          <!-- Direct link -->
          <div>
            <i class="fa-solid fa-up-right-from-square text-gray-400"></i>
          </div>
        </section>
      </template>
    </section>
  </main>
</template>

<script setup>

import SubSectionTitle from '@component/SubSectionTitle.vue'

</script>
