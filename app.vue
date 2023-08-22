<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>

<script lang="ts" setup>
const { data, pending, error, refresh } = await useFetch(`/api/todos`)
</script>