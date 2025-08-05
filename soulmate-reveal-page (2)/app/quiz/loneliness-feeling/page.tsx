"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image" // Import the Image component
import { ChevronLeft, Check, X } from "lucide-react"

export default function LonelinessFeelingPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    // Navega para a próxima etapa (Etapa 5) após selecionar uma opção
    router.push("/quiz/introduction-serena")
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

      {/* Pergunta Principal */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
        Você já sentiu que poderia passar o resto da vida sozinha ou que nunca encontraria alguém de verdade?
      </h1>

      {/* Sub-texto */}
      <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-bold italic mb-8">*Seja sincera</p>

      {/* Imagem da Pessoa Triste */}
      <div className="relative w-full max-w-md aspect-[4/3] rounded-lg mb-8 flex items-center justify-center text-white text-sm overflow-hidden">
        <Image
          src="/images/sad-person.jpg"
          alt="Pessoa triste com a mão no rosto"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Opções de Resposta */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <button
          onClick={() => handleOptionClick("Sim")}
          className={`
            w-full bg-[#333333] text-white text-lg sm:text-xl font-bold py-5 px-6 rounded-lg shadow-lg transition-colors duration-200
            flex items-center justify-start gap-4
            ${selectedOption === "Sim" ? "border-2 border-white" : "hover:bg-[#444444]"}
          `}
        >
          <div
            className={`p-1 rounded-full ${selectedOption === "Sim" ? "bg-white text-[#333333]" : "bg-green-500 text-white"}`}
          >
            <Check size={20} />
          </div>
          Sim
        </button>

        <button
          onClick={() => handleOptionClick("Não")}
          className={`
            w-full bg-[#333333] text-white text-lg sm:text-xl font-bold py-5 px-6 rounded-lg shadow-lg transition-colors duration-200
            flex items-center justify-start gap-4
            ${selectedOption === "Não" ? "border-2 border-white" : "hover:bg-[#444444]"}
          `}
        >
          <div
            className={`p-1 rounded-full ${selectedOption === "Não" ? "bg-white text-[#333333]" : "bg-red-500 text-white"}`}
          >
            <X size={20} />
          </div>
          Não
        </button>
      </div>
    </div>
  )
}
