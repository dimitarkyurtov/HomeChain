import React, { useState, useEffect } from 'react'
import Web3 from 'web3'

var arrImg = new Array()
arrImg[0] = 'https://images.adsttc.com/media/images/5e68/48ed/b357/658e/fb00/0441/slideshow/AM1506.jpg'
arrImg[1] = 'https://smilyhomes.com/wp-content/uploads/2022/05/house.jpg'
arrImg[2] = 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg'
arrImg[3] = 'https://images.adsttc.com/media/images/623c/79f4/40c9/f001/65ef/d5bf/medium_jpg/035-z-line-house-mssm-associates.jpg'
arrImg[4] = 'https://q4g9y5a8.rocketcdn.me/wp-content/uploads/2020/02/home-banner-2020-02-min.jpg'
arrImg[5] = 'https://archello.s3.eu-central-1.amazonaws.com/images/2018/10/11/Contemporary-Modern-House-Design-6.1539270983.8601.jpg'
arrImg[6] = 'https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero.jpg'
arrImg[7] = 'https://lede-admin.blockclubchicago.org/wp-content/uploads/sites/5/2019/06/pinkhouse2.jpg'
arrImg[8] = 'https://media.udoma.bg/539/conversions/Marvell-House-2-large.jpg' 
arrImg[9] = 'https://media-cdn.tripadvisor.com/media/photo-s/12/4c/0a/ba/montecristo-country-house.jpg'

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
    <div className='DetailedEstateView'>
      
      <div>
          <img src = {arrImg[Math.floor(Math.random()*arrImg.length)]}/>
      </div>

      <div className='header1'><h1>Estate details:</h1></div>
      <div className='Text'>
          <p>Owner address: {estate.owner}</p>
          <p>Tenant address: {estate.tenant == '0' ? estate.tenant : "No tenant"}</p>
          <p>Is it for rent? : {estate.forRent ? "Yes" : "No"}</p>
          <p>Is it for sale? : {estate.forSale ? "Yes" : "No"}</p>
          <p>Squaring: {estate.squaring}</p>
          <p>Number of floors: {estate.floor}</p>
          <p>Type of construction: {estate.construction}</p>
          <p>City location: {estate.city}</p>
          <p>Neighborhood: {estate.neighborhood}</p>
          <p>Description: {estate.description}</p>
          <p>Owner phone number: {estate.phone}</p>
      </div>

      {
          priceForSale === '0' ? 
          null
          :
          <div className='price'>
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
            <button onClick={announceEstateForSale} id="announce" class="button is-warning">Announce</button>
          </div>
            :
          null
      }
      {
          estate.owner === props.address ? 
            <div>
              <input onChange={updateApprovedAddres} className='input' type="type" placeholder='address'></input>
              <button onClick={approveBuyer} id="approve" class="button is-link">Approve</button>
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
