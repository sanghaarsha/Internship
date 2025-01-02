// creating a vue app
const app = Vue.createApp({
    // options available here are: data, methods, etc.
    // 1. data: this is where we define the data that we want to use in our app
    data: function () {
        return {
            learningGoals: "Learn Vue.js from scratch and master it!",
            vueLink: "https://vuejs.org/",
        };
    },
    // 2. methods: this is where we define the methods that we want to use in our app
    methods: undefined,
});

// This helps to control the div with the id my_goals
app.mount("#my_goals");
