import React from "react";


const Weather = ({data}) => {
    console.log(data)
    return ( 
    
    
    <div>
        <div>
            <div>
                <Image 
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt='/'
                width='100'
                height='100'/>
            </div>
        </div>
    </div>
     );
}
 
export default Weather;