 <template>
   <main id="roadmap" class="mt-16">
     <section-title title="Roadmap" subtitle="This is our long journey as the Core Team of the Bekantan Hamox Project"></section-title>
    <!-- Contents --> 
    <section class="mt-6 flex flex-wrap justify-between">
      <template v-for="(map, x) in Roadmaps" :key="x">
        <!-- Card -->
        <section class="p-4 w-full md:w-[30%] border-t-4 border-gray-700 rounded-lg bg-gray-800 bg-opacity-25 hover:bg-opacity-75 duration-300 mb-5" data-aos="zoom-in-up">
          <h1 class="text-3xl text-gray-200">{{ "0" + ( x + 1 ) }}</h1>
          <p class="text-indigo-400 mt-3">{{ map.isPassed ? 'Passed' : 'Coming Soon' }}</p>
          <p class="text-gray-300 mt-3">{{ map.content }}</p>
        </section>
      </template>
    </section>
   </main>
 </template>

<script setup>

import SectionTitle from '@component/SectionTitle.vue'
import Roadmaps from '@content/Roadmaps.js'

</script>
