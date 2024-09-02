<script setup lang="ts">
import { defineComponent } from 'vue';

defineComponent({
  name: 'RecipeList',
});

defineProps<{
  title: string,
  description: string,
  ingredients: string[]
}>()


</script>

<template>
  <div class="recipeCard">
    <h4>{{ title }}</h4>
  </div>
</template>

<style>
</style>
