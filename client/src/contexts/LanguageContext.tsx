import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

type Language = "ja" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ja");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("language");
      if (saved === "ja" || saved === "en") {
        setLanguageState(saved);
        return;
      }
    } catch {
      // localStorage 利用不可でも既定 ja で動く
    }
    if (
      typeof navigator !== "undefined" &&
      navigator.language &&
      navigator.language.toLowerCase().startsWith("en")
    ) {
      setLanguageState("en");
    }
  }, []);

  const setLanguage = (next: Language) => {
    setLanguageState(next);
    try {
      localStorage.setItem("language", next);
    } catch {
      // 保存に失敗しても表示は切り替わる
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
