<template>
    <div class="mb-2 p-2 bg-blue-300 grid grid-cols-3" :class="{'bg-gray-500' : task.priority == 'High'}">
        <div class="flex items-center">{{ task.name }}</div>
        <div class="flex items-center justify-center">{{ task.due_date }}</div>
        <div class="flex items-center">
            <button @click="editTask(task.id)" class="bg-gray-500 rounded text-white px-3 py-2 hover:bg-gray-700">Edit</button>
            <button @click="deleteTask(task.id)" class="bg-red-500 rounded text-white px-3 py-2 hover:bg-red-700">Delete</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "TaskItem",
    props: ['task'],
    methods: {
        deleteTask(id) {
            this.$emit('delete-task',id);
        },
        editTask(id) {
            this.$emit('edit-task', id);
        }
    }
}
</script>

<style scoped>

</style>
