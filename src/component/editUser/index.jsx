import { useEffect, useState } from "react";
import { Button, Modal, Input } from "@mantine/core";

const EditUser = (props) => {
  const {openEdit, setOpenEdit, itemEdit, indexEdit, elements, setElements, setCloneElements} = props;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [symbol, setSymbol] = useState('');
  const [mass, setMass] = useState('');

  useEffect(() => {
    setPosition(itemEdit.position);
    setName(itemEdit.name);
    setSymbol(itemEdit.symbol);
    setMass(itemEdit.mass);
  },[itemEdit, indexEdit])

  const handleEditUser = () => {
    const newElements = [...elements];
    newElements[indexEdit] = {
        name,
        position,
        symbol,
        mass
    }
    console.log(newElements)
    setCloneElements(newElements);
    setElements(newElements);
    setOpenEdit(false); 
    }

     
  return (
    <>
    <Modal
        opened={openEdit}
        onClose={() => setOpenEdit(false)}
        title="Sửa thông tin"
      >
        <Input placeholder="Your position" 
            value={position} 
            onChange={(e) => setPosition(e.target.value)}
            style={{margin: '12px'}} 
        />
        <Input placeholder="Your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            style={{margin: '12px'}} 
        
        />
        <Input placeholder="Your symbol" 
            value={symbol} 
            onChange={(e) => setSymbol(e.target.value)}
            style={{margin: '12px'}} 
        
        />
        <Input placeholder="Your atomic mass" 
            value={mass} 
            onChange={(e) => setMass(e.target.value)}
            style={{margin: '12px'}} 
        
        />
        <Button onClick={handleEditUser}>Save</Button>
      </Modal>
    </>
  );
}

export default EditUser;