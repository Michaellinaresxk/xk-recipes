<script setup lang="ts">
import { defineComponent } from 'vue';
defineComponent({
  name: 'PrimaryButton',
});

defineProps<{
  text: String,
  bgColor: String,
  handleClick?: Function,
  variantColor: string,
}>()


</script>

<template>
    <v-btn  @click="handleClick" :color="bgColor" size="small" :variant="variantColor">{{text}}</v-btn>
</template>

<style>
</style>
