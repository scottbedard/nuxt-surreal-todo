<template>
  <div class="flex items-center min-h-screen  p-6">
    <div class="max-w-md mx-auto w-full">
      <h1 class="font-thin mb-6 text-6xl text-center tracking-wide">
        Todos
      </h1>

      <div class="bg-white overflow-hidden rounded-md shadow-xl">
        <div
          v-for="todo in todos"
          class="border-b border-gray-300 flex h-16 items-center justify-between pl-6 pr-4">
          {{ todo.description }}

          <button
            class="p-2 hover:text-red-500"
            title="Delete"
            @click="onDelete(todo.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <form @submit.prevent="onCreate">
          <input
            v-model="input"
            class="h-16 outline-none px-6 w-full"
            placeholder="What do you need to do?" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useFetch(`/api/todos`)

const todos = ref(data.value?.todos ?? [])

const input = ref('')

async function onCreate() {
  const res = await $fetch('/api/todos', {
    body: { description: input.value },
    method: 'post',
  })

  if (res.todo) {
    todos.value.push(res.todo)

    input.value = ''
  }
}

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