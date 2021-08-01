<template>
    <div>
        This is coming from Dashboard.vue
        {{ user }}
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
