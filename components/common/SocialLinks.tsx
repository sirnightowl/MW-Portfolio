import { Codepen, Dribbble, Github, Linkedin, Mail } from 'lucide-react'
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
    name: 'CodePen',
    url: 'https://codepen.io/sirnightowl',
    icon: <Codepen size={20} aria-hidden="true" />,
  },
  {
    name: 'Dribbble',
    url: 'https://dribbble.com/sirnightowl',
    icon: <Dribbble size={20} aria-hidden="true" />,
  },
  {
    name: 'Email',
    url: '/contact',
    icon: <Mail size={20} />,
  },
]

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export default function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target={social.url.startsWith('http') ? '_blank' : undefined}
          rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
          aria-label={social.name}
          className={cn(
            'flex h-11 w-11 items-center justify-center rounded-lg border border-ink/15 text-ink/70 transition-colors duration-200 hover:bg-cream hover:text-ink dark:border-white/15 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white',
            iconClassName
          )}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
