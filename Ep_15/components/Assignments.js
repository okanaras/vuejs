import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: {AssignmentList, AssignmentCreate},
    template: `
      <section class="flex gap-8">
        <assignment-list :assignments="filters.inProgress" title="In Progress">
          <assignment-create @okan="add"></assignment-create>
        </assignment-list>
        <div v-if="showCompleted">
          <assignment-list
              :assignments="filters.completed"
              title="Completed"
              can-toggle
              @toggle="showCompleted = !showCompleted"
          ></assignment-list>
        </div>


      </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true
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
