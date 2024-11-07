<script setup lang="ts">


import ResumeSection from './ResumeSection.vue';
import type { ProfessionalExperience } from '../types'

console.log('query the last 4 work history items')
const professionalExperiences: ProfessionalExperience[] = [
  {
    id: 1,
    experienceSummary: '6.5 years of front end & 3 years of back end experience',
  },
  {
    id: 2,
    experienceSummary: '7 years of sales & 2.5 years of management experience',
  },
]

</script>

<template>

  <ResumeSection :title="'Professional Experience'">
    <ul>
      <li v-for="professionalExperience in professionalExperiences" :key="professionalExperience.id">
        {{ professionalExperience.experienceSummary }}
      </li>
    </ul>
  </ResumeSection>

</template>
