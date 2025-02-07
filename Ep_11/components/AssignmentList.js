import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {Assignment, AssignmentTags},
    template: `
      <section v-show="assignments.length">
        <h2 class="font-bold mb-2">
          {{ title }} ({{ filteredAssignments.length }})
        </h2>

        <assignment-tags
            :initial-tags="assignments.map(a=>a.tag)"
            :current-tag="currentTag"
            @change="currentTag = $event"
        />

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
          <assignment :key="assignment.id" v-for="assignment in filteredAssignments" :okan="assignment"></assignment>
        </ul>
      </section>
    `,

    props: {
        "assignments": Array,
        "title": String
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') return this.assignments
            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },

}