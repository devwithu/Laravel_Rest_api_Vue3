<template>
    <div>
        This is coming from Dashboard.vue
        {{ user }}
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
      return {
          user: [],
      }
    },
    mounted() {
        axios.get('/api/user')
        .then(res => {
            this.user = res.data;
        })
    }
}
</script>

<style scoped>

</style>
