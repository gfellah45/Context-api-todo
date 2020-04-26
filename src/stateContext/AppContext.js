import React, { createContext, useReducer } from "react";

// initial state
const initiatState = {
	list: [],
};

// appReducer start.............................................

const AppReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return {
				...state,
				list: [...state.list, action.payload],
			};
		case "DELETE_ITEM":
			return {
				...state,
				list: state.list.filter((each) => each.id !== action.payload),
			};

		default:
			return state;
	}
};
// appReducer end..........................................................

// list context
export const ListContext = createContext(initiatState);

// provider component start ............................................
export const ListProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initiatState);

	// actions start

	const deleteA = (id) => {
		dispatch({
			type: "DELETE_ITEM",
			payload: id,
		});
	};

	const additems = (items) => {
		dispatch({
			type: "ADD_ITEM",
			payload: items,
		});
	};

	// action end

	// return value for the context provier
	return (
		<ListContext.Provider
			value={{
				list: state.list,
				handleDelete: deleteA,
				addedItem: additems,
			}}
		>
			{children}
		</ListContext.Provider>
	);
};
//content provider end....................................
