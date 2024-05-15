import React, { useState } from 'react'


function Weather() {
    const [data , setData] = useState([null]);
    const [search, setSearch] = useState("");
     const handleClick = async()=>{
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=63ccd2ed6790363097d184c46728e1ef&units=metric`
       const data= await fetch(url);
       const res = await data.json();
       console.log(res)
       setData(res)
    }
    handleClick();
  return (
    <>
    <input onchange={(e) =>{
        setSearch(e.target.value)
    }} type="text" />
    <button onClick={handleClick}>Search</button>
    
    {
        data && (
            <>
             <div>{data.name}</div>
            </>
        )
    }
   



    
    </>
  )
}

export default Weather
