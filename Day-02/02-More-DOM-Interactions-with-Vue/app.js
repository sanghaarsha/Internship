const app = Vue.createApp({
    data() {
        return {
            learningGoalsA:
                "<h3>Master Vue.js and create beautiful front-end applications</h3>",
            learningGoalsB:
                "<h3>Learn PHP and Laravel and create amazing APIs and back-end applications</h3>",
            vueLink: "https://vuejs.org/",
        };
    },

    // methods: this is where we define the methods that we want to use in our app
    methods: {
        randomizeLearningGoals() {
            const rand = Math.random();

            // return a random learning goal
            if (rand < 0.5) {
                return this.learningGoalsA;
            } else {
                return this.learningGoalsB;
            }
        },
    },
});

app.mount("#my_goals");
