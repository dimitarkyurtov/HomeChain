import React, { useState, useEffect } from 'react'

export default function DetailedEstateView(props) {
  const [estate, setEstate] = useState({})

  const getEstate = async () => {
        try{
            let estate = await props.vmContract.methods.getEstateById(props.eid).call()
            setEstate(estate)
            console.log(estate)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() =>{
        getEstate()
    }, [])

  return (
    <div>DetailedEstateView</div>
  )
}
