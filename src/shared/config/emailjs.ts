// EmailJS Configuration
// 환경변수 우선, 없으면 개발용 설정 사용

// 개발용 설정 (git에 커밋되지 않도록 주의!)
const DEV_CONFIG = {
  serviceId: 'sms_protfolio_next',
  templateId: 'template_sms_portfolio', 
  publicKey: '1ESb2n3Ps-FIt9r51',
};

// 프로덕션용: 환경변수 우선, 개발용 fallback
export const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || DEV_CONFIG.serviceId,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || DEV_CONFIG.templateId,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || DEV_CONFIG.publicKey,
};

// 설정 유효성 검사
export const isEmailJSConfigured = () => {
  return !!(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey);
};

// 현재 사용 중인 설정 소스 확인 (디버깅용)
export const getConfigSource = () => {
  const hasEnvVars = !!(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID && 
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID && 
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  );
  return hasEnvVars ? 'environment' : 'development';
};
