import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { sendContactEmail, validateContactForm, ContactFormData } from '@/shared/services/emailService';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // 상태 메시지 초기화 (사용자가 입력을 시작하면)
    if (formStatus.isSuccess || formStatus.isError) {
      setFormStatus(prev => ({
        ...prev,
        isSuccess: false,
        isError: false,
        message: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. 폼 유효성 검사
    const validation = validateContactForm(formData as ContactFormData);
    if (!validation.isValid) {
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: validation.errors.join(' ')
      });
      return;
    }

    // 2. 전송 시작
    setFormStatus({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '메시지를 전송하고 있습니다...'
    });

    try {
      // 3. 이메일 전송
      const result = await sendContactEmail(formData as ContactFormData);

      if (result.success) {
        // 성공 처리
        setFormStatus({
          isSubmitting: false,
          isSuccess: true,
          isError: false,
          message: result.message
        });

        // 폼 초기화
        setFormData({ name: '', email: '', message: '' });
      } else {
        // 실패 처리
        setFormStatus({
          isSubmitting: false,
          isSuccess: false,
          isError: true,
          message: result.message
        });
      }
    } catch (error) {
      // 예외 처리
      setFormStatus({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.'
      });
    }
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

        {/* 상태 메시지 */}
        {formStatus.message && (
          <div className={`p-4 rounded-lg border ${
            formStatus.isSuccess 
              ? 'bg-green-500/10 border-green-500/30 text-green-300' 
              : formStatus.isError
              ? 'bg-red-500/10 border-red-500/30 text-red-300'
              : 'bg-blue-500/10 border-blue-500/30 text-blue-300'
          }`}>
            <div className="flex items-center gap-2">
              {formStatus.isSubmitting && (
                <div className="w-4 h-4 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
              )}
              {formStatus.isSuccess && <span className="text-lg">✅</span>}
              {formStatus.isError && <span className="text-lg">❌</span>}
              <p className="text-sm font-medium">{formStatus.message}</p>
            </div>
          </div>
        )}

        {/* 제출 버튼 */}
        <button
          type="submit"
          disabled={formStatus.isSubmitting}
          className={`w-full py-3 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 ${
            formStatus.isSubmitting
              ? 'bg-gray-600 cursor-not-allowed text-gray-300'
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transform hover:scale-105'
          }`}
        >
          {formStatus.isSubmitting ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 border-t-transparent rounded-full animate-spin" />
              전송 중...
            </div>
          ) : (
            t('contact.contactForm.submit')
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
