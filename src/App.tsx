import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Cpu, Zap, Radio, BookOpen, DollarSign, Share2, Palette, ChevronDown, X, Globe, ShieldCheck, MessageSquare, QrCode, User, Clock, Calendar, Trophy, Award, Download, Search, Sparkles, Star, Crown, FileText, Printer, Eye, SlidersHorizontal, Home, Users, Send, Heart, CheckCircle2, Code, ExternalLink, MapPin, Mail, Layers, Compass } from "lucide-react";

// Interactive Particle Background Component
const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#010204]">
      {/* Schematic Grid Overlay */}
      <div className="absolute inset-0 circuit-bg opacity-[0.18] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#010204_100%)]" />
      
      {/* Interactive Glowing Focus Area 1 */}
      <motion.div 
        className="absolute w-[300px] h-[300px] md:w-[700px] md:h-[700px] rounded-full bg-electron-accent/8 blur-[80px] md:blur-[140px]"
        animate={{
          x: mousePos.x - (isMobile ? 150 : 350),
          y: mousePos.y - (isMobile ? 150 : 350),
        }}
        transition={{ type: "spring", damping: 40, stiffness: 60 }}
      />
      {/* Interactive Glowing Focus Area 2 */}
      <motion.div 
        className="absolute w-[200px] h-[200px] md:w-[500px] md:h-[500px] rounded-full bg-electron-secondary/8 blur-[70px] md:blur-[120px]"
        animate={{
          x: mousePos.x - (isMobile ? 100 : 250),
          y: mousePos.y - (isMobile ? 100 : 250),
        }}
        transition={{ type: "spring", damping: 50, stiffness: 50, delay: 0.05 }}
      />

      {/* Floating Holographic Engineering Elements */}
      <div className="absolute top-[12%] left-[4%] opacity-25 animate-pulse text-electron-accent">
        <svg width="100" height="100" viewBox="0 0 100 100" className="rotate-45">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4,4" />
          <path d="M 10 50 L 90 50 M 50 10 L 50 90" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,15 45,25 55,25" fill="currentColor" opacity="0.7"/>
          <text x="54" y="47" fontSize="5" className="font-mono text-electron-accent">ANT_FEED_STABLE</text>
        </svg>
      </div>

      <div className="absolute bottom-[22%] right-[5%] opacity-20 text-electron-secondary hidden md:block">
        <svg width="180" height="180" viewBox="0 0 100 100" className="animate-[spin_45s_linear_infinite]">
          <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.4" strokeDasharray="3,6" />
          <path d="M 50 5 L 50 15 M 50 85 L 50 95 M 5 50 L 15 50 M 85 50 L 95 50" stroke="currentColor" strokeWidth="0.8" />
          <text x="18" y="53" fontSize="4.5" className="font-mono text-electron-secondary">TELEMETRIC_NODE_LNK</text>
        </svg>
      </div>

      <div className="absolute top-[35%] right-[10%] opacity-15 text-electron-accent hidden md:block">
        <svg width="160" height="90" viewBox="0 0 150 80">
          <path d="M 10,40 Q 32,10 55,40 T 100,40 T 145,40" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4,2" />
          <text x="15" y="70" fontSize="7" className="font-mono text-electron-accent">SINE_ELEX_TERM_06</text>
        </svg>
      </div>

      <div className="absolute bottom-[8%] left-[10%] opacity-20 text-electron-accent">
        <svg width="120" height="90" viewBox="0 0 100 80">
          <path d="M 10 40 L 40 40 M 80 40 L 110 40 M 40 20 L 40 60 Q 65 40 40 20" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="40" cy="20" r="1.5" fill="currentColor" />
          <circle cx="40" cy="60" r="1.5" fill="currentColor" />
          <text x="45" y="28" fontSize="5" className="font-mono text-electron-accent">TRANSISTOR_ACTIVE_G</text>
        </svg>
      </div>
    </div>
  );
};

const roles = [
  {
    title: "الليدر (Leader)",
    roleCategory: "القيادة العليا والتمثيل",
    name: "عمر فتحي علي",
    idCode: "ELEX28-01",
    badge: "LEADER_OFFICIAL",
    whatsapp: "+249118222378",
    description: "القيادة العامة لدفعة ELEX28، التنسيق مع إدارات الكلية والجامعة، وتمثيل مهندسي الإلكترونيات في كافة المحافل والمحطات الرسمية.",
    tasks: [
      "تمثيل الدفعة أمام إدارة الكلية وعمادة الشؤون الأكاديمية",
      "الإشراف الإداري العام والتوجيه لجميع لجان وأمانات الدفعة",
      "اتخاذ القرارات الاستراتيجية بالتنسيق مع مجلس الأمانة العامة",
      "معالجة كافة التحديات والطلبات التي تواجه مهندسي الدفعة"
    ],
    icon: Crown,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 via-amber-500/10 to-yellow-950/40",
    borderColor: "border-yellow-500/30 hover:border-yellow-400",
    glowColor: "shadow-[0_10px_30px_rgba(234,179,8,0.18)]",
    badgeBg: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    avatarBg: "bg-gradient-to-br from-yellow-500/20 to-amber-600/30 border-yellow-500/40",
    accentGlow: "bg-yellow-500/20"
  },
  {
    title: "الأمين العام",
    roleCategory: "الأمانة العامة والإشراف الإداري",
    name: "مؤتمن علي",
    idCode: "ELEX28-02",
    badge: "SEC_GENERAL",
    whatsapp: "+249118587285",
    description: "إدارة التنسيق التنفيذي، توثيق القرارات الرسمية، والإشراف المباشر على سير العمل داخل مختلف أمانات المجلس.",
    tasks: [
      "إدارة وترتيب المراسلات والمخاطبات الرسمية لدفعة ELEX28",
      "تنظيم وتوثيق محاضر الاجتماعات الدوريّة والقرارات",
      "متابعة تنفيذ التوصيات والقرارات الإدارية والتنفيذية",
      "ربط وتسهيل التواصل والتنسيق اليومي بين الأمانات"
    ],
    icon: Globe,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 via-teal-500/10 to-cyan-950/40",
    borderColor: "border-cyan-500/30 hover:border-cyan-400",
    glowColor: "shadow-[0_10px_30px_rgba(6,182,212,0.18)]",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    avatarBg: "bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border-cyan-500/40",
    accentGlow: "bg-cyan-500/20"
  },
  {
    title: "الأمين الأكاديمي",
    roleCategory: "الشؤون الأكاديمية والتعليمية",
    name: "عمر فتحي علي",
    deputy: "ميرفت محمد",
    idCode: "ELEX28-03",
    badge: "ACAD_MINISTER",
    whatsapp: "+249118222378",
    description: "إدارة المكتبة الرقمية، توفير المراجع الشاملة، والتنسيق الأكاديمي المستمر مع أساتذة المقررات واللجان التعليمية.",
    tasks: [
      "توفير المراجع العلمية والملازم والحلول النموذجية الموثوقة",
      "التنسيق المباشر مع المحاضرين بخصوص الامتحانات والجداول",
      "تنظيم ورش المراجعة والمجموعات الدراسية الداعمة للطلاب",
      "متابعة الشؤون التعليمية وتذليل العقبات الأكاديمية"
    ],
    icon: BookOpen,
    color: "text-blue-400",
    gradient: "from-blue-500/20 via-indigo-500/10 to-blue-950/40",
    borderColor: "border-blue-500/30 hover:border-blue-400",
    glowColor: "shadow-[0_10px_30px_rgba(59,130,246,0.18)]",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    avatarBg: "bg-gradient-to-br from-blue-500/20 to-indigo-600/30 border-blue-500/40",
    accentGlow: "bg-blue-500/20"
  },
  {
    title: "الأمين المالي",
    roleCategory: "الشؤون المالية والاشتراكات",
    name: "عثمان عبد القادر",
    idCode: "ELEX28-04",
    badge: "FIN_CHIEF",
    whatsapp: "+249124569091",
    description: "التخطيط المالي المتكامل، جمع وإدارة الاشتراكات، وترسيخ أقصى درجات الشفافية والمساءلة في ميزانيات الأنشطة.",
    tasks: [
      "إدارة الاشتراكات والموارد المالية الخاصة بفعاليات الدفعة",
      "إعداد وتدقيق التقارير المالية الدورية بشفافية كاملة",
      "تغطية وتأمين الميزانيات المطلوبة للبرامج والأنشطة",
      "ترشيد الصرف المالي وضمان حوكمة الموارد والاشتراكات"
    ],
    icon: DollarSign,
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 via-green-500/10 to-emerald-950/40",
    borderColor: "border-emerald-500/30 hover:border-emerald-400",
    glowColor: "shadow-[0_10px_30px_rgba(16,185,129,0.18)]",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    avatarBg: "bg-gradient-to-br from-emerald-500/20 to-teal-600/30 border-emerald-500/40",
    accentGlow: "bg-emerald-500/20"
  },
  {
    title: "الأمين الإعلامي",
    roleCategory: "الإعلام والهوية البصرية",
    name: "اسراء عادل",
    idCode: "ELEX28-05",
    badge: "MEDIA_CHIEF",
    whatsapp: "+249994422595",
    description: "إدارة المنصات والقنوات الرسمية، التغطية الإعلامية الاحترافية، وصياغة الهوية البصرية والتصاميم المميزة لدفعة ELEX28.",
    tasks: [
      "إدارة وتحديث كافة المنصات والقنوات الرسمية للدفعة",
      "صياغة ونشر التنبيهات والإعلانات الرسمية بدقة عالية",
      "التوثيق الإعلامي والتصوير لجميع فعاليات ومناسبات الدفعة",
      "ابتكار الهوية الجرافيكية والتصاميم البصرية للمنشورات"
    ],
    icon: Radio,
    color: "text-purple-400",
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-purple-950/40",
    borderColor: "border-purple-500/30 hover:border-purple-400",
    glowColor: "shadow-[0_10px_30px_rgba(168,85,247,0.18)]",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    avatarBg: "bg-gradient-to-br from-purple-500/20 to-fuchsia-600/30 border-purple-500/40",
    accentGlow: "bg-purple-500/20"
  },
  {
    title: "الأمين الثقافي",
    roleCategory: "الأنشطة الثقافية والاجتماعية",
    name: "ميرفت محمد",
    idCode: "ELEX28-06",
    badge: "CULTURE_MINISTER",
    whatsapp: "+249115050714",
    description: "تنظيم الفعاليات الاجتماعية، الرحلات الترفيهية، والبرامج الثقافية التي تعزز أواصر الأخوة والتواصل بين جميع المهندسين.",
    tasks: [
      "تنظيم الرحلات والفعاليات الترفيهية واللقاءات الأخوية",
      "إقامة المنافسات الثقافية والمسابقات الإبداعية بين المهندسين",
      "توطيد الروابط الاجتماعية والروح الجماعية داخل الدفعة",
      "الإشراف والارتقاء بالأنشطة اللاصفية والملتقيات"
    ],
    icon: Palette,
    color: "text-orange-400",
    gradient: "from-orange-500/20 via-rose-500/10 to-orange-950/40",
    borderColor: "border-orange-500/30 hover:border-orange-400",
    glowColor: "shadow-[0_10px_30px_rgba(249,115,22,0.18)]",
    badgeBg: "bg-orange-500/10 text-orange-400 border-orange-500/30",
    avatarBg: "bg-gradient-to-br from-orange-500/20 to-rose-600/30 border-orange-500/40",
    accentGlow: "bg-orange-500/20"
  },
  {
    title: "الأمين الرياضي",
    roleCategory: "الرياضة والأنشطة التنافسية",
    name: "محمد ياسر",
    idCode: "ELEX28-07",
    badge: "SPORTS_CHIEF",
    whatsapp: "+249110000000",
    description: "التخطيط والتنفيذ لكافة الأنشطة والبطولات الرياضية، اختيار وتأهيل منتخب الدفعة، وإشعال روح المنافسة الشريفة.",
    tasks: [
      "تنظيم البطولات الكروية والمنافسات الرياضية الدورية للدفعة",
      "الإشراف على اختيار وتشكييل منتخب الدفعة في دوريات الكلية",
      "تنظيم الأيام الرياضية المفتوحة والألعاب التفاعلية الممتعة",
      "تعزيز اللياقة البدنية ونشر الروح الرياضية وتكريم الأبطال"
    ],
    icon: Trophy,
    color: "text-red-400",
    gradient: "from-red-500/20 via-amber-500/10 to-red-950/40",
    borderColor: "border-red-500/30 hover:border-red-400",
    glowColor: "shadow-[0_10px_30px_rgba(239,68,68,0.18)]",
    badgeBg: "bg-red-500/10 text-red-400 border-red-500/30",
    avatarBg: "bg-gradient-to-br from-red-500/20 to-amber-600/30 border-red-500/40",
    accentGlow: "bg-red-500/20"
  }
];

const studentResources = [
  { 
    id: "exams-s6",
    title: "امتحانات السمستر السادس", 
    subtitle: "أرشيف وتجميعات امتحانات سابقة",
    description: "القناة المخصصة لتجميعات، نماذج أسئلة، وامتحانات السمستر السادس السابقة والرسمية مع الحلول النموذجية المعتمدة.",
    detailsList: [
      "تجميعات امتحانات الميدتيرم والامتحانات النهائية",
      "نماذج التكليفات والشيتات المحلولة لكافة المواد",
      "ملخصات وملاحظات سريعة لليلة الامتحان"
    ],
    link: "https://t.me/+9BOzuRr8U80wY2U0", 
    actionType: "external_link",
    icon: FileText,
    tag: "EXAM VAULT • T.ME",
    badgeText: "قناة حصرية 📚",
    color: "text-yellow-400",
    borderColor: "border-yellow-500/40 hover:border-yellow-300",
    glowColor: "shadow-[0_10px_35px_rgba(234,179,8,0.22)]",
    badgeBg: "bg-yellow-500/15 text-yellow-400 border-yellow-500/40",
    avatarBg: "bg-gradient-to-br from-yellow-500/20 to-amber-600/30 border-yellow-500/40",
    accentGlow: "bg-yellow-500/25",
    buttonText: "انتقل للقناة على تلغرام"
  },
  { 
    id: "drive-materials",
    title: "المكتبة الرقمية والملفات", 
    subtitle: "مستودع Google Drive الموحد",
    description: "مستودع سحابي شامل ومنظّم يضم كافة الشيتات، المحاضرات المصورة، العروض التقديمية، والمراجع الدراسية.",
    detailsList: [
      "مجلدات سحابية مقسمة حسب كل مادة دراسية",
      "الشيتات الرسمية والسلايدات بصيغ PDF عالية الجودة",
      "المراجع والملازم الأكاديمية الموصى بها"
    ],
    link: "#", 
    actionType: "materials_modal",
    icon: Share2,
    tag: "GOOGLE DRIVE ARCHIVE",
    badgeText: "مستودع الملفات 📁",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30 hover:border-cyan-400",
    glowColor: "shadow-[0_10px_30px_rgba(6,182,212,0.18)]",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    avatarBg: "bg-gradient-to-br from-cyan-500/20 to-teal-600/30 border-cyan-500/40",
    accentGlow: "bg-cyan-500/20",
    buttonText: "استعراض المكتبة والملفات"
  },
  { 
    id: "schedules",
    title: "عدد ساعات المواد", 
    subtitle: "توزيع الساعات المعتمدة لكافة المواد (20 ساعة)",
    description: "تفاصيل عدد الساعات المعتمدة لكل مادة من مواد السمستر السادس الـ 8 بالتفصيل والمحاضرين.",
    detailsList: [
      "مواد (3 ساعات): الاتصالات التماثلية • المعالجات الدقيقة • التحليل العددي • تماثلية 2",
      "مواد (ساعتين): إلكترونيات القدرة • الحقول الكهرومغناطيسية • VHDL • برمجة OOP",
      "إجمالي الساعات المعتمدة للسمستر السادس: 20 ساعة دراسية معتمدة"
    ],
    link: "#", 
    actionType: "schedules_modal",
    icon: Clock,
    tag: "20 CREDIT HOURS",
    badgeText: "20 ساعة معتمدة ⏱️",
    color: "text-blue-400",
    borderColor: "border-blue-500/30 hover:border-blue-400",
    glowColor: "shadow-[0_10px_30px_rgba(59,130,246,0.18)]",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    avatarBg: "bg-gradient-to-br from-blue-500/20 to-indigo-600/30 border-blue-500/40",
    accentGlow: "bg-blue-500/20",
    buttonText: "عرض عدد ساعات المواد"
  },
  { 
    id: "channels",
    title: "القنوات الرسمية والمنصة", 
    subtitle: "مجتمع الدفعة والمنصة الجامعية",
    description: "روابط الانضمام لقنوات الواتساب والتلغرام الرسمية ودليل خطوة بخطوة لدخول المنصة الإلكترونية للجامعة.",
    detailsList: [
      "قناة الواتساب الرسمية للتنبيهات العاجلة",
      "قناة التلغرام الأكاديمية المخصصة للمناقشات",
      "دليل الدخول وشرح استخدام منصة الجامعة"
    ],
    link: "#", 
    actionType: "channels_modal",
    icon: Radio,
    tag: "OFFICIAL NETWORK",
    badgeText: "شبكة التواصل 🌐",
    color: "text-emerald-400",
    borderColor: "border-emerald-500/30 hover:border-emerald-400",
    glowColor: "shadow-[0_10px_30px_rgba(16,185,129,0.18)]",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    avatarBg: "bg-gradient-to-br from-emerald-500/20 to-green-600/30 border-emerald-500/40",
    accentGlow: "bg-emerald-500/20",
    buttonText: "الانضمام للقنوات والدليل"
  },
  { 
    id: "courses",
    title: "دليل المقررات التخصصية", 
    subtitle: "توصيف ومحتويات السمستر السادس",
    description: "استعراض توصيف المواد الأكاديمية للسمستر السادس، الساعات المعتمدة، أسماء الأساتذة، وقنوات المواد.",
    detailsList: [
      "توصيف تفصيلي لمفردات ومحتوى كل مقرر",
      "أسماء المحاضرين والمشرفين على المواد",
      "روابط قنوات التلغرام الخاصة بكل مادة"
    ],
    link: "#", 
    actionType: "courses_modal",
    icon: BookOpen,
    tag: "ACADEMIC SYLLABUS",
    badgeText: "المحتوى الأكاديمي 📖",
    color: "text-purple-400",
    borderColor: "border-purple-500/30 hover:border-purple-400",
    glowColor: "shadow-[0_10px_30px_rgba(168,85,247,0.18)]",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    avatarBg: "bg-gradient-to-br from-purple-500/20 to-fuchsia-600/30 border-purple-500/40",
    accentGlow: "bg-purple-500/20",
    buttonText: "استكشاف المقررات والمواد"
  },
];

const honorStudents = [
  { rank: 1, name: "عهود محمد حسن فرح", gpa: "3.51", badge: "المرتبة الأولى 🏆", grade: "امتياز مرتفع", merit: "صدارة الدفعة" },
  { rank: 2, name: "محمد حيدر خضر ادريس", gpa: "3.45", badge: "المرتبة الثانية ⭐", grade: "امتياز", merit: "تفوق استثنائي" },
  { rank: 3, name: "رهام خالد محمد النور", gpa: "3.39", badge: "المرتبة الثالثة ⭐", grade: "امتياز", merit: "تفوق استثنائي" },
  { rank: 4, name: "روان فتح الرحمن محمد صالح", gpa: "3.35", badge: "لوحة الشرف 🎖️", grade: "امتياز", merit: "تفوق مستمر" },
  { rank: 5, name: "رزان هاشم صالح علي", gpa: "3.27", badge: "لوحة الشرف 🎖️", grade: "امتياز", merit: "تفوق مستمر" },
  { rank: 6, name: "ريان الطيب خضر علي", gpa: "3.26", badge: "لوحة الشرف 🎖️", grade: "امتياز", merit: "تفوق مستمر" },
  { rank: 7, name: "ايثار ابو بكر عبد الرحمن شايب", gpa: "3.19", badge: "لوحة الشرف 🎖️", grade: "جيد جداً مرتفع", merit: "تفوق مميز" },
  { rank: 8, name: "ملاذ موسى عبد الله ابراهيم", gpa: "3.16", badge: "لوحة الشرف 🎖️", grade: "جيد جداً مرتفع", merit: "تفوق مميز" },
  { rank: 9, name: "شيماء هاشم عمر شمعون", gpa: "3.15", badge: "لوحة الشرف 🎖️", grade: "جيد جداً مرتفع", merit: "تفوق مميز" },
  { rank: 10, name: "إيلاف عبيد عبدالباقى محمد", gpa: "3.14", badge: "لوحة الشرف 🎖️", grade: "جيد جداً مرتفع", merit: "تفوق مميز" },
  { rank: 11, name: "دينا ياسر شوقي خليل", gpa: "3.11", badge: "لوحة الشرف 🎖️", grade: "جيد جداً مرتفع", merit: "تفوق مميز" },
  { rank: 12, name: "دعاء صلاح الدين محمد البدوى", gpa: "3.06", badge: "لوحة الشرف 🎖️", grade: "جيد جداً", merit: "تميّز أكاديمي" },
  { rank: 13, name: "ملاذ الباقر محمد خير", gpa: "3.03", badge: "لوحة الشرف 🎖️", grade: "جيد جداً", merit: "تميّز أكاديمي" },
  { rank: 14, name: "عزالدين أحمد عباس زين العابدين", gpa: "3.03", badge: "لوحة الشرف 🎖️", grade: "جيد جداً", merit: "تميّز أكاديمي" },
  { rank: 15, name: "فاطمه الزهراء عبدالرحمن يوسف أحمد", gpa: "3.01", badge: "لوحة الشرف 🎖️", grade: "جيد جداً", merit: "تميّز أكاديمي" },
  { rank: 16, name: "ماريا حسن بكرى حمد", gpa: "3.00", badge: "لوحة الشرف 🎖️", grade: "جيد جداً", merit: "تميّز أكاديمي" },
  { rank: 17, name: "مزن عبدالرحيم محمد بله", gpa: "3.00", badge: "لوحة الشرف 🎖️", grade: "جيد جداً", merit: "تميّز أكاديمي" }
];

