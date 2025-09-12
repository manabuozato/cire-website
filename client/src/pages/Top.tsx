import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const Top = (): JSX.Element => {
  const missionCards = [
    {
      badge: "その１",
      title: "シェフが次々に\n訪れ続ける「継続型」\nであること",
      image: "/figmaAssets/sono1.png",
      description:
        "一時的なイベントにとどまらず、年間を通して多種多様なシェフが絶え間なく訪れ、継続的に期間限定レストランが開かれ続けることによって、地域に持続的な活気と新鮮な刺激をもたらします。",
    },
    {
      badge: "その２",
      title: "観光客にも\n地元の人にも\n開かれていること",
      image: "/figmaAssets/sono2-3.png",
      description:
        "観光客だけを対象にせず、地元住民も非日常を味わいつつも、気軽に訪れられるように設計することで、レストランが地域と隔絶せず、地域と観光客とシェフが交流できる場となります。",
    },
    {
      badge: "その３",
      title: "シェフと地域を\n融合させる\n仕組みがあること",
      image: "/figmaAssets/sono3.svg",
      description:
        "地元住民や食材との交流を容易にし、旅するシェフと地域が自然に交流できる仕組みや環境が整っていることで、レストラン以外にもシェフと地域の接点が生まれます。",
    },
  ];

  const newsItems = [
    {
      date: "2025.08.28",
      title: "タイトルが入ります。そのまま外リンクに飛びます。",
    },
    {
      date: "2025.08.28", 
      title: "タイトルが入ります。そのまま外リンクに飛びます。",
    },
    {
      date: "2025.08.28",
      title: "タイトルが入ります。そのまま外リンクに飛びます。",
    },
  ];

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
              <img
                className="h-3 sm:h-4 w-auto"
                alt="Cir title"
                src="/figmaAssets/cir-title.svg"
              />
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="font-bold text-[#5a3729] text-sm tracking-[0.70px] hover:text-[#71b0ff] transition-colors"
                    data-testid={`link-nav-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </a>
                  {item === 'CONTACT' && (
                    <img
                      className="w-12 sm:w-14 h-auto ml-2"
                      alt="Note"
                      src="/figmaAssets/clip-path-group.png"
                    />
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

      {/* Hero Section */}
      <section className="relative bg-[url('/figmaAssets/group-4.png')] bg-cover bg-center bg-no-repeat mt-6">
        <div className="aspect-[16/9] md:aspect-[21/9]"></div>
      </section>

      {/* About CTA Section - Full Width Blue Background with Cloud Background */}
      <section className="w-full bg-[#71b0ff] bg-[url('/figmaAssets/vector.png')] bg-no-repeat bg-center min-h-[500px] md:min-h-[600px] relative flex items-center justify-center" id="about" style={{ backgroundSize: '45%' }}>
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Text centered in cloud background */}
            <div className="text-center text-[#5a3729] px-4 mb-8">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
                シェフ・イン・レジデンスとは<br />
                日本や世界を旅するシェフを地域に迎え入れ<br />
                期間限定で展開されるレストラン活動です
              </h1>
            </div>
            {/* ABOUT button below text */}
            <div className="flex justify-center">
              <Button 
                className="bg-white text-[#71b0ff] hover:bg-gray-100 rounded-[29px] px-8 py-3 font-bold text-base tracking-[0.80px]"
                data-testid="button-about"
              >
                ABOUT
                <img
                  className="ml-2 w-1.5 h-2 sm:w-2 sm:h-2.5"
                  alt="Arrow"
                  src="/figmaAssets/vector-6.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16" id="mission">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px] mb-8" data-testid="text-section-title">
              MISSION
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[1.92px] mb-6">
              理想のための３条件
            </h3>
            <p className="text-[#5a3729] text-base max-w-4xl mx-auto leading-6 text-justify">
              「シェフ・イン・レジデンス」とは、地域外のシェフを招き入れて地域の活性化を促す取り組みであり、地域の創造性や活力を高めるための重要な手段となります。特に、わたしたちは、「旅するシェフ」を地域活性化の鍵となる存在として捉え、わたしたちが目指す「シェフ・イン・レジデンス」の理想的なかたちの条件として以下の３つを挙げています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {missionCards.map((card, index) => (
              <Card
                key={index}
                className="bg-[#f2edf0] rounded-[30px] border-0 p-8 min-h-[600px]"
              >
                <CardContent className="flex flex-col items-center gap-6 p-0 h-full">
                  <div className="flex flex-col items-center gap-4">
                    <Badge className="bg-[#71b0ff] rounded-[60px] border-0 hover:bg-[#71b0ff] px-4 py-2">
                      <span className="font-bold text-white text-sm">
                        {card.badge}
                      </span>
                    </Badge>
                    <h4 className="font-bold text-[#5a3729] text-xl text-center tracking-[1.32px] leading-[30px]">
                      {card.title.split("\n").map((line, lineIndex) => (
                        <React.Fragment key={lineIndex}>
                          {line}
                          {lineIndex < card.title.split("\n").length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </h4>
                  </div>
                  
                  <img
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain flex-shrink-0 my-4"
                    alt="Mission"
                    src={card.image}
                  />
                  
                  <p className="text-[#5a3729] text-sm leading-6 tracking-[0.60px] flex-grow text-center">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Award Section */}
      <section className="py-16" id="award">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px]" data-testid="text-section-title">
              AWARD
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <img
                className="w-full h-auto object-cover rounded-lg"
                alt="The Relay Awards"
                src="/figmaAssets/therelayawards2025-kv-1.png"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-normal text-[#5a3729] tracking-[1.92px] leading-[45px] mb-6">
                  The Relay Awards
                </h3>
                <p className="text-[#5a3729] text-base leading-6">
                  日本におけるシェフ・イン・レジデンスの発展と地域活性化を目的とした新たな表彰制度「The Relay Awards（ザ・リレー・アワード）」を創設いたしました。あわせて、本アワードの表彰イベントを2025年12月1日（月）17:00より、SHIBAURA HOUSE（〒108-0023 東京都港区芝浦3-15-4）にて開催予定です（原則：ご案内制・一般販売なし／サポーターご案内枠あり）。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full bg-[#f2edf0] py-16" id="news">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px]" data-testid="text-section-title">
              NEWS
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ul className="divide-y divide-[#5a3729]">
              {newsItems.map((item, index) => (
                <li key={index} className="py-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <span className="font-normal text-[#5a3729] text-sm tracking-[1.50px] md:w-32 flex-shrink-0">
                      {item.date}
                    </span>
                    <span className="font-normal text-[#5a3729] text-sm tracking-[1.50px] flex-1">
                      {item.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* View More CTA - Full Width Blue Background */}
        <div className="w-full bg-[#71b0ff] py-8 mt-12">
          <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <Button 
                className="bg-white text-[#71b0ff] hover:bg-gray-100 rounded-[29px] px-8 py-3 font-bold text-base tracking-[0.80px]"
                data-testid="button-view-more"
              >
                VIEW MORE
                <img
                  className="ml-2 w-1.5 h-2 sm:w-2 sm:h-2.5"
                  alt="Arrow"
                  src="/figmaAssets/vector-6.svg"
                />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16" id="support-us">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px]" data-testid="text-section-title">
              SUPPORT US!
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="flex justify-center">
              <img
                className="w-64 h-auto object-contain max-w-full"
                alt="Support"
                src="/figmaAssets/support.png"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[1.92px] leading-[45px] mb-6">
                  タイトル
                </h3>
                <p className="text-[#5a3729] text-base leading-6">
                  テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Full Width Blue Background */}
      <section className="w-full bg-[#71b0ff] py-16" id="contact">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-[2.40px] mb-8" data-testid="text-section-title">
              CONTACT
            </h2>
            <Button 
              className="bg-white text-[#71b0ff] hover:bg-gray-100 rounded-[29px] px-8 py-3 font-bold text-base tracking-[0.80px]"
              data-testid="button-google-form"
            >
              GOOGLE FORM
              <img
                className="ml-2 w-1.5 h-2 sm:w-2 sm:h-2.5"
                alt="Arrow"
                src="/figmaAssets/vector-6.svg"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#b63622] py-12">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-shrink-0">
              <img
                className="h-3 sm:h-4 w-auto"
                alt="Cir title"
                src="/figmaAssets/cir-title.svg"
              />
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
              {footerNavigationItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
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
            <img
              className="w-12 sm:w-14 h-auto"
              alt="Logo"
              src="/figmaAssets/clip-path-group.png"
            />
          </div>
        </div>
      </footer>
    </main>
  );
};