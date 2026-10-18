import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import SocialLinks from '@/components/common/SocialLinks'
import PageIntro from '@/components/common/PageIntro'
import { ArrowUpRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Martin Whitaker — currently taking on small freelance projects alongside my day job.',
  openGraph: {
    title: 'Contact — Martin Whitaker',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <main id="main" tabIndex={-1}>
      <PageIntro eyebrow="Contact" title={<>Good things start<br /><span>with a conversation.</span></>} description="Have a useful idea, an interesting problem, or a small project in mind? I’m currently taking on select freelance work alongside my day job." note="Based in Norfolk, UK / Usually replies within a couple of days" />

      <section className="container-custom page-section">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-24">
          <div className="order-2 space-y-9 lg:order-1">
            <div className="rule-panel">
              <p className="eyebrow">Prefer email?</p>
              <a href="mailto:martwhitty@gmail.com" className="mt-3 inline-flex min-h-11 items-center gap-3 text-lg font-bold underline decoration-ink/25 underline-offset-8 dark:decoration-white/30">martwhitty@gmail.com<ArrowUpRight aria-hidden="true" size={18} className="shrink-0" /></a>
            </div>
            <div className="rule-panel">
              <p className="eyebrow">Find me online</p>
              <SocialLinks className="mt-5" iconClassName="text-ink/60 hover:text-ink dark:text-white/60 dark:hover:text-white" />
            </div>
            <div className="rule-panel">
              <p className="eyebrow">Availability</p>
              <p className="mt-3 text-base leading-7 text-ink/70 dark:text-white/70">Based in Norfolk, UK. Open to remote work across UK time zones, alongside my day job at Norfolk County Council.</p>
              <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-ink/75 dark:text-white/75"><span className="h-1.5 w-1.5 rounded-full bg-[#478152] dark:bg-[#b8e0bf]" aria-hidden="true" />Available for select projects</p>
            </div>
          </div>
          <div className="surface-card order-1 bg-white p-6 dark:bg-[#151326] sm:p-8 lg:order-2">
            <h2 className="display-title text-2xl">Tell me what you have in mind.</h2>
            <p className="mb-8 mt-3 text-sm leading-6 text-ink/65 dark:text-white/65">A few details are all you need. Sending opens a draft in your email app.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
