import { Github, Mail } from 'lucide-react'
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
    icon: <Github size={20} />
  },
  {
    name: 'Email',
    url: 'mailto:martwhitty@gmail.com',
    icon: <Mail size={20} />
  }
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
            'text-gray-500 hover:text-primary transition-colors duration-200',
            'hover:scale-110 transform',
            iconClassName
          )}
        >
          {social.icon}
        </a>
      ))}
    </div>
  )
}
