// Vue.createApp is a function that creates a new Vue application.
// The object that is passed to the Vue.createApp function is called the Vue instance.
// The Vue instance is responsible for connecting the data to the DOM and managing the application state, behavior, lifecycle, events, etc
Vue.createApp({
    // data function that returns an object, called as the data object.
    // It contains the data that is used in the Vue application.
    // It is reactive, which means that when the data changes, the DOM updates automatically.
    data: function () {
        return {
            goals: [],
            enteredValue: "",
        };
    },

    // methods is an object that contains custom methods that are used in the Vue application.
    // It is used to define the behavior, logic, event handlers,etc. of the Vue application.
    methods: {
        addGoal() {
            if (this.enteredValue) this.goals.push(this.enteredValue); // only add the entered value if it is not empty
            // reset the input field
            this.enteredValue = "";
        },
    },
}).mount(".todo"); // mount is a function that mounts the Vue application to the DOM element with the specified selector. In this case, it mounts the Vue application to the element with the class name todo.
