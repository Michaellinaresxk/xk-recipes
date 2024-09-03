<script setup lang="ts">
import { defineComponent, ref, defineEmits } from 'vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
defineComponent({
  name: 'RecipeForm'
})

const emit = defineEmits<{
  (e: 'handleSubmit', payload: { title: string; description: string; ingredients: string[] }): void
}>()

const recipe = ref({
  title: '',
  description: '',
  ingredients: []
})

const newIngredient = ref('')

const handleSubmit = () => {
  if (!recipe.value.title || !recipe.value.description || !recipe.value.ingredients) {
    return
  }
  emit('handleSubmit', recipe.value)
  recipe.value.title = ''
  recipe.value.description = ''
  newIngredient.value = ''
}

const addIngredient = () => {
  if (newIngredient.value.trim() !== '') {
    recipe.value.ingredients.push(newIngredient.value.trim())
    newIngredient.value = ''
  }
}
</script>

<template>
  <v-sheet class="mx-auto mt-10" width="300">
    <v-form fast-fail>
      <v-text-field v-model="recipe.title" label="Title"></v-text-field>

      <v-textarea clearable label="Description" v-model="recipe.description"></v-textarea>
      <v-text-field
        v-model="newIngredient"
        label="Ingredients"
        @keyup.enter.prevent="addIngredient"
      ></v-text-field>
      <div class="mb-10">
        <v-chip
          v-for="(ingredient, index) in recipe.ingredients"
          :key="index"
          class="ma-1"
          color="primary"
          variant="tonal"
        >
          {{ ingredient }}
        </v-chip>
      </div>
      <div class="primaryButtonContent">
        <PrimaryButton
          :handleClick="handleSubmit"
          variantColor="flat"
          bgColor="primary"
          text="Create a new  recipe"
        />
      </div>
    </v-form>
  </v-sheet>
</template>

<style>
.primaryButtonContent {
  display: flex;
  justify-content: center;
}
</style>
