import Link from "next/link"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"

export default function PrivacyPolicy() {
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
          Política de Privacidade
        </h1>

        <div className="space-y-8 text-white/70">
          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">1. Introdução</h2>
            <p>
              Em George Rubim ("nós", "nosso" ou "nos"), respeitamos sua privacidade e estamos comprometidos em proteger
              seus dados pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos suas
              informações quando você visita nosso site prisma.agency (o "Site").
            </p>
            <p>
              Por favor, leia esta política de privacidade cuidadosamente. Se você não concordar com os termos desta
              política de privacidade, por favor, não acesse o Site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">2. Informações que Coletamos</h2>
            <p>
              <strong>Dados Pessoais:</strong> Podemos coletar informações de identificação pessoal, incluindo, mas não
              se limitando a seu nome, endereço de e-mail, número de telefone e nome da empresa quando você preenche
              nosso formulário de contato ou se inscreve em nossa newsletter.
            </p>
            <p>
              <strong>Dados de Uso:</strong> Também podemos coletar informações sobre como o Site é acessado e usado.
              Esses dados de uso podem incluir informações como o endereço de Protocolo de Internet (IP) do seu
              computador, tipo de navegador, versão do navegador, as páginas do nosso Site que você visita, a hora e
              data da sua visita, o tempo gasto nessas páginas e outros dados de diagnóstico.
            </p>
            <p>
              <strong>Cookies e Tecnologias de Rastreamento:</strong> Usamos cookies e tecnologias de rastreamento
              semelhantes para acompanhar a atividade em nosso Site e armazenar certas informações. Cookies são arquivos
              com uma pequena quantidade de dados que podem incluir um identificador único anônimo.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">3. Como Usamos Suas Informações</h2>
            <p>Usamos as informações que coletamos de várias maneiras, incluindo para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer, operar e manter nosso Site</li>
              <li>Melhorar, personalizar e expandir nosso Site</li>
              <li>Entender e analisar como você usa nosso Site</li>
              <li>Desenvolver novos produtos, serviços, recursos e funcionalidades</li>
              <li>
                Comunicar com você, diretamente ou através de um de nossos parceiros, para atendimento ao cliente,
                atualizações e outras informações relacionadas ao site
              </li>
              <li>Enviar e-mails</li>
              <li>Encontrar e prevenir fraudes</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">4. Proteção de Dados</h2>
            <p>
              Implementamos medidas técnicas e organizacionais apropriadas para garantir um nível de segurança adequado
              ao risco, incluindo, mas não se limitando a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Criptografia de dados pessoais</li>
              <li>
                Capacidade de garantir a confidencialidade, integridade, disponibilidade e resiliência contínuas dos
                sistemas e serviços de processamento
              </li>
              <li>
                Capacidade de restaurar a disponibilidade e o acesso aos dados pessoais em tempo hábil no caso de um
                incidente físico ou técnico
              </li>
              <li>
                Processo para testar, avaliar e avaliar regularmente a eficácia das medidas técnicas e organizacionais
                para garantir a segurança do processamento
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">5. Provedores de Serviços Terceirizados</h2>
            <p>
              Podemos empregar empresas e indivíduos terceirizados para facilitar nosso Site ("Provedores de Serviços"),
              fornecer o Site em nosso nome, executar serviços relacionados ao Site ou nos ajudar a analisar como nosso
              Site é usado.
            </p>
            <p>
              Esses terceiros têm acesso aos seus Dados Pessoais apenas para realizar essas tarefas em nosso nome e são
              obrigados a não divulgar ou usar para qualquer outro propósito.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">6. Seus Direitos de Proteção de Dados</h2>
            <p>
              Se você é residente do Espaço Econômico Europeu (EEE), você tem certos direitos de proteção de dados.
              Procuramos tomar medidas razoáveis para permitir que você corrija, altere, exclua ou limite o uso de seus
              Dados Pessoais.
            </p>
            <p>
              Se você deseja ser informado sobre quais Dados Pessoais mantemos sobre você e se deseja que sejam
              removidos de nossos sistemas, entre em contato conosco.
            </p>
            <p>Em determinadas circunstâncias, você tem os seguintes direitos de proteção de dados:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>O direito de acessar, atualizar ou excluir as informações que temos sobre você</li>
              <li>O direito de retificação</li>
              <li>O direito de se opor</li>
              <li>O direito de restrição</li>
              <li>O direito à portabilidade de dados</li>
              <li>O direito de retirar o consentimento</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">7. Alterações a Esta Política de Privacidade</h2>
            <p>
              Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer
              alterações publicando a nova Política de Privacidade nesta página.
            </p>
            <p>
              Você é aconselhado a revisar esta Política de Privacidade periodicamente para quaisquer alterações.
              Alterações a esta Política de Privacidade são efetivas quando são publicadas nesta página.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">8. Entre em Contato Conosco</h2>
            <p>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Por e-mail: eugeorgerubim@gmail.com</li>
              <li>Por telefone: +55 92 8152-9639</li>
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
