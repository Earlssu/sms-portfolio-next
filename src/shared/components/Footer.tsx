import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-6 px-6 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          
          {/* 메인 푸터 콘텐츠 */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* 저작권 정보 */}
            <div className="text-center lg:text-left">
              <p className="text-white font-medium text-lg mb-1">
                심민섭 | Frontend Developer
              </p>
              <p className="text-gray-300 text-sm">
                &copy; {new Date().getFullYear()} MinSeob Shim. All rights reserved.
              </p>
              <p className="text-gray-400 text-xs mt-1">
                이 사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다.
              </p>
            </div>

            {/* 연락처 정보 */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 text-sm mb-2">Contact</p>
              <div className="flex flex-col gap-1 text-xs text-gray-400">
                <a 
                  href="mailto:mshimdev@gmail.com" 
                  className="hover:text-blue-300 transition-colors"
                >
                  mshimdev@gmail.com
                </a>
                <a 
                  href="https://github.com/Earlssu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors"
                >
                  GitHub: @Earlssu
                </a>
                <a 
                  href="https://code-in-law.tistory.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-green-300 transition-colors"
                >
                  Blog: code-in-law
                </a>
              </div>
            </div>
          </div>

          {/* Attribution 섹션 */}
          <div className="border-t border-white/5 pt-4">
            <div className="text-center">
              <p className="text-gray-500 text-xs mb-2 font-medium">Icons & Resources Attribution</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-gray-400">
                
                {/* Flaticon Attribution */}
                <div className="flex items-center gap-1">
                  <span>Favicon by</span>
                  <a 
                    href="https://www.flaticon.com/authors/bharat-icons" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    Bharat Icons
                  </a>
                  <span>from</span>
                  <a 
                    href="https://www.flaticon.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors underline"
                  >
                    Flaticon
                  </a>
                </div>

                {/* 구분선 */}
                <span className="hidden sm:inline text-gray-600">•</span>

                {/* SVGRepo Attribution */}
                <div className="flex items-center gap-1">
                  <span>Icons from</span>
                  <a 
                    href="https://www.svgrepo.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors underline"
                  >
                    SVGRepo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 기술 스택 정보 */}
          <div className="text-center border-t border-white/5 pt-4">
            <p className="text-gray-500 text-xs">
              Built with{' '}
              <span className="text-blue-400 font-medium">Next.js</span>,{' '}
              <span className="text-blue-500 font-medium">TypeScript</span>,{' '}
              <span className="text-cyan-400 font-medium">TailwindCSS</span>
              {' '}& deployed on{' '}
              <span className="text-white font-medium">Vercel</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
