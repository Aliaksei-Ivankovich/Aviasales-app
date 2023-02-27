import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    activeFilter: '', 
    filters: [
        { name: 'CHEEAP', label: 'Самый дешевый' },
        { name: 'FAST', label: 'Самый быстрый' },
        { name: 'OPTIMUM', label: 'Оптимальный' } 
    ]
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        filtersChanged: (state, action) => { 
            state.activeFilter = action.payload === state.activeFilter ? '' : action.payload 
        }
    }
})

const { reducer, actions } = filtersSlice

export default reducer
export const { filtersChanged } = actions