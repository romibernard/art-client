import React, { useContext, useEffect, useState } from "react";
import ObrasContext from "./../context/Obras/ObrasContext";
import { useParams } from "react-router-dom";
import axiosClient from "./../config/axios"

export default function ObraDetails() {
    const { id } = useParams();
    console.log(id);
    const [obra, setObra] = useState({});
    useEffect(() => {

        const getResponse = async () => {
            console.log("...");
            const res = await axiosClient.get(`/api/obras/${id}`);
            console.log(res);
            const obra = res.data.data;
            setObra(obra);
        };
        getResponse();
    }, [id]);

    return (
        <>
            <div class="mt-4">
                <h1 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">{obra.name}</h1>
                <div class="flex items-center">
                    <p class="text-lg text-gray-900 sm:text-xl">${obra.price}.ºº (MXN)</p>
                </div>
            </div>
            <div class="mt-4 space-y-6">
                <p class="text-base text-gray-500">{obra.materials}</p>
            </div>
            <div class="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div class="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                    <img src={obra.picturesUrl} alt="Imagen de obra" class="w-full h-full object-center object-cover" />
                </div>
            </div>
        </>
    )
}
