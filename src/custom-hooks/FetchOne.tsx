import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

interface useGetOne {
    id: string,
    vin: string,
    model?: string
}

export const useGetOne = (id: string) => {
    type Vehicle = {
        id?: string;
        vin?: string;
        make?: string;
        model?: string;
        year?: string;
        color?: string;
        description?: string;
    };
    const [ vehicleOne, setOne] = useState<Vehicle>({

    })

    

    async function handleOneFetch(id: string ) {
        const result = await server_calls.getone(id);
        setOne(result) 
    }

    useEffect( () => {
        handleOneFetch(id);
    }, [])

    return { vehicleOne, getOne:handleOneFetch}
}