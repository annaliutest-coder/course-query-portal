import { useState } from "react";
import { useAccess, ACCESS_CODE } from "@/contexts/AccessContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";
import { toast } from "sonner";
import heroImg from "@/assets/hero.jpg";

export default function AccessGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, login } = useAccess();
  const [code, setCode] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(code)) {
      toast.success("歡迎回來！");
    } else {
      toast.error("存取碼錯誤");
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/30">
      <Card className="w-full max-w-md shadow-lg border-none overflow-hidden">
        <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})` }} />
        <CardHeader className="text-center pt-8">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-2xl font-display">學生選課查詢入口</CardTitle>
          <CardDescription>
            請輸入本學期存取碼以繼續<br/>
            (預設碼：{ACCESS_CODE})
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="輸入存取碼..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="text-center text-lg tracking-widest"
              autoFocus
            />
            <Button type="submit" className="w-full text-lg h-12">
              進入系統
            </Button>
          </form>
        </CardContent>
      </Card>
      <p className="mt-8 text-sm text-muted-foreground">
        © 2026 Course Portal MVP
      </p>
    </div>
  );
}
