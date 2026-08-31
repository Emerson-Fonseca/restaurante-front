"use client"
import Image from "next/image"
import {useState} from "react"

export default function AdminPage(){

    const[descricao, setDescricao] = useState("")
    const[categoria, setCategoria] = useState("")
    const[preco, setPreco] = useState("")
    const[imagem, setImagem] = useState("")

async function cadastrarLanche(e:any){
    e.preventDefault

    try {   
        const response = await fetch("http://localhost:3001/produtos",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"  
            },
            body:JSON.stringify({
                descricao,
                categoria,
                preco,
                imagem
            })
        })
        if(response.ok){
            alert("Produto cadastrado com sucesso!")
        }
    } catch (error) {
        console.log(error)
        alert("Erro ao cadastrar")
    }
}


    return(
        <main className="mih-h-screen bg-gray-800 px-6 py-12">
            <div className="mx-auto max-w-x1 rounded-lg bg-gray-900 p-8 shadow">
                <h1 className="mb-6 text-3x1 font-bold">Cadastrar Lanche</h1>
                <form onSubmit={cadastrarLanche} className="space-y-5">
                    <div>
                        <label>Descrição</label>
                        <input type="text"
                        value={descricao}
                        onChange={(e)=> setDescricao(e.target.value)}
                        placeholder="Ex: Hambuguer Resenha-Dupla"
                        className="w-full rounded border p-3"/>
                    </div>

                     <div>
                        <label>Categoria</label>
                        <input type="text"
                        value={categoria}
                        onChange={(e)=> setCategoria(e.target.value)}
                        placeholder="Ex: Categoria.."
                        className="w-full rounded border p-3"/>
                    </div>

                    <div>
                        <label>Preço</label>
                        <input type="text"
                        value={preco}
                        onChange={(e)=> setPreco(e.target.value)}
                        placeholder=""
                        className="w-full rounded border p-3"/>
                    </div>

                       <div>
                        <label>Imagem</label>
                        <input 
                        type="text"
                        value={imagem}
                        onChange={(e)=>setImagem(e.target.value)}
                        placeholder="Insira o link da imagem"
                        className="w-full rounded border p-3"
                        />
                    </div>

                     {imagem && (

                        <div>

                            <p className="mb-2 font-medium">Previa</p>



                            <Image 

                            src={imagem}

                            alt="Previa do lanche"

                            width={400}

                            height={250}

                            className="h-48 w-full rounded object-contain"

                            />

                        </div>

                    )}



                    <button

                    type="submit"

                    className="w-full rounded bg-orange-500 py-3 font-semibold text-white hover:bg-amber-600 cursor-pointer">

                        Cadastrar Lanche

                    </button>

                </form>

            

            

            </div>

        </main>

    )

}
