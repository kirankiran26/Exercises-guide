import React, { useEffect, useState } from 'react'
import './Data.css'
const Data = () => {



  const [data,setdata]=useState([]);
  const [error,seterror]=useState(null);  
  const [loding,setloding]=useState(true);
  const fetchdata=async()=> {
    const url="https://api.api-ninjas.com/v1/exercises?muscle=triceps";
    const apiKey="DVy84wX0nxAr2ngHGoVK5w==FA5rgxELE6u48VtS";
    setdata(true);
    try {
      const responce=await  fetch(url,{
        method:'GET',
        headers:{
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
      if(!responce.ok) {
        throw new Error("Netwoek error....")
      }
  
      const results=await responce.json();
      setdata(results);
      setloding(false);
    } catch (error) {
      seterror(error.message);
      setloding(false);
    }
  }

  useEffect(()=>{
    fetchdata()
  },[])
  return (
   <div>
    <div >
      <input type="search" name="" placeholder='search here...' id="" />
      <button>search</button>
    </div>
    <div className='card'>
    <div >
     {loding && <h1>Loding....</h1>}
    </div>
    <div>
      {error && <h1>{error}</h1>}
    </div>
    <div >
      {!loding && !error && data.map((eachobj,index)=>{
        const{name,type,equipment,difficulty,instructions}=eachobj;
        return(
          <div key={index}>
            <h1>{name}</h1>
            <h3>{type}</h3>
            <h4>{equipment}</h4>
            <h5>{difficulty}</h5>
            <p>{instructions}</p>
          </div>
        )
      })}
    </div>
    </div>
   </div>
    
  )
}

export default Data