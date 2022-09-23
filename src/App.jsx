import "./App.css";
import imagenes from "../src/assets/imagenes";

function App() {
  return (
    <section class="text-gray-600 body-font bg-gray-100">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7">
            <h3 class="mb-6 text-2xl font-medium text-center">
              Sign in to your Account
            </h3>

            <label for="" className="text-xs font-semibold px-1">
              Name
            </label>

            <input
              type="text"
              className="block w-full px-4  py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Picture name "
            />

<div className="flex -mx-3">
                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Año
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>

                    <input
                      type="text"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Width"
                    />
                  </div>
                </div>

                <div className="w-1/2 px-3 mb-5">
                  <label for="" className="text-xs font-semibold px-1">
                    Tecnica
                  </label>

                  <div className="flex">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>

                    <input
                      type="text"
                      className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Height"
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
                      className="w-full -ml-10 pl-3   pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Year"
                    />
                  </div>
                </div>
              </div>
            

            <div class="block">
              <button class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">
                Log Me In
              </button>
            </div>

            <p class="w-full mt-4 text-sm text-center text-gray-500">
              Don't have an account?{" "}
              <a href="#_" class="text-blue-500 underline">
                Sign up here
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
