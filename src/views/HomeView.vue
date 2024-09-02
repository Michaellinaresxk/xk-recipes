<script setup lang="ts">
import { ref } from "vue";
import RecipeForm from "@/components/RecipeForm.vue"
import PrimaryButton from '@/components/PrimaryButton.vue';

const handleFormSubmit = (payload) => {
  console.log(payload)
}

const isVisible = ref(false);

const showForm = () => {
  isVisible.value = !isVisible.value
}


</script>

<template>
  <main>
    <h1 >Xk-recipes</h1>
    <PrimaryButton  bgColor="primary" @click="showForm"  text="Add  recipe" />
    <div v-if="isVisible">

      <RecipeForm  @handleSubmit="handleFormSubmit" />
    </div>

  </main>
</template>
