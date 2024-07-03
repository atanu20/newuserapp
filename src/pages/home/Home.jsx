import React, { useState, useEffect, useContext } from 'react';

import { NavLink, useHistory } from 'react-router-dom';

import './Home.css';
import ReactPaginate from 'react-paginate';
import { userData } from '../../data/fdata';
import { CircularProgress } from '@material-ui/core';
import { DataContext } from '../../component/context/DataContext';

const Home = () => {
  
  const { alluserData , setAlluserData } = useContext(DataContext);
 
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(false);

  const [userId,setUserId]=useState("")
    const [name,setName]=useState("")
  const [imageUrl,setImageUrl]=useState("")
  const [phoneNumber,setPhoneNumber]=useState("")
  const [dob ,setDob]=useState("")


  const [pageNo, setPageNo] = useState(0);
  const perpage = 5;
  const pagevisit = pageNo * perpage;

  const dataall = alluserData?.slice(pagevisit, pagevisit + perpage);
  const boxno = Math.ceil(alluserData?.length / perpage);

  const likedChange = ({ selected }) => {
    setPageNo(selected);
  };


  const addUpdateData=async(e)=>{
    e.preventDefault();
   setLoading(true)
   const newdata={
   
    name,
    imageUrl,
    phoneNumber,
    dob
  }
 
   let ar=alluserData.map(user => user.id == userId ? { ...user, ...newdata } : user);


   
    
   setTimeout(() => {
    setLoading(false)
    setAlluserData(ar)
    setPreview(false)
    setUserId("")
    setName("")
    setImageUrl("")
    setPhoneNumber("")
    setDob("")
   }, 2000);

  }
 

  const onEditData=(id)=>{
    setPreview(true)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      let ar=alluserData.filter((u)=>u.id==id)
      setUserId(id)
    setName(ar[0].name)
    setImageUrl(ar[0].imageUrl)
    setPhoneNumber(ar[0].phoneNumber)
    setDob(ar[0].dob)
    }, 2000);
  }

  const onDeleteUser=(id)=>{
    let ar=alluserData.filter((u)=>u.id !=id)
    setAlluserData(ar)
  }

  return (
    <>
   
      <div className="home">
        <div className="container">
       
          <div className="card p-3">
            <h4>All Users</h4>
            <hr />
            {loading && (
              <>
                <div className="text-center">
                  <h5>Loading...</h5>
                </div>
              </>
            )}
            {dataall.length == 0 ? (
              <>
                <div className="text-center">
                  <h5>No Data</h5>
                </div>
              </>
            ) : (
              <>
                <div className="table-responsive">
                  <table class="table table-bordered">
                    <thead>
                      <tr className='bg-dark'>
                        <th className='text-custom'>Name</th>
                       
                        <th className='text-custom'>Image</th>
                        <th className='text-custom'>Phone</th>
                        <th className='text-custom'>DOB</th>
                        <th className='text-custom'>Operation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataall?.map((val) => {
                        return (
                          <>
                            <tr>
                              <td>{val.name}</td>
                              
                              <td>
                                <img src={val.imageUrl} alt="" className="smimg" />
                              </td>
                              <th>{val.phoneNumber}</th>
                              <th>{val.dob}</th>
                              <th>
                                <div className="optab">
                                  
                                    <i
                                      class="fa fa-pencil-square-o text-warning"
                                      aria-hidden="true"
                                      onClick={()=> onEditData(val.id)}
                                    ></i>
                                 
                                  <i
                                    class="fa fa-trash-o text-danger"
                                    aria-hidden="true"
                                    onClick={() => {
                                      if (
                                        window.confirm(
                                          'Are you sure about Delete?'
                                        )
                                      )
                                        onDeleteUser(val.id);
                                    }}
                                  ></i>
                                </div>
                              </th>
                            </tr>
                           
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </>
            )}
          </div>
          <div className="row">
            <ReactPaginate
              previousLabel={'Prev'}
              nextLabel={'Next'}
              pageCount={boxno}
              onPageChange={likedChange}
              containerClassName={'pagination'}
              // previousLinkClassName={"prevbutton"}
              // nextLinkClassName={"nextbutton"}
              // disabledClassName={"pagedisable"}
              activeClassName={'activebutton'}
            />
          </div>
        </div>
      </div>
      {
  preview && <div className="model_box">
  <div className="inner_model_big">
    <div className="cross" onClick={()=>setPreview(false)}>
      &times;
    </div>
    <h4>Edit User Details</h4>
    <br />
    <form onSubmit={addUpdateData}>
      {
        loading ?(
          <>

<div className="text-center">
<CircularProgress size={35} style={{'color': '#000000'}} />
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
                      <button className='btn btn-primary'>Save Data</button>
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

export default Home;
