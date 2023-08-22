<template>
  <div class="flex items-center min-h-screen  p-6">
    <div class="max-w-md mx-auto w-full">
      <h1 class="font-thin mb-6 text-6xl text-center">
        Todos
      </h1>

      <div class="bg-white p-6 rounded-md shadow-xl">
        <pre class="text-xs">{{ data }}</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch(`/api/todos`)
</script>