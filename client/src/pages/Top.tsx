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
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1280px] h-[6806px] relative">
        <div className="absolute w-[1280px] h-[6806px] top-0 left-0 bg-[#f7e489]">
          <Card className="absolute w-[1120px] h-[380px] top-[5805px] left-20 bg-[#f2edf0] rounded-[30px] border-0">
            <CardContent className="p-0 relative w-full h-full">
              <div className="h-[58px] top-[115px] left-[441px] font-extrabold text-[#5a3729] text-5xl text-center tracking-[2.40px] absolute [font-family:'Lato',Helvetica] leading-[normal]">
                CONTACT
              </div>

              <div className="absolute w-[193px] h-[50px] top-[207px] left-[466px]">
                <Button className="relative w-[191px] h-[50px] bg-[#71b0ff] rounded-[29px] h-auto hover:bg-[#71b0ff]/90">
                  <div className="absolute h-[19px] top-[15px] left-[23px] [font-family:'Lato',Helvetica] font-bold text-white text-base text-center tracking-[0.80px] leading-[normal] whitespace-nowrap">
                    GOOGLE FORM
                  </div>

                  <img
                    className="absolute w-[5px] h-[7px] top-[22px] left-[168px]"
                    alt="Vector"
                    src="/figmaAssets/vector-6.svg"
                  />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="absolute w-[1280px] h-[1479px] top-[175px] left-0">
            <img
              className="absolute w-[1280px] h-[822px] top-[657px] left-0"
              alt="Rectangle"
              src="/figmaAssets/rectangle-6.png"
            />

            <div className="absolute w-[759px] h-[498px] top-[801px] left-[261px] bg-[url(/figmaAssets/vector.png)] bg-[100%_100%]" />

            <div className="absolute w-[146px] h-[50px] top-[1100px] left-[563px]">
              <Button className="relative w-36 h-[50px] bg-[#71b0ff] rounded-[29px] h-auto hover:bg-[#71b0ff]/90">
                <div className="h-[19px] top-[15px] left-[42px] text-white text-base tracking-[0.80px] whitespace-nowrap absolute [font-family:'Lato',Helvetica] font-bold leading-[normal]">
                  ABOUT
                </div>

                <img
                  className="absolute w-[5px] h-[7px] top-[22px] left-[120px]"
                  alt="Vector"
                  src="/figmaAssets/vector-6.svg"
                />
              </Button>
            </div>

            <div className="absolute w-[554px] top-[976px] left-[358px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-bold text-[#5a3729] text-[22px] text-center tracking-[0] leading-[33px]">
              シェフ・イン・レジデンスとは
              <br />
              日本や世界を旅するシェフを地域に迎え入れ
              <br />
              期間限定で展開されるレストラン活動です
            </div>

            <img
              className="absolute w-[1280px] h-[658px] top-0 left-0"
              alt="Group"
              src="/figmaAssets/group-4.png"
            />
          </div>

          <Card className="absolute w-[1280px] h-[769px] top-[3970px] left-0 bg-[#f2edf0] border-0 rounded-none">
            <CardContent className="p-0 relative w-full h-full">
              <div className="h-[58px] top-[127px] left-[566px] font-extrabold text-[#5a3729] text-5xl text-center tracking-[2.40px] absolute [font-family:'Lato',Helvetica] leading-[normal]">
                NEWS
              </div>

              {newsItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Separator
                    className="absolute w-[796px] h-px top-[326px] left-[242px] bg-[#5a3729]"
                    style={{ top: `${326 + index * 74}px` }}
                  />

                  <div
                    className="absolute left-[249px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-normal text-[#5a3729] text-[15px] tracking-[1.50px] leading-[normal]"
                    style={{ top: `${280 + index * 74}px` }}
                  >
                    {item.date}
                  </div>

                  <div
                    className="absolute left-[367px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-normal text-[#5a3729] text-[15px] tracking-[1.50px] leading-[normal]"
                    style={{ top: `${280 + index * 74}px` }}
                  >
                    {item.title}
                  </div>
                </React.Fragment>
              ))}

              <div className="absolute w-[169px] h-[50px] top-[586px] left-[557px]">
                <Button className="relative w-[167px] h-[50px] bg-[#71b0ff] rounded-[29px] h-auto hover:bg-[#71b0ff]/90">
                  <div className="absolute h-[19px] top-[15px] left-7 [font-family:'Lato',Helvetica] font-bold text-white text-base text-center tracking-[0.80px] leading-[normal] whitespace-nowrap">
                    VIEW MORE
                  </div>

                  <img
                    className="absolute w-[5px] h-[7px] top-[22px] left-36"
                    alt="Vector"
                    src="/figmaAssets/vector-6.svg"
                  />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="h-[58px] top-[1838px] left-[531px] font-extrabold text-[#5a3729] text-5xl text-center tracking-[2.40px] absolute [font-family:'Lato',Helvetica] leading-[normal]">
            MISSION
          </div>

          <div className="absolute h-[58px] top-[4966px] left-[475px] [font-family:'Lato',Helvetica] font-extrabold text-[#5a3729] text-5xl text-center tracking-[2.40px] leading-[normal]">
            SUPPORT US!
          </div>

          <div className="h-[58px] top-[3217px] left-[545px] font-extrabold text-[#5a3729] text-5xl text-center tracking-[2.40px] absolute [font-family:'Lato',Helvetica] leading-[normal]">
            AWARD
          </div>

          <div className="flex w-[1120px] items-start justify-between absolute top-[2354px] left-[81px]">
            {missionCards.map((card, index) => (
              <Card
                key={index}
                className="inline-flex items-center gap-2.5 px-10 py-[50px] relative flex-[0_0_auto] bg-[#f2edf0] rounded-[30px] border-0"
              >
                <CardContent className="flex flex-col w-[272px] items-center gap-5 relative p-0">
                  <div className="flex flex-col w-[218px] items-center gap-10 relative flex-[0_0_auto]">
                    <div className="flex flex-col w-[100px] items-center gap-5 relative flex-[0_0_auto]">
                      <Badge className="inline-flex items-center justify-center gap-3 px-2.5 py-2 relative flex-[0_0_auto] bg-[#71b0ff] rounded-[60px] border-0 hover:bg-[#71b0ff]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-bold text-maincolor text-[13px] tracking-[0] leading-[normal] whitespace-nowrap">
                          {card.badge}
                        </div>
                      </Badge>

                      <div className="relative w-fit ml-[-66.00px] mr-[-66.00px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-bold text-maincolor text-[22px] text-center tracking-[1.32px] leading-[30px]">
                        {card.title.split("\n").map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex < card.title.split("\n").length - 1 && (
                              <br />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  <img
                    className="relative w-[200px] h-[200px]"
                    alt="Sono"
                    src={card.image}
                  />

                  <div className="flex flex-col items-start gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-medium text-maincolor text-[15px] tracking-[0.60px] leading-6">
                      {card.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <img
            className="absolute w-[538px] h-[359px] top-[3339px] left-[88px] object-cover"
            alt="Therelayawards"
            src="/figmaAssets/therelayawards2025-kv-1.png"
          />

          <div className="flex flex-col w-[378px] items-start gap-[50px] absolute top-[5184px] left-[726px]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-bold text-maincolor text-[32px] tracking-[1.92px] leading-[45px]">
              タイトル
            </div>

            <div className="relative self-stretch [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-medium text-maincolor text-[15px] tracking-[0] leading-6">
              テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。テキストがここに入ります、テキストがここに入ります。
            </div>
          </div>

          <div className="flex flex-col w-[378px] items-start gap-[50px] absolute top-[3435px] left-[726px]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Lato',Helvetica] font-normal text-maincolor text-[32px] tracking-[1.92px] leading-[45px]">
              The Relay Awards
            </div>

            <div className="relative self-stretch [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-medium text-maincolor text-[15px] tracking-[0] leading-6">
              日本におけるシェフ・イン・レジデンスの発展と地域活性化を目的とした新たな表彰制度「The
              Relay
              Awards（ザ・リレー・アワード）」を創設いたしました。あわせて、本アワードの表彰イベントを2025年12月1日（月）17:00より、SHIBAURA
              HOUSE（〒108-0023
              東京都港区芝浦3-15-4）にて開催予定です（原則：ご案内制・一般販売なし／サポーターご案内枠あり）。
            </div>
          </div>

          <footer className="absolute w-[1280px] h-[204px] top-[6602px] left-0 bg-[#b63622]">
            <img
              className="absolute w-[220px] h-[13px] top-[72px] left-20"
              alt="Cir title"
              src="/figmaAssets/cir-title.svg"
            />

            {footerNavigationItems.map((item, index) => {
              const positions = [
                { left: "left-[562px]" },
                { left: "left-[641px]" },
                { left: "left-[733px]" },
                { left: "left-[815px]" },
                { left: "left-[886px]" },
                { left: "left-[1006px]" },
                { left: "left-[1104px]" },
              ];

              return (
                <div
                  key={index}
                  className={`h-[17px] top-[69px] font-bold text-[#e9e8e3] text-sm tracking-[0.70px] absolute [font-family:'Lato',Helvetica] leading-[normal] ${positions[index].left}`}
                >
                  {item}
                </div>
              );
            })}

            <div className="absolute h-3.5 top-[129px] left-20 [font-family:'Roboto',Helvetica] font-medium text-[#e9e8e3] text-xs tracking-[0.60px] leading-[normal] whitespace-nowrap">
              ©2025 一般社団法人日本シェフ・イン・レジデンス応援協会 All rights
              reserved.
            </div>

            <img
              className="absolute w-14 h-[21px] top-[127px] left-[1150px]"
              alt="Clip path group"
              src="/figmaAssets/clip-path-group.png"
            />
          </footer>

          <div className="absolute w-[260px] h-[392px] top-[5151px] left-[261px] bg-[url(/figmaAssets/group.png)] bg-[100%_100%]">
            <img
              className="absolute w-[43px] h-[39px] top-[193px] left-[120px]"
              alt="Vector"
              src="/figmaAssets/vector-1.svg"
            />
          </div>

          <div className="absolute w-[467px] top-[2040px] left-[406px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-bold text-maincolor text-[32px] text-center tracking-[1.92px] leading-[45px]">
            理想のための３条件
          </div>

          <div className="absolute w-[738px] top-[2125px] left-[272px] [font-family:'Zen_Kaku_Gothic_New',Helvetica] font-medium text-maincolor text-[15px] text-justify tracking-[0] leading-6">
            「シェフ・イン・レジデンス」とは、地域外のシェフを招き入れて地域の活性化を促す取り組みであり、地域の創造性や活力を高めるための重要な手段となります。特に、わたしたちは、「旅するシェフ」を地域活性化の鍵となる存在として捉え、わたしたちが目指す「シェフ・イン・レジデンス」の理想的なかたちの条件として以下の３つを挙げています。
          </div>
        </div>

        <nav className="fixed w-[1108px] h-[21px] top-[115px] left-[107px]">
          {navigationItems.map((item, index) => {
            const positions = [
              { left: "left-[420px]" },
              { left: "left-[499px]" },
              { left: "left-[591px]" },
              { left: "left-[673px]" },
              { left: "left-[744px]" },
              { left: "left-[864px]" },
            ];

            return (
              <div
                key={index}
                className={`absolute h-[17px] top-0.5 [font-family:'Lato',Helvetica] font-bold text-[#5a3729] text-sm tracking-[0.70px] leading-[normal] ${positions[index].left}`}
              >
                {item}
              </div>
            );
          })}

          <div className="left-[1074px] absolute h-[17px] top-0.5 [font-family:'Lato',Helvetica] font-bold text-[#5a3729] text-sm tracking-[0.70px] leading-[normal]">
            EN
          </div>

          <img
            className="absolute w-[220px] h-[13px] top-0.5 left-0"
            alt="Cir title"
            src="/figmaAssets/cir-title.svg"
          />

          <img
            className="absolute w-14 h-[21px] top-0 left-[963px]"
            alt="Clip path group"
            src="/figmaAssets/clip-path-group-1.png"
          />

          <img
            className="absolute w-[15px] h-[15px] top-1 left-[1055px]"
            alt="Earth"
            src="/figmaAssets/earth-1.svg"
          />
        </nav>

        <header className="fixed w-[1280px] h-20 top-0 left-0 bg-transparent">
          <div className="absolute w-[1280px] h-[38px] top-[42px] left-0">
            <div className="relative h-[38px] bg-white shadow-[inset_0px_-1px_0px_#dadce0]">
              <div className="absolute w-[51px] h-[22px] top-2 left-[1215px]">
                <div className="absolute w-4 h-4 top-[3px] left-[35px]">
                  <img
                    className="absolute w-[3px] h-3 top-0.5 left-[7px]"
                    alt="Container"
                    src="/figmaAssets/container.svg"
                  />
                </div>

                <img
                  className="absolute w-[22px] h-[22px] top-0 left-0 object-cover"
                  alt="Image user profile"
                  src="/figmaAssets/image---user-profile.png"
                />
              </div>

              <div className="absolute w-[1065px] h-7 top-[5px] left-[134px] bg-[#f1f3f4] rounded-[14px] overflow-hidden">
                <div className="absolute w-4 h-4 top-1.5 left-[1039px]">
                  <img
                    className="absolute w-3 h-[11px] top-0.5 left-0.5"
                    alt="Container"
                    src="/figmaAssets/container-3.svg"
                  />
                </div>

                <div className="absolute w-[165px] h-4 top-1.5 left-[33px]">
                  <div className="inline-flex items-center relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#202124] text-sm tracking-[0.25px] leading-[normal] whitespace-nowrap">
                      google.com
                    </div>

                    <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#696a6c] text-sm tracking-[0.25px] leading-[normal] whitespace-nowrap">
                      /search
                    </div>
                  </div>
                </div>

                <div className="absolute w-3 h-3 top-2 left-[11px]">
                  <img
                    className="absolute w-2 h-2.5 top-0 left-0.5"
                    alt="Container"
                    src="/figmaAssets/container-2.svg"
                  />
                </div>
              </div>

              <div className="absolute w-[109px] h-4 top-[11px] left-3">
                <div className="absolute w-4 h-4 top-0 left-[93px]">
                  <img
                    className="absolute w-3 h-3 top-0.5 left-0.5"
                    alt="Container"
                    src="/figmaAssets/container-1.svg"
                  />
                </div>

                <img
                  className="absolute w-4 h-4 top-0 left-[62px]"
                  alt="Icon refresh"
                  src="/figmaAssets/icon---refresh.svg"
                />

                <img
                  className="absolute w-4 h-4 top-0 left-[31px]"
                  alt="Icon forward"
                  src="/figmaAssets/icon---forward.svg"
                />

                <img
                  className="absolute w-4 h-4 top-0 left-0"
                  alt="Icon back"
                  src="/figmaAssets/icon---back.svg"
                />
              </div>
            </div>
          </div>

          <div className="absolute w-[1280px] h-[42px] top-0 left-0">
            <div className="relative h-[42px] bg-[#dee1e6]">
              <div className="absolute w-[167px] h-[34px] top-2 left-[72px]">
                <div className="relative w-[131px] h-[34px] left-2">
                  <div className="inline-flex items-center gap-2 relative -left-1.5">
                    <div className="inline-flex items-start relative flex-[0_0_auto]">
                      <img
                        className="relative w-1.5 h-2"
                        alt="Curve l"
                        src="/figmaAssets/curve-l.svg"
                      />

                      <div className="inline-flex items-center gap-[9px] p-2 relative flex-[0_0_auto] bg-white rounded-[8px_8px_0px_0px] overflow-hidden">
                        <img
                          className="relative w-4 h-4 object-cover"
                          alt="Favicon"
                          src="/figmaAssets/favicon.png"
                        />

                        <div className="relative w-fit [font-family:'Roboto',Helvetica] font-normal text-transparent text-xs tracking-[0.20px] leading-[normal] whitespace-nowrap">
                          <span className="text-[#494c4f] tracking-[0.02px]">
                            Google&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </span>

                          <span className="text-white tracking-[0.02px]">
                            .
                          </span>
                        </div>

                        <img
                          className="relative w-[18px] h-[18px]"
                          alt="Icon close"
                          src="/figmaAssets/icon---close.svg"
                        />
                      </div>

                      <img
                        className="relative w-1.5 h-2"
                        alt="Curve r"
                        src="/figmaAssets/curve-r.svg"
                      />
                    </div>

                    <img
                      className="relative w-5 h-5"
                      alt="Icon plus"
                      src="/figmaAssets/icon---plus.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute w-[52px] h-3 top-4 left-[13px]">
                <div className="left-10 bg-[#27ca40] border-[#3eaf3f] absolute w-3 h-3 top-0 rounded-md border-[0.5px] border-solid" />

                <div className="left-5 bg-[#ffc130] border-[#e1a325] absolute w-3 h-3 top-0 rounded-md border-[0.5px] border-solid" />

                <div className="left-0 bg-[#ff6058] border-[#e14942] absolute w-3 h-3 top-0 rounded-md border-[0.5px] border-solid" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
