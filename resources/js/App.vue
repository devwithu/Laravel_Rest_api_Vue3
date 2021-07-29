<template>
    <div class="flex flex-col h-screen justify-between">
        <AppHeader></AppHeader>
        <main class="flex-grow bg-blue-100">
            <router-view></router-view>
        </main>
        <app-footer></app-footer>

    </div>
</template>

<script>
import AppHeader from "./components/partials/Header.vue";
import AppFooter from "./components/partials/Footer";
export default {
    name: "ExampleComponent",
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<style scoped>

</style>
