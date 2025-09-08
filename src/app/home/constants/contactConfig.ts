import {
  BlogIcon,
  EmailIcon,
  GithubIcon,
  NotionIcon,
} from '@/shared/components/icons';

export interface ContactInfo {
  email: string;
  github: string;
  blog: string;
  resume: string;
}

export const CONTACT_CONFIG = {
  email: {
    label: 'Email',
    icon: EmailIcon,
    type: 'email' as const,
  },
  github: {
    label: 'GitHub',
    icon: GithubIcon,
    type: 'github' as const,
  },
  blog: {
    label: 'Blog',
    icon: BlogIcon,
    type: 'blog' as const,
  },
  resume: {
    label: 'Resume',
    icon: NotionIcon,
    type: 'resume' as const,
  },
} as const;
