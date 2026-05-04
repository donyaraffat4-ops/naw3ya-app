"use client";
import React from "react";

export default function Lesson4() {
  return (
    /* الحاوية الرئيسية بالخلفية المظلمة */
    <main className="relative min-h-screen bg-[#0a0503] py-16 px-4 md:px-8 overflow-hidden shadow-2xl" dir="rtl">
      
      {/* 🌌 الخلفية السينمائية المتوهجة (Glow FX) */}
      <div className="fixed inset-0 z-0 bg-[#411c13] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-blue-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-cyan-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* هيدر الدرس الرابع - تصميم زجاجي */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-blue-100 to-cyan-200 mb-4">
            الدرس الرابع: التعرية
          </h1>
          <div className="inline-block px-8 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
            <p className="text-amber-400 font-bold">الهدف: أن يوضح الطالب مفهوم التعرية ويحدد العوامل المسببة لها.</p>
          </div>
        </header>

        {/* قسم مفهوم التعرية - تصميم عريض ومضيء */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-blue-600/20 to-cyan-600/20 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <section className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-black text-white flex items-center gap-4">
                  <span className="w-2 h-12 bg-linear-to-b from-amber-500 to-amber-400 rounded-full"></span>
                  ما هي التعرية؟
                </h2>
                <p className="text-2xl leading-relaxed text-slate-200 p-8 bg-white/5 rounded-4xl border-r-8 border-amber-400 shadow-inner">
                  هي العملية التي تحدث عند <span className="text-amber-400 font-bold">نقل الفتات الصخري</span> من مكان لآخر.
                </p>
              </div>
              <div className="w-56 h-56 bg-linear-to-br from-blue-500/20 to-cyan-500/10 rounded-full flex items-center justify-center text-8xl shadow-2xl border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition duration-500">
                🚚
              </div>
            </div>
          </section>
        </div>

        {/* قسم عوامل التعرية - نظام الكروت المضيئة */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white inline-block border-b-4 border-amber-400 pb-3 px-6 rounded-b-lg">
              العوامل التي تسبب التعرية
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* 1- الجاذبية الأرضية */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-slate-500/20 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full flex flex-col border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-slate-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:translate-y-2 transition duration-500">🏔️</div>
                <h3 className="text-2xl font-bold text-slate-200 mb-4">الجاذبية الأرضية</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  تسحب الجاذبية الصخور من جوانب الجبال إلى الأسفل.
                </p>
              </div>
            </div>

            {/* 2- الرياح */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-orange-500/20 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full flex flex-col border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-orange-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:animate-pulse">🌬️</div>
                <h3 className="text-2xl font-bold text-orange-400 mb-4">الرياح</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  تحرك الرياح الرمال إلى مسافات مختلفة حسب قوتها.
                </p>
              </div>
            </div>

            {/* 3- الأنهار */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-blue-500/20 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full flex flex-col border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:-translate-x-3 transition duration-500">🏞️</div>
                <h3 className="text-2xl font-bold text-blue-400 mb-4">الأنهار</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  تحرك الأنهار الصخور والتربة في اتجاه جريانها.
                </p>
              </div>
            </div>

            {/* 4- الأمطار */}
            <div className="group relative lg:col-start-1 lg:ml-auto w-full">
              <div className="absolute -inset-1 bg-cyan-500/20 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full flex flex-col border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:bounce transition duration-500">🌧️</div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">الأمطار</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  تجرف الأمطار التربة الزراعية القريبة.
                </p>
              </div>
            </div>

            {/* 5- الأمواج */}
            <div className="group relative lg:col-start-2 w-full">
              <div className="absolute -inset-1 bg-emerald-500/20 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full flex flex-col border border-white/10 hover:bg-white/10 transition-all">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:skew-x-6 transition duration-500">🌊</div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-4">الأمواج</h3>
                <p className="text-slate-400 leading-relaxed text-lg font-medium">
                  تسحب الأمواج رمال الشاطئ وتحركها لمكان آخر.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* تلميح ذكي في نهاية الصفحة - تصميم داكن بارز */}
        <div className="relative overflow-hidden bg-linear-to-r from-[#2a1a14] to-[#1a0f0a] p-10 rounded-[3rem] border border-orange-900/30 shadow-2xl flex flex-col md:flex-row items-center gap-8 group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition duration-700"></div>
          <div className="text-6xl animate-bounce">💡</div>
          <p className="text-2xl font-medium text-slate-200 leading-relaxed">
            تذكر دائماً: التجوية تفتت الصخور، ولكن <span className="text-amber-500 font-black underline decoration-amber-500/30 underline-offset-8">التعرية</span> هي "شركة النقل" التي تنقل هذا الفتات بعيداً!
          </p>
        </div>

      </div>
    </main>
  );
}