<template>
    <div>
        <form @submit.prevent="handleSunmit" class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="flex items-center mb-6">
                <div class="w-1/3">
                    <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="name">
                        Name
                    </label>
                </div>
                <div class="w-2/3">
                    <input
                        v-model="projectName"
                        id="name"
                        type="text"
                        class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700"

                    >
                </div>
            </div>
            <div class="flex items-center">
                <div class="w-1/3"></div>
                <div class="w-2/3">
                    <p v-show="errorMsg.length" class="mb-4 text-red-500 text-xs italic">{{ errorMsg }}</p>
                </div>
            </div>

            <div class="flex items-center">
                <div class="w-1/3"></div>
                <div class="w-2/3">
                    <button
                        class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white"
                        type="submit"
                    >
                        Save
                    </button>
                    <button
                        @click="cancelForm"
                        class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white"
                        type="button"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "ProjectEditForm",
    props: ['project'],
    data() {
        return {
            projectName: this.project.name,
            errorMsg: '',
        }
    },
    methods: {
        async handleSunmit() {

            try {
                const response = await axios.put('api/projects/' + this.project.id, {name: this.projectName});
                if (response.data.status == 'OK') {
                    this.name = '';
                    this.errorMsg = '';
                    this.$emit('project-edited');
                }
            } catch (e) {
                if (e.response.data.error.name[0].length > 0) {
                    this.errorMsg = e.response.data.error.name[0];
                }
            }
        },
        cancelForm() {
            this.projectName = '';
            this.errorMsg = '';
            this.$emit('cancel-form');
        }
    }
}
</script>

<style scoped>

</style>
