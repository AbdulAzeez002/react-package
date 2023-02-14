
import { useState } from 'react';
import './App.css';
// import ImageUploader from './components/ImageUploader';
// ImageUploader
import axios from 'axios'
import ImageUploader from './lib/components/ImageUploader';



function App() {
  const [file,setFile]=useState(null)

  const handleSubmit=async(e)=>{
    console.log('submitted')
    console.log(file,'file')
    console.log(file,'filename')
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title',file.name)

    console.log(formData,"formData")


    try {

      const res = await axios.post('http://localhost:8000/uploadPhoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(res,'response')
      if(res.status==200){
        console.log('success')
      }
      
    } catch (error) {
      console.log(error,'error')
    }
    

  }

  return (
    <div className=' d-flex justify-content-center mt-5 ' >
      <div className='w-25 border border-dark pb-5 px-3'>
        <h4 className='text-center '>Image Uploader</h4>
        <form onSubmit={handleSubmit} >

          <ImageUploader value={setFile}/>
          
          <button type='submit' className='btn btn-info mt-1 '>Submit</button>

        </form>
      </div>

    </div>
  );
}

export default App;
