# What is webpage ?
A web page is a single HTML document displayed by a web browser, created using the HTML (HyperText Markup Language) language. It contains the structure and content of a webpage, such as headings, paragraphs, images, links, forms, tables, and more.

# What is website?
A website is a collection of interconnected web pages stored on a web server and identified by a unique domain name, which users can access through a web browser over the internet.

# Types of website

1. Static Website
    Content remains the same until manually updated.
    Built mainly using HTML and CSS.
    Fast and simple.
2. Dynamic Website
    Content changes according to the user or database.
    Built using HTML, CSS, JavaScript, and backend technologies like Node.js, Java, PHP, Python, etc.
    Uses databases such as MySQL or MongoDB.


# Difference Between Static and Dynamic Websites

| Static Website  | Dynamic Website                          |
| --------------- | ---------------------------------------- |
| Fixed content   | Dynamic content                          |
| No database     | Uses a database                          |
| Faster          | Slightly slower                          |
| Easy to develop | More complex                             |
| HTML, CSS       | HTML, CSS, JavaScript, Backend, Database |


# What is web Application ?
A web application is a software program that runs on a web server and is accessed through a web browser. It allows users to perform tasks, interact with data, and receive dynamic responses.
# Types of Web Applications
The two main types of web applications are:
1. SPA (Single Page Application)
2. MPA (Multi Page Application)




# Website vs Web Application

| Website                     | Web Application                         |
| --------------------------- | --------------------------------------- |
| Mainly provides information | Allows users to perform tasks           |
| Content is mostly read-only | Users can create, edit, and delete data |
| May not require login       | Often requires login                    |
| Simpler functionality       | More interactive and feature-rich       |
| Example: Company website    | Example: Gmail, Amazon                  |


# Website vs Web Page vs Web Application

| Web Page               | Website                    | Web Application                              |
| ---------------------- | -------------------------- | -------------------------------------------- |
| A single HTML document | Collection of web pages    | Interactive software running in a browser    |
| Example: `about.html`  | Example: `www.company.com` | Example: Gmail, Amazon                       |
| Displays content       | Organizes multiple pages   | Lets users perform tasks and manipulate data |






# What is component in React js.
In React.js, a component is a reusable, independent piece of the user interface (UI). Think of it like a building block that represents a part of your application, such as a button, navigation bar, login form, or product card.

# Why use components?
Reusable – Write once and use it multiple times.
Modular – Split your app into smaller, manageable pieces.
Maintainable – Easier to update and debug.
Composable – Combine multiple components to build complex UIs.

# Types of Components
1. Class Components (Older Approach)
2. Functional Components (Recommended)

# Rules for Creating a Component in React
1. Component name should start with a capital letter
2. A component should return JSX
3. A component must return only one root element
4. Component names should generally be nouns or meaningful UI names
5. Component names are case-sensitive

# How to call a component.
 we can able to call a component in 2 ways.
1. Paired Tags  <Component_Name></Component_Name>
2. Self closing Tag <Component_Name/> (Recommended)



# What is Component-Based Architecture in React?
Component-Based Architecture in React is an approach where a user interface is divided into small, reusable, and independent components. Each component is responsible for a specific part of the UI and its behavior. These components can be combined together to build a complete application.




# What is JSX in reactjs? 

JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

# Rules of JSX in React
1. JSX must return a single parent element
You cannot return multiple elements directly.

return (
  <div>
    <h1>Hello</h1>
    <p>Welcome</p>
  </div>
);

2. Every tag must be closed

<img src="image.jpg"> ❌
<img src="image.jpg" /> ✅
<input type="text" /> ✅
<br /> ✅
<hr /> ✅


3. Use className instead of class
<div class="container"> ❌
<div className="container"> ✅

<label for=""></label> ❌ 
<label htmlFor=""></label> ✅ 

4. Use camelCase for most attributes

<button onclick=""></button>
<button onClick=""></button>

