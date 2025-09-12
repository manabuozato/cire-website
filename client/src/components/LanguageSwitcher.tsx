import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'ja' ? 'en' : 'ja');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-[#5a3729] hover:text-[#71b0ff] transition-colors"
      data-testid="language-switcher"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {language === 'ja' ? 'EN' : '日本語'}
      </span>
    </button>
  );
};