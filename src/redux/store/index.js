import { configureStore } from '@reduxjs/toolkit'

import filters from '../slices/filtersSlice'
import transfers from '../slices/transfersSlice' 
import tickets from '../slices/ticketsSlice'

const store =configureStore({
    reducer: {transfers, filters, tickets},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: { warnAfter: 128 },
    }),
      // eslint-disable-next-line
    devTools: process.env.NODE_ENV !== 'production',
})

export default store