const courses = [
  {
    name: "الاتصالات التماثلية",
    description: "دراسة أنظمة التعديل التماثلي (AM, FM, PM) وتأثير الضجيج على الإشارات.",
    icon: Radio,
    color: "text-blue-400",
    gradient: "from-blue-500/10 to-cyan-500/10",
    telegram: "https://t.me/c/3701824243/2",
    details: {
      title: "الاتصالات التماثلية (Analog Communications)",
      instructor: "د. أشرف قسم السيد",
      hours: "3 ساعات",
      overview: "دراسة المبادئ الأساسية لأنظمة الاتصالات التماثلية وكيفية نقل المعلومات عبر الموجات الكهرومغناطيسية، وهي مادة أساسية لفهم هندسة الاتصالات.",
      content: "تشمل المادة أنواع التعديل المختلفة (AM, FM, PM)، وتحليل الإشارات في المجال الزمني والترددي باستخدام تحويلات فورييه، وتأثير الضجيج (Noise) على جودة الاستقبال وكيفية تقليله.",
      studyMethod: "التركيز على فهم تحويلات فورييه (Fourier Transform) وحل المسائل الرياضية المتعلقة بنسبة الإشارة إلى الضجيج (SNR). يُنصح بمراجعة مفاهيم الإشارات والنظم.",
      examInfo: "الامتحان عادة ما يتضمن مسائل رياضية حول حسابات القدرة وكفاءة التعديل، بالإضافة إلى بعض الأسئلة النظرية حول مقارنة أنواع التعديل المختلفة."
    }
  },
  {
    name: "المعالجات الدقيقة ولغة التجميع",
    description: "بنية المعالج 8086، لغة التجميع (Assembly)، والتعامل مع الذاكرة والمنافذ.",
    icon: Cpu,
    color: "text-yellow-400",
    gradient: "from-yellow-500/10 to-orange-500/10",
    telegram: "https://t.me/c/3701824243/3",
    details: {
      title: "المعالجات الدقيقة ولغة التجميع (Microprocessors)",
      instructor: "د. خليفة الطيب",
      hours: "3 ساعات",
      overview: "فهم البنية الداخلية للمعالجات الدقيقة وكيفية برمجتها والتعامل مع العتاد (Hardware) بشكل مباشر، مما يربط بين البرمجيات والدوائر الإلكترونية.",
      content: "دراسة معالج Intel 8086 بالتفصيل، لغة التجميع (Assembly Language)، تنظيم الذاكرة، والمداخل والمخارج (I/O Interfacing)، بالإضافة إلى المقاطعات (Interrupts).",
      studyMethod: "التطبيق العملي ضروري جداً؛ حاول كتابة برامج بسيطة بلغة التجميع وفهم كيفية عمل المسجلات (Registers) والذاكرة خطوة بخطوة. مرجع فلويد أو باري بري مفيد جداً.",
      examInfo: "الامتحانات تركز على كتابة كود Assembly لمهام محددة، ورسم مخططات الربط (Interfacing) بين المعالج والذاكرة أو الملحقات."
    }
  },
  {
    name: "التحليل العددي",
    description: "طرق حل المعادلات الخطية وغير الخطية عددياً، الاستكمال، والتكامل العددي.",
    icon: Zap,
    color: "text-cyan-400",
    gradient: "from-cyan-500/10 to-blue-500/10",
    telegram: "https://t.me/c/3701824243/4",
    details: {
      title: "التحليل العددي (Numerical Analysis)",
      instructor: "دكتور ساتي",
      hours: "3 ساعات",
      overview: "التحليل العددي هو فرع من فروع علم الرياضيات بيستخدم لتحصل على حلول تقريبية للمسائل صعبة الحل، أو المسائل البيصعب التحصل على حل دقيق ليها، ومن أهم فوائد التحليل العددي هي المحاكاة أو simulation للظواهر الفيزيائية زي درجة الحرارة مثلا أو الطقس وغيرها من الاستخدامات.",
      content: "المادة بتتكون من درس في البداية زي مقدمة كدا دا براه عندو شيت بالإنجليزي فيه أسماء الدروس بالإنجليزي (في امتحان السناير سألهم من تعريف الأسماء دي فما تهملوه)+25 درس مقسمة على 6 أبواب:\n1. Non-Linear Algebraic Equations (finding the Roots).\n2. Linear Algebraic Equations (finding the Unknowns).\n3. Methods of Approximation Theory (constructing the functions).\n4. Numerical Differentiation.\n5. Numerical Integration.\n6. Ordinary Differential Equations (the solution of differential equations).\nكل باب بتكلم عن موضوع مختلف، المقرر بتاعو عبارة عن محاضرات شيتات بالإنجليزي+مرجع بالعربي، ودكتور ساتي مابخلي شي إلا ويجيبو في الامتحان(يعني باختصار ماتفط ولا شي في المقرر) وتسجل وتركز مع كل حرف بقولو في المحاضرة.",
      studyMethod: "المادة في قرايتها محتاجة تمرين تمرين تمرين كتييير على المسائل ولازم لازم يكون معاك آلة حاسبة ضروري شديييد ولابد من انك تحل أكبر قدر من المسائل و تمرًن يدك على المسائل (كررنا الكلام لاهميتو الشديدة و لأنو لو ماعملت كدا زمن الامتحان ماحيكفيك)، وفي شيت بتاع اثباتات (درجة الاثباتات ماكتيرة في الامتحان بس لايخلو منها الامتحان الناس تضمن درجتها)، فالناس تفهم وتحفظ الاثباتات الفي الشيت دا مع أي اثباتات تانية تلقوها في المقرر.",
      examInfo: "عموماً طريقة أسألتو في الامتحان غير مباشرة يعني مطلوب منك تتوسع بأكبر قدر ممكن في المسائل دا بالنسبة لدكتور ساتي(تطلعوا على الامتحانات القدييمة)، أما لو وضع الامتحان مساعد التدريس بتاعو (فوكس) ف الامتحان حيكون واضح ومباشر ومابطلع من pdf نيازي (NUMERICAL) زي امتحانات 2016و2015، قيل انو ماطلع من المقرر في امتحان سنايرنا بس امتحانو بكون شامل تفاصيل كل المقرر يعني لو ركزت عليه+كلام الدكتور+حاجات الحفظ+كل المسائل الفيه والاثباتات مابتجيك عوجة بإذن الله.🙌🏼🤍\nوأخيراً عموماً كدا أي حاجة جات من الدكتور سواء شيتات، مراجع وحتى كلامو البقولو اهتم بيه شديد."
    }
  },
  {
    name: "إلكترونيات القدرة",
    description: "دراسة الثايرستورات، المقومات المحكومة، والمحولات (DC-DC, DC-AC).",
    icon: Zap,
    color: "text-green-400",
    gradient: "from-green-500/10 to-emerald-500/10",
    telegram: "https://t.me/c/3701824243/5",
    details: {
      title: "إلكترونيات القدرة",
      instructor: "د. ريم",
      hours: "ساعتين",
      studyMethod: "المقرر ماكتير بس دا مامعناه انو تقراه في قاب الامتحان لأنو لو عملت كدا للأسف المادة حتغدر بيك😂 لأنو المادة دي محتاجة وقت كتير عشان تفهمها ولازم تمر على كلل شي في المقرر.. المادة فيها الفهم وفيها الحفظ ولازم تفهم كل شي في المقرر لأنو في الامتحان بكون في اسئلة من نوع (أشرح و أذكر )، وبالنسبة للفيديوهات لازم تحضرها كلها وتركز فيها لأنو أثناء الشرح الدكتور ذاكر فيها حاجات ماموجودة في الشيت، ولابد برضو من انك تحل امتحانات السنين السابقة بالذات الحاجات الموجودة في الشيت (على حسب امتحان سنايرنا).",
      examInfo: "الدكتور بصورة عامة مابطلع من شيتاتو، لكن قد تكون امتحاناتو شوية عاصرة لأنو مطلوب منك تفهم كل حرف في شيتاتو دي، امتحاناتو في الغالب مابتخلو من(تصميم الدوائر)، أما بالنسبة لامتحان السناير ماكان جاهم صعب وماطلع من مفهوم المقرر (ممكن مايجيب الحاجة بالنص لكن بتكون نفس الفهم)."
    }
  },
  {
    name: "الحقول الكهرومغناطيسية",
    description: "معادلات ماكسويل، انتشار الأمواج، وخطوط النقل.",
    icon: Radio,
    color: "text-purple-400",
    gradient: "from-purple-500/10 to-pink-500/10",
    telegram: "https://t.me/c/3701824243/6",
    details: {
      title: "الحقول الكهرومغناطيسية (Electromagnetics)",
      instructor: "د. فتح الرحمن إسماعيل",
      hours: "ساعتين",
      overview: "دراسة القوانين الفيزيائية التي تحكم الحقول الكهربائية والمغناطيسية وتفاعلها، وهي من أمتع وأصعب مواد الهندسة الإلكترونية.",
      content: "معادلات ماكسويل في صورها المختلفة، انتشار الأمواج الكهرومغناطيسية في الأوساط المختلفة، خطوط النقل (Transmission Lines)، والمتجهات (Vectors).",
      studyMethod: "المادة دسمة رياضياً، تحتاج لتركيز عالي في التفاضل والتكامل المتجهي وفهم المعنى الفيزيائي لكل معادلة. حل مسائل الكتاب (Sadiku) هو مفتاح النجاح.",
      examInfo: "الامتحان يتطلب مهارات رياضية عالية وفهم عميق للظواهر الفيزيائية. الأسئلة غالباً ما تكون شاملة لعدة مفاهيم في مسألة واحدة."
    }
  },
  {
    name: "تماثلية 2",
    description: "تصميم الدوائر الإلكترونية المتقدمة، مكبرات العمليات، والمرشحات.",
    icon: Palette,
    color: "text-orange-400",
    gradient: "from-orange-500/10 to-red-500/10",
    telegram: "https://t.me/c/3701824243/7",
    details: {
      title: "الإلكترونيات التماثلية 2 (Analog Electronics II)",
      instructor: "د. فضل حسين",
      hours: "3 ساعات",
      overview: "استكمال لدراسة الدوائر الإلكترونية التماثلية المتقدمة وتطبيقاتها في الأنظمة الإلكترونية المعقدة.",
      content: "مكبرات العمليات (Op-Amps) وتطبيقاتها، المرشحات الفعالة (Active Filters)، المذبذبات (Oscillators)، ودوائر التغذية الراجعة (Feedback) واستقراريتها.",
      studyMethod: "فهم الدوائر المكافئة (Equivalent Circuits) والتحليل الترددي للدوائر. التدريب على رسم الـ Bode Plots وفهم تأثير الـ Feedback على الكسب والنطاق الترددي.",
      examInfo: "الامتحانات تركز على تحليل الدوائر (Analysis) وتصميمها (Design) لتحقيق مواصفات معينة."
    }
  },
  {
    name: "التصميم بمساعدة الحاسوب VHDL",
    description: "لغة وصف العتاد لتصميم الأنظمة الرقمية والدوائر المتكاملة (FPGA).",
    icon: Cpu,
    color: "text-red-400",
    gradient: "from-red-500/10 to-rose-500/10",
    telegram: "https://t.me/c/3701824243/8",
    details: {
      title: "التصميم بمساعدة الحاسوب VHDL",
      instructor: "د. ريم",
      hours: "ساعتين",
      content: "المادة عبارة عن برمجة للهاردوير، و مقررها بنزل إلكتروني.",
      studyMethod: "كانت نصيحة من السناير انو يُفَضل انك تمر على الفيديوهات كدا كلها ورا بعض وتحاول تفهمها، بعداك ترجع تبدأ درس درس (لأنو الدروس ليها علاقة ببعض وكل ماتمشي لقدام الفات حيقع ليك أكتر فلما تمر على الفيديوهات حيبقى الفهم أسهل بإذن الله )؛ بالطريقة دي حيقع ليك فهم المادة بإذن الله..🙌🏼 وكمان قِيل انو شيت الدكتورة ماحيكفي بالغرض فممكن ترجع للجزئية بتاعت الVHDL في نهاية كل درس من مرجع فلويد بتاع الرقمية دا حيفيدك في البرمجة..أما بالنسبة للثيوري شيت الدكتورة كفاية ان شاء الله..✅",
      examInfo: "في الغالب بتكون امتحانات المادة دي مكررة، فالناس تركز على الامتحانات القديمة(ضع دائرة في كل الامتحانات بتاعتها مكررة من الامتحانات القديمة والتستات بس في امتحان سنايرنا 26 كان فيها شوية إضافات)، والبرامج كذلك تحل كل البرامج الفي المقرر+الامتحانات القديمة مابتجيك عوجة بإذن الله.. الامتحان بكون بسيط فبالتالي درجات الأسئلة كبيرة فالناس تحاول تضمن الدرجات."
    }
  },
  {
    name: "برمجة هدفية التوجيه OOP",
    description: "البرمجة كائنية التوجه باستخدام C++، الفئات، الوراثة، وتعدد الأشكال.",
    icon: BookOpen,
    color: "text-indigo-400",
    gradient: "from-indigo-500/10 to-purple-500/10",
    telegram: "https://t.me/c/3701824243/9",
    details: {
      title: "البرمجة هدفية التوجيه (OOP)",
      instructor: "د. عزة",
      hours: "ساعتين",
      content: "عبارة عن 9 محاضرات (فيديوهات + بوربوينت).",
      studyMethod: "المادة زي أي مادة من مواد دكتورة عزة المرت علينا؛ محتاجة تركيز تركيز تركيز وفهم وتطبيق كتير (المواد دي بالنسبة لتخصصنا من الأساسيات المهم نعرفها كويس شديد)، لابد من إنك تركز في أي حاجة بتقولها الدكتورة أثناء الشرح، لأنو ممكن جداً تجيب أسئلة في الامتحان من الأسئلة البتطرحها أثناء الشرح، بالإضافة للامتحانات القديمة، لازم تمر على أكبر قدر من الامتحانات القديمة عشان تقدر توقع فهم المادة وتتمرس فيها، وفي أسئلة مكررة في الامتحانات بلا شك طبعاً، باختصار قرايتك تكون من (المحتوى البتنزلو الدكتورة وشرحها، بالإضافة للامتحانات القديمة ).✅",
      examInfo: "طبعاً لايُخفى علينا كلنا طريقة امتحان دكتورة عزة، الامتحان بكون كتير ومحتاج منك تخفف يدك، ماتخش الامتحان إلا وانت مراجع كمية كبيرة من امتحاناتها السابقة، بالإضافة لأنك تكون عملت بطريقة المذاكرة المذكورة فوق👆🏼وبإذن الله تعالى حتكون في السليم.✨"
    }
  }
];

const announcements = [
  { id: 1, text: "تم اكتمال رفع جميع محاضرات مادة برمجة هدفية التوجيه OOP بنجاح.", type: "success" },
  { id: 2, text: "تحديث: مادة التصميم بمساعدة الحاسوب VHDL أصبحت مكتملة الآن على المنصة.", type: "update" },
  { id: 3, text: "إعلان: اكتمال محتوى مادة المعالجات الدقيقة ولغة التجميع بالكامل.", type: "info" },
  { id: 4, text: "جديد: تم الانتهاء من رفع كافة ملفات مادة إلكترونيات القدرة.", type: "success" },
  { id: 5, text: "تنبيه: تم إضافة رابط المنصة الإلكترونية للجامعة في قسم القنوات الرسمية.", type: "update" },
];

const stats = [
  { label: "مهندس ومهندسة", value: "150+", icon: Globe },
  { label: "جامعة السودان", value: "SUST", icon: Cpu },
  { label: "السمستر السادس", value: "S6", icon: Zap },
  { label: "دفعة 2020", value: "ELEX28", icon: ShieldCheck },
];