5. JSX comments have special syntax

<!-- This is a comment --> this is html comments

{/* This is a JSX comment */} this is JSX comments

6. Use style as a JavaScript object

<div style="color: red; font-size: 20px;">
 Hello
</div>

<div style={{ color: "red", fontSize: "20px" }}>
  Hello
</div>


# What is a JSX Expression in React?

A JSX expression is a JavaScript expression that we write inside JSX using curly braces {}.

It allows us to use JavaScript values, variables, calculations, function calls, conditions, etc. inside HTML-like JSX.


| JavaScript                  | JSX `{}` |
| --------------------------- | -------- |
| Variable                    | ✅        |
| String                      | ✅        |
| Number                      | ✅        |
| Calculation                 | ✅        |
| Function call               | ✅        |
| Object property             | ✅        |
| Array access                | ✅        |
| Ternary `? :`               | ✅        |
| Logical `&&`                | ✅        |
| `map()`                     | ✅        |
| `filter()`                  | ✅        |
| Arrow function expression   | ✅        |
| `if` statement              | ❌        |
| `for` loop                  | ❌        |
| `while` loop                | ❌        |
| `switch` statement          | ❌        |
| `const` / `let` declaration | ❌        |
| `try...catch`               | ❌        |



# CSS in React js

# 1. Inline CSS

CSS is written directly inside the JSX using the style attribute.
Ex: <h1 style={{ color: "red", fontSize: "30px" }}>
      Hello React
    </h1>

# 2. External CSS

Create a separate CSS file.
App.css
ex: .title {
  color: blue;
  font-size: 30px;
}


# 3. CSS Modules

CSS Modules allow you to create locally scoped CSS classes.

For example:

App.module.css
.title {
  color: green;
  font-size: 30px;
}

import styles from "./App.module.css";

function App() {
  return <h1 className={styles.title}>Hello React</h1>;
}


# Why we need to use CSS Modules?

The class name is scoped to the component, which helps prevent CSS naming conflicts.









# What is list and keys in React js ?
In React, lists are commonly rendered using the JavaScript map() method. Each item in the list should have a unique key prop. The key helps React identify which items have been added, removed, or updated, allowing React to efficiently update the DOM. We should preferably use a stable unique ID instead of the array index as the key.




# What are Fragments in React js?
A Fragment in React is used to group multiple JSX elements without adding an extra DOM element node . 

React provides two syntaxes for fragments: the short syntax <>...</> and the explicit syntax <Fragment>...</Fragment>. 

The explicit syntax is useful when we need to provide a key, especially while rendering lists.







# What is props in React js ?

Props, short for properties, are used to pass data from a parent component to a child component in React. Props can contain different types of values such as strings, numbers, objects, arrays, functions, and JSX. Props are read-only, meaning a child component should not directly modify them.


# What is conditional Rendering ?
Conditional rendering in React is the process of rendering different UI elements or components based on a condition. React supports conditional rendering using JavaScript techniques such as if-else statements, ternary operators, and logical operators like && and ||. It is commonly used for scenarios such as login/logout UI, loading states, error messages, and role-based UI.

# Common ways of conditional rendering
1. if-else

Ex:
if (isLoggedIn) {
  return <Home />;
} else {
  return <Login />;
}

2. Ternary operator
Ex:{isLoggedIn ? <Home /> : <Login />}


3. Logical AND (&&)
Ex: {isAdmin && <button>Delete User</button>}

4. Logical OR (||)
Ex: {username || "Guest"}


# What is hooks in React js ?
Hooks are special js functions provided by React that allow functional components to use features such as state, lifecycle management, context, refs, and performance optimization. Hooks were introduced in React 16.8. Some commonly used Hooks are useState, useEffect, useContext, useRef, useReducer, useMemo, and useCallback. Hooks must be called at the top level of React functional components.

