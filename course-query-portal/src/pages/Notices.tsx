import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowLeft, AlertCircle, Info, GraduationCap, BookOpen, PenTool } from "lucide-react";
import guideGenedCredits from "@/assets/guide-gened-credits.png";
import guideEng3 from "@/assets/guide-eng3.png";

export default function Notices() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-3xl mx-auto p-4 flex items-center gap-3">
          <Link href="/">
            <Button variant="ghost" size="icon" className="-ml-2">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-xl font-display font-bold">選課注意事項</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4">
        
        <Accordion type="single" collapsible className="space-y-4" defaultValue="item-1">
          
          {/* Item 1: Junior Required Courses */}
          <AccordionItem value="item-1" className="border rounded-lg bg-card px-2 shadow-sm">
            <AccordionTrigger className="hover:no-underline px-2 py-4">
              <div className="flex items-center gap-3 text-rose-600 text-left">
                <div className="p-2 bg-rose-100 rounded-full shrink-0">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">大三閱讀與思辨/寫作與表達說明</div>
                  <div className="text-xs text-muted-foreground font-normal">閱讀與思辨 / 寫作與表達</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-4 pt-2">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                    <div className="text-xs font-bold text-rose-400 mb-1 uppercase tracking-wider">Fall Semester</div>
                    <h3 className="text-lg font-bold text-rose-800 mb-1">上學期</h3>
                    <p className="text-rose-900 font-medium">中文閱讀與思辨</p>
                    <p className="text-sm text-rose-600 mt-1">必修 / 2 學分</p>
                  </div>
                  <div className="bg-rose-50 p-4 rounded-lg border border-rose-100">
                    <div className="text-xs font-bold text-rose-400 mb-1 uppercase tracking-wider">Spring Semester</div>
                    <h3 className="text-lg font-bold text-rose-800 mb-1">下學期</h3>
                    <p className="text-rose-900 font-medium">中文寫作與表達</p>
                    <p className="text-sm text-rose-600 mt-1">必修 / 2 學分</p>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground bg-muted p-3 rounded space-y-1">
                  <p>這兩門課程為大三必修課程，請同學留意修課時間安排。</p>
                  <p className="text-blue-600 font-bold text-base">✨ 請選陳惠鈴老師 的課</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 2: Spring Semester Students */}
          <AccordionItem value="item-2" className="border rounded-lg bg-card px-2 shadow-sm">
            <AccordionTrigger className="hover:no-underline px-2 py-4">
              <div className="flex items-center gap-3 text-blue-600 text-left">
                <div className="p-2 bg-blue-100 rounded-full shrink-0">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">春季班同學請注意</div>
                  <div className="text-xs text-muted-foreground font-normal">聽力與會話修課規定</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-4 pt-2">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    關於「聽力訓練 (1)」與「會話訓練 (1)」
                  </h3>
                  <div className="p-4 bg-muted rounded-lg text-muted-foreground leading-relaxed">
                    <p className="mb-2">
                      <span className="font-bold text-foreground">第五學期以後</span>，你不能選修以下課程：
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2 text-foreground">
                      <li>聽力訓練 (1) ABC</li>
                      <li>會話訓練 (1) ABC</li>
                    </ul>
                  </div>
                </div>

                <Alert className="bg-green-50 border-green-200">
                  <AlertCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle className="text-green-800 font-semibold mb-2">你可以這麼做</AlertTitle>
                  <AlertDescription className="text-green-700 leading-relaxed">
                    如果你一直沒辦法選到這兩門課，<span className="font-bold whitespace-nowrap">沒關係！</span>
                    <br/><br/>
                    你可以選擇其他課程（不一定要是華語系的課程）來代替這兩門課的學分。
                  </AlertDescription>
                </Alert>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 3: English Courses */}
          <AccordionItem value="item-3" className="border rounded-lg bg-card px-2 shadow-sm">
            <AccordionTrigger className="hover:no-underline px-2 py-4">
              <div className="flex items-center gap-3 text-purple-600 text-left">
                <div className="p-2 bg-purple-100 rounded-full shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">英文 (三) 選課說明</div>
                  <div className="text-xs text-muted-foreground font-normal">多樣化主題選擇</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-4 pt-2">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-lg leading-relaxed text-foreground">
                    <span className="font-bold text-purple-700">英文(三)</span> 有很多不同主題（如：簡報英文、學術英文、職場英文等），<span className="font-bold text-purple-700">大家可以自己選擇</span>感興趣的主題修習。
                  </p>
                </div>

                <div className="space-y-2">
                   <h3 className="font-semibold text-muted-foreground mb-2">
                    如何搜尋英文(三)？
                  </h3>
                  <div className="rounded-lg overflow-hidden border shadow-sm">
                     <img src={guideEng3} alt="英文三選課教學截圖" className="w-full h-auto" />
                  </div>
                   <p className="text-sm text-muted-foreground mt-2">
                     1. 科目名稱輸入「<span className="font-mono bg-muted px-1">英文（三）</span>」<br/>
                     2. 科目類別勾選「<span className="font-mono bg-muted px-1">共同科目</span>」
                   </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 4: GenEd Credits */}
          <AccordionItem value="item-4" className="border rounded-lg bg-card px-2 shadow-sm">
            <AccordionTrigger className="hover:no-underline px-2 py-4">
              <div className="flex items-center gap-3 text-indigo-600 text-left">
                <div className="p-2 bg-indigo-100 rounded-full shrink-0">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-lg text-foreground">通識 18 學分說明</div>
                  <div className="text-xs text-muted-foreground font-normal">博雅與跨域探索</div>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-4 pt-2">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="rounded-lg overflow-hidden border shadow-sm">
                     <img src={guideGenedCredits} alt="通識學分結構圖" className="w-full h-auto" />
                  </div>

                  <div className="space-y-3 leading-relaxed text-foreground">
                     <p className="font-bold text-lg border-b pb-2 mb-3">18 個通識學分包括這兩種：</p>
                     <ol className="space-y-4">
                       <li>
                         <span className="font-bold text-lg text-indigo-700">1. 博bó 雅yǎ 課程</span>
                         <p className="text-muted-foreground ml-4 mt-1">包括四種領域：</p>
                         <ul className="grid grid-cols-2 gap-2 ml-4 mt-2">
                           <li className="bg-slate-50 px-3 py-1.5 rounded border">人文藝術</li>
                           <li className="bg-slate-50 px-3 py-1.5 rounded border">社會科學</li>
                           <li className="bg-slate-50 px-3 py-1.5 rounded border">自然科學</li>
                           <li className="bg-slate-50 px-3 py-1.5 rounded border">邏luó 輯jí 運算</li>
                         </ul>
                       </li>
                       <li>
                         <span className="font-bold text-lg text-indigo-700">2. 跨kuà 域yù 探tàn 索suǒ</span>
                         <span className="text-muted-foreground ml-2">（別的領域）</span>
                         <ul className="ml-6 mt-2 space-y-1 list-disc text-foreground">
                            <li>大學入門</li>
                         </ul>
                       </li>
                     </ol>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </div>
  );
}
