"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, Phone, Paperclip, MoreVertical, Info, CheckCheck } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { HTMLDivElement } from "react"

export default function ChatMessagesPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<
    Array<{
      sender: "serena" | "user"
      text: string
      time?: string
      type?: "text" | "video" | "cards" | "image"
      src?: string
      cards?: any[]
    }>
  >([])
  const [isTyping, setIsTyping] = useState(false)
  const [showUserPromptButton, setShowUserPromptButton] = useState(false)
  const [showNameInput, setShowNameInput] = useState(false)
  const [showDateOfBirthInput, setShowDateOfBirthInput] = useState(false)
  const [showSignInput, setShowSignInput] = useState(false)
  const [showStartRevelationButton, setShowStartRevelationButton] = useState(false)
  const [showCardSelection, setShowCardSelection] = useState(false)
  const [showReligionInput, setShowReligionInput] = useState(false)
  const [showAcceptPaymentButton, setShowAcceptPaymentButton] = useState(false) // New state for the button
  const [selectedCards, setSelectedCards] = useState<string[]>([])
  const [userName, setUserName] = useState("")
  const [userDateOfBirth, setUserDateOfBirth] = useState("")
  const [userSign, setUserSign] = useState("")
  const [userReligion, setUserReligion] = useState("")
  const [userCity, setUserCity] = useState("sua cidade") // Initialize with a default value

  const initialSerenaMessages = useRef([
    {
      sender: "serena",
      text: "Olá, minha querida! Estou tão feliz que você decidiu seguir seu coração e estar aqui hoje. 🙏🔮",
    },
    {
      sender: "serena",
      text: "Meu nome é Serena, e em apenas *1 minuto*, irei ter as respostas que você está procurando sobre o seu futuro amoroso...",
    },
    {
      sender: "serena",
      text: "Posso começar com a sua revelação? Estou perguntando porque pode trazer muitas emoções e até lágrimas, mas tenho certeza de que você vai querer ver...",
    },
  ])

  const followUpMessagesAfterUserPrompt = useRef([
    { sender: "serena", text: "⏳ Sua consulta está começando...", type: "text" },
    { sender: "serena", text: "Inclusive olha a minha reportagem que saiu mês passado 👇👇", type: "text" },
    { sender: "serena", text: "Video da reportagem", type: "video" },
    { sender: "serena", text: "Qual é o seu nome?", type: "text" },
  ])

  const followUpMessagesAfterName = useRef([
    {
      sender: "serena",
      text: "Tenho um forte pressentimento de que essa pessoa aparecerá na sua vida muito em breve 🔥",
      type: "text",
    },
    { sender: "serena", text: "Qual é sua data de nascimento?", type: "text" },
  ])

  const followUpMessagesAfterDateOfBirth = useRef([{ sender: "serena", text: "Qual é seu signo?", type: "text" }])

  const followUpMessagesAfterSign = useRef([
    {
      sender: "serena",
      text: "Posso começar? Lembre-se de não cruzar os braços ou as pernas...",
      type: "text",
    },
  ])

  const followUpMessagesAfterStartRevelation = useRef([
    {
      sender: "serena",
      text: "Primeiro, com base nessas informações, vou pedir que você escolha 3 cartas...",
      type: "text",
    },
    {
      sender: "serena",
      text: "Depois, através de uma leitura das cartas, irei visualizar o rosto da sua verdadeira chama gêmea...",
      type: "text",
    },
    { sender: "serena", text: "Selecione 3 cartas", type: "text" },
  ])

  const followUpMessagesAfterCardsSubmitted = useRef([
    { sender: "serena", text: "Que cartas interessantes...", type: "text" },
    {
      sender: "serena",
      type: "cards",
      text: "", // Text is empty for card type, cards will be rendered based on type
      cards: [
        { id: "the-sun", src: "/images/tarot-sun.png", label: "THE SUN" },
        { id: "temperance", src: "/images/tarot-temperance.png", label: "TEMPERANCE" },
        { id: "the-emperor", src: "/images/tarot-emperor.png", label: "THE EMPEROR" },
      ],
    },
    {
      sender: "serena",
      text: "Qual é a sua religião? Se não tiver, escreva 'não tenho'.",
      type: "text",
    },
  ])

  // Converted to a function to dynamically include userName
  const getFollowUpMessagesAfterReligionSubmitted = (name: string, city: string) => [
    { sender: "serena", text: "Então prepare-se, porque já já vou começar o seu!", type: "text" },
    { sender: "serena", text: "Vou fazer um desenho do rosto que estou visualizando...", type: "text" },
    {
      sender: "serena",
      text: "O meu retrato tem uma precisão de até 98%... Muitas pessoas ficam emocionadas ao receber o desenho...",
      type: "text",
    },
    {
      sender: "serena",
      text: "Veja o depoimento de algumas das milhares de clientes que receberam o desenho idêntico ao parceiro...",
      type: "text",
    },
    {
      sender: "serena",
      text: "Esta é Camila, 23 anos. Dez dias após a revelação, ela conheceu Gabriel em uma cafeteria e descobriu sua verdadeira alma gêmea. Eles se casaram meses depois e colocaram a foto que fiz para eles no álbum deles. Fiquei tão emocionada que chorei quando vi! ❤️",
      type: "text",
    },
    {
      sender: "serena",
      type: "image",
      src: "/images/couple-with-drawing.jpg",
      text: "", // Text is empty for image type
    },
    {
      sender: "serena",
      text: "Esta é Teresa, de 49 anos, que pensava estar destinada a uma vida feliz de solteira. Oito dias depois de revelar sua Chama Gêmea, ela encontrou seu verdadeiro amor enquanto passeava com seu cachorro em uma manhã ensolarada no parque.",
      type: "text",
    },
    {
      sender: "serena",
      type: "image",
      src: "/images/teresa-with-drawing.jpg",
      text: "", // Text is empty for image type
    },
    {
      sender: "serena",
      text: "Esta é Isabel, 47 anos, que acreditava que seu destino era cuidar dos outros, não viver sua própria história de amor. Sete dias depois de receber seu desenho, ela encontrou sua Chama Gêmea durante uma visita inesperada a uma galeria de arte.",
      type: "text",
    },
    {
      sender: "serena",
      type: "image",
      src: "/images/isabel-with-drawing.jpg",
      text: "", // Text is empty for image type
    },
    // New messages inserted here
    { sender: "serena", text: `${name}, estou visualizando muitas informações importantes.`, type: "text" },
    {
      sender: "serena",
      text: "A primeira revelação está chegando! 🌌 Algo muito especial está prestes a ser desvendado sobre quem está destinado a cruzar o seu caminho...",
      type: "text",
    },
    {
      sender: "serena",
      text: `Sua chama gêmea se encontra na cidade de ${city}, certo? Olhaaa... se eu te contar você nem acreditaa!`, // Usando a cidade dinâmica
      type: "text",
    },
    {
      sender: "serena",
      text: `Pode cancelar todos os seus planos de visitar outros lugares! Vocês se encontrarão em 👉👈 ${city} 👉👉 Estou revisando seu mapa astral neste momento. Evite cruzar os braços ou as pernas. Estou recebendo informações importantes sobre sua Chama Gêmea!`, // Updated message with dynamic city
      type: "text",
    },
    { sender: "serena", text: `${name}, preste muita atenção!`, type: "text" },
    { sender: "serena", text: "Eu não estou cobrando nada pelos desenhos...", type: "text" },
    {
      sender: "serena",
      text: "Mas a ferramenta que eu utilizo para fazer a leitura, cobra uma pequena taxa para manter o sistema no ar...",
      type: "text",
    },
    {
      sender: "serena",
      text: "📢 Tenho apenas 3 vagas disponíveis com preço promocional!",
      type: "text",
    },
    {
      sender: "serena",
      text: "Basta pagar a pequena taxa de **R$ 47,00** clicando no botão abaixo.",
      type: "text",
    },
    {
      sender: "serena",
      text: "Assim que finalizar a compra você receberá a foto da sua Chama Gêmea. 💕✨",
      type: "text",
    },
    {
      sender: "serena",
      text: "Esse dinheiro você gasta sem ver, porque não gastar com algo que vai mudar sua vida?",
      type: "text",
    },
    {
      sender: "serena",
      text: "ATENÇÃO ⚠️",
      type: "text",
    },
    {
      sender: "serena",
      text: "Só para você que está neste chat, vou te dar de **BRINDE** uma **Leitura Completa e Personalizada** da sua Chama Gêmea!",
      type: "text",
    },
    {
      sender: "serena",
      text: "Este é um presente exclusivo que em minhas consultas particulares custa 300 Reais, mas **somente hoje** você recebe essa informação **100% GRATUITA**.",
      type: "text",
    },
    {
      sender: "serena",
      text: "O que você vai levar:",
      type: "text",
    },
    {
      sender: "serena",
      text: "✨ O Retrato detalhado da sua verdadeira Chama Gêmea",
      type: "text",
    },
    {
      sender: "serena",
      text: "🟣 Leitura personalizada dos signos do amor e da astrologia afetiva",
      type: "text",
    },
    {
      sender: "serena",
      text: "💞 Análise profunda da conexão energética entre vocês",
      type: "text",
    },
    {
      sender: "serena",
      text: "🌟 Orientações sobre como fortalecer essa relação e atrair o amor verdadeiro",
      type: "text",
    },
    {
      sender: "serena",
      text: "💫 Mensagens e sinais que o universo tem para o seu coração",
      type: "text",
    },
    {
      sender: "serena",
      text: "Este é o seu momento para descobrir o que o cosmos reservou para você no amor. Não perca essa oportunidade única!",
      type: "text",
    },
    {
      sender: "serena",
      text: "Vou te mandar uma página de pagamentos **100% segura**, onde você pode preencher os seus dados e fazer o pagamento! (protegido pela garantia de 365 dias)",
      type: "text",
    },
  ]

  // Dados das cartas para seleção (agora com a imagem fornecida)
  const selectableCards = useRef([
    { id: "card1", src: "/images/tarot-back.png" },
    { id: "card2", src: "/images/tarot-back.png" },
    { id: "card3", src: "/images/tarot-back.png" },
    { id: "card4", src: "/images/tarot-back.png" },
    { id: "card5", src: "/images/tarot-back.png" },
    { id: "card6", src: "/images/tarot-back.png" },
  ])

  const currentMessageQueue = useRef<
    Array<{
      sender: "serena" | "user"
      text: string
      time?: string
      type?: "text" | "video" | "cards" | "image"
      src?: string
      cards?: any[]
    }>
  >([])
  const currentMessageIndex = useRef(0)
  const chatEndRef = useRef<HTMLDivElement>(null)

  const addMessageToChat = (msg: {
    sender: "serena" | "user"
    text: string
    time?: string
    type?: "text" | "video" | "cards" | "image"
    src?: string
    cards?: any[]
  }) => {
    setMessages((prev) => [
      ...prev,
      { ...msg, time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }) },
    ])
  }

  const processNextMessage = () => {
    if (currentMessageIndex.current < currentMessageQueue.current.length) {
      const nextMessage = currentMessageQueue.current[currentMessageIndex.current]

      if (nextMessage.sender === "serena") {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          addMessageToChat(nextMessage)
          currentMessageIndex.current++

          if (nextMessage.text === "Qual é o seu nome?") {
            setShowNameInput(true)
          } else if (nextMessage.text === "Qual é sua data de nascimento?") {
            setShowDateOfBirthInput(true)
          } else if (nextMessage.text === "Qual é seu signo?") {
            setShowSignInput(true)
          } else if (nextMessage.text === "Posso começar? Lembre-se de não cruzar os braços ou as pernas...") {
            setShowStartRevelationButton(true)
          } else if (nextMessage.text === "Selecione 3 cartas") {
            setShowCardSelection(true)
          } else if (nextMessage.text === "Qual é a sua religião? Se não tiver, escreva 'não tenho'.") {
            setShowReligionInput(true)
          } else if (
            nextMessage.text ===
            "Vou te mandar uma página de pagamentos **100% segura**, onde você pode preencher os seus dados e fazer o pagamento! (protegido pela garantia de 365 dias)"
          ) {
            setShowAcceptPaymentButton(true) // Show the new button
          } else {
            // Continue processing if there are more messages in the current queue
            if (currentMessageIndex.current < currentMessageQueue.current.length) {
              setTimeout(processNextMessage, 1000)
            }
          }
        }, 3000)
      }
    }
  }

  useEffect(() => {
    currentMessageQueue.current = [...initialSerenaMessages.current]
    processNextMessage()
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (
      messages.length === initialSerenaMessages.current.length &&
      !showUserPromptButton &&
      !showNameInput &&
      !showDateOfBirthInput &&
      !showSignInput &&
      !showStartRevelationButton &&
      !showCardSelection &&
      !showReligionInput &&
      !showAcceptPaymentButton // Include the new button state
    ) {
      setShowUserPromptButton(true)
    }
  }, [
    messages,
    showUserPromptButton,
    showNameInput,
    showDateOfBirthInput,
    showSignInput,
    showStartRevelationButton,
    showCardSelection,
    showReligionInput,
    showAcceptPaymentButton,
  ])

  // New useEffect hook to get the user's city using IP-based detection
  useEffect(() => {
    // 1. Primeiro, pega o IP do usuário
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const ip = data.ip
        // 2. Agora, pega a cidade usando o IP
        return fetch(`https://ipapi.co/${ip}/json/`)
      })
      .then((response) => response.json())
      .then((location) => {
        const cidade = location.city || "sua cidade"
        setUserCity(cidade)
      })
      .catch((error) => {
        console.error("Erro ao localizar a cidade:", error)
        setUserCity("sua cidade")
      })
  }, []) // Run once on component mount

  const handleUserPromptClick = () => {
    setShowUserPromptButton(false)
    addMessageToChat({
      sender: "user",
      text: "Sim! Quero descobrir tudo sobre a minha Chama Gêmea",
    })

    currentMessageQueue.current = [...followUpMessagesAfterUserPrompt.current]
    currentMessageIndex.current = 0
    processNextMessage()
  }

  const handleNameSubmit = () => {
    if (userName.trim()) {
      addMessageToChat({
        sender: "user",
        text: userName,
      })
      setUserName("")
      setShowNameInput(false)

      const personalizedMessage = {
        sender: "serena",
        text: `É um prazer falar com você, ${userName}. Estou muito feliz por poder trazer esse relacionamento até você.`,
        type: "text",
      }
      currentMessageQueue.current = [personalizedMessage, ...followUpMessagesAfterName.current]
      currentMessageIndex.current = 0
      processNextMessage()
    }
  }

  const handleDateOfBirthSubmit = () => {
    if (userDateOfBirth.trim()) {
      addMessageToChat({
        sender: "user",
        text: userDateOfBirth,
      })
      setUserDateOfBirth("")
      setShowDateOfBirthInput(false)

      currentMessageQueue.current = [...followUpMessagesAfterDateOfBirth.current]
      currentMessageIndex.current = 0
      processNextMessage()
    }
  }

  const handleSignSubmit = () => {
    if (userSign.trim()) {
      addMessageToChat({
        sender: "user",
        text: userSign,
      })
      setUserSign("")
      setShowSignInput(false)

      currentMessageQueue.current = [...followUpMessagesAfterSign.current]
      currentMessageIndex.current = 0
      processNextMessage()
    }
  }

  const handleStartRevelationClick = () => {
    setShowStartRevelationButton(false)
    addMessageToChat({
      sender: "user",
      text: "Sim",
    })

    currentMessageQueue.current = [...followUpMessagesAfterStartRevelation.current]
    currentMessageIndex.current = 0
    processNextMessage()
  }

  const handleCardClick = (cardId: string) => {
    setSelectedCards((prevSelected) => {
      if (prevSelected.includes(cardId)) {
        return prevSelected.filter((id) => id !== cardId)
      } else {
        return [...prevSelected, cardId]
      }
    })
  }

  const handleSendCards = () => {
    if (selectedCards.length > 0) {
      addMessageToChat({
        sender: "user",
        text: `Cartas selecionadas: ${selectedCards.join(", ")}`,
      })
      setShowCardSelection(false)
      setSelectedCards([])

      currentMessageQueue.current = [...followUpMessagesAfterCardsSubmitted.current]
      currentMessageIndex.current = 0
      processNextMessage()
    }
  }

  const handleReligionSubmit = () => {
    if (userReligion.trim()) {
      addMessageToChat({
        sender: "user",
        text: userReligion,
      })
      setUserReligion("")
      setShowReligionInput(false)

      // Use a função para obter as mensagens mais recentes com o nome do usuário e a cidade
      currentMessageQueue.current = [...getFollowUpMessagesAfterReligionSubmitted(userName, userCity)]
      currentMessageIndex.current = 0
      processNextMessage()
    }
  }

  const handleAcceptPaymentClick = () => {
    // Implement what happens when the user accepts payment
    // For now, let's just log and hide the button
    console.log("User accepted to pay the fee!")
    setShowAcceptPaymentButton(false)
    // You might want to navigate to a payment page or show a new set of messages here
  }

  return (
    <div className="min-h-screen flex flex-col bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Imagem%20do%20WhatsApp%20de%202025-08-01%20%C3%A0%28s%29%2018.39.45_a78cb190.jpg-rB8Jr5hHLyJN11v9FlNE1SDdSuf2Xc.jpeg')] bg-repeat">
      <header className="bg-[#075E54] text-white p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => router.back()} className="p-1 rounded-full hover:bg-white/10">
            <ChevronLeft size={24} />
          </button>
          <div className="w-10 h-10 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
            <img src="/images/serena-profile.jpg" alt="Mestre Serena" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <h1 className="text-lg font-semibold">Mestre Serena</h1>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
            {/* Updated status display */}
            <span className="text-sm text-gray-300">{isTyping ? "digitando..." : "online"}</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-1 rounded-full hover:bg-white/10">
            <Phone size={24} />
          </button>
          <button className="p-1 rounded-full hover:bg-white/10">
            <Paperclip size={24} />
          </button>
          <button className="p-1 rounded-full hover:bg-white/10">
            <MoreVertical size={24} />
          </button>
        </div>
      </header>

      <main className="flex-1 p-4 overflow-y-auto flex flex-col">
        <div className="bg-[#128C7E] text-white text-sm p-3 rounded-lg flex items-center gap-2 mb-4 self-center max-w-xs sm:max-w-md">
          <Info size={18} />
          <span>Esta é uma conta comercial e não recebe ligações</span>
        </div>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-2 mb-2 ${msg.sender === "user" ? "self-end" : "self-start"}`}
          >
            {msg.sender === "serena" && (
              <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
                <img src="/images/serena-profile.jpg" alt="Mestre Serena" className="w-full h-full object-cover" />
              </div>
            )}
            {msg.type === "video" ? (
              <div className="bg-[#262D31] p-2 rounded-lg max-w-[80%]">
                <div className="w-full aspect-video bg-gray-800 rounded-md flex items-center justify-center text-white text-xs overflow-hidden">
                  <img
                    src="/placeholder.svg?height=150&width=200"
                    alt="Video Reportagem"
                    className="w-full h-full object-cover"
                  />
                </div>
                {msg.time && (
                  <div className="text-xs mt-1 text-gray-400 flex items-center justify-end gap-1">
                    {msg.time}
                    <CheckCheck size={14} />
                  </div>
                )}
              </div>
            ) : msg.type === "cards" ? (
              <div className="bg-[#262D31] p-2 rounded-lg max-w-[80%] self-center">
                <div className="flex gap-2 justify-center">
                  {msg.cards?.map((card, cardIndex) => (
                    <div key={cardIndex} className="flex flex-col items-center">
                      <img
                        src={card.src || "/placeholder.svg"}
                        alt={card.label}
                        className="w-20 h-32 object-cover rounded-md"
                      />
                      <span className="text-xs text-gray-300 mt-1">{card.label}</span>
                    </div>
                  ))}
                </div>
                {msg.time && (
                  <div className="text-xs mt-1 text-gray-400 flex items-center justify-end gap-1">
                    {msg.time}
                    <CheckCheck size={14} />
                  </div>
                )}
              </div>
            ) : msg.type === "image" ? (
              <div className="bg-[#262D31] p-2 rounded-lg max-w-[80%]">
                <img
                  src={msg.src || "/placeholder.svg"}
                  alt="Chat Image"
                  className="w-full h-auto object-cover rounded-md"
                />
                {msg.time && (
                  <div className="text-xs mt-1 text-gray-400 flex items-center justify-end gap-1">
                    {msg.time}
                    {msg.sender === "serena" && <CheckCheck size={14} />}
                  </div>
                )}
              </div>
            ) : (
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "serena" ? "bg-[#262D31] text-white" : "bg-[#25D366] text-white"
                }`}
              >
                {msg.text}
                {msg.time && (
                  <div
                    className={`text-xs mt-1 ${
                      msg.sender === "serena" ? "text-gray-400" : "text-gray-800"
                    } flex items-center justify-end gap-1`}
                  >
                    {msg.time}
                    {msg.sender === "serena" && <CheckCheck size={14} />}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start gap-2 mb-2 self-start">
            <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
              <img src="/images/serena-profile.jpg" alt="Mestre Serena" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#262D31] text-white p-3 rounded-lg max-w-[80%]">
              <div className="flex items-center justify-center h-6">
                <span className="text-2xl leading-none animate-pulse">...</span>
              </div>
            </div>
          </div>
        )}
        {showUserPromptButton && (
          <button
            onClick={handleUserPromptClick}
            className="self-end bg-[#25D366] text-white text-lg font-bold py-3 px-4 rounded-lg shadow-lg transition-colors duration-200 animate-blink max-w-[80%] mb-2"
          >
            Sim! Quero descobrir tudo sobre a minha Chama Gêmea
          </button>
        )}
        {showStartRevelationButton && (
          <button
            onClick={handleStartRevelationClick}
            className="self-end bg-[#25D366] text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200 animate-blink max-w-[80%] mb-2"
          >
            Sim
          </button>
        )}

        {showCardSelection && (
          <div className="self-center w-full max-w-md p-4 bg-[#262D31] rounded-lg shadow-lg mt-4">
            <p className="text-white text-center text-lg font-semibold mb-4">Selecione 3 cartas:</p>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {selectableCards.current.map((card) => (
                <div
                  key={card.id}
                  className={`relative w-24 h-36 sm:w-28 sm:h-40 bg-gray-700 rounded-lg cursor-pointer overflow-hidden
                    ${selectedCards.includes(card.id) ? "border-4 border-[#25D366]" : "border-2 border-transparent hover:border-gray-400"}
                    transition-all duration-200 flex items-center justify-center`}
                  onClick={() => handleCardClick(card.id)}
                >
                  <img
                    src={card.src || "/placeholder.svg"}
                    alt={`Carta ${card.id}`}
                    className="w-full h-full object-cover"
                  />
                  {selectedCards.includes(card.id) && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <CheckCheck size={40} className="text-[#25D366]" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {selectedCards.length > 0 && (
              <Button
                onClick={handleSendCards}
                className="w-full mt-6 bg-[#075E54] hover:bg-[#054A42] text-white font-bold py-3 px-6 rounded-full"
              >
                Enviar
              </Button>
            )}
          </div>
        )}

        {showAcceptPaymentButton && (
          <button
            onClick={handleAcceptPaymentClick}
            className="self-center bg-[#075E54] text-white text-lg font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-200 animate-blink max-w-[80%] mt-4 mb-2"
          >
            ACEITO PAGAR A TAXA
          </button>
        )}

        <div ref={chatEndRef} />
      </main>

      {/* Input fields (hidden when card selection is active or religion input is active) */}
      {!showCardSelection && !showReligionInput && showNameInput && (
        <div className="p-2 bg-transparent flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
          </div>
          <Input
            type="text"
            placeholder="Digite o seu nome..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="flex-1 bg-[#333333] text-white border-none rounded-full px-4 py-3 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleNameSubmit()
              }
            }}
          />
          <Button
            onClick={handleNameSubmit}
            className="bg-[#075E54] hover:bg-[#054A42] text-white font-bold py-3 px-6 rounded-full"
          >
            Enviar
          </Button>
        </div>
      )}

      {!showCardSelection && !showReligionInput && showDateOfBirthInput && (
        <div className="p-2 bg-transparent flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
          </div>
          <Input
            type="text"
            placeholder="Digite a sua idade..."
            value={userDateOfBirth}
            onChange={(e) => setUserDateOfBirth(e.target.value)}
            className="flex-1 bg-[#333333] text-white border-none rounded-full px-4 py-3 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleDateOfBirthSubmit()
              }
            }}
          />
          <Button
            onClick={handleDateOfBirthSubmit}
            className="bg-[#075E54] hover:bg-[#054A42] text-white font-bold py-3 px-6 rounded-full"
          >
            Enviar
          </Button>
        </div>
      )}

      {!showCardSelection && !showReligionInput && showSignInput && (
        <div className="p-2 bg-transparent flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
          </div>
          <Input
            type="text"
            placeholder="Digite o seu signo..."
            value={userSign}
            onChange={(e) => setUserSign(e.target.value)}
            className="flex-1 bg-[#333333] text-white border-none rounded-full px-4 py-3 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSignSubmit()
              }
            }}
          />
          <Button
            onClick={handleSignSubmit}
            className="bg-[#075E54] hover:bg-[#054A42] text-white font-bold py-3 px-6 rounded-full"
          >
            Enviar
          </Button>
        </div>
      )}

      {showReligionInput && (
        <div className="p-2 bg-transparent flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex-shrink-0 overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-full h-full object-cover" />
          </div>
          <Input
            type="text"
            placeholder="Escreva aqui"
            value={userReligion}
            onChange={(e) => setUserReligion(e.target.value)}
            className="flex-1 bg-[#333333] text-white border-none rounded-full px-4 py-3 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleReligionSubmit()
              }
            }}
          />
          <Button
            onClick={handleReligionSubmit}
            className="bg-[#075E54] hover:bg-[#054A42] text-white font-bold py-3 px-6 rounded-full"
          >
            Enviar
          </Button>
        </div>
      )}
    </div>
  )
}
