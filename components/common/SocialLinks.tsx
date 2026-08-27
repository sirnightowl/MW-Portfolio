import { Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

interface SocialLink {
  name: string
  url: string
  icon: React.ReactNode
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/sirnightowl',
    icon: <Github size={20} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/martin-whitaker',
    icon: <Linkedin size={20} />,
  },
  {
    name: 'Email',
    url: 'mailto:martwhitty@gmail.com',
    icon: <Mail size={20} />,
  },
]

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export default function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn('flex items-center gap-4', className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.url.startsWith('http') ? '_blank' : undefined}
          rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={social.name}
          className={cn(
            'text-ink/60 transition-colors duration-200 hover:text-ink',
            iconClassName
          )}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}