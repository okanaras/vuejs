export default {
    template: `
      <li>
        <label>
          {{ okan.name }}
          <input type="checkbox" v-model="okan.complete">
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
