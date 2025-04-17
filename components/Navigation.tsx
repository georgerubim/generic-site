"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ppEditorialNewUltralightItalic } from "@/app/fonts"

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
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
    </>
  )
} 