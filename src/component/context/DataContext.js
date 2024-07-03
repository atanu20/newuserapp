import { createContext, useEffect, useState } from "react";
import { userData } from "../../data/fdata";


export const DataContext = createContext();



export const ConText = (props) => {
    
  const [alluserData,setAlluserData]=useState([])
  useEffect(()=>{
    setAlluserData(userData)
  },[])

  

    return (
      <>
        <DataContext.Provider
          value={{alluserData , setAlluserData  }}
        >
          {props.children}
        </DataContext.Provider>
      </>
    );
  };