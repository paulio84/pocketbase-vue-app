<script setup lang="ts">
import { useTheme } from "@/composables/useTheme"

const { theme, toggleTheme } = useTheme()
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200 flex items-center justify-center p-4"
  >
    <div
      class="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center"
    >
      <!-- Theme toggle button -->
      <div class="flex jusitfy-end mb-4">
        <button
          aria-label="Toggle theme"
          class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          @click="toggleTheme"
        >
          <span v-if="theme === 'light'">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>

      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Pocketbase Vue App
      </h1>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        A modern authentication app built with Vue 3, TypeScript, and Pocketbase
      </p>
      <div class="space-y-3">
        <button
          class="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 hover:cursor-pointer transition"
        >
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>
