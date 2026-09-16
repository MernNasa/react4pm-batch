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


# What is Routing in React?
Routing in React is the mechanism of mapping different URL paths to different React components or views. React itself doesn't provide routing, so libraries such as React Router are commonly used. It enables client-side navigation in a Single Page Application without requiring a full page reload. React Router also provides features such as dynamic routes, nested routes, protected routes, route parameters, and programmatic navigation.


# Why do we need routing?
Provides navigation between different views/pages
Avoids full-page reloads
Creates clean URLs
Supports nested routes
Supports dynamic routes
Supports protected/private routes
Supports route parameters
Supports navigation programmatically

# What is React Router?
React Router is a routing library for React applications that allows us to map URLs to React components.

# What is createBrowserRouter()?
createBrowserRouter() is a React Router API used to create a browser-based router using a route configuration object. The configured router is passed to RouterProvider. It is part of React Router's modern data-router approach and supports features such as nested routes, loaders, actions, error handling, lazy loading, and navigation management.

# What is RouterProvider?
RouterProvider connects the router created by createBrowserRouter() to the React application.

# what is children?
children defines nested routes under a parent route.

# what is Nested Route
A nested route is a route defined inside another route using the children property.

# What is Outlet
Outlet is a placeholder where the element of a matched child route is rendered inside its parent route.

# What is index?
An index route is the default child route that renders when the parent route's path exactly matches.

# What is Dynamic Route
A dynamic route contains a parameter in its path whose value can change depending on the URL.

# What is useParams()
useParams() is a React Router hook used to access dynamic parameters from the current URL.
# What is Link
Link is a React Router component used to navigate between routes without performing a traditional browser page reload.
# What is NavLink
NavLink is similar to Link, but it provides information about whether the link's route is currently active, making it useful for navigation menus.

# What is useNavigate()?
useNavigate() is a React Router hook used to navigate programmatically from JavaScript code.
# what is errorElement
errorElement specifies the UI that should be displayed when an error occurs while loading or rendering a route.

# What is Protected Routing?
A protected route is a route that can only be accessed when certain conditions, usually authentication or authorization, are satisfied.   

# What is Layout Route?
A layout route is a parent route used to provide shared UI such as a navbar, sidebar, footer, or dashboard layout for its child routes.
Example:
{
  element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard",
      element: <DashboardHome />
    },
    {
      path: "/dashboard/orders",
      element: <Orders />
    }
  ]
}


# What is * / Splat Route
A splat route uses * to match the remaining part of a URL and is commonly used for catch-all or 404 routes.
Example:
{
  path: "*",
  element: <NotFound />
}


# What is Props Drilling?
Props drilling is the process of passing data from a parent component to a deeply nested child component through multiple intermediate components, even when those intermediate components don't need the data.

# Why is Props Drilling a Problem?
Props themselves are not bad.

Passing props between a parent and direct child is completely normal.
The problem occurs when the data has to travel through many unnecessary components.

It can make the application:

1. harder to maintain
2. harder to refactor
3. harder to understand
4. tightly coupled between components
5. inconvenient when many components need the same data


# What is Context API?

Context API is a built-in React mechanism that allows data to be shared between components without manually passing props through every intermediate component.

# Main Parts of Context API
There are three important concepts:
createContext()
     ↓
Provider
     ↓
useContext()


# createContext()

Creates a Context.

const UserContext = createContext();
# Provider

Provides data to components.

<UserContext.Provider value={user}>
    <Dashboard />
</UserContext.Provider>

# useContext()

Allows a component to consume the data.

const user = useContext(UserContext);


# Props Drilling vs Context API
| Props Drilling                                 | Context API                                   |
| ---------------------------------------------- | --------------------------------------------- |
| Data passed through props                      | Data shared through Context                   |
| Intermediate components pass the data          | Intermediate components don't need to pass it |
| Good for simple parent-child communication     | Useful for shared/global-ish data             |
| Can become difficult with deep component trees | Helps avoid deeply passing props              |
| Explicit data flow                             | More indirect data access                     |


 # Important Interview Question
# Is Context API a replacement for props?
No. Context API does not replace props. Props are still the preferred way to pass data between components when the relationship is direct or local. Context is useful when the same data needs to be accessed by many components at different levels of the component tree and passing it through props would cause excessive drilling.


# Common Context API Use Cases
1. Authentication
    User
    Token
    Login status
    Role
2. Theme
    Light
    Dark
3. Language
    English
    Hindi
    Odia
    Telugu
4. Application settings


# note:
Props = explicit data passing.
Context = shared data access without passing props through every intermediate level.

# What is useReducer()?
useReducer() is a React Hook used for managing component state when the state logic is complex or when multiple state updates depend on different actions.

It is an alternative to useState().

const [state, dispatch] = useReducer(reducer, initialState);

The basic flow is:

User Action
    ↓
 dispatch(action)
    ↓
 reducer(state, action)
    ↓
 New State
    ↓
 Component Re-renders

