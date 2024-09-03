// src/useCases/GetRecipes.ts
import { collection, getDocs } from '@firebase/firestore'
import { db } from '@/apis/firebaseConfig'

export const GetRecipes = async () => {
  const recipesCollection = collection(db, 'recipes')
  const querySnapshot = await getDocs(recipesCollection)

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }))
}
