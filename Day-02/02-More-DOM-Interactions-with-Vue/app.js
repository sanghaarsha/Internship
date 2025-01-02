const app = Vue.createApp({
    data: function () {
        return {
            learningGoals: "",
            vueLink: "https://vuejs.org/",
        };
    },

    // methods: this is where we define the methods that we want to use in our app
    methods: {
        randomizeLearningGoals: function () {
            const rand = Math.random();

            // return a random learning goal
            if (rand < 0.5) {
                return "Learn Vue.js from scratch and master it!";
            } else {
                return "Learn PHP and Laravel";
            }
        },
    },
});

app.mount("#my_goals");
