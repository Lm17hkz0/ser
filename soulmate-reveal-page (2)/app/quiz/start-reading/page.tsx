"use client"

import { useRouter } from "next/navigation"
import Image from "next/image" // Import the Image component
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StartReadingPage() {
  const router = useRouter()

  const handleStartReadingClick = () => {
    // Navega para a próxima etapa (Etapa 9) após clicar em "Iniciar Leitura Agora"
    router.push("/chat-messages") // Atualizado para a nova rota da Etapa 10
  }

  return (
    <div className="min-h-screen bg-[#8B0000] flex flex-col items-center py-8 px-4 text-center">
      {/* Header */}
      <div className="w-full max-w-md flex justify-between items-center mb-8 px-4">
        <button
          onClick={() => router.back()}
          className="text-white text-2xl p-2 rounded-full hover:bg-white/10 transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <div className="flex gap-4">
          {/* Placeholder para as Imagens do Cabeçalho (iguais às etapas anteriores) */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white text-xs">
            Img 1
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-lg flex items-center justify-center text-white text-xs">
            Img 2
          </div>
        </div>
      </div>

      {/* Linha Separadora */}
      <div className="w-full max-w-md h-0.5 bg-white opacity-50 mb-8"></div>

      {/* Título Principal */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
        MESTRE SERENA ESTÁ ONLINE PARA REALIZAR O SEU ATENDIMENTO!
      </h1>

      {/* Imagem do Casal com Desenho */}
      <div className="relative w-full max-w-md aspect-[4/3] rounded-lg mb-8 flex items-center justify-center text-white text-sm overflow-hidden">
        <Image
          src="/images/couple-with-drawing-final.jpg"
          alt="Casal sorrindo segurando um desenho de rosto"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Chamada para Ação */}
      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-8 flex items-center justify-center gap-2 bg-black px-4 py-2 rounded-md">
        Clique em Iniciar Leitura Agora{" "}
        <span role="img" aria-label="dedo apontando para baixo">
          👇
        </span>
      </p>

      {/* Botão Iniciar Leitura Agora */}
      <Button
        onClick={handleStartReadingClick}
        className="w-full max-w-xs bg-[#333333] hover:bg-[#444444] text-white text-lg sm:text-xl font-bold py-6 rounded-lg shadow-lg transition-colors duration-200"
      >
        Iniciar Leitura Agora
      </Button>
    </div>
  )
}
