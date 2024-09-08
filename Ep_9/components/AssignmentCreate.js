export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" type="text" placeholder="New assignment..." class="p-2 focus:outline" />
                <button type="submit" class="bg-gray-300 text-white p-2 border-l hover:bg-gray-400 hover:text-black">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }

    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}