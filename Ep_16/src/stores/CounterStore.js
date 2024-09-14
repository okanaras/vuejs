import {defineStore} from "pinia";

export let useCounterStore = defineStore('counter', {
    // data
    state() {
        return {
            count: 5
        };
    },

    //methods
    actions: {
        increment() {
            if (this.count < 10) {
                this.count++;
            } else {
                alert('max 10 adet girebilirsiniz.')
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        }
    },

    //computed
    getters: {
        remaining(state) {
            return 10 - state.count;
        }
    }
});
