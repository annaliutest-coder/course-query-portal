import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, Key, ExternalLink, FileText } from "lucide-react";

export default function AuthCode() {
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
          <h1 className="text-xl font-display font-bold">授權碼選課教學</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto p-4 space-y-6">
        <Card className="border-l-4 border-l-blue-500 shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-2 text-blue-600 mb-2">
              <Key className="w-5 h-5" />
              <span className="font-bold tracking-wide text-sm uppercase">Authorization Code</span>
            </div>
            <CardTitle className="text-2xl">怎麼用授權碼選課？</CardTitle>
            <CardDescription>
              如果課選不到（人滿了，或者有限制），你可以找老師拿「授權碼」。
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Main CTA Button */}
            <a 
              href="https://www.notion.so/sh-uqu-nm-Enroll-in-a-course-using-an-authorization-code-264ccffa725780ad9ca4eb2de51dcd17" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block group mb-6"
            >
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <FileText className="w-32 h-32 transform rotate-12" />
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <ExternalLink className="w-6 h-6" /> 
                      查看完整圖文教學
                    </h2>
                    <p className="text-blue-100 text-lg">
                      點此開啟詳細的授權碼選課教學頁面 (Notion)
                    </p>
                  </div>
                  <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-colors">
                    <ArrowLeft className="w-8 h-8 transform rotate-180" />
                  </div>
                </div>
              </div>
            </a>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-xl">登入學校選課網頁</h3>
                  <p className="text-muted-foreground mt-1 text-base">
                    用你的學號和密碼登入。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-xl">點「授權碼加選」</h3>
                  <p className="text-muted-foreground mt-1 text-base">
                    在選單裡，找到 <span className="font-bold text-blue-700">「授權碼加選」</span> 的按鈕，點一下。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-xl">輸入號碼</h3>
                  <p className="text-muted-foreground mt-1 text-base">
                    把老師給你的號碼打進去，然後點 <span className="font-bold text-gray-700">【查詢】</span>。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-none w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-xl">完成選課</h3>
                  <p className="text-muted-foreground mt-1 text-base">
                    看看是不是你要的課？如果是，點 <span className="font-bold text-green-600">【加選儲存】</span> 就完成了。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-lg text-base text-amber-900 mt-6 shadow-sm">
              <strong className="text-lg">⚠️ 注意事項：</strong>
              <ul className="list-disc list-inside mt-3 space-y-2">
                <li>這個方法只有在 <span className="font-bold text-amber-700">「加退選」</span> 的時間可以用。</li>
                <li>用授權碼選的課，<span className="font-bold text-amber-700">不能退選</span>。</li>
                <li>號碼不要弄丟，老師可能不會再給你。</li>
              </ul>
            </div>



          </CardContent>
        </Card>
      </div>
    </div>
  );
}
