
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useRef } from 'react'

function ImageUploader(props) {

  const [file,setFile]=useState(null)
  const [fileUrl, setFileUrl] = useState(null);
  const [full,setFull]=useState(false)

  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  const myRef = useRef(null);

    const handleChange=(e)=> {
        // console.log(e.target.files[0],'files target')
        props.value(e.target.files[0])
        setFileUrl(URL.createObjectURL(e.target.files[0]));
       
      }

      const fullImage=()=>{
        console.log('full')
        setFull(true)
       //  console.log(full,'full')
        
       }

      const remove=()=>{
        // console.log('removed')
        setFileUrl(null)
        setFull(false)
        myRef.current.value=""
      }
    
      const update=()=>{
        // console.log('updated')
        myRef.current.click()
      }

  return (
    <>
    <div class="form-group mt-4 mb-1">
    <input ref={myRef} type="file" onChange={handleChange} className='form-control shadow-none '  accept="image/png, image/gif, image/jpeg"/>  
  </div>

  {
         fileUrl ? <><div>
        <img data-modal-target="defaultModal"  onClick={handleShow} height={70} width={70} src={fileUrl} style={{cursor:"pointer"}} className="mt-4 pe-auto" />
        <div className="mb-3" >
            <a href="#"  onClick={remove} className=" pe-auto text-decoration-none me-2 text-danger " >delete</a>
            <a href="#"  onClick={update} className=" pe-auto text-decoration-none text-success " >update</a>
            
        </div>
    </div></>:null
    }

{/* Modal */}
<Modal show={show} onHide={handleClose} size="lg">


        <Modal.Header closeButton >
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
            <div className="w-100">
            <img  src={fileUrl}  className="d-flex  justify-content-center w-100 h-100"/>
            </div>
                
                </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default ImageUploader