import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ArrowLeft, FileCheck, Calendar, MapPin, CheckCircle2, ListOrdered, FileText, ExternalLink } from "lucide-react";

export default function EnglishWaiver() {
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
          <h1 className="text-xl font-display font-bold">英文課抵免/免修</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 space-y-6">
        
        {/* Main CTA Button */}
        <a 
          href="https://www.notion.so/English-Course-Waiver-23eccffa725780a29c79eb35035b99a8" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <FileText className="w-32 h-32 transform rotate-12" />
            </div>
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  <ExternalLink className="w-6 h-6" /> 
                  查看完整圖文說明
                </h2>
                <p className="text-green-100 text-lg">
                  點此開啟詳細的英文免修申請教學頁面 (Notion)
                </p>
              </div>
              <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                <ArrowLeft className="w-8 h-8 transform rotate-180" />
              </div>
            </div>
          </div>
        </a>

        {/* Deadline Alert */}
        <Alert className="bg-red-50 border-red-200">
          <Calendar className="h-4 w-4 text-red-600" />
          <AlertTitle className="text-red-800 font-bold mb-1">114-2 學期申請時間</AlertTitle>
          <AlertDescription className="text-red-700 font-medium">
            2026年2月9日 (一) 至 2026年3月2日 (一)
            <span className="block text-sm font-normal mt-1 opacity-80">
              (上午 9:00-12:00 & 下午 14:00-17:00)
            </span>
          </AlertDescription>
        </Alert>

        {/* Eligibility Rules */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 text-primary mb-2">
              <CheckCircle2 className="w-5 h-5" />
              <span className="font-bold tracking-wide text-sm uppercase">Waiver Rules</span>
            </div>
            <CardTitle>抵免資格與科目</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-3 text-xl">B2 等級</h3>
                <p className="text-blue-600 text-sm mb-3">英檢成績達 CEFR B2</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-sm text-blue-900">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> 免修 英文 (一)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-blue-900">
                    <CheckCircle2 className="w-4 h-4 text-blue-500" /> 免修 英文 (二)
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                <h3 className="font-bold text-purple-800 mb-3 text-xl">C1 等級</h3>
                <p className="text-purple-600 text-sm mb-3">英檢成績達 CEFR C1</p>
                <ul className="space-y-1">
                  <li className="flex items-center gap-2 text-sm text-purple-900">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> 免修 英文 (一) & (二)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-purple-900">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> 免修 英文 (三)
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Foreign/Overseas Students Rule */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-100 mt-6">
              <h3 className="font-bold text-orange-800 mb-3 text-xl">外籍生及僑生專用</h3>
              <p className="text-orange-700 text-base mb-4 leading-relaxed">
                母語為英語或畢業自英語授課學校之外籍生及僑生
              </p>
              <ul className="space-y-1">
                <li className="flex items-center gap-3 text-base text-orange-900">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" /> 免修 英文 (一)、(二) 及 (三)
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Application Process */}
        <Card className="border-l-4 border-l-green-500 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2 text-green-600 mb-2">
              <ListOrdered className="w-5 h-5" />
              <span className="font-bold tracking-wide text-sm uppercase">Process</span>
            </div>
            <CardTitle>申請流程步驟</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            <div className="space-y-0 relative pl-4 border-l-2 border-slate-100 ml-2">
              {/* Step 1 */}
              <div className="relative pb-8 pl-6">
                <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold border-4 border-white">1</div>
                <h3 className="font-semibold text-lg">線上填寫申請表</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  路徑：【校務行政入口網】→【教務資訊系統(學生版)】→【成績相關】→【免修科目抵免申請】
                </p>
                <div className="mt-2 text-sm bg-slate-50 p-2 rounded text-slate-600">
                  填寫抵免方式、檢定考試種類，並選擇抵免科目後，按下<strong>「儲存」</strong>並<strong>「送出」</strong>。
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative pb-8 pl-6">
                <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold border-4 border-white">2</div>
                <h3 className="font-semibold text-lg">列印申請表</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  確認資料無誤後，請將申請表<strong>列印</strong>出來。
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-6">
                <div className="absolute -left-[31px] top-0 w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold border-4 border-white">3</div>
                <h3 className="font-semibold text-lg">現場繳件審核</h3>
                <p className="text-muted-foreground mt-1 text-sm">
                  請攜帶以下文件至辦公室辦理：
                </p>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center gap-2 bg-green-50/50 p-2 rounded border border-green-100">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-sm">申請表 (紙本)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-green-50/50 p-2 rounded border border-green-100">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-sm">英檢成績單 <strong className="text-green-700">正本</strong> (驗後歸還)</span>
                  </li>
                  <li className="flex items-center gap-2 bg-green-50/50 p-2 rounded border border-green-100">
                    <FileText className="w-4 h-4 text-green-600" />
                    <span className="text-sm">英檢成績單 <strong className="text-green-700">影本</strong> 一份</span>
                  </li>
                </ul>
              </div>
            </div>

          </CardContent>
        </Card>

        {/* Location Info */}
        <Card>
          <CardContent className="p-4 flex items-start gap-4">
            <div className="bg-slate-100 p-3 rounded-full text-slate-600 mt-1">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">辦理地點</h3>
              <p className="text-muted-foreground">
                行政大樓二樓 通識教育中心<br/>
                (共同教育委員會-外文教育組)
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
