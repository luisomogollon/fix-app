import "./App.css";
import { useState } from "react";
import imagenes from "../src/assets/imagenes";

function App() {
  const [cover, setCover] = useState("");
  function handleOnChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  }
  return (
    <section className="text-gray-600 body-font bg-gray-100">
      <section className="w-full px-8 text-gray-700 bg-slate-400">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="#_"
              className="flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                L'Art<span className="text-indigo-600">.</span>
              </span>
            </a>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <a
                href="#_"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
             
            </nav>
          </div>

          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end"></div>
        </div>
      </section>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div className="relative z-10 h-auto p-10 py-5 overflow-hidden bg-white border-b-2 border-gray-300  px-7">
            <label className="leading-8  font-semibold px-1   text-gray-600 mb-4">
              Subir Imagen
            </label>

            <input
              className="block w-full px-1 py-1 mb-4 bg-gray-50 border-2   rounded-sm border-gray-300 outline-none focus:border-indigo-500"
              aria-describedby="user_avatar_help"
              id="user_avatar"
              type="file"
              name="cover"
              onChange={handleOnChangeFile}
            />
            {cover && <img alt="uploaded cover img" src={cover} width="200" />}

            <label
              htmlFor=""
              className="leading-8  font-semibold px-1   text-gray-600 mb-4 "
            >
              Nombre De Obra
            </label>

            <input
              type="text"
              className="block w-full px-4  py-3 mb-4  border-2 b  bg-gray-50 rounded-sm border-gray-300 outline-none focus:border-indigo-500"
              placeholder="Picture name "
            />

            <div className="flex  gap-x-1 justify-items-center rounded-sm	 -mx-3">
              <div className="w-1/2 px-3 mb-5">
                <label
                  htmlFor=""
                  className="leading-8  font-semibold px-1   text-gray-600 "
                >
                  Año
                </label>

                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>

                  <input
                    type="text"
                    className="w-full -ml-10 pl-3 pr-3 py-2  bg-gray-50 border-2 border-gray-300 outline-none focus:border-indigo-500"
                    placeholder="Año"
                  />
                </div>
              </div>

              <div className="w-1/2 px-3 mb-5">
                <label
                  htmlFor=""
                  className="leading-8  font-semibold px-1   text-gray-600"
                >
                  Anchura
                </label>

                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center  pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>

                  <input
                    type="text"
                    className="w-full -ml-10 pl-3 pr-3 bg-gray-50 py-2 rounded-ms border-2 border-gray-300 outline-none focus:border-indigo-500"
                    placeholder="Achura"
                  />
                </div>
              </div>

              <div className="w-1/2 px-3 mb-5">
                <label
                  htmlFor=""
                  className="leading-8  font-semibold px-1   text-gray-600"
                >
                  Altura
                </label>

                <div className="flex">
                  <div className="w-10 z-10 pl-1 mt-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400  text-lg"></i>
                  </div>

                  <input
                    type="text"
                    className="w-full -ml-10 pl-3  bg-gray-50  pr-3 py-2 rounded-sm border-2 border-gray-300 outline-none focus:border-indigo-500"
                    placeholder="Altura"
                  />
                </div>
              </div>
            </div>

            <label
              htmlFor=""
              className="  leading-8  font-semibold px-1   text-gray-600"
            >
              Tecnica Del Pintor
            </label>

            <input
              type="text"
              className="block w-full px-4   py-3 mb-4  bg-gray-50 border-2   rounded-sm border-gray-300 outline-none focus:border-indigo-500"
              placeholder="Tecnica. "
            />

            <div className="relative">
              <label
                htmlFor="message"
                className="leading-8 font-semibold px-1   text-gray-600"
              >
                Descripción
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Escribe Una Descripcion."
                className="w-full border-gray-300 bg-gray-50 bg-opacity-50 rounded  border-2    focus:border-indigo-500 h-20  text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            <div className="block">
              <button className="w-full px-3 py-4 mt-5 font-medium text-white bg-indigo-600 rounded-lg">
                Crear Cuadro
              </button>
            </div>

            <p className="w-full mt-4 text-sm text-center text-gray-500">
              <a href="#_" className="text-indigo-500 underline">
                Cancelar
              </a>
            </p>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div className="flex justify-center">
            <img alt="imagen 2" src={imagenes.img5}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
