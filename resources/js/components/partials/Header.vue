<template>
    <header class="min-h-10 bg-blue-600 flex justify-between items-center">
        <h1 class="text-4xl ml-6 text-white">Project2</h1>
        <ul class="flex">
            <li class="mr-6" v-if="authenticated">
                <router-link :to="{name:'dashboard'}" class="text-blue-300 hover:text-white">Dashboard</router-link>
            </li>
            <li class="mr-6" v-if="authenticated">
                <router-link :to="{name:'projects'}" class="text-blue-300 hover:text-white">Projects</router-link>
            </li>
            <li class="mr-6" v-if="!authenticated">
                <router-link :to="{name:'login'}" class="text-blue-300 hover:text-white">Login</router-link>
            </li>
            <li class="mr-6" v-if="authenticated">
                <a href="#" class="text-blue-300 hover:text-white" @click="handleLogout()">Logout</a>
            </li>

        </ul>
    </header>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    name: "Header",
    computed: {
/*        authenticated() {
            return this.$store.state.authenticated;
        }*/
        ...mapGetters([
           "authenticated"
        ])
    },
    methods: {
        async handleLogout() {
            await this.$store.dispatch('logout');
            await this.$router.push({name: 'login'});
        }
    },

}
</script>

<style scoped>

</style>
