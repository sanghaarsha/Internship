# Daily Progress Report

 _*Date: 2025/01/03*_

## Today's Focus

- Two way binding
- Computed

## Learning Objectives

- Learn about how two way binding works technically
- Computed property, uses and why it's important

## Key Learnings

- Two way binding = binding data property + binding events
  - The benefit of using v-model is that it automatically binds event with data properties,  
    it also automatically uses the correct event for binding according to the event type

    ```html
    <!-- without using v-model -->
    <input type="text" v-bind:value="username" v-on:input="inputHandler"/>
    ```

    ```html
    <!-- using the v-model-->
    <input type="text" v-model="username" />
    ```

<br>

- Computed property
  - normal methods inside templates are executed on each render by Vue,  
  so it's generally inefficient and not a best practice to use methods directly inside templates  

  - Computed property are cached, Vue will only re-evaluate them when their dependencies change,  
  which makes them efficient for deriving reactive data

    ```javascript
    computed: {
        fullname() {
            if (this.username === "") return "";
            return this.username + " " + "Dahal";
        },
    },
    ```

## Resources Used

- [Google Search](https://google.com)
- [Youtube](https://youtube.com)
- [Devdocs](https://devdocs.io)
- Online courses

## Today's Challenges

- Due to additional responsibilities, I fell slightly behind on yesterday's learning objectives. Will catch up tomorrow.

## Tomorrow's Plan

- Learning Watchers
- Dynamic styling
- Rendering contents: conditionals and lists
