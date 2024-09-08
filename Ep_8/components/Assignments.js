import AssignmentList from "./AssignmentList.js";

export default {
    components: {AssignmentList},
    template: `
      <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" type="text" placeholder="New assignment..." class="p-2 focus:outline" />
                <button type="submit" class="bg-gray-300 text-white p-2 border-l hover:bg-gray-400 hover:text-black">Add</button>
            </div>
        </form>

      </section>
    `,

    data() {
        return {
            assignments: [
                {name: 'Finish Project', complete: false, id: 1},
                {name: 'Read book', complete: false, id: 2},
                {name: 'Turn in homework', complete: false, id: 3},
            ],

            newAssignment: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },

    methods: {
        add() {
            this.assignments.unshift({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1
            });
            this.newAssignment = '';
        }
    }
}