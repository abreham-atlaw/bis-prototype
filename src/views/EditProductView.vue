<script lang="ts">
import { ProgramUpdateLevel } from 'typescript';
import { defineComponent, ref } from 'vue';

interface Ingredient{
    name: string,
    quantity: number,
    unit: str
}

export default defineComponent({

    data(){

        let allIngredients = [
            {
                name: "Flour",
                unit: "kgs"
            },
            {
                name: "Vegetable Oil",
                unit: "ltr"
            },
            {
                name: "Sugar",
                unit: "kgs"
            },
            {
                name: "Egg",
                unit: "unit"
            },
            {
                name: "Milk",
                unit: "ltr"
            },
            {
                name: "Butter",
                unit: "kgs"
            }
        ]


        let productIngredents = ref<Ingredient[]>([
            {
                name: "Flour",
                quantity: 0.01,
                unit: "kgs"
            },
            {
                name: "Vegetable Oil",
                quantity: 0.02,
                unit: "ltr"
            },
            {
                name: "Sugar",
                quantity: 0.03,
                unit: "kgs"
            },
            {
                name: "Egg",
                quantity: 3,
                unit: "unit"
            },
        ])

        return {
            productIngredents,
            allIngredients,
            productName: "Muffins"
        }

    },


    methods:{

        newIngredient(){
            this.productIngredents.push({
                name: "",
                quantity: 1,
                unit: "kgs"
            })
        },

        removeIngredient(idx: number){
            this.productIngredents = this.productIngredents.filter((_, i) => i !== idx);
        },

        getUnit(ingredient: string): string{
            return this.allIngredients.filter((i) => i.name === ingredient)[0].unit;
        },

        perUnit(value: number): number{
            const places = 2;
            return Math.round(1*(10**places)/value)/(10**places);
        }

    }

})

</script>

<template>

    <div class="">
        <h3 class="text-3xl">{{ productName }} Ingredients</h3>

        <div class="flex flex-wrap mt-10">
            <div v-for="ingredient, i in productIngredents" :key="i" class="mr-auto">

                <div class="mt-4">
                    <div
                      class="w-full max-w-sm overflow-hidden bg-white border rounded-md shadow-md"
                    >
                      <form @submit.prevent="">
                        <div
                          class="flex items-center justify-between px-5 py-3 text-gray-700 border-b"
                        >
                          <h3 class="text-sm">
                            {{ ingredient.name }}
                          </h3>
                          <button @click="() => removeIngredient(i)">
                            <svg
                              class="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                        
                        <div class="px-5 py-2 text-gray-700 bg-blue-100 border-b">
                            <label class="text-xs">Ingredient</label>
              
                            <div class="relative mt-2 rounded-md shadow-sm">
                              <span
                                class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
                              >
                                <svg
                                  class="w-6 h-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                  />
                                </svg>
                              </span>
              
                              <select
                              v-model="ingredient.name"
                              @change="(value) => {ingredient.unit = getUnit(ingredient.name)}"
                                type="text"
                                class="w-full bg-gray-100 px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                              >
                                <option v-for="rawIngredient, i in allIngredients" :value="rawIngredient.name" :key="i" :selected="ingredient.name == rawIngredient.name">
                                    {{ rawIngredient.name }}
                                </option>
    
                              </select>
                            </div>
                  
      
                          </div>
    
                        <div class="px-5 py-6 text-gray-700 bg-blue-100 border-b">
                          <label class="text-xs">Quantity ({{ingredient.unit}})</label>
            
                          <div class="relative mt-2 rounded-md shadow-sm">
                            <span
                              class="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600"
                            >
                              <svg
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                                />
                              </svg>
                            </span>
            
                            <input
                            v-model="ingredient.quantity"
                              type="text"
                              class="w-full px-12 py-2 border-transparent rounded-md appearance-none focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                            >
                          </div>
                
    
                        </div>

                        <div class="px-5 py-6 text-gray-700 bg-blue-100 border-b">
                            <label class="text-xs">Per Unit ( {{ingredient.unit}})</label>
              
                            <div class="relative mt-2 rounded-md shadow-sm">
                              {{ perUnit(ingredient.quantity) }} {{ productName }} per 1 {{ ingredient.unit }} {{ ingredient.name }}
                            </div>
                  
      
                          </div>
            
                      </form>
                    </div>
                  </div>
    
            </div>
        </div>   

        
        <div class="flex">
            <button @click="newIngredient" class="mr-10 mt-10 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                
                <span class="mx-1">Add Ingredient</span>
              </button>
              <a href="/ingredients" class="mt-10 flex items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
                
                <span class="mx-1">Save</span>
                </a>
        </div>
       
    </div>

</template>