import CounterReducer from './CounterReducer'
import { configureStore } from '@reduxjs/toolkit';


const store =configureStore({
    reducer: {
        counter: CounterReducer,

    }
})

export default store;