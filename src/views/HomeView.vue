<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecipeForm from '@/components/RecipeForm.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { RecipeService } from '@/useCases/index'

const recipeService = new RecipeService()

const isVisible = ref(false)

const showForm = () => {
  isVisible.value = !isVisible.value
}

const recipesList = ref([])

const handleFormSubmit = async (payload: {
  title: string
  description: string
  ingredients: string[]
}) => {
  try {
    const newRecipe = await recipeService.createRecipe(
      payload.title,
      payload.description,
      payload.ingredients
    )
    recipesList.value.push(newRecipe)
    isVisible.value = false
  } catch (error) {
    console.error('Error al crear la receta:', error)
  }
}

onMounted(async () => {
  try {
    const fetchedRecipes = await recipeService.getRecipes()
    recipesList.value = fetchedRecipes
  } catch (error) {
    console.error('Error al obtener las recetas:', error)
  }
})
</script>

<template>
  <main>
    <div class="header">
      <h1 class="title">Xk-recipes</h1>
      <PrimaryButton
        class="mt-10"
        bgColor="primary"
        @click="showForm"
        text="Add  recipe"
        variantColor="flat"
      />
    </div>
    <div v-if="isVisible">
      <RecipeForm @handleSubmit="handleFormSubmit" />
    </div>
    <v-container>
      <v-row justify="center" align="center">
        <v-col v-for="(recipe, index) in recipesList" :key="index" cols="12" sm="6" md="4" lg="3">
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
<style scoped>
.header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 3em;
}
.v-container {
  display: flex;
  justify-content: center;
}
</style>
