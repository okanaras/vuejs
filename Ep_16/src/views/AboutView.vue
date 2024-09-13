<!--options api-->
<script setup>

import {useFlash} from "@/composables/useFlash.js";

let {flash} = useFlash();

</script>

<template>
  <div>
    <p>
      <button @click="flash('ABOUT','It Works on the about page','info')">Click Me</button>
    </p>
  </div>
</template>

