import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Appcontext } from '../Context/Appcontext';



const UserLogin = () => {
    const [state, setstate] = useState('Login');
    
   const {settoken,setUserLoginpopup}=useContext(Appcontext);
    //user data
    const [fullname, setfullName] = useState('');
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');

    const submitHandle=async(e)=>{
        e.preventDefault();

        if(state==="SignUp"){
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/user/createuser`,{fullname,username,password});
            const data=response.data;
            
             if (data.status==='sucess') {
      
                 localStorage.setItem('token',data.token)
                 toast.success('User created successfully.');
                 settoken(data.token)
                 setUserLoginpopup(false);
             }else{
                toast.error(response.data.messgae);
             }
        }else{
            const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/user/Loginuser`,{username,password});
            const data=response.data;
            
             if (data.status==='sucess') {
      
                 localStorage.setItem('token',data.token)
                 settoken(data.token)
                 setUserLoginpopup(false);
                 toast.success('User Login successfully.');
                 
             }else{
              toast.error(response.data.messgae);
             }
        }
        
   
       setfullName(''),
       setpassword('');
       setusername('');
    }


  return (
    <div className=' absolute top-0 left-0 bottom-0 z-10 backdrop-blur-sm  w-full bg-black/30 flex justify-center items-center'>
        <form onSubmit={submitHandle} className=' relative flex gap-2 flex-col bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-xl text-center font-semibold'>User {state}</h1>
            <p className='text-lg text-center'>Welcome back! please sign in to login</p>
                {
                    state==="SignUp" &&
                     <input required value={fullname} onChange={e=>setfullName(e.target.value)} className='text-lg px-4 py-2 border rounded outline-none' type="text" placeholder='Your name' />
                }
            <input required value={username} onChange={e=>setusername(e.target.value)} className='text-lg px-4 py-2 border rounded outline-none' type="text" placeholder='Username' />
            <input required value={password} onChange={e=>setpassword(e.target.value)}  className='text-lg px-4 py-2 border rounded outline-none' type="text" placeholder='password '/>
            <button type='submit' className='text-lg cursor-pointer bg-blue-500 text-white px-4 py-2 rounded'>{state==='Login'?'Login':'SignUp'}</button>
            {
                state==="Login"?
                <p className='text-base text-center '>Dont have an Account? <span onClick={()=>setstate('SignUp')} className='cursor-pointer text-blue-800 font-semibold'>SignUP Here</span></p>
                :<p className='text-base text-center'>Already have an account? <span onClick={()=>setstate('Login')} className='cursor-pointer text-blue-800 font-semibold'>Login Here</span></p>

            }

            <p onClick={()=>setUserLoginpopup(false)} className='absolute top-5 right-9 text-2xl font-bold cursor-pointer'><i class="ri-close-line"></i></p>
        </form>
    </div>
  )
}

export default UserLogin