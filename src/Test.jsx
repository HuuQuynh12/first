import { useEffect, useState } from "react";
import { Table, Button, Modal, Input, CloseButton } from "@mantine/core";
import AddUser from "./component/addUser";
import EditUser from "./component/editUser";
import DeleteUser from "./component/deleteUser";

const Test = () => {
    
    

    const [ openAdd, setOpenAdd] = useState(false);
    const [ openEdit, setOpenEdit] = useState(false);
    const [ openDelete, setOpenDelete] = useState(false);
    const [name, setName] = useState("");
   


    const [indexEdit, setIndexEdit] = useState();
    const [itemEdit, setItemEdit] = useState('');
    const [indexDelete, setIndexDelete] = useState();
    const [itemDelete, setItemDelete] = useState('');
    const [cloneElements, setCloneElements] = useState([
    {
      name: "A",
      position: "Dev",
      symbol: 1,
      mass: "none",
    },
    {
        name: "B",
        position: "Dev",
        symbol: 2,
        mass: "none",
      },
      {
        name: "C",
        position: "Dev",
        symbol: 3,
        mass: "none",
      },
      {
        name: "D",
        position: "Dev",
        symbol: 4,
        mass: "none",
      },
      {
          name: "F",
          position: "Dev",
          symbol: 5,
          mass: "none",
        },
      {
          name: "G",
          position: "Dev",
          symbol: 6,
          mass: "none",
        },
      {
          name: "H",
          position: "Dev",
          symbol: 2,
          mass: "none",
        },
        
            
  ]);
  const [elements, setElements] = useState(cloneElements);

  const handleOpenEdit = (element, index) => {
    setIndexEdit(index);
    setItemEdit(element);
    setOpenEdit(true);

  }
  const handleDelete = (element, index) => {
    setIndexDelete(index);
    setItemDelete(element);
    setOpenDelete(true);
  }
  const handleSearch = () => {
    if (name.length === '') {
      setElements(cloneElements);
      return;
    }
    else {
    const newName = name.toLocaleLowerCase();
    const newElements = cloneElements.filter((item) => 
      item.name.toLocaleLowerCase().includes(newName)    
    )
    setElements(newElements);}
  }

 
  const rows = elements.map((element, index) => (
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
      <td>
        <Button color="Yellow" onClick={() => handleOpenEdit(element, index)}>Edit</Button>
        <Button color="red" onClick={() => handleDelete(element, index)}>Delete</Button>
      </td>
    </tr>
  ));

    console.log('chinh', elements)

  return (
    <>
    <div style={{display: "flex"}}>
    <Input placeholder="Search" style={{width: '180px'}} value={name} onChange={(e) => setName(e.target.value)}/> 
   <Button onClick={() => handleSearch()}>Search</Button> 
    <Button onClick={() => setOpenAdd(!openAdd)}>Add</Button>
    </div>
    
    <div>
      <Table style={{ padding: "20px", margin: "20px" }}>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
    <AddUser 
    openAdd={openAdd} 
    setOpenAdd={setOpenAdd} 
    elements={elements} 
    setElements={setElements} 
    setCloneElements = {setCloneElements}
    />

    <EditUser 
    openEdit={openEdit} 
    setOpenEdit={setOpenEdit} 
    itemEdit={itemEdit}
    indexEdit={indexEdit}
    elements={elements} 
    setElements={setElements} 
    setCloneElements={setCloneElements}
    />

    <DeleteUser 
    openDelete={openDelete} 
    setOpenDelete={setOpenDelete} 
    itemDelete={itemDelete}
    indexDelete={indexDelete}
    elements={elements} 
    setElements={setElements} 
    setCloneElements={setCloneElements}
    />

    
  
    </>
  )

};

export default Test;    