"use client";
import React from "react";

export default function Lesson5() {
  return (
    /* الحاوية الرئيسية بالخلفية المظلمة */
    <main className="relative min-h-screen bg-[#0a0503] py-16 px-4 md:px-8 overflow-hidden shadow-2xl" dir="rtl">
      
      {/* 🌌 الخلفية السينمائية المتوهجة (Glow FX) */}
      <div className="fixed inset-0 z-0 bg-[#411c13] pointer-events-none">
        <div className="absolute top-0 left-0 w-150 h-150 bg-amber-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-emerald-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        
        {/* هيدر الدرس الخامس - تصميم زجاجي */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-amber-100 to-yellow-200 mb-4">
            الدرس الخامس: الرواسب
          </h1>
          <div className="inline-block px-8 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <p className="text-amber-400 font-bold text-lg">الهدف: أن يشرح الطالب عملية الترسيب ويتعرف على تشكل الرواسب في الطبيعة.</p>
          </div>
        </header>

        {/* قسم مفهوم الرواسب - تصميم Glow ذهبي */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-amber-600/20 to-yellow-600/20 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-700"></div>
          <section className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl font-black text-white flex items-center gap-4">
                  <span className="w-2 h-12 bg-linear-to-b from-amber-400 to-yellow-600 rounded-full"></span>
                  ما هي الرواسب؟
                </h2>
                <p className="text-2xl leading-relaxed text-slate-200 p-8 bg-white/5 rounded-4xl border-r-8 border-amber-500 shadow-inner">
                  هي <span className="text-amber-400 font-bold">بقايا الصخور</span> التي تمت تجويتها وتعريتها ثم ترسبت في مكان جديد.
                </p>
              </div>
              <div className="w-64 h-52 rounded-4xl overflow-hidden shadow-2xl border border-white/10 group-hover:scale-105 transition duration-500">
                <img src="/images/21.jpg" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0" alt="الرواسب" />
              </div>
            </div>
          </section>
        </div>

        {/* قسم عوامل وتشكيلات الترسيب */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white inline-block border-b-4 border-emerald-500 pb-3 px-6">
              أمثلة على تشكل الرواسب
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* 1- دلتا نهر النيل */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-emerald-500/10 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full border border-white/10 flex flex-col hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl bg-emerald-500/10 p-3 rounded-2xl">🌿</span>
                  <h3 className="text-2xl font-bold text-emerald-400">دلتا نهر النيل</h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  يحمل النهر الرواسب (الطمي) أثناء جريانه، وعندما يصب في البحر يرسّبها مكوناً الدلتا الخصبة.
                </p>
                <div className="mt-auto h-52 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                   <img src="/images/22.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="دلتا النيل" />
                </div>
              </div>
            </div>

            {/* 2- الكثبان الرملية */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-orange-500/10 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] h-full border border-white/10 flex flex-col hover:bg-white/10 transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl bg-orange-500/10 p-3 rounded-2xl">🏜️</span>
                  <h3 className="text-2xl font-bold text-orange-400">الكثبان الرملية</h3>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  قد تنقل أمواج البحر أو الرياح الرمال على الشاطئ فتتكون كثبان رملية صغيرة وتتراكم فوق بعضها.
                </p>
                <div className="mt-auto h-52 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                   <img src="/images/23.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="كثبان رملية" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* قسم التجوية وعلاقتها بالتعرية - بطاقة ختامية بارزة */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-amber-900 to-[#1a0f0a] rounded-[3rem] blur opacity-30 group-hover:opacity-50 transition duration-700"></div>
          <section className="relative bg-linear-to-br from-[#2a1a14] to-[#0a0503] text-white p-10 rounded-[3rem] shadow-2xl border border-orange-900/30">
             <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                <div className="relative">
                    <div className="absolute -inset-2 bg-amber-500/20 blur-xl rounded-full"></div>
                    <img src="/images/24.jpg" className="relative w-28 h-28 rounded-3xl object-cover border border-amber-500/30 shadow-2xl" alt="علاقة التجوية" />
                </div>
                <h3 className="text-3xl font-black italic text-amber-500 drop-shadow-md">الخلاصة: دورة حياة الصخور</h3>
             </div>
             <p className="text-xl text-slate-300 leading-relaxed border-r-4 border-amber-500 pr-8 py-2 bg-white/5 rounded-l-2xl">
                الهدف: أن يتعرف الطالب على العلاقة التكاملية بين <span className="text-white font-bold underline decoration-amber-500/50 underline-offset-4">تفتت الصخور (تجوية)</span>، 
                ثم <span className="text-white font-bold underline decoration-amber-500/50 underline-offset-4">نقلها (تعرية)</span>، 
                وصولاً إلى <span className="text-white font-bold underline decoration-amber-500/50 underline-offset-4">استقرارها النهائي (ترسيب)</span> لتكوين الرواسب.
             </p>
          </section>
        </div>

      </div>
    </main>
  );
}