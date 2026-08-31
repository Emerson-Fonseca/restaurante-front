import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-800 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white">
            Sobre nós
          </h1>

          <p className="mt-3 text-gray-400">
            Conheça um pouco mais sobre o nosso restaurante
          </p>
        </div>

       
        <div className="grid items-center gap-10 md:grid-cols-2">

          
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/logoResenha.png"
              alt="Restaurante"
              width={600}
              height={400}
              className="h-[400px] w-full object-cover"
            />
          </div>

          
          <div>
            <h2 className="mb-5 text-3xl font-bold text-white">
              Bem-vindo ao nosso restaurante
            </h2>

            <p className="mb-5 text-lg leading-8 text-gray-400">
              Somos um tipo de restaurante que vai trazer uma resenha agradável e de brinde, uma comida com um saBOR inesquecível.
            </p>

            <p className="mb-6 text-lg leading-8 text-gray-400">
              Nosso compromisso é proporcionar uma experiência única
              para nossos clientes, juntando aquela resenha boa com um sabor incrível.
            </p>

            
            <div className="grid grid-cols-3 gap-4">

              <div className="rounded-xl bg-gray-900 p-4 text-center shadow-sm">
                <span className="text-2xl">🍽️</span>
                <p className="mt-2 font-semibold text-white">
                  Sabor
                </p>
              </div>

              <div className="rounded-xl bg-gray-900 p-4 text-center shadow-sm">
                <span className="text-2xl">⭐</span>
                <p className="mt-2 font-semibold text-white">
                  Qualidade
                </p>
              </div>

              <div className="rounded-xl bg-gray-900 p-4 text-center shadow-sm">
                <span className="text-2xl">🤣</span>
                <p className="mt-2 font-semibold text-white">
                  Resenha
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
