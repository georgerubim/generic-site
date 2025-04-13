import Link from "next/link"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"

export default function TermsOfUse() {
  return (
    <div className={`min-h-screen bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      {/* Navigation */}
      <nav className="px-8 py-6 flex justify-between items-center bg-[#141414]/80 backdrop-blur-sm border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/90`}>
            George Rubim
          </span>
        </Link>

        <Link href="/" className="text-white/70 hover:text-white transition-colors">
          Voltar para a Página Inicial
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-5xl font-light italic text-white/90 mb-12`}
        >
          Termos de Uso
        </h1>

        <div className="space-y-8 text-white/70">
          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e usar o site da George Rubim (o "Site"), você aceita e concorda em estar vinculado aos termos
              e disposições deste acordo. Se você não concordar em cumprir o acima, por favor, não use este Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">2. Direitos de Propriedade Intelectual</h2>
            <p>
              A menos que declarado de outra forma, a George Rubim e/ou seus licenciadores possuem os direitos de
              propriedade intelectual para todo o material no Site. Todos os direitos de propriedade intelectual são
              reservados. Você pode visualizar e/ou imprimir páginas do Site para seu próprio uso pessoal, sujeito às
              restrições estabelecidas nestes termos e condições.
            </p>
            <p>Você não deve:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republicar material deste Site</li>
              <li>Vender, alugar ou sublicenciar material do Site</li>
              <li>Reproduzir, duplicar ou copiar material do Site</li>
              <li>
                Redistribuir conteúdo deste Site (a menos que o conteúdo seja especificamente feito para redistribuição)
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">3. Conteúdo do Usuário</h2>
            <p>
              Nestes termos e condições, "Conteúdo do Usuário" significa material (incluindo, sem limitação, texto,
              imagens, material de áudio, material de vídeo e material audiovisual) que você envia a este Site, para
              qualquer finalidade.
            </p>
            <p>
              Você concede à George Rubim uma licença mundial, irrevogável, não exclusiva, livre de royalties para usar,
              reproduzir, adaptar, publicar, traduzir e distribuir seu Conteúdo do Usuário em qualquer mídia existente
              ou futura. Você também concede à George Rubim o direito de sublicenciar esses direitos e o direito de
              mover uma ação por violação desses direitos.
            </p>
            <p>
              Seu Conteúdo do Usuário não deve ser ilegal ou ilícito, não deve infringir os direitos legais de terceiros
              e não deve ser capaz de dar origem a ação legal contra você ou a George Rubim ou um terceiro (em cada caso
              sob qualquer lei aplicável).
            </p>
            <p>
              A George Rubim reserva-se o direito de editar ou remover qualquer material enviado a este Site, ou
              armazenado nos servidores da George Rubim, ou hospedado ou publicado neste Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">4. Sem Garantias</h2>
            <p>
              Este Site é fornecido "como está", com todas as falhas, e a George Rubim não faz representações ou
              garantias expressas ou implícitas de qualquer tipo relacionadas a este Site ou aos materiais contidos
              neste Site.
            </p>
            <p>Além disso, nada contido neste Site deve ser interpretado como fornecendo conselhos para você.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">5. Limitação de Responsabilidade</h2>
            <p>
              Em nenhum caso a George Rubim, nem qualquer de seus dirigentes, diretores e funcionários, será responsável
              perante você por qualquer coisa decorrente de ou de qualquer forma relacionada ao seu uso deste Site, seja
              tal responsabilidade sob contrato, ato ilícito ou de outra forma, e a George Rubim, incluindo seus
              dirigentes, diretores e funcionários, não será responsável por qualquer responsabilidade indireta,
              consequencial ou especial decorrente de ou de qualquer forma relacionada ao seu uso deste Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">6. Indenização</h2>
            <p>
              Você por este meio indeniza na extensão mais completa a George Rubim de e contra quaisquer e todas as
              responsabilidades, custos, demandas, causas de ação, danos e despesas (incluindo honorários advocatícios
              razoáveis) decorrentes de ou de qualquer forma relacionados à sua violação de qualquer uma das disposições
              destes Termos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">7. Divisibilidade</h2>
            <p>
              Se qualquer disposição destes Termos for considerada inexequível ou inválida sob qualquer lei aplicável,
              tal inexequibilidade ou invalidade não tornará estes Termos inexequíveis ou inválidos como um todo, e tais
              disposições serão excluídas sem afetar as disposições restantes aqui.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">8. Variação dos Termos</h2>
            <p>
              A George Rubim tem permissão para revisar estes Termos a qualquer momento conforme achar adequado, e ao
              usar este Site, espera-se que você revise tais Termos regularmente para garantir que entenda todos os
              termos e condições que regem o uso deste Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">9. Lei Aplicável e Jurisdição</h2>
            <p>
              Estes Termos serão regidos e interpretados de acordo com as leis do Brasil, e você se submete à jurisdição
              não exclusiva dos tribunais estaduais e federais localizados no Brasil para a resolução de quaisquer
              disputas.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">10. Entre em Contato Conosco</h2>
            <p>Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Por e-mail: eugeorgerubim@gmail.com</li>
              <li>Por whatsapp: +55 92 8152-9639</li>
              <li>Por telefone: +55 92 99365-4905</li>
              <li>CNPJ: 59.494.073/0001-20</li>
              <li>Por correio: Rua Criciuma 31B Apt 31B, Alvorada, Manaus - AM, 69043-140</li>
            </ul>
          </section>

          <p className="pt-8 text-sm text-white/50">Última atualização: 13 de abril de 2025</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">
            © {new Date().getFullYear()} George Rubim. Todos os direitos reservados.
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
      </footer>
    </div>
  )
}
