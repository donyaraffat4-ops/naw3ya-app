"use client";
import Link from "next/link";

export default function Unit4Page() {
  
  const lessons = [
    { id: 1, title: "مقدمة عن تفتيت الصخور", desc: "تغير شكل سطح الأرض بفعل العوامل الطبيعية", color: "#f97316" },
    { id: 2, title: "تشكيل مظاهر سطح الارض", desc: "مفهوم التجوية وأنواعها", color: "#22c55e" },
    { id: 3, title: "أسباب تفتت الصخور", desc: "أسباب التجوية الكيميائية والميكانيكية", color: "#0ea5e9" },
    { id: 4, title: "التعرية وأسبابها", desc: "مفهوم التعرية والعوامل التي تسببها", color: "#a855f7" },
    { id: 5, title: "الرواسب", desc: "مفهوم الرواسب وأمثلتها", color: "#ef4444" }
  ];

  return (
    /* الحاوية الرئيسية بالخلفية المظلمة العميقة */
    <div className="relative min-h-screen bg-[#0a0503] text-white overflow-hidden" dir="rtl">
      
      {/* 🌌 الخلفية السينمائية المتوهجة الثابتة (Glow FX) */}
      <div className="fixed inset-0 z-0 bg-[#311c13] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-orange-900/15 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-amber-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#311c13]/5"></div>
      </div>

      {/* 🖼️ HEADER - تصميم الهيدر السينمائي */}
      <div className="relative h-112.5 w-full overflow-hidden z-10 shadow-2xl">
        <img
          src="/images/unit.png" 
          alt="تفتت الصخور"
          className="w-full h-full object-cover opacity-40 scale-105 transition-transform duration-2000 hover:scale-100"
        />
        {/* التدرج اللوني فوق صورة الهيدر */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0a0503] via-[#0a0503]/60 to-transparent flex flex-col items-center justify-end pb-16 px-4">
           <h1 className="text-white text-2xl md:text-6xl font-black text-center drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            الوحدة الرابعة: تفتت الصخور وحركتها
          </h1>
        </div>
      </div>

      {/* 📚 CONTENT - شبكة الدروس بتصميم الكروت الزجاجية */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {lessons.map((lesson) => (
            <Link key={lesson.id} href={`/Unit4/Lesson${lesson.id}`} className="group">

              <div className="relative bg-white/3 backdrop-blur-xl rounded-[3rem] p-10 border border-white/10 
              hover:border-amber-500/40 shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden h-full flex flex-col items-start text-right">
                
                {/* ✨ تأثير التوهج عند التمرير داخل الكرت */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] transition duration-700 opacity-0 group-hover:opacity-20"
                  style={{ backgroundColor: lesson.color }}
                ></div>

                {/* 🔢 Badge - رقم الدرس */}
                <div
                  style={{ backgroundColor: lesson.color }}
                  className="w-16 h-16 flex items-center justify-center rounded-3xl 
                  text-black font-black text-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)] mb-8 transition-all duration-500 group-hover:rotate-15 group-hover:scale-110"
                >
                  {lesson.id}
                </div>

                {/* 📝 Title */}
                <h2 className="text-3xl font-black text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {lesson.title}
                </h2>

                {/* 📄 Description */}
                <p className="text-slate-400 text-lg leading-relaxed mb-10 grow font-medium">
                  {lesson.desc}
                </p>

                {/* ➜ Action - زر الانتقال السفلي */}
                <div className="flex items-center justify-between w-full mt-auto pt-8 border-t border-white/5">
                  <span className="text-sm font-black uppercase tracking-widest text-amber-500/60 group-hover:text-amber-400 transition-all">
                    عرض تفاصيل الدرس
                  </span>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-amber-500 group-hover:text-black group-hover:border-transparent transition-all duration-500">
                    <span className="transform group-hover:-translate-x-1 transition-transform text-3xl">
                      ←
                    </span>
                  </div>
                </div>

              </div>

            </Link>
          ))}

        </div>

      </main>
    </div>
  );
}