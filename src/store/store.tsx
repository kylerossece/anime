import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '@/store/slices/searchSlice'
import characterReducer from '@/store/slices/characterSlice'
export const store = configureStore({
    reducer: {
        search: searchReducer,
        character: characterReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch