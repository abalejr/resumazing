<script setup lang="ts">


import ResumeSection from './ResumeSection.vue';
import type { AcademicQualification } from '../types'

console.log('query the last 4 work history items')
const academicQualifications: AcademicQualification[] = [
  {
    id: 1,
    school: 'High Technology High School',
    location: 'Lincroft, NJ',
    graduationYear: 2010,
  },
]

</script>

<template>

  <ResumeSection :title="'Academic Qualification'">
    <ul>
      <li v-for="academicQualification in academicQualifications" :key="academicQualification.id">
        {{ academicQualification.school }} | {{ academicQualification.location }} | {{ `Class of
        ${academicQualification.graduationYear}` }}
      </li>
    </ul>
  </ResumeSection>

</template>
