import React from "react";
import { Button } from "@/components/ui/button";
import noteImg from '@assets/note_1757659491855.png';
import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';

export const Legal = (): JSX.Element => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  
  const navigationItems = [
    "ABOUT",
    "MISSION", 
    "AWARD",
    "NEWS",
    "SUPPORT US",
    "CONTACT",
  ];

  const mobileNavigationItems = [
    "HOME",
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
              <Link to="/">
                <img
                  className="h-3 sm:h-4 w-auto"
                  alt="Cir title"
                  src="/figmaAssets/cir-title.svg"
                />
              </Link>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden min-[1100px]:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={
                      item === 'ABOUT' ? '/about' : 
                      item === 'NEWS' ? '/news' :
                      item === 'Privacy Policy' ? '/legal' : 
                      item === 'MISSION' ? '/?section=mission' :
                      item === 'AWARD' ? '/?section=award' :
                      item === 'SUPPORT US' ? '/?section=support-us' :
                      item === 'CONTACT' ? '/?section=contact' :
                      `/${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="font-bold text-[#5a3729] text-sm tracking-[0.70px] hover:text-[#71b0ff] transition-colors"
                    data-testid={`link-nav-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </Link>
                  {item === 'CONTACT' && (
                    <a href="https://note.com/cire" target="_blank" rel="noopener noreferrer">
                      <img
                        className="w-12 h-auto ml-2"
                        alt="Note"
                        src={noteImg}
                      />
                    </a>
                  )}
                </React.Fragment>
              ))}
              <div className="flex items-center gap-2">
                <img
                  className="w-4 h-4"
                  alt="Globe"
                  src="/figmaAssets/earth-1.svg"
                />
                <div className="font-bold text-[#5a3729] text-sm tracking-[0.70px]">
                  EN
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="min-[1100px]:hidden">
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 min-[1100px]:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-0 right-0 w-64 h-full bg-[#f7e489] shadow-lg">
            <div className="flex justify-end p-4">
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#5a3729] hover:text-[#71b0ff]"
                data-testid="button-close-mobile-menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="px-4 py-2">
              {mobileNavigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={
                      item === 'HOME' ? '/' :
                      item === 'ABOUT' ? '/about' : 
                      item === 'NEWS' ? '/news' :
                      item === 'Privacy Policy' ? '/legal' : 
                      item === 'MISSION' ? '/?section=mission' :
                      item === 'AWARD' ? '/?section=award' :
                      item === 'SUPPORT US' ? '/?section=support-us' :
                      item === 'CONTACT' ? '/?section=contact' :
                      `/${item.toLowerCase().replace(' ', '-')}`
                    }
                    className="block py-3 font-bold text-[#5a3729] text-base tracking-[0.70px] hover:text-[#71b0ff] transition-colors border-b border-[#5a3729]/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </Link>
                  {item === 'CONTACT' && (
                    <div className="py-3 flex justify-start border-b border-[#5a3729]/20">
                      <a href="https://note.com/cire" target="_blank" rel="noopener noreferrer">
                        <img
                          className="w-12 h-auto"
                          alt="Note"
                          src={noteImg}
                        />
                      </a>
                    </div>
                  )}
                </React.Fragment>
              ))}
              <div className="py-4 flex justify-center">
                <div className="flex items-center gap-2">
                  <img
                    className="w-4 h-4"
                    alt="Globe"
                    src="/figmaAssets/earth-1.svg"
                  />
                  <div className="font-bold text-[#5a3729] text-sm tracking-[0.70px]">
                    EN
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* Privacy Policy Content Section */}
      <section className="py-16 pt-32">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px] mb-4" data-testid="text-section-title">
              LEGAL
            </h1>
            <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px] mb-8">
              プライバシーポリシー
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="text-xs sm:text-sm md:text-base text-[#5a3729] leading-6 md:leading-7 text-justify mb-6">
                一般社団法人日本シェフ・イン・レジデンス応援協会は、「シェフ・イン・レジデンス」活動を応援する非営利型一般社団法人です。私たちは特に「継続型」「地元住民と観光客の両方に開かれた」「シェフと地域が自然に融合する仕組みを持つ」という3つの条件を満たした「シェフ・イン・レジデンス」の実現を目指す地域、シェフ、事業者等を応援します。そのようなかたちの「シェフ・イン・レジデンス」が日本各地に広がり、「創造的地域風土」を育む「日常と非日常の汽水域」となることで、地域がもっと面白く元気に、そして日本全体がもっと面白く豊かになることを目指しています。
              </div>
              <div className="text-[#5a3729] text-sm md:text-base leading-7 space-y-6">
                <p>
                  一般社団法人日本シェフ・イン・レジデンス応援協会（以下、「当協会」といいます。）は、当協会が運営するウェブサイト（以下、「本サイト」といいます。）における個人情報の取り扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第1条（個人情報）
              </h2>
              <div className="text-[#5a3729] text-base leading-7">
                <p>
                  「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第2条（個人情報の収集方法）
              </h2>
              <div className="text-[#5a3729] text-base leading-7">
                <p>
                  当協会は、利用者が利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、利用者と提携先などとの間でなされた利用者の個人情報を含む取引記録や決済に関する情報を、当協会の提携先（情報提供元、広告主、広告配信先などを含みます。以下、「提携先」といいます。）などから収集することがあります。
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第3条（個人情報を収集・利用する目的）
              </h2>
              <div className="text-[#5a3729] text-base leading-7 space-y-4">
                <p>当協会が個人情報を収集・利用する目的は、以下のとおりです。</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>当協会サービスの提供・運営のため</li>
                  <li>利用者からのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                  <li>利用者が利用中のサービスの新機能、更新情報、キャンペーン等及び当協会が提供する他のサービスの案内のメールを送付するため</li>
                  <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                  <li>利用規約に違反した利用者や、不正・不当な目的でサービスを利用しようとする利用者の特定をし、ご利用をお断りするため</li>
                  <li>上記の利用目的に付随する目的</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第4条（利用目的の変更）
              </h2>
              <div className="text-[#5a3729] text-base leading-7 space-y-4">
                <p>
                  当協会は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                </p>
                <p>
                  利用目的の変更を行った場合には、変更後の目的について、当協会所定の方法により、利用者に通知し、または本ウェブサイト上に公表するものとします。
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第5条（個人情報の第三者提供）
              </h2>
              <div className="text-[#5a3729] text-base leading-7 space-y-4">
                <p>
                  当協会は、次に掲げる場合を除いて、あらかじめ利用者の同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第6条（個人情報の開示）
              </h2>
              <div className="text-[#5a3729] text-base leading-7">
                <p>
                  当協会は、本人から個人情報の開示を求められたときは、本人に対し、遅滞なくこれを開示します。ただし、開示することにより次のいずれかに該当する場合は、その全部または一部を開示しないこともあり、開示しない決定をした場合には、その旨を遅滞なく通知します。
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第7条（プライバシーポリシーの変更）
              </h2>
              <div className="text-[#5a3729] text-base leading-7 space-y-4">
                <p>
                  本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、利用者に通知することなく、変更することができるものとします。
                </p>
                <p>
                  当協会が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.44px] mb-4">
                第8条（お問い合わせ窓口）
              </h2>
              <div className="text-[#5a3729] text-base leading-7">
                <p>
                  本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                </p>
                <div className="mt-4 p-4 bg-[#f2edf0] rounded-lg">
                  <p className="font-bold">一般社団法人日本シェフ・イン・レジデンス応援協会</p>
                  <p>お問い合わせフォーム：<a href="https://docs.google.com/forms/d/e/1FAIpQLSddTII6LxsrnJNBWboTBvWRfaErkLBnqt6WYt3Z2oxTw_tzwQ/viewform?usp=dialog" className="text-[#71b0ff] hover:underline" target="_blank" rel="noopener noreferrer">こちら</a></p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="/#/">
                <Button 
                  className="bg-[#71b0ff] text-white hover:bg-[#5a9fe8] rounded-[29px] px-8 py-3 font-bold text-base tracking-[0.80px]"
                  data-testid="button-back-home"
                >
                  HOMEに戻る
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#b63622] py-12">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-8">
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
              {footerNavigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={
                    item === 'ABOUT' ? '/about' : 
                    item === 'NEWS' ? '/news' :
                    item === 'Privacy Policy' ? '/legal' : 
                    item === 'MISSION' ? '/?section=mission' :
                    item === 'AWARD' ? '/?section=award' :
                    item === 'SUPPORT US' ? '/?section=support-us' :
                    item === 'CONTACT' ? '/?section=contact' :
                    `/${item.toLowerCase().replace(' ', '-')}`
                  }
                  className="font-bold text-[#e9e8e3] text-sm tracking-[0.70px] hover:text-white transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-8 border-t border-[#e9e8e3]/20">
            <div className="text-[#e9e8e3] text-xs tracking-[0.60px] text-center md:text-left">
              {language === 'ja' 
                ? '©2025 一般社団法人日本シェフ・イン・レジデンス応援協会 All rights reserved.'
                : '©2025 Japan Chef-in-Residence Empowerment Association (General Incorporated Association) All rights reserved.'
              }
            </div>
            <a href="https://note.com/cire" target="_blank" rel="noopener noreferrer">
              <img
                className="w-12 h-auto"
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