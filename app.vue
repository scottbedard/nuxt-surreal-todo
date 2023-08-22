<template>
  <div class="flex items-center min-h-screen  p-6">
    <div class="max-w-md mx-auto w-full">
      <h1 class="font-thin mb-6 text-6xl text-center">
        Todos
      </h1>

      <div class="bg-white rounded-md shadow-xl">
        <div
          v-for="todo in todos"
          class="border-b border-gray-300 flex h-20 items-center justify-between px-6 last:border-b-0">
          {{ todo.id }}

          <button @click="onDelete(todo.id)">delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch(`/api/todos`)

const todos = ref(data.value?.todos ?? [])

async function onDelete(id: string) {
  const res = await $fetch('/api/todos', {
    body: { id },
    method: 'delete',
  })

  if (res.status === 'success') {
    todos.value = res.todos
  }
}
</script>