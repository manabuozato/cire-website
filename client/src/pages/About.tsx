import React from "react";
import { Button } from "@/components/ui/button";
import noteImg from '@assets/note_1757659491855.png';

export const About = (): JSX.Element => {
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
                    href={item === 'ABOUT' ? '/about' : item === 'Privacy Policy' ? '/legal' : `/#${item.toLowerCase().replace(' ', '-')}`}
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
            <div className="md:hidden">
              <button className="text-[#5a3729] hover:text-[#71b0ff]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* About Content Section */}
      <section className="py-16 pt-32">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px] mb-8" data-testid="text-section-title">
              ABOUT
            </h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[1.92px] mb-6">
                一般社団法人日本シェフ・イン・レジデンス応援協会について
              </h2>
              <div className="text-[#5a3729] text-base leading-7 space-y-6">
                <p>
                  当協会は、旅するシェフを地域に迎え、期間限定で展開されるレストラン活動である「シェフ・イン・レジデンス」を応援する非営利団体です。
                </p>
                <p>
                  「シェフ・イン・レジデンス」とは、地域外のシェフを招き入れて地域の活性化を促す取り組みであり、地域の創造性や活力を高めるための重要な手段となります。特に、わたしたちは、「旅するシェフ」を地域活性化の鍵となる存在として捉え、わたしたちが目指す「シェフ・イン・レジデンス」の理想的なかたちの条件として３つの要素を重視しています。
                </p>
                <p>
                  継続性、開放性、そして地域との融合性。これらの要素が調和することで、単なる一時的なイベントではなく、地域に根ざした持続的な価値創造の場となることを目指しています。
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[1.92px] mb-6">
                私たちの使命
              </h2>
              <div className="text-[#5a3729] text-base leading-7 space-y-6">
                <p>
                  地域と旅するシェフとの架け橋となり、食を通じた文化交流と地域振興を促進することが私たちの使命です。
                </p>
                <p>
                  全国各地の地域資源を活かしながら、シェフの創造性と地域の魅力を融合させることで、新しい価値を生み出し、持続可能な地域づくりに貢献していきます。
                </p>
              </div>
            </div>

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
                  href={item === 'ABOUT' ? '/about' : item === 'Privacy Policy' ? '/legal' : `/#${item.toLowerCase().replace(' ', '-')}`}
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