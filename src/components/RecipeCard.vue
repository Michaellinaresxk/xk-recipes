<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'RecipeCard'
})

defineProps<{
  title: string
  description: string
  ingredients: string[]
}>()
</script>

<template>
  <div class="recipeCard mt-10">
    <v-card class="mx-auto my-12" max-width="374">
      <v-card-item>
        <v-card-title>{{ title }}</v-card-title>

        <v-card-subtitle>
          <span class="me-1">Local Favorite</span>

          <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
        </v-card-subtitle>
      </v-card-item>

      <v-card-text>
        <v-row align="center" class="mx-0">
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            size="small"
            half-increments
            readonly
          ></v-rating>
        </v-row>

        <div class="mt-10">
          {{ description }}
        </div>
      </v-card-text>

      <v-divider class="mx-4 mb-1"></v-divider>

      <v-card-title>Ingredients:</v-card-title>

      <div class="px-4 mb-2">
        <v-chip
          color="primary"
          class="mr-2 mt-2"
          v-for="(ingredient, index) in ingredients"
          :key="index"
        >
          {{ ingredient }}
        </v-chip>
      </div>

      <v-card-actions>
        <v-btn color="primary" text="Read More" block border></v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
