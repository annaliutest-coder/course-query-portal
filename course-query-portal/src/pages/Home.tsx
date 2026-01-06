import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, ChevronRight, ExternalLink, Info, Calendar, Clock, BookOpen, AlertTriangle, GraduationCap, Key, FileCheck, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import iconList from "@/assets/icon-list.jpg";
import iconLang from "@/assets/icon-lang.jpg";
import iconSports from "@/assets/icon-sports.jpg";
import iconIdea from "@/assets/icon-idea.jpg";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Home() {

  const [query, setQuery] = useState("");
  const [, setLocation] = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setLocation(`/search?q=${encodeURIComponent(query)}`);
    }
  };



  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <div className="relative h-[280px] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 max-w-md mx-auto w-full">
          <div className="flex justify-between items-end mb-4">
            <h1 className="text-3xl text-white font-bold drop-shadow-md">
              早安，<br/>準備選什麼課？
            </h1>

          </div>
          
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="搜尋課程代碼、名稱或老師..." 
              className="pl-10 h-12 bg-white/95 border-none shadow-lg text-lg ring-offset-transparent focus-visible:ring-2 focus-visible:ring-white"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-lg font-semibold mb-4 text-foreground/80">常用資源</h2>
        {/* Increase gap and ensure cards have minimum height for content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            


            <Link href="/search">
              <Card className="bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors cursor-pointer h-full">
                <CardContent className="p-4 flex items-center justify-between h-full">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                      <Search className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700">華語系課程查詢</p>
                      <p className="text-xs text-blue-600/80">查詢本學期開課資訊</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-400" />
                </CardContent>
              </Card>
            </Link>
            <Link href="/notices">
              <Card className="bg-amber-50 border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-amber-700">選課注意事項</p>
                      <p className="text-xs text-amber-600/80">各項選課規定與必修說明</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-amber-400" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/auth-code">
              <Card className="bg-indigo-50 border-indigo-200 hover:bg-indigo-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-100 rounded-full text-indigo-600">
                      <Key className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-indigo-700">授權碼選課</p>
                      <p className="text-xs text-indigo-600/80">額滿課程加選流程教學</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-indigo-400" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/english-waiver">
              <Card className="bg-green-50 border-green-200 hover:bg-green-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 rounded-full text-green-600">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-700">英文課抵免</p>
                      <p className="text-xs text-green-600/80">114-2 學期申請時間與流程</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-green-400" />
                </CardContent>
              </Card>
            </Link>

            <Link href="/guide">
              <Card className="bg-sky-50 border-sky-200 hover:bg-sky-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-sky-100 rounded-full text-sky-600">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sky-700">體育/通識選課教學</p>
                      <p className="text-xs text-sky-600/80">圖文引導志願登記操作步驟</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-sky-400" />
                </CardContent>
              </Card>
            </Link>
            <a href="https://www.aa.ntnu.edu.tw/zh_tw/selectives/Dayschool/CourseInquiry" target="_blank" rel="noopener noreferrer">
              <Card className="bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-full text-primary">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-primary">臺師大課程查詢系統</p>
                      <p className="text-xs text-muted-foreground">前往學校官網查詢最新課表</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-primary/50" />
                </CardContent>
              </Card>
            </a>

            <a href="https://www.aa.ntnu.edu.tw/zh_tw/EducationCommittee/ForeignLEducation/GeneralEnglishRelatedForms" target="_blank" rel="noopener noreferrer">
              <Card className="bg-orange-50 border-orange-200 hover:bg-orange-100 transition-colors cursor-pointer h-full">
                <CardContent className="p-4 flex items-center justify-between h-full">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-orange-100 rounded-full text-orange-600">
                      <Info className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-orange-700">英文課不小心退選/特殊加選</p>
                      <p className="text-xs text-orange-600/80">線上申請</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-orange-400" />
                </CardContent>
              </Card>
            </a>

            <a href="https://www.aa.ntnu.edu.tw/zh_tw/Calender" target="_blank" rel="noopener noreferrer">
              <Card className="bg-emerald-50 border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-100 rounded-full text-emerald-600">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-700">學校行事曆</p>
                      <p className="text-xs text-emerald-600/80">查詢重要日程、考試週與連假</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-emerald-400" />
                </CardContent>
              </Card>
            </a>

            <a href="https://www.aa.ntnu.edu.tw/zh_tw/selectives/Dayschool/Courseselection" target="_blank" rel="noopener noreferrer">
              <Card className="bg-purple-50 border-purple-200 hover:bg-purple-100 transition-colors cursor-pointer">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-purple-100 rounded-full text-purple-600">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-purple-700">選課日程</p>
                      <p className="text-xs text-purple-600/80">查詢各階段選課起訖時間</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-purple-400" />
                </CardContent>
              </Card>
            </a>

            {/* LINE OA Button */}
            <a 
              href="https://script.google.com/macros/s/AKfycbwwzFpYScWYbIsoszetMtiD9pf-7IVnidpJ_YeIfR01ZVPfLClqSRpADN0Rwrj-lh1QVA/exec" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Card className="bg-[#06c755]/10 border-[#06c755]/30 hover:bg-[#06c755]/20 transition-colors cursor-pointer h-full">
                <CardContent className="p-4 flex items-center justify-between h-full">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#06c755] rounded-full text-white shadow-sm">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="font-semibold text-[#06c755] text-lg">詢問華語系小幫手</p>
                      <p className="text-xs text-[#06c755]">AI 自動回答選課問題</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#06c755]/60" />
                </CardContent>
              </Card>
            </a>
          </div>


      </div>
    </div>
  );
}
