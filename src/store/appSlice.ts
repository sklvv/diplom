import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
	value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
	value: 0,
};

export const appSlice = createSlice({
	name: "app",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		increment: state => {
			state.value += 1;
		},
		decrement: state => {
			state.value -= 1;
		},
		// Use the PayloadAction type to declare the contents of `action.payload`
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.value += action.payload;
		},
	},
	selectors: {
		selectCount: (state: CounterState) => state.value,
	},
});

export const { increment, decrement, incrementByAmount } = appSlice.actions;

export default appSlice.reducer;
