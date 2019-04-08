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


- Singleton Store: state manegement
- View: React component
- Actions: Event made by view
- Reducers: Function without side effects( fnction(state,actions) )


## Requirement
- React
- Redux
- TypeScript
- WebPack

## Install
```
$ cd project
$ npm install
$ webpack --mode development
```

## Author
[Ryota](https://www.developer-ryota.com/)
