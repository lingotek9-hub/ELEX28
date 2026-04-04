import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Cpu, Zap, Radio, BookOpen, DollarSign, Share2, Palette, ChevronDown, X, Globe, ShieldCheck, MessageSquare, QrCode, User, Clock } from "lucide-react";

// Interactive Particle Background Component
const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      // Update CSS variables for cards
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 circuit-bg opacity-30" />
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-electron-accent/10 blur-[120px]"
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 50 }}
      />
      <motion.div 
        className="absolute w-[400px] h-[400px] rounded-full bg-electron-secondary/10 blur-[100px]"
        animate={{
          x: mousePos.x - 200,
          y: mousePos.y - 200,
        }}
        transition={{ type: "spring", damping: 40, stiffness: 40, delay: 0.1 }}
      />
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
    description: "توصيف المواد الدراسية للسمستر السادس.",
    link: "#", 
    icon: BookOpen,
    tag: "Academic"
  },
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
    name: "المعالجات الدقيقة",
    description: "بنية المعالج 8086، لغة التجميع (Assembly)، والتعامل مع الذاكرة والمنافذ.",
    icon: Cpu,
    color: "text-yellow-400",
    gradient: "from-yellow-500/10 to-orange-500/10",
    telegram: "https://t.me/c/3701824243/3",
    details: {
      title: "المعالجات الدقيقة (Microprocessors)",
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
      hours: "3 ساعات",
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
      hours: "3 ساعات",
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
    name: "VHDL",
    description: "لغة وصف العتاد لتصميم الأنظمة الرقمية والدوائر المتكاملة (FPGA).",
    icon: Cpu,
    color: "text-red-400",
    gradient: "from-red-500/10 to-rose-500/10",
    telegram: "https://t.me/c/3701824243/8",
    details: {
      title: "مادة الVHDL",
      instructor: "د. ريم",
      hours: "ساعتين",
      content: "المادة عبارة عن برمجة للهاردوير، و مقررها بنزل إلكتروني.",
      studyMethod: "كانت نصيحة من السناير انو يُفَضل انك تمر على الفيديوهات كدا كلها ورا بعض وتحاول تفهمها، بعداك ترجع تبدأ درس درس (لأنو الدروس ليها علاقة ببعض وكل ماتمشي لقدام الفات حيقع ليك أكتر فلما تمر على الفيديوهات حيبقى الفهم أسهل بإذن الله )؛ بالطريقة دي حيقع ليك فهم المادة بإذن الله..🙌🏼 وكمان قِيل انو شيت الدكتورة ماحيكفي بالغرض فممكن ترجع للجزئية بتاعت الVHDL في نهاية كل درس من مرجع فلويد بتاع الرقمية دا حيفيدك في البرمجة..أما بالنسبة للثيوري شيت الدكتورة كفاية ان شاء الله..✅",
      examInfo: "في الغالب بتكون امتحانات المادة دي مكررة، فالناس تركز على الامتحانات القديمة(ضع دائرة في كل الامتحانات بتاعتها مكررة من الامتحانات القديمة والتستات بس في امتحان سنايرنا 26 كان فيها شوية إضافات)، والبرامج كذلك تحل كل البرامج الفي المقرر+الامتحانات القديمة مابتجيك عوجة بإذن الله.. الامتحان بكون بسيط فبالتالي درجات الأسئلة كبيرة فالناس تحاول تضمن الدرجات."
    }
  },
  {
    name: "OOP",
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

const stats = [
  { label: "مهندس ومهندسة", value: "150+", icon: Globe },
  { label: "جامعة السودان", value: "SUST", icon: Cpu },
  { label: "السمستر السادس", value: "S6", icon: Zap },
  { label: "دفعة 2020", value: "ELEX28", icon: ShieldCheck },
];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showResultBanner, setShowResultBanner] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [showCourses, setShowCourses] = useState(false);
  const [showMaterials, setShowMaterials] = useState(false);
  const [showChannels, setShowChannels] = useState(false);
  const [showSchedulesAlert, setShowSchedulesAlert] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    setShowWelcome(true);
  }, []);

  useEffect(() => {
    if (showResultBanner) {
      const timer = setTimeout(() => {
        setShowResultBanner(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showResultBanner]);

  // Professional body scroll lock when modals are open
  useEffect(() => {
    if (showWelcome || selectedRole || showCourses || showMaterials || showChannels || showSchedulesAlert || selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showWelcome, selectedRole, showCourses, showMaterials, showChannels, showSchedulesAlert, selectedCourse]);

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
    { name: "المعالجات الدقيقة", prof: "د. خليفة الطيب", hours: 3 },
    { name: "التحليل العددي", prof: "د. ساتي", hours: 3 },
    { name: "إلكترونيات القدرة", prof: "د. ريم عبد المنعم", hours: 3 },
    { name: "الحقول الكهرومغناطيسية", prof: "د. فتح الرحمن إسماعيل", hours: 3 },
    { name: "تماثلية 2", prof: "د. فضل حسين", hours: 3 },
    { name: "VHDL", prof: "د. ريم عبد المنعم", hours: 2 },
    { name: "OOP", prof: "د. عزة كمال الدين", hours: 2 },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-electron-accent selection:text-black relative" dir="rtl">
      <InteractiveBackground />

      {/* Result Notification Banner */}
      <AnimatePresence>
        {showResultBanner && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-4 left-4 right-4 z-[100] flex justify-center pointer-events-none"
          >
            <div className="glass-panel neon-card neon-glow px-6 py-4 md:px-10 md:py-5 flex items-center gap-4 md:gap-6 pointer-events-auto relative overflow-hidden border-electron-accent/30 max-w-2xl w-full">
              <div className="absolute inset-0 bg-electron-accent/5 animate-pulse" />
              <div className="w-10 h-10 md:w-12 md:h-12 bg-electron-accent/20 rounded-xl flex items-center justify-center text-electron-accent shrink-0">
                <Zap size={24} className="animate-bounce" />
              </div>
              <div className="flex-1">
                <p className="text-white font-bold text-sm md:text-xl font-cairo leading-tight">
                  تنبيه هام: النتيجة قربت.. اكرب قاشك! 😂🔥
                </p>
                <p className="text-electron-accent/60 text-[10px] md:text-xs tech-font uppercase tracking-widest mt-1">
                  System Alert • Result Pending
                </p>
              </div>
              <button 
                onClick={() => setShowResultBanner(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.08),transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00ffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <motion.div
          style={{ opacity, scale }}
          className="z-10 text-center relative max-w-full"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-3 rounded-full border border-electron-accent/30 bg-electron-accent/10 text-electron-accent text-[10px] md:text-xs font-bold mb-8 md:mb-12 tech-font backdrop-blur-xl shadow-[0_0_30px_rgba(0,255,255,0.15)] mx-auto"
          >
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-electron-accent animate-pulse shadow-[0_0_10px_#00ffff]" />
            <span className="tracking-[0.2em] md:tracking-[0.3em] uppercase">Digital Ecosystem • ELEX28 • SUST</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-7xl md:text-[13rem] font-black mb-6 md:mb-12 tracking-tighter leading-none select-none">
            <span className="gradient-text drop-shadow-[0_0_40px_rgba(0,255,255,0.4)]">ELEX</span>
            <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">28</span>
          </h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4 md:space-y-8"
          >
            <div className="flex flex-col items-center">
              <div className="relative inline-block px-4">
                <p className="text-2xl md:text-5xl text-white font-black font-cairo tracking-tight mb-2 leading-tight">
                  المركز الرقمي المتكامل لطلاب <span className="text-electron-accent">هندسة الإلكترونيات</span>
                </p>
                <div className="h-0.5 md:h-1 w-1/2 mx-auto bg-gradient-to-r from-transparent via-electron-accent to-transparent opacity-50" />
              </div>
              
              <p className="text-sm md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium px-6 mt-4 md:mt-8">
                بوابة السمستر السادس | <span className="text-electron-secondary font-bold">دفعة 2020</span>
                <br />
                <span className="text-[8px] md:text-sm uppercase tracking-[0.1em] md:tracking-[0.2em] opacity-60">Sudan University of Science & Technology</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 md:mt-20 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-6"
          >
            <a href="#structure" className="w-full md:w-auto group relative px-8 md:px-14 py-4 md:py-5 bg-white text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105 active:scale-95 tech-font shadow-[0_20px_50px_rgba(255,255,255,0.1)] text-center">
              <div className="absolute inset-0 bg-electron-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 group-hover:text-black">هيكل الدفعة</span>
            </a>
            <a href="#resources" className="w-full md:w-auto px-8 md:px-14 py-4 md:py-5 glass-panel border-white/10 hover:border-electron-accent/50 hover:bg-white/5 transition-all hover:scale-105 active:scale-95 tech-font backdrop-blur-md text-center">
              بوابة الطلاب
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 md:bottom-16 flex flex-col items-center gap-2 md:gap-4 text-electron-accent/30"
        >
          <span className="text-[8px] md:text-[10px] tech-font tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold">Scroll to Explore</span>
          <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-electron-accent/50 to-transparent" />
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

      {/* Student Resources Section */}
      <section id="resources" className="py-20 md:py-32 px-6 bg-electron-panel/30 border-y border-electron-border relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full circuit-bg opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 font-cairo">بوابة <span className="gradient-text">الطلاب</span></h2>
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
                <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 tech-font">{res.title}</h3>
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
                <a href="https://whatsapp.com/channel/0029VbCoSxB4NVipkChIbc15" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-gray-400 hover:text-green-500 hover:border-green-500/50 hover:bg-green-500/5 transition-all duration-300">
                  <MessageSquare size={18} />
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
              <ul className="space-y-4 text-gray-500 text-sm">
                {['هيكل الدفعة', 'بوابة الطلاب', 'المكتبة الرقمية', 'تواصل معنا'].map((item, idx) => (
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
                    <div className="text-white text-sm font-medium">السمستر السادس</div>
                    <div className="text-gray-500 text-xs mt-1">دفعة 2020 | العام الدراسي 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-600 text-[10px] uppercase tracking-[0.2em] font-medium">
            <div className="text-center md:text-right">
              DESIGNED BY <span className="text-electron-accent">ELEX28 TECH TEAM</span>
              <div className="text-[8px] italic font-bold text-electron-accent drop-shadow-[0_0_5px_rgba(0,242,255,0.8)] mt-1 tech-font tracking-widest">
                OMAR FATHI
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">SUST © 2026</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
      `}} />

      {/* Modals placed at the end for proper stacking context */}
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-6 bg-black/95 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.8, y: 40, rotateX: 20 }}
              animate={{ scale: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.8, y: 40, rotateX: 20 }}
              className="glass-panel neon-card neon-glow p-6 md:p-10 max-w-lg w-full relative overflow-hidden my-auto"
            >
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-electron-accent to-electron-secondary" />
              
              <button 
                onClick={() => setShowWelcome(false)}
                className="absolute top-4 md:top-6 left-4 md:left-6 text-gray-500 hover:text-electron-accent transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-electron-accent to-electron-secondary p-[2px] rounded-full mx-auto mb-6 md:mb-8"
                >
                  <div className="w-full h-full bg-electron-bg rounded-full flex items-center justify-center">
                    <Cpu size={32} className="text-electron-accent md:size-10" />
                  </div>
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 gradient-text font-cairo tracking-tighter">ELEX28</h2>
                <div className="text-electron-accent text-[10px] md:text-sm mb-4 md:mb-6 tech-font uppercase tracking-widest">Sudan University of Science & Technology</div>
                
                <div className="mb-8 md:mb-10">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4 font-cairo">مرحب يا هندسة.. نورت دارك ⚡🛠️</h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    مرحباً بك في المنصة الرسمية لطلاب هندسة الإلكترونيات <span className="text-white font-bold">السمستر السادس - دفعة 2020</span>. 
                    هذه المنصة مخصصة حصرياً لأعضاء الدفعة والتنسيق الأكاديمي.
                  </p>
                </div>
                
                <button 
                  onClick={() => {
                    setShowWelcome(false);
                    setShowResultBanner(true);
                  }}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-electron-accent to-electron-secondary text-white font-bold text-lg md:text-xl rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-electron-accent/20 font-cairo"
                >
                  تأكيد الهوية والدخول
                </button>
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
              className="glass-panel p-6 md:p-10 max-w-4xl w-full relative overflow-hidden my-auto neon-card"
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
                        <th className="p-4 md:p-6 text-electron-accent font-bold font-cairo text-sm md:text-lg">المادة</th>
                        <th className="p-4 md:p-6 text-electron-accent font-bold font-cairo text-sm md:text-lg">المحاضر</th>
                        <th className="p-4 md:p-6 text-electron-accent font-bold font-cairo text-sm md:text-lg text-center">الساعات</th>
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
                          <td className="p-4 md:p-6 text-white font-bold font-cairo text-sm md:text-base group-hover:text-electron-accent transition-colors">
                            {course.name}
                          </td>
                          <td className="p-4 md:p-6 text-gray-300 font-cairo text-sm md:text-base">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                                <User size={14} className="text-electron-accent" />
                              </div>
                              {course.prof}
                            </div>
                          </td>
                          <td className="p-4 md:p-6 text-center">
                            <span className="px-3 py-1 rounded-full bg-electron-accent/10 text-electron-accent text-xs font-bold tech-font border border-electron-accent/20">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* WhatsApp Channel */}
                  <motion.a
                    href="https://whatsapp.com/channel/0029VbCoSxB4NVipkChIbc15"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-panel neon-card neon-glow p-8 group hover:border-green-500 transition-all flex flex-col items-center text-center gap-6 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-20 h-20 rounded-3xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-black transition-all">
                      <MessageSquare size={40} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-cairo mb-2">قناة الواتساب</h4>
                      <p className="text-gray-500 text-sm font-cairo">أخبار الدفعة، التنبيهات العاجلة، والإعلانات الرسمية.</p>
                    </div>
                    <div className="px-6 py-2 rounded-full border border-green-500/30 text-green-500 text-xs font-bold group-hover:bg-green-500 group-hover:text-black transition-all font-cairo">
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
                    className="glass-panel neon-card neon-glow p-8 group hover:border-blue-400 transition-all flex flex-col items-center text-center gap-6 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-20 h-20 rounded-3xl bg-blue-400/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-400 group-hover:text-black transition-all">
                      <Share2 size={40} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-cairo mb-2">قناة التلغرام</h4>
                      <p className="text-gray-500 text-sm font-cairo">المكتبة الرقمية، الملفات الأكاديمية، والنقاشات العلمية.</p>
                    </div>
                    <div className="px-6 py-2 rounded-full border border-blue-400/30 text-blue-400 text-xs font-bold group-hover:bg-blue-400 group-hover:text-black transition-all font-cairo">
                      انضم الآن
                    </div>
                  </motion.a>
                </div>

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

