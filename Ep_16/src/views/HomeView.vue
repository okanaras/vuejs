<!--options api-->
<!--<script>-->
<!--import TheWelcome from '../components/TheWelcome.vue'-->

<!--export default {-->
<!--  components: {-->
<!--    TheWelcome-->
<!--  },-->

<!--  data() {-->
<!--    return {-->
<!--      message: 'Hello World',-->
<!--    };-->
<!--  },-->

<!--  mounted() {-->
<!--    alert('ive been mounted')-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--compositons api-->

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {ref} from "vue";

let message = ref('Hello World');

let doSomething = () => {
  alert('got it');
};

</script>


<template>
  <main>
    <TheWelcome/>

    {{ message }}

    <p>
      <input v-model="message" type="text"/>
    </p>
    <p>
      <button @click="doSomething">Click HERE</button>
    </p>
  </main>
</template>
