<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="mx-auto border shadow-2xl p-10 w-fit">
      <h1 class="font-bold text-center text-2xl">Login to dashboard</h1>
      <form class="my-10 flex flex-col gap-y-5" @submit.prevent="handleSubmit">
        <input
          v-model="username"
          class="border p-2"
          type="text"
          placeholder="Username"
        />
        <input
          v-model="password"
          class="border p-2"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          class="border py-2 bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const username = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log('Username:', username.value)
      console.log('Password:', password.value)
    }

    return {
      username,
      password,
      handleSubmit,
    }
  },
})
</script>
