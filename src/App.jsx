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
      <body className="w-full px-8 py-16 bg-gray-100 xl:px-8">
        <header className="max-content p-2">
          <h1 className="p-4 text-3xl font-semibold italic">L’Art</h1>
        </header>
        <main className="">
          <div className="grid grid-cols-2items-center justify-center min-h-screen">
            <h2 className="text-center mt-1 lg:text-4xl ms:text-4xl text-gray-900 italic tracking-wide uppercase font-extrabold   col-span-2 ">
              Agregar nuevo cuadro
            </h2>
            <div className="w-full mt-16 md:mt-0 md:w-2/5"> 
            
            
            
            
            </div>

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
