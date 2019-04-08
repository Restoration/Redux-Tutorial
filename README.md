# Redux-Tutorial

## Overview
Redux tutorial with TypeScript  
[Getting Started with Redux](https://redux.js.org/introduction/getting-started)

## Description

### How to prepare environment
- [React & Webpack](https://www.typescriptlang.org/docs/handbook/react-&-webpack.html)
- [TypeScript - Webpack](https://webpack.js.org/guides/typescript/)

### What is Flux?
Flux is the application architecture which was advocated by facebook. It can understand data flow to easy. 
- Stores: All data and logic on application
- View: Component
- Actions: Action event on view
- Dispatcher: Trigger event for store when it received all action

[In Depth Overview](https://facebook.github.io/flux/docs/in-depth-overview.html)


### What is Redux?
Redux is a predictable state container for JavaScript apps.  It run in different environments(client, server, and native), and you can use Redux together with other view library.


Redux has three principles.
- Single source of truth
- State in read-only
- Changes are made with pure functions


### WorkFlow
Action => Dispatcher => Store => View

- Singleton Store: state manegement
- View: React component
- Actions: Event made by view
- Reducers: Function without side effects( fnction(state,actions) )

```JavaScript
import { createStore } from 'redux'

//-------------------------------------------------------------
// Reducer
//-------------------------------------------------------------
/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your
 * project.
 */
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


//-------------------------------------------------------------
// Store
//-------------------------------------------------------------
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// However it can also be handy to persist the current state in the localStorage.

store.subscribe(() => console.log(store.getState()))

//-------------------------------------------------------------
// Dispatcher
//-------------------------------------------------------------
// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

//-------------------------------------------------------------
// View 
//-------------------------------------------------------------
// After that, you should implement view process.

```

### Why use Redux?
You can get easy to state management code because, Redux manage state logic in one place. So you don't need state logic in your component file.


## Requirement
- React
- Redux
- TypeScript
- WebPack

## Install
```
$ cd app
$ npm install
$ webpack --mode development
```

## Author
[Ryota](https://www.developer-ryota.com/)
