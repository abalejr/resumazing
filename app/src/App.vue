<script setup lang="ts">
import WorkHistory from './components/WorkHistory.vue';
import AcademicQualification from './components/AcademicQualification.vue';
</script>

<template>
  <header>
    <h1>A.J. Bale</h1>
    <h3>Allen Henry Bale, Jr.</h3>
    <h3>87 Locust Ave. Neptune City, NJ 07753</h3>
    <h3><a href="mailto:abalejr@gmail.com" target="_blank">abalejr@gmail.com</a> | <a href="tel:+18482204958">(848)
        220-4958</a></h3>
  </header>

  <main>
    <WorkHistory />
    <AcademicQualification />
    <!-- <ProfessionalExperience /> -->
    <!-- <Proficiencies /> -->
    <!-- <Passions /> -->
  </main>
</template>
