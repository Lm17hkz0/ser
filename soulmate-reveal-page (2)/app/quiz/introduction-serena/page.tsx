"use client"

import { useRouter } from "next/navigation"
import Image from "next/image" // Import the Image component
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function IntroductionSerenaPage() {
  const router = useRouter()

  const handleContinueClick = () => {
    // Navega para a próxima etapa (Etapa 6) após clicar em "Continuar"
    router.push("/quiz/testimonials")
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

      {/* Bloco de Texto de Introdução */}
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-8 leading-tight">
        Prazer querida, meu nome é Serena, já atendi mais de 15.000 mulheres e sou{" "}
        <span className="text-red-500">psíquica há mais de 10 anos!</span>
      </h1>

      {/* Imagem da Serena */}
      <div className="relative w-full max-w-md aspect-[4/3] rounded-lg mb-8 flex items-center justify-center text-white text-sm overflow-hidden">
        <Image
          src="/images/serena-introduction.jpg"
          alt="Mestre Serena apresentando-se"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      {/* Bloco de Atenção */}
      <div className="w-full max-w-md bg-black p-6 rounded-lg shadow-lg mb-8">
        <p className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-4">Atenção!!!</p>
        <p className="text-white text-base sm:text-lg md:text-xl leading-snug">
          A partir de agora, se você continuar, poderá ver a revelação que vai te mostrar o rosto da pessoa que é
          destinada à você desde o seu nascimento!
        </p>
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
