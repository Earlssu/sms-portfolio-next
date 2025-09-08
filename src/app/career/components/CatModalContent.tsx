import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectData } from '@/app/career/types/projectData';
import { CatCarousel } from '@/shared/components/CatCarousel';
import { formatContent } from '@/shared/utils/contentFormatter';

interface CatModalContentProps {
  projectData: ProjectData;
}

const CatModalContent: React.FC<CatModalContentProps> = ({ projectData }) => {
  const { t } = useTranslation();
  const formattedContent = formatContent(t('hiddenCats.secret.content'));

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-8">
      {/* 제목 */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {t('hiddenCats.title')}
        </h1>
        <p className="text-lg text-white/60 italic">
          {t('hiddenCats.subtitle')}
        </p>
      </div>

      {/* 설명 */}
      <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
        {t('hiddenCats.description')}
      </p>

      {/* 숨겨진 고양이 캐러셀 */}
      <div className="w-full max-w-lg">
        <CatCarousel isDarkMode={true} />
      </div>

      {/* 추가 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-2xl">
        {projectData.period && (
          <div className="text-center">
            <h3 className="text-white/60 text-sm font-medium mb-2">
              {t('hiddenCats.info.period')}
            </h3>
            <p className="text-white">{projectData.period}</p>
          </div>
        )}

        {projectData.role && (
          <div className="text-center">
            <h3 className="text-white/60 text-sm font-medium mb-2">
              {t('hiddenCats.info.role')}
            </h3>
            <p className="text-white">{projectData.role}</p>
          </div>
        )}

        {projectData.team && (
          <div className="text-center">
            <h3 className="text-white/60 text-sm font-medium mb-2">
              {t('hiddenCats.info.team')}
            </h3>
            <p className="text-white">{projectData.team}</p>
          </div>
        )}
      </div>

      {/* 위트 있는 메시지 */}
      <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 max-w-2xl">
        <p className="text-white/70 text-sm leading-relaxed">
          💡 <strong>{t('hiddenCats.secret.title')}</strong>
        </p>
        {formattedContent.map((line, index) => {
          return (
            <p key={index} className="text-white/70 text-sm leading-relaxed">{line}</p>
          );
        })}
      </div>
    </div>
  );
};

export default CatModalContent;
