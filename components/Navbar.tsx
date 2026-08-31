import Link from "next/link";


export default function Navbar(){

    return(

        <header className="w-full bg-gray-800 border-b shadow-sm">
            <nav className="mas-w-7x1 mx-auto px-8 py-4 flex items-center justify-between">
                <Link href="/" 
                className="flex items-center gap-2 text-2x1 font-bold text-orange-680">
                    Restaurante

                </Link>

                <div className="flex items-center gap-8">

                    <Link href="/" className="text-white hover:text-orange-600 transition">
                        Início
                    </Link>


                    <Link href="/cardapio" className="text-white hover:text orange-600 transition">
                        Cardápio
                    
                    </Link>

                    <Link href="/sobre" className="text-white hover:text-orange transition">
                        Sobre nós
                    </Link>

                      <Link href="/pedidos" className="text-white hover:text-orange transition">
                        Fazer pedido
                    </Link>
                    
                </div>

            </nav>

        </header>
    )
}
