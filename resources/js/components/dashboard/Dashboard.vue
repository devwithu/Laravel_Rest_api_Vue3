<template>
    <div class="p-4 m-4 bg-white rounded flex">
        <div>

            <h1 class="text-2xl text-gray-700">Dashboard</h1>
            <p class="mt-4">
                Hello <span class="font-bold">{{ user.name }}</span>, Welcome to the dashboard, You have registerd with the email <span class="italic">{{ user.email }}</span>.
            </p>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laboriosam libero
                nesciunt nihil sed sit temporibus totam velit. Doloremque esse labore quod sequi veritatis. Facilis ipsa
                ipsam ipsum magnam maxime!</p>
            <p class="mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laboriosam libero
                nesciunt nihil sed sit temporibus totam velit. Doloremque esse labore quod sequi veritatis. Facilis ipsa
                ipsam ipsum magnam maxime!</p>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    name: "Dashboard",
    computed: {
        ...mapGetters([
            "user"
        ])
    }
}
</script>

<style scoped>

</style>
