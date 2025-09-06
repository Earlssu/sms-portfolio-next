'use client';

import React, { useEffect } from 'react';
import './ProjectDetailModal.css';

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectData: {
    title: string;
    subtitle?: string;
    num: string;
    imageSrc: string;
    period?: string;
    type?: string;
    description?: string;
    role?: string;
    team?: string;
    technologies?: string[];
    achievements?: string[];
    details?: {
      problem?: string;
      solution?: string;
      impact?: string;
    };
  } | null;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  isOpen,
  onClose,
  projectData,
}) => {
  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !projectData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-card"
        onClick={(e) => e.stopPropagation()} // 카드 클릭 시 모달 닫힘 방지
      >
        {/* 배경 이미지 */}
        <div className="modal-image-container">
          <img 
            src={projectData.imageSrc} 
            alt={projectData.title}
            className="modal-image"
          />
          <div className="modal-image-overlay" />
        </div>

        {/* 닫기 버튼 */}
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        {/* 프로젝트 번호 */}
        <div className="modal-num">{projectData.num}</div>

        {/* 콘텐츠 영역 */}
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title">{projectData.title}</h1>
            {projectData.subtitle && (
              <p className="modal-subtitle">{projectData.subtitle}</p>
            )}
            {projectData.type && (
              <div className="modal-type">{projectData.type}</div>
            )}
          </div>
          
          {projectData.period && (
            <div className="modal-period">📅 {projectData.period}</div>
          )}

          {projectData.description && (
            <p className="modal-description">{projectData.description}</p>
          )}

          <div className="modal-info-grid">
            {projectData.role && (
              <div className="modal-section">
                <h3 className="modal-section-title">👨‍💻 담당 역할</h3>
                <p className="modal-section-content">{projectData.role}</p>
              </div>
            )}

            {projectData.team && (
              <div className="modal-section">
                <h3 className="modal-section-title">👥 팀</h3>
                <p className="modal-section-content">{projectData.team}</p>
              </div>
            )}
          </div>

          {projectData.technologies && projectData.technologies.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">🛠️ 사용 기술</h3>
              <div className="modal-tech-tags">
                {projectData.technologies.map((tech, index) => (
                  <span key={index} className="modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {projectData.achievements && projectData.achievements.length > 0 && (
            <div className="modal-section">
              <h3 className="modal-section-title">🏆 주요 성과</h3>
              <ul className="modal-achievements">
                {projectData.achievements.map((achievement, index) => (
                  <li key={index} className="modal-achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {projectData.details && (
            <div className="modal-section">
              <h3 className="modal-section-title">💡 프로젝트 인사이트</h3>
              <div className="modal-insights">
                {projectData.details.problem && (
                  <div className="modal-insight-item">
                    <h4 className="modal-insight-label">🚨 문제점</h4>
                    <p className="modal-insight-content">{projectData.details.problem}</p>
                  </div>
                )}
                {projectData.details.solution && (
                  <div className="modal-insight-item">
                    <h4 className="modal-insight-label">💡 해결방안</h4>
                    <p className="modal-insight-content">{projectData.details.solution}</p>
                  </div>
                )}
                {projectData.details.impact && (
                  <div className="modal-insight-item">
                    <h4 className="modal-insight-label">📈 임팩트</h4>
                    <p className="modal-insight-content">{projectData.details.impact}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
