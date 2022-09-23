import "./App.css";
import imagenes from "../src/assets/imagenes";

function App() {
  return (
    <section class="text-gray-600 body-font bg-gray-100">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div class="relative z-10 h-auto p-10 py-5 overflow-hidden bg-white border-b-2 border-gray-300  px-7">
            <h3 class="mb-6 text-2xl font-medium text-center">Subir Imagen</h3>

            <label for="" className="text-xs font-semibold px-1 mb-4 ">
              Nombre De Obra
            </label>

            <input
              type="text"
              className="block w-full px-4  py-3 mb-4  border-2 b  rounded-sm border-gray-400 outline-none focus:border-indigo-500"
              placeholder="Picture name "
            />

            <div className="flex  gap-x-1 justify-items-center rounded-sm	 -mx-3">
              <div className="w-1/2 px-3 mb-5">
                <label for="" className="text-xs font-semibold px-1 ">
                  Año
                </label>

                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>

                  <input
                    type="text"
                    className="w-full -ml-10 pl-3 pr-3 py-2  border-2 border-gray-400 outline-none focus:border-indigo-500"
                    placeholder="Año"
                  />
                </div>
              </div>

              <div className="w-1/2 px-3 mb-5">
                <label for="" className="text-xs font-semibold rounded-sm px-1">
                  Anchura
                </label>

                <div className="flex">
                  <div className="w-10 z-10 pl-1 text-center  pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>

                  <input
                    type="text"
                    className="w-full -ml-10 pl-3 pr-3 py-2 rounded-ms border-2 border-gray-400 outline-none focus:border-indigo-500"
                    placeholder="Achura"
                  />
                </div>
              </div>

              <div className="w-1/2 px-3 mb-5">
                <label for="" className="text-xs font-semibold px-1">
                  Altura
                </label>

                <div className="flex">
                  <div className="w-10 z-10 pl-1 mt-1 text-center pointer-events-none flex items-center justify-center">
                    <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                  </div>

                  <input
                    type="text"
                    className="w-full -ml-10 pl-3   pr-3 py-2 rounded-sm border-2 border-gray-400 outline-none focus:border-indigo-500"
                    placeholder="Altura"
                  />
                </div>
              </div>
            </div>

            <label for="" className="text-xs font-semibold px-1">
              Tecnica Del Pintor
            </label>

            <input
              type="text"
              className="block w-full px-4  py-3 mb-4  border-2 border-transparent  rounded-sm border-gray-400 outline-none focus:border-indigo-500"
              placeholder="Tecnica. "
            />
           
          <div class="relative">
            <label for="message" class="leading-7  font-semibold px-1   text-gray-600">Descripción</label>
            <textarea id="message" name="message" class="w-full border-gray-400 bg-gray-100 bg-opacity-50 rounded  border-2  focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>

            <div class="block">
              <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">
                Crear Cuadro
              </button>
            </div>

            <p class="w-full mt-4 text-sm text-center text-gray-500">
              <a href="#_" class="text-blue-500 underline">
                Cancelar
              </a>
            </p>
          </div>
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div class="flex justify-center">
            <img alt="imagen 2" src={imagenes.img5}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
