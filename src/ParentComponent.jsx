import { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
    const [list, setList] = useState([1, 2, 3, 6, 7]);
    let [data, setData] = useState([])
    const [count, setCount] = useState(0);
    console.log("render");
    const handleAdd = useCallback(() => {
        if (data !== '') {
       setList([...list,data]);
       console.log(list);
       setData('');}
    }, [data])
    const handleCount = () => {
        setCount(count+1);
    }
    return (
        <div>
            <ChildComponent listNumber={list} />
            <input placeholder="Nhâp số" value={data} type="number" onChange={(e) => setData(e.target.value)}/> Nhập danh sách;
        <br></br>
        Danh sách{list}
        <button onClick={handleAdd}>Add</button> 
        <button onClick={handleCount}>count</button> <br></br>
        {count}
        
        </div>

    )
};

export default ParentComponent;