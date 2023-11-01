import { useState, useEffect } from "react";
import Child from "./Child";

const SumOfEvenNumbers = () => {
    const [list, setList] = useState([1, 2, 3, 6, 7, 2, 5, 8, 1]);
    const [filter, setFilter] = useState([]);
   

    const handleFilter = () => {
        setList(list.filter((item) => {
           
            return (item == filter);
        }))
        console.log('danh sách', list)
    }
    
    return(
        <div>
         
            <Child listNumber={list} onFilter={handleFilter} filter={filter} setFilter={setFilter}/>
        Danh sách {list}
        
            
        </div>
    )
}

export default SumOfEvenNumbers;