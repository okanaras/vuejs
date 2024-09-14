<!--options api-->
<script setup>

import {useFlash} from "@/composables/useFlash.js";
import {counter} from "../stores/counterStore.js";

let {flash} = useFlash();

</script>

<template>
  <div>
    <p>
      About Page. The current count is {{ counter.count }}
    </p>
  </div>
</template>

