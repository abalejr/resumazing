<script setup lang="ts">
import type { WorkHistoryItem } from '../types';

type Props = Omit<WorkHistoryItem, 'id'>;

defineProps<Props>()
</script>

<template>
  <li>
    <p class="work-history-headline"><span>{{ company }}</span> | {{ jobTitle }} | {{ location }} | {{ dateRange }}</p>
    <ul>
      <li>{{ description }}</li>
    </ul>
  </li>
</template>
