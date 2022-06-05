import React, { useState, useEffect } from 'react'
import EstateView from './EstateView';

export default function Search({ vmContract, setActiveTab }) {
    const [estates, setEstates] = useState([]);

    const getEstates = async () => {
        try{
            let estates = await vmContract.methods.getEstates().call()
            setEstates(estates)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() =>{
        getEstates()
    }, [])

  return (
    <div class="field">
        <label class="label">Search</label>
        <div class="control">
            <input class="input" type="text" placeholder="Search"/>
        </div>
        <div className='container-wrapper'>
            {
                estates.map((estate, key) => 
                    <EstateView estate={estate} id={key} key={key} setActiveTab={setActiveTab}/>
                )
            }
        </div>
    </div>
  )
}
