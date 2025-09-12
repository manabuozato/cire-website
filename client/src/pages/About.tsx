import React from "react";
import { Button } from "@/components/ui/button";
import noteImg from '@assets/note1_1757664796406.png';
import icModelImg from '@assets/icmodel_1757663210701.png';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { Link } from 'wouter';

export const About = (): JSX.Element => {
  const { language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Translation content
  const content = {
    ja: {
      pageTitle: "ABOUT",
      pageSubtitle: "シェフ・イン・レジデンス\n活動を応援する一般社団法人（非営利型）",
      mainDescription: "一般社団法人日本シェフ・イン・レジデンス応援協会は、「シェフ・イン・レジデンス」活動を応援する非営利型一般社団法人です。私たちは特に「継続型」「地元住民と観光客の両方に開かれた」「シェフと地域が自然に融合する仕組みを持つ」という3つの条件を満たした「シェフ・イン・レジデンス」の実現を目指す地域、シェフ、事業者等を応援します。そのようなかたちの「シェフ・イン・レジデンス」が日本各地に広がり、「創造的地域風土」を育む「日常と非日常の汽水域」となることで、地域がもっと面白く元気に、そして日本全体がもっと面白く豊かになることを目指しています。",
      chefResidenceTitle: "「シェフ・イン・レジデンス」とは",
      chefResidenceContent: "「シェフ・イン・レジデンス」とは、日本や世界を旅するシェフを地域に迎え入れ、期間限定で展開されるレストラン活動です。この活動は、地域に新たな出会いや創造性を生み出すことを目的としています。旅するシェフが地域の人々や地元食材、文化、風土と交流することで、地域の魅力を（再）発見し、地域の魅力がさらに高まり広がります。またシェフにとってはその地域ならではの経験が得られます。一般社団法人日本シェフ・イン・レジデンス応援協会は、全国各地でこうした活動が持続的に行われ、広がっていくよう応援しています。",
      memberTitle: "MEMBER",
      organizationTitle: "ORGANIZATION",
      creativeTerritoryTitle: "「創造的地域風土」とは",
      creativeTerritoryContent: "「創造的地域風土」とは、地域を構成する人々が共通して持つ価値観や考え方、行動様式を指し、創造性が自然と育ちやすく、新たな挑戦や交流が次々と生まれるような環境のことです。このような環境を整えることで、地域の人々が気軽に新たな試みに参加し、互いに刺激し合いながら成長し合えるコミュニティが形成されます。わたしたちは、シェフ・イン・レジデンスが「日常と非日常の汽水域※」として機能することで、創造的地域風土を高めると考えています。",
      creativeTerritoryFootnote: "※汽水域：河川と海が交わる場所に形成される水域で、淡水と海水が混ざり合う環境を指します。その意味を転じて、性質の異なるヒト・モノ・コトが混ざり合う場・空間・機会・環境のことを指しています。",
      whatWeDoTitle: "WHAT WE DO",
      whatWeDo: [
        {
          title: "１．情報発信と調査研究",
          description: "旅するシェフ、迎える地域やキッチンそれぞれが抱える課題や魅力を調査・分析し、その結果を広く共有することで、課題の解決策や成功事例を提示します。"
        },
        {
          title: "２．アワードの実施",
          description: "理想的な「シェフ・イン・レジデンス」の活動を実現しているシェフや地域、キッチンを称え、さらなる活動推進のためのアワードを開催します。これにより、各地での活動が活性化し、より多くの地域での取り組みが促進されることを目指しています。"
        },
        {
          title: "３．旅するシェフと迎える地域のサポート",
          description: "旅するシェフと迎える地域が効果的かつ円滑に連携できるように支援します。具体的には、地域のキッチン運営の助言や実務サポート、旅するシェフの滞在支援、さらに国際交流を促すための外国人シェフの招聘も行います。"
        },
        {
          title: "４．外国人シェフ招致プログラム",
          description: "外国人シェフが地域に「旅するシェフ」で活動することによるインパクト検証や課題発見のため、外国人シェフを対象とした招致を目指した活動を行います。"
        }
      ],
      members: [
        {
          name: "日髙誠人",
          nameReading: "（ひだか まさと）",
          title: "代表理事・共同ファウンダー",
          bio: "神奈川県出身。大手ITサービス企業にてディレクター・プランナーとして活動し、SaaS事業推進や全社ナレッジ活性化、新規事業開発などを担当。長崎県五島列島の地域課題解決に取り組む一般社団法人みつめる旅の理事も務める。2024年より、中小企業診断士としても活動。"
        },
        {
          name: "西木戸弓佳",
          nameReading: "（にしきど ゆみか）",
          title: "理事・共同ファウンダー",
          bio: "福岡県出身。広告制作やITプランナーとして従事後、老舗の工芸メーカーにて商品企画や地域活性化事業を手掛ける。D2Cベンチャーの取締役を経て独立し、現在はフリーの編集者・ディレクターとして活動。北海道を拠点に環境・地域の課題解決に取り組む株式会社SHIZENの取締役。"
        },
        {
          name: "守護直樹",
          nameReading: "（しゅご なおき）",
          title: "理事",
          bio: "茨城県出身。都内の司法書士法人に勤務後独立し、司法書士法人の役員を務める。法人商業登記コンサルティング業務を専門とし、クライアント数は年間300社を超える。飲食好きが功を奏し現職に至る。"
        },
        {
          name: "大里学",
          nameReading: "（おおざと まなぶ）",
          title: "共同ファウンダー・運営サポート",
          bio: "福井県大野市出身。東京都内の広告会社に在籍。米日財団の日米リーダーシッププログラム（USJLP）フェロー。本協会では、外部の立場からサポート活動を行う。"
        }
      ],
      orgName: "一般社団法人日本シェフ・イン・レジデンス応援協会",
      orgAddress: "〒220-0004 神奈川県横浜市西区北幸二丁目10番48号 むつみビル3階",
      orgEmail: "Email: info@cire.or.jp",
      orgNote: "本協会は、米日財団からの助成金を受けて運営されている 非営利型一般社団法人です。"
    },
    en: {
      pageTitle: "ABOUT",
      pageSubtitle: "Supporting Chef-in-Residence\nActivities Nationwide",
      mainDescription: "The Japan Chef-in-Residence Support Association is a non-profit general incorporated association that supports 'Chef-in-Residence' activities. We particularly support regions, chefs, business operators, and others who aim to realize 'Chef-in-Residence' that meets three conditions: 'continuous', 'open to both local residents and tourists', and 'having a mechanism for natural integration between chefs and the region'. By spreading such forms of 'Chef-in-Residence' throughout Japan and becoming a 'brackish zone between the everyday and extraordinary' that nurtures 'creative regional culture', we aim to make regions more interesting and energetic, and Japan as a whole more interesting and prosperous.",
      chefResidenceTitle: "What is \"Chef-in-Residence\"?",
      chefResidenceContent: "\"Chef-in-Residence\" is a restaurant activity that welcomes traveling chefs from Japan and around the world to regions for limited-time operations. This activity aims to create new encounters and creativity in regions. Through interactions between traveling chefs and local people, ingredients, culture, and climate, regions can (re)discover their charms, further enhancing and spreading their appeal. For chefs, this provides unique regional experiences. The Japan Chef-in-Residence Support Association supports the sustainable implementation and spread of such activities throughout Japan.",
      memberTitle: "MEMBER",
      organizationTitle: "ORGANIZATION", 
      creativeTerritoryTitle: "What is \"Creative Regional Culture\"?",
      creativeTerritoryContent: "\"Creative Regional Culture\" refers to the values, mindsets, and behavioral patterns commonly shared by the people who make up a region, and represents an environment where creativity naturally flourishes and new challenges and exchanges continuously emerge. By establishing such an environment, we can form communities where local people can easily participate in new endeavors and grow together while stimulating each other. We believe that Chef-in-Residence functions as a \"brackish zone between the everyday and the extraordinary,\" thereby enhancing creative regional culture.",
      creativeTerritoryFootnote: "※Brackish zone: A water area formed where rivers and seas meet, referring to an environment where fresh and salt water mix. By extension, this term refers to places, spaces, opportunities, and environments where people, things, and matters of different natures come together.",
      whatWeDoTitle: "WHAT WE DO",
      whatWeDo: [
        {
          title: "1. Information Dissemination and Research",
          description: "We investigate and analyze the challenges and attractions faced by traveling chefs and the regions and kitchens that welcome them, sharing the results widely to present solutions and success stories."
        },
        {
          title: "2. Awards Implementation",
          description: "We celebrate chefs, regions, and kitchens that realize ideal Chef-in-Residence activities, hosting awards to further promote such activities. This aims to revitalize activities in various locations and encourage initiatives in more regions."
        },
        {
          title: "3. Support for Traveling Chefs and Host Regions",
          description: "We support traveling chefs and host regions to collaborate effectively and smoothly. Specifically, this includes advice and practical support for regional kitchen operations, accommodation support for traveling chefs, and inviting foreign chefs to promote international exchange."
        },
        {
          title: "4. Foreign Chef Invitation Program",
          description: "We conduct activities aimed at inviting foreign chefs to verify the impact and identify challenges when foreign chefs work as 'traveling chefs' in regions."
        }
      ],
      members: [
        {
          name: "Masato Hidaka",
          nameReading: "",
          title: "Representative Director & Co-founder",
          bio: "Born in Kanagawa Prefecture. Worked as a director and planner at a major IT services company, handling SaaS business promotion, company-wide knowledge activation, and new business development. Also serves as a director of the general incorporated association Mitsumeru Tabi, which addresses regional issues in the Goto Islands, Nagasaki Prefecture. Since 2024, has also been active as a certified management consultant."
        },
        {
          name: "Yumika Nishikido",
          nameReading: "",
          title: "Director & Co-founder",
          bio: "Born in Fukuoka Prefecture. After working in advertising production and as an IT planner, handled product planning and regional revitalization projects at a long-established craft manufacturer. After serving as an executive at a D2C venture, became independent and currently works as a freelance editor and director. Director at SHIZEN Co., Ltd., which addresses environmental and regional issues based in Hokkaido."
        },
        {
          name: "Naoki Shugo",
          nameReading: "",
          title: "Director",
          bio: "Born in Ibaraki Prefecture. After working at a judicial scrivener corporation in Tokyo, became independent and now serves as an executive at a judicial scrivener corporation. Specializes in corporate commercial registration consulting services, with over 300 clients annually. His love of dining led to his current position."
        },
        {
          name: "Manabu Osato",
          nameReading: "",
          title: "Co-founder & Operations Support",
          bio: "Born in Ono City, Fukui Prefecture. Works at an advertising company in Tokyo. Fellow of the US-Japan Leadership Program (USJLP) by the US-Japan Foundation. Provides support activities for the association from an external position."
        }
      ],
      orgName: "Japan Chef-in-Residence Empowerment Association (General Incorporated Association)",
      orgAddress: "3F, Mutsumi Building, 2-10-48 Kita-Saiwai, Nishi-ku, Yokohama-shi, Kanagawa 220-0004, Japan",
      orgEmail: "Email: info@cire.or.jp",
      orgNote: "This association is a non-profit general incorporated association operated with grants from the US-Japan Foundation."
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
              <Link to="/">
                <h1 className="text-[#5a3729] font-bold text-xs sm:text-sm lg:text-base leading-tight">
                  一般社団法人日本シェフ・イン・レジデンス応援協会
                </h1>
              </Link>
            </div>
            
            {/* Navigation Menu */}
            <div className="hidden xl:flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={
                      item === 'ABOUT' ? '/about' : 
                      item === 'NEWS' ? '/?section=news' :
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
            <div className="xl:hidden">
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 xl:hidden" onClick={() => setIsMobileMenuOpen(false)}>
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
                      item === 'NEWS' ? '/?section=news' :
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
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      )}

      {/* About Content Section */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px] mb-4" data-testid="text-section-title">
              {content[language].pageTitle}
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px]">
              {content[language].pageSubtitle.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < content[language].pageSubtitle.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </h2>
          </div>
          
          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] text-justify">
              {content[language].mainDescription}
            </div>
          </div>

          {/* What is "Chef in Residence" Section */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px] mb-6 text-center">
              {content[language].chefResidenceTitle}
            </h2>
            <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] text-justify">
              {content[language].chefResidenceContent}
            </div>
          </div>

          {/* What is Creative Regional Culture Section */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            {/* Title Section - Top */}
            <div className="text-center mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px]">
                {content[language].creativeTerritoryTitle}
              </h2>
            </div>
            
            {/* Content Section - Bottom split into left and right */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
              {/* Left - Image and Reference */}
              <div className="flex-shrink-0 md:w-1/2">
                <img
                  src={icModelImg}
                  alt="iC Model - innumerable Cs Model"
                  className="w-full h-auto"
                />
                <p className="text-xs text-[#5a3729] mt-2 text-left">
                  参考：ディスカッション・ペーパー｜「創造的地域風土」を生みだすiCモデル（innumerable Cs Model）　（2024, UNIVERSITY of CREATIVITY）
                </p>
              </div>
              
              {/* Right - Content */}
              <div className="flex-1 md:w-1/2">
                <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] text-justify">
                  {content[language].creativeTerritoryContent}
                </div>
                <div className="text-xs text-[#5a3729] leading-5 tracking-[0.50px] text-justify mt-4">
                  {content[language].creativeTerritoryFootnote}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Full Width */}
      <section className="w-full bg-[#F2EDF0] py-8 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[2.40px] mb-8 text-center">
            {content[language].whatWeDoTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {content[language].whatWeDo.map((item, index) => (
              <div key={index} className="text-left">
                <h3 className="text-sm sm:text-base md:text-lg text-[#5a3729] font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5a3729] leading-5 text-justify">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">

          {/* Member Section */}
          <div className="max-w-6xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[2.40px] mb-12 text-center">
              {content[language].memberTitle}
            </h2>
            
            {/* Responsive grid layout */}
            <div className="space-y-6 md:space-y-8">
              {/* First row - 日髙, 西木戸, 守護 on wide screens; 日髙, 西木戸 on medium */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {content[language].members.slice(0, 3).map((member, index) => (
                  <div 
                    key={index} 
                    className={`${index === 2 ? 'sm:col-span-2 lg:col-span-1 sm:justify-self-center lg:justify-self-auto' : ''} bg-[#F2EDF0] rounded-3xl p-4 md:p-6 text-center`}
                  >
                    <h3 className="text-base md:text-lg font-bold text-[#5a3729] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#5a3729] mb-2">
                      {member.nameReading}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-[#5a3729] mb-3">
                      {member.title}
                    </p>
                    <p className="text-xs text-[#5a3729] leading-4 text-justify">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Second row - 大里 centered */}
              {content[language].members[3] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-[#F2EDF0] rounded-3xl p-4 md:p-6 text-center sm:col-start-1 lg:col-start-2">
                    <h3 className="text-base md:text-lg font-bold text-[#5a3729] mb-1">
                      {content[language].members[3].name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#5a3729] mb-2">
                      {content[language].members[3].nameReading}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-[#5a3729] mb-3">
                      {content[language].members[3].title}
                    </p>
                    <p className="text-xs text-[#5a3729] leading-4 text-justify">
                      {content[language].members[3].bio}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Organization Section */}
          <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center bg-[#F2EDF0] rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[2.40px] mb-8">
              {content[language].organizationTitle}
            </h2>
            <div className="space-y-4 text-[10px] sm:text-xs md:text-sm text-[#5a3729]">
              <p className="font-bold text-sm sm:text-base md:text-lg">
                {content[language].orgName}
              </p>
              <p>
                {content[language].orgAddress}
              </p>
              <p>
                {content[language].orgEmail}
              </p>
              <p className="mt-6 font-medium">
                {content[language].orgNote}
              </p>
            </div>
          </div>

          {/* Back to Home Button */}
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