<template>
    <header class="min-h-10 bg-blue-600 flex justify-between items-center">
        <h1 class="text-4xl ml-6 text-white">Project2</h1>
        <ul class="flex">
            <li class="mr-6">
                <router-link :to="{name:'dashboard'}" class="text-blue-300 hover:text-white">Dashboard</router-link>
            </li>
            <li class="mr-6">
                <router-link :to="{name:'projects'}" class="text-blue-300 hover:text-white">Projects</router-link>
            </li>
            <li class="mr-6">
                <router-link :to="{name:'login'}" class="text-blue-300 hover:text-white">Login</router-link>
            </li>
            <li class="mr-6">
                <a href="#" class="text-blue-300 hover:text-white">Logout</a>
            </li>

        </ul>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>

</style>