Types of Hooks.
1. In-built Hooks (React will provide)
  1. useState()
  2. useRef()
  3. useContext()
  4. useMemo()
  5. useCallback()
  6. useReducer()
2. custom Hooks (We have to create )


# Rules of Hooks

There are two important rules:
1. Call Hooks only at the top level
2. Call Hooks only from React functions component
# Note : They should not normally be called from ordinary JavaScript functions.


# What is useState Hook in react js ?
useState is a built-in React Hook that allows functional components to maintain and manage state. It returns an array containing the current state value and a setter function used to update that state. When the state is updated, React re-renders the component with the new value.

# Syntax
const [state, setState] = useState(initialValue);

# What is useEffect Hook in React js ?
useEffect is a React Hook used to perform side effects in a functional component. Side effects are operations that happen outside the normal rendering process, such as API calls, fetching data, updating the DOM, setting timers, subscribing to events, or working with local storage.

In React, there are 3 common ways to use useEffect(), mainly based on how we use the dependency array.

1. useEffect without dependency array
useEffect(() => {
  console.log("Effect executed");
});
# Runs after every render.


2. useEffect with an empty dependency array []

useEffect(() => {
  console.log("Component mounted");
}, []);

# Runs only once after the initial render.
Use case: API calls, initial data loading, setting up subscriptions, etc.


3. useEffect with dependencies

useEffect(() => {
  console.log("Count changed");
}, [count]);

# Runs after the initial render and whenever count changes.

# What is useRef in React?
useRef is a React Hook that allows us to create a mutable reference that persists across component renders. Updating a useRef value does not cause the component to re-render. It is commonly used to directly access DOM elements, store previous values, timers, or other mutable data.


#  useState vs useRef 
| `useState`                  | `useRef`                                              |
| --------------------------- | ----------------------------------------------------- |
| Stores state                | Stores a mutable reference                            |
| Updating causes re-render   | Updating does not cause re-render                     |
| Used for UI data            | Used for DOM references and persistent mutable values |
| Access using state variable | Access using `.current`                               |


# What is HOC in React?
A Higher-Order Component in React is a function that accepts a component as an argument and returns a new component with additional functionality or behavior. HOCs are mainly used for logic reuse and cross-cutting concerns such as authentication, authorization, logging, and data fetching. HOCs do not modify the original component; instead, they wrap it and return an enhanced component.

# Key Points to Remember

1. HOC = Higher-Order Component
2. It is a function, not a React component itself.
3. It takes a component as input.
4. It returns an enhanced component.
5. Mainly used for reusing component logic.
6. It follows the concept of composition.
7. It should generally not modify the original component.


# What is React.memo in React JS?

React.memo is a higher-order component provided by React that is used for performance optimization. It prevents a functional component from re-rendering when its props have not changed.

# What is useMemo in React JS?
useMemo is a React Hook used for performance optimization. It memoizes, or caches, the result of an expensive calculation and recalculates it only when its dependencies change.

# What is useCallback Hook in React JS
useCallback is a React Hook used for performance optimization. It memoizes a function, meaning React remembers the same function reference and creates a new function only when its dependencies change.



# React.memo vs useMemo
| `React.memo`                                     | `useMemo`                                    |
| ------------------------------------------------ | -------------------------------------------- |
| Memoizes a **component**                         | Memoizes a **calculated value**              |
| Used to prevent unnecessary component re-renders | Used to avoid expensive recalculations       |
| HOC                                              | Hook                                         |
| `React.memo(Component)`                          | `useMemo(() => calculation, [dependencies])` |


# useMemo vs useCallback
| `useMemo`                       | `useCallback`                       |
| ------------------------------- | ----------------------------------- |
| Memoizes a **value/result**     | Memoizes a **function**             |
| Returns the calculated value    | Returns the function                |
| Used for expensive calculations | Used to maintain function reference |
| `useMemo(() => value, [])`      | `useCallback(() => {}, [])`         |
