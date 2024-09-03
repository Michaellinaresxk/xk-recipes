<script setup lang="ts">
import { ref } from 'vue'
import RecipeForm from '@/components/RecipeForm.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import RecipeCard from '@/components/RecipeCard.vue'

const isVisible = ref(false)

const showForm = () => {
  isVisible.value = !isVisible.value
}

const recipesList = ref([])

const handleFormSubmit = (payload: {
  title: string
  description: string
  ingredients: string[]
}) => {
  recipesList.value.push({ ...payload })
  isVisible.value = false
}
</script>

<template>
  <main>
    <h1>Xk-recipes</h1>
    <PrimaryButton bgColor="primary" @click="showForm" text="Add  recipe" variantColor="flat" />
    <div v-if="isVisible">
      <RecipeForm @handleSubmit="handleFormSubmit" />
    </div>
    <v-container v-for="(recipe, index) in recipesList" :key="index">
      <v-row no-gutters>
        <v-col cols="12">
          <RecipeCard
            :title="recipe.title"
            :description="recipe.description"
            :ingredients="recipe.ingredients"
          />
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>
