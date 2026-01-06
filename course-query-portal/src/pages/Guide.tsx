import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, BookOpen, Dumbbell } from "lucide-react";
import guidePe from "@/assets/guide-pe.png";
import guideGened from "@/assets/guide-gened.png";

export default function Guide() {
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
          <h1 className="text-xl font-display font-bold">選課操作教學</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 space-y-6">
        <Tabs defaultValue="gened" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 h-auto p-1 bg-muted/50 rounded-xl">
            <TabsTrigger 
              value="gened" 
              className="gap-2 py-4 text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-md transition-all rounded-lg"
            >
              <BookOpen className="w-6 h-6" />
              通識課登記
            </TabsTrigger>
            <TabsTrigger 
              value="pe" 
              className="gap-2 py-4 text-lg font-bold data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-md transition-all rounded-lg"
            >
              <Dumbbell className="w-6 h-6" />
              體育課登記
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gened" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>通識志願登記步驟</CardTitle>
                <CardDescription>
                  通識課程採用志願序分發，請務必在規定時間內完成登記。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="font-semibold text-lg">切換至通識分頁</h3>
                  </div>
                  <p className="text-muted-foreground pl-8">
                    登入選課系統後，點擊上方選單的 <span className="text-primary font-bold">「通識志願登記/分發記錄」</span> 分頁。
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <h3 className="font-semibold text-lg">點擊登記按鈕</h3>
                  </div>
                  <p className="text-muted-foreground pl-8 mb-3">
                    找到左下方的綠色 <span className="text-green-600 font-bold">「+ 登記」</span> 按鈕，點擊後即可開始選擇志願課程。
                  </p>
                  <div className="rounded-lg overflow-hidden border shadow-sm">
                     <img src={guideGened} alt="通識登記教學截圖" className="w-full h-auto" />
                  </div>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded text-sm text-amber-800">
                  <strong>💡 小提醒：</strong> 志願順序會影響分發結果，建議將最想上的課排在第一志願。修改順序後記得按下「儲存」。
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg text-red-700 font-bold text-xl animate-pulse shadow-sm">
                  ⚠️ 第一階段、第二階段選課時，請選滿10個志願！！
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pe" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>體育志願登記步驟</CardTitle>
                <CardDescription>
                  體育課1學分，需透過志願填寫進行分發。
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <h3 className="font-semibold text-lg">找到體育分頁</h3>
                  </div>
                  <p className="text-muted-foreground pl-8 mb-3">
                    在選課系統上方選單中，找到 <span className="text-primary font-bold">「體育志願登記/分發記錄」</span> 分頁（通常在教育學程隔壁）。
                  </p>
                  <div className="rounded-lg overflow-hidden border shadow-sm">
                     <img src={guidePe} alt="體育登記教學截圖" className="w-full h-auto" />
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg shadow-sm space-y-4">
                  <p className="text-red-700 font-bold text-xl animate-pulse">
                    ⚠️ 第一階段、第二階段選課時，請選滿10個志願！！
                  </p>
                  <p className="text-red-600 font-bold text-lg">
                    ⚠️ 相同課程名稱，最多修2次
                  </p>
                  
                  <div className="bg-white/50 p-4 rounded text-base text-red-800 space-y-2">
                    <p>
                      <strong>每學期限修 1 門體育課。</strong>
                      <span className="text-sm block mt-1 opacity-80">(若體育成績不及格，可在下學期多修 1 門)</span>
                    </p>
                    <ul className="list-disc list-inside pl-1 text-sm space-y-1">
                      <li>第一、二階段：分發 1 門</li>
                      <li>加退選時：可自己加選第 2 門</li>
                    </ul>
                  </div>
                </div>


              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
