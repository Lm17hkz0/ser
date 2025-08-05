"use client"

import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TestimonialsPage() {
  const router = useRouter()

  const handleContinueClick = () => {
    // Navega para a próxima etapa (Etapa 7) após clicar em "Continuar"
    router.push("/quiz/ready-for-revelation")
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
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
        <span className="bg-red-500 px-2 py-1 rounded-md">Veja o que algumas amigas e clientes</span>
        <br />
        <span className="bg-red-500 px-2 py-1 rounded-md">falam após receberem seus desenhos</span>
      </h1>

      {/* Sub-texto/Instrução */}
      <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-8 flex items-center justify-center gap-2">
        Clique no video para iniciar{" "}
        <span role="img" aria-label="dedo apontando para baixo">
          👇
        </span>
      </p>

      {/* Placeholder para o Vídeo */}
      <div className="w-full max-w-md aspect-video bg-gray-700 rounded-lg mb-8 flex items-center justify-center text-white text-sm overflow-hidden">
        Placeholder Vídeo Testemunho
      </div>

      {/* Botão Continuar */}
      <Button
        onClick={handleContinueClick}
        className="w-full max-w-xs bg-[#333333] hover:bg-[#444444] text-white text-lg sm:text-xl font-bold py-6 rounded-lg shadow-lg transition-colors duration-200"
      >
        Continuar
      </Button>
    </div>
  )
}
