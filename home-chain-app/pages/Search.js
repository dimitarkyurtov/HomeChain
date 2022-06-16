import React, { useState, useEffect } from 'react'
import EstateView from './EstateView';

export default function Search({ vmContract, setActiveTab }) {
    const [allEstates, setAllEstates] = useState([]);
    const [estates, setEstates] = useState([]);

    const getEstates = async () => {
        try{
            let estates = await vmContract.methods.getEstates().call()
            let newEstates = estates.map((estate, key) => ({
                ...estate,
                id: key
            }))
            console.log(newEstates)
            setEstates(newEstates)
            setAllEstates(newEstates)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() =>{
        getEstates()
    }, [])

    const filterResults = async() => {
        try{
            let filteredEstates = allEstates
            console.log("first")
            console.log(filteredEstates)
            let filterCity = document.getElementById("city")
            console.log(filterCity.value)
            if(filterCity.value !== "City")
            {
                console.log("HERE1")
                filteredEstates = filteredEstates.filter(estate => estate.city === filterCity.value)
            }
            let filterPrice = document.getElementById("price")
            console.log(filterPrice.value)
            if(filterPrice.value !== "Max Price")
            {
                console.log("HERE2")
                filteredEstates = filteredEstates.filter(estate => +estate.price <= +filterPrice.value)
            }
            let filterFloors = document.getElementById("floors")
            console.log(filterFloors.value)
            if(filterFloors.value !== "Floor")
            {
                console.log("HERE3")
                filteredEstates = filteredEstates.filter(estate => estate.floor === filterFloors.value)
            }
            let filterSquares = document.getElementById("squares")
            console.log(filterSquares.value)
            if(filterSquares.value !== "Min Squaring")
            {
                console.log("HERE4")
                filteredEstates = filteredEstates.filter(estate => +estate.squaring >= +filterSquares.value)
            }
            let filterDesc = document.getElementById("description")
            console.log(filterDesc.value)
            if(filterDesc.value)
            {
                console.log("HERE5")
                filteredEstates = filteredEstates.filter(estate => estate.description.includes(filterDesc.value))
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
                    <option>Max Price</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
            </div>

            <div class="select">
                <select name="slct" id="floors">
                    <option>Floor</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div class="select">
                <select name="slct" id="squares">
                    <option>Min Squaring</option>
                    <option value="0">0</option>
                    <option value="50">50</option>
                    <option value="99">99</option>
                    <option value="120">120</option>
                    <option value="130">130</option>
                    <option value="140">140</option>
                    <option value="150">150</option>
                    <option value="160">160</option>
                    <option value="170">170</option>
                    <option value="99">300</option>
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
