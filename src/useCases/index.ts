// src/services/RecipeService.ts
import { CreateRecipe } from '@/useCases/CreateRecipe'
import { GetRecipes } from '@/useCases/GetRecipes'

export class RecipeService {
  async createRecipe(title: string, description: string, ingredients: string[]) {
    return await CreateRecipe(title, description, ingredients)
  }

  async getRecipes() {
    return await GetRecipes()
  }
}
