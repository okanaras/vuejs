import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
      <section class="space-y-6">
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

        <assignment-create @okan="add"></assignment-create>

      </section>
    `,

    data() {
        return {
            assignments: [],
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

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            const randomTag = this.assignments[Math.floor(Math.random() * this.assignments.length)].tag;

            this.assignments.unshift({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
                tag: randomTag
            });
        }
    }
};
