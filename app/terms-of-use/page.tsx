import Link from "next/link"
import { ppEditorialNewUltralightItalic, inter } from "../fonts"
import { getSiteConfig } from "../dominio"

export default async function TermsOfUse() {
  const siteConfig = await getSiteConfig()
  const { siteInfo, contactInfo } = siteConfig

  return (
    <div className={`min-h-screen bg-[#141414] ${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      {/* Navigation */}
      <nav className="px-8 py-6 flex justify-between items-center bg-[#141414]/80 backdrop-blur-sm border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <span className={`${ppEditorialNewUltralightItalic.className} text-2xl font-light italic text-white/90`}>
            {siteInfo.name}
          </span>
        </Link>

        <Link href="/" className="text-white/70 hover:text-white transition-colors">
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-5xl font-light italic text-white/90 mb-12`}
        >
          Terms of Use
        </h1>

        <div className="space-y-8 text-white/70">
          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the {siteInfo.name} Agency website (the "Website"), you accept and agree to be bound
              by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not
              use this Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">2. Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, {siteInfo.name} and/or its licensors own the intellectual property rights for all
              material on the Website. All intellectual property rights are reserved. You may view and/or print pages
              from the Website for your own personal use subject to restrictions set in these terms and conditions.
            </p>
            <p>You must not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Republish material from this Website</li>
              <li>Sell, rent, or sub-license material from the Website</li>
              <li>Reproduce, duplicate, or copy material from the Website</li>
              <li>Redistribute content from this Website (unless content is specifically made for redistribution)</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">3. User Content</h2>
            <p>
              In these terms and conditions, "User Content" means material (including without limitation text, images,
              audio material, video material, and audio-visual material) that you submit to this Website, for whatever
              purpose.
            </p>
            <p>
              You grant to {siteInfo.name} a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce,
              adapt, publish, translate, and distribute your User Content in any existing or future media. You also
              grant to {siteInfo.name} the right to sub-license these rights, and the right to bring an action for
              infringement of these rights.
            </p>
            <p>
              Your User Content must not be illegal or unlawful, must not infringe any third party's legal rights, and
              must not be capable of giving rise to legal action whether against you or {siteInfo.name} or a third party
              (in each case under any applicable law).
            </p>
            <p>
              {siteInfo.name} reserves the right to edit or remove any material submitted to this Website, or stored on
              {siteInfo.name}'s servers, or hosted or published upon this Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">4. No Warranties</h2>
            <p>
              This Website is provided "as is," with all faults, and {siteInfo.name} makes no express or implied
              representations or warranties of any kind related to this Website or the materials contained on this
              Website.
            </p>
            <p>Additionally, nothing contained on this Website shall be construed as providing advice to you.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">5. Limitation of Liability</h2>
            <p>
              In no event shall {siteInfo.name}, nor any of its officers, directors, and employees, be liable to you for
              anything arising out of or in any way connected with your use of this Website, whether such liability is
              under contract, tort, or otherwise, and {siteInfo.name}, including its officers, directors, and employees
              shall not be liable for any indirect, consequential, or special liability arising out of or in any way
              related to your use of this Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">6. Indemnification</h2>
            <p>
              You hereby indemnify to the fullest extent {siteInfo.name} from and against any and all liabilities, costs,
              demands, causes of action, damages, and expenses (including reasonable attorney's fees) arising out of or
              in any way related to your breach of any of the provisions of these Terms.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">7. Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable or invalid under any applicable law, such
              unenforceability or invalidity shall not render these Terms unenforceable or invalid as a whole, and such
              provisions shall be deleted without affecting the remaining provisions herein.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">8. Variation of Terms</h2>
            <p>
              {siteInfo.name} is permitted to revise these Terms at any time as it sees fit, and by using this Website you
              are expected to review such Terms on a regular basis to ensure you understand all terms and conditions
              governing use of this Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">9. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and construed in accordance with the laws of the United States, and you
              submit to the non-exclusive jurisdiction of the state and federal courts located in the United States for
              the resolution of any disputes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: {contactInfo.email}</li>
              <li>By whatsapp: {contactInfo.whatsapp}</li>
              <li>By phone: {contactInfo.phone}</li>
              <li>CNPJ: {contactInfo.cnpj}</li>
              <li>By mail: {contactInfo.address.street}, {contactInfo.address.neighborhood}, {contactInfo.address.city} - {contactInfo.address.state}, {contactInfo.address.zipCode}</li>
            </ul>
          </section>

          <p className="pt-8 text-sm text-white/50">Last updated: April 13, 2025</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">© {new Date().getFullYear()} {siteInfo.name}. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="text-white/60 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
