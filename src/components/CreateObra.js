import React, { useState, useContext } from "react";
import ObrasContext from "./../context/Obras/ObrasContext";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateObra() {
  //estado global
  const ctx = useContext(ObrasContext);
  const history = useHistory();
  const { addObra } = ctx;

  //estado local
  const [newObra, setNewObra] = useState({
    name: "",
    sizeH: 0,
    sizeW: 0,
    sizeP: 0,
    materials: "",
    picturesUrl: "",
    availableForSale: true,
    price: 0,
    autor: "",
    contact: "",
  });
  //edo local
  const handleForm = (event) => {
    event.preventDefault();
    setNewObra({
      ...newObra,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addObra(newObra);
    history.push("/obras");
  };

  const handleUploadPhoto = async (event) => {
    console.log(event.target.files);

    const cloudinaryAPI =
      "https://api.cloudinary.com/v1_1/samanthacmic/image/upload";

    const data = new FormData();
    data.append("upload_preset", "Clase-Brillo-CR");
    data.append("file", event.target.files[0]);

    const result = await axios.post(cloudinaryAPI, data);
    console.log(result.data.secure_url);
    setNewObra((prevState) => ({
      ...prevState,
      picturesUrl: result.data.secure_url,
    }));
  };

  return (
    <>
      <form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div>
          <div>
          <h3 className="text-lg leading-6 font-medium text-gray-800 text-center">¿Eres artista? anuncia tu obra llenando el formulario</h3>
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
              CREA UNA OBRA NUEVA
            </h3>
          </div>
          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
            <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Nombre de tu obra
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm border-sm">
                    <input
                      input
                      value={newObra.name}
                      name="name"
                      placeholder="Mi Obra"
                      onChange={(e) => {
                        handleForm(e);
                      }}
                      className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Precio{" "}
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm border-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      $ (MXN)
                    </span>
                    <input
                      value={newObra.price}
                      name="price"
                      id="price"
                      placeholder="300"
                      className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                      onChange={(e) => {
                        handleForm(e);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="materials"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Materiales
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="materials"
                    name="materials"
                    placeholder="óleo, tela..."
                    value={newObra.materials}
                    rows={2}
                    onChange={(e) => {
                      handleForm(e);
                    }}
                    className="max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="picturesUrl"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Fotografía de tu obra
                </label>
                <input
                  type="file"
                  name="picturesUrl"
                  //value={newObra.picturesUrl}
                  onChange={(e) => {
                    handleUploadPhoto(e);
                  }}
                  className="relative cursor-pointer bg-white rounded-md font-medium text-cerulean-600 hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-turquoise"
                />
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="autor"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Nombre del autor
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm border-sm">
                    <input
                      input
                      value={newObra.autor}
                      name="autor"
                      placeholder="Autor"
                      onChange={(e) => {
                        handleForm(e);
                      }}
                      className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Contacto telefónico
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <div className="max-w-lg flex rounded-md shadow-sm border-sm">
                    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                      +52
                    </span>
                    <input
                      value={newObra.contact}
                      name="contact"
                      id="contact"
                      placeholder="555 986 7645"
                      className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md"
                      onChange={(e) => {
                        handleForm(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
              DIMENSIONES (centímetros):
            </h3>
            <h4 className="text-lg leading-6 font-medium text-gray-700 text-center">
              Recuerda solo poner los números (no letras ni caracteres
              especiales)
            </h4>
          </div>
          <div className="space-y-6 sm:space-y-3">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-2">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Altura de la obra
              </label>
              <div className="flex-3 block w-full max-w-lg shadow-sm block focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md">
                <input
                  value={newObra.sizeH}
                  name="sizeH"
                  onChange={(e) => {
                    handleForm(e);
                  }}
                />
              </div>
            </div>

            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Ancho de la obra
                </label>
                <div className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md">
                  <input
                    value={newObra.sizeW}
                    name="sizeW"
                    onChange={(e) => {
                      handleForm(e);
                    }}
                  />
                </div>
              </div>

              <div className="space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                  >
                    Profundidad de la obra (cm)
                  </label>
                  <div className="flex-1 block w-full max-w-lg shadow-sm block w-full focus:ring-turquoise focus:border-cerulean sm:text-sm border border-gray-300 rounded-md">
                    <input
                      value={newObra.sizeP}
                      name="sizeP"
                      onChange={(e) => {
                        handleForm(e);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-5">
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cerulean hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-turquoise text-center"
                >
                  Crear obra
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
