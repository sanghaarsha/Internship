const app = Vue.createApp({
    data() {
        return {
            currentCount: 0,
            username: "",
        };
    },

    methods: {
        increaseCount(num = 1) {
            this.currentCount = this.currentCount + num;
        },
        decreaseCount(num = 1) {
            if (this.currentCount > 0 && this.currentCount - num >= 0) {
                this.currentCount = this.currentCount - num;
            }
        },
        setName(e) {
            this.username = e.target.value;
        },
        resetInput() {
            this.username = "";
        },
    },

    computed: {
        fullname() {
            if (this.username === "") return "";
            return this.username + " " + "Dahal";
        },
    },
});

app.mount("#app");
