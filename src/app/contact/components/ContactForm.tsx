import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 이메일 전송 로직 (나중에 구현)
    console.log('Form submitted:', formData);
    
    // 폼 초기화
    setFormData({ name: '', email: '', message: '' });
  };

  const formFields = [
    {
      type: 'text',
      id: 'name',
      name: 'name',
      label: t('contact.contactForm.name.label'),
      placeholder: t('contact.contactForm.name.placeholder'),
      value: formData.name,
      required: true,
    },
    {
      type: 'email',
      id: 'email',
      name: 'email',
      label: t('contact.contactForm.email.label'),
      placeholder: t('contact.contactForm.email.placeholder'),
      value: formData.email,
      required: true,
    },
  ];

  const inputClassName = "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all";

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">
        {t('contact.contactForm.title')}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 이름, 이메일 필드 */}
        {formFields.map((field) => (
          <div key={field.id}>
            <label 
              htmlFor={field.id} 
              className="block text-white/70 text-sm font-medium mb-2"
            >
              {field.label}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={field.value}
              onChange={handleInputChange}
              className={inputClassName}
              placeholder={field.placeholder}
              required={field.required}
            />
          </div>
        ))}

        {/* 메시지 필드 */}
        <div>
          <label 
            htmlFor="message" 
            className="block text-white/70 text-sm font-medium mb-2"
          >
            {t('contact.contactForm.message.label')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            className={`${inputClassName} resize-none`}
            placeholder={t('contact.contactForm.message.placeholder')}
            required
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          {t('contact.contactForm.submit')}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
