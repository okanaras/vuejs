export default {
    template: `
      <div :class="{   
      'p-4 border rounded-lg' : true,
      'bg-white border-gray-300 text-black' : theme == 'light',
      'bg-gray-700 border-gray-600 text-white' : theme == 'dark'
      }">
        <!--<h2 class="font-bold">{{ heading }}</h2>-->
        <!--        <h2 class="font-bold" v-text="heading"></h2>-->
        <h2 v-if="$slots.heading" class="font-bold mb-2">
          <slot name="heading"/>
        </h2>

        <slot name="default"/> <!-- <slot/> : default demek -->

        <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4">
          <slot name="footer"></slot>
        </footer>

      </div>`,

    props: {
        theme: {type: String, default: 'dark'}
    },
    methods: {}
}