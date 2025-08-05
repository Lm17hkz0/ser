"use client"

import { useRouter } from "next/navigation"
import Image from "next/image" // Import the Image component
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const router = useRouter()
  const handleButtonClick = () => {
    router.push("/quiz") // Navega para a nova página do quiz
  }

  return (
    <div className="min-h-screen bg-[#8B0000] flex flex-col items-center py-8 px-4 text-center">
      {/* Placeholder para as Imagens do Cabeçalho */}
      <div className="flex justify-center gap-4 mb-8">
        {/* Espaço para a primeira imagem de desenho */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-lg flex items-center justify-center text-white text-xs">
          Imagem 1
        </div>
        {/* Espaço para a segunda imagem de desenho */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-700 rounded-lg flex items-center justify-center text-white text-xs">
          Imagem 2
        </div>
      </div>

      {/* Linha Separadora */}
      <div className="w-full max-w-md h-0.5 bg-white opacity-50 mb-8"></div>

      {/* Título Principal */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
        E se o rosto da sua Alma Gêmea pudesse ser revelado agora?
      </h1>

      {/* Imagem Principal */}
      <div className="relative w-full max-w-md aspect-[4/3] mb-8 rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/images/main-couple.jpg"
          alt="Casal se abraçando com um desenho de rosto"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Texto de Detalhe */}
      <p className="text-yellow-400 text-xl sm:text-2xl md:text-3xl font-bold mb-6 leading-snug">
        Um detalhe em suas respostas pode mostrar tudo!
      </p>

      {/* Chamada para Ação */}
      <p className="text-red-500 text-xl sm:text-2xl md:text-3xl font-bold mb-8 flex items-center justify-center gap-2">
        Clique abaixo para iniciar{" "}
        <span role="img" aria-label="dedo apontando para baixo">
          👇
        </span>
      </p>

      {/* Botão */}
      <Button
        onClick={handleButtonClick}
        className="w-full max-w-xs bg-[#333333] hover:bg-[#444444] text-white text-lg sm:text-xl font-bold py-6 rounded-lg shadow-lg transition-colors duration-200"
      >
        QUERO VER O ROSTO!
      </Button>
    </div>
  )
}
