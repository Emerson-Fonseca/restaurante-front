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
    
  

       <div className="py-10">
        <h3>📍 Onde nos Encontrar</h3>
       
        <address>
            <p><strong>Endereço:</strong> RUA AMOSTRADINHA</p>
            <p><strong>Cidade:</strong> PETROLINA-PE PE</p>
            <p><strong>CEP:</strong> 67675-042</p>
            <p><em>Em frente do Restaurante Eduardo é lanche e Sabor Eduardo</em></p>
        </address>
    </div>

    </div>
    </main>
  );
}

