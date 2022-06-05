import React from 'react'
import { useState, useEffect } from 'react'

export default function Estate(props) {
    const [form, setForm] = useState({});
    const [error, setError] = useState('');

    const updateOwnerAddress = event => {
        let newOwner = {}
        newOwner = {ownerAddress: event.target.value}
        setForm(form => ({
            ...form,
            ...newOwner
        }))
    }

    const updateSquaring = event => {
        let newSquaring = {}
        newSquaring = {squaring: event.target.value}
        setForm(form => ({
            ...form,
            ...newSquaring
        }))
    }

    const updateFloor = event => {
        let newFloor = {}
        newFloor = {floor: event.target.value}
        setForm(form => ({
            ...form,
            ...newFloor
        }))
    }

    const updateConstruction = event => {
        let newConstruction = {}
        newConstruction = {construction: event.target.value}
        setForm(form => ({
            ...form,
            ...newConstruction
        }))
    }

    const updateCity = event => {
        let newCity = {}
        newCity = {city: event.target.value}
        setForm(form => ({
            ...form,
            ...newCity
        }))
    }

    const updateNeighborhood = event => {
        let newNeighborhood = {}
        newNeighborhood = {neighborhood: event.target.value}
        setForm(form => ({
            ...form,
            ...newNeighborhood
        }))
    }

    const updateDescription = event => {
        let newDescription = {}
        newDescription = {description: event.target.value}
        setForm(form => ({
            ...form,
            ...newDescription
        }))
    }

    const updatePhone = event => {
        let newPhone = {}
        newPhone = {phone: event.target.value}
        setForm(form => ({
            ...form,
            ...newPhone
        }))
    }

    const addEstateHandler = async () => {
        try{
            console.log(form)
            await props.vmContract.methods.addEstate(form.ownerAddress, form.squaring, form.floor, form.construction, form.city, form.neighborhood, form.description, form.phone).send({
                from: props.address
            })
            setError('Estate added!')
        } catch(err) {
            setError(err.message)
        }
    }

  return (
    <div>
        <section>
            <div className='container'>
                <h2>Real estates: </h2>
            </div>
        </section>
        <section className='mt-5'>
            <div className='container'>
                <div className='field'>
                    <label className='label'>
                        Add estate
                    </label>
                    <div className='control'>
                        <input onChange={updateOwnerAddress} className='input' type="type" placeholder='Owner address'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updateSquaring} className='input' type="type" placeholder='Squaring'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updateFloor} className='input' type="type" placeholder='Floor'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updateConstruction} className='input' type="type" placeholder='Construction'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updateCity} className='input' type="type" placeholder='City'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updateNeighborhood} className='input' type="type" placeholder='Neighborhood'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updateDescription} className='input' type="type" placeholder='Description'></input>
                    </div>
                    <div className='control'>
                        <input onChange={updatePhone} className='input' type="type" placeholder='Phone'></input>
                    </div>
                    <button onClick={addEstateHandler} className='button is-primary mt-2'>
                        Add estate
                    </button>
                </div>
            </div>
        </section>
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
