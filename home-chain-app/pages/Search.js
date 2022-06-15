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

    const filterResults = async() => {
        try{
            let estates = await vmContract.methods.getEstates().call()
            let newEstates = estates.map((estate, key) => ({
                ...estate,
                id: key
            }))
            let filteredEstates = newEstates
            let filterCity = document.getElementById("city")
            console.log(filterCity.value)
            if(filterCity.value != "City")
            {
                console.log("HERE1")
                filteredEstates = newEstates.filter(estate => estate.city === filterCity.value)
            }
            let filterPrice = document.getElementById("price")
            console.log(filterPrice.value)
            if(filterPrice.value != "Price")
            {
                console.log("HERE2")
                filteredEstates = filteredEstates.filter(estate => estate.price === filterPrice.value)
            }
            let filterFloors = document.getElementById("floors")
            console.log(filterFloors.value)
            if(filterFloors.value != "Floors")
            {
                console.log("HERE3")
                filteredEstates = filteredEstates.filter(estate => estate.floors === filterFloors.value)
            }
            let filterSquares = document.getElementById("squares")
            console.log(filterSquares.value)
            if(filterSquares.value != "Squaring")
            {
                console.log("HERE4")
                filteredEstates = filteredEstates.filter(estate => estate.squaring === filterSquares.value)
            }
            let filterDesc = document.getElementById("description")
            console.log(filterDesc.value)
            if(filterDesc.value)
            {
                console.log("HERE5")
                filteredEstates = filteredEstates.filter(estate => estate.description === filterDesc.value)
            }
            let filterForSale= document.getElementById("forsale")
            console.log(filterForSale.value)
            if(document.getElementById("forsale").checked)
            {
                console.log("HERE6")
                filteredEstates = filteredEstates.filter(estate => estate.forSale === 1)
            }
            setEstates(filteredEstates)
            console.log(filteredEstates)
        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <div class="field">
        <div class="control">
            <button onClick={() => filterResults()} class="button is-link">
                Search
            </button>
            <input class="input" id="description" type="text" placeholder="Search"/>
        </div>

        <div class="filters">
            <div class="select">
                <select name="slct" id="city">
                    <option>City</option>
                    <option value="Sofia">Sofia</option>
                    <option value="Varna">Varna</option>
                    <option value="Burgas">Burgas</option>
                    <option value="Blagoevgrad">Blagoevgrad</option>
                    <option value="Venice">Venice</option>
                    <option value="Budapest">Budapest</option>
                    <option value="Qmbol">Qmbol</option>
                </select>
            </div>

            <div class="select">
                <select name="slct" id="price">
                    <option>Price</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                    <option value="400">400</option>
                    <option value="500">500</option>
                    <option value="600">600</option>
                    <option value="700">700</option>
                </select>
            </div>

            <div class="select">
                <select name="slct" id="floors">
                    <option>Floors</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div class="select">
                <select name="slct" id="squares">
                    <option>Squaring</option>
                    <option value="99">99</option>
                    <option value="120">120</option>
                    <option value="130">130</option>
                    <option value="140">140</option>
                    <option value="150">150</option>
                    <option value="160">160</option>
                    <option value="170">170</option>
                </select>
            </div>

            <div class="check">
            <input type="checkbox" id="forsale" name="forsale" value="1"/>
            <label for="forsale"> For sale</label>
            </div>
        </div>

        

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
