import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Cpu, Zap, Radio, BookOpen, DollarSign, Share2, Palette, ChevronDown, X, Globe, ShieldCheck, MessageSquare, QrCode, User, Clock, Calendar, Trophy, Award, Download, Search, Sparkles, Star, Crown, FileText, Printer, Eye, SlidersHorizontal, Home, Users, Send } from "lucide-react";

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
    name: "عمر فتحي علي",
    whatsapp: "+249118222378",
    description: "القيادة العامة للدفعة، التنسيق مع الإدارة، وتمثيل الطلاب في جميع المحافل.",
    tasks: [
      "تمثيل الدفعة أمام إدارة الكلية والجامعة",
      "الإشراف العام على جميع لجان وأمانات الدفعة",
      "اتخاذ القرارات الاستراتيجية بالتنسيق مع مجلس الأمانة",
      "حل النزاعات والمشاكل التي قد تواجه الطلاب"
    ],
    icon: ShieldCheck,
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "الأمين العام",
    name: "مؤتمن علي",
    whatsapp: "+249118587285",
    description: "تنظيم الاجتماعات، توثيق القرارات، والإشراف الإداري على لجان الدفعة.",
    tasks: [
      "إدارة المراسلات الرسمية للدفعة",
      "تنظيم وتوثيق محاضر الاجتماعات",
      "متابعة تنفيذ القرارات الإدارية",
      "التنسيق بين الأمانات المختلفة"
    ],
    icon: Globe,
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "الأمين الأكاديمي",
    name: "عمر فتحي علي",
    deputy: "ميرفت محمد",
    whatsapp: "+249118222378",
    description: "توفير المصادر الدراسية، المحاضرات، ومتابعة الشؤون التعليمية للدفعة.",
    tasks: [
      "توفير المراجع والملازم الدراسية",
      "التنسيق مع المحاضرين بخصوص الجداول والامتحانات",
      "تنظيم مجموعات المذاكرة والدعم الأكاديمي",
      "متابعة المشاكل الأكاديمية للطلاب"
    ],
    icon: BookOpen,
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "الأمين المالي",
    name: "عثمان عبد القادر",
    whatsapp: "+249124569091",
    description: "إدارة ميزانية الدفعة، الاشتراكات، والشفافية المالية في جميع الأنشطة.",
    tasks: [
      "جمع وإدارة اشتراكات الدفعة",
      "إعداد التقارير المالية الدورية",
      "تمويل الأنشطة والفعاليات المعتمدة",
      "ضمان الشفافية في الصرف المالي"
    ],
    icon: DollarSign,
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "الأمين الإعلامي",
    name: "اسراء عادل",
    whatsapp: "+249994422595",
    description: "تغطية أخبار الدفعة، إدارة منصات التواصل، وتوثيق اللحظات المميزة.",
    tasks: [
      "إدارة قنوات التواصل الاجتماعي الرسمية",
      "نشر الإعلانات والأخبار الهامة",
      "توثيق فعاليات الدفعة فوتوغرافياً",
      "تصميم الهوية البصرية للمنشورات"
    ],
    icon: Radio,
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "الأمين الثقافي",
    name: "ميرفت محمد",
    whatsapp: "+249115050714",
    description: "تنظيم الفعاليات الاجتماعية، المسابقات، والأنشطة التي تعزز روح الدفعة.",
    tasks: [
      "تنظيم الرحلات والفعاليات الترفيهية",
      "إقامة المسابقات الثقافية والرياضية",
      "تعزيز الروابط الاجتماعية بين الطلاب",
      "الإشراف على الأنشطة اللاصفية"
    ],
    icon: Palette,
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

