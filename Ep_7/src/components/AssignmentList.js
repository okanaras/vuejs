import Assignment from "./Assignment.js";

export default {
    components: {Assignment},
    template: `
      <section v-show="assignments.length">
        <h2 class="font-bold mb-2">{{ title }}</h2>

        <ul>
          <assignment :key="assignment.id" v-for="assignment in assignments" :okan="assignment"></assignment>
        </ul>
      </section>
    `,

    props: {
        "assignments": Array,
        "title": String
    }
}