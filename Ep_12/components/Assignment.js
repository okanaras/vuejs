export default {
    template: `
      <li>
        <label class="p-2 flex item-center justify-between">
          {{ okan.name }}
          <input type="checkbox" v-model="okan.complete" class="ml-3">
        </label>
      </li>
    `,

    props: {
        okan: Object
    },

    mounted() {
        console.log(this.okan); // okan prop'u loga yazdırılıyor
    }
}
