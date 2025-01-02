const app = Vue.createApp({
    data() {
        return {
            currentCount: 0,
            username: "",
            confirmedName: "",
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
        setName(e, lastName) {
            this.username = e.target.value + " " + lastName;
        },
        confirmName() {
            this.confirmedName = this.username;
        },
    },
});

app.mount("#app");
