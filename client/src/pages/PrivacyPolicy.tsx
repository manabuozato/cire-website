import React from "react";
import { Button } from "@/components/ui/button";
import noteImg from '@assets/note1_1757664796406.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const PrivacyPolicy = (): JSX.Element => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Translation content
  const content = {
    ja: {
      pageTitle: "プライバシーポリシー",
      title: "一般社団法人日本シェフ・イン・レジデンス応援協会\nウェブサイト・プライバシーポリシー",
      effectiveDate: "施行日：2025年02月14日",
      lastUpdated: "最終改定日：2025年09月12日",
      introText: "一般社団法人日本シェフ・イン・レジデンス応援協会（以下「当協会」）は、日本の個人情報保護法に基づき、本サイトで取り扱う個人情報・個人関連情報を以下の方針で取り扱います。",
      sections: [
        {
          title: "1. 取得する情報",
          content: "• 利用者が入力・送信した情報（氏名、メールアドレス、所属等）\n• 自動収集される情報（IPアドレス、デバイス・ブラウザ情報、クッキー等の技術）\n• 決済時：クレジットカード処理は外部決済サービス事業者に委託し、当協会ではカード番号を保持いたしません"
        },
        {
          title: "2. 利用目的",
          content: "当サイトおよび関連イベントの提供・運営、お問い合わせ対応、本人確認、重要なお知らせや活動情報の送付、サービス改善・統計分析、詐欺防止・セキュリティ、法令遵守・権利行使・防御の範囲で利用します。目的変更時は、元の目的と合理的関連性のある範囲で行い、公表いたします。"
        },
        {
          title: "3. 第三者提供",
          content: "個人の同意なく第三者に個人データを提供いたしません。例外：委託先への提供（決済処理、保守等）、事業承継、法令等による提供が必要な場合。オプトアウト方式による提供は行いません。"
        },
        {
          title: "4. 国外移転",
          content: "海外のクラウドや解析サービス利用時、同意取得や適用法令要件を満たした上で個人データを外国に移転することがあります。"
        },
        {
          title: "5. 安全管理措置",
          content: "組織的・人的・物理的・技術的措置を実施し、アクセス制御、暗号化、ログ管理、二要素認証、委託先監督等を行います。漏えい等事案時は、監督官庁への報告および本人通知を法令に従い行います。"
        },
        {
          title: "6. クッキー等の技術",
          content: "利便性向上・解析のためクッキー等の技術を使用します。ブラウザ設定でクッキーを無効化できます。使用ツール・オプトアウト方法は「クッキー等の技術の利用について」ページに記載します。"
        },
        {
          title: "7. 保有個人データに関する権利",
          content: "当協会が保有する保有個人データについて、開示（第三者提供記録含む）、訂正・追加・削除、利用停止・消去・第三者提供停止（法定例外あり）を請求できます。"
        },
        {
          title: "8. 保存期間",
          content: "目的達成に必要な期間を超えて情報を保存しません（法令で長期保存が求められる場合除く）。不要になった情報は適切に削除します。"
        },
        {
          title: "9. 未成年者",
          content: "未成年者の利用時、必要に応じ親権者等の同意を求めることがあります。"
        },
        {
          title: "10. 改定",
          content: "本ポリシー改定時は本サイト上で告知し、重要な変更は分かりやすく通知します。"
        },
        {
          title: "11. 連絡先",
          content: "一般社団法人日本シェフ・イン・レジデンス応援協会\n住所：〒220-0004 神奈川県横浜市西区北幸二丁目10番48号 むつみビル3階\nEmail: info@cire.or.jp\n個人情報保護管理者：代表理事 日髙誠人"
        }
      ]
    },
    en: {
      pageTitle: "Privacy Policy",
      title: "Japan Chef-in-Residence Empowerment Association (General Incorporated Association) Website Privacy Policy",
      effectiveDate: "Effective: February 14, 2025",
      lastUpdated: "Last Updated: September 12, 2025",
      introText: "The Japan Chef-in-Residence Empowerment Association (General Incorporated Association) (hereinafter, the \"Association\") handles personal information and personally related information on this website in accordance with Japan's Act on the Protection of Personal Information (APPI), as set forth below.",
      sections: [
        {
          title: "1. Information We Collect",
          content: "• Information entered or submitted by users (e.g., name, email address, affiliation, etc.)\n• Automatically collected information (e.g., IP address, device/browser information, cookies and similar technologies)\n• For payments: credit card processing is entrusted to external payment service providers; the Association does not retain card numbers."
        },
        {
          title: "2. Purposes of Use",
          content: "We use the information within the scope necessary for: providing and operating this website and related events; responding to inquiries; identity verification; sending important notices and activity information; service improvement and statistical analysis; fraud prevention and security; and compliance with laws and the exercise/defense of legal rights. If purposes are changed, such changes will be made within a scope reasonably related to the original purposes and will be publicly announced."
        },
        {
          title: "3. Provision to Third Parties",
          content: "We do not provide personal data to third parties without the individual's consent. The following are exceptions: provision to entrusted service providers (e.g., payment processing, maintenance), business succession, and provision required by laws and regulations. We do not engage in provision by the \"opt-out\" method."
        },
        {
          title: "4. Cross-Border Transfers",
          content: "When using overseas cloud or analytics services, personal data may be transferred to foreign countries after obtaining consent or otherwise meeting the requirements of applicable laws and regulations."
        },
        {
          title: "5. Security Control Measures",
          content: "We implement organizational, human, physical, and technical measures, including access control, encryption, log management, two-factor authentication, and supervision of entrusted parties. In the event of a leakage or similar incident, we will report to the supervisory authorities and notify the individuals concerned as required by law."
        },
        {
          title: "6. Cookies and Similar Technologies",
          content: "We use cookies and similar technologies to improve convenience and for analytics. You can disable cookies through your browser settings. The tools we use and opt-out methods are described on the \"Use of Cookies and Similar Technologies\" page."
        },
        {
          title: "7. Your Rights (Retained Personal Data)",
          content: "With respect to retained personal data held by the Association, individuals may request disclosure (including records of third-party provision), correction, addition, or deletion, and suspension of use, erasure, or suspension of third-party provision (subject to statutory exceptions)."
        },
        {
          title: "8. Retention Period",
          content: "We do not retain information longer than necessary to achieve the stated purposes (unless a longer period is required by law). Information that becomes unnecessary will be appropriately deleted."
        },
        {
          title: "9. Minors",
          content: "For use by minors, we may request consent from a parent or guardian as necessary."
        },
        {
          title: "10. Amendments",
          content: "If this Policy is amended, changes will be announced on this website, and important changes will be notified in an easy-to-understand manner."
        },
        {
          title: "11. Contact",
          content: "Japan Chef-in-Residence Empowerment Association (General Incorporated Association)\nAddress: 3F, Mutsumi Building, 2-10-48 Kita-Saiwai, Nishi-ku, Yokohama-shi, Kanagawa 220-0004, Japan\nEmail: info@cire.or.jp\nData Protection Manager: Masato Hidaka, Representative Director"
        }
      ]
    }
  };
  
  const navigationItems = [
    "ABOUT",
    "MISSION", 
    "AWARD",
    "NEWS",
    "SUPPORT US",
    "CONTACT",
  ];

  const footerNavigationItems = [
    "ABOUT",
    "MISSION",
    "AWARD", 
    "NEWS",
    "SUPPORT US",
    "CONTACT",
    "Privacy Policy",
  ];

  return (
    <main className="w-full bg-[#f7e489] min-h-screen">
      {/* Header Navigation */}
      <header className="sticky top-0 bg-[#f7e489] z-50">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between py-4 min-h-[4rem] md:min-h-[5rem]">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-3 sm:h-4 w-auto"
                  alt="Cir title"
                  src="/figmaAssets/cir-title.svg"
                />
              </a>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <a
                    href={
                      item === 'ABOUT' ? '/about' : 
                      item === 'NEWS' ? '/#news' :
                      item === 'Privacy Policy' ? '/legal' : 
                      `/#${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="font-bold text-[#5a3729] text-sm tracking-[0.70px] hover:text-[#71b0ff] transition-colors"
                    data-testid={`link-nav-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </a>
                  {item === 'CONTACT' && (
                    <a href="https://note.com/cire" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-12 sm:w-14 h-auto ml-2"
                        alt="Note"
                        src={noteImg}
                      />
                    </a>
                  )}
                </React.Fragment>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                className="text-[#5a3729] hover:text-[#71b0ff]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Privacy Policy Content Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px] mb-4" data-testid="text-section-title">
              {content[language].pageTitle}
            </h1>
          </div>
          
          {/* Privacy Policy Content */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm">
              
              {/* Policy Title */}
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] mb-4 text-center whitespace-pre-line">
                {content[language].title}
              </h2>
              
              {/* Dates */}
              <div className="text-center text-sm text-[#5a3729] mb-6">
                <p>{content[language].effectiveDate} | {content[language].lastUpdated}</p>
              </div>
              
              {/* Introduction */}
              <div className="text-sm text-[#5a3729] leading-6 mb-8 text-justify">
                {content[language].introText}
              </div>
              
              {/* Sections */}
              <div className="space-y-6">
                {content[language].sections.map((section, index) => (
                  <div key={index} className="border-b border-[#f2edf0] pb-4 last:border-b-0">
                    <h3 className="text-base md:text-lg font-bold text-[#5a3729] mb-3">
                      {section.title}
                    </h3>
                    <div className="text-sm text-[#5a3729] leading-6 whitespace-pre-line text-justify">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="text-center">
            <a href="/">
              <Button 
                className="bg-[#71b0ff] text-white hover:bg-[#5a9fe8] rounded-[29px] px-8 py-3 font-bold text-base tracking-[0.80px]"
                data-testid="button-back-home"
              >
                HOMEに戻る
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#b63622] py-12">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
              {footerNavigationItems.map((item, index) => (
                <a
                  key={index}
                  href={
                    item === 'ABOUT' ? '/about' : 
                    item === 'NEWS' ? '/#news' :
                    item === 'Privacy Policy' ? '/legal' : 
                    `/#${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="font-bold text-[#e9e8e3] text-sm tracking-[0.70px] hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-[#e9e8e3]/20">
            <div className="text-[#e9e8e3] text-xs tracking-[0.60px] text-center md:text-left">
              ©2025 一般社団法人日本シェフ・イン・レジデンス応援協会 All rights reserved.
            </div>
            <a href="https://note.com/cire" target="_blank" rel="noopener noreferrer">
              <img
                className="w-12 sm:w-14 h-auto"
                alt="Note"
                src="/figmaAssets/clip-path-group.png"
              />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};