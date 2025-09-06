import { TraitKey, TraitTranslationKeys, TRAIT_TAB_KEYS, TabKey } from '../types/trait';

// useTranslation에서 사용할 키 패턴 생성 함수
export const getTraitTranslationKey = (
  traitKey: TraitKey,
  field: keyof TraitTranslationKeys
): `traits.${TraitKey}.${keyof TraitTranslationKeys}` => {
  return `traits.${traitKey}.${field}`;
};

// 탭 콘텐츠 전용 키 생성 함수 (의미있는 키 이름 사용)
export const getTraitTabContentKey = <T extends TraitKey>(
  traitKey: T, 
  tabIndex: number
): `traits.${T}.tabContents.${TabKey<T>}` => {
  const tabKeys = TRAIT_TAB_KEYS[traitKey];
  const tabKey = tabKeys[tabIndex];
  return `traits.${traitKey}.tabContents.${tabKey}` as `traits.${T}.tabContents.${TabKey<T>}`;
};
