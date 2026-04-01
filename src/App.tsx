import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Cpu, Zap, Radio, BookOpen, DollarSign, Share2, Palette, ChevronDown, X, Globe, ShieldCheck, MessageSquare } from "lucide-react";

// Interactive Particle Background Component
const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
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

const stats = [
  { label: "مهندس ومهندسة", value: "150+", icon: Globe },
  { label: "جامعة السودان", value: "SUST", icon: Cpu },
  { label: "السمستر السادس", value: "S6", icon: Zap },
  { label: "دفعة 2020", value: "ELEX28", icon: ShieldCheck },
];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [selectedRole, setSelectedRole] = useState<any>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const hasVisited = localStorage.getItem("elex28_visited_v3");
    if (!hasVisited) {
      setShowWelcome(true);
      localStorage.setItem("elex28_visited_v3", "true");
    }
  }, []);

  // Professional body scroll lock when modals are open
  useEffect(() => {
    if (showWelcome || selectedRole) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showWelcome, selectedRole]);

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

  return (
    <div className="min-h-screen flex flex-col selection:bg-electron-accent selection:text-black relative" dir="rtl">
      <InteractiveBackground />

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
                <p className="text-2xl md:text-5xl text-white font-black tech-font tracking-tight mb-2 leading-tight">
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
              className="glass-panel p-6 md:p-8 text-center group hover:border-electron-accent/40 transition-all"
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
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tech-font"
          >
            هيكل <span className="gradient-text">الدفعة</span>
          </motion.h2>
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
              className={`glass-panel p-8 md:p-10 flex flex-col gap-4 md:gap-6 items-start relative overflow-hidden group`}
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
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tech-font">بوابة <span className="gradient-text">الطلاب</span></h2>
            <p className="text-gray-500 max-w-xl text-base md:text-lg">كل ما تحتاجه في مسيرتك بالسمستر السادس، مجمع في مكان واحد.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {studentResources.map((res, i) => (
              <motion.a
                key={res.title}
                href={res.link}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-6 md:p-8 group hover:border-electron-accent transition-all relative overflow-hidden"
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
          <div className="glass-panel p-8 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-electron-accent via-electron-secondary to-electron-accent" />
            
            <h2 className="text-3xl md:text-6xl font-bold mb-4 md:mb-8 tech-font tracking-tighter">تواصل مع <span className="text-electron-accent">الفريق</span></h2>
            <p className="text-sm md:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
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
                {[Radio, Share2, Globe].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-xl border border-white/5 bg-white/5 flex items-center justify-center text-gray-400 hover:text-electron-accent hover:border-electron-accent/50 hover:bg-electron-accent/5 transition-all duration-300">
                    <Icon size={18} />
                  </a>
                ))}
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
              className="glass-panel p-6 md:p-10 max-w-lg w-full relative glow-pulse overflow-hidden my-auto"
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
                
                <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 gradient-text tech-font tracking-tighter">ELEX28</h2>
                <div className="text-electron-accent text-[10px] md:text-sm mb-4 md:mb-6 tech-font uppercase tracking-widest">Sudan University of Science & Technology</div>
                
                <div className="mb-8 md:mb-10">
                  <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">مرحب يا هندسة.. نورت دارك ⚡🛠️</h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                    مرحباً بك في المنصة الرسمية لطلاب هندسة الإلكترونيات <span className="text-white font-bold">السمستر السادس - دفعة 2020</span>. 
                    هذه المنصة مخصصة حصرياً لأعضاء الدفعة والتنسيق الأكاديمي.
                  </p>
                </div>
                
                <button 
                  onClick={() => setShowWelcome(false)}
                  className="w-full py-3 md:py-4 bg-gradient-to-r from-electron-accent to-electron-secondary text-white font-bold text-lg md:text-xl rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-electron-accent/20"
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
                    <h3 className="text-xl md:text-3xl font-bold tech-font gradient-text mb-1 md:mb-2">{selectedRole.title}</h3>
                    <div className="text-white font-bold text-lg md:text-xl mb-1">{selectedRole.name}</div>
                    {selectedRole.deputy && (
                      <div className="text-electron-secondary font-bold text-xs md:text-sm mb-2 flex items-center gap-2">
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
    </div>
  );
}

