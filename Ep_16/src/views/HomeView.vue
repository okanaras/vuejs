<!--options api-->
<script setup>

import {useStorage} from "@/composables/useStorage.js";

let food = useStorage('food');
let age = useStorage('age');

let obj = useStorage('cars', {
  mercedes: 'cls',
  audi: 'q7',
  honda: 'civic'
});

setTimeout(() => {
  obj.value.audi = 'q4';
}, 3000);

</script>


<template>
  <main>
    <p>
      What is your favorite food ? <input v-model="food" type="text">
    </p>

    <p>
      How old are you ? <input v-model="age" type="text">
    </p>
  </main>
</template>
