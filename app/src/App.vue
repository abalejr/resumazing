<script setup lang="ts">
import WorkHistory from './components/WorkHistory.vue';
import AcademicQualification from './components/AcademicQualification.vue';
import ProfessionalExperience from './components/ProfessionalExperience.vue';
import TechnologyProficiencies from './components/TechnologyProficiencies.vue';
import PersonalPassions from './components/PersonalPassions.vue';
</script>

<template>
  <header>
    <h1>A.J. Bale</h1>
    <p>Allen Henry Bale, Jr.</p>
    <p>87 Locust Ave. Neptune City, NJ 07753</p>
    <p><a href="mailto:abalejr@gmail.com" target="_blank">abalejr@gmail.com</a> | <a href="tel:+18482204958">(848)
        220-4958</a></p>
  </header>

  <main>
    <WorkHistory />
    <AcademicQualification />
    <ProfessionalExperience />
    <TechnologyProficiencies />
    <PersonalPassions />
  </main>
</template>
