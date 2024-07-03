import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { DataContext } from '../context/DataContext';
import { CircularProgress } from '@material-ui/core';

const NavOne = () => {

  const { alluserData , setAlluserData } = useContext(DataContext);
  
  const [loading, setLoading] = useState(false);

  const [preview, setPreview] = useState(false);

  const [name,setName]=useState("")
  const [imageUrl,setImageUrl]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [dob ,setDob]=useState("")


 


  const addData=async(e)=>{
    e.preventDefault();
   setLoading(true)
    const data={
      id: Math.floor(1000 + Math.random() * 9000),
      name,
      imageUrl,
      phoneNumber,
      dob
    }
   setTimeout(() => {
    setLoading(false)
    setAlluserData([data,...alluserData])
    setPreview(false)
    setName("")
    setImageUrl("")
    setPhoneNumber("")
    setDob("")
   }, 2000);

  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink to="/" className="navbar-brand text-custom font-weight-bold">
          User
          <span class="text-success ">App</span>
        </NavLink>

       
            <button className="btn btn-primary" onClick={()=>setPreview(true)}>
              Add User
            </button>
          
      </nav>

      {
  preview && <div className="model_box">
  <div className="inner_model_big">
    <div className="cross" onClick={()=>setPreview(false)}>
      &times;
    </div>
    <h4>Add User Details</h4>
    <br />
    <form onSubmit={addData}>
      {
        loading ?(
          <>

<div className="text-center">
<CircularProgress size={35}  style={{'color': '#000000'}}/>
</div>
          
          </>

        ):(
          <>
           <div class="form-group">
                      
                      <input
                        type="text"
                        placeholder="Enter User Name"
                        class="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        
                      />
                    </div>
                    <div class="form-group">
                      
                      <input
                        type="text"
                        placeholder="Enter Image Url"
                        class="form-control"
                        name="imageUrl"
                        onChange={(e) => setImageUrl(e.target.value)}
                        required
                        value={imageUrl}
                        
                      />
                    </div>
                    <div class="form-group">
                      
                      <input
                        type="text"
                        placeholder="Enter Phone No"
                        class="form-control"
                        name="phoneNumber"
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        value={phoneNumber}
                        
                      />
                    </div>
                    <div class="form-group">
                      
                      <input
                        type="date"
                        placeholder="Enter Dob"
                        class="form-control"
                        name="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                       
                        required
                        
                      />
                    </div>
                    <div className="text-center">
                      <button className='btn btn-primary'>Submit</button>
                    </div>

          </>
        )
      }

   
    </form>
  </div>
</div>
}
    </>
  );
};

export default NavOne;
