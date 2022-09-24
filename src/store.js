import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./reducers/tasksSlice";

// /dist/configureStore //

export const store = configureStore({

    reducer : {
        tasks: tasksSlice
    }

})