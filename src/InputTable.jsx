import "./Input.css";
const InputTable = (props) => {
    const {propsheader, propsbody} = props;
    return(
        <>
<table>
    <thead> 
        <tr>
            {propsheader.map((item) => (
                <th>{item}</th>
            ))}
        </tr>
    </thead>
    <tbody>
        {propsbody.map((item) => (
            <tr>
                {Object.values(item).map((item1) => (
                    <td>{item1}</td>
        ))}
            </tr>
        )
        )}
        
        
    </tbody>
</table>
        </>
    );
};


export default InputTable;