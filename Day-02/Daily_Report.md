# Daily Progress Report

 _*Date: 2025/01/02*_

## Today's Focus

- Vue instances
- DOM interactions with Vue
- Events in Vue

## Learning Objectives

- Get deeper into Vue
- Creating and interacting with vue instances
- Handle events
- Work with dynamic data

## Tasks Completed

- Simple Goal App
- Simple Counter App

## Key Learnings

- To change/update attributes we need to use v-bind directive  

    ```html
    <a v-bind:href="link_url">Click me</a>
    <!-- shorthand -->
    <a :href="link_url">Click me</a>
    ```

<br>

- Working with data inside a vue app
  - we must use 'this' keyword to access data properties
  - vue binds all data, methods, computed,etc. to the vue instance  
  - using 'this' ensures we are accessing correct property from the  
    current Vue instance's context
  - without 'this', javascript would look for local variables instead of  
    the current vue instance's data  

    ```javascript
    Vue.createApp({
    data() {
        return {testData:"Hello"};
    },
    methods: {
        myMethod() {return this.testData}
    },
    });
    ```

<br>

- Outputting raw HTML
  - Even if the result of interpolation is a valid HTML element, vue will  
  render it as plain text for security measures i.e. XSS attacks and
  also for performance improvement
  - to output raw HTML we can use another directive: v-html

    ```html
    <!-- using v-html -->
     <p v-html="randomizeLearningGoals()"></p>
    ```

    ```javascript
    // This will return html element
    Vue.createApp({
    data() {
        return {
            learningGoalsA:
                "<h3>Master Vue.js and create beautiful front-end applications</h3>",
            learningGoalsB:
                "<h3>Learn PHP and Laravel and create amazing APIs and back-end applications</h3>",
        };
    },

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
    ```

<br>

- Event Bindings
  - vue provides special suffixes that modify how event are handled
  - they start with dot (.) after the event name
  - some common event modifiers:
    - .stop : stop event propagation

        ```html
        <button @click.stop="handleClick">Click Me</button>
        ```

    - .prevent : prevent default behavior

        ```html
        <form @submit.prevent="onSubmit">
        ```

    - .once : event triggers only once
    - .self : only trigger if event target is element itself

    - Key Modifiers:
      - keyup : triggered when a keyboard key is released

        ```html
        <input @keyup.enter="submit">
        <input @keyup.esc="cancel">
        ```

      - keydown : triggered when a keyboard key is pressed

    - modifiers can be chained

      ```html
      <button @click.stop.prevent="handleClick">Click Me!</button>
      ```

<br>

- Locking content with v-once directive
  - If we want to render a data property only once and keep it at that even when it gets updated, we use this directive.

    ```html
    <p v-once>Starting count: {{count}}</p>
    ```

## Resources Used

- [Google Search](https://google.com)
- [Youtube](https://youtube.com)
- [Devdocs](https://devdocs.io)
- Online courses

## Tomorrow's Plan

- Learning more about two way binding
- Computed properties
- Watchers
- Dynamic styling
- Rendering contents: conditionals and lists
