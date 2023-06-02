import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios'
import { useState } from 'react'
import {BsSearch, BySearch} from 'react-icons/bs'
import Weather from '@/components/Weather'
import Spinner from '@/components/Spinner'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);




  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
  
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };


  if (loading) {
    return <Spinner/>
  }
  else {
    return (
      <div>
  
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]'/>
        <Image src='https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=904&q=80'
         layout='fill'
         className='object-cover'/>
  
  
  
         {/* Search */}
         <div className='mt-10 relative flex justify-between items-center max-w-[500px] w-full m-auto text-white z-10'>
          <form onSubmit={fetchWeather} 
           className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
            <div>
              <input onChange={(e) => setCity(e.target.value)}
               className='bg-transparent border-none text-white focus:outline-none text-2xl' type="text" placeholder='Search city'/>
            </div>
            <button onClick={fetchWeather}><BsSearch size={20}/></button>
          </form>
         </div>
  
  
         {/* weather */}
  
         {weather.main && <Weather data={weather}/>}
  
  
  
  
  
      </div>
  
    )
  }
  
  }
  
  