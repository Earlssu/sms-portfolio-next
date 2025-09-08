import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo: React.FC = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: '📧',
      bgColor: 'bg-blue-500/20',
      textColor: 'text-blue-300',
      hoverColor: 'hover:text-blue-300',
      label: t('contact.contactInfo.email.label'),
      value: t('contact.contactInfo.email.value'),
      href: `mailto:${t('contact.contactInfo.email.value')}`,
    },
    {
      icon: '💼',
      bgColor: 'bg-purple-500/20',
      textColor: 'text-purple-300',
      hoverColor: 'hover:text-purple-300',
      label: t('contact.contactInfo.github.label'),
      value: t('contact.contactInfo.github.value'),
      href: 'https://github.com/Earlssu',
      external: true,
    },
    {
      icon: '📝',
      bgColor: 'bg-green-500/20',
      textColor: 'text-green-300',
      hoverColor: 'hover:text-green-300',
      label: t('contact.contactInfo.blog.label'),
      value: t('contact.contactInfo.blog.value'),
      href: 'https://code-in-law.tistory.com/',
      external: true,
    },
  ];

  return (
    <div className="space-y-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">
          {t('contact.contactInfo.title')}
        </h2>
        
        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
                <span className={`${item.textColor} text-xl`}>
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-white/60 text-sm">{item.label}</p>
                <a 
                  href={item.href}
                  {...(item.external && { 
                    target: "_blank", 
                    rel: "noopener noreferrer" 
                  })}
                  className={`text-white ${item.hoverColor} transition-colors`}
                >
                  {item.value}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
