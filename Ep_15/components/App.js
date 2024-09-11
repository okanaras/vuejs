import Assignments from "./Assignments.js";
import Panel from "./Panel.js";


export default {
    components: {Panel, Assignments},

    template: `
      <div class="grid gap-6">
        <assignments></assignments>
        
      </div>
    `,
}