<script setup lang="ts">
import type { WorkHistoryItem } from '../types';

type Props = Omit<WorkHistoryItem, 'id'>;

defineProps<Props>()
</script>

<template>
  <li>
    <span>{{ company }} | {{ jobTitle }} | {{ location }} | {{ dateRange }}</span>
    <ul>
      <li>{{ description }}</li>
    </ul>
  </li>
</template>
