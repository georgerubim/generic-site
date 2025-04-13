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
          Back to Home
        </Link>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1
          className={`${ppEditorialNewUltralightItalic.className} text-4xl md:text-5xl font-light italic text-white/90 mb-12`}
        >
          Privacy Policy
        </h1>

        <div className="space-y-8 text-white/70">
          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">1. Introduction</h2>
            <p>
              At George Rubim ("we," "our," or "us"), we respect your privacy and are committed to protecting your
              personal data. This privacy policy explains how we collect, use, and safeguard your information when you
              visit our website prisma.agency (the "Website").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the Website.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">2. Information We Collect</h2>
            <p>
              <strong>Personal Data:</strong> We may collect personal identification information, including but not
              limited to your name, email address, phone number, and company name when you fill out our contact form or
              subscribe to our newsletter.
            </p>
            <p>
              <strong>Usage Data:</strong> We may also collect information on how the Website is accessed and used. This
              usage data may include information such as your computer's Internet Protocol (IP) address, browser type,
              browser version, the pages of our Website that you visit, the time and date of your visit, the time spent
              on those pages, and other diagnostic data.
            </p>
            <p>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to
              track activity on our Website and hold certain information. Cookies are files with a small amount of data
              which may include an anonymous unique identifier.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">3. How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our Website</li>
              <li>Improve, personalize, and expand our Website</li>
              <li>Understand and analyze how you use our Website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>
                Communicate with you, either directly or through one of our partners, for customer service, updates, and
                other website-related information
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">4. Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure a level of security appropriate
              to the risk, including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of personal data</li>
              <li>
                Ability to ensure ongoing confidentiality, integrity, availability, and resilience of processing systems
                and services
              </li>
              <li>
                Ability to restore the availability and access to personal data in a timely manner in the event of a
                physical or technical incident
              </li>
              <li>
                Process for regularly testing, assessing, and evaluating the effectiveness of technical and
                organizational measures for ensuring the security of the processing
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">5. Third-Party Service Providers</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our Website ("Service Providers"), to
              provide the Website on our behalf, to perform Website-related services, or to assist us in analyzing how
              our Website is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">6. Your Data Protection Rights</h2>
            <p>
              If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim
              to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.
            </p>
            <p>
              If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our
              systems, please contact us.
            </p>
            <p>In certain circumstances, you have the following data protection rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access, update, or delete the information we have on you</li>
              <li>The right of rectification</li>
              <li>The right to object</li>
              <li>The right of restriction</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">7. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl text-white/90 font-medium">8. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: eugeorgerubim@gmail.com</li>
              <li>By phone: +55 92 8152-9639</li>
              <li>CNPJ: 59.494.073/0001-20</li>
              <li>By mail: Rua Criciuma 31B Apt 31B, Alvorada, Manaus - AM, 69043-140</li>
            </ul>
          </section>

          <p className="pt-8 text-sm text-white/50">Last updated: April 13, 2025</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/40 text-sm">© {new Date().getFullYear()} George Rubim. All rights reserved.</div>
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
