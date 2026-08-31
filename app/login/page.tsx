"use client"
import {useRouter} from "next/navigation"
import {useState} from "react"
import Swal from "sweetalert2"

export default function Login(){

    const router = useRouter()
    const [usuario,setUsuario]=useState("")
    const[senha,setSenha]=useState("")

    function entrar(){
        if(usuario === "admin" && senha === "123456"){
            localStorage.setItem("admin_logado","true")

            router.push("/admin")
            return
        }
    }
    return(
        <main className="flex h-screen items-center justify-center bg-gray-800">
            <div className="w-full max-w-md rounded-2xl bg-gray-800 p-8 shadow-lg border">
                <h1 className="mb-8 text-center font-bold">Área Administradora</h1>
                <p className="mb-8 text-center text-gray-500">Faça login para acessar o painel</p>
          

                <label>Usuario</label>
                <input type="text"
                value={usuario}
                onChange={(e)=> setUsuario(e.target.value)}
                placeholder="Digite seu usuário"
                className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"/>
            
            <div>
            <label>Senha</label>
                <input type="text"
                value={senha}
                onChange={(e)=> setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="mb-4 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"/>

            </div>

            <button onClick={entrar} className="w-full rounded bg-blue-500 py2 font-semibold text-white hover:bg-blue-600">
                Entrar
            </button>
            </div>
        </main>
    )
}