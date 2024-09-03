<script setup lang="ts">
import { ref, onMounted } from 'vue'
import RecipeForm from '@/components/RecipeForm.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { collection, getDocs } from '@firebase/firestore'
import { db } from '../apis/firebaseConfig'

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

const getRecipes = async () => {
  if (!db) {
    throw new Error('Firestore instance or userId is undefined!')
  }
  try {
    const recipesCollection = collection(db, 'recipes')
    const querySnapshot = await getDocs(recipesCollection)

    return querySnapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() }
    })
  } catch (error) {
    console.error('Error fetching playlists:', error)
    throw error
  }
}

onMounted(async () => {
  try {
    const fetchedRecipes = await getRecipes()
    recipesList.value = fetchedRecipes // Guardar las recetas en la variable reactiva
  } catch (error) {
    console.error('Error fetching recipes:', error)
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
