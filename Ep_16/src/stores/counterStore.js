import {reactive} from "vue";

export let counter = reactive({
    // state
    count: 0,


    // actions
    increment() {
        if (this.count >= 10) {
            alert('max 10 adet girebilirsin');
            return;
        }
        this.count++;
    },

    decrement() {
        if (this.count < 1) {
            alert('min 1 adet girmelisiniz');
            return;
        }
        this.count--;
    }
});