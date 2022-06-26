 <template>
   <main class="mt-16">
    <section-title title="Roadmap"></section-title>
    <!-- Contents --> 
    <section class="mt-6 flex flex-wrap justify-between">
      <template v-for="list in 6" :key="list">
        <!-- Card -->
        <section class="p-4 w-full md:w-[30%] border-t-4 border-gray-700 rounded-lg bg-gray-800 bg-opacity-25 hover:bg-opacity-75 duration-300 mb-5" data-aos="zoom-in-up">
          <h1 class="text-3xl text-gray-200">{{ "0" + list }}</h1>
          <p class="text-gray-300 mt-6">
            At, <strong>sagittis id, lacinia eget</strong>, tellus. Nunc consequat pede et nulla.
            In faucibus orci <strong>luctus et ultrices</strong> posuere cubilia Curae; Duis imperdiet.
          </p>
        </section>
      </template>
    </section>
   </main>
 </template>

<script setup>

import SectionTitle from '@component/SectionTitle.vue'

</script>
