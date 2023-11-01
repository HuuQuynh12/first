const initialState = {
    users: ["Aaaaaaaa", "B"],
    be : ['1111111', '22222'],
};

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state, 
                users: [...state.users, action.payload],
                be: ['check']
            };
        case "DELETE_USER":
                return {
                    ...state,
                    users: [...state.users, action.payload]
                };    
        default: 
            return state;
    }
};
export default useReducer;