import { useState, useMemo, useEffect } from "react";
import { Link, useSearch } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search as SearchIcon, ArrowLeft, Filter, Calendar, Users, Info } from "lucide-react";
import { MOCK_COURSES, searchCourses, type Course } from "@/data/mockCourses";

export default function Search() {
  const searchString = useSearch();
  const params = new URLSearchParams(searchString);
  const initialQuery = params.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const [filterGrade, setFilterGrade] = useState<string>("All");

  // Update query when URL param changes
  useEffect(() => {
    setQuery(params.get("q") || "");

  }, [searchString]);

  const filteredCourses = useMemo(() => {
    let result = searchCourses(query, MOCK_COURSES);
    

    
    if (filterGrade && filterGrade !== "All") {
      result = result.filter(c => c.grade === filterGrade || c.grade === "All");
    }
    
    return result;
  }, [query, filterGrade]);

  const getTypeLabel = (type: Course["type"]) => {
    const map: Record<string, string> = {
      Required: "必修",
      Elective: "選修",
      GenEd: "通識",
      PE: "體育",
      Lang: "語言"
    };
    return map[type] || type;
  };

  const getTypeColor = (type: Course["type"]) => {
    const map: Record<string, string> = {
      Required: "bg-blue-100 text-blue-800 border-blue-200",
      Elective: "bg-slate-100 text-slate-800 border-slate-200",
      GenEd: "bg-purple-100 text-purple-800 border-purple-200",
      PE: "bg-green-100 text-green-800 border-green-200",
      Lang: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return map[type] || "bg-gray-100";
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b shadow-sm">
        <div className="max-w-3xl mx-auto p-4 space-y-3">
          {/* Mobile optimization: stack elements better if font is large */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="icon" className="-ml-2">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="relative flex-1 w-full">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="搜尋課程..."
                className="pl-10 h-12 text-base bg-secondary/50 border-none focus-visible:ring-1 focus-visible:ring-primary"
              />
            </div>
          </div>
          
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex gap-2 pb-1">
              <Select value={filterGrade} onValueChange={setFilterGrade}>
                {/* Increased height and width for better touch target */}
                <SelectTrigger className="w-[120px] h-10 text-sm">
                  <SelectValue placeholder="年級" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">所有年級</SelectItem>
                  <SelectItem value="1">一年級</SelectItem>
                  <SelectItem value="2">二年級</SelectItem>
                  <SelectItem value="3">三年級</SelectItem>
                  <SelectItem value="4">四年級</SelectItem>
                </SelectContent>
              </Select>


            </div>
            <ScrollBar orientation="horizontal" className="hidden" />
          </ScrollArea>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 max-w-3xl mx-auto w-full p-4">
        <div className="mb-4 text-sm text-muted-foreground flex justify-between items-center">
          <span>找到 {filteredCourses.length} 門課程</span>
        </div>

        {/* Mobile View: Cards */}
        <div className="md:hidden space-y-4">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-card rounded-xl border p-5 shadow-sm active:scale-[0.99] transition-transform">
              <div className="flex justify-between items-start mb-2">
                <div className="flex flex-wrap gap-1">
                  <Badge variant="secondary" className={`${getTypeColor(course.type)} border`}>
                    {getTypeLabel(course.type)}
                  </Badge>
                  {course.tags && course.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="border-pink-200 text-pink-700 bg-pink-50">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                  {course.code}
                </span>
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1">{course.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{course.teacher}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-base mt-2">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Calendar className="w-4 h-4 text-primary shrink-0" />
                  <span>{course.time}</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Users className="w-4 h-4 text-primary shrink-0" />
                  <span>名額 {course.quota}</span>
                </div>
              </div>
              
              {course.remarks && (
                <div className="mt-3 pt-3 border-t flex items-start gap-1.5 text-xs text-muted-foreground">
                  <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{course.remarks}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop View: Table */}
        <div className="hidden md:block bg-card rounded-xl border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[60px]">序號</TableHead>
                <TableHead className="w-[60px]">年級</TableHead>
                <TableHead className="w-[80px]">必/選</TableHead>

                <TableHead>課名 / 教師</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCourses.map((course) => (
                <TableRow key={course.id} className="hover:bg-muted/50">
                  <TableCell className="font-mono text-xs">{course.id}</TableCell>
                  <TableCell className="text-center">{course.grade}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className={`${getTypeColor(course.type)} border-0`}>
                      {getTypeLabel(course.type)}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium text-base">{course.name}</span>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <span className="font-semibold text-foreground/80">{course.teacher}</span>
                        <span>•</span>
                        <span>{course.time}</span>
                        <span>•</span>
                        <span>{course.credits}學分</span>
                        {course.remarks && (
                          <>
                            <span>•</span>
                            <span className="text-xs bg-muted px-1 rounded">{course.remarks}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {filteredCourses.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
            <Filter className="w-12 h-12 mb-4 opacity-20" />
            <p>找不到符合條件的課程</p>
            <Button variant="link" onClick={() => {setQuery(""); setFilterGrade("All");}}>
              清除篩選
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
