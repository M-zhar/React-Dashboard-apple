import {
  CalendarIcon,
  ChevronDownIcon,
  FileTextIcon,
  FilterIcon,
  InfoIcon,
} from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

export const Desktop = (): JSX.Element => {
  const summaryCards = [
    {
      title: "Conversions ROAS:",
      value: "0.00%",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
    {
      title: "Conversions ROAS:",
      value: "$6,109.89",
      change: "+27.42%",
      changeColor: "text-[#4bce00]",
    },
    {
      title: "Conversions ROAS:",
      value: "0.00%",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
    {
      title: "Conversions ROAS:",
      value: "$2,101",
      change: "0%",
      changeColor: "text-[#ff7200]",
    },
    {
      title: "Conversions ROAS:",
      value: "$2.91",
      change: "0%",
      changeColor: "text-[#ff7200]",
    },
    {
      title: "Conversions ROAS:",
      value: "0",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
    {
      title: "Conversions ROAS:",
      value: "$0.00",
      change: "0%",
      changeColor: "text-[#8a8a8a]",
    },
  ];

  const chartDates = [
    "5 july",
    "5 july",
    "5 july",
    "5 july",
    "5 july",
    "5 july",
    "5 july",
  ];

  const chartValues = [
    "$27.42%",
    "$27.42%",
    "$27.42%",
    "$27.42%",
    "$27.42%",
    "$27.42%",
  ];

  const topListCampaigns = [
    {
      name: "Discovery (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
    {
      name: "Competitor (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$121",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
    {
      name: "Today tab (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
    {
      name: "Branding (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
  ];

  const biggestChangesCampaigns = [
    {
      name: "Discovery (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
    {
      name: "Competitor (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$121",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
    {
      name: "Today tab (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
    {
      name: "Branding (LOC)",
      country: "India",
      spend: "$6,109.89",
      installs: "$44",
      conversions: "0.00%",
      spendChange: "+27.42%",
      installsChange: "+27.42%",
      conversionsChange: "0%",
    },
  ];

  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white overflow-hidden w-[1440px] h-[1399px] relative">
        <aside className="flex flex-col w-[60px] h-[849px] -top-2.5 -left-1 bg-[#ff5900] fixed">
          <div className="flex flex-col w-[60px] h-[388px] mt-[119px]">
            <div className="w-[58px] h-[27px] ml-0.5 bg-[#ffffff57]" />
            <img
              className="w-7 h-[388px] ml-[18px] -mt-[27px]"
              alt="Frame"
              src="/frame-2147224181.svg"
            />
            <div className="w-[3px] h-[27px] -mt-[388px] bg-white" />
          </div>
          <div className="w-7 h-7 mt-[43px] ml-4 bg-[#f9f9f9] rounded-[14px]" />
          <img
            className="w-[26px] h-[142px] mt-[678px] ml-[17px]"
            alt="Frame"
            src="/frame-2147224182.svg"
          />
        </aside>

        <header className="flex items-center justify-between pt-8 pl-[93px] pr-[93px]">
          <div>
            <h1 className="[font-family:'Inter',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
              Overview dashboard
            </h1>
            <p className="mt-[15px] [font-family:'Inter',Helvetica] font-normal text-[#7b7b7b] text-[15px] tracking-[0] leading-[normal]">
              A consolidated view of your app efficiency by storefronts and key
              metrics.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Select>
              <SelectTrigger className="w-[238px] h-[41px] bg-white rounded-xl border border-solid border-[#bdbdbd]">
                <div className="flex items-center gap-3">
                  <FileTextIcon className="w-[22px] h-[22px] text-[#7b7b7b]" />
                  <SelectValue
                    placeholder="Pdf Name"
                    className="[font-family:'Inter',Helvetica] font-normal text-[#7b7b7b] text-[15px]"
                  />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf1">Pdf Name</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center gap-2">
              <CalendarIcon className="w-[51px] h-[51px] text-[#7b7b7b]" />
              <div className="flex flex-col">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#7b7b7b] text-[13px] tracking-[0] leading-[normal]">
                  Last 7 Days
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal]">
                  Jul 5 - Jul 11, 2025
                </span>
              </div>
            </div>

            <FilterIcon className="w-11 h-11 text-[#7b7b7b]" />
          </div>
        </header>

        <main className="mt-[33px] ml-[93px] w-[1314px] h-[1288px] bg-[#fefefe] shadow-[inset_0px_4px_29.1px_#0000000a]">
          <section className="pt-[30px] pl-[51px] pr-[51px]">
            <h2 className="[font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-[22px]">
              Total Summary
            </h2>

            <div className="grid grid-cols-7 gap-5">
              {summaryCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-[158px] h-[98px] bg-white rounded-[6.8px] shadow-[0px_4px_13.3px_#00000008]"
                >
                  <CardContent className="p-2.5">
                    <div className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm tracking-[0] leading-[normal] mb-3">
                      {card.title}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] font-bold text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-2">
                      {card.value}
                    </div>
                    <div
                      className={`[font-family:'Inter',Helvetica] font-normal text-sm tracking-[0] leading-[normal] ${card.changeColor}`}
                    >
                      {card.change}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-2 gap-[43px] mt-[57px] pl-[51px] pr-[51px]">
            <section>
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-[46px]">
                Storefronts
              </h2>

              <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-[21px] border-b">
                    <div className="flex items-center gap-4">
                      <span className="text-[#2a2a2a] text-[40px] [font-family:'Inter',Helvetica] font-normal">
                        +
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-[#ff8800]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm">
                          Spend
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-[175px] h-[35px] object-cover"
                      alt="Image"
                      src="/image-28.png"
                    />
                  </div>

                  <div className="relative h-[338px]">
                    <img
                      className="w-[580px] h-[293px] mt-[8px] ml-[11px]"
                      alt="Image"
                      src="/image-25.png"
                    />

                    <div className="flex justify-between items-center px-4 mt-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-[#ff8800]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm">
                          India
                        </span>
                      </div>
                      <InfoIcon className="w-4 h-4 text-[#838383]" />
                    </div>

                    <div className="w-[332px] h-[18px] bg-[#ff8800] ml-52 -mt-2" />

                    <div className="flex justify-between px-[67px] mt-2">
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2abd] text-[11px]">
                        $6.11k
                      </span>
                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2abd] text-[11px]">
                        $6.11K
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-[46px]">
                Trends
              </h2>

              <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between p-[21px] border-b">
                    <div className="flex items-center gap-4">
                      <span className="text-[#2a2a2a] text-[40px] [font-family:'Inter',Helvetica] font-normal">
                        +
                      </span>
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-[#ff8800]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm">
                          Spend
                        </span>
                      </div>
                    </div>
                    <img
                      className="w-[175px] h-[35px] object-cover"
                      alt="Image1"
                      src="/table.jpg"
                    />
                  </div>

                  <div className="relative p-4">
                    <div className="w-[484px] h-[262px] bg-[#FFFFFF]" />
                    <img
                      className="absolute top-4 left-[65px] w-[489px] h-[263px] object-cover"
                      alt="Image"
                      src="/table.jpg"
                    />

                    <div className="absolute left-[18px] top-5 flex flex-col gap-[46px]">
                      {chartValues.map((value, index) => (
                        <span
                          key={index}
                          className="text-[#ff8800] text-[11px] [font-family:'Inter',Helvetica] font-normal whitespace-nowrap"
                        >
                          {value}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between mt-8 px-[67px]">
                      {chartDates.map((date, index) => (
                        <span
                          key={index}
                          className="w-7 [font-family:'Inter',Helvetica] font-normal text-[#838383] text-[11px] whitespace-nowrap"
                        >
                          {date}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-4 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-[#ff8800]" />
                        <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2a2a] text-sm">
                          India
                        </span>
                      </div>
                      <img
                        className="w-[13px] h-[13px]"
                        alt="Group"
                        src="/table.jpg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="grid grid-cols-2 gap-[43px] mt-[57px] pl-[51px] pr-[51px]">
            <section>
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-[46px]">
                Top List
              </h2>

              <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                <CardContent className="p-0">
                  <Tabs defaultValue="campaigns" className="w-full">
                    <div className="flex items-center justify-between p-8 border-b">
                      <TabsList className="bg-transparent p-0 h-auto">
                        <TabsTrigger
                          value="campaigns"
                          className="[font-family:'Inter',Helvetica] font-bold text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                        >
                          Campaigns
                        </TabsTrigger>
                        <TabsTrigger
                          value="adgroups"
                          className="[font-family:'Inter',Helvetica] font-normal text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                        >
                          Ad Groups
                        </TabsTrigger>
                        <TabsTrigger
                          value="keywords"
                          className="[font-family:'Inter',Helvetica] font-normal text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                        >
                          Keywords
                        </TabsTrigger>
                        <TabsTrigger
                          value="ads"
                          className="[font-family:'Inter',Helvetica] font-normal text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0"
                        >
                          Ads
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="campaigns" className="mt-0">
                      <div className="flex items-center justify-between px-8 py-4 border-b">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px]">
                          Spend
                        </span>
                        <div className="flex items-center gap-8">
                          <div className="flex items-center gap-2">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px]">
                              Spend
                            </span>
                            <ChevronDownIcon className="w-5 h-5" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px]">
                              Installs
                            </span>
                            <ChevronDownIcon className="w-6 h-6" />
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px]">
                              Conver...
                            </span>
                            <img
                              className="w-3 h-[7px]"
                              alt="Vector"
                              src="/vector.svg"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-0">
                        {topListCampaigns.map((campaign, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between px-8 py-4 border-b border-gray-100"
                          >
                            <div className="flex items-center gap-4">
                              <div className="w-[13px] h-[13px] bg-[#46a756] rounded-[6.5px]" />
                              <div>
                                <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base">
                                  {campaign.name}
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-normal text-[#747474] text-sm">
                                  {campaign.country}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-8">
                              <div className="w-[117px] bg-[#ffce84] p-2 text-center">
                                <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px]">
                                  {campaign.spend}
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs">
                                  {campaign.spendChange}
                                </div>
                              </div>

                              <div className="w-[117px] bg-[#f4f8f9] p-2 text-center">
                                <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px]">
                                  {campaign.installs}
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs">
                                  {campaign.installsChange}
                                </div>
                              </div>

                              <div className="w-[117px] border-[0.5px] border-solid border-[#9b9b9b] p-2 text-center">
                                <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px]">
                                  {campaign.conversions}
                                </div>
                                <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs">
                                  {campaign.conversionsChange}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] whitespace-nowrap mb-[46px]">
                Biggest Changes
              </h2>

              <Card className="w-[598px] h-[427px] bg-white rounded-[15px] border border-solid border-[#b0b0b0] shadow-[0px_4px_26.4px_#0000000d]">
                <CardContent className="p-0">
                  <Tabs defaultValue="campaigns" className="w-full">
                    <div className="flex items-center justify-between p-8 border-b">
                      <TabsList className="bg-transparent p-0 h-auto">
                        <TabsTrigger
                          value="campaigns"
                          className="[font-family:'Inter',Helvetica] font-bold text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                        >
                          Campaigns
                        </TabsTrigger>
                        <TabsTrigger
                          value="adgroups"
                          className="[font-family:'Inter',Helvetica] font-normal text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                        >
                          Ad Groups
                        </TabsTrigger>
                        <TabsTrigger
                          value="keywords"
                          className="[font-family:'Inter',Helvetica] font-normal text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0 mr-8"
                        >
                          Keywords
                        </TabsTrigger>
                        <TabsTrigger
                          value="ads"
                          className="[font-family:'Inter',Helvetica] font-normal text-black text-base bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-[#ff8800] rounded-none px-0"
                        >
                          Ads
                        </TabsTrigger>
                      </TabsList>
                    </div>

                    <TabsContent value="campaigns" className="mt-0">
                      <div className="flex items-center justify-between px-8 py-4 border-b">
                        <span className="[font-family:'Inter',Helvetica] font-normal text-black text-[15px]">
                          Spend
                        </span>
                        <ChevronDownIcon className="w-6 h-6" />
                      </div>

                      <div className="space-y-0">
                        {biggestChangesCampaigns.map((campaign, index) => (
                          <div key={index} className="border-b border-gray-100">
                            <div className="flex items-center justify-between px-8 py-4">
                              <div className="flex items-center gap-4">
                                <div className="w-[13px] h-[13px] bg-[#46a756] rounded-[6.5px]" />
                                <div>
                                  <div className="[font-family:'Inter',Helvetica] font-normal text-black text-base">
                                    {campaign.name}
                                  </div>
                                  <div className="[font-family:'Inter',Helvetica] font-normal text-[#747474] text-sm">
                                    {campaign.country}
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-8">
                                <div
                                  className={`w-[95px] h-7 flex items-center justify-center ${index === 0 ? "bg-[#ff6100]" : index === 1 ? "bg-[#ff6100]" : index === 2 ? "bg-[#f7ce02]" : "bg-[#f7ce02]"}`}
                                >
                                  <div className="[font-family:'Inter',Helvetica] font-semibold text-[#646464] text-[15px]">
                                    {campaign.spend}
                                  </div>
                                </div>

                                <div className="[font-family:'Inter',Helvetica] font-normal text-neutral-500 text-xs">
                                  {campaign.spendChange}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
