<script setup lang="ts">


import ResumeSection from './ResumeSection.vue';
import type { Passion } from '../types'

console.log('query the last 4 work history items')
const passions: Passion[] = [
  {
    id: 1,
    title: 'Sustainability',
  },
  {
    id: 2,
    title: 'Social Justice',
  },
  {
    id: 3,
    title: 'Food',
  },
  {
    id: 4,
    title: 'Education',
  },
  {
    id: 5,
    title: 'Travel',
  },
  {
    id: 6,
    title: 'Health & Wellness',
  },
  {
    id: 7,
    title: 'Entrepreneurship',
  },
  {
    id: 8,
    title: 'Accessibility',
  },
]

</script>

<template>

  <ResumeSection :title="'Passions'">
    <p>{{ passions.map(({ title }) => title).join(', ') }}</p>
  </ResumeSection>

</template>
