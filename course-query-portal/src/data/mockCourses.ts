export interface Course {
  id: string;
  code: string;
  name: string;
  teacher: string;
  time: string;
  location: string;
  credits: number;
  grade: string; 
  department: string;
  type: "Required" | "Elective" | "GenEd" | "PE" | "Lang";
  category?: string;
  quota: number;
  remarks?: string;
  tags?: string[];
}

export const MOCK_COURSES: Course[] = [
  {
    "id": "1410",
    "code": "CLU1022",
    "name": "華人英文名著選讀 Selected Readings of Chinese English Literature",
    "teacher": "杜昭玫",
    "time": "二 6-8 和平 正302",
    "location": "",
    "credits": 3,
    "grade": "All",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)修習",
    "tags": []
  },
  {
    "id": "1411",
    "code": "CLU1094",
    "name": "科技華語 Chinese for Technology",
    "teacher": "劉欣怡",
    "time": "三 8-9 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "4",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】 / 此門課為大四選修課程",
    "tags": []
  },
  {
    "id": "1412",
    "code": "CLU0063",
    "name": "綜合華語（二） Integrated Chinese (II)",
    "teacher": "張雅惠",
    "time": "一 3-4 和平 樸402, 四 3-4 和平 樸403",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0062  綜合華語（一）】、【CLU0066  讀寫訓練（一）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1413",
    "code": "CLU0063",
    "name": "綜合華語（二） Integrated Chinese (II)",
    "teacher": "劉欣怡",
    "time": "一 3-4 和平 樸406, 四 3-4 和平 樸406",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0062  綜合華語（一）】、【CLU0066  讀寫訓練（一）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1414",
    "code": "CLU0063",
    "name": "綜合華語（二） Integrated Chinese (II)",
    "teacher": "王慧娟",
    "time": "一 3-4 和平 樸404, 四 3-4 和平 樸404",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0062  綜合華語（一）】、【CLU0066  讀寫訓練（一）】",
    "tags": [
      "C組"
    ]
  },
  {
    "id": "1415",
    "code": "CLU0066",
    "name": "讀寫訓練（一） Training in Reading and Writing (I)",
    "teacher": "孫懿芬",
    "time": "三 3-4 和平 樸404, 五 3-4 和平 樸404",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎限華語系（學）「國際華語與文化組」選修",
    "tags": [
      "春季班和交換生"
    ]
  },
  {
    "id": "1416",
    "code": "CLU0067",
    "name": "讀寫訓練（二） Training in Reading and Writing (II)",
    "teacher": "李育娟",
    "time": "一 6-7 和平 樸403, 四 6-7 和平 樸403",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1417",
    "code": "CLU0067",
    "name": "讀寫訓練（二） Training in Reading and Writing (II)",
    "teacher": "吳馥如",
    "time": "二 3-4 和平 美術館601, 四 6-7 和平 美術館601",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1418",
    "code": "CLU0067",
    "name": "讀寫訓練（二） Training in Reading and Writing (II)",
    "teacher": "劉欣怡",
    "time": "二 6-7 和平 誠201, 四 6-7 和平 樸404",
    "location": "",
    "credits": 4,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": [
      "C組"
    ]
  },
  {
    "id": "1419",
    "code": "CLU0071",
    "name": "當代華語（二） Contemporary Chinese (II)",
    "teacher": "王慧娟",
    "time": "一 6-7 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1420",
    "code": "CLU0071",
    "name": "當代華語（二） Contemporary Chinese (II)",
    "teacher": "劉崇仁",
    "time": "三 8-9 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": [
      "C組"
    ]
  },
  {
    "id": "1421",
    "code": "CLU0073",
    "name": "聽力訓練（二） Training in Listening (II)",
    "teacher": "王慧娟",
    "time": "二 6-7 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】、【CLU0072  聽力訓練（一）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1422",
    "code": "CLU0073",
    "name": "聽力訓練（二） Training in Listening (II)",
    "teacher": "劉崇仁",
    "time": "二 6-7 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】、【CLU0072  聽力訓練（一）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1423",
    "code": "CLU0073",
    "name": "聽力訓練（二） Training in Listening (II)",
    "teacher": "吳馥如",
    "time": "一 6-7 和平 正202",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】、【CLU0072  聽力訓練（一）】",
    "tags": [
      "C組"
    ]
  },
  {
    "id": "1424",
    "code": "CLU0077",
    "name": "會話訓練（二） Training in Conversation (II)",
    "teacher": "吳馥如",
    "time": "三 8-9 和平 正204",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】、【CLU0076  會話訓練（一）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1425",
    "code": "CLU0077",
    "name": "會話訓練（二） Training in Conversation (II)",
    "teacher": "劉欣怡",
    "time": "二 8-9 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】、【CLU0076  會話訓練（一）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1426",
    "code": "CLU0077",
    "name": "會話訓練（二） Training in Conversation (II)",
    "teacher": "王慧娟",
    "time": "二 8-9 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】、【CLU0076  會話訓練（一）】",
    "tags": [
      "C組"
    ]
  },
  {
    "id": "1427",
    "code": "CLU0082",
    "name": "中國歷史故事 Stories from Chinese History",
    "teacher": "張雅惠",
    "time": "三 6-7 和平 樸303",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": []
  },
  {
    "id": "1428",
    "code": "CLU0090",
    "name": "華人傳統節慶 Traditional Chinese Festivals",
    "teacher": "李育娟",
    "time": "五 3-4 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": []
  },
  {
    "id": "1429",
    "code": "CLU0118",
    "name": "兩岸人文與社會 Humanity and Society across Strait",
    "teacher": "劉崇仁",
    "time": "一 8-9 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": []
  },
  {
    "id": "1430",
    "code": "CLU0128",
    "name": "華人生活文化 Chinese Daily Life Culture",
    "teacher": "吳馥如",
    "time": "四 8-9 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "1",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0066  讀寫訓練（一）】",
    "tags": []
  },
  {
    "id": "1431",
    "code": "CLU0007",
    "name": "文言文（二） Classical Chinese (II)",
    "teacher": "張雅惠",
    "time": "一 8-9 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】",
    "tags": [
      "選修"
    ]
  },
  {
    "id": "1432",
    "code": "CLU0017",
    "name": "華語新聞聽力 Listening in Chinese News",
    "teacher": "張雅惠",
    "time": "二 6-7 和平 綜1001",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Elective",
    "quota": 37,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】",
    "tags": [
      "選修"
    ]
  },
  {
    "id": "1433",
    "code": "CLU0069",
    "name": "讀寫訓練（四） Training in Reading and Writing (IV)",
    "teacher": "陳寅清",
    "time": "一 6-7 和平 樸406, 三 6-7 和平 樸406",
    "location": "",
    "credits": 4,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1434",
    "code": "CLU0069",
    "name": "讀寫訓練（四） Training in Reading and Writing (IV)",
    "teacher": "劉崇仁",
    "time": "一 3-4 和平 樸403, 三 6-7 和平 樸403",
    "location": "",
    "credits": 4,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1435",
    "code": "CLU0075",
    "name": "聽力訓練（四） Training in Listening (IV)",
    "teacher": "張雅惠",
    "time": "三 8-9 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】、【CLU0074  聽力訓練（三）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1436",
    "code": "CLU0075",
    "name": "聽力訓練（四） Training in Listening (IV)",
    "teacher": "吳馥如",
    "time": "二 8-9 和平 樸402",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】、【CLU0074  聽力訓練（三）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1437",
    "code": "CLU0079",
    "name": "會話訓練（四） Training in Conversation (IV)",
    "teacher": "吳馥如",
    "time": "一 3-4 和平 正202",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】、【CLU0078  會話訓練（三）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1438",
    "code": "CLU0079",
    "name": "會話訓練（四） Training in Conversation (IV)",
    "teacher": "孫懿芬",
    "time": "三 8-9 和平 樸305",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】、【CLU0078  會話訓練（三）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1439",
    "code": "CLU0080",
    "name": "中國歷史概論 A General Introduction to Chinese History",
    "teacher": "杜昭玫",
    "time": "二 3-4 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】",
    "tags": []
  },
  {
    "id": "1440",
    "code": "CLU0091",
    "name": "臺灣民間信仰 Taiwanese Folk Beliefs",
    "teacher": "劉崇仁",
    "time": "四 6-7 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "2",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0068  讀寫訓練（三）】",
    "tags": []
  },
  {
    "id": "1441",
    "code": "CLU0018",
    "name": "應用文寫作 Practical Writing",
    "teacher": "陳嘉凌",
    "time": "三 6-7 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】",
    "tags": []
  },
  {
    "id": "1442",
    "code": "CLU0093",
    "name": "中外文化交流 Chinese Cultural Exchange with Other Countries",
    "teacher": "李育娟",
    "time": "二 6-7 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】",
    "tags": []
  },
  {
    "id": "1443",
    "code": "CLU0097",
    "name": "翻譯入門 Introduction to Translation",
    "teacher": "劉欣怡",
    "time": "三 3-4 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】",
    "tags": []
  },
  {
    "id": "1444",
    "code": "CLU0099",
    "name": "讀寫訓練（六） Training in Reading and Writing (VI)",
    "teacher": "王慧娟",
    "time": "二 3-4 和平 樸403",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0098  讀寫訓練（五）】",
    "tags": [
      "A組"
    ]
  },
  {
    "id": "1445",
    "code": "CLU0099",
    "name": "讀寫訓練（六） Training in Reading and Writing (VI)",
    "teacher": "張雅惠",
    "time": "二 3-4 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0098  讀寫訓練（五）】",
    "tags": [
      "B組"
    ]
  },
  {
    "id": "1446",
    "code": "CLU0116",
    "name": "華語文教學概論 Introduction to Teaching Chinese as A Second Language",
    "teacher": "劉欣怡",
    "time": "一 6-7 和平 樸407",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Required",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0098  讀寫訓練（五）】",
    "tags": []
  },
  {
    "id": "1447",
    "code": "CLU0132",
    "name": "中醫概論 Introduction Chinese Medicine",
    "teacher": "林姿君",
    "time": "二 8-9 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】",
    "tags": []
  },
  {
    "id": "1448",
    "code": "CLU0124",
    "name": "華語書面語訓練 Training in Written-Style Chinese",
    "teacher": "王慧娟",
    "time": "五 3-4 和平 樸406",
    "location": "",
    "credits": 2,
    "grade": "4",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】、【CLU0075  聽力訓練（四）】、【CLU0079  會話訓練（四）】",
    "tags": []
  },
  {
    "id": "1449",
    "code": "CLU0126",
    "name": "中國思想史概論 A General Introduction to History of Chinese Thought",
    "teacher": "邱詩雯",
    "time": "一 8-9 和平 樸404",
    "location": "",
    "credits": 2,
    "grade": "4",
    "department": "華語系",
    "type": "Elective",
    "quota": 50,
    "remarks": "◎限本系(含雙主修)、外籍生修習◎必須先修過【CLU0069  讀寫訓練（四）】",
    "tags": []
  },
  {
    "id": "0254",
    "code": "00UA8A8",
    "name": "中文寫作與表達 Chinese Writing and Expression",
    "teacher": "陳惠鈴",
    "time": "五 8-9 和平 樸205",
    "location": "",
    "credits": 2,
    "grade": "3",
    "department": "華語系",
    "type": "Required",
    "quota": 37,
    "remarks": "◎必須先修過(也可以同時修)【CLU0069 讀寫訓練（四）】 / 原則上不發放授權碼。",
    "tags": [
      "NaN"
    ]
  }
];

export const searchCourses = (query: string, courses: Course[]) => {
  if (!query) return courses;
  const lowerQuery = query.toLowerCase();
  return courses.filter(course => 
    course.name.toLowerCase().includes(lowerQuery) ||
    course.code.toLowerCase().includes(lowerQuery) ||
    course.teacher.toLowerCase().includes(lowerQuery) ||
    course.department.toLowerCase().includes(lowerQuery) ||
    (course.tags && course.tags.some(tag => tag.toLowerCase().includes(lowerQuery)))
  );
};
