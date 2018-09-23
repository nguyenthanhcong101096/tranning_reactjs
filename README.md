## Spring 1
#### Practice with state and props in color conversion and letter size exercises

## Spring 2
#### Practice with form input, select, radio, checkbox.....

## Spring 3
#### Practice with state. props between compoenet others

## Spring 4
#### Practice with redux
```
npm install redux
npm install react react-redux --save
```

##### config directory
```
src
|
|--redux  -> contains redux component components include action reducer
|   |
|   |--action -> contains action implement in app
|   |    |-- index.js  : contains example: import * as types from './constanst/types'
|   |                                      export const CHANGE_USER = (user) => ({ type: action.CHANGE_USER, user })
|   |--constanst
|   |    |--types.js   : contains example: export const CHANGE_USER = 'CHANGE_USER'
|   |
|   |--reducer
|   |    |-- index.js    : example i have 2 module is user manger and company manager, and combineReducers
|   |    |-- user.js     : include initalState, and reducer implement logic
|   |    |-- company.js  : include initalState, and reducer implement logic
|   |
|   
Index.js :  import { createStore } from 'redux';
            import { Provider } from 'react-redux';
            import myReducer from './components/redux/reducers/index'; 
            
            const store = createStore(myReducer)
            ReactDOM.render(<Provider store={store}><App </Provider>,document.getElementById('root'));registerServiceWorker();
```

## Spring 5
#### Practice with router
```
npm install react-router-dom --save
```
