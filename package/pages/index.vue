<script setup lang="ts">
import { ref } from "vue";
import TheSalesOverview from "@/components/dashboard/TheSalesOverview.vue";
import BlogCard from "@/components/dashboard/BlogCard.vue";
import TheProfileCard from '@/components/dashboard/TheProfileCard.vue';
import TheMyContacts from '@/components/dashboard/TheMyContacts.vue';
import TheActivityTimeline from '@/components/dashboard/TheActivityTimeline.vue'
</script>

<template>
  <v-row>
    <!---SalesOverview--->
    <v-col cols="12" sm="12" lg="12">
      <TheSalesOverview />
    </v-col>
    <!---Blog Card--->
    <v-col cols="12" sm="12" lg="12">
      <BlogCard />
    </v-col>
  </v-row>
</template>
