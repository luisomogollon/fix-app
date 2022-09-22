import "./App.css";
import imagenes from "../src/assets/imagenes";

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>L’Art</title>

        
      </head>
      <body className="min-h-screen w-full flex flex-col bg-gray-200 justify-between m-0 p-0 bg-whit text-gray-800">
        <header className="max-content p-2">
          <h1 className="p-4 text-3xl font-semibold italic">L’Art</h1>
        </header>
        <main className="">
          <div className="grid grid-cols-2items-center justify-center min-h-screen">
            <h2 className="text-center mt-1 lg:text-4xl ms:text-4xl text-gray-900 italic tracking-wide uppercase font-extrabold   col-span-2 ">
              Agregar nuevo cuadro
            </h2>
            <form className="grid grid-cols-2 w-full gap-2 p-2 items-center justify-center m-auto col-span-2 md:col-span-1">
              <div className="col-span-2">
                <label
                  for="imageFile"
                  className="cursor-pointer lg:text-2xl ms:text-4xl font-semibold italic w-full p-2 text-center block uppercase bg-black-400 rounded-sm hover:bg-blue-600"
                >
                  subir imagen
                </label>
                <input
                  type="file"
                  name="imageFile"
                  id="imageFile"
                  className="hidden"
                  onchange="previewImage()"
                />
              </div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded-sm col-span-2">
                <span className="block">Nombre:</span>
                <input
                  type="text"
                  className="bg-slate-200 rounded-sm w-full text-gray-700 outline-none p-1"
                />
              </div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded-sm">
                <span className="block">Año</span>
                <input
                  type="Number"
                  className="bg-slate-200 rounded-sm w-full text-gray-700 outline-none p-1"
                />
              </div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded-sm">
                <span className="block">Tecnica</span>
                <input
                  type="text"
                  className="bg-slate-200 rounded-sm w-full text-gray-700 outline-none p-1"
                />
              </div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded-sm">
                <span className="block">Altura</span>
                <input
                  type="number"
                  className="bg-slate-200 rounded-sm w-full text-gray-700 outline-none p-1"
                />
              </div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded-sm">
                <span className="block">Anchura</span>
                <input
                  type="number"
                  className="bg-slate-200 rounded-sm w-full text-gray-700 outline-none p-1"
                />
              </div>
              <div className="bg-gray-100 text-gray-700 p-2 rounded-sm col-span-2">
                <span className="block">Descripcion</span>
                <textarea
                  type="text"
                  rows="3"
                  className="w-full resize-none bg-slate-200 rounded-sm text-gray-700 outline-none p-1"
                ></textarea>
              </div>
              <button className="bg-indigo-700 hover:bg-indigo-800 w-full p-2  col-span-2 text-center items-center justify-center text-white rounded-sm">
                CREAR CUADRO
              </button>
            </form>

            <img
              src={imagenes.img5}
              alt=""
              className="p-4 m-auto w-full h-full rounded-sm block col-span-2 md:col-span-1"
              id="imagePreview"
            />
          </div>
        </main>
        <footer className="max-content flex items-center">
          <h2 className="italic text-lg font-semibold p-2">L’Art</h2>
          <p className="text-sm font-light">All rights reserverd</p>
        </footer>
        <script src="js/index.js"></script>
      </body>
    </html>
  );
}

export default App;