# Why do we need useReducer()?
const [count, setCount] = useState(0);

if you have many different operations:
FETCH_START
FETCH_SUCCESS
FETCH_ERROR
INCREMENT
DECREMENT
RESET

Managing all of this with many useState() calls can make the state logic harder to organize.

useReducer() allows you to put the state transition logic in one reducer function.

# What is reducer?
A reducer is a function that receives the current state and an action, and returns the next state.

Syntax:

function reducer(state, action) {
    // state update logic

    return newState;
}

# What is action?
An action is an object that describes what happened or what state change is requested.

# What is dispatch()?
dispatch() is a function used to send an action to the reducer.

# useState() vs useReducer()
| `useState()`                       | `useReducer()`                       |
| ---------------------------------- | ------------------------------------ |
| Good for simple state              | Good for complex state logic         |
| State updates are generally direct | State changes happen through actions |
| Simple to write                    | More structured                      |
| Less boilerplate                   | More boilerplate                     |
| Good for independent/simple values | Good for related state transitions   |
| Setter function                    | `dispatch()`                         |

# Important Interview Question
# Can we use useReducer() instead of useState()?
Yes. useReducer() can be used as an alternative to useState(), but they are suited to different situations. useState() is usually simpler for straightforward state, while useReducer() is useful when state transitions are complex or when multiple actions update related state.

# Explain its flow of useReducer?
The component dispatches an action, the reducer receives the current state and action, calculates the next state, and React re-renders the component with the updated state.

dispatch(action)
      ↓
reducer(state, action)
      ↓
   new state
      ↓
   re-render

# What is Redux?
Redux is a predictable state management library used to manage shared application state in a centralized store.

# What is Redux Toolkit?
Redux Toolkit (RTK) is the official recommended approach for writing Redux applications. It provides APIs that simplify store configuration, reducer creation, action creation, immutable state updates, and asynchronous logic.

# Why Redux Toolkit?
Traditional Redux required a lot of boilerplate.
For example, traditionally you might have to create:
Action Types
     ↓
  Actions
     ↓
  Reducer
     ↓
Switch statements
     ↓
    Store

RTK simplifies this considerably.
Instead of manually writing separate action creators and action types, you can use:
# createSlice()---> which generates them for you.


# The complete flow:
Component
    ↓
dispatch(action)
    ↓
Reducer
    ↓
State changes
    ↓
Redux Store
    ↓
useSelector()
    ↓
Component re-renders


# Important RTK Terms
These are the terms you should know for interviews:
1. Store
2. configureStore()
3. Slice
4. createSlice()
5. State
6. Reducer
7. Action
8. Action Creator
9. dispatch()
10. Payload
11. Selector
12. useSelector()
13. useDispatch()
14. Provider



# 1. Store
The Redux store is the centralized container that holds the application's global state.
# 2. configureStore()
configureStore() is an RTK function used to create and configure the Redux store with reducers, middleware, and other configuration.
# 3. Slice
A slice represents one logical section of the Redux state along with the reducers and actions that manage that section.
# 4.createSlice() (This is one of the most important RTK APIs.)
createSlice() is used to create a Redux slice containing its initial state and reducer functions. It automatically generates action creators and action types for those reducers.

# 5.Reducer
A reducer is a function that determines how the Redux state should change in response to an action.

# 6.Action
An action is an object that describes an event or state change that should occur in the Redux store.

# 7. Action Creator
An action creator is a function that creates and returns an action object.
With RTK, createSlice() automatically generates action creators.

# 8. dispatch()
dispatch() is used to send an action to the Redux store.

# 9. payload
Payload is additional data carried by an action that the reducer needs to perform the state update.

# 10. useDispatch()
useDispatch() is a React-Redux hook that gives a component access to the Redux store's dispatch function.

# 11. useSelector()
useSelector() is a React-Redux hook used to read data from the Redux store.

# 12. Provider
Redux needs to be made available to your React application.
Provider makes the Redux store available to React components throughout the component tree.

# RTK Folder Structure
src/
│
├── app/
│   └── store.js
│
├── features/
│   │
│   ├── auth/
│   │   ├── authSlice.js
│   │   └── authAPI.js
│   │
│   ├── cart/
│   │   └── cartSlice.js
│   │
│   └── products/
│       └── productSlice.js
│
├── components/
│
├── pages/
│
└── main.jsx

# RTK vs Context API
| Context API                       | Redux Toolkit                                   |
| --------------------------------- | ----------------------------------------------- |
| Built into React                  | External Redux library                          |
| Good for sharing values           | Designed for structured global state management |
| Simple setup                      | More concepts                                   |
| Less boilerplate for simple cases | RTK greatly reduces Redux boilerplate           |
| No built-in async data solution   | `createAsyncThunk`, RTK Query                   |
| Good for theme/auth/config etc.   | Useful for larger state-management requirements |

