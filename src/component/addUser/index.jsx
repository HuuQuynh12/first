import { useEffect, useState } from "react";
import { Button, Modal, Input } from "@mantine/core";

const AddUser = (props) => {
  const {openAdd, setOpenAdd, elements, setElements, setCloneElements} = props;
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [symbol, setSymbol] = useState('');
  const [mass, setMass] = useState('');

  useEffect(() => {
    console.log("props",props);
  }, [])

  const handleAddUser = () => {
    const data = {
    name: name,
    position: position,
    symbol: symbol,
    mass: mass,
     };
     
     setElements([...elements, data]);
     setCloneElements([...elements, data]);
     setOpenAdd(false);
     setPosition('');
     setName('');
     setSymbol('');
     setMass('');
    }
  return (
    <>
    <Modal
        opened={openAdd}
        onClose={() => setOpenAdd(false)}
        title="Thêm thông tin"
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
        <Button onClick={handleAddUser}>Save</Button>
      </Modal>
    </>
  );
}

export default AddUser;