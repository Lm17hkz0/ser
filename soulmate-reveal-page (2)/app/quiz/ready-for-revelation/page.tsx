"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image" // Import the Image component
import { ChevronLeft } from "lucide-react"

export default function ReadyForRevelationPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    // Navega para a próxima etapa (Etapa 8) após selecionar uma opção
    router.push("/quiz/start-reading")
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
        Eu sinto a energia de um grande encontro chegando na sua vida.
      </h1>

      {/* Imagens de Desenho com Seta */}
      <div className="relative w-full max-w-md aspect-[4/3] mb-8 flex items-center justify-center overflow-hidden">
        <Image
          src="/images/man-drawings.jpg"
          alt="Dois desenhos de um homem com uma seta entre eles"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "contain", // Use 'contain' para garantir que a imagem inteira seja visível
          }}
        />
      </div>

      {/* Pergunta */}
      <p className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-8 leading-snug">Está preparada?</p>

      {/* Opções de Resposta */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <button
          onClick={() => handleOptionClick("Sim, quero saber")}
          className={`
            w-full bg-[#333333] text-white text-lg sm:text-xl font-bold py-5 px-6 rounded-lg shadow-lg transition-colors duration-200
            flex items-center justify-start gap-4
            ${selectedOption === "Sim, quero saber" ? "border-2 border-white" : "hover:bg-[#444444]"}
          `}
        >
          <span className="text-2xl">😍</span>
          SIM, QUERO SABER
        </button>

        <button
          onClick={() => handleOptionClick("Estou em dúvida")}
          className={`
            w-full bg-[#333333] text-white text-lg sm:text-xl font-bold py-5 px-6 rounded-lg shadow-lg transition-colors duration-200
            flex items-center justify-start gap-4
            ${selectedOption === "Estou em dúvida" ? "border-2 border-white" : "hover:bg-[#444444]"}
          `}
        >
          <span className="text-2xl">😔</span>
          ESTOU EM DÚVIDA
        </button>
      </div>
    </div>
  )
}
