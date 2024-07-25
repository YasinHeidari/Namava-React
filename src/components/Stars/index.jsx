import React, { useEffect, useState } from 'react'

const apiKey = "4fba95dbf46cd77d415830c228c9ef01";

export default function Stars() {
    const {data , setData} = useState({});

    useEffect(() => {
        async function fetchStar(){
            try {
                const res = await fetch(
                    ``
                ) 

            }catch{

            }
        }
    }), [];
  return (
  <div className='d-flex flex-column gap-8 ' style={{ margin: "-5rem 0 7rem", paddingTop: "80px" }}> 
    <div className='d-flex justify-start align-center gap-2'>
        <div className='col-lg-2'>
            <img src='' alt=''/>    
        </div>
        <div className='col-lg-10 d-flex flex-column gap-4 justify-start align-start'>
            <h2 className='font-md-24 white-color'>بیوگرافی </h2>
            <p className='white-color'></p>
        </div>        
    </div>
    <div className='d-flex flex-column justify-start align-start gap-4'>
        <h3 className='white-color font-xxl-16'>فیلم های </h3>
        <div className='d-flex flex-wrap'>

        </div>
    </div>
  </div>
  );
}
