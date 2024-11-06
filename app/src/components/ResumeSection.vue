<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <slot></slot>
  </section>
</template>
