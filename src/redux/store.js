import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "redux/contactSlice";
import { persistReducer, persistStore } from 'redux-persist';

import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,

}

const persistedReducer = persistReducer(persistConfig, contactsReducer);

export const store = configureStore({
    reducer: {
        contacts: persistedReducer,   
    }
})

export const persistor = persistStore(store)
