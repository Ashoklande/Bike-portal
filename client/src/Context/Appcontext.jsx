import { createContext, useEffect, useState } from "react"
import axios from "axios";

export const Appcontext=createContext();

export  const AppcontextProvider=(props)=>{
    const [serchData, setSearchData] = useState({
        bikeName:'',
    })
   const [DataAdded, setDataAdded] = useState(false);
    const [bikeData, setbikeData] = useState([]);
    const [UserLoginpopup, setUserLoginpopup] = useState(false)
    
    //fetching datad from assets
     const fetchData=async()=>{
            
          const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/bike/getAllbike`);
            
          if(response.data.status==='success'){
                setbikeData(response.data.bikedata);
          }
        }

    const [Logindatauser, setLogindatauser] = useState('');
    const [token, settoken] = useState('');

    
    const value={
        serchData,setSearchData,
        bikeData, setbikeData,token,
        Logindatauser, setLogindatauser,settoken,setDataAdded,setUserLoginpopup,UserLoginpopup
    }
 
useEffect(()=>{
        fetchData();
              
},[DataAdded]);

const getdata= async()=>{
    
    if(token){
        const response=await axios.get(`${import.meta.env.VITE_BASE_URL}/user/profile`,{
            headers: {
              Authorization: `Bearer ${token}`,  // Pass token in Authorization header
            }})
    
        if (response.data.status==='sucess') {
          
            setLogindatauser(response.data.user);
            
        }
    }else{
        setLogindatauser('');
    }

  }

useEffect(()=>{ 

    const token=localStorage.getItem('token');
    
    settoken(token)
    getdata();
 
},[token])


    return (
        <Appcontext.Provider value={value}>
            {props.children}
        </Appcontext.Provider>
    )
}


