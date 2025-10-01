import emailjs from '@emailjs/browser';
import {
  EMAILJS_CONFIG,
  getConfigSource,
  isEmailJSConfigured,
} from '@/shared/config/emailjs';

// 폼 데이터 타입
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// 이메일 전송 응답 타입
export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

// EmailJS 초기화
export const initializeEmailJS = () => {
  if (!isEmailJSConfigured()) {
    throw new Error(
      'EmailJS configuration is missing. Please check your environment variables.'
    );
  }
  
  // publicKey가 존재함을 확인했으므로 non-null assertion 사용
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// 이메일 전송 함수
export const sendContactEmail = async (
  formData: ContactFormData
): Promise<EmailResponse> => {
  try {
    // 설정 유효성 검사
    if (!isEmailJSConfigured()) {
      console.error('EmailJS configuration missing');
      return {
        success: false,
        message:
          '이메일 서비스 설정에 문제가 있습니다. 관리자에게 문의해주세요.',
        error: 'EmailJS configuration missing',
      };
    }

    // 현재 설정 소스 로깅 (개발용)
    console.log(`EmailJS 설정 소스: ${getConfigSource()}`);

    // EmailJS 초기화 (매번 호출해도 안전)
    initializeEmailJS();

    // 템플릿 변수 설정
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      to_email: 'mshimdev@gmail.com', // 받는 이메일
      reply_to: formData.email, // 답장 주소
    };

    // 이메일 전송 (타입 체크 후 전송)
    if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId) {
      return {
        success: false,
        message: '이메일 서비스 설정에 문제가 있습니다. 관리자에게 문의해주세요.',
        error: 'EmailJS configuration is incomplete',
      };
    }
    
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);

    return {
      success: true,
      message: '메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.',
    };
  } catch (error) {
    console.error('Email send failed:', error);

    return {
      success: false,
      message: '메시지 전송에 실패했습니다. 다시 시도해주세요.',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

// 이메일 유효성 검사
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// 폼 데이터 유효성 검사
export const validateContactForm = (
  formData: ContactFormData
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('이름을 입력해주세요.');
  }

  if (!formData.email.trim()) {
    errors.push('이메일을 입력해주세요.');
  } else if (!validateEmail(formData.email)) {
    errors.push('올바른 이메일 형식을 입력해주세요.');
  }

  if (!formData.message.trim()) {
    errors.push('메시지를 입력해주세요.');
  } else if (formData.message.trim().length < 10) {
    errors.push('메시지는 최소 10자 이상 입력해주세요.');
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
