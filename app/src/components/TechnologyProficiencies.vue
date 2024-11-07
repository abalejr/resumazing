<script setup lang="ts">


import ResumeSection from './ResumeSection.vue';
import type { Proficiency } from '../types'

console.log('query the last 4 work history items')
const proficiencies: Proficiency[] = [
  {
    id: 1,
    title: 'HTML5',
    score: 5
  },
  {
    id: 2,
    title: 'CSS3',
    score: 5
  },
  {
    id: 3,
    title: 'JS',
    score: 5
  },
  {
    id: 4,
    title: 'TypeScript',
    score: 4
  },
  {
    id: 5,
    title: 'React',
    score: 5
  },
  {
    id: 6,
    title: 'Vue',
    score: 4
  },
  {
    id: 7,
    title: 'Preact',
    score: 4
  },
  {
    id: 8,
    title: 'Remix',
    score: 3
  },
  {
    id: 9,
    title: 'Python',
    score: 3
  },
  {
    id: 10,
    title: 'PHP',
    score: 3
  },
  {
    id: 11,
    title: 'Ruby',
    score: 3
  },
  {
    id: 12,
    title: 'Git',
    score: 5
  },
  {
    id: 13,
    title: 'GraphQL',
    score: 5
  },
  {
    id: 14,
    title: 'REST',
    score: 5
  },
  {
    id: 15,
    title: 'Postgres',
    score: 2
  },
]

</script>

<template>

  <ResumeSection id="proficiency" :title="'Language, Framework, & Tool Proficiencies (out of 5)'">
    <div class="flex">
      <div class="proficiency" v-for="proficiency in proficiencies" :key="proficiency.id">
        {{ proficiency.title }}<br />{{ proficiency.score }}
      </div>
    </div>
  </ResumeSection>

</template>
