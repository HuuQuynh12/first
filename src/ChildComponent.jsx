import {memo, useEffect, useState} from "react";

const ChildComponent = ({listNumber, onAdd}) => { 
   
    console.log('conponent con', {listNumber});
    return (
        <>
        <h1>ChildComponent</h1>
        {listNumber.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </>
    )
};
export default memo(ChildComponent);