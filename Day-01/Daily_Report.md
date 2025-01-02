# Daily Progress Report

 _*Date: 2025/01/01*_

## Today's Focus

- Introduction to Vue

## Learning Objectives

- Setup environment for Vue
- Use Vue in a simple project

## Tasks Completed

- Converted a simple To-do application from vanilla JS to VueJS

## Key Learnings

- Vue Directives

  - They provide a way to reactively update the DOM based on changes in the data or state
  - Starts with "v-"
  - Few core vue directives:
    <ul>
      <li>v-bind : bind attribute to an expression</li>

    ```html
    <img v-bind:src="image_url">
    <a v-bind:href="link_url">Click me</a>
    <!-- shorthand -->
    <a :href="link_url">Click me</a>
    ```

    <li>v-model : create a two way data binding between form input and application state</li>

    ```html
    <input v-model:"username" type="text">
    <p>Hello, {{username}}!</p>
    ```

    <li>v-for : render list of items by iterating over an array</li>

    ```html
    <ul>
      <li v-for:"item in items">{{item}}</li>
    </ul>
    ```

    <li>v-if, v-else-if and v-else : conditional rendering</li>

    ```html
    <div>
      <h2>Even or Odd</h2>
      <p v-if="num % 2 == 0">
        Even
      </p>
      <p v-else-if="num % 2 == 1">
        Odd
      </p>
      <p v-else>
        Invalid
      </p>
    </div>
    ```

    <li>v-on : attach event listener to elements</li>

    ```html
    <button v-on:click="clickHandler">Click me!</button>
    ```

    <br>

    _Vue also allows us to create custom directives_

    </ul>

- Vue Methods
  <ul>
    <li>Methods are functions that are used in Vue instances</li>
    <li>They are defined inside the `methods` object in Vue component options</li>
    <li>Methods can be called from:
    <ul>
      <li>Template expressions</li>
      <li>Event listeners</li>
      <li>Other component logic</li>
    </ul>
    </li>
    <li>Vue method:</li>

  ```js
  Vue.createApp({
    data: function () {
        return {
            goals: [],
            enteredValue: "",
        };
    },
    methods: {
          // This here, is a method named 'addGoal'
          addGoal() {
              this.goals.push(this.enteredValue);
              this.enteredValue = "";
          },
      },
  }).mount(".todo");
  ```

  <li>Methods can be used in templates like this:</li>

  ```html
  <div class="todo">
      <input
      type="text"
      id="input" 
      placeholder="Add a new task"
      v-model="enteredValue"
      @keyup.enter="addGoal"
      />
      
      <!-- We are using the method 'addGoal' here when the button is clicked-->
      <button id="add" v-on:click="addGoal">Add</button>

      <ul id="list">
        <li v-for="goal in goals">{{ goal }}</li>
      </ul>
  </div>
  ```

  </ul>

## Resources Used

- [Google Search](https://google.com)
- [Youtube](https://youtube.com)
- [Devdocs](https://devdocs.io)
- Online courses

## Tomorrow's Plan

- Learning more core concepts of vue
