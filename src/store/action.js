export const addUser = (text) => (
    {
        type: "ADD_USER",
        payload: text,
    }
);
 const deleteUser = (text) => (
    {
        type: "DELETE_USER",
        payload: text,
    }
 )