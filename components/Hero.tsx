"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ppEditorialNewUltralightItalic, inter } from "@/app/fonts"
import DynamicFrameLayout from "./DynamicFrameLayout"

export default function Hero() {
  const [headerSize] = useState(1.2) // 120% is the default size
  const [textSize] = useState(0.8) // 80% is the default size

  return (
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
  )
} 