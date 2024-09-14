<script setup>
import {useCounterStore} from "@/stores/CounterStore.js";

let counter = useCounterStore();
</script>

<template>
  <div>
    <h1>{{ counter.count }}</h1>

    <button
        :disabled="! counter.remaining"
        @click="counter.increment()"
    > Increment ({{ counter.remaining }} Remaining)
    </button>

    <button @click="counter.decrement()">Decrement</button>
  </div>
</template>
