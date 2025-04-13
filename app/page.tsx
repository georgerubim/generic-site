"use client"

import { useState } from "react"
import DynamicFrameLayout from "../components/DynamicFrameLayout"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export default function Home() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <div
      className={`min-h-screen bg-[#141414] flex flex-col ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center bg-[#141414]/80 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <Image src="/placeholder.svg?height=40&width=40" alt="Logo Prisma Agency" fill className="object-contain" />
          </div>
          <span className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/90`}>
            George Rubim
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-white/70 hover:text-white transition-colors">
            Sobre
          </Link>
          <Link href="#services" className="text-white/70 hover:text-white transition-colors">
            Serviços
          </Link>
          <Link href="#work" className="text-white/70 hover:text-white transition-colors">
            Trabalhos
          </Link>
          <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
            Contato
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white/70 hover:text-white">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#141414] pt-24 px-8 flex flex-col md:hidden">
          <Link
            href="#about"
            className="text-white/70 hover:text-white py-4 text-2xl border-b border-white/10"
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            href="#services"
            className="text-white/70 hover:text-white py-4 text-2xl border-b border-white/10"
            onClick={toggleMenu}
          >
            Serviços
          </Link>
          <Link
            href="#work"
            className="text-white/70 hover:text-white py-4 text-2xl border-b border-white/10"
            onClick={toggleMenu}
          >
            Trabalhos
          </Link>
          <Link
            href="#contact"
            className="text-white/70 hover:text-white py-4 text-2xl border-b border-white/10"
            onClick={toggleMenu}
          >
            Contato
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start gap-8 md:gap-16">
          {/* Left Content */}
          <div className="w-full md:w-[400px] flex-shrink-0 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <h1
                className={`${ppEditorialNewUltralightItalic.className} text-5xl md:text-7xl font-light italic text-white/90 tracking-tighter leading-[120%]`}
                style={{ fontSize: `${5 * headerSize}rem` }}
              >
                Criamos
                <br />
                experiências
                <br />
                digitais
              </h1>
              <div
                className={`${inter.className} flex flex-col gap-6 text-white/60 text-base font-light max-w-[400px]`}
                style={{ fontSize: `${1 * textSize}rem` }}
              >
                <p
                  className={`${inter.className} text-white/60 text-base font-light max-w-[400px]`}
                  style={{ fontSize: `${1 * textSize}rem` }}
                >
                  George Rubim é um designer criativo especializado em identidade de marca, design digital e
                  experiências imersivas. Combina estratégia, design e tecnologia para criar conexões significativas
                  entre marcas e seus públicos.
                </p>
                <div className="flex gap-4 mt-4">
                  <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Nossos Trabalhos</Button>
                  <Button variant="outline" className="text-white border-white/20 hover:bg-white/5 rounded-full px-6">
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full md:flex-grow h-[50vh] md:h-[70vh] mt-8 md:mt-0">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8 bg-[#1a1a1a]">
        <div className="w-full max-w-7xl flex flex-col gap-16">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 tracking-tighter`}
          >
            Sobre a Prisma
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <p className={`${inter.className} text-white/60 text-lg leading-relaxed`}>
                Fundada em 2018, a Prisma rapidamente se estabeleceu como uma força criativa líder no cenário digital.
                Nossa equipe multidisciplinar reúne especialistas em design, desenvolvimento, estratégia e storytelling.
              </p>
              <p className={`${inter.className} text-white/60 text-lg leading-relaxed`}>
                Acreditamos que um design excepcional nasce do equilíbrio perfeito entre estética, funcionalidade e
                propósito. Cada projeto que realizamos é abordado com atenção meticulosa aos detalhes e um compromisso
                em ultrapassar fronteiras criativas.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">12</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white/90">Membros na Equipe</h3>
                  <p className="text-white/60">Em 4 países</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">86</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white/90">Projetos Concluídos</h3>
                  <p className="text-white/60">Para clientes no mundo todo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">14</span>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white/90">Prêmios Conquistados</h3>
                  <p className="text-white/60">Incluindo 3 Awwwards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl flex flex-col gap-16">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 tracking-tighter`}
          >
            Nossos Serviços
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-6 flex items-center justify-center">
                <span className="text-xl">01</span>
              </div>
              <h3 className="text-2xl font-medium text-white/90 mb-4">Identidade de Marca</h3>
              <p className="text-white/60">
                Criamos identidades visuais distintivas que capturam a essência da sua marca e ressoam com seu público.
              </p>
        
            </div>
            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-6 flex items-center justify-center">
                <span className="text-xl">02</span>
              </div>
              <h3 className="text-2xl font-medium text-white/90 mb-4">Design Digital</h3>
              <p className="text-white/60">
                De websites a aplicativos, projetamos experiências digitais que são tanto bonitas quanto funcionais.
              </p>
         
            </div>
            <div className="p-8 border border-white/10 rounded-2xl hover:border-white/20 transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full mb-6 flex items-center justify-center">
                <span className="text-xl">03</span>
              </div>
              <h3 className="text-2xl font-medium text-white/90 mb-4">Motion & 3D</h3>
              <p className="text-white/60">
                Damos vida às marcas através de design de movimento cativante, animação e experiências 3D imersivas.
              </p>
           
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="min-h-screen flex items-center justify-center p-8 bg-[#1a1a1a]">
        <div className="w-full max-w-7xl flex flex-col gap-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <h2
              className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 tracking-tighter`}
            >
              Trabalhos Selecionados
            </h2>
        
          </div>

          <div className="h-[70vh]">
            <DynamicFrameLayout />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-7xl flex flex-col gap-16">
          <h2
            className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-6xl font-light italic text-white/90 tracking-tighter`}
          >
            Vamos Criar Juntos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <p className={`${inter.className} text-white/60 text-lg leading-relaxed`}>
                Pronto para iniciar seu próximo projeto? Adoraríamos ouvir de você. Entre em contato para discutir como
                podemos ajudar a dar vida à sua visão.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-white/90 font-medium mb-1">Email</h3>
                  <a href="mailto:eugeorgerubim@gmail.com" className="text-white/60 hover:text-white transition-colors">
                    eugeorgerubim@gmail.com
                  </a>
                </div>
                <div>
                  <h3 className="text-white/90 font-medium mb-1">Telefone</h3>
                  <a href="tel:+5592981529639" className="text-white/60 hover:text-white transition-colors">
                    +55 92 8152-9639
                    <br />
                    +55 92 99365-4905
                  </a>
                </div>
                <div>
                  <h3 className="text-white/90 font-medium mb-1">CNPJ</h3>
                  <p className="text-white/60">59.494.073/0001-20</p>
                </div>
                <div>
                  <h3 className="text-white/90 font-medium mb-1">Localização</h3>
                  <p className="text-white/60">
                    Rua Criciuma 31B Apt 31B
                    <br />
                    Alvorada, Manaus - AM
                    <br />
                    69043-140
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-white/90">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white/50 focus:outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-white/90">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white/50 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-white/90">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white/50 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-white/90">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-transparent border border-white/20 rounded-lg p-3 text-white focus:border-white/50 focus:outline-none"
                ></textarea>
              </div>
              <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-6">Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-white/10">
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="Logo Prisma Agency"
                fill
                className="object-contain"
              />
            </div>
            <span className={`${ppEditorialNewUltralightItalic.className} text-xl font-light italic text-white/90`}>
              George Rubim
            </span>
          </div>



          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/40 text-sm">
              © {new Date().getFullYear()} George Rubim. Todos os direitos reservados. CNPJ: 59.494.073/0001-20
            </div>
            <div className="flex items-center gap-6">
              <Link href="/politica-de-privacidade" className="text-white/60 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="text-white/60 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
