<script setup lang="ts">

import WorkHistoryItem from './WorkHistoryItem.vue';
import ResumeSection from './ResumeSection.vue';
import type { WorkHistoryItem as WorkHistoryItemType } from '../types'

console.log('query the last 4 work history items')
const workHistoryItems: WorkHistoryItemType[] = [
  {
    id: 1,
    company: 'Shopify',
    jobTitle: 'Developer',
    location: 'Remote',
    dateRange: 'June 2022 - October 2024',
    description: `Develop/Edit/Debug interfaces and frontend architecture primarily using React
      and referencing designs in Figma; Established as subject matter expert on React Router on
      my team; Engineer prompts for learning skills and composing code using GitHub Copilot,
      Cursor, and OpenAI APIs; Edit/Debug APIs using Rails; Use Git and GitHub for version control;
      Review coworkers' PRs; Write public-facing documentation for features and APIs.
    `
  },
  {
    id: 2,
    company: 'The Right Way (now Myntr.io)',
    jobTitle: 'Front-End Developer',
    location: 'Remote',
    dateRange: 'September 2021 - May 2022',
    description: `Develop/Edit/Debug Shopify and WordPress themes primarily using Preact;
      Established and documented version control workflow using Git and GitHub; Review coworkers’
      PRs; Document new features and bug fixes; Configure build tools and dev workflow tools.
    `
  },
  {
    id: 3,
    company: 'King & Partners',
    jobTitle: 'Web Developer',
    location: 'Remote',
    dateRange: 'August 2020 - September 2021',
    description: `Develop/Edit/Debug Shopify and WordPress themes primarily using Vue; Build
      pages/modules from Figma and Zeplin mockups; Established as subject matter expert on
      accessibility; Use Git and GitHub for version control; Review coworkers’ PRs; Document new
      features and bug fixes. I was the lead developer for goodamerican.com and a contributing
      developer for thevampireswife.com, deeocleppo.com, patricianashdesigns.com, and
      twinstarhome.com among others
    `
  },
  {
    id: 4,
    company: 'Black & Black ',
    jobTitle: 'Web Developer',
    location: 'Remote',
    dateRange: 'August 2019 - February 2020',
    description: `Develop/Edit/Debug Shopify and WordPress themes, templates, plugins, fields,
      functions, etc. to extend or add to the functionality and/or design of client sites; Build
      pages from XD and Zeplin mockups; Use Git and GitHub for version control; Implement Continuous
      Integration and own the development workflow; Document new features and bug fixes; Communicate
      with clients about project scope
    `
  },
]

</script>

<template>

  <ResumeSection :title="'Work History'">
    <ul>
      <WorkHistoryItem v-for="workHistoryItem in workHistoryItems" :key="workHistoryItem.id"
        :company="workHistoryItem.company" :job-title="workHistoryItem.jobTitle" :location="workHistoryItem.location"
        :date-range="workHistoryItem.dateRange" :description="workHistoryItem.description" />
    </ul>
  </ResumeSection>

</template>
