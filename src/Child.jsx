import {memo, useEffect, useState} from "react";

const Child = ({listNumber, onFilter, filter, setFilter}) => { 
   
    console.log('conponent con', {listNumber});
    

    return (
        <>
        <h1>ChildComponent</h1>
        {listNumber.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        <input placeholder="Bộ lọc" value={filter} type="text" onChange={(e) => setFilter(e.target.value)}/>
        <br></br>
        <button onClick={onFilter}>Lọc</button>
        <br></br>
        </>
    )
};
export default memo(Child);