const studentResources = [
  { 
    title: "المواد والملفات", 
    description: "مستودع شامل لجميع المحاضرات والمراجع الدراسية.",
    link: "#", 
    icon: Share2,
    tag: "Drive"
  },
  { 
    title: "الجداول الدراسية", 
    description: "جدول المحاضرات والامتحانات المحدث لحظياً.",
    link: "#", 
    icon: Zap,
    tag: "Live"
  },
  { 
    title: "القنوات الرسمية", 
    description: "قنوات التلغرام والواتساب الرسمية للتواصل.",
    link: "#", 
    icon: Radio,
    tag: "Social"
  },
  { 
    title: "المقررات الدراسية", 
    description: "توصيف المواد الدراسية للسمستر الخامس.",
    link: "#", 
    icon: BookOpen,
    tag: "Academic"
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
  const targetDate = new Date('2026-08-01T00:00:00');
  const startDate = new Date('2026-01-01T00:00:00'); // Assumed start of semester for progress
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    progress: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      const totalDuration = targetDate.getTime() - startDate.getTime();
      const elapsed = now.getTime() - startDate.getTime();
      const progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          progress
        });
      } else {
        clearInterval(timer);
        setTimeLeft(prev => ({ ...prev, progress: 100 }));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "أيام", value: timeLeft.days },
    { label: "ساعات", value: timeLeft.hours },
    { label: "دقائق", value: timeLeft.minutes },
    { label: "ثواني", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-electron-accent/5 blur-[150px] -z-10" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel p-8 md:p-16 relative overflow-hidden border-white/5 shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent via-electron-secondary to-electron-accent" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-electron-secondary/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electron-accent/10 border border-electron-accent/20 text-electron-accent text-[10px] md:text-xs font-bold mb-6 tech-font uppercase tracking-widest">
                <Clock size={14} className="animate-pulse" />
                Final Countdown
              </div>
              <h2 className="text-3xl md:text-6xl font-bold font-cairo mb-4 tracking-tighter">
                العد التنازلي <span className="gradient-text">للامتحانات</span>
              </h2>
              <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto font-cairo">
                الوقت يمر بسرعة.. استثمر كل لحظة في المذاكرة والتحصيل العلمي.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
              {timeUnits.map((unit, idx) => (
                <div key={idx} className="relative group">
                  <div className="glass-panel p-6 md:p-10 flex flex-col items-center justify-center border-white/5 group-hover:border-electron-accent/30 transition-all duration-500 bg-white/[0.02]">
                    <span className="text-4xl md:text-7xl font-black tech-font text-white mb-2 tracking-tighter">
                      {String(unit.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] md:text-xs font-bold font-cairo text-electron-accent uppercase tracking-[0.2em] opacity-60">
                      {unit.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Bar */}
            <div className="space-y-4">
              <div className="flex justify-between items-end text-[10px] md:text-xs tech-font font-bold uppercase tracking-widest">
                <span className="text-gray-500">Semester Progress</span>
                <span className="text-electron-accent">{Math.round(timeLeft.progress)}%</span>
              </div>
              <div className="h-2 md:h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${timeLeft.progress}%` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-electron-accent to-electron-secondary shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                />
              </div>
              <div className="flex justify-between text-[8px] md:text-[10px] text-gray-600 font-cairo">
                <span>بداية السمستر</span>
                <span>1 أغسطس 2026</span>
              </div>
            </div>

            <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-electron-accent" />
                <div className="text-right">
                  <div className="text-white font-bold text-sm md:text-base font-cairo">1 أغسطس 2026</div>
                  <div className="text-gray-500 text-[10px] md:text-xs tech-font">START DATE</div>
                </div>
              </div>
              <div className="hidden md:block w-[1px] h-10 bg-white/10" />
              <div className="flex items-center gap-3">
                <Zap size={20} className="text-electron-secondary" />
                <div className="text-right">
                  <div className="text-white font-bold text-sm md:text-base font-cairo">السمستر السادس</div>
                  <div className="text-gray-500 text-[10px] md:text-xs tech-font">CURRENT TERM</div>
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
            <a href="#results" className="w-full lg:w-auto group relative px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-electron-accent to-electron-secondary text-black font-extrabold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 font-cairo shadow-[0_10px_35px_rgba(0,242,255,0.25)] text-center text-base md:text-lg flex items-center justify-center gap-2 border border-electron-accent/30">
              <span className="relative z-10 flex items-center justify-center gap-2 text-black">
                <Trophy size={18} className="animate-bounce" />
                نتائج الفصل الخامس ولوحة الشرف
              </span>
            </a>
            <a href="#structure" className="w-full lg:w-auto group px-8 md:px-12 py-4 md:py-5 glass-panel border-white/10 hover:border-electron-accent/40 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 font-cairo backdrop-blur-md text-center text-white font-bold text-base md:text-lg flex items-center justify-center gap-2">
              <Cpu size={18} className="text-gray-400 group-hover:text-electron-accent transition-colors" />
              هيكل ومجلس الدفعة
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
              <section id="structure" className="py-20 md:py-32 px-6 max-w-7xl mx-auto w-full relative">
        <div className="mb-16 md:mb-24 text-center">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-cairo"
          >
            هيكل <span className="gradient-text">الدفعة</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            تعرف على الفريق الإداري المسؤول عن تنظيم شؤون الدفعة والتنسيق الأكاديمي والاجتماعي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {roles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                transition={{ delay: index * 0.05 }}
                className={`glass-panel neon-card neon-glow p-8 md:p-10 flex flex-col gap-4 md:gap-6 items-start relative overflow-hidden group`}
              >
              <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-12 h-12 md:w-16 md:h-16 glass-panel flex items-center justify-center ${role.color} relative z-10`}>
                <role.icon size={24} />
              </div>
              
              <div className="relative z-10 w-full">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold tech-font tracking-tight mb-1">{role.title}</h3>
                  <div className="text-electron-accent/60 text-[10px] tech-font uppercase tracking-widest">Engineering Council</div>
                </div>
                
                <div className="mb-8">
                  <div className="text-white font-bold text-lg mb-1">{role.name}</div>
                  <p className="text-gray-500 text-sm line-clamp-2">
                    {role.description}
                  </p>
                </div>

                <button 
                  onClick={() => setSelectedRole(role)}
                  className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-bold hover:bg-electron-accent hover:text-black transition-all tech-font flex items-center justify-center gap-2 group/btn"
                >
                  عرض التفاصيل والمهام
                  <ChevronDown size={14} className="-rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
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
              {/* Student Resources Section */}
              <section id="resources" className="py-20 md:py-32 px-6 bg-electron-panel/30 border-y border-electron-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full circuit-bg opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-cairo">بوابة <span className="gradient-text">الدفعة</span></h2>
            <p className="text-gray-500 max-w-xl text-base md:text-lg">كل ما تحتاجه في مسيرتك بالسمستر السادس، مجمع في مكان واحد.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {studentResources.map((res, i) => (
              <motion.a
                key={res.title}
                href={res.link}
                onClick={(e) => {
                  if (res.title === "المقررات الدراسية") {
                    e.preventDefault();
                    setShowCourses(true);
                  } else if (res.title === "المواد والملفات") {
                    e.preventDefault();
                    setShowMaterials(true);
                  } else if (res.title === "القنوات الرسمية") {
                    e.preventDefault();
                    setShowChannels(true);
                  } else if (res.title === "الجداول الدراسية") {
                    e.preventDefault();
                    setShowSchedulesAlert(true);
                  }
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel neon-card neon-glow p-6 md:p-8 group hover:border-electron-accent transition-all relative overflow-hidden"
              >
                <div className="absolute top-4 left-4 tech-font text-[8px] md:text-[10px] text-electron-accent/40 border border-electron-accent/20 px-2 py-1 rounded">
                  {res.tag}
                </div>
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 bg-electron-accent/5 text-electron-accent rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-electron-accent group-hover:text-black transition-all"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                >
                  <res.icon size={24} />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 tech-font flex items-center gap-2">
                  {res.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                  {res.description}
                </p>
                <div className="flex items-center gap-2 text-electron-accent text-xs md:text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  دخول الآن <ChevronDown size={12} className="-rotate-90" />
                </div>
              </motion.a>
            ))}
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
              {/* CTA Section */}
              <section className="py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="glass-panel neon-card neon-glow p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent via-electron-secondary to-electron-accent" />
            
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 font-cairo tracking-tighter">تواصل مع <span className="text-electron-accent">الفريق</span></h2>
            <p className="text-sm md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-cairo">
              هل لديك اقتراح لتطوير المنصة أو استفسار أكاديمي؟ نحن هنا للاستماع إليك.
            </p>
            
            <div className="flex justify-center">
              <a 
                href="https://wa.me/+249118222378"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 md:px-12 py-4 md:py-5 bg-electron-accent text-black font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-electron-accent/20"
              >
                <MessageSquare size={20} />
                إرسال رسالة للدفعة
              </a>
            </div>
          </div>
        </div>
      </section>

            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative pt-20 pb-10 px-6 border-t border-electron-border bg-black overflow-hidden font-inter">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-electron-accent/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-electron-accent/5 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 mb-20">
            <div className="md:col-span-5">
              <div className="tech-font text-3xl font-bold gradient-text mb-6">ELEX28</div>
              <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
                المنصة الرقمية المتكاملة لطلاب هندسة الإلكترونيات - السمستر السادس. 
                نسعى لتمكين الطلاب من خلال توفير الموارد الأكاديمية والتنظيمية في بيئة تقنية متطورة.
              </p>
              <div className="flex gap-4">
                <a href="https://t.me/+Agkt05rV37tmODc0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-400/50 hover:bg-purple-400/5 transition-all duration-300">
                  <Send size={18} />
                </a>
                <a href="https://t.me/+Agkt05rV37tmODc0" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/5 transition-all duration-300">
                  <Share2 size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-gray-400 hover:text-electron-accent hover:border-electron-accent/50 hover:bg-electron-accent/5 transition-all duration-300">
                  <Globe size={18} />
                </a>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] opacity-90">الوصول السريع</h4>
              <ul className="space-y-4 text-gray-500 text-sm font-cairo">
                {['هيكل الدفعة', 'بوابة الدفعة', 'المكتبة الرقمية', 'تواصل معنا'].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-electron-accent transition-colors flex items-center gap-2 group">
                      <div className="w-1 h-1 rounded-full bg-electron-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] opacity-90">الموقع الأكاديمي</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-electron-accent shrink-0">
                    <Globe size={14} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">جامعة السودان للعلوم والتكنولوجيا</div>
                    <div className="text-gray-500 text-xs mt-1">كلية الهندسة - قسم هندسة الإلكترونيات</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-electron-secondary shrink-0">
                    <Zap size={14} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">الالتحاق: السمستر السادس</div>
                    <div className="text-gray-500 text-xs mt-1">دفعة 2020 | العام الدراسي 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium font-mono">
            <div className="text-center md:text-right">
              DESIGNED BY <span className="text-electron-accent">ELEX28 TECH TEAM</span>
              <div className="text-[8px] italic font-bold text-electron-accent drop-shadow-[0_0_5px_rgba(0,242,255,0.8)] mt-1 tech-font tracking-widest">
                OMAR FATHI
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <a href="#" className="hover:text-white transition-colors font-sans">Privacy</a>
              <a href="#" className="hover:text-white transition-colors font-sans">Terms</a>
              <a href="#" className="hover:text-white transition-colors font-sans">SUST © 2026</a>
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
              {/* Back to main button */}
              <div className="absolute top-[-50px] right-2 left-2 flex justify-between items-center">
                <span className="text-yellow-400 font-mono font-bold text-xs tracking-widest">[GOLD_ELEX28_POSTER]</span>
                <button 
                  onClick={() => setShowPosterModal(false)}
                  className="px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-xl text-yellow-400 hover:text-white transition-colors text-xs font-bold font-cairo flex items-center gap-1 cursor-pointer"
                >
                  <X size={14} />
                  إغلاق المعاينة
                </button>
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

                {/* Symmetrical Header vector stars */}
                <div className="text-center pb-6 border-b border-yellow-500/20 mb-6 relative z-10">
                  <div className="text-yellow-500 text-2xl flex justify-center gap-1 mb-2">
                    <Star size={16} />
                    <Star size={20} className="fill-yellow-500 text-yellow-500" />
                    <Star size={16} />
                  </div>
                  <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-gray-400 font-cairo uppercase tracking-widest leading-none">Sudan University of Science & Technology</h3>
                  <h2 className="text-base sm:text-lg md:text-2xl font-black text-white font-cairo mt-1.5 mb-1 text-yellow-500">جامعة السودان للعلوم والتكنولوجيا</h2>
                  <p className="text-[10px] sm:text-xs text-yellow-500/80 font-bold font-cairo">كلية الهندسة • قسم هندسة الإلكترونيات (ELEX28)</p>
                  
                  <div className="inline-block mt-4 px-4 py-1.5 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
                    <span className="text-[10px] sm:text-xs font-bold text-yellow-400 font-cairo tracking-wide">لوحة الشرف الذهبية الرسمية للسمستر الخامس</span>
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
                          <div className="border border-[#e2e8f0]/25 bg-[#050c18]/90 p-4 rounded-2xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(226,232,240,0.06)] order-2 sm:order-3 h-full">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-400 to-slate-200 flex items-center justify-center text-slate-900 font-bold text-lg mb-2 shadow-[0_0_15px_rgba(226,232,240,0.3)] relative font-sans">
                              🥈
                            </div>
                            <div className="text-slate-400 text-[10px] font-bold">المرتبة الثانية</div>
                            <div className="text-slate-200 text-xs font-black mt-1 line-clamp-2 min-h-[32px]">{top3[1].name}</div>
                            <div className="mt-2 text-slate-300 font-mono text-sm font-black text-center">GPA: {top3[1].gpa}</div>
                            <div className="mt-1 px-2.5 py-0.5 bg-slate-500/10 rounded-full text-[9px] text-slate-300 border border-slate-500/20 font-bold">{top3[1].merit}</div>
                          </div>
                        )}

                        {/* Rank 1 (Center/Gold Leader Card) - Prominently highlighted */}
                        {top3[0] && (
                          <div className="border border-yellow-500/40 bg-yellow-500/[0.04] p-5 rounded-2xl flex flex-col items-center text-center shadow-[0_0_30px_rgba(234,179,8,0.15)] order-1 sm:order-2 h-full scale-[1.05] relative z-20">
                            <div className="absolute top-[-10px] bg-yellow-500 text-black text-[9px] px-3 py-0.5 rounded-full font-black tracking-wide uppercase shadow-[0_0_10px_rgba(234,179,8,0.5)]">
                              صدارة الدفعة
                            </div>
                            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-300 flex items-center justify-center text-yellow-950 font-bold text-2xl mb-2.5 shadow-[0_0_20px_rgba(234,179,8,0.4)] relative font-sans">
                              🏆
                            </div>
                            <div className="text-yellow-400 text-xs font-bold leading-none animate-pulse">المرتبة الأولى</div>
                            <div className="text-yellow-400 text-sm font-black mt-1.5 leading-tight line-clamp-2 min-h-[36px]">{top3[0].name}</div>
                            <div className="mt-2 text-yellow-300 font-mono text-base font-black text-center">GPA: {top3[0].gpa}</div>
                            <div className="mt-1.5 px-3 py-0.5 bg-yellow-500/20 rounded-full text-[9.5px] text-yellow-300 border border-yellow-500/30 font-black">{top3[0].merit}</div>
                          </div>
                        )}

                        {/* Rank 3 (Left/Bronze Card) */}
                        {top3[2] && (
                          <div className="border border-amber-600/25 bg-[#170e05]/95 p-4 rounded-2xl flex flex-col items-center text-center shadow-[0_0_20px_rgba(217,119,6,0.05)] order-3 sm:order-1 h-full">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 to-amber-500 flex items-center justify-center text-amber-50 font-bold text-lg mb-2 shadow-[0_0_15px_rgba(217,119,6,0.25)] relative font-sans">
                              🥉
                            </div>
                            <div className="text-amber-500/85 text-[10px] font-bold">المرتبة الثالثة</div>
                            <div className="text-amber-400 text-xs font-bold mt-1 line-clamp-2 min-h-[32px]">{top3[2].name}</div>
                            <div className="mt-2 text-amber-400 font-mono text-sm font-black text-center">GPA: {top3[2].gpa}</div>
                            <div className="mt-1 px-2.5 py-0.5 bg-amber-500/10 rounded-full text-[9px] text-amber-400 border border-amber-500/20 font-bold">{top3[2].merit}</div>
                          </div>
                        )}
                      </div>

                      {/* Remaining Students grouped in 2 organized columns */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 relative z-10 font-cairo pr-1 mb-6">
                        <div className="space-y-2">
                          {remaining.slice(0, Math.ceil(remaining.length / 2)).map((s) => (
                            <div 
                              key={s.name}
                              className="flex items-center justify-between p-2.5 rounded-xl border border-[#ffffff]/5 bg-[#05070f]/40 hover:bg-[#0c1020]/50 transition-all text-right"
                            >
                              <div className="flex items-center gap-2 max-w-[75%] min-w-0">
                                <span className="w-5 h-5 rounded bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">
                                  {s.rank}
                                </span>
                                <span className="text-[11px] sm:text-xs font-bold truncate text-gray-300">
                                  {s.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
                                <span className="text-[8px] text-gray-500">GPA:</span>
                                <span className="text-xs text-cyan-400 font-semibold">{s.gpa}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-2">
                          {remaining.slice(Math.ceil(remaining.length / 2)).map((s) => (
                            <div 
                              key={s.name}
                              className="flex items-center justify-between p-2.5 rounded-xl border border-[#ffffff]/5 bg-[#05070f]/40 hover:bg-[#0c1020]/50 transition-all text-right"
                            >
                              <div className="flex items-center gap-2 max-w-[75%] min-w-0">
                                <span className="w-5 h-5 rounded bg-white/5 border border-white/10 text-gray-400 flex items-center justify-center shrink-0 font-mono text-[9px] font-bold">
                                  {s.rank}
                                </span>
                                <span className="text-[11px] sm:text-xs font-bold truncate text-gray-300">
                                  {s.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1 shrink-0 font-mono text-[10px]">
                                <span className="text-[8px] text-gray-500">GPA:</span>
                                <span className="text-xs text-cyan-400 font-semibold">{s.gpa}</span>
                              </div>
                            </div>
                          ))}
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
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="border border-electron-accent/20 bg-[#02040a]/98 p-6 md:p-8 max-w-md w-full relative overflow-hidden rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.15)] text-right font-cairo"
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
                  whileHover={{ scale: 1.02, boxShadow: "0 0 15px rgba(0,242,255,0.25)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowWelcome(false)}
                  className="w-full py-3 bg-gradient-to-r from-electron-accent to-purple-600 text-black font-extrabold text-sm rounded-xl transition-all cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <span>حبيبي يا هندسة</span>
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
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6 bg-black/90 backdrop-blur-md overflow-y-auto"
            onClick={() => setSelectedRole(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-panel p-6 md:p-10 max-w-2xl w-full relative overflow-hidden my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${selectedRole.gradient}`} />
              
              <button 
                onClick={() => setSelectedRole(null)}
                className="absolute top-4 left-4 text-gray-500 hover:text-electron-accent transition-colors"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                <div className={`w-16 h-16 md:w-24 md:h-24 glass-panel flex items-center justify-center ${selectedRole.color} shrink-0`}>
                  <selectedRole.icon size={32} className="md:size-10" />
                </div>
                
                <div className="flex-1">
                  <div className="mb-4 md:mb-6">
                    <h3 className="text-xl md:text-3xl font-bold font-cairo gradient-text mb-1 md:mb-2">{selectedRole.title}</h3>
                    <div className="text-white font-bold text-lg md:text-xl mb-1 font-cairo">{selectedRole.name}</div>
                    {selectedRole.deputy && (
                      <div className="text-electron-secondary font-bold text-xs md:text-sm mb-2 flex items-center gap-2 font-cairo">
                        <div className="w-1.5 h-1.5 rounded-full bg-electron-secondary animate-pulse" />
                        النائبة: {selectedRole.deputy}
                      </div>
                    )}
                    <div className="text-electron-accent/60 text-[10px] tech-font uppercase tracking-widest">Engineering Student | ELEX28</div>
                  </div>

                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <h4 className="text-electron-accent text-[10px] tech-font uppercase tracking-widest mb-2 md:mb-3">عن المنصب</h4>
                      <p className="text-gray-300 leading-relaxed text-xs md:text-base">
                        {selectedRole.description}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-electron-accent text-[10px] tech-font uppercase tracking-widest mb-2 md:mb-3">المهام والمسؤوليات</h4>
                      <ul className="grid grid-cols-1 gap-1.5 md:gap-2">
                        {selectedRole.tasks.map((task: string, i: number) => (
                          <li key={i} className="flex items-center gap-2 md:gap-3 text-gray-400 text-[11px] md:text-sm">
                            <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-electron-accent shadow-[0_0_5px_#00ffff]" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-white/5">
                      <a 
                        href={`https://wa.me/${selectedRole.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto inline-flex items-center justify-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 rounded-2xl bg-electron-accent text-black font-bold text-sm md:text-base hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-electron-accent/20"
                      >
                        <MessageSquare size={18} className="md:size-5" />
                        تواصل مباشر عبر واتساب
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
                  <h3 className="text-2xl md:text-4xl font-bold font-cairo gradient-text mb-2">المقررات والمحاضرين</h3>
                  <p className="text-gray-400 text-sm md:text-lg font-cairo">تفاصيل مواد الفصل الدراسي الحالي - ELEX28</p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-white/5 bg-white/5">
                  <table className="w-full text-right border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="p-3 md:p-6 text-electron-accent font-bold font-cairo text-xs md:text-lg">المادة</th>
                        <th className="p-3 md:p-6 text-electron-accent font-bold font-cairo text-xs md:text-lg">المحاضر</th>
                        <th className="p-3 md:p-6 text-electron-accent font-bold font-cairo text-xs md:text-lg text-center">الساعات</th>
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
                              <span className="truncate max-w-[80px] md:max-w-none">{course.prof}</span>
                            </div>
                          </td>
                          <td className="p-3 md:p-6 text-center">
                            <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-electron-accent/10 text-electron-accent text-[9px] md:text-xs font-bold tech-font border border-electron-accent/20 whitespace-nowrap">
                              {course.hours} CH
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* WhatsApp Channel */}
                  <motion.a
                    href="https://whatsapp.com/channel/0029VbCoSxB4NVipkChIbc15"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel neon-card neon-glow p-6 group hover:border-green-500 transition-all flex flex-col items-center text-center gap-4 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                      <MessageSquare size={32} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-cairo mb-1">قناة الواتساب</h4>
                      <p className="text-gray-500 text-[10px] md:text-xs font-cairo">أخبار الدفعة، التنبيهات العاجلة، والإعلانات الرسمية.</p>
                    </div>
                    <div className="px-5 py-1.5 rounded-full border border-green-500/30 text-green-500 text-[10px] font-bold group-hover:bg-green-500 group-hover:text-black transition-all font-cairo">
                      انضم الآن
                    </div>
                  </motion.a>

                  {/* Telegram Channel */}
                  <motion.a
                    href="https://t.me/+Agkt05rV37tmODc0"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel neon-card neon-glow p-6 group hover:border-blue-400 transition-all flex flex-col items-center text-center gap-4 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-all">
                      <Share2 size={32} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold font-cairo mb-1">قناة التلغرام</h4>
                      <p className="text-gray-500 text-[10px] md:text-xs font-cairo">المكتبة الرقمية، الملفات الأكاديمية، والنقاشات العلمية.</p>
                    </div>
                    <div className="px-5 py-1.5 rounded-full border border-blue-400/30 text-blue-400 text-[10px] font-bold group-hover:bg-blue-400 group-hover:text-black transition-all font-cairo">
                      انضم الآن
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

