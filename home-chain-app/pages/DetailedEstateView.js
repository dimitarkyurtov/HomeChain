import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

export default function DetailedEstateView(props) {
  const [estate, setEstate] = useState({})
  const [price, setPrice] = useState(0)
  const [approvedAddress, setApprovedAddress] = useState('')
  const [error, setError] = useState('')
  const [approvedBuyer, setApprovedBuyer] = useState('')
  const [priceForSale, setPriceForSale] = useState('0')

  const getEstate = async () => {
        try{
            let estate = await props.vmContract.methods.getEstateById(props.eid).call()
            setEstate(estate)
            let approvedBuyer = await props.vmContract.methods.getAddressOfApprovedBuyer(props.eid).call()
            setApprovedBuyer(approvedBuyer)
            let priceForSale = await props.vmContract.methods.getPricesSaleOfEstate(props.eid).call()
            setPriceForSale(priceForSale)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() =>{
        getEstate()
    }, [])

    const announceEstateForSale = async () =>{
      try{
        await props.vmContract.methods.announceEstateForSale(props.eid, props.web3.utils.toWei(price, 'ether')).send({
          from: props.address
        })
        setError(`Successfully announced estate ${props.eid} for sale`)
      }catch(err){
        setError(`Announcing estate ${props.eid} for sale failed with error ${err.message}`)
      }
    }
    
    const purchaseProperty = async () =>{
      try{
        await props.vmContract.methods.purchaseProperty(props.eid).send({
          from: props.address,
          value: props.web3.utils.toWei(price, 'ether')
        })
        setError(`Successfully purchased estate ${props.eid}`)
      }catch(err){
        setError(`Purchasing estate ${props.eid} failed with error ${err.message}`)
      }
    }

    const approveBuyer = async () =>{
      try{
        await props.vmContract.methods.approveBuyer(props.eid, approvedAddress).send({
          from: props.address
        })
        setError(`Successfully approved buyer ${approvedAddress}`)
      }catch(err){
        setError(`Approving buyer ${approvedAddress} failed with error ${err.message}`)
      }
    }

    const updatePrice = event => {
      setPrice(event.target.value)
    }

    const updateApprovedAddres = event => {
      setApprovedAddress(event.target.value)
    }

    const announceEstateNotForSale = async () => {
      try{
        await props.vmContract.methods.announceEstateNotForSale(props.eid).send({
          from: props.address
        })
        setError(`Estate ${props.eid} not for sale anymore`)
      }catch(err){
        setError(`Estate ${props.eid} not for sale failed with error ${err.message}`)
      }
    }
    
  return (
    <div>
      <div>DetailedEstateView</div>
      {
          priceForSale === '0' ? 
          null
          :
          <div>
            Price: {priceForSale/1000000000000000000} ether
          </div>
      }
      {
          approvedBuyer === props.address && approvedBuyer !== estate.owner ? 
          <div>
            <input onChange={updatePrice} className='input' type="number" placeholder='Price'></input>
            <button onClick={purchaseProperty} class="button is-danger">Buy</button>
          </div>
            :
          null
      }
      {
          estate.owner === props.address ? 
          <div>
            <input onChange={updatePrice} className='input' type="number" placeholder='Price'></input>
            <button onClick={announceEstateForSale} class="button is-warning">Announce</button>
          </div>
            :
          null
      }
      {
          estate.owner === props.address ? 
            <div>
              <input onChange={updateApprovedAddres} className='input' type="type" placeholder='address'></input>
              <button onClick={approveBuyer} class="button is-link">Approve</button>
            </div>
            :
            null
      }
      {
          estate.owner === props.address && priceForSale !== '0' ? 
            <div>
              <button onClick={announceEstateNotForSale} class="button is-link">Not for sale</button>
            </div>
            :
            null
      }
      <section>
          <div className='container has-text-danger'>
              <p>
                  {error}
              </p>
          </div>
      </section>
    </div>
  )
}
