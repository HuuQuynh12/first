import { useEffect, useState } from "react";
import { Button, Modal, Input } from "@mantine/core";

const DeleteUser = (props) => {
  const {itemDelete, indexDelete, elements, setElements, openDelete, setOpenDelete, setCloneElements} = props;
 
 
  const confirmYes = () => {
    const newElements = [...elements];
    newElements.splice(indexDelete,1);
    console.log(newElements);
    setElements( newElements);
    setCloneElements( newElements);
    console.log('element', elements);
    console.log('Clone', )
    console.log('so dem', indexDelete);
    setOpenDelete(false);
  }
  const confirmNo = () => {
    setOpenDelete(false);
  }
 
  
  
      
 

     
  return (
    <>
    <Modal
        opened={openDelete}
        onClose={() => setOpenDelete(false)}
        title="Bạn có chắc chắn muốn xóa thông tin này không?"
      >
        
        <Button onClick={() => confirmYes()}>Yes</Button>
        <Button onClick={() => confirmNo()}>No</Button>
      </Modal>
    </>
  );
}

export default DeleteUser;