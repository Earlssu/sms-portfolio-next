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
    <div className="space-y-6 sm:space-y-8">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-white/10">
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">
          {t('contact.contactInfo.title')}
        </h2>
        
        <div className="space-y-4 sm:space-y-6">
          {contactItems.map((item, index) => (
            <div key={index} className="flex items-center gap-3 sm:gap-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 ${item.bgColor} rounded-full flex items-center justify-center`}>
                <span className={`${item.textColor} text-lg sm:text-xl`}>
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-white/60 text-xs sm:text-sm">{item.label}</p>
                <a 
                  href={item.href}
                  {...(item.external && { 
                    target: "_blank", 
                    rel: "noopener noreferrer" 
                  })}
                  className={`text-white text-sm sm:text-base ${item.hoverColor} transition-colors break-all`}
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
