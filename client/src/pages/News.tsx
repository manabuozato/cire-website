import React from "react";
import noteImg from '@assets/note_1757659491855.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Link } from 'wouter';

export const News = (): JSX.Element => {
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

  const footerNavigationItems = [
    "ABOUT",
    "MISSION",
    "AWARD", 
    "NEWS",
    "SUPPORT US",
    "CONTACT",
    "Privacy Policy",
  ];

  const newsItems = [
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" },
    { date: "2025.08.28", title: "タイトルが入ります。そのまま外リンクに飛びます。" }
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
            <div className="hidden md:flex items-center space-x-6">
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

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
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
                    className="block py-3 font-bold text-[#5a3729] text-base tracking-[0.70px] hover:text-[#71b0ff] transition-colors border-b border-[#5a3729]/20"
                    onClick={() => setIsMobileMenuOpen(false)}
                    data-testid={`link-mobile-nav-${item.toLowerCase().replace(' ', '-')}`}
                  >
                    {item}
                  </Link>
                  {item === 'CONTACT' && (
                    <div className="py-3 flex justify-center border-b border-[#5a3729]/20">
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
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* News Content Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px]" data-testid="text-section-title">
              NEWS
            </h1>
          </div>
          
          {/* News Items */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 md:space-y-8">
              {newsItems.map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 py-4 border-b border-[#5a3729]/20">
                  <div className="text-sm md:text-base font-bold text-[#5a3729] whitespace-nowrap">
                    {item.date}
                  </div>
                  <a 
                    href="#" 
                    className="text-sm md:text-base text-[#5a3729] hover:text-[#71b0ff] transition-colors cursor-pointer"
                    data-testid={`link-news-${index}`}
                  >
                    {item.title}
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 md:gap-6 mt-12 md:mt-16">
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#5a3729] text-white flex items-center justify-center font-bold text-sm md:text-base hover:bg-[#71b0ff] transition-colors"
                data-testid="pagination-1"
              >
                1
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#5a3729] text-[#5a3729] flex items-center justify-center font-bold text-sm md:text-base hover:bg-[#5a3729] hover:text-white transition-colors"
                data-testid="pagination-2"
              >
                2
              </a>
              <a 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#5a3729] text-[#5a3729] flex items-center justify-center font-bold text-sm md:text-base hover:bg-[#5a3729] hover:text-white transition-colors"
                data-testid="pagination-3"
              >
                3
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
                  href={
                    item === 'ABOUT' ? '/#/about' : 
                    item === 'NEWS' ? '/#/news' :
                    item === 'Privacy Policy' ? '/#/legal' : 
                    item === 'MISSION' ? '/#/?section=mission' :
                    item === 'AWARD' ? '/#/?section=award' :
                    item === 'SUPPORT US' ? '/#/?section=support-us' :
                    item === 'CONTACT' ? '/#/?section=contact' :
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