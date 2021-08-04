<template>
    <div class="p-4 m-4 bg-white rounded flex flex-col">
        <div class="flex justify-between">
            <h1 class="text-2xl text-gray-700">Projects</h1>
            <button @click="showForm = true" class="bg-gray-500 rounded text-white px-3 py-2 hover:bg-gray-700">Add Project</button>
        </div>

        <div class="flex justify-center" v-show="showForm">
            <project-form @cancel-form="showForm = false" @project-added="fetchProjects()"></project-form>

        </div>
        <div class="justify-center flex">
            <table class="table-auto justify-center">
                <thead>
                <tr>
                    <th class="border px-4 py-2">ID</th>
                    <th class="border px-4 py-2">Name</th>
                    <th class="border px-4 py-2">Tasks</th>
                    <th class="border px-4 py-2">Actions</th>
                </tr>
                </thead>
                <tbody>
                <ProjectItem v-for="project in projects" :key="project.id" :project="project" @project-deleted="fetchProjects"></ProjectItem>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import ProjectItem from "./ProjectItem";
import ProjectForm from "./ProjectForm";
export default {
    components: {
        ProjectItem,
        ProjectForm
    },
    name: "Projects",
    data() {
        return {
            projects: [],
            showForm: false,
        }
    },
    mounted() {
        this.fetchProjects();
    },
    methods: {
        fetchProjects() {
            this.showForm = false;
            axios.get('api/projects').then( (res) => {
                this.projects = res.data.data;
            });
        }
    }
}
</script>

<style scoped>

</style>
