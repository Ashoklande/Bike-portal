import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Context/Appcontext';
import Loading from '../components/Loading';

const AddbikeData = () => {
    const [image, setfile] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);
    const navigate=useNavigate();
    const {setDataAdded}=useContext(Appcontext);
    const [bikeData ,setbikeData]=useState({
        name:'',
        company:'',
        price:'',
        color:'',
        owner:'',
        model:'',
        running:'',     
        address:"",
        description:"",

    });
    
    axios.defaults.withCredentials=true;
    const handleFileChange = (e) => {
        setfile(Array.from(e.target.files));    
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setbikeData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const onSubmitHandle=async(e)=>{
        e.preventDefault();
        toast.success('Adding Your data');
        setIsLoading(true);
        const form =new FormData()  
        form.append('name',bikeData.name);
        form.append('company',bikeData.company);
        form.append('color',bikeData.color);
        form.append('owner',bikeData.owner);
        form.append('model',bikeData.model);
        form.append('running',bikeData.running);
        form.append('price',bikeData.price);
        form.append('address',bikeData.address);
        form.append('description',bikeData.description);
        image.forEach((img) => {
            form.append('photo', img);  // Use a common field name like 'photos'
        });
         
        
        const token=localStorage.getItem('token')
       
        const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/bike/Addbike`,form,{
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": 'multipart/form-data', 

             // Pass token in Authorization header
      }})
        
      if (response.data.status==='success') {
        toast.success("data Added")
        setDataAdded(prev=>!prev);
       
        navigate('/BikeData');
      }
            
         setbikeData({
            name:'',
            company:'',
            color:'',
            owner:'',
            price:'',
            model:'',
            running:'',
            address:'',
            description:''
            
        })
        setfile([]);
        IsLoading(false);
    }
  return (
    <div className='h-screen w-full relative'>
        { IsLoading && <Loading/>}
     <Navbar/>
     <ToastContainer
        position='top-right'
        autoClose={5000} // 5 seconds auto-close
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <form onSubmit={onSubmitHandle}  className='h-[91%] w-full  bg-gradient-to-r from bg-red-200 to-green-100  px-20 py-10 max-sm:px-10'>
       <h2 className='text-center font-semibold text-2xl'> Add Selling Bike Datails </h2>
        <div className= ' max-sm:flex-col border rounded-md m-2 bg-amber-50 shadow-2xl flex sm:gap-0 gap-3 p-10'>
            <div className=' w-1/2 gap-3 p-10 grid grid-cols-2 max-sm:gap-0 max-sm:grid-cols-1 md:border-r-4 ' >
                <div className='mb-2' >
                    <h4 className='text-base  mb-2'>BikeName:</h4>
                    <input required value={bikeData.name} name='name' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type="text" placeholder='Like splender, pulser, etc' />
                </div>
                <div  className='mb-2'>
                    <h4 className='text-base  mb-2'>Company:</h4>
                    <input required value={bikeData.company} name='company' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type="text" placeholder=' Like Honda, Bajaj' />
                </div>
                <div  className='mb-2'>
                    <h4 className='text-base  mb-2'>Color:</h4>
                    <input required value={bikeData.color} name='color' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type="text" placeholder='Bike color' />
                </div>
                <div  className='mb-2'>
                    <h4 className='text-base  mb-2'>Owner:</h4>
                    <input required value={bikeData.owner} name='owner' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type="text" placeholder='ex-first owner,second owner etc' />
                </div>
                <div  className='mb-2'>
                    <h4 className='text-base  mb-2'>Model:</h4>
                    <input required value={bikeData.model} name='model' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type="text" placeholder='Ex-2019' />
                </div>
                <div  className='mb-2'>
                    <h4 className='text-base  mb-2'>Bike Running:</h4>
                    <input value={bikeData.running} name='running' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type='number' placeholder='2000 km' />
                </div>
                <div  className='mb-2'>
                    <h4 className='text-base  mb-2'>Bike selling price:</h4>
                    <input min={0} value={bikeData.price} name='price' onChange={handleChange} className='px-4 py-2 rounded border-3 border-green-600 outline-none text-base' type='number' placeholder='2000-4000 K' />
                </div>
                <div  className='mb-2'>
                    {image.length>0 ?
                    <div className=' w-fit'>
                           <p>Selected Photo: {image.length}</p>
                        <p className='text-red-500 font-medium text-xl cursor-pointer ' onClick={()=>setfile([])}>X</p>
                    <div className='flex gap-2  w-fit  p-2 '>
                       {image.map((img, index) => (
                                <img key={index} className='w-10 h-10 rounded-md ' src={URL.createObjectURL(img)} alt={`preview-${index}`} />
                            ))}
                       </div>
                        
                    </div>:
                      
                      <div>
                          <h4 className='text-base  mb-2'>select photo:</h4>
                          <input className='p-1 w-full max-w-36 rounded border-3 border-green-600 outline-none ' multiple required onChange={handleFileChange} id='fileinput'   type="file"  />
                   
                      </div> }
                   
                </div>
               
                <div className='w-1/2 max-sm:w-full '>
                    <h4 className='text-base  mb-2'>Address:</h4>
                    <textarea required value={bikeData.address} name='address' onChange={handleChange}  class="px-4 py-2 max-sm:w-[260px] rounded border-3 border-green-600 outline-none text-base" placeholder="Full Address here, Buyer can contact with you"></textarea>
                </div>
            </div>

            <div className='w-1/2 max-sm:w-full p-10 '>
                    <h4 className='text-base  mb-2'>Description (optional):</h4>
                    <textarea value={bikeData.description} name='description' onChange={handleChange} rows={6} class="px-4 py-2 w-full rounded border-3 border-green-600 outline-none text-base" placeholder="Reason why sell"></textarea>
             </div>
             
        </div>
        <div className='flex items-center justify-center' >
                <button type='submit' className='bg-green-500 px-6 py-2 rounded-md border-2 border-green-600 text-lg text-white hover:bg-green-400 hover:text-black cursor-pointer transition transform-view'>Add Detail</button>
       </div>
    </form>

    </div>
  )
}

export default AddbikeData