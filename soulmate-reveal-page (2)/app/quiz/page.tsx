"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import Image from "next/image" // Import the Image component
import { ChevronLeft, Check } from "lucide-react"

export default function QuizPage() {
  const router = useRouter()
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
    // Navega para a próxima etapa após selecionar uma opção
    router.push("/quiz/love-status")
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
          {/* Placeholder para as Imagens do Cabeçalho (iguais à Etapa 1) */}
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
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">LEITURA DA MÃO</h1>

      {/* Pergunta */}
      <p className="text-yellow-400 text-xl sm:text-2xl md:text-3xl font-bold mb-8 leading-snug">
        Quantas dessas linhas principais você consegue identificar claramente?
      </p>

      {/* Imagem da Mão */}
      <div className="relative w-full max-w-md aspect-[1/1] rounded-lg mb-8 flex items-center justify-center text-white text-sm overflow-hidden">
        <Image
          src="/images/palmistry-hand.jpg"
          alt="Diagrama de quiromancia com linhas da mão"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "contain",
          }}
        />
      </div>

      {/* Opções de Resposta */}
      <div className="w-full max-w-md flex flex-col gap-4">
        {["2 Linhas", "3 Linhas", "4 Linhas ou Mais"].map((option) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`
              w-full bg-[#333333] text-white text-lg sm:text-xl font-bold py-5 px-6 rounded-lg shadow-lg transition-colors duration-200
              flex items-center justify-start gap-4
              ${selectedOption === option ? "border-2 border-white" : "hover:bg-[#444444]"}
            `}
          >
            <div
              className={`p-1 rounded-full ${selectedOption === option ? "bg-white text-[#333333]" : "bg-gray-500 text-gray-300"}`}
            >
              <Check size={20} />
            </div>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
