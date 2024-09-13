<!--options api-->
<script setup>

import {useFlash} from "@/composables/useFlash.js";

let {flash} = useFlash();

</script>


<template>
  <main>
    <p>
      <button @click="flash('HOME','It Works on the home page')">Click Me</button>
    </p>
  </main>
</template>
