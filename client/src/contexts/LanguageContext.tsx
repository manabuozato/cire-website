import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ja' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  ja: {
    // Navigation
    'nav.about': 'ABOUT',
    'nav.mission': 'MISSION',
    'nav.award': 'AWARD',
    'nav.news': 'NEWS',
    'nav.support': 'SUPPORT US',
    'nav.contact': 'CONTACT',
    'nav.privacy': 'Privacy Policy',
    
    // Top page
    'top.title': 'シェフ・イン・レジデンス<br />活動を応援する社団法人',
    'top.hero.title': 'わたしたちは、旅するシェフを地域に迎え\n期間限定で展開されるレストラン活動である\n「シェフ・イン・レジデンス」を応援する\n一般社団法人（非営利型）です',
    'top.hero.subtitle': '',
    'top.mission.title': 'MISSION',
    'top.mission.subtitle': 'わたしたちが応援するシェフ・イン・レジデンス：３つの条件',
    'top.mission.description': '「シェフ・イン・レジデンス」とは、地域外のシェフを招き入れて地域の活性化を促す取り組みであり、地域の創造性や活力を高めるための重要な手段となります。特に、わたしたちは、「旅するシェフ」を地域活性化の鍵となる存在として捉え、わたしたちが目指す「シェフ・イン・レジデンス」の理想的なかたちの条件として以下の３つを挙げています。そして、全国各地でこうした活動が持続的に行われ、広がっていくよう応援しています。',
    'top.mission.card1.badge': 'その１',
    'top.mission.card1.title': 'シェフが次々に\n訪れ続ける「継続型」\nであること',
    'top.mission.card1.description': '一時的なイベントにとどまらず、年間を通して多種多様なシェフが絶え間なく訪れ、継続的に期間限定レストランが開かれ続けることにより、地域に持続的な活気と新鮮な刺激をもたらします。',
    'top.mission.card2.badge': 'その２',
    'top.mission.card2.title': '観光客にも\n地元の人にも\n開かれていること',
    'top.mission.card2.description': '観光客だけを対象にせず、地元住民も非日常を味わいつつも、気軽に訪れられるように設計することで、レストランが地域と隔絶せず、地域と観光客とシェフが交流できる場となります。',
    'top.mission.card3.badge': 'その３',
    'top.mission.card3.title': 'シェフと地域を\n融合させる\n仕組みがあること',
    'top.mission.card3.description': '地元住民や食材との交流を容易にし、旅するシェフと地域が自然に交流できる仕組みや環境が整っていることで、レストラン以外にもシェフと地域の接点が生まれます。',
    'top.award.title': 'AWARD',
    'top.award.subtitle': 'The Relay Awards',
    'top.award.description': '「**The Relay Awards**（ザ・リレー・アワード）」は、当協会が掲げる3条件を満たす、または実現を目指すシェフ・イン・レジデンスを応援・顕彰する表彰プログラムです。\n各地でシェフ・イン・レジデンスを主催・運営する「キッチン・レジデンス」（組織・団体・個人）を表彰対象とし、順位づけではなく、優れた取り組みの可視化と学びの共有を目的とします。\n\nアワードへのエントリーは下記フォームより受け付けます。',
    'top.award.form.link': 'https://docs.google.com/forms/d/e/1FAIpQLScNJy_wzmtZlhNjnTffATeUKtOUe9pnuud3-VyLNmjzB6UeLg/closedform',
    'top.award.form.text': 'The Relay Awards エントリーフォーム',
    'top.news.title': 'NEWS',
    'top.support.title': 'SUPPORT US!',
    'top.support.subtitle': '応援協会だって応援されたい',
    'top.support.description': '一般社団法人日本シェフ・イン・レジデンス応援協会は、運営メンバーによるプロボノで活動している非営利団体です。わたしたちの活動に共感・共鳴いただける方からの、応援メッセージからリアルなサポート、なんなら寄付まで、ひろく募集しております。もしなんらか応援いただける方は、下のCONTACTからご連絡ください。',
    'top.contact.title': 'CONTACT',
    
    // About page  
    'about.title': 'ABOUT',
    'about.subtitle': '一般社団法人日本シェフ・イン・レジデンス応援協会について',
    'about.main.description': '一般社団法人日本シェフ・イン・レジデンス応援協会は、「シェフ・イン・レジデンス」活動を応援する非営利型一般社団法人です。私たちは特に「継続型」「地元住民と観光客の両方に開かれた」「シェフと地域が自然に融合する仕組みを持つ」という3つの条件を満たした「シェフ・イン・レジデンス」の実現を目指す地域、シェフ、事業者等を応援します。そのようなかたちの「シェフ・イン・レジデンス」が日本各地に広がり、「創造的地域風土」を育む「日常と非日常の汽水域」となることで、地域がもっと面白く元気に、そして日本全体がもっと面白く豊かになることを目指しています。',
    'about.chef.title': '「シェフ・イン・レジデンス」とは',
    'about.chef.description': '「シェフ・イン・レジデンス」とは、日本や世界を旅するシェフを地域に迎え入れ、期間限定で展開されるレストラン活動です。この活動は、地域に新たな出会いや創造性を生み出すことを目的としています。旅するシェフが地域の人々や地元食材、文化、風土と交流することで、地域の魅力を（再）発見し、地域の魅力がさらに高まり広がります。またシェフにとってはその地域ならではの経験が得られます。一般社団法人日本シェフ・イン・レジデンス応援協会は、全国各地でこうした活動が持続的に行われ、広がっていくよう応援しています。',
    'about.culture.title': '「創造的地域風土」とは',
    'about.culture.description': '「創造的地域風土」とは、地域を構成する人々が共通して持つ価値観や考え方、行動様式を指し、創造性が自然と育ちやすく、新たな挑戦や交流が次々と生まれるような環境のことです。このような環境を整えることで、地域の人々が気軽に新たな試みに参加し、互いに刺激し合いながら成長し合えるコミュニティが形成されます。わたしたちは、シェフ・イン・レジデンスが「日常と非日常の汽水域※」として機能することで、創造的地域風土を高めると考えています。',
  },
  en: {
    // Navigation
    'nav.about': 'ABOUT',
    'nav.mission': 'MISSION', 
    'nav.award': 'AWARD',
    'nav.news': 'NEWS',
    'nav.support': 'SUPPORT US',
    'nav.contact': 'CONTACT',
    'nav.privacy': 'Privacy Policy',
    
    // Top page
    'top.title': 'A General Incorporated Association<br />that supports Chef-in-Residence programs',
    'top.mission.title': 'MISSION',
    'top.mission.subtitle': 'Three Conditions for the Ideal Form',
    'top.mission.description': '"Chef-in-Residence" refers to initiatives that welcome chefs from outside the region to promote regional revitalization—an important way to enhance a region\'s creativity and vitality. We regard traveling chefs as key actors in revitalization and set out the following three conditions as the ideal form of Chef-in-Residence we aim to support. We also work to ensure these activities are carried out sustainably and spread across Japan and all over the world.',
    
    // About page
    'about.title': 'ABOUT',
    'about.subtitle': 'About the Association',
    'about.main.description': 'The Japan Chef-in-Residence Empowerment Association (General Incorporated Association) is a nonprofit that supports Chef-in-Residence activities. In particular, we support regions, chefs, and businesses striving to realize Chef-in-Residence programs that meet our three conditions: (1) continuous rotation of visiting chefs, (2) open to both local residents and tourists, and (3) mechanisms that naturally integrate chefs with the region. We aim for Chef-in-Residence programs of this kind to spread throughout Japan, serving as "brackish water zones between everyday and extraordinary" that foster "creative regional climates"—making regions more interesting and energetic, and Japan as a whole more interesting and prosperous.',
    'about.chef.title': 'What is "Chef-in-Residence"?',
    'about.chef.description': '"Chef-in-Residence" welcomes traveling chefs from Japan and around the world into a region to operate a limited-term restaurant. The goal is to spark new encounters and creativity. As traveling chefs interact with local people, ingredients, culture, and climate, the region\'s appeal is (re)discovered and amplified—while chefs gain experiences unique to that place. Our Association supports the sustainable development and wider adoption of such activities throughout Japan.',
    'about.culture.title': 'What is a "Creative Regional Climate"?',
    'about.culture.description': 'A Creative Regional Climate refers to the shared values, mindsets, and behavioral patterns of people in a region—an environment where creativity naturally flourishes and new challenges and interactions continuously emerge. By cultivating such an environment, communities form where people can easily try new things and grow together while inspiring one another. We believe Chef-in-Residence, functioning as a "brackish water zone between everyday and extraordinary," enhances creative regional climates.',
  }
};

// Detect browser language - default to Japanese, only switch to English if browser language is English
const detectBrowserLanguage = (): Language => {
  if (typeof window !== 'undefined') {
    const browserLang = navigator.language || navigator.languages?.[0];
    return browserLang?.startsWith('en') ? 'en' : 'ja';
  }
  return 'ja'; // Default to Japanese on server
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('ja');

  useEffect(() => {
    // Check localStorage first, then browser language
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'ja' || savedLang === 'en')) {
      setLanguage(savedLang);
    } else {
      const detectedLang = detectBrowserLanguage();
      setLanguage(detectedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};