// import { useSubmit } from "react-router-dom";
// import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import { useGetOne } from "../custom-hooks/FetchOne";

import { useForm } from "react-hook-form";
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseVin, chooseMake, chooseModel, chooseYear, chooseColor, chooseDescription } from "../redux/slices/RootSlice";


interface CarInventoryFormProps {
    vin?: string;
    id?: any;
    model?: any;
    year?: any;
    onClose: () => void;
}

2
/* fields from the Flask app
    id = db.Column(db.String, primary_key = True)
    vin = db.Column(db.String(20))
    make = db.Column(db.String(150))
    model = db.Column(db.String(100))
    year = db.Column(db.Integer)
    color = db.Column(db.String(100))
    description = db.Column(db.String(250), nullable=True

    CarInventoryFormProps

*/

const CarInventoryForm = (props: CarInventoryFormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore(); 
    // const selectedVehicle = server_calls.getone(props.id[0])
    const { vehicleOne } = useGetOne(props.id[0])
    // getOne(props.id[0])
    console.log(`This is the vin ${vehicleOne["vin"]}`)
    console.log(vehicleOne.year, props, props.id, props.id[0]);

    const make = vehicleOne.make
    
    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data) 
            console.log(`Updated: ${ data.vin } ${ props.id}`)
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()
        } else {
            dispatch(chooseVin(data.vin));
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(chooseColor(data.color));
            dispatch(chooseDescription(data.description));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 1000)
            event.target.reset()

            props.onClose()
        }
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {props.id.length > 0 ? <div><h1>Vehicle Info Update Form </h1> <p>Note: You must put info all fields.</p><br /></div>: <h1>Enter your new vehicle info</h1>}
                
                <div>
                    <label htmlFor="vin">Vehicle VIN Number</label>
                    <Input {...register('vin')} name='vin' placeholder={vehicleOne.vin}   />
                </div>
                <div>
                    <label htmlFor="make">Vehicle Make </label>
                    <Input {...register('make')} name='make' placeholder={vehicleOne.make} defaultValue={make} />
                </div>
                <div>
                    <label htmlFor="model">Vehicle Model</label>
                    <Input {...register('model')} name='model'  placeholder={vehicleOne.model}   />
                </div>
                <div>
                    <label htmlFor="year">Vehicle Year</label>
                    <Input {...register('year')} name='year' helperText = "Must enter a year for form to be valid" placeholder={vehicleOne.year} defaultValue={vehicleOne.year} />
                </div>
                <div>
                    <label htmlFor="color">Vehicle Color</label>
                    <Input {...register('color')} name='color' placeholder={vehicleOne.color} />
                </div>
                <div>
                    <label htmlFor="description"> Vehicle Description</label>
                    <Input {...register('description')} name='description' placeholder={vehicleOne.description} />
                </div>
                <div className="flex p-1">
                    <Button className="flex justify-start m-3 bg-pink-300 p-2 rounded hover:bg-pink-800 text-white">
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default CarInventoryForm