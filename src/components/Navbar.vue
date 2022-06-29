<style scoped>
a {
  user-select: none;
}
</style>

<template>
  <!-- Navigation Bar -->
  <main class="navbar">
    <section class="navbar-brand">
      <!-- Brand -->
      <div class="flex items-center gap-3">
        <img src="/icons/icon-152x152.png" class="w-[10%]" alt="Hamox NFT">
        <h1 class="text-indigo-300 text-xl font-semibold lg:text-3xl">Bekantan Hamox</h1>
      </div>
      <!-- Toggle -->
      <button @click="showMenu = true" class="active:scale-90 duration-300 md:hidden" type="button">
        <i class="fa-solid fa-bars-staggered text-slate-100 text-2xl"></i>
      </button>
    </section>
    <!-- Menu -->
    <section :class="showMenu ? 'right-0' : '-right-full'" class="navbar-menu">
      <ul class="navbar-list">
        <!-- Close toggle -->
        <span @click="showMenu = false" class="md:hidden">
          <i class="fa fa-times text-slate-100"></i>
        </span>
        <!-- Menu list -->
        <template v-for="(menu, x) in menus" :key="x">
          <li
            class="text-slate-200 hover:scale-[.9] active:scale-[.75] font-medium pointer duration-300">
            <a
              class="hover:scale-[.9] active:scale-[.75] duration-300"
              @click="navigate(menu.to)"
            >{{ menu.name }}</a>
          </li>
        </template>
        <!-- Social media mobile -->
        <li
          class="md:hidden w-full flex justify-between gap-2 mt-5 text-gray-100 text-center rounded-lg"
        >
        <template v-for="item in socials" :key="item.name">
          <a :href="item.url" class="text-gray-200">
              <i class="fa-brands" :class="'fa-' + item.name"></i>
            </a>
          </template>
        </li>
      </ul>
      <!-- Social Media Desktop -->
      <section class="w-3/12 hidden md:block text-slate-600 rounded-lg">
        <div class="flex justify-between">
          <template v-for="item in socials" :key="item.name">
            <a class="block flex text-gray-200" :href="item.url">
              <i class="fa-brands text-xl" :class="'fa-' + item.name"></i>
            </a>
          </template>
        </div>
      </section>
    </section>
  </main>
</template>

<style scoped>
.navbar {
  @apply z-40 md:flex md:items-center md:justify-between md:px-6 md:py-5 lg:px-10 w-full bg-gray-900 fixed top-0 left-0 right-0 px-5 lg:py-8 py-3;
}

.navbar-brand {
  @apply flex items-center justify-between md:gap-3;
}

.navbar-menu {
  @apply w-5/12 md:w-8/12 duration-300 fixed md:relative flex justify-between md:items-center top-0 bottom-0 bg-gray-800 bg-opacity-75 backdrop-blur-md md:bg-opacity-0 px-5 lg:px-0 pt-12 md:pt-0;
}

.navbar-list {
  @apply flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-10 lg:text-xl;
}
</style>

<script setup>
import { ref } from "vue";

const emits = defineEmits("changeMenu");

const showMenu = ref(false);
const viewport = ref(window.innerWidth); //Get current width of browser

if (viewport.value >= 768) showMenu.value = true; //If device tablet or more wider shoow menu

const changeMenu = (menu) => {
  emits("changeMenu", menu.to);
};

const menus = [
  {
    name: "Home",
    to: "#app",
  },
  {
    name: "About",
    to: "#about",
  },
  {
    name: "Roadmap",
    to: "#roadmap"
  },
  {
    name: "Teams",
    to: "#teams"
  }
]

const navigate = target => {
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' })
}

const socials = [
  {
    name: 'telegram',
    url: 'https://telegram.com'
  },
  {
    name: 'twitter',
    url: 'https://twitter.com'
  },
  {
    name: 'discord',
    url: 'https://discord.com'
  },
  {
    name: 'instagram',
    url: 'https://instagram.com'
  }
]
</script>
