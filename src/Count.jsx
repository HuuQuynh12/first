import { useReducer, useRef } from "react";


const initState = {
  todo: '',
  totalItems: 0,
  car: []
};
// Tạo state ban đầu
const SET_CART = 'set_cart';
const ADD_TO_CART = "ADD";
const DELETE_TO_CART = "DELETE";
const CONG_TO_CART = 'Cong';
const TRU_TO_CART = 'TRU';

const setCart = (payload) =>{
   return {
    type: SET_CART,
    payload
   }
}
const addToCart = (payload) =>{
  return {
   type: ADD_TO_CART,
   payload
  }
}
const deleteCart = (payload) =>{
  return {
    type: DELETE_TO_CART,
    payload,
  }
}
const congToCart = () => {
  return {
    type: CONG_TO_CART,
  }
}
const truToCart = () => {
  return {
    type: TRU_TO_CART,
  }
}


// action : Tạo action
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_CART:
      return {
        ...state,
        todo: action.payload
      };
      
    case ADD_TO_CART:
     
      return {
        ...state,
        car: [...state.car, action.payload],
        todo: ''
      };
    case DELETE_TO_CART:
      return {
        ...state,
        car: state.car.filter((item, index) => index !== action.payload),
      };
    case CONG_TO_CART:
      return {
        ...state,
        totalItems: state.totalItems + 1
      };
    case TRU_TO_CART:
      return {
        ...state,
        totalItems: state.totalItems - 1 
      };
    default:
      throw new Error('invalid');
  }
};
// reducer 

const Test = () => {
  
  const [state, dispatch] = useReducer(reducer, initState);

  const {todo, car, totalItems} = state;
  const inputRef = useRef();
  // ham check de cap nhat lai ham khoi tao, ham khoi tao

  const handleAdd = () => {
      dispatch(addToCart(todo));
      dispatch(setCart(''));
      dispatch(congToCart());

      inputRef.current.focus();
  };
  const handlDelete = (index) => {
    dispatch(deleteCart(index));
    dispatch(truToCart())
  }
 

  return (
    <div>
      Danh mục hàng hóa <br />
      Số món trong giỏ hàng: {totalItems}
      <br></br>
      <input 
      ref = {inputRef}
      placeholder="nhập dữ liệu" value={todo} onChange={(e) => dispatch(setCart(e.target.value))} />
      <button onClick={handleAdd}>Add</button>
      <ul> {car.map((todo, index) => (
        <li key={index}>{todo}
        <button onClick={() => handlDelete(index)} style={{margin: '5px'}}>Xóa khỏi giỏ hàng</button>
        </li>
       
      ))}
        
      </ul>
      
        
    </div>
    
  );
};

export default Test;

// useReducer => redux

// useReducer: giong useState, no cho phep cac ham logic vao
// state, dispatch(useReducer) => state,setState(useState)
// (ham check cap nhat, ham khoi tao)

// add, delete, update
