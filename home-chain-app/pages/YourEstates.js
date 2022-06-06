import React, { useState, useEffect } from 'react'
import EstateView from './EstateView';

export default function YourEstates({ address, vmContract, setActiveTab }) {
    const [estates, setEstates] = useState([]);

    const getEstates = async () => {
        try{
            let estates = await vmContract.methods.getEstates().call()
            let newEstates = estates.map((estate, key) => ({
                ...estate,
                id: key
            }))
            console.log(newEstates)
            let filteredEstates = newEstates.filter(estate => estate.owner === address)
            setEstates(filteredEstates)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() =>{
        getEstates()
    }, [])

  return (
    <div class="field">
        <div className='container-wrapper'>
            {
                estates.map((estate, key) => 
                    <EstateView estate={estate} id={estate.id} key={key} setActiveTab={setActiveTab}/>
                )
            }
        </div>
    </div>
  )
}
