<template>
  <main class="mt-12">
    <sub-section-title align="end" title="Our Featured Creators" subtitle="Meet the best creatives and imaginers this week"></sub-section-title>
    <!-- Contents -->
    <section class="flex gap-3 flex-col md:flex-row justify-between md:flex-wrap">
      <template v-for="item in creators" :key="item">
        <!-- List Wrapper -->
        <section class="w-full md:w-[48%] flex gap-3 px-5 py-3 rounded-lg bg-slate-800 bg-opacity-25 backdrop-blur-sm justify-between items-center border border-gray-700" data-aos="zoom-in-up">
          <!-- Profile -->
          <div class="w-3/12">
            <img :src="item.thumb" alt="Profile" class="w-full rounded-lg" loading="lazy">
          </div>
          <!-- Stats -->
          <div class="w-6/12 text-gray-200 flex flex-col gap-2">
            <h1 class="font-bold">{{ item.name }}</h1>
            <div class="text-sm flex gap-2 flex-wrap">
              <!-- Tiers -->
              <span>
                <i class="fa-solid fa-crown text-yellow-300"></i>
                {{ item.tier }}
              </span>
              <!-- Currency -->
              <span>
                <i class="fa-brands fa-ethereum text-slate-500"></i>
                {{ item.eth }}
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

const creators = [
  {
    name: 'OR Abdillh',
    thumb: '/profiles/male.jpg',
    tier: 'Grand Master',
    eth: '0.145'
  },
  {
    name: 'Rifqi Rahman',
    thumb: '/profiles/male.jpg',
    tier: 'Grand Master',
    eth: '0.111'
  }, 
  {
    name: 'Mina Fitria',
    thumb: '/profiles/female.jpg',
    tier: 'Master',
    eth: '0.101'
  },
  {
    name: 'Julia Syahisti',
    thumb: '/profiles/female.jpg',
    tier: 'Elite',
    eth: '0.0045'
  },
  {
    name: 'Rizqa Aulia',
    thumb: '/profiles/female.jpg',
    tier: 'Elite',
    eth: '0.0025'
  }, 
  {
    name: 'Surya Insomnia',
    thumb: '/profiles/male.jpg',
    tier: 'Elite',
    eth: '0.0010'
  }
]

</script>
