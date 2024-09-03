// src/useCases/CreateRecipe.ts
import { collection, addDoc } from '@firebase/firestore'
import { db } from '@/apis/firebaseConfig'

export const CreateRecipe = async (title: string, description: string, ingredients: string[]) => {
  const recipeData = {
    title,
    description,
    ingredients
  }

  const recipeRef = await addDoc(collection(db, 'recipes'), recipeData)

  return {
    id: recipeRef.id,
    ...recipeData
  }
}
