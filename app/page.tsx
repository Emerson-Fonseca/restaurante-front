"use client"
import Image from "next/image";

export default function Home() {
 
    async function cadastrar(e:any) {
     
      alert("Produto cadastrado com sucesso!")
    }
 
 
 
 
 
 
 
  return (

    <main className="mih-h-screen bg-gray-800 flex items-center justify-center ">
      <div className="flex-1 flex flex-col items-center justify-center text-center p-10">
        
        <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/restauranteResenha.png"
            alt="Restaurante Boa Resenha"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    <div className="w-full max-w-lg bg-gray-900 rounded-x1 flex flex-col items-center justify-center rounded-2xl shadow-md p-8 min-h-screen">
          
      <h1 className="text-2x1 font-bold mb-6 ">Restaurante - Boa Resenha</h1>    
          <Image
      src="/logoResenha.png"
      alt="Logotipo"
      width={200}
      height={200}
      className="mx-auto mb-4 rounded-full"
      />
      
      
      <h2>O lugar onde toda resenha começa🤣👌</h2>
    
  

      <input type="text" placeholder="Digite a descrição:" className="my-5 w-full px-4 py-2 text-sm text-slate-700 bg-transparent border border-slate-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-400 placeholder:text-slate-400"
      
      />
    
      <input type="number" placeholder="Digite o preço:" className="w-full px-4 py-2 text-sm text-slate-700 bg-transparent border border-slate-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-400 placeholder:text-slate-400"
      
      />

      <input type="text" placeholder="Digite a categoria:" className="my-5 w-full px-4 py-2 text-sm text-slate-700 bg-transparent border border-slate-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-400 placeholder:text-slate-400"
      
      />

       <input type="text" placeholder="Tem o lanche?" className="my- w-full px-4 py-2 text-sm text-slate-700 bg-transparent border border-slate-300 rounded-lg shadow-sm transition-colors duration-200 ease-in-out focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 hover:border-slate-400 placeholder:text-slate-400"
      
      />


      <button className="cursor-pointer mt-10 w-full py-3 px-4 bg-gray-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2" 
      onClick={cadastrar}
      
      >Cadastrar

      </button>
      
    </div>
    </main>
  );
}