function ExamCountdown() {
  const targetDate = new Date('2026-08-24T00:00:00');
  const startDate = new Date('2026-06-01T00:00:00'); // Benchmark start date
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalHours: 0,
    progress: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const totalDuration = targetDate.getTime() - startDate.getTime();
      const elapsed = now.getTime() - startDate.getTime();
      const progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        const totalHours = Math.floor(difference / (1000 * 60 * 60));

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
          totalHours,
          progress,
          isExpired: false
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          totalHours: 0,
          progress: 100,
          isExpired: true
        });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format dynamic deadline text based on remaining time
  const getDeadlineText = () => {
    if (timeLeft.isExpired) {
      return "بدأت الامتحانات 🔥";
    }
    if (timeLeft.days >= 1) {
      return `Deadline ${timeLeft.days} ${timeLeft.days === 1 ? 'day' : 'days'}`;
    }
    if (timeLeft.hours >= 1) {
      return `Deadline ${timeLeft.hours} ${timeLeft.hours === 1 ? 'hour' : 'hours'}`;
    }
    if (timeLeft.minutes >= 1) {
      return `Deadline ${timeLeft.minutes} minutes`;
    }
    return `Deadline ${timeLeft.seconds} seconds`;
  };

  const isUrgent = !timeLeft.isExpired && timeLeft.days <= 3;
  const isCritical = !timeLeft.isExpired && timeLeft.days < 1;

  const timeUnits = [
    { label: "أيام", value: timeLeft.days, color: "text-red-400" },
    { label: "ساعات", value: timeLeft.hours, color: "text-amber-400" },
    { label: "دقائق", value: timeLeft.minutes, color: "text-cyan-400" },
    { label: "ثواني", value: timeLeft.seconds, color: "text-white" },
  ];

  return (
    <section id="exam-countdown" className="py-12 sm:py-16 md:py-24 px-3 sm:px-6 relative overflow-hidden">
      {/* Background Atmosphere Lights */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/10 via-transparent to-[#02050e] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] sm:w-[500px] h-[250px] sm:h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border border-red-500/20 bg-[#050814]/90 backdrop-blur-2xl p-4 sm:p-7 md:p-10 rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]"
        >
          {/* Header Circuit Edge Accent */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-red-600 via-amber-500 to-electron-accent shadow-[0_0_15px_#ef4444]" />
          <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Top Section Header */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-[10px] sm:text-xs font-bold mb-3 sm:mb-4 font-mono tracking-wider sm:tracking-widest uppercase shadow-sm">
                <Clock size={13} className="animate-pulse text-red-400 shrink-0" />
                <span>EXAM COUNTDOWN • TERM 06 • 24 AUG 2026</span>
              </div>
              <h2 className="text-xl sm:text-3xl md:text-5xl font-black font-cairo mb-2 sm:mb-3 text-white tracking-tight">
                الوقت المتبقي <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400">للامتحانات النهائية</span>
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-cairo leading-relaxed px-1">
                موعد انطلاق الامتحانات النهائية يوم <strong className="text-red-400 font-mono">24 أغسطس 2026</strong>.. استثمر كل ساعة في المذاكرة والتحضير!
              </p>
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                DYNAMIC DEADLINE TEXT & STATUS
               ══════════════════════════════════════════════════════════════════ */}
            <div className="text-center mb-6 sm:mb-8 md:mb-10">
              <motion.div 
                key={getDeadlineText()}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-block"
              >
                <div className="text-2xl sm:text-4xl md:text-6xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_25px_rgba(239,68,68,0.6)]">
                  <span className="text-red-500">{getDeadlineText().split(' ')[0]} </span>
                  <span className="text-white">{getDeadlineText().split(' ').slice(1).join(' ')}</span>
                </div>
              </motion.div>
              
              {/* Humorous and motivating nudge */}
              <p className="text-gray-300 text-xs sm:text-sm md:text-base font-cairo mt-2.5 sm:mt-3 font-medium flex items-center justify-center gap-1.5 sm:gap-2">
                <span>القاتل قرب... شد حيلك يا ELEX28 😈📚</span>
              </p>

              {/* Urgency Status Badge */}
              <div className="mt-3 flex items-center justify-center">
                <span className={`text-[10px] sm:text-xs font-cairo font-bold px-3 py-1 rounded-full border text-center ${
                  isCritical 
                    ? 'bg-red-500/20 text-red-400 border-red-500/40 animate-pulse'
                    : isUrgent 
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                    : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                }`}>
                  {timeLeft.isExpired 
                    ? '🔥 فترة الامتحانات جارية حالياً' 
                    : isCritical 
                    ? '🔴 الساعات الأخيرة قبل موعد الامتحان!' 
                    : isUrgent 
                    ? '🟠 مرحلة المراجعة المكثفة وحل الامتحانات السابقة' 
                    : '🟢 الوقت متاح للتحصيل والفهم المتأني'}
                </span>
              </div>
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                LIVE NUMERICAL COUNTDOWN CARDS (Days / Hours / Mins / Secs)
               ══════════════════════════════════════════════════════════════════ */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
              {timeUnits.map((unit, idx) => (
                <div key={idx} className="relative group">
                  <div className="border border-white/10 bg-black/50 backdrop-blur-xl p-3 sm:p-5 md:p-7 rounded-xl sm:rounded-2xl flex flex-col items-center justify-center group-hover:border-red-500/40 group-hover:shadow-[0_0_25px_rgba(239,68,68,0.2)] transition-all duration-300">
                    <span className={`text-2.5xl sm:text-4xl md:text-6xl font-black font-mono mb-0.5 sm:mb-1 tracking-tighter ${unit.color}`}>
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] sm:text-xs font-bold font-cairo text-gray-400 tracking-wider">
                      {unit.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* ══════════════════════════════════════════════════════════════════
                CLEAN, RESPONSIVE PROGRESS BAR CARD
               ══════════════════════════════════════════════════════════════════ */}
            <div className="relative bg-[#070b19]/90 p-3.5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-red-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden" dir="rtl">
              
              {/* Subtle ambient lighting */}
              <div className="absolute top-0 right-0 w-48 sm:w-64 h-24 sm:h-32 bg-red-600/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 sm:w-64 h-24 sm:h-32 bg-cyan-500/10 blur-3xl pointer-events-none" />

              {/* Progress Header & Percentage */}
              <div className="flex justify-between items-center text-xs sm:text-sm font-mono font-bold mb-3 sm:mb-4 border-b border-white/5 pb-2.5 sm:pb-3">
                <div className="flex items-center gap-1.5 sm:gap-2 font-cairo text-gray-300 text-[11px] sm:text-xs md:text-sm">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-ping shrink-0" />
                  <span>مؤشر اقتراب موعد الامتحان</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-gray-400 text-[10px] sm:text-xs font-mono">المنقضي:</span>
                  <span className="text-red-400 text-xs sm:text-sm md:text-base font-mono font-black bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
                    {Math.round(timeLeft.progress)}%
                  </span>
                </div>
              </div>

              {/* ── INTERACTIVE SCENE: FIXED STUDENT AT FAR LEFT (FINISH LINE) + KILLER ADVANCING ALONG RUNWAY ── */}
              <div className="relative flex items-end gap-1.5 sm:gap-3 md:gap-5 mb-2 select-none" dir="ltr">
                
                {/* ── 1. THE STUDENT FINISH LINE (Fixed outside the bar at Far Left) ── */}
                <div className="flex-shrink-0 relative flex flex-col items-center justify-end z-20 pb-0.5 w-[58px] sm:w-[80px] md:w-[100px]">
                  {/* Desk Light Cone with ambient glow */}
                  <div 
                    className={`absolute -top-7 sm:-top-9 left-0 w-18 sm:w-24 h-22 sm:h-28 bg-gradient-to-b ${
                      isCritical 
                        ? 'from-red-500/30 via-amber-400/20 to-transparent animate-pulse' 
                        : 'from-white/25 via-cyan-400/10 to-transparent'
                    } pointer-events-none rounded-full blur-sm`}
                    style={{ clipPath: 'polygon(0% 0%, 40% 0%, 100% 100%, 0% 100%)' }}
                  />

                  {/* Student Silhouette SVG (Facing Right towards desk & upcoming deadline) */}
                  <svg 
                    viewBox="0 0 120 120" 
                    className={`w-12 h-12 sm:w-16 sm:h-16 md:w-22 md:h-22 ${
                      isCritical 
                        ? 'drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]' 
                        : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]'
                    }`}
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Desk Lamp */}
                    <path d="M24 18 Q 32 18 36 32 L 40 65" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 14 L 34 24 L 18 26 Z" fill="#ffffff" />
                    <circle cx="26" cy="24" r="2.5" fill={isCritical ? "#ff2222" : "#00f2ff"} className="animate-pulse" />

                    {/* Study Desk & Legs (Vibrates subtly when writing frantically) */}
                    <motion.g
                      animate={isCritical ? { x: [-0.4, 0.4, -0.4], y: [0, -0.3, 0] } : {}}
                      transition={{ duration: 0.1, repeat: Infinity }}
                    >
                      <rect x="10" y="66" width="75" height="5" rx="2" fill="#ffffff" />
                      <line x1="18" y1="71" x2="16" y2="108" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                      <line x1="78" y1="71" x2="80" y2="108" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />

                      {/* Notebook & Open Book */}
                      <path d="M36 66 L 52 62 L 68 66 L 52 65 Z" fill="#ffffff" />
                      <line x1="52" y1="62" x2="52" y2="66" stroke="#94a3b8" strokeWidth="1" />

                      {/* Laptop Screen with Dynamic Glow */}
                      <rect x="16" y="52" width="18" height="14" rx="1.5" fill="#0f172a" stroke="#ffffff" strokeWidth="1.5" />
                      <rect 
                        x="18" y="54" width="14" height="10" rx="0.5" 
                        fill={isCritical ? "#ef4444" : "#00f2ff"} 
                        opacity="0.9" 
                        className="animate-pulse" 
                      />
                    </motion.g>

                    {/* Student Chair */}
                    <path d="M84 68 L 98 68 L 96 108" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="100" y1="52" x2="98" y2="80" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
                    <line x1="98" y1="80" x2="100" y2="108" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

                    {/* Student Body (Leans deeper over the desk when <24 hours left) */}
                    <motion.path 
                      d={isCritical 
                        ? "M96 64 C 92 48, 76 46, 68 50 L 60 66 L 78 68 Z" 
                        : "M94 62 C 92 54, 82 52, 74 54 L 66 66 L 82 68 Z"
                      } 
                      fill="#ffffff"
                      animate={isCritical ? { y: [0, -1.2, 0] } : {}}
                      transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <path d="M86 68 L 72 70 L 74 100" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />

                    {/* Stress Sweat Droplet when under 24 hours */}
                    {isCritical && (
                      <motion.path 
                        d="M80 34 C 78 32, 78 29, 80 28 C 82 29, 82 32, 80 34 Z" 
                        fill="#38bdf8" 
                        animate={{ y: [0, 8, 16], opacity: [0, 1, 0] }} 
                        transition={{ duration: 0.7, repeat: Infinity, ease: "easeIn" }} 
                      />
                    )}

                    {/* Student Head (Speed and agitation increases when <24h) */}
                    <motion.g
                      animate={{ 
                        y: isCritical ? [0, -3.5, 1, -2, 0] : (isUrgent ? [0, -2, 0] : [0, -1.5, 0]), 
                        rotate: isCritical ? [0, -8, 3, -5, 0] : (isUrgent ? [0, -4, 0] : [0, -2, 0]) 
                      }}
                      transition={{ 
                        duration: isCritical ? 0.3 : (isUrgent ? 0.8 : 2), 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <circle cx={isCritical ? "68" : "72"} cy={isCritical ? "39" : "42"} r="7.5" fill="#ffffff" />
                      {isCritical && (
                        <line x1="77" y1="36" x2="81" y2="34" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
                      )}
                    </motion.g>

                    {/* Student Arm & Pen (frantic writing motion) */}
                    <motion.g
                      animate={{ 
                        x: isCritical ? [-4, 5, -3, 4, 0] : (isUrgent ? [-3, 3, 0] : [0, -2, 0]), 
                        y: isCritical ? [-2, 1.5, -1.5, 1, 0] : (isUrgent ? [-1.2, 0.8, 0] : [0, -0.8, 0]) 
                      }}
                      transition={{ 
                        duration: isCritical ? 0.12 : (isUrgent ? 0.45 : 1.2), 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <path 
                        d={isCritical ? "M72 54 Q 60 58 50 62" : "M76 56 Q 66 62 56 64"} 
                        stroke="#ffffff" 
                        strokeWidth="4" 
                        strokeLinecap="round" 
                      />
                      <line 
                        x1={isCritical ? "51" : "57"} 
                        y1={isCritical ? "60" : "62"} 
                        x2={isCritical ? "45" : "52"} 
                        y2={isCritical ? "64" : "65"} 
                        stroke={isCritical ? "#f87171" : "#38bdf8"} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                      />
                      {isCritical && (
                        <circle cx="44" cy="65" r="1.5" fill="#facc15" className="animate-ping" />
                      )}
                    </motion.g>
                  </svg>

                  {/* Finish Line Indicator Pin Marker */}
                  <div className="w-1.5 h-2.5 bg-white shadow-[0_0_8px_#ffffff] rounded-full animate-pulse -mt-1" />
                </div>

                {/* ── 2. THE RUNWAY & PROGRESS BAR (Killer advances from Right towards Left) ── */}
                <div className="flex-1 flex flex-col justify-end min-w-0">
                  
                  {/* Killer Movement Track */}
                  <div className="relative w-full h-[95px] sm:h-[115px] md:h-[135px] mb-1 select-none overflow-visible" dir="ltr">
                    
                    {/* ── THE KILLER / DEATH REAPER WITH SCYTHE (Advancing from Right to Left) ── */}
                    <motion.div 
                      className="absolute bottom-0 z-20 transition-all duration-1000 ease-out pointer-events-none"
                      style={{ 
                        // Right = 0% (left: 96%), Left = 100% (left: 4%)
                        left: `${Math.max(Math.min(100 - timeLeft.progress, 96), 4)}%`, 
                        transform: 'translateX(-50%)' 
                      }}
                      animate={{
                        y: isCritical ? [0, -4, 4, -3, 0] : (isUrgent ? [0, -5, 0] : [0, -6, 0]),
                      }}
                      transition={{
                        duration: isCritical ? 0.25 : (isUrgent ? 1.2 : 2),
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="relative flex flex-col items-center">
                        {/* Glowing Red Backlight */}
                        <div className="absolute -inset-2 bg-red-600/30 rounded-full blur-lg pointer-events-none animate-pulse" />

                        {/* Reaper Silhouette SVG (Facing Left towards Student) */}
                        <svg 
                          viewBox="0 0 100 120" 
                          className="w-11 h-13 sm:w-15 sm:h-17 md:w-19 md:h-22 drop-shadow-[0_0_12px_rgba(239,68,68,0.9)]"
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          {/* Scythe Blade pointing to the left towards student */}
                          <path 
                            d="M62 12 C 42 -5, 12 5, 4 32 C 14 18, 36 12, 54 22 Z" 
                            fill="#ff1f1f" 
                            className="animate-pulse"
                          />
                          <path 
                            d="M56 14 C 38 0, 14 8, 4 32" 
                            stroke="#ffffff" 
                            strokeWidth="1.5" 
                            strokeLinecap="round"
                            opacity="0.9"
                          />
                          {/* Scythe Staff */}
                          <line 
                            x1="55" y1="14" 
                            x2="85" y2="110" 
                            stroke="#7f1d1d" 
                            strokeWidth="3.5" 
                            strokeLinecap="round" 
                          />
                          <line 
                            x1="55" y1="14" 
                            x2="85" y2="110" 
                            stroke="#ef4444" 
                            strokeWidth="1.2" 
                            strokeLinecap="round" 
                          />

                          {/* Reaper Cowl Head */}
                          <path 
                            d="M58 28 C 68 28, 76 38, 74 50 C 72 62, 62 60, 52 60 C 42 60, 36 48, 40 36 C 44 28, 52 28, 58 28 Z" 
                            fill="#dc2626" 
                          />
                          <path 
                            d="M62 38 C 66 44, 65 52, 58 54 C 52 53, 50 44, 54 38 Z" 
                            fill="#1a0000" 
                          />
                          {/* Glowing Red Eye */}
                          <circle cx="57" cy="45" r="2" fill="#ff0044" className="animate-ping" />
                          <circle cx="57" cy="45" r="1.5" fill="#ffffff" />

                          {/* Cloak Silhouette */}
                          <path 
                            d="M74 50 Q 82 75 88 108 Q 72 102 62 108 Q 52 100 42 108 Q 34 85 42 56 Z" 
                            fill="#b91c1c" 
                          />
                          <path 
                            d="M68 54 Q 70 80 75 106 Q 64 98 56 106 Q 48 82 54 56 Z" 
                            fill="#991b1b" 
                          />
                          <circle cx="64" cy="52" r="3.5" fill="#fca5a5" />
                        </svg>

                        {/* Laser Pointer down into the bar */}
                        <div className="w-1.5 h-2.5 bg-red-500 shadow-[0_0_8px_#ef4444] rounded-full animate-pulse -mt-1" />
                      </div>
                    </motion.div>

                  </div>

                  {/* Progress Track & Bar (RTL) */}
                  <div className="relative">
                    <div className="h-3 sm:h-4 w-full bg-slate-950 rounded-full overflow-hidden border border-white/15 p-0.5 shadow-inner" dir="rtl">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${timeLeft.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-gradient-to-l from-red-700 via-red-500 to-red-400 rounded-full shadow-[0_0_18px_rgba(239,68,68,0.8)] relative"
                      >
                        {/* Glowing Leading Edge */}
                        <div className="absolute left-0 top-0 bottom-0 w-2.5 sm:w-3 bg-white rounded-full shadow-[0_0_10px_#ffffff]" />
                      </motion.div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Bottom Timeline Markers */}
              <div className="flex flex-col sm:flex-row justify-between text-[10px] sm:text-xs text-gray-400 font-cairo pt-2.5 sm:pt-3 border-t border-white/5 gap-1.5 sm:gap-2" dir="rtl">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-600 shrink-0" />
                  <span>بداية التحضير: 1 يونيو 2026</span>
                </span>
                <span className="flex items-center gap-1.5 text-white font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping shrink-0" />
                  <span>الامتحان النهائي: 24 أغسطس 2026</span>
                </span>
              </div>
            </div>

            {/* Bottom Meta Badges */}
            <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/10 text-xs font-cairo">
              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-start">
                <Calendar size={16} className="text-red-400 shrink-0" />
                <div className="text-right">
                  <div className="text-white font-bold text-xs sm:text-sm">الإثنين، 24 أغسطس 2026</div>
                  <div className="text-gray-500 text-[9px] sm:text-[10px] font-mono">TARGET EXAM DATE</div>
                </div>
              </div>
              
              <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-start sm:justify-end">
                <Zap size={16} className="text-yellow-400 shrink-0" />
                <div className="text-right sm:text-left">
                  <div className="text-white font-bold text-xs sm:text-sm">السمستر السادس (ELEX28)</div>
                  <div className="text-gray-500 text-[9px] sm:text-[10px] font-mono">ACADEMIC TERM</div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"home" | "results" | "structure" | "materials" | "social">("home");
  const [showWelcome, setShowWelcome] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [showCourses, setShowCourses] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  const [showChannels, setShowChannels] = useState(false);
  const [showSchedulesAlert, setShowSchedulesAlert] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [showPosterModal, setShowPosterModal] = useState(false);
  const [honorSearch, setHonorSearch] = useState("");
  const [honorFilter, setHonorFilter] = useState("all");
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  // Professional body scroll lock when modals are open
  useEffect(() => {
    if (showWelcome || selectedRole || showCourses || showMaterials || showChannels || showSchedulesAlert || selectedCourse || showPosterModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showWelcome, selectedRole, showCourses, showMaterials, showChannels, showSchedulesAlert, selectedCourse, showPosterModal]);

  // Robust smooth scrolling for all anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const targetId = anchor.hash.substring(1);
        
        if (targetId === '') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          window.history.pushState(null, '', '#');
          return;
        }

        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL without jumping
          window.history.pushState(null, '', anchor.hash);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  const coursesWithProfs = [
    { name: "الاتصالات التماثلية", prof: "د. أشرف قسم السيد", hours: 3 },
    { name: "المعالجات الدقيقة ولغة التجميع", prof: "د. خليفة الطيب", hours: 3 },
    { name: "التحليل العددي", prof: "د. ابراهيم", hours: 3 },
    { name: "إلكترونيات القدرة", prof: "د. ريم عبد المنعم", hours: 2 },
    { name: "الحقول الكهرومغناطيسية", prof: "د. فتح الرحمن إسماعيل", hours: 2 },
    { name: "تماثلية 2", prof: "د. فضل حسين", hours: 3 },
    { name: "التصميم بمساعدة الحاسوب VHDL", prof: "د. ريم عبد المنعم", hours: 2 },
    { name: "برمجة هدفية التوجيه OOP", prof: "د. عزة كمال الدين", hours: 2 },
  ];

  const filteredHonorStudents = honorStudents.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(honorSearch.trim().toLowerCase());
    if (!matchesSearch) return false;
    if (honorFilter === "all") return true;
    if (honorFilter === "excellent") return parseFloat(student.gpa) >= 3.25;
    if (honorFilter === "very_good") return parseFloat(student.gpa) < 3.25;
    return true;
  });

  const downloadResultsPDF = () => {
    const tableRows = honorStudents
      .map(
        (s) => `
      <tr class="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
        <td class="px-6 py-4 text-center font-mono text-cyan-400 font-bold">${String(s.rank).padStart(2, '0')}</td>
        <td class="px-6 py-4 font-bold text-white text-right font-cairo">${s.name}</td>
        <td class="px-6 py-4 text-center font-mono text-yellow-400 font-extrabold text-lg">${s.gpa}</td>
        <td class="px-6 py-4 text-center text-gray-400 font-cairo text-sm">${s.grade}</td>
        <td class="px-6 py-4 text-center font-cairo text-xs">
          <span class="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">${s.merit}</span>
        </td>
      </tr>
    `
      )
      .join("");

    const reportHtml = `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>التقرير الرسمي لنتائج السمستر الخامس - دفعة هندسة الإلكترونيات ELEX28</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  cyber: '#020408',
                  panel: 'rgba(13, 17, 23, 0.7)',
                  accent: '#00f2ff',
                  secondary: '#7000ff',
                  gold: '#d4af37',
                }
              }
            }
          }
        </script>
        <style>
          body {
            font-family: 'Cairo', sans-serif;
            background-color: #020408;
            background-image: 
              linear-gradient(rgba(0, 242, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 242, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
          }
          .mono-font {
            font-family: 'JetBrains Mono', monospace;
          }
          @media print {
            body {
              background-color: #ffffff !important;
              color: #000000 !important;
              background-image: none !important;
            }
            .no-print {
              display: none !important;
            }
            .print-border {
              border: 2px solid #000000 !important;
              background: #ffffff !important;
              color: #000000 !important;
              min-height: 100vh;
            }
            .table-hdr {
              background-color: #f3f4f6 !important;
              color: #000000 !important;
            }
            td, th {
              color: #000000 !important;
              border-color: #e5e7eb !important;
            }
            h1, h2, h3, h4, p, span {
              color: #000000 !important;
            }
          }
        </style>
      </head>
      <body class="bg-cyber text-gray-300 min-h-screen p-4 md:p-10 relative selection:bg-accent selection:text-black">
        <div class="max-w-4xl mx-auto border border-white/10 rounded-3xl bg-[#0d1117]/80 backdrop-blur-3xl overflow-hidden p-6 md:p-14 relative print-border shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
          
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.04)_0%,transparent_70%)] pointer-events-none" />
          
          <!-- Heading -->
          <div class="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-8 gap-6">
            <div class="text-right">
              <h1 class="text-2xl md:text-3xl font-black text-white leading-tight font-cairo">جامعة السودان للعلوم والتكنولوجيا</h1>
              <p class="text-gray-400 font-bold text-sm mt-1">كلية الهندسة • قسم هندسة الإلكترونيات</p>
              <p class="text-accent font-mono text-xs mt-2 uppercase tracking-widest font-bold">Electronics Engineering Department (ELEX28)</p>
            </div>
            
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 border border-accent/20 rounded-2xl flex items-center justify-center bg-accent/5 relative overflow-hidden">
                <div class="absolute inset-0 bg-accent/5 animate-pulse" />
                <span class="text-xs text-accent font-mono font-bold tracking-widest">[ELEX28]</span>
              </div>
              <span class="text-[9px] text-gray-500 font-mono mt-1">DOC_REF: EE-S5-OFFICIAL</span>
            </div>
          </div>

          <!-- Metas -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 bg-white/[0.01] p-5 rounded-2xl border border-white/5">
            <div class="text-right">
              <span class="text-xs text-gray-500 block">الفصل الدراسي</span>
              <span class="text-base font-bold text-white font-cairo">السمستر الخامس (Semester 05)</span>
            </div>
            <div class="text-center md:border-x md:border-white/10">
              <span class="text-xs text-gray-500 block">كود الدفعة المرجعي</span>
              <span class="text-base font-bold text-accent font-mono">BATCH_2020_S5</span>
            </div>
            <div class="text-left md:text-left text-right">
              <span class="text-xs text-gray-500 block">تاريخ إصدار النتيجة</span>
              <span class="text-base font-bold text-white font-mono">${new Date().toLocaleDateString('ar-SD', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>

          <!-- Overview -->
          <div class="text-center mb-8">
            <div class="inline-block px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-extrabold text-xs md:text-sm font-cairo mb-4 uppercase tracking-wider">
              بيان مرتبة الشرف الأكاديمي والنتائج العامة
            </div>
            <p class="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-cairo">
              بناءً على اعتماد اللجنة الأكاديمية بقسم هندسة الإلكترونيات للعام 2026م، تصدر الأمانة العامة هذه الوثيقة المشتملة على النخبة المتفوقين الذين أحرزوا معدلاً فصلياً تراكمياً يعادل أو يفوق <strong class="text-yellow-400 font-mono">3.00/4.00</strong>، تقديراً لجهودهم الاستثنائية وتفوقهم العلمي خلال السمستر الخامس.
            </p>
          </div>

          <!-- Table -->
          <div class="overflow-x-auto rounded-2xl border border-white/5 bg-black/40 mb-8 max-w-full">
            <table class="w-full text-right border-collapse">
              <thead>
                <tr class="bg-white/5 border-b border-white/10 text-gray-400 font-cairo text-xs md:text-sm table-hdr">
                  <th class="px-6 py-4 text-center font-bold font-mono">الترتيب</th>
                  <th class="px-6 py-4 text-right font-bold">اسم الطالب / الطالبة</th>
                  <th class="px-6 py-4 text-center font-bold">المعدل (GPA)</th>
                  <th class="px-6 py-4 text-center font-bold">التقدير الفصلي</th>
                  <th class="px-6 py-4 text-center font-bold">التصنيف الاستحقاقي</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-white/5 text-xs md:text-sm">
                ${tableRows}
              </tbody>
            </table>
          </div>

          <!-- Grading Criteria & Stats -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-white/10 pt-8 text-xs">
            <div class="text-right">
              <h3 class="font-bold text-white mb-3 text-sm">نظام التقدير الأكاديمي المتبع:</h3>
              <ul class="space-y-2 text-[11px] text-gray-400 leading-relaxed">
                <li class="flex justify-between items-center border-b border-white/5 pb-1">
                  <span>من 3.40 إلى 4.00:</span>
                  <span class="text-accent font-bold">ممتاز / ممتاز مرتفع (Distinction)</span>
                </li>
                <li class="flex justify-between items-center border-b border-white/5 pb-1">
                  <span>من 3.00 إلى 3.39:</span>
                  <span class="text-purple-400 font-bold">جيد جداً / جيد جداً مرتفع (Very Good)</span>
                </li>
              </ul>
            </div>

            <div class="text-right md:border-r md:border-white/10 md:pr-6">
              <h3 class="font-bold text-white mb-2 text-sm text-right">اعتماد الأمانة الأكاديمية والمجلس الاستشاري:</h3>
              <div class="flex justify-between items-center mt-3 text-[11px]">
                <div class="text-center">
                  <div class="text-gray-500 font-cairo text-[10px]">الأمين الأكاديمي للدفعة</div>
                  <div class="font-bold text-accent text-xs mt-0.5">عمر فتحي علي</div>
                  <div class="text-[8px] text-gray-600 font-mono">EE_ACAD_S6_SIGN</div>
                </div>
                <div class="text-center">
                  <div class="text-gray-500 font-cairo text-[10px]">رابط وليدر الدفعة</div>
                  <div class="font-bold text-yellow-500 text-xs mt-0.5">عمر فتحي علي</div>
                  <div class="text-[8px] text-gray-600 font-mono">ELEX28_OFF_SEAL</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Print control button -->
          <div class="mt-12 text-center no-print">
            <button onclick="window.print()" class="px-8 py-3 bg-gradient-to-r from-accent to-secondary text-black font-extrabold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20 text-sm font-cairo">
              طباعة التقرير الشرفي أو حفظ كـ PDF 📃
            </button>
            <p class="text-[9px] text-gray-600 mt-2 font-mono">ELEX28 Digital Ecosystem • Formal Security Clearance Node</p>
          </div>

        </div>
      </body>
      </html>
    `;

    const blob = new Blob([reportHtml], { type: "text/html;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ELEX28_S5_Honours_Transcript_Report.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-electron-accent selection:text-black relative" dir="rtl">
      <InteractiveBackground />

      {/* Sticky Header Navigation */}
      <nav className="sticky top-0 z-[60] w-full border-b border-white/5 bg-black/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-electron-accent animate-pulse shadow-[0_0_10px_#00ffff]" />
            <div className="tech-font text-xl md:text-2xl font-black gradient-text">ELEX28</div>
            <span className="text-white/40 text-[10px] md:text-xs font-cairo">السمستر السادس</span>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 p-0.5 rounded-xl border border-white/5 font-cairo">
            {[
              { id: "home", label: "الرئيسية", icon: Home },
              { id: "results", label: "لوحة الشرف", icon: Trophy },
              { id: "structure", label: "مجلس الدفعة", icon: Users },
              { id: "materials", label: "الخدمات والدراسة", icon: BookOpen },
              { id: "social", label: "تواصل معنا", icon: MessageSquare }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id as any);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-bold transition-all relative cursor-pointer ${
                    isActive
                      ? "text-black bg-gradient-to-r from-electron-accent to-electron-secondary"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 font-cairo">
            <a
              href="https://t.me/+Agkt05rV37tmODc0"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 hover:border-violet-500/50 text-violet-400 hover:shadow-[0_0_15px_rgba(168,85,247,0.25)] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
            >
              <Send size={13} className="text-violet-400" />
              منظومة التلغرام
            </a>
          </div>
        </div>
      </nav>

      {/* Main Tabbed Views Container */}
      <main className="flex-grow pb-16 md:pb-0">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              {/* Hero Section */}
              <header className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden py-10 md:py-20 lg:min-h-[85vh]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00ffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        {/* Sleek Futuristic Rotating HUD Radar / Design Accent */}
        <div className="absolute opacity-[0.15] pointer-events-none hidden lg:block right-10 top-24 w-[350px] h-[350px]">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_60s_linear_infinite] text-electron-accent">
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,3" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <path d="M 50 2 L 50 10 M 50 98 L 50 90 M 2 50 L 10 50 M 98 50 L 90 50" stroke="currentColor" strokeWidth="0.5" />
            <path d="M 15 15 L 85 85 M 15 85 L 85 15" stroke="currentColor" strokeWidth="0.1" />
          </svg>
        </div>

        <div className="absolute opacity-[0.1] pointer-events-none hidden lg:block left-10 bottom-24 w-[280px] h-[280px]">
          <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_30s_linear_infinite_reverse] text-electron-secondary">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8,4" />
            <polygon points="50,15 54,25 46,25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="z-10 text-center relative max-w-7xl mx-auto w-full px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-3 rounded-full border border-electron-accent/30 bg-electron-accent/10 text-electron-accent text-[10px] md:text-xs font-bold mb-8 md:mb-10 tech-font backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.15)] mx-auto"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-electron-accent animate-pulse shadow-[0_0_10px_#00ffff]" />
            <span className="tracking-[0.15em] md:tracking-[0.25em] h-full flex items-center font-mono">DIGITAL ECOSYSTEM • EST. ELEX28 • TERM_05</span>
          </motion.div>
          
          <h1 className="text-6xl sm:text-8xl md:text-[13rem] font-black mb-4 md:mb-8 tracking-tighter leading-none select-none relative inline-block">
            <span className="gradient-text drop-shadow-[0_0_50px_rgba(0,255,255,0.45)]">ELEX</span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">28</span>
            
            {/* Geometric bounding box corners to give engineering blueprint look */}
            <div className="absolute -top-3 -right-3 w-4 h-4 border-t-2 border-r-2 border-electron-accent/40 pointer-events-none" />
            <div className="absolute -top-3 -left-3 w-4 h-4 border-t-2 border-l-2 border-electron-accent/40 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-4 h-4 border-b-2 border-r-2 border-electron-accent/40 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 border-b-2 border-l-2 border-electron-accent/40 pointer-events-none" />
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 md:space-y-6"
          >
            <div className="flex flex-col items-center">
              <div className="relative inline-block px-4">
                <p className="text-2xl sm:text-3xl md:text-6xl text-white font-black font-cairo tracking-tight mb-2 leading-tight">
                  المركز الرقمي المتكامل لطلاب <span className="text-electron-accent relative inline-block">هندسة الإلكترونيات <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-electron-accent to-electron-secondary blur-[1px]" /></span>
                </p>
              </div>
              
              <p className="text-sm sm:text-base md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium px-4 mt-4 md:mt-6 font-cairo">
                بوابة السمستر السادس الأكاديمية | <span className="text-electron-secondary font-bold">دفعة 2020</span>
                <br />
                <span className="text-[9px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.25em] opacity-50 font-mono">Sudan University of Science & Technology</span>
              </p>
            </div>
          </motion.div>

          {/* High-Tech Diagnostics Dashboard Node Panel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mt-12 md:mt-16 text-right px-4"
          >
            <div className="border border-white/5 bg-black/40 backdrop-blur-xl p-4 md:p-5 rounded-2xl flex items-center justify-between group hover:border-electron-accent/40 hover:bg-electron-accent/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-electron-secondary opacity-40 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="text-[9px] text-gray-500 uppercase font-mono tracking-widest mb-1">TELEMETRY MATRIX</div>
                <div className="text-xs md:text-base font-bold text-white font-cairo">السمستر السادس</div>
              </div>
              <div className="text-electron-secondary font-mono text-xs md:text-sm font-bold bg-electron-secondary/10 py-1 px-3 rounded-lg border border-electron-secondary/15">TERM_06</div>
            </div>

            <div className="border border-white/5 bg-black/40 backdrop-blur-xl p-4 md:p-5 rounded-2xl flex items-center justify-between group hover:border-electron-accent/40 hover:bg-electron-accent/[0.02] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500 opacity-40 group-hover:opacity-100 transition-opacity" />
              <div>
                <div className="text-[9px] text-gray-500 uppercase font-mono tracking-widest mb-1">COMPASS MATCH</div>
                <div className="text-xs md:text-base font-bold text-white font-cairo">جامعة السودان</div>
              </div>
              <div className="text-yellow-400 font-mono text-xs md:text-sm font-bold bg-yellow-500/10 py-1 px-3 rounded-lg border border-yellow-500/15">SUST</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-6 px-6 w-full max-w-5xl mx-auto"
          >
            <a href="#exam-countdown" className="w-full lg:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-electron-accent to-electron-secondary text-black font-extrabold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 font-cairo shadow-[0_10px_35px_rgba(0,242,255,0.25)] text-center text-base md:text-lg flex items-center justify-center gap-2 border border-electron-accent/30">
              <span className="relative z-10 flex items-center justify-center gap-2 text-black">
                <Clock size={18} className="animate-pulse" />
                عداد قرب الامتحانات (24 أغسطس)
              </span>
            </a>
            <a href="#results" className="w-full lg:w-auto group px-8 md:px-12 py-4 md:py-5 glass-panel border-white/10 hover:border-yellow-500/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 font-cairo backdrop-blur-md text-center text-white font-bold text-base md:text-lg flex items-center justify-center gap-2">
              <Trophy size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              لوحة الشرف والنتائج
            </a>
            <a href="#resources" className="w-full lg:w-auto group px-8 md:px-12 py-4 md:py-5 glass-panel border-white/10 hover:border-electron-accent/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 font-cairo backdrop-blur-md text-center text-white font-bold text-base md:text-lg relative overflow-hidden flex items-center justify-center gap-2">
              <Zap size={18} className="text-electron-accent animate-pulse" />
              بوابة الخدمات الرقمية
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="absolute bottom-8 md:bottom-12 flex flex-col items-center gap-2 text-electron-accent/30"
        >
          <span className="text-[8px] md:text-[10px] tech-font tracking-[0.35em] uppercase font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-electron-accent/50 to-transparent animate-pulse" />
        </motion.div>
      </header>

      {/* Stats Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel neon-card neon-glow p-6 md:p-8 text-center group hover:border-electron-accent/40 transition-all"
              >
              <div className="flex flex-col items-center justify-center text-center">
                <stat.icon className="mb-3 md:mb-4 text-electron-accent group-hover:scale-110 transition-transform" size={24} />
                <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 tech-font">{stat.value}</div>
                <div className="text-gray-500 text-[10px] md:text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Prominent Exam Countdown Timer Section on Homepage */}
      <ExamCountdown />

      {/* Elegant Navigation Shortcuts Bento Grid */}
      <section className="py-12 md:py-16 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-10 text-center">
          <span className="text-electron-accent font-mono text-[10px] tracking-widest uppercase block mb-2">[ QUICK ACTIONS GATEWAY ]</span>
          <h3 className="text-2xl md:text-5xl font-extrabold text-white font-cairo">بوابات الدخول السريع</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Results Card */}
          <div 
            onClick={() => { setActiveTab("results"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="border border-white/5 bg-[#050914]/40 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden group hover:border-yellow-500/40 hover:shadow-[0_0_30px_rgba(212,175,55,0.08)] cursor-pointer transition-all duration-400 text-right flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-1.5 h-full bg-yellow-500 opacity-60 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="text-yellow-400 text-[9px] font-mono tracking-widest mb-4">ACADEMICS PORTAL</div>
              <Trophy size={32} className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-2 font-cairo">لوحة الشرف والنتائج</h4>
              <p className="text-gray-500 text-xs md:text-sm mb-4 leading-relaxed font-cairo">
                بيان النخبة والمتفوقين الذين حصلوا على التكريم الأكاديمي، لوحة الصدارة وعرض البوستر الرسمي.
              </p>
            </div>
            <div className="text-yellow-500 text-xs font-bold flex items-center justify-end gap-1 mt-auto">
              تصفح النتائج <ChevronDown size={12} className="-rotate-90" />
            </div>
          </div>

          {/* 2. Council Structure Card */}
          <div 
            onClick={() => { setActiveTab("structure"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="border border-white/5 bg-[#050914]/40 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden group hover:border-electron-accent/40 hover:shadow-[0_0_30px_rgba(0,242,255,0.08)] cursor-pointer transition-all duration-400 text-right flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-1.5 h-full bg-electron-accent opacity-60 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="text-electron-accent text-[9px] font-mono tracking-widest mb-4">ADMINISTRATION STRUCTURE</div>
              <Users size={32} className="text-electron-accent mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-2 font-cairo">هيكل وممثلو الدفعة</h4>
              <p className="text-gray-500 text-xs md:text-sm mb-4 leading-relaxed font-cairo">
                التعرف على ممثلي الدفعة، الأمانة الأكاديمية والمالية والاجتماعية ومهام كل منهم بالتفصيل.
              </p>
            </div>
            <div className="text-electron-accent text-xs font-bold flex items-center justify-end gap-1 mt-auto">
              عرض الممثلين <ChevronDown size={12} className="-rotate-90" />
            </div>
          </div>

          {/* 3. Resources Card */}
          <div 
            onClick={() => { setActiveTab("materials"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="border border-white/5 bg-[#050914]/40 backdrop-blur-md p-8 rounded-3xl relative overflow-hidden group hover:border-electron-secondary/40 hover:shadow-[0_0_30px_rgba(112,0,255,0.08)] cursor-pointer transition-all duration-400 text-right flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-1.5 h-full bg-electron-secondary opacity-60 group-hover:opacity-100 transition-opacity" />
            <div>
              <div className="text-electron-secondary text-[9px] font-mono tracking-widest mb-4">SERVICES & CURRICULUM</div>
              <BookOpen size={32} className="text-electron-secondary mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold text-white mb-2 font-cairo">المقررات والخدمات الأكاديمية</h4>
              <p className="text-gray-500 text-xs md:text-sm mb-4 leading-relaxed font-cairo">
                المواد الدراسية، قنوات التلغرام الأكاديمية لكل المواد الدراسية، والملفات المرجعية للهندسة.
              </p>
            </div>
            <div className="text-electron-secondary text-xs font-bold flex items-center justify-end gap-1 mt-auto">
              بوابة الخدمات <ChevronDown size={12} className="-rotate-90" />
            </div>
          </div>
        </div>
      </section>

            </motion.div>
          )}

          {activeTab === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              {/* Results & Honor Roll Portal Section */}
              <section id="results" className="py-20 md:py-32 px-6 border-b border-electron-border relative overflow-hidden">
                {/* Blueprint schematic layout lines */}
                <div className="absolute inset-0 circuit-bg opacity-10 pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-electron-accent/10 pointer-events-none" />
                <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-electron-accent/10 pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                  {/* Header */}
                  <div className="mb-16 md:mb-24 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-[10px] md:text-xs font-bold mb-4 font-mono tracking-widest uppercase">
                      <Trophy size={11} className="animate-pulse" />
                      Semester 05 Academics • Official Release
                    </div>
                    <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 font-cairo text-white">
                      بوابة النتائج و <span className="gradient-text">لوحة الشرف</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-cairo">
                      الإعلان الرسمي لنتائج السمستر الخامس لدفعة <span className="text-electron-accent font-bold font-display">ELEX28</span> عبر المستند الأكاديمي الرقمي المعتمد من قبل الأمانة العامة، واللوحة التكريمية الفخمة لنخبة المتفوقين.
                    </p>
                  </div>

                  {/* 3D Champion Podium for top 3 students */}
                  <div className="mb-20 max-w-5xl mx-auto px-4">
                    <div className="text-center mb-8">
                      <span className="text-yellow-500 font-mono text-[10px] tracking-[0.25em] uppercase block mb-1">[ HONORARY CHAMPIONS PODIUM ]</span>
                      <h3 className="text-xl md:text-3xl font-black text-white font-cairo">فرسان منصة التتويج الأكاديمي للسمستر الخامس</h3>
                    </div>
                    
                    <div className="flex flex-col md:flex-row items-stretch md:items-end justify-center gap-6 mt-12">
                      
                      {/* Silver Medalist - Rank 2 */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="w-full md:w-1/3 order-2 md:order-1 flex flex-col items-center"
                      >
                        <div className="relative mb-4 group shrink-0">
                          <div className="absolute inset-0 rounded-full bg-slate-300/10 blur-xl group-hover:scale-125 transition-transform" />
                          <div className="w-16 h-16 bg-[#0c1220] border-2 border-slate-300 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                            <span className="text-2xl">🥈</span>
                          </div>
                        </div>
                        <div className="text-center bg-slate-500/[0.04] border border-slate-400/15 p-5 rounded-2xl w-full h-[160px] flex flex-col justify-between shadow-lg relative overflow-hidden backdrop-blur-md">
                          <div className="absolute top-0 right-0 w-full h-[1.5px] bg-slate-300/30" />
                          <div>
                            <div className="text-slate-300 font-black text-[9px] font-mono uppercase tracking-widest mb-1.5">RANK 2 • SILVER</div>
                            <div className="text-white font-bold text-sm md:text-base font-cairo truncate">محمد حيدر خضر ادريس</div>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-slate-300 font-mono">3.45</div>
                            <div className="text-[10px] text-slate-400 font-cairo mt-1">مرتبة الشرف الثانية ⭐</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Gold Medalist - Rank 1 */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/3 order-1 md:order-2 flex flex-col items-center"
                      >
                        <div className="relative mb-4 group -mt-6 shrink-0">
                          <div className="absolute inset-0 rounded-full bg-yellow-500/20 blur-2xl group-hover:scale-125 transition-transform" />
                          <div className="w-20 h-20 bg-[#0c1220] border-3 border-yellow-500 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_35px_rgba(234,179,8,0.35)]">
                            <Crown size={28} className="text-yellow-500 fill-yellow-500/10" />
                          </div>
                        </div>
                        <div className="text-center bg-yellow-500/[0.05] border border-yellow-500/30 p-6 rounded-3xl w-full h-[185px] flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-md ring-2 ring-yellow-500/15">
                          <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-amber-500" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.06)_0%,transparent_100%)] pointer-events-none" />
                          <div>
                            <div className="text-yellow-400 font-black text-[9px] font-mono uppercase tracking-widest mb-2 flex items-center justify-center gap-1">
                              <Sparkles size={10} className="text-yellow-400" />
                              CHAMPION OF DEPT • GOLD
                            </div>
                            <div className="text-yellow-400 font-extrabold text-base md:text-lg font-cairo truncate">عهود محمد حسن فرح</div>
                          </div>
                          <div>
                            <div className="text-3xl font-black text-yellow-300 font-mono tracking-wide">3.51</div>
                            <div className="text-xs text-yellow-400 font-extrabold font-cairo mt-1">المرتبة الأولى 🏆</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Bronze Medalist - Rank 3 */}
                      <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="w-full md:w-1/3 order-3 flex flex-col items-center"
                      >
                        <div className="relative mb-4 group shrink-0">
                          <div className="absolute inset-0 rounded-full bg-amber-700/15 blur-xl group-hover:scale-125 transition-transform" />
                          <div className="w-16 h-16 bg-[#0c1220] border-2 border-amber-600 rounded-full flex items-center justify-center relative z-10 shadow-[0_0_20px_rgba(180,83,9,0.15)]">
                            <span className="text-2xl">🥉</span>
                          </div>
                        </div>
                        <div className="text-center bg-amber-700/[0.04] border border-amber-600/25 p-5 rounded-2xl w-full h-[160px] flex flex-col justify-between shadow-lg relative overflow-hidden backdrop-blur-md">
                          <div className="absolute top-0 right-0 w-full h-[1.5px] bg-amber-600/30" />
                          <div>
                            <div className="text-amber-500 font-black text-[9px] font-mono uppercase tracking-widest mb-1.5">RANK 3 • BRONZE</div>
                            <div className="text-white font-bold text-sm md:text-base font-cairo truncate">رهام خالد محمد النور</div>
                          </div>
                          <div>
                            <div className="text-2xl font-black text-amber-500 font-mono">3.39</div>
                            <div className="text-[10px] text-amber-500 font-cairo mt-1">مرتبة الشرف الثالثة ⭐</div>
                          </div>
                        </div>
                      </motion.div>

                    </div>
                  </div>

                  {/* Results Grid Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 text-right">
            
            {/* Left Column (Academic Metas & Poster Trigger) */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8 flex flex-col justify-start">
              <div className="space-y-6">
                {/* General Stats Title */}
                <div className="border border-white/5 bg-black/40 backdrop-blur-md p-6 rounded-3xl relative overflow-hidden group hover:border-electron-accent/30 transition-all duration-300">
                  <div className="absolute top-0 right-0 w-1 h-full bg-electron-accent opacity-50" />
                  <h3 className="text-lg md:text-xl font-bold font-cairo text-white mb-4 flex items-center gap-2">
                    <SlidersHorizontal size={20} className="text-electron-accent" />
                    مؤشرات التفوق الأكاديمي
                  </h3>
                  
                  <div className="space-y-4 font-cairo">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-500 text-xs md:text-sm">نسبة نجاح لوحة الشرف</span>
                      <span className="text-electron-green font-mono font-bold text-sm md:text-base">100%</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-500 text-xs md:text-sm">عدد المنضمين لقائمة الشرف</span>
                      <span className="text-white font-bold text-sm md:text-base">17 مهندس/ة</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-500 text-xs md:text-sm">أعلى معدل فصلي تراكمي</span>
                      <span className="text-yellow-400 font-mono font-bold text-sm md:text-base">3.51</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs md:text-sm">الحد الأدنى لقائمة الشرف</span>
                      <span className="text-yellow-500 font-mono font-semibold text-sm md:text-base">3.00 GPA</span>
                    </div>
                  </div>
                </div>

                {/* Important Clarification Card */}
                <div className="border border-yellow-500/10 bg-yellow-500/[0.02] backdrop-blur-md p-6 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-1 h-full bg-yellow-500 opacity-50" />
                  <span className="text-yellow-400 text-xs font-bold font-cairo px-2.5 py-1 rounded-full bg-yellow-400/10 border border-yellow-500/20 inline-block mb-3">توضيح هام</span>
                  <h4 className="text-white font-bold text-base font-cairo mb-2">بيان النخبة وقائمة المتفوقين</h4>
                  <p className="text-gray-400 text-xs leading-relaxed font-cairo">
                    هذه البوابة مخصصة حصرياً لاستعراض <span className="text-yellow-400 font-bold">لوحة الشرف الأكاديمية</span> للطلاب الحاصلين على معدل فصلي تراكمي يعادل أو يفوق <span className="text-white font-bold">3.00 من 4.00</span>، وليست النتيجة العامة الشاملة لبقية طلاب الدفعة.
                  </p>
                </div>

                {/* High Tech Poster Promotion Card */}
                <div className="border border-electron-accent/20 bg-gradient-to-b from-electron-accent/[0.04] to-transparent p-6 md:p-8 rounded-3xl text-right relative overflow-hidden group hover:border-electron-accent/40 hover:shadow-[0_0_30px_rgba(0,242,255,0.12)] transition-all duration-500">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-electron-accent to-electron-secondary" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-electron-accent/5 blur-3xl pointer-events-none group-hover:bg-electron-accent/10 transition-colors" />

                  <div className="w-12 h-12 rounded-2xl bg-electron-accent/10 flex items-center justify-center text-electron-accent mb-6 border border-electron-accent/20 group-hover:scale-110 transition-transform">
                    <Award size={24} className="animate-pulse" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold font-cairo text-white mb-2">بوستر لوحة الشرف 🖼️</h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-6 font-cairo">
                    قم باستعراض بوستر الشرف الجرافيكي الأنيق المصمم خصيصاً لتكريم نخبة المتميزين بقسم هندسة الإلكترونيات.
                  </p>

                  <button
                    onClick={() => setShowPosterModal(true)}
                    className="w-full py-4 bg-gradient-to-r from-electron-accent to-electron-secondary text-black font-extrabold text-sm md:text-base rounded-2xl hover:scale-[1.03] active:scale-95 transition-all shadow-lg shadow-electron-accent/20 flex items-center justify-center gap-2 font-cairo cursor-pointer"
                  >
                    استعراض البوستر الشرفي الفاخر
                  </button>
                </div>
              </div>
            </div>

            {/* Right Columns (Interactive Honor Board Cards Grid) */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8">
              {/* Search and Filters Header bar */}
              <div className="border border-white/5 bg-black/40 backdrop-blur-md p-4 md:p-6 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.01] pointer-events-none" />
                
                {/* Search input */}
                <div className="relative w-full md:w-72">
                  <input 
                    type="text" 
                    placeholder="ابحث عن اسم مهندس متفوق..."
                    value={honorSearch}
                    onChange={(e) => setHonorSearch(e.target.value)}
                    className="w-full bg-[#05070e] border border-white/10 rounded-2xl py-3 px-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-electron-accent/50 focus:shadow-[0_0_15px_rgba(0,242,255,0.15)] transition-all font-cairo text-right pr-4 pl-12"
                  />
                  <Search className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-electron-accent" size={18} />
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap items-center gap-2 justify-end w-full md:w-auto font-cairo">
                  <button
                    onClick={() => setHonorFilter("all")}
                    className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${honorFilter === "all" ? 'bg-electron-accent border-electron-accent text-black shadow-[0_0_15px_rgba(0,242,255,0.25)]' : 'bg-transparent border-white/10 text-gray-400 hover:text-white'}`}
                  >
                    كل المتفوقين ({honorStudents.length})
                  </button>
                  <button
                    onClick={() => setHonorFilter("excellent")}
                    className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${honorFilter === "excellent" ? 'bg-yellow-500 border-yellow-500 text-black shadow-[0_0_15px_rgba(212,175,55,0.25)]' : 'bg-transparent border-white/10 text-gray-400 hover:text-white'}`}
                  >
                    فئة الامتياز ⭐ (6)
                  </button>
                  <button
                    onClick={() => setHonorFilter("very_good")}
                    className={`px-4 py-2 text-xs font-bold rounded-xl border transition-all ${honorFilter === "very_good" ? 'bg-purple-600 border-purple-600 text-white shadow-[0_0_15px_rgba(112,0,255,0.25)]' : 'bg-transparent border-white/10 text-gray-400 hover:text-white'}`}
                  >
                    فئة جيد جداً 🎖️ (11)
                  </button>
                </div>
              </div>

              {/* Honor Roll List Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar border border-white/5 bg-black/10 p-4 rounded-3xl">
                <AnimatePresence mode="popLayout">
                  {filteredHonorStudents.map((student) => {
                    const rank = student.rank;
                    const isRank1 = rank === 1;
                    const isRank2 = rank === 2;
                    const isRank3 = rank === 3;
                    const isTop3 = rank <= 3;

                    // Class customization based on rank
                    let cardBorder = "border-white/5 bg-[#05070f]/70 hover:border-electron-accent/40 hover:bg-[#080d1a]/80 hover:shadow-[0_0_20px_rgba(0,242,255,0.08)]";
                    let glowBg = "bg-electron-accent/5";
                    let badgeBg = "bg-electron-accent/10 text-electron-accent border-electron-accent/20";
                    let gpaText = "text-electron-accent";
                    let badgeLabelColor = "text-cyan-400";
                    let badgeIcon = "🎖️";

                    if (isRank1) {
                      cardBorder = "border-yellow-500/40 bg-gradient-to-br from-yellow-500/[0.08] to-[#040810]/95 hover:border-yellow-400/80 hover:shadow-[0_0_25px_rgba(234,179,8,0.25)] ring-1 ring-yellow-500/20";
                      glowBg = "bg-yellow-500/10";
                      badgeBg = "bg-gradient-to-r from-yellow-400 to-amber-500 text-black border-yellow-300 font-bold shadow-[0_0_12px_rgba(234,179,8,0.25)]";
                      gpaText = "text-yellow-400";
                      badgeLabelColor = "text-yellow-400 font-extrabold";
                      badgeIcon = "🏆";
                    } else if (isRank2) {
                      cardBorder = "border-slate-300/30 bg-gradient-to-br from-slate-400/[0.04] to-[#040810]/95 hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.18)] ring-1 ring-slate-400/15";
                      glowBg = "bg-slate-300/10";
                      badgeBg = "bg-gradient-to-r from-slate-200 to-slate-400 text-black border-slate-100 font-bold shadow-[0_0_12px_rgba(255,255,255,0.15)]";
                      gpaText = "text-slate-300";
                      badgeLabelColor = "text-slate-300 font-bold";
                      badgeIcon = "🥈";
                    } else if (isRank3) {
                      cardBorder = "border-amber-600/30 bg-gradient-to-br from-amber-700/[0.04] to-[#040810]/95 hover:border-amber-500 hover:shadow-[0_0_25px_rgba(217,119,6,0.18)] ring-1 ring-amber-600/15";
                      glowBg = "bg-amber-600/10";
                      badgeBg = "bg-gradient-to-r from-amber-600 to-amber-800 text-white border-amber-500 font-bold shadow-[0_0_12px_rgba(217,119,6,0.2)]";
                      gpaText = "text-amber-500";
                      badgeLabelColor = "text-amber-500 font-bold";
                      badgeIcon = "🥉";
                    }

                    return (
                      <motion.div
                        key={student.name}
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className={`${cardBorder} p-5 rounded-2xl transition-all duration-300 relative overflow-hidden group text-right cursor-default`}
                      >
                        <div className={`absolute top-0 right-0 w-24 h-24 rounded-full ${glowBg} blur-2xl transform translate-x-10 -translate-y-10 group-hover:scale-150 transition-all duration-500 pointer-events-none`} />
                        
                        <div className="flex items-center gap-4 relative z-10 text-right">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-mono font-bold text-lg border ${badgeBg}`}>
                            {isRank1 ? "01" : isRank2 ? "02" : isRank3 ? "03" : String(rank).padStart(2, '0')}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm md:text-base font-cairo truncate group-hover:text-electron-accent transition-colors">
                              {student.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className={`text-[11.5px] font-mono font-extrabold ${gpaText}`}>GPA: {student.gpa}</span>
                              <span className="text-[10px] text-gray-500">•</span>
                              <span className="text-[11px] text-gray-400 font-cairo">{student.grade}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] relative z-10">
                          <span className="text-gray-500 font-mono tracking-widest uppercase text-[8px]">STATUS_ACAD_MINISTER_OK</span>
                          <span className={`font-bold font-cairo flex items-center gap-1 ${badgeLabelColor}`}>
                            {badgeIcon} {student.badge.replace(/🏆|⭐|🎖️/g, "").trim()}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {filteredHonorStudents.length === 0 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="col-span-full py-20 text-center text-gray-500 font-cairo"
                    >
                      لا يوجد طلاب متفوقين يطابقون خيارات البحث الحالية.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>

            </motion.div>
          )}

          {activeTab === "structure" && (
            <motion.div
              key="structure"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              {/* Structure Section */}
              <section id="structure" className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto w-full relative">
                {/* Header */}
                <div className="mb-14 md:mb-20 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electron-accent/10 border border-electron-accent/30 text-electron-accent text-[10px] md:text-xs font-bold mb-4 font-mono tracking-widest uppercase">
                    <ShieldCheck size={14} className="animate-pulse text-electron-accent" />
                    EXECUTIVE ENGINEERING COUNCIL • ELEX28
                  </div>
                  <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 font-cairo text-white tracking-tight">
                    بطاقات مجلس <span className="gradient-text">إدارة الدفعة</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-cairo">
                    بطاقات التعريف الرقمية الرسمية لأعضاء المجلس القيادي والأمانات التخصصية المسؤولة عن تسيير كافة الشؤون الأكاديمية والمالية والإعلامية والرياضية والثقافية.
                  </p>
                </div>

                {/* Council Members ID Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {roles.map((role, index) => {
                    const RoleIcon = role.icon;
                    return (
                      <motion.div
                        key={role.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -8 }}
                        transition={{ delay: index * 0.05, duration: 0.4 }}
                        className={`border ${role.borderColor || 'border-white/10'} bg-[#060a17]/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300 ${role.glowColor || ''}`}
                      >
                        {/* Ambient Glow & Accent Bar */}
                        <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${role.accentGlow || 'bg-electron-accent/10'} blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-electron-accent transition-all duration-500" />
                        
                        <div>
                          {/* Top Bar: ID Code & Status Badge */}
                          <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10 relative z-10">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-electron-accent animate-ping" />
                              <span className="text-[10px] md:text-xs font-mono font-bold text-gray-400 tracking-wider">
                                {role.idCode || `ELEX28-0${index+1}`}
                              </span>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-[9px] md:text-[10px] font-mono font-bold border tracking-widest ${role.badgeBg || 'bg-white/10 text-white'}`}>
                              [{role.badge || 'MEMBER'}]
                            </span>
                          </div>

                          {/* Profile Header & Avatar */}
                          <div className="flex items-start gap-4 mb-6 relative z-10">
                            {/* Avatar Circle */}
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${role.avatarBg || 'bg-white/10'} border flex items-center justify-center shrink-0 shadow-lg relative group-hover:scale-105 transition-transform duration-300`}>
                              <div className="absolute inset-0 bg-white/5 rounded-2xl animate-pulse pointer-events-none" />
                              <RoleIcon size={32} className={`${role.color} relative z-10`} />
                            </div>

                            {/* Name & Title */}
                            <div className="flex-1 min-w-0 text-right">
                              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
                                {role.roleCategory || 'أمانات الكلية'}
                              </span>
                              <h3 className={`text-xl md:text-2xl font-black font-cairo tracking-tight ${role.color} truncate mb-1`}>
                                {role.title}
                              </h3>
                              <div className="text-white font-extrabold text-base md:text-lg font-cairo truncate">
                                {role.name}
                              </div>
                              {role.deputy && (
                                <div className="text-electron-secondary font-bold text-xs mt-1 font-cairo flex items-center gap-1 justify-end">
                                  <span>النائبة: {role.deputy}</span>
                                  <Sparkles size={12} className="text-electron-secondary animate-pulse" />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Description Statement */}
                          <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-cairo mb-6 line-clamp-3 text-right bg-white/[0.02] p-3.5 rounded-2xl border border-white/5">
                            {role.description}
                          </p>

                          {/* Key Responsibilities Bullet Highlights */}
                          <div className="mb-6 space-y-2 text-right">
                            <span className="text-[10px] font-mono text-electron-accent uppercase tracking-widest block mb-2 font-bold">
                              [ أبرز المهام والمسؤوليات ]
                            </span>
                            {role.tasks.slice(0, 2).map((task, idx) => (
                              <div key={idx} className="flex items-center justify-end gap-2 text-gray-400 text-xs font-cairo">
                                <span className="truncate">{task}</span>
                                <div className={`w-1.5 h-1.5 rounded-full ${role.color} shrink-0`} />
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-3 relative z-10">
                          <a
                            href={`https://wa.me/${role.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-3 px-3 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold font-cairo hover:bg-green-500 hover:text-black transition-all flex items-center justify-center gap-1.5 group/wa"
                          >
                            <MessageSquare size={14} className="group-hover/wa:scale-110 transition-transform" />
                            <span>واتساب</span>
                          </a>

                          <button
                            onClick={() => setSelectedRole(role)}
                            className="py-3 px-3 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold font-cairo hover:bg-electron-accent hover:text-black hover:border-electron-accent transition-all flex items-center justify-center gap-1.5 group/btn"
                          >
                            <span>التفاصيل</span>
                            <ChevronDown size={14} className="-rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </section>

            </motion.div>
          )}

          {activeTab === "materials" && (
            <motion.div
              key="materials"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              {/* Student Resources & Services Section */}
              <section id="resources" className="py-20 md:py-32 px-4 md:px-6 bg-[#030712]/80 border-y border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full circuit-bg opacity-15 pointer-events-none" />
                <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-electron-accent/5 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-electron-secondary/5 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-7xl mx-auto w-full relative z-10">
                  {/* Header */}
                  <div className="mb-14 md:mb-20 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electron-accent/10 border border-electron-accent/30 text-electron-accent text-[10px] md:text-xs font-bold mb-4 font-mono tracking-widest uppercase">
                      <Zap size={14} className="animate-pulse text-electron-accent" />
                      DIGITAL SERVICES & VAULT • ELEX28
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black mb-4 md:mb-6 font-cairo text-white tracking-tight">
                      بوابة <span className="gradient-text">الخدمات الطلابية</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-cairo">
                      منظومة متكاملة من الخدمات الرقمية، التجميعات، الأرشيف الأكاديمي، والجداول المحدثة المخصصة لمهندسي الدفعة بالسمستر السادس.
                    </p>
                  </div>

                  {/* Services Cards Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {studentResources.map((res, i) => {
                      const ResIcon = res.icon;
                      return (
                        <motion.div
                          key={res.id || res.title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          whileHover={{ y: -8 }}
                          transition={{ delay: i * 0.08, duration: 0.4 }}
                          className={`border ${res.borderColor || 'border-white/10'} bg-[#060a17]/90 backdrop-blur-2xl p-6 md:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group transition-all duration-300 ${res.glowColor || ''}`}
                        >
                          {/* Ambient Glow Background */}
                          <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full ${res.accentGlow || 'bg-electron-accent/10'} blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-700`} />
                          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-electron-accent transition-all duration-500" />

                          <div>
                            {/* Top Bar: Tag & Badge */}
                            <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10 relative z-10">
                              <span className="text-[10px] font-mono font-bold text-gray-400 tracking-wider uppercase">
                                [ {res.tag} ]
                              </span>
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold border tracking-wider ${res.badgeBg || 'bg-white/10 text-white'}`}>
                                {res.badgeText}
                              </span>
                            </div>

                            {/* Service Header: Icon & Title */}
                            <div className="flex items-start gap-4 mb-5 relative z-10">
                              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${res.avatarBg || 'bg-white/10'} border flex items-center justify-center shrink-0 shadow-lg relative group-hover:scale-105 transition-transform duration-300`}>
                                <div className="absolute inset-0 bg-white/5 rounded-2xl animate-pulse pointer-events-none" />
                                <ResIcon size={28} className={`${res.color} relative z-10`} />
                              </div>

                              <div className="flex-1 min-w-0 text-right" dir="rtl">
                                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                                  {res.subtitle}
                                </span>
                                <h3 className={`text-xl md:text-2xl font-black font-cairo tracking-tight ${res.color} leading-tight`}>
                                  {res.title}
                                </h3>
                              </div>
                            </div>

                            {/* Main Description */}
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-cairo mb-5 text-right bg-white/[0.02] p-3.5 rounded-2xl border border-white/5" dir="rtl">
                              {res.description}
                            </p>

                            {/* Feature Highlights List */}
                            {res.detailsList && (
                              <div className="mb-6 space-y-2 text-right" dir="rtl">
                                <span className="text-[10px] font-mono text-electron-accent uppercase tracking-widest block mb-2 font-bold">
                                  [ المحتويات والخدمات المتاحة ]
                                </span>
                                {res.detailsList.map((detail: string, idx: number) => (
                                  <div key={idx} className="flex items-center justify-start gap-2 text-gray-400 text-xs font-cairo">
                                    <div className={`w-1.5 h-1.5 rounded-full ${res.color} shrink-0`} />
                                    <span className="truncate">{detail}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* Action Button */}
                          <div className="pt-4 border-t border-white/10 relative z-10">
                            {res.actionType === "external_link" ? (
                              <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-extrabold text-xs md:text-sm font-cairo hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-yellow-500/20 flex items-center justify-center gap-2 group/btn`}
                              >
                                <Send size={16} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                                <span>{res.buttonText}</span>
                              </a>
                            ) : (
                              <button
                                onClick={() => {
                                  if (res.actionType === "materials_modal") setShowMaterials(true);
                                  else if (res.actionType === "schedules_modal") setShowSchedulesAlert(true);
                                  else if (res.actionType === "channels_modal") setShowChannels(true);
                                  else if (res.actionType === "courses_modal") setShowCourses(true);
                                }}
                                className="w-full py-3.5 px-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold text-xs md:text-sm font-cairo hover:bg-electron-accent hover:text-black hover:border-electron-accent transition-all flex items-center justify-center gap-2 group/btn"
                              >
                                <span>{res.buttonText}</span>
                                <ChevronDown size={14} className="-rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </section>

            </motion.div>
          )}

          {activeTab === "social" && (
            <motion.div
              key="social"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="w-full relative"
            >
              {/* Community & Contact Hub Section */}
              <section className="py-16 md:py-28 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full circuit-bg opacity-10 pointer-events-none" />
                <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-electron-accent/10 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                  {/* Header */}
                  <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electron-accent/10 border border-electron-accent/30 text-electron-accent text-[10px] md:text-xs font-bold mb-4 font-mono tracking-widest uppercase">
                      <MessageSquare size={14} className="animate-pulse text-electron-accent" />
                      COMMUNITY HELP DESK & DIRECT CONTACT • ELEX28
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black mb-4 font-cairo text-white tracking-tight">
                      مركز <span className="gradient-text">الدعم والتواصل المباشر</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-cairo leading-relaxed">
                      منظومة متكاملة لتقديم الدعم الأكاديمي والتنظيمي، الاستماع لملاحظاتكم، وتقديم المساعدة لكافة مهندسي الدفعة بالسمستر السادس.
                    </p>
                  </div>

                  {/* Heartfelt Support Banner */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-12 md:mb-16 p-6 md:p-12 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-black/80 to-teal-950/40 border border-emerald-500/40 shadow-[0_10px_40px_rgba(16,185,129,0.15)] relative overflow-hidden text-center"
                  >
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-electron-accent/20 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/40 mb-6 shadow-inner">
                      <ShieldCheck size={32} className="animate-pulse text-emerald-400" />
                    </div>

                    <h3 className="text-xl md:text-3xl font-extrabold text-white font-cairo mb-4 leading-relaxed max-w-3xl mx-auto">
                      "لو أي زول احتاج مساعدة في أي شيء، نحن موجودين وفي الخدمة دائماً إن شاء الله"
                    </h3>
                    <p className="text-gray-300 text-xs md:text-base font-cairo max-w-2xl mx-auto leading-relaxed">
                      سواء كنت تبحث عن شيت دراسي، استفسار عن الساعات المعتمدة والجداول، أو واجهتك أي عقبة أكاديمية أو شخصية، فريق القيادة والأمانات على أتم الاستعداد لمساعدتك في أي وقت.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 font-cairo text-xs font-bold text-emerald-300">
                      <span className="px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                        <CheckCircle2 size={14} /> خدمة الدفعة أولاً
                      </span>
                      <span className="px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                        <Clock size={14} /> متواجدون دائماً
                      </span>
                      <span className="px-3.5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-1.5">
                        <ShieldCheck size={14} /> الخصوصية والسرية التامة
                      </span>
                    </div>
                  </motion.div>

                  {/* Interactive Quick Contact Form */}
                  <div className="p-8 md:p-12 rounded-3xl bg-[#060a17]/90 border border-white/10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-electron-accent/5 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="max-w-2xl mx-auto text-center mb-8">
                      <span className="text-[10px] font-mono font-bold text-electron-accent uppercase tracking-widest block mb-2">
                        [ DIRECT ASSISTANCE FORM ]
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black text-white font-cairo mb-2">
                        أرسل استفسارك أو طلبك مباشرة
                      </h3>
                      <p className="text-gray-400 text-xs md:text-sm font-cairo">
                        اكتب تفاصيل استفسارك وسيتم تحويله تلقائياً لرسالة منسقة عبر الواتساب لرئيس الدفعة للرد عليك فوراً.
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const form = e.target as HTMLFormElement;
                        const name = (form.elements.namedItem('studentName') as HTMLInputElement).value || 'طالب/طالبة بالدفعة';
                        const topic = (form.elements.namedItem('topic') as HTMLSelectElement).value;
                        const msg = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
                        
                        const text = `السلام عليكم ورحمة الله وبركاته،%0Aأنا المهندس/ة: ${encodeURIComponent(name)}%0Aالموضوع: ${encodeURIComponent(topic)}%0Aالرسالة/الاستفسار:%0A${encodeURIComponent(msg)}`;
                        window.open(`https://wa.me/+249118222378?text=${text}`, '_blank');
                      }}
                      className="max-w-xl mx-auto space-y-4 font-cairo text-right"
                      dir="rtl"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-300 mb-1">الاسم الكريم (اختياري)</label>
                          <input
                            type="text"
                            name="studentName"
                            placeholder="مثال: م. أحمد عبد الله"
                            className="w-full bg-black/60 border border-white/10 focus:border-electron-accent rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-300 mb-1">نوع المساعدة المطلوبة</label>
                          <select
                            name="topic"
                            className="w-full bg-black/60 border border-white/10 focus:border-electron-accent rounded-xl px-4 py-3 text-xs text-white outline-none transition-colors"
                          >
                            <option value="استفسار أكاديمي / شيتات ومواد">استفسار أكاديمي / شيتات ومواد</option>
                            <option value="امتحانات السمستر السادس">امتحانات السمستر السادس</option>
                            <option value="الساعات المعتمدة للمواد">الساعات المعتمدة للمواد</option>
                            <option value="اقتراح لتطوير المنصة والخدمات">اقتراح لتطوير المنصة والخدمات</option>
                            <option value="مساعدة شخصية أو عامة">مساعدة شخصية أو عامة</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-300 mb-1">تفاصيل الاستفسار أو الطلب *</label>
                        <textarea
                          name="message"
                          required
                          rows={4}
                          placeholder="اكتب تفاصيل ما تحتاج إليه هنا وستصلنا رسالتك فوراً..."
                          className="w-full bg-black/60 border border-white/10 focus:border-electron-accent rounded-xl p-4 text-xs text-white outline-none transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-electron-accent to-electron-secondary text-black font-extrabold text-sm font-cairo hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-electron-accent/20 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send size={18} />
                        <span>إرسال الطلب مباشرة عبر الواتساب</span>
                      </button>
                    </form>
                  </div>
                </div>
              </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Ultra-Professional & Responsive Cybernetic Footer */}
      <footer className="relative pt-16 pb-28 md:pb-14 px-4 sm:px-6 md:px-10 border-t border-white/10 bg-[#02050e] overflow-hidden font-cairo" dir="rtl">
        {/* Top Glowing Laser Accent & Radial Background Blurs */}
        <div className="absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-electron-accent to-transparent shadow-[0_0_20px_#00ffff]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[180px] bg-electron-accent/10 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
            
            {/* Col 1: Brand & Identity (4 cols) */}
            <div className="lg:col-span-4 space-y-4 text-right">
              <div className="flex items-center gap-3">
                <span className="w-3.5 h-3.5 rounded-full bg-electron-accent animate-pulse shadow-[0_0_15px_#00ffff]" />
                <span className="tech-font text-2xl sm:text-3xl font-black gradient-text tracking-wider">ELEX28</span>
                <span className="px-2.5 py-0.5 rounded-full bg-electron-accent/10 border border-electron-accent/30 text-electron-accent text-[10px] font-mono font-bold tracking-widest">
                  SEMESTER 6 • 20 CH
                </span>
              </div>
              
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm font-cairo">
                المنصة الرقمية المتكاملة لطلاب قسم هندسة الإلكترونيات بالسمستر السادس (دفعة 2020). توفر المكتبة الشاملة، أرشيف الامتحانات، حساب الساعات، والتواصل المباشر.
              </p>

              {/* Quick Communication & Media Channels */}
              <div className="pt-2 space-y-2">
                <span className="text-[10px] font-mono text-gray-400 font-bold uppercase tracking-wider block">
                  قنوات التواصل المباشرة
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a 
                    href="https://wa.me/+249118222378" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="الواتساب المباشر"
                    className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-500/20 text-emerald-400 text-xs font-bold font-cairo transition-all flex items-center gap-2"
                  >
                    <MessageSquare size={14} />
                    <span>واتساب الدفعة</span>
                  </a>
                  <a 
                    href="https://t.me/+9BOzuRr8U80wY2U0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="قناة امتحانات السمستر السادس"
                    className="px-3 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/30 hover:border-yellow-400 hover:bg-yellow-500/20 text-yellow-400 text-xs font-bold font-cairo transition-all flex items-center gap-2"
                  >
                    <FileText size={14} />
                    <span>امتحانات S6</span>
                  </a>
                  <a 
                    href="https://t.me/+Agkt05rV37tmODc0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title="المكتبة الرقمية بالتلغرام"
                    className="px-3 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/20 text-purple-400 text-xs font-bold font-cairo transition-all flex items-center gap-2"
                  >
                    <Send size={14} />
                    <span>المكتبة الرقمية</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links (3 cols) */}
            <div className="lg:col-span-3 space-y-3 text-right">
              <h4 className="text-white font-black text-sm uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Compass size={15} className="text-electron-accent" />
                <span>أقسام المنصة</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-300">
                <li>
                  <button onClick={() => { setActiveTab("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-electron-accent transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-electron-accent/40 group-hover:bg-electron-accent transition-colors" />
                    الرئيسية
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("results"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-electron-accent transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-electron-accent/40 group-hover:bg-electron-accent transition-colors" />
                    لوحة الشرف الأكاديمية
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("structure"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-electron-accent transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-electron-accent/40 group-hover:bg-electron-accent transition-colors" />
                    هيكل ومجلس الدفعة والأمانات
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("materials"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-electron-accent transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-electron-accent/40 group-hover:bg-electron-accent transition-colors" />
                    الخدمات والمكتبة الرقمية
                  </button>
                </li>
                <li>
                  <button onClick={() => { setActiveTab("social"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-electron-accent transition-colors flex items-center gap-2 group cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-electron-accent/40 group-hover:bg-electron-accent transition-colors" />
                    مركز الدعم والتواصل المباشر
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Academic Affiliation (3 cols) */}
            <div className="lg:col-span-3 space-y-3 text-right">
              <h4 className="text-white font-black text-sm uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Globe size={15} className="text-electron-accent" />
                <span>المرجع الأكاديمي</span>
              </h4>
              <div className="space-y-3 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <Globe size={15} className="text-electron-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">جامعة السودان للعلوم والتكنولوجيا</span>
                    <span className="text-gray-400 text-[11px]">كلية الهندسة • المجمع الجناحي</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Zap size={15} className="text-electron-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">قسم هندسة الإلكترونيات</span>
                    <span className="text-gray-400 text-[11px]">السمستر السادس (20 CH) • دفعة 2020</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-white">العام الدراسي 2026</span>
                    <span className="text-gray-400 text-[11px]">منظومة معتمدة من مجلس الدفعة</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Col 4: Platform Badges & Features (2 cols) */}
            <div className="lg:col-span-2 space-y-3 text-right">
              <h4 className="text-white font-black text-sm uppercase tracking-wider border-b border-white/10 pb-2 flex items-center gap-2">
                <Layers size={15} className="text-electron-accent" />
                <span>المزايا</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px]">المكتبة الرقمية</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px]">أرشيف الامتحانات</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px]">لوحة الشرف</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px]">كشف الساعات</span>
                <span className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-[10px]">الدعم المباشر</span>
              </div>
            </div>

          </div>

          {/* Bottom Designer & Developer Signature Bar */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono">
            {/* Rights & Institution Info */}
            <div className="text-center sm:text-right text-gray-400 text-[11px] font-cairo">
              <span>جميع الحقوق محفوظة © 2026 • </span>
              <span className="text-white font-bold">منصة ELEX28 الرقمية</span>
              <span className="text-gray-500"> | جامعة السودان للعلوم والتكنولوجيا</span>
            </div>
            
            {/* Ultra-Professional Designer & Developer Credit */}
            <div className="flex items-center justify-center">
              <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-electron-accent/15 via-black/80 to-electron-secondary/15 border border-electron-accent/40 shadow-[0_0_15px_rgba(0,242,255,0.15)] flex items-center gap-2 text-xs font-cairo">
                <Code size={14} className="text-electron-accent animate-pulse shrink-0" />
                <span className="text-gray-300 font-medium">تم تصميم وتطوير المنصة بواسطة</span>
                <span className="font-black text-electron-accent tracking-wide hover:underline cursor-pointer">
                  omar fathi
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-electron-accent animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation Menu */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/85 backdrop-blur-2xl border-t border-white/5 pb-5 pt-2 px-6 shadow-2xl flex justify-around items-center">
        {[
          { id: "home", label: "الرئيسية", icon: Home },
          { id: "results", label: "لوحة الشرف", icon: Trophy },
          { id: "structure", label: "المجلس", icon: Users },
          { id: "materials", label: "الخدمات", icon: BookOpen },
          { id: "social", label: "تواصل", icon: MessageSquare }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id as any);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex flex-col items-center justify-center gap-1 transition-all focus:outline-none relative py-1 cursor-pointer"
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-electron-accent text-black scale-110 shadow-[0_0_15px_rgba(0,242,255,0.4)]"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                <Icon size={18} />
              </div>
              <span className={`text-[9px] font-bold font-cairo ${isActive ? "text-electron-accent font-black" : "text-gray-500"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
        @media print {
          body {
            background-color: #02050b !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body > *:not(.fixed) {
            display: none !important;
          }
          .fixed:not(:has(#honors-poster-print-node)) {
            display: none !important;
          }
          .fixed:has(#honors-poster-print-node) {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            width: 100% !important;
            height: auto !important;
            overflow: visible !important;
            background: #02050b !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: center !important;
          }
          .fixed:has(#honors-poster-print-node) button,
          .fixed:has(#honors-poster-print-node) .modal-control-bar {
            display: none !important;
          }
          #honors-poster-print-node {
            border: 4px border-double border-yellow-500 !important;
            box-shadow: none !important;
            transform: none !important;
            max-width: 100% !important;
            width: 100% !important;
            padding: 24px !important;
            margin: 0 !important;
            border-radius: 0 !important;
          }
        }
      `}} />

      {/* Modals placed at the end for proper stacking context */}
      <AnimatePresence>
        {showPosterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto text-right"
          >
            {/* Dark abstract overlay for premium look */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,transparent_70%)] pointer-events-none" />
            
            <div className="my-auto max-w-4xl w-full relative">
              {/* Back to main button & control bar */}
              <div className="absolute top-[-50px] right-2 left-2 flex justify-between items-center modal-control-bar">
                <span className="text-yellow-400 font-mono font-bold text-xs tracking-widest hidden sm:inline">[GOLD_ELEX28_POSTER]</span>
                <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
                  <button 
                    onClick={() => {
                      setTimeout(() => {
                        window.print();
                      }, 100);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-400 hover:to-amber-500 text-black font-extrabold text-xs font-cairo flex items-center gap-1.5 rounded-xl cursor-pointer shadow-[0_0_15px_rgba(234,179,8,0.3)] transition-all"
                  >
                    <Printer size={14} />
                    طباعة البوستر بجودة عالية
                  </button>
                  <button 
                    onClick={() => setShowPosterModal(false)}
                    className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl text-yellow-400 hover:text-white transition-colors text-xs font-bold font-cairo flex items-center gap-1 cursor-pointer"
                  >
                    <X size={14} />
                    إغلاق المعاينة
                  </button>
                </div>
              </div>

              {/* The Poster Canvas Frame */}
              <div id="honors-poster-print-node" className="border-4 border-double border-yellow-500/50 bg-[#02050b] p-5 sm:p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)]">
                
                {/* Vintage certificate style corner borders */}
                <div className="absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 border-yellow-500/40 pointer-events-none" />
                <div className="absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 border-yellow-500/40 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 border-yellow-500/40 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 border-yellow-500/40 pointer-events-none" />

                {/* Cyber Electronics Decorative Waves Background */}
                <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
                  <svg className="absolute w-full h-full text-yellow-500/10" viewBox="0 0 800 600" fill="none">
                    <path d="M-100,200 C150,100 250,400 500,200 C750,100 650,400 900,200" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" className="animate-[pulse_3s_infinite]" />
                    <path d="M-100,300 C100,450 300,150 500,300 C700,450 750,150 900,300" stroke="currentColor" strokeWidth="1" />
                    <path d="M-100,150 C200,50 400,450 500,150 C600,50 800,450 900,150" stroke="#fbbf24" strokeWidth="1.5" opacity="0.4" strokeDasharray="10 5" />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-yellow-500/10 rounded-full animate-ping [animation-duration:12s]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-yellow-500/5 rounded-full animate-pulse" />
                </div>

                {/* Advanced Grid: Symmetrical Header with 1:1 Square Cybernetic Neural Board Graphic */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pb-6 border-b border-yellow-500/20 mb-6 relative z-10 items-center">
                  
                  {/* Left Column (Academic Titles & Certification Info) */}
                  <div className="md:col-span-8 text-center md:text-right space-y-3 font-cairo">
                    <div className="flex items-center justify-center md:justify-start gap-2 text-yellow-500 mb-1">
                      <Star size={14} className="text-yellow-400" />
                      <Trophy size={20} className="fill-yellow-500 text-yellow-500 animate-pulse" />
                      <Star size={14} className="text-yellow-400" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold text-gray-500 uppercase tracking-widest block">
                      Sudan University of Science & Technology
                    </span>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 font-cairo">
                      جامعة السودان للعلوم والتكنولوجيا
                    </h2>
                    <p className="text-xs sm:text-sm text-yellow-500/90 font-bold">
                      كلية الهندسة • قسم هندسة الإلكترونيات <span className="font-mono">(ELEX28)</span>
                    </p>
                    
                    <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-2xl shadow-[0_0_15px_rgba(234,179,8,0.1)]">
                      <Crown size={14} className="text-yellow-400" />
                      <span className="text-xs font-black text-yellow-400 tracking-wide">
                        لوحة الشرف الذهبية الرسمية للسمستر الخامس
                      </span>
                    </div>
                  </div>

                  {/* Right Column (1:1 Perfect Square High-Resolution Cyber-Electronic Schematic) */}
                  <div className="md:col-span-4 flex justify-center">
                    <div className="w-40 h-40 sm:w-44 sm:h-44 aspect-square bg-[#030612]/90 border border-yellow-500/30 rounded-3xl p-3 relative overflow-hidden shadow-[0_0_25px_rgba(217,119,6,0.15)] group">
                      {/* Interactive blueprint background grid */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_85%)] pointer-events-none" />
                      
                      {/* SVG Technical Draft */}
                      <svg className="w-full h-full text-yellow-500/40" viewBox="0 0 160 160" fill="none">
                        {/* Blueprint grid lines */}
                        <line x1="10" y1="0" x2="10" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="30" y1="0" x2="30" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="50" y1="0" x2="50" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="70" y1="0" x2="70" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="90" y1="0" x2="90" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="110" y1="0" x2="110" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="130" y1="0" x2="130" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="150" y1="0" x2="150" y2="160" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        
                        <line x1="0" y1="10" x2="160" y2="10" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="30" x2="160" y2="30" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="50" x2="160" y2="50" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="70" x2="160" y2="70" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="90" x2="160" y2="90" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="110" x2="160" y2="110" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="130" x2="160" y2="130" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />
                        <line x1="0" y1="150" x2="160" y2="150" stroke="rgba(217,119,6,0.06)" strokeWidth="0.5" />

                        {/* Outer concentric technical radar ring */}
                        <circle cx="80" cy="80" r="70" stroke="rgba(217,119,6,0.12)" strokeWidth="1" strokeDasharray="4 4" />
                        <circle cx="80" cy="80" r="54" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />

                        {/* Gold-copper neon electronics traces branching off */}
                        <path d="M 12,80 L 45,80 L 55,70 L 62,70" stroke="url(#goldNeonTrace)" strokeWidth="1.2" />
                        <path d="M 148,80 L 115,80 L 105,90 L 98,90" stroke="url(#bronzeNeonTrace)" strokeWidth="1.2" />
                        <path d="M 80,12 L 80,45 L 70,55 L 70,62" stroke="url(#goldNeonTrace)" strokeWidth="1.2" />
                        <path d="M 80,148 L 80,115 L 90,105 L 90,98" stroke="url(#bronzeNeonTrace)" strokeWidth="1.2" />

                        {/* Diagonally angled traces */}
                        <path d="M 28,28 L 52,52 L 62,52" stroke="rgba(217,119,6,0.3)" strokeWidth="1" strokeDasharray="3 2" />
                        <path d="M 132,132 L 108,108 L 98,108" stroke="rgba(217,119,6,0.3)" strokeWidth="1" strokeDasharray="3 2" />
                        <path d="M 132,28 L 108,52 L 98,52" stroke="rgba(217,119,6,0.3)" strokeWidth="1" />
                        <path d="M 28,132 L 52,108 L 62,108" stroke="rgba(217,119,6,0.3)" strokeWidth="1" />

                        {/* Outer gold-electroplated pins */}
                        <circle cx="12" cy="80" r="3.5" stroke="#d4af37" strokeWidth="1.5" className="fill-yellow-500/20" />
                        <circle cx="148" cy="80" r="3.5" stroke="#a75a20" strokeWidth="1.5" className="fill-amber-500/20" />
                        <circle cx="80" cy="12" r="3.5" stroke="#d4af37" strokeWidth="1.5" className="fill-yellow-500/20" />
                        <circle cx="80" cy="148" r="3.5" stroke="#a75a20" strokeWidth="1.5" className="fill-amber-500/20" />
                        
                        <circle cx="28" cy="28" r="2.5" stroke="#d4af37" strokeWidth="1" className="fill-yellow-500/10" />
                        <circle cx="132" cy="132" r="2.5" stroke="#a75a20" strokeWidth="1" className="fill-amber-500/10" />
                        <circle cx="132" cy="28" r="2.5" stroke="#d4af37" strokeWidth="1" className="fill-yellow-500/10" />
                        <circle cx="28" cy="132" r="2.5" stroke="#a75a20" strokeWidth="1" className="fill-amber-500/10" />

                        {/* Core central square BGA Processor (The 1:1 Silicon Core Chip aspect-square) */}
                        <rect x="62" y="62" width="36" height="36" rx="6" stroke="#d4af37" strokeWidth="1.8" className="fill-black/90 shadow-2xl" />
                        
                        {/* Pulsing microchip silicon grid vector */}
                        <rect x="67" y="67" width="26" height="26" rx="4" stroke="rgba(217,119,6,0.4)" strokeWidth="1" strokeDasharray="1 1" className="fill-yellow-500/[0.04]" />
                        
                        {/* Micro circuit controller text */}
                        <text x="80" y="78" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="#eab308" textAnchor="middle" className="tracking-tighter">SDK</text>
                        <text x="80" y="87" fontSize="7" fontWeight="bold" fontFamily="monospace" fill="#d4af37" textAnchor="middle" className="tracking-tighter font-extrabold text-[5.5px]">ELEX28</text>

                        {/* Little pulsing LED indicator in the chip center */}
                        <circle cx="80" cy="71" r="1" fill="#eab308" className="animate-ping" />

                        {/* Gradient definitions for technical traces */}
                        <defs>
                          <linearGradient id="goldNeonTrace" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#f3f4f6" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.8" />
                          </linearGradient>
                          <linearGradient id="bronzeNeonTrace" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#b45309" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#d97706" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#78350f" stopOpacity="0.8" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Technical specifications overlaying text */}
                      <div className="absolute bottom-1 right-2 left-2 flex justify-between font-mono text-[5.5px] text-yellow-500/50">
                        <span>HW REV 6.0</span>
                        <span>SUST DEP_E28</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Top 3 Podium layout Inside Poster */}
                {(() => {
                  const top3 = honorStudents.filter((s) => s.rank <= 3);
                  const remaining = honorStudents.filter((s) => s.rank > 3);
                  return (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8 relative z-10 font-cairo">
                        {/* Rank 2 (Right/Silver side) */}
                        {top3[1] && (
                          <div className="border border-slate-500/30 bg-gradient-to-b from-[#0f141d]/90 to-[#030509]/95 p-5 rounded-2xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(148,163,184,0.06)] order-2 sm:order-3 h-full relative overflow-hidden group">
                            {/* Circuit aesthetic backdrop */}
                            <div className="absolute top-0 right-0 w-8 h-8 opacity-[0.14] pointer-events-none">
                              <svg viewBox="0 0 40 40" className="text-slate-400">
                                <path d="M0 20 h20 v20" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="4" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-400 via-slate-300 to-slate-500 flex items-center justify-center text-slate-900 font-bold text-xl mb-3 shadow-[0_0_15px_rgba(148,163,184,0.3)] relative font-sans border border-slate-300/40">
                              🥈
                            </div>
                            <div className="text-slate-400 text-[10px] font-bold font-cairo">المرتبة الثانية</div>
                            <div className="text-slate-200 text-sm font-black mt-1.5 line-clamp-2 min-h-[36px]">{top3[1].name}</div>
                            <div className="mt-3 text-slate-300 font-mono text-sm font-black text-center">GPA: {top3[1].gpa}</div>
                            <div className="mt-2 px-3 py-0.5 bg-slate-500/10 rounded-full text-[9px] text-slate-300 border border-slate-500/20 font-black">{top3[1].merit}</div>
                          </div>
                        )}

                        {/* Rank 1 (Center/Gold Leader Card) - Prominently highlighted */}
                        {top3[0] && (
                          <div className="border-2 border-yellow-500/50 bg-gradient-to-b from-[#1c1404]/98 to-[#050401]/98 p-6 rounded-2xl flex flex-col items-center text-center shadow-[0_0_35px_rgba(234,179,8,0.22)] order-1 sm:order-2 h-full scale-[1.05] relative z-20 overflow-hidden group">
                            {/* Circuit aesthetic backdrop */}
                            <div className="absolute top-0 left-0 w-10 h-10 opacity-[0.2] pointer-events-none">
                              <svg viewBox="0 0 40 40" className="text-yellow-500">
                                <path d="M40 20 H20 V40" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="4" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="absolute inset-0 bg-[#eaab08]/[0.02] pointer-events-none" />
                            <div className="absolute top-[-10px] bg-yellow-500 text-black text-[9px] px-3.5 py-0.5 rounded-full font-black tracking-wide uppercase shadow-[0_0_15px_rgba(234,179,8,0.4)]">
                              صدارة الدفعة
                            </div>
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-200 to-amber-600 flex items-center justify-center text-yellow-950 font-bold text-3xl mb-3 shadow-[0_0_25px_rgba(234,179,8,0.5)] relative font-sans border border-yellow-300/40">
                              🏆
                            </div>
                            <div className="text-yellow-400 text-xs font-black animate-pulse font-cairo">المرتبة الأولى</div>
                            <div className="text-yellow-400 text-base font-black mt-1.5 leading-tight line-clamp-2 min-h-[40px] drop-shadow-[0_0_3px_rgba(234,179,8,0.2)]">{top3[0].name}</div>
                            <div className="mt-3 text-yellow-300 font-mono text-base font-black text-center">GPA: {top3[0].gpa}</div>
                            <div className="mt-2 px-3 py-1 bg-yellow-500/20 rounded-full text-[10px] text-yellow-300 border border-yellow-500/30 font-black">{top3[0].merit}</div>
                          </div>
                        )}

                        {/* Rank 3 (Left/Bronze Card) */}
                        {top3[2] && (
                          <div className="border border-amber-700/40 bg-gradient-to-b from-[#140b04]/95 to-[#040201]/95 p-5 rounded-2xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(217,119,6,0.12)] order-3 sm:order-1 h-full relative overflow-hidden group">
                            {/* Circuit aesthetic backdrop */}
                            <div className="absolute bottom-0 left-0 w-8 h-8 opacity-[0.14] pointer-events-none">
                              <svg viewBox="0 0 40 40" className="text-amber-600">
                                <path d="M40 20 H20 V0" fill="none" stroke="currentColor" strokeWidth="2" />
                                <circle cx="20" cy="20" r="4" fill="currentColor" />
                              </svg>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 via-amber-500 to-amber-800 flex items-center justify-center text-amber-50 font-bold text-xl mb-3 shadow-[0_0_15px_rgba(217,119,6,0.3)] relative font-sans border border-amber-500/40">
                              🥉
                            </div>
                            <div className="text-amber-500/85 text-[10px] font-bold font-cairo">المرتبة الثالثة</div>
                            <div className="text-amber-400 text-sm font-black mt-1.5 line-clamp-2 min-h-[36px]">{top3[2].name}</div>
                            <div className="mt-3 text-amber-400 font-mono text-sm font-black text-center">GPA: {top3[2].gpa}</div>
                            <div className="mt-2 px-3 py-0.5 bg-amber-500/10 rounded-full text-[9px] text-amber-400 border border-amber-500/25 font-black">{top3[2].merit}</div>
                          </div>
                        )}
                      </div>

                      {/* Remaining Students grouped in 2 organized columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 relative z-10 font-cairo mb-6">
                        <div className="space-y-2.5">
                          {remaining.slice(0, Math.ceil(remaining.length / 2)).map((s) => {
                            const gpaValue = parseFloat(s.gpa);
                            let itemStyle = "border-slate-500/20 bg-[#05070f]/40 hover:bg-[#0c1020]/50";
                            let iconStyle = "bg-white/5 border border-white/10 text-gray-400";
                            let badgeLabel = "";
                            let badgeStyle = "text-gray-500";

                            if (gpaValue >= 3.25) {
                              itemStyle = "border-yellow-500/35 bg-gradient-to-l from-yellow-500/[0.03] to-[#040810]/50 hover:bg-yellow-500/[0.08] shadow-[0_0_10px_rgba(212,175,55,0.06)]";
                              iconStyle = "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400";
                              badgeLabel = "نخبة ذهبية 🌟";
                              badgeStyle = "text-yellow-400 font-black";
                            } else if (gpaValue >= 3.10) {
                              itemStyle = "border-slate-400/35 bg-gradient-to-l from-slate-400/[0.03] to-[#040810]/50 hover:bg-slate-400/[0.08]";
                              iconStyle = "bg-slate-400/10 border border-slate-400/30 text-slate-300";
                              badgeLabel = "تفوق فضي ⭐";
                              badgeStyle = "text-slate-300 font-bold";
                            } else {
                              itemStyle = "border-amber-700/35 bg-gradient-to-l from-amber-700/[0.03] to-[#040810]/50 hover:bg-amber-700/[0.08]";
                              iconStyle = "bg-amber-700/10 border border-amber-700/30 text-amber-500";
                              badgeLabel = "تميز برونزي ⚡";
                              badgeStyle = "text-amber-500 font-semibold";
                            }

                            return (
                              <div 
                                key={s.name}
                                className={`flex items-center justify-between p-3 rounded-2xl border transition-all duration-300 text-right ${itemStyle}`}
                              >
                                <div className="flex items-center gap-3 max-w-[75%] min-w-0">
                                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${iconStyle}`}>
                                    {s.rank}
                                  </span>
                                  <div className="truncate">
                                    <span className="text-[12px] sm:text-xs font-black truncate text-gray-200 block">
                                      {s.name}
                                    </span>
                                    <span className={`text-[8.5px] uppercase tracking-wide block mt-0.5 ${badgeStyle}`}>
                                      {badgeLabel}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end shrink-0 font-mono gap-0.5">
                                  <span className="text-[8px] text-gray-500 block">SCORE:</span>
                                  <span className="text-xs text-yellow-400 font-black block">{s.gpa}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        <div className="space-y-2.5">
                          {remaining.slice(Math.ceil(remaining.length / 2)).map((s) => {
                            const gpaValue = parseFloat(s.gpa);
                            let itemStyle = "border-slate-500/20 bg-[#05070f]/40 hover:bg-[#0c1020]/50";
                            let iconStyle = "bg-white/5 border border-white/10 text-gray-400";
                            let badgeLabel = "";
                            let badgeStyle = "text-gray-500";

                            if (gpaValue >= 3.25) {
                              itemStyle = "border-yellow-500/35 bg-gradient-to-l from-yellow-500/[0.03] to-[#040810]/50 hover:bg-yellow-500/[0.08] shadow-[0_0_10px_rgba(212,175,55,0.06)]";
                              iconStyle = "bg-yellow-500/10 border border-yellow-500/30 text-yellow-400";
                              badgeLabel = "نخبة ذهبية 🌟";
                              badgeStyle = "text-yellow-400 font-black";
                            } else if (gpaValue >= 3.10) {
                              itemStyle = "border-slate-400/35 bg-gradient-to-l from-slate-400/[0.03] to-[#040810]/50 hover:bg-slate-400/[0.08]";
                              iconStyle = "bg-slate-400/10 border border-slate-400/30 text-slate-300";
                              badgeLabel = "تفوق فضي ⭐";
                              badgeStyle = "text-slate-300 font-bold";
                            } else {
                              itemStyle = "border-amber-700/35 bg-gradient-to-l from-amber-700/[0.03] to-[#040810]/50 hover:bg-amber-700/[0.08]";
                              iconStyle = "bg-amber-700/10 border border-amber-700/30 text-amber-500";
                              badgeLabel = "تميز برونزي ⚡";
                              badgeStyle = "text-amber-500 font-semibold";
                            }

                            return (
                              <div 
                                key={s.name}
                                className={`flex items-center justify-between p-3 rounded-2xl border transition-all duration-300 text-right ${itemStyle}`}
                              >
                                <div className="flex items-center gap-3 max-w-[75%] min-w-0">
                                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${iconStyle}`}>
                                    {s.rank}
                                  </span>
                                  <div className="truncate">
                                    <span className="text-[12px] sm:text-xs font-black truncate text-gray-200 block">
                                      {s.name}
                                    </span>
                                    <span className={`text-[8.5px] uppercase tracking-wide block mt-0.5 ${badgeStyle}`}>
                                      {badgeLabel}
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end shrink-0 font-mono gap-0.5">
                                  <span className="text-[8px] text-gray-500 block">SCORE:</span>
                                  <span className="text-xs text-yellow-400 font-black block">{s.gpa}</span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  );
                })()}

                {/* Poster validation stamp and seals */}
                <div className="border-t border-yellow-500/20 pt-6 flex justify-between items-center text-right font-cairo relative z-10">
                  <div>
                    <span className="text-[9px] text-gray-500 block">وثيقة شرف أكاديمية صادرة للعام 2026</span>
                    <span className="text-xs text-yellow-500 font-bold">الأمين الأكاديمي والليدر: عمر فتحي علي</span>
                  </div>
                  
                  {/* Decorative stamp element */}
                  <div className="w-14 h-14 border border-yellow-500/30 rounded-full flex items-center justify-center p-1 bg-yellow-500/5 rotate-12 shrink-0">
                    <div className="w-full h-full border border-dashed border-yellow-500/50 rounded-full flex items-center justify-center font-mono text-[8px] text-yellow-400 font-bold text-center">
                      ELEX28<br />SEAL
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        )}

        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ 
                scale: 1, 
                y: 0,
                boxShadow: [
                  "0 0 35px rgba(0,242,255,0.15), 0 0 10px rgba(168,85,247,0.05)",
                  "0 0 55px rgba(0,242,255,0.35), 0 0 25px rgba(168,85,247,0.20)",
                  "0 0 35px rgba(0,242,255,0.15), 0 0 10px rgba(168,85,247,0.05)"
                ]
              }}
              transition={{ 
                scale: { duration: 0.3 },
                y: { duration: 0.3 },
                boxShadow: { duration: 3.5, repeat: Infinity, ease: "easeInOut" }
              }}
              exit={{ scale: 0.95, y: 15 }}
              className="border border-electron-accent/30 bg-[#02040a]/98 p-6 md:p-8 max-w-md w-full relative overflow-hidden rounded-2xl text-right font-cairo"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-electron-accent to-purple-600" />
              
              <button 
                onClick={() => setShowWelcome(false)}
                className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors cursor-pointer z-20"
              >
                <X size={18} />
              </button>

              <div className="mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-electron-accent/10 border border-electron-accent/30 flex items-center justify-center shrink-0">
                  <Cpu size={20} className="text-electron-accent" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">ELEX28</h2>
                  <p className="text-[9px] text-gray-500 font-mono tracking-wider">ELECTRONICS ENGINEERING HUB</p>
                </div>
              </div>

              {/* High-Tech Animated Electronics / circuit Board Graphic */}
              <div className="relative w-full h-36 mb-6 flex items-center justify-center bg-black/60 rounded-xl overflow-hidden border border-electron-accent/15">
                {/* Ambient glowing radial gradient background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.18)_0%,transparent_70%)]" />
                
                {/* Slow rotating mechanical gear/tech rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute w-28 h-28 border border-dashed border-electron-accent/20 rounded-full flex items-center justify-center"
                />
                
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-22 h-22 border border-dotted border-purple-500/20 rounded-full flex items-center justify-center"
                />

                {/* Circuit paths with flowing current animations */}
                <svg className="absolute inset-0 w-full h-full text-electron-accent/30" viewBox="0 0 380 144" fill="none">
                  {/* Left Side Tracks */}
                  <motion.path 
                    d="M15,72 L110,72 L130,52" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    initial={{ strokeDasharray: "100 100", strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: [100, -100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M35,30 L95,30 L125,52" 
                    stroke="url(#purpleGlowLine)" 
                    strokeWidth="1.5"
                    initial={{ strokeDasharray: "80 80", strokeDashoffset: 80 }}
                    animate={{ strokeDashoffset: [80, -80] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Right Side Tracks */}
                  <motion.path 
                    d="M365,72 L270,72 L250,92" 
                    stroke="currentColor" 
                    strokeWidth="1.5"
                    initial={{ strokeDasharray: "100 100", strokeDashoffset: -100 }}
                    animate={{ strokeDashoffset: [-100, 100] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path 
                    d="M345,114 L285,114 L255,92" 
                    stroke="url(#purpleGlowLine)" 
                    strokeWidth="1.5"
                    initial={{ strokeDasharray: "80 80", strokeDashoffset: -80 }}
                    animate={{ strokeDashoffset: [-80, 80] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Pulsating Glowing Circuit Node Terminals */}
                  <circle cx="15" cy="72" r="3" className="fill-electron-accent animate-ping" />
                  <circle cx="35" cy="30" r="3" className="fill-purple-500" />
                  <circle cx="365" cy="72" r="3" className="fill-electron-accent" />
                  <circle cx="345" cy="114" r="3" className="fill-purple-500 animate-ping" />
                  
                  <defs>
                    <linearGradient id="purpleGlowLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Main Glowing Microchip / CPU with vibrant pulsing shadow */}
                <motion.div 
                  animate={{ 
                    scale: [0.96, 1.04, 0.96],
                    boxShadow: [
                      "0 0 15px rgba(0,242,255,0.3), inset 0 0 8px rgba(0,242,255,0.2)",
                      "0 0 35px rgba(168,85,247,0.8), inset 0 0 15px rgba(168,85,247,0.4)",
                      "0 0 15px rgba(0,242,255,0.3), inset 0 0 8px rgba(0,242,255,0.2)"
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="z-10 w-16 h-16 rounded-2xl bg-[#02040a] border border-[#00f2ff]/60 flex items-center justify-center relative"
                >
                  <Cpu size={30} className="text-electron-accent animate-pulse" />
                  <Sparkles size={12} className="absolute top-1 right-1 text-purple-400 animate-bounce" />
                </motion.div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white leading-tight">
                  حبابك عشرة يا هندسة.. نورت!
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  يا هلا بيك في المنصة الأكاديمية الرسمية للدفعة. صممت جهودنا هذه البوابة لتوفير أفضل تجربة ودعم متكامل لمواجهة تحديات ومقررات <span className="text-electron-accent font-bold">السمستر السادس</span> وتخطيها معاً بكل كفاءة وسهولة.
                </p>
              </div>

              <div className="mt-6">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(0,242,255,0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowWelcome(false)}
                  className="w-full py-3 bg-gradient-to-r from-electron-accent to-purple-600 text-black font-extrabold text-sm rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <span>زووولي ⚡🛠️</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedRole && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedRole(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={`border ${selectedRole.borderColor || 'border-white/10'} bg-[#060a17]/95 p-6 md:p-10 max-w-2xl w-full relative overflow-hidden my-auto rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.9)]`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${selectedRole.gradient}`} />
              
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 left-5 text-gray-400 hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start text-right" dir="rtl">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${selectedRole.avatarBg || 'bg-white/5'} border flex items-center justify-center shrink-0 shadow-xl`}>
                  <selectedRole.icon size={40} className={selectedRole.color} />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="mb-6 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${selectedRole.badgeBg || 'bg-white/10'}`}>
                        [{selectedRole.badge || 'OFFICIAL'}]
                      </span>
                      <span className="text-xs font-mono text-gray-400 font-bold">{selectedRole.idCode || 'ELEX28-ID'}</span>
                    </div>
                    <h3 className={`text-2xl md:text-3xl font-black font-cairo ${selectedRole.color} mb-1`}>
                      {selectedRole.title}
                    </h3>
                    <div className="text-white font-extrabold text-xl md:text-2xl font-cairo">
                      {selectedRole.name}
                    </div>
                    {selectedRole.deputy && (
                      <div className="text-electron-secondary font-bold text-sm mt-1.5 flex items-center gap-1.5 font-cairo">
                        <Sparkles size={14} className="text-electron-secondary" />
                        النائبة: {selectedRole.deputy}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-electron-accent text-[11px] font-mono uppercase tracking-widest mb-2 font-bold">
                        [ النطاق والمهام الإدارية ]
                      </h4>
                      <p className="text-gray-300 leading-relaxed text-sm md:text-base font-cairo bg-white/[0.02] p-4 rounded-2xl border border-white/5">
                        {selectedRole.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-electron-accent text-[11px] font-mono uppercase tracking-widest mb-3 font-bold">
                        [ قائمة المسائل والمسؤوليات ]
                      </h4>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {selectedRole.tasks.map((task: string, i: number) => (
                          <li key={i} className="flex items-center gap-3 text-gray-300 text-xs md:text-sm font-cairo bg-black/40 p-3 rounded-xl border border-white/5">
                            <div className={`w-2 h-2 rounded-full ${selectedRole.color} shrink-0`} />
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <a 
                        href={`https://wa.me/${selectedRole.whatsapp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-black font-extrabold text-base hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-green-500/20 font-cairo"
                      >
                        <MessageSquare size={20} />
                        تواصل مباشر عبر الواتساب الرسمي
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCourses && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowCourses(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 md:p-10 max-w-4xl w-full relative overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent via-electron-secondary to-electron-accent" />
              
              <button 
                onClick={() => setShowCourses(false)}
                className="absolute top-4 left-4 text-gray-500 hover:text-electron-accent transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-5xl font-bold font-cairo gradient-text mb-2 md:mb-4">المقررات الدراسية</h3>
                  <p className="text-gray-400 text-sm md:text-lg font-cairo">تفاصيل ومحتوى مواد السمستر السادس - هندسة الإلكترونيات SUST</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {courses.map((course, idx) => (
                    <motion.div
                      key={course.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      onClick={() => course.details && setSelectedCourse(course)}
                      className={`glass-panel neon-card neon-glow p-5 md:p-6 relative overflow-hidden group hover:border-electron-accent/50 transition-all ${course.details ? 'cursor-pointer' : 'cursor-default'}`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-20 group-hover:opacity-40 transition-opacity`} />
                      <div className="flex gap-4 md:gap-5 items-start relative z-10">
                        <div className={`w-10 h-10 md:w-12 md:h-12 glass-panel flex items-center justify-center ${course.color} shrink-0`}>
                          <course.icon size={20} className="md:size-6" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base md:text-xl mb-1 md:mb-2 tech-font flex items-center gap-2">
                            {course.name}
                            {course.details && (
                              <span className="text-[8px] md:text-[10px] px-2 py-0.5 rounded-full bg-electron-accent/20 text-electron-accent border border-electron-accent/30 font-cairo">
                                عرض التفاصيل
                              </span>
                            )}
                          </h4>
                          <p className="text-gray-400 text-[11px] md:text-sm leading-relaxed">
                            {course.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 md:mt-12 pt-6 border-t border-white/5 flex justify-center">
                  <button 
                    onClick={() => setShowCourses(false)}
                    className="px-8 md:px-12 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-electron-accent hover:text-black transition-all tech-font"
                  >
                    إغلاق النافذة
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showMaterials && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowMaterials(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 md:p-10 max-w-4xl w-full relative overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent via-electron-secondary to-electron-accent" />
              
              <button 
                onClick={() => setShowMaterials(false)}
                className="absolute top-4 left-4 text-gray-500 hover:text-electron-accent transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="mb-8 md:mb-12">
                  <h3 className="text-2xl md:text-5xl font-bold tech-font gradient-text mb-2 md:mb-4">المواد والملفات</h3>
                  <p className="text-gray-400 text-sm md:text-lg">روابط مباشرة لقنوات التلغرام الخاصة بكل مادة - السمستر السادس</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {courses.map((course, idx) => (
                    <motion.a
                      key={course.name}
                      href={course.telegram}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`glass-panel p-5 md:p-6 relative overflow-hidden group hover:border-electron-accent transition-all flex items-center justify-between gap-4`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-10 group-hover:opacity-20 transition-opacity`} />
                      <div className="flex gap-4 items-center relative z-10">
                        <div className={`w-10 h-10 md:w-12 md:h-12 glass-panel flex items-center justify-center ${course.color} shrink-0`}>
                          <course.icon size={20} className="md:size-6" />
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-base md:text-lg tech-font">{course.name}</h4>
                          <div className="text-electron-accent/60 text-[10px] tech-font uppercase tracking-widest">Telegram Channel</div>
                        </div>
                      </div>
                      <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-electron-accent group-hover:bg-electron-accent group-hover:text-black transition-all">
                        <Share2 size={14} className="-rotate-90" />
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8 md:mt-12 pt-6 border-t border-white/5 flex justify-center">
                  <button 
                    onClick={() => setShowMaterials(false)}
                    className="px-8 md:px-12 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-electron-accent hover:text-black transition-all tech-font"
                  >
                    إغلاق النافذة
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSchedulesAlert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1100] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowSchedulesAlert(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-4 md:p-10 max-w-4xl w-full relative overflow-hidden my-auto neon-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent via-electron-secondary to-electron-accent" />
              
              <button 
                onClick={() => setShowSchedulesAlert(false)}
                className="absolute top-4 left-4 text-gray-500 hover:text-electron-accent transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 bg-electron-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-electron-accent/20">
                    <BookOpen size={32} className="text-electron-accent" />
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold font-cairo gradient-text mb-2">كشف عدد ساعات المواد والمحاضرين</h3>
                  <p className="text-gray-400 text-sm md:text-lg font-cairo">تفاصيل الساعات المعتمدة لكافة مواد السمستر السادس (20 ساعة) - ELEX28</p>
                </div>

                {/* Mobile View: Cards Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden max-h-[55vh] overflow-y-auto pr-1">
                  {coursesWithProfs.map((course, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col gap-2 relative">
                      <div className="flex items-center justify-between border-b border-white/5 pb-2">
                        <h4 className="text-white font-bold text-sm font-cairo">{course.name}</h4>
                        <span className="px-2.5 py-0.5 rounded-full bg-electron-accent/15 text-electron-accent text-[10px] font-bold font-mono border border-electron-accent/30">
                          {course.hours} ساعات ({course.hours} CH)
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-300 text-xs font-cairo">
                        <User size={13} className="text-electron-accent" />
                        <span>المحاضر: {course.prof}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tablet / Desktop View: Table */}
                <div className="hidden md:block overflow-x-auto rounded-2xl border border-white/5 bg-white/5">
                  <table className="w-full text-right border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-3 md:p-6 text-electron-accent font-bold font-cairo text-xs md:text-lg">المادة</th>
                        <th className="p-3 md:p-6 text-electron-accent font-bold font-cairo text-xs md:text-lg">المحاضر</th>
                        <th className="p-3 md:p-6 text-electron-accent font-bold font-cairo text-xs md:text-lg text-center">الساعات المعتمدة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coursesWithProfs.map((course, idx) => (
                        <motion.tr 
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="border-b border-white/5 hover:bg-electron-accent/5 transition-colors group"
                        >
                          <td className="p-3 md:p-6 text-white font-bold font-cairo text-[11px] md:text-base group-hover:text-electron-accent transition-colors">
                            {course.name}
                          </td>
                          <td className="p-3 md:p-6 text-gray-300 font-cairo text-[11px] md:text-base">
                            <div className="flex items-center gap-1.5 md:gap-2">
                              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                                <User size={12} className="md:size-[14px] text-electron-accent" />
                              </div>
                              <span className="truncate max-w-[120px] md:max-w-none">{course.prof}</span>
                            </div>
                          </td>
                          <td className="p-3 md:p-6 text-center">
                            <span className="px-2.5 py-1 rounded-full bg-electron-accent/10 text-electron-accent text-[10px] md:text-xs font-bold tech-font border border-electron-accent/20 whitespace-nowrap">
                              {course.hours} ساعات ({course.hours} CH)
                            </span>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3 text-gray-500 text-xs md:text-sm font-cairo">
                    <Zap size={16} className="text-electron-accent" />
                    <span>إجمالي الساعات المعتمدة: <span className="text-electron-accent font-bold">{coursesWithProfs.reduce((acc, curr) => acc + curr.hours, 0)} ساعة</span></span>
                  </div>
                  <button 
                    onClick={() => setShowSchedulesAlert(false)}
                    className="w-full md:w-auto px-10 py-3 rounded-xl bg-electron-accent text-black font-bold font-cairo hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                  >
                    حاضر يا هندسة
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChannels && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setShowChannels(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 md:p-10 max-w-2xl w-full relative overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 via-blue-500 to-green-500" />
              
              <button 
                onClick={() => setShowChannels(false)}
                className="absolute top-4 left-4 text-gray-500 hover:text-electron-accent transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="mb-8 md:mb-12 text-center">
                  <h3 className="text-2xl md:text-5xl font-bold font-cairo gradient-text mb-2 md:mb-4">القنوات الرسمية</h3>
                  <p className="text-gray-400 text-sm md:text-lg font-cairo">انضم لمجتمع ELEX28 على منصات التواصل الاجتماعي</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
                  {/* Semester 6 Exams Telegram Channel */}
                  <motion.a
                    href="https://t.me/+9BOzuRr8U80wY2U0"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border border-yellow-500/30 bg-yellow-500/5 p-6 rounded-2xl group hover:border-yellow-400 hover:bg-yellow-500/10 transition-all flex flex-col items-center text-center gap-4 relative overflow-hidden shadow-lg shadow-yellow-500/10"
                  >
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400 text-[9px] font-mono font-bold">
                      EXAMS VAULT
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-all border border-yellow-500/40">
                      <FileText size={28} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-cairo mb-1 text-yellow-400">امتحانات السمستر السادس</h4>
                      <p className="text-gray-300 text-[11px] font-cairo leading-relaxed">تجميعات الأسئلة، امتحانات الميدتيرم، والامتحانات النهائية الرسمية مع الحلول.</p>
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-yellow-500/40 text-yellow-400 text-[10px] font-bold group-hover:bg-yellow-400 group-hover:text-black transition-all font-cairo flex items-center gap-1">
                      <span>دخول قناة الامتحانات</span>
                      <Send size={12} />
                    </div>
                  </motion.a>

                  {/* WhatsApp Channel */}
                  <motion.a
                    href="https://whatsapp.com/channel/0029VbCoSxB4NVipkChIbc15"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass-panel border border-green-500/30 p-6 rounded-2xl group hover:border-green-400 hover:bg-green-500/10 transition-all flex flex-col items-center text-center gap-4 relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-all border border-green-500/30">
                      <MessageSquare size={28} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-cairo mb-1 text-green-400">قناة الواتساب الرسمية</h4>
                      <p className="text-gray-300 text-[11px] font-cairo leading-relaxed">أخبار الدفعة، التنبيهات العاجلة، والإعلانات الرسمية الهامة.</p>
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-green-500/30 text-green-400 text-[10px] font-bold group-hover:bg-green-500 group-hover:text-black transition-all font-cairo">
                      انضم للواتساب
                    </div>
                  </motion.a>

                  {/* Telegram Channel */}
                  <motion.a
                    href="https://t.me/+Agkt05rV37tmODc0"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-panel border border-blue-400/30 p-6 rounded-2xl group hover:border-blue-400 hover:bg-blue-400/10 transition-all flex flex-col items-center text-center gap-4 relative overflow-hidden"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-all border border-blue-400/30">
                      <Share2 size={28} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-cairo mb-1 text-blue-400">قناة التلغرام الأكاديمية</h4>
                      <p className="text-gray-300 text-[11px] font-cairo leading-relaxed">المكتبة الرقمية، الملفات الأكاديمية، والنقاشات العلمية.</p>
                    </div>
                    <div className="px-4 py-1.5 rounded-full border border-blue-400/30 text-blue-400 text-[10px] font-bold group-hover:bg-blue-400 group-hover:text-black transition-all font-cairo">
                      انضم للتلغرام
                    </div>
                  </motion.a>
                </div>

                {/* University E-Platform Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="glass-panel neon-card neon-glow p-6 md:p-8 border-electron-accent/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent to-electron-secondary" />
                  <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                    <div className="w-20 h-20 rounded-3xl bg-electron-accent/10 flex items-center justify-center text-electron-accent shrink-0 border border-electron-accent/20">
                      <Globe size={40} />
                    </div>
                    <div className="flex-1 text-center md:text-right">
                      <h4 className="text-xl md:text-2xl font-bold font-cairo mb-3 text-white">المنصة الإلكترونية للجامعة</h4>
                      <p className="text-gray-400 text-sm md:text-base font-cairo mb-6">
                        المنصة الرسمية لجامعة السودان للعلوم والتكنولوجيا لمتابعة الكورسات والمواد الأكاديمية.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-3 mb-8">
                        {[
                          "اضغط على رابط المنصة بالأسفل للذهاب لصفحة تسجيل الدخول.",
                          "أدخل الرقم الجامعي الخاص بك في خانة 'اسم المستخدم'.",
                          "أدخل الرقم الجامعي مرة أخرى في خانة 'كلمة المرور'.",
                          "بعد الدخول، يمكنك تصفح الكورسات المتاحة لك في هذا السمستر."
                        ].map((step, i) => (
                          <div key={i} className="flex items-center gap-3 text-right bg-white/5 p-3 rounded-xl border border-white/5">
                            <div className="w-6 h-6 rounded-full bg-electron-accent/20 flex items-center justify-center text-electron-accent text-xs font-bold shrink-0">
                              {i + 1}
                            </div>
                            <span className="text-gray-300 text-xs md:text-sm font-cairo">{step}</span>
                          </div>
                        ))}
                      </div>

                      <a 
                        href="https://el.sustech.edu/login/index.php"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-electron-accent text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-lg shadow-electron-accent/20 font-cairo w-full md:w-auto justify-center"
                      >
                        <Zap size={20} />
                        الدخول للمنصة الآن
                      </a>
                    </div>
                  </div>
                </motion.div>

                <div className="mt-10 pt-6 border-t border-white/5 flex justify-center">
                  <button 
                    onClick={() => setShowChannels(false)}
                    className="px-8 md:px-12 py-3 md:py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold hover:bg-electron-accent hover:text-black transition-all tech-font"
                  >
                    إغلاق النافذة
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1200] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              className="glass-panel p-6 md:p-10 max-w-3xl w-full relative overflow-hidden my-auto neon-card"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${selectedCourse.gradient}`} />
              
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 left-4 text-gray-500 hover:text-electron-accent transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="relative z-10">
                <div className="mb-8 flex items-center gap-6">
                  <div className={`w-16 h-16 md:w-20 md:h-20 glass-panel flex items-center justify-center ${selectedCourse.color} border border-white/10`}>
                    <selectedCourse.icon size={32} className="md:size-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold font-cairo gradient-text mb-1">{selectedCourse.details.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm md:text-base">
                      <span className="text-electron-accent font-bold font-cairo flex items-center gap-2">
                        <User size={16} /> {selectedCourse.details.instructor}
                      </span>
                      <span className="text-gray-400 font-cairo flex items-center gap-2">
                        <Clock size={16} /> {selectedCourse.details.hours}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar text-right" dir="rtl">
                  {selectedCourse.details.overview && (
                    <section className="space-y-3">
                      <h4 className="text-electron-accent font-bold font-cairo text-lg flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-electron-accent shadow-[0_0_10px_#00ffff]" />
                        عن المادة
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-cairo text-sm md:text-base whitespace-pre-line">
                        {selectedCourse.details.overview}
                      </p>
                    </section>
                  )}

                  {selectedCourse.details.content && (
                    <section className="space-y-3">
                      <h4 className="text-electron-accent font-bold font-cairo text-lg flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-electron-accent shadow-[0_0_10px_#00ffff]" />
                        المقرر الدراسي
                      </h4>
                      <p className="text-gray-300 leading-relaxed font-cairo text-sm md:text-base whitespace-pre-line">
                        {selectedCourse.details.content}
                      </p>
                    </section>
                  )}

                  <section className="space-y-3">
                    <h4 className="text-electron-accent font-bold font-cairo text-lg flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-electron-accent shadow-[0_0_10px_#00ffff]" />
                      طريقة المذاكرة
                    </h4>
                    <div className="glass-panel p-4 md:p-6 border-white/5 bg-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-full bg-electron-accent/30" />
                      <p className="text-gray-300 leading-relaxed font-cairo text-sm md:text-base whitespace-pre-line">
                        {selectedCourse.details.studyMethod}
                      </p>
                    </div>
                  </section>

                  <section className="space-y-3">
                    <h4 className="text-electron-accent font-bold font-cairo text-lg flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-electron-accent shadow-[0_0_10px_#00ffff]" />
                      عن الامتحان
                    </h4>
                    <div className="glass-panel p-4 md:p-6 border-white/5 bg-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-1 h-full bg-electron-secondary/30" />
                      <p className="text-gray-300 leading-relaxed font-cairo text-sm md:text-base whitespace-pre-line">
                        {selectedCourse.details.examInfo}
                      </p>
                    </div>
                  </section>
                </div>

                <div className="mt-10 flex flex-col md:flex-row gap-4">
                  <a 
                    href={selectedCourse.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 rounded-2xl bg-electron-accent text-black font-bold font-cairo flex items-center justify-center gap-3 hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,242,255,0.2)]"
                  >
                    <Share2 size={20} />
                    قناة المادة على تلغرام
                  </a>
                  <button 
                    onClick={() => setSelectedCourse(null)}
                    className="flex-1 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold font-cairo hover:bg-white/10 transition-all"
                  >
                    إغلاق التفاصيل
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

