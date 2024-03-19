import { configureStore } from '@reduxjs/toolkit';
import fileReducer  from './Slice'

export const store = configureStore({
    reducer: {
        file: fileReducer
    },
})
