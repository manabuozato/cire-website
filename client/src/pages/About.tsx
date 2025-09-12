import React from "react";
import { Button } from "@/components/ui/button";
import noteImg from '@assets/note1_1757664796406.png';
import icModelImg from '@assets/icmodel_1757663210701.png';

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

  const memberData = [
    {
      name: "日髙誠人",
      nameKana: "（ひだか まさと）",
      position: "代表理事・共同ファウンダー",
      description: "神奈川県出身。大手ITサービス企業にてディレクター・プランナーとして活動し、SaaS事業推進や全社ナレッジ活性化、新規事業開発などを担当。長崎県五島列島の地域課題解決に取り組む一般社団法人みつめる旅の理事も務める。2024年より、中小企業診断士としても活動。"
    },
    {
      name: "西木戸弓佳", 
      nameKana: "（にしきど ゆみか）",
      position: "理事・共同ファウンダー",
      description: "福岡県出身。広告制作やITプランナーとして従事後、老舗の工芸メーカーにて商品企画や地域活性化事業を手掛ける。D2Cベンチャーの取締役を経て独立し、現在はフリーの編集者・ディレクターとして活動。北海道を拠点に環境・地域の課題解決に取り組む株式会社SHIZENの取締役。"
    },
    {
      name: "守護直樹",
      nameKana: "（しゅご なおき）", 
      position: "理事",
      description: "茨城県出身。都内の司法書士法人に勤務後独立し、司法書士法人の役員を務める。法人商業登記コンサルティング業務を専門とし、クライアント数は年間300社を超える。飲食好きが功を奏し現職に至る。"
    },
    {
      name: "大里学",
      nameKana: "（おおざと まなぶ）",
      position: "共同ファウンダー・運営サポート", 
      description: "福井県大野市出身。東京都内の広告会社に在籍。米日財団の日米リーダーシッププログラム（USJLP）フェロー。本協会では、外部の立場からサポート活動を行う。"
    }
  ];

  const whatWeDo = [
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
                        className="w-48 sm:w-56 h-auto ml-2"
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
      <section className="py-8 md:py-16">
        <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* Main Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#5a3729] tracking-[2.40px] mb-4" data-testid="text-section-title">
              ABOUT
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px]">
              シェフ・イン・レジデンス<br />活動を応援する社団法人
            </h2>
          </div>
          
          {/* Main Description */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] text-justify">
              一般社団法人日本シェフ・イン・レジデンス応援協会は、「シェフ・イン・レジデンス」活動を応援する非営利型一般社団法人です。私たちは特に「継続型」「地元住民と観光客の両方に開かれた」「シェフと地域が自然に融合する仕組みを持つ」という3つの条件を満たした「シェフ・イン・レジデンス」の実現を目指す地域、シェフ、事業者等を応援します。そのようなかたちの「シェフ・イン・レジデンス」が日本各地に広がり、「創造的地域風土」を育む「日常と非日常の汽水域」となることで、地域がもっと面白く元気に、そして日本全体がもっと面白く豊かになることを目指しています。
            </div>
          </div>

          {/* What is "Chef in Residence" Section */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px] mb-6 text-center">
              「シェフ・イン・レジデンス」とは
            </h2>
            <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] text-justify">
              「シェフ・イン・レジデンス」とは、日本や世界を旅するシェフを地域に迎え入れ、期間限定で展開されるレストラン活動です。この活動は、地域に新たな出会いや創造性を生み出すことを目的としています。旅するシェフが地域の人々や地元食材、文化、風土と交流することで、地域の魅力を（再）発見し、地域の魅力がさらに高まり広がります。またシェフにとってはその地域ならではの経験が得られます。一般社団法人日本シェフ・イン・レジデンス応援協会は、全国各地でこうした活動が持続的に行われ、広がっていくよう応援しています。
            </div>
          </div>

          {/* What is Creative Regional Culture Section */}
          <div className="max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="bg-[#F2EDF0] rounded-3xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6">
                <div className="flex-shrink-0">
                  <img
                    src={icModelImg}
                    alt="iC Model - innumerable Cs Model"
                    className="w-full md:w-80 lg:w-96 h-auto"
                  />
                </div>
                <div className="flex-1 flex items-start">
                  <h2 className="text-xl md:text-2xl font-bold text-[#5a3729] tracking-[1.92px]">
                    「創造的地域風土」とは
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] text-justify">
                  「創造的地域風土」とは、地域を構成する人々が共通して持つ価値観や考え方、行動様式を指し、創造性が自然と育ちやすく、新たな挑戦や交流が次々と生まれるような環境のことです。このような環境を整えることで、地域の人々が気軽に新たな試みに参加し、互いに刺激し合いながら成長し合えるコミュニティが形成されます。わたしたちは、シェフ・イン・レジデンスが「日常と非日常の汽水域※」として機能することで、創造的地域風土を高めると考えています。
                </div>
                <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px] italic">
                  ※汽水域：河川と海が交わる場所に形成される水域で、淡水と海水が混ざり合う環境を指します。その意味を転じて、性質の異なるヒト・モノ・コトが混ざり合う場・空間・機会・環境のことを指しています。
                </div>
                <div className="text-sm text-[#5a3729] leading-6 tracking-[0.60px]">
                  参考：ディスカッション・ペーパー｜「創造的地域風土」を生みだすiCモデル（innumerable Cs Model）
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
            WHAT WE DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {whatWeDo.map((item, index) => (
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
              MEMBER
            </h2>
            
            {/* Responsive grid layout */}
            <div className="space-y-6 md:space-y-8">
              {/* First row - 日髙, 西木戸, 守護 on wide screens; 日髙, 西木戸 on medium */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {memberData.slice(0, 3).map((member, index) => (
                  <div 
                    key={index} 
                    className={`${index === 2 ? 'sm:col-span-2 lg:col-span-1 sm:justify-self-center lg:justify-self-auto' : ''} bg-[#e8dcc6]/30 rounded-3xl p-4 md:p-6 text-center`}
                  >
                    <h3 className="text-base md:text-lg font-bold text-[#5a3729] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#5a3729] mb-2">
                      {member.nameKana}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-[#5a3729] mb-3">
                      {member.position}
                    </p>
                    <p className="text-xs text-[#5a3729] leading-4 text-justify">
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Second row - 大里 centered */}
              {memberData[3] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  <div className="bg-[#e8dcc6]/30 rounded-3xl p-4 md:p-6 text-center sm:col-start-1 lg:col-start-2">
                    <h3 className="text-base md:text-lg font-bold text-[#5a3729] mb-1">
                      {memberData[3].name}
                    </h3>
                    <p className="text-xs md:text-sm text-[#5a3729] mb-2">
                      {memberData[3].nameKana}
                    </p>
                    <p className="text-xs md:text-sm font-bold text-[#5a3729] mb-3">
                      {memberData[3].position}
                    </p>
                    <p className="text-xs text-[#5a3729] leading-4 text-justify">
                      {memberData[3].description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Organization Section */}
          <div className="max-w-5xl mx-auto mb-12 md:mb-16 text-center bg-[#F2EDF0] rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#5a3729] tracking-[2.40px] mb-8">
              ORGANIZATION
            </h2>
            <div className="space-y-4 text-[10px] sm:text-xs md:text-sm text-[#5a3729]">
              <p className="font-bold text-sm sm:text-base md:text-lg">
                一般社団法人日本シェフ・イン・レジデンス応援協会
              </p>
              <p>
                〒220-0004 神奈川県横浜市西区北幸二丁目10番48号 むつみビル3階
              </p>
              <p>
                Email: info@cire.or.jp
              </p>
              <p className="mt-6 font-medium">
                本協会は、米日財団からの助成金を受けて運営されている<br />
                非営利型一般社団法人です。
              </p>
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
                className="w-48 sm:w-56 h-auto"
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