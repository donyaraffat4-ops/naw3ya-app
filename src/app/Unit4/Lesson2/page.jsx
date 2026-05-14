"use client";
import React from "react";

export default function Lesson2() {
  return (
    <main
      className="relative min-h-screen bg-[#0a0503] py-16 px-4 md:px-8 overflow-hidden shadow-2xl"
      dir="rtl"
    >
 {/* 🌌 الخلفية السينمائية المتوهجة (Glow FX) */}
       <div className="fixed inset-0 z-0 bg-[#411c13] pointer-events-none">
        <div className="absolute top-0 left-0 w-150 h-150 bg-amber-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-emerald-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">

        {/* رأس الصفحة */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">


          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-orange-100 to-amber-200 mb-5 leading-tight">
            الدرس الثاني:
            تشكيل مظاهر سطح الأرض
          </h1>

          <div className="inline-block px-6 py-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
            <p className="text-amber-400 font-bold">
              ✨ الهدف: أن يتعرف الطالب على كيفية تشكيل مظاهر سطح الأرض
            </p>
          </div>

          <p className="mt-8 text-slate-300 text-lg leading-loose max-w-4xl mx-auto">
            يتغير شكل سطح الأرض باستمرار نتيجة تأثير عوامل طبيعية مختلفة مثل
            الرياح والمياه والأمطار والحرارة. وتعمل هذه العوامل على تكسير الصخور
            ونقل الفتات الصخري من مكان إلى آخر ثم ترسيبه، مما يؤدي إلى تكوين
            أشكال وتضاريس مختلفة على سطح الأرض.
          </p>

        </header>

        {/* مقدمة عامة */}
        <section className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10">

          

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-black/20 border border-white/5 p-6 rounded-3xl">
              <h3 className="text-amber-400 text-2xl font-black mb-4">
                🌪️ كيف يتغير سطح الأرض؟
              </h3>

              <p className="text-slate-400 leading-loose">
                يحدث تغير سطح الأرض بسبب عمليات طبيعية مستمرة مثل التجوية
                والتعرية والترسيب، وتؤثر هذه العمليات على الصخور والتربة عبر
                فترات زمنية مختلفة.
              </p>
            </div>

            <div className="bg-black/20 border border-white/5 p-6 rounded-3xl">
              <h3 className="text-amber-400 text-2xl font-black mb-4">
                ⛰️ أهمية هذه العمليات
              </h3>

              <p className="text-slate-400 leading-loose">
                تساعد هذه العمليات في تشكيل الجبال والسهول والوديان والشواطئ،
                كما تؤدي إلى إعادة توزيع الصخور والتربة في أماكن مختلفة.
              </p>
            </div>

          </div>
        </section>

        {/* الكروت الثلاثة */}
        <section className="grid md:grid-cols-3 gap-8">

          {/* التجوية */}
          <div className="group relative h-full">

            <div className="absolute -inset-1 bg-linear-to-r from-amber-400 to-orange-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 h-full flex flex-col items-center text-center">

              <div className="text-6xl mb-5">🧱</div>

              <h3 className="text-2xl font-black text-amber-500 mb-2">
                1- التجوية
              </h3>

              <p className="text-slate-400 text-sm mb-5 font-bold tracking-widest">
                (تكسير الصخور)
              </p>

              <div className="w-full h-1 bg-linear-to-r from-transparent via-amber-500/50 to-transparent mb-5"></div>

              <p className="text-slate-400 leading-loose">
                تبدأ عملية تشكيل سطح الأرض بالتجوية، حيث تتكسر الصخور إلى أجزاء
                صغيرة نتيجة الحرارة أو الماء أو الرياح.
              </p>

            </div>
          </div>

          {/* التعرية */}
          <div className="group relative h-full">

            <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-indigo-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 h-full flex flex-col items-center text-center">

              <div className="text-6xl mb-5">🌊</div>

              <h3 className="text-2xl font-black text-blue-400 mb-2">
                2- التعرية
              </h3>

              <p className="text-slate-400 text-sm mb-5 font-bold tracking-widest">
                (نقل فتات الصخور)
              </p>

              <div className="w-full h-1 bg-linear-to-r from-transparent via-blue-500/50 to-transparent mb-5"></div>

              <p className="text-slate-400 leading-loose">
                تقوم المياه والرياح بنقل فتات الصخور من مكان إلى آخر، مما يؤدي
                إلى تغيير شكل سطح الأرض تدريجياً.
              </p>

            </div>
          </div>

          {/* الترسيب */}
          <div className="group relative h-full">

            <div className="absolute -inset-1 bg-linear-to-r from-emerald-400 to-teal-500 rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 h-full flex flex-col items-center text-center">

              <div className="text-6xl mb-5">🏜️</div>

              <h3 className="text-2xl font-black text-emerald-400 mb-2">
                3- الترسيب
              </h3>

              <p className="text-slate-400 text-sm mb-5 font-bold tracking-widest">
                (إرساء الرواسب)
              </p>

              <div className="w-full h-1 bg-linear-to-r from-transparent via-emerald-500/50 to-transparent mb-5"></div>

              <p className="text-slate-400 leading-loose">
                عندما تقل سرعة الرياح أو المياه فإن فتات الصخور يترسب ويتجمع في
                أماكن مختلفة مكوناً تضاريس جديدة.
              </p>

            </div>
          </div>

        </section>

        {/* تعريف التجوية */}
        <div className="relative group">

          <div className="absolute -inset-1 bg-linear-to-r from-orange-600/20 to-amber-600/20 rounded-[3rem] blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

          <section className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/10 overflow-hidden">

            <div className="flex flex-col md:flex-row items-center gap-12">

              <div className="flex-1 text-right">

                <h2 className="text-3xl font-black text-white mb-6 flex items-center gap-3">
                  <span className="w-2 h-10 bg-amber-500 rounded-full"></span>
                  ما هي التجوية؟
                </h2>

                <p className="text-2xl leading-loose text-slate-200 bg-white/5 p-8 rounded-4xl border-r-8 border-amber-600 shadow-2xl mb-6">
                  هي عملية تكسير الصخور إلى أجزاء صغيرة نتيجة تأثير العوامل
                  الطبيعية المختلفة.
                </p>

                <p className="text-slate-400 text-lg leading-loose">
                  وتعد التجوية من أهم العمليات الطبيعية التي تساعد في تشكيل سطح
                  الأرض، حيث تؤدي إلى تفتيت الصخور وتحويلها إلى أجزاء صغيرة قد
                  تنتقل بعد ذلك بواسطة الرياح أو المياه.
                </p>

              </div>

              <div className="w-48 h-48 bg-linear-to-br from-amber-500/20 to-orange-600/10 rounded-full flex items-center justify-center text-7xl shadow-2xl border border-white/10 group-hover:rotate-12 transition duration-500">
                🧱
              </div>

            </div>
          </section>
        </div>

        {/* أنواع التجوية */}
        <section className="grid md:grid-cols-2 gap-8">

          {/* الميكانيكية */}
          <div className="relative group">

            <div className="absolute -inset-1 bg-orange-600/20 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 h-full flex flex-col">

              <h3 className="text-3xl font-black text-orange-400 mb-6 flex items-center gap-3">
                <span className="p-3 bg-orange-500/10 rounded-2xl">
                  ⚙️
                </span>
                التجوية الميكانيكية
              </h3>

              <div className="w-full h-72 overflow-hidden rounded-4xl mb-8 border border-white/10 bg-black/40">

                <img
                  src="/images/12.jpg"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                  alt="ميكانيكية"
                />

              </div>

              <p className="text-slate-300 leading-loose text-xl font-medium mb-5">
                تفتت وتتكسر فيها الصخور ولكن
                <span className="text-orange-400 font-bold underline decoration-orange-500/30 underline-offset-4">
                  {" "}بدون تغيير{" "}
                </span>
                في تركيبها.
              </p>

              <p className="text-slate-400 leading-loose">
                ومن أمثلة التجوية الميكانيكية تكسير الصخور بسبب اختلاف درجات
                الحرارة أو تجمد المياه داخل الشقوق الصخرية.
              </p>

            </div>
          </div>

          {/* الكيميائية */}
          <div className="relative group">

            <div className="absolute -inset-1 bg-blue-600/20 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 h-full flex flex-col">

              <h3 className="text-3xl font-black text-blue-400 mb-6 flex items-center gap-3">
                <span className="p-3 bg-blue-500/10 rounded-2xl">
                  🧪
                </span>
                التجوية الكيميائية
              </h3>

              <div className="w-full h-72 overflow-hidden rounded-4xl mb-8 border border-white/10 bg-black/40">

                <img
                  src="/images/13.jpg"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 opacity-80 group-hover:opacity-100"
                  alt="كيميائية"
                />

              </div>

              <p className="text-slate-300 leading-loose text-xl font-medium mb-5">
                تفتت وتتكسر فيها الصخور مع
                <span className="text-blue-400 font-bold underline decoration-blue-500/30 underline-offset-4">
                  {" "}وجود تغيير{" "}
                </span>
                في تركيبها الكيميائي.
              </p>

              <p className="text-slate-400 leading-loose">
                تحدث التجوية الكيميائية عندما تتفاعل الصخور مع الماء أو الهواء،
                مما يؤدي إلى تكوين مواد جديدة تختلف عن الصخور الأصلية.
              </p>

            </div>
          </div>

        </section>

        {/* ماذا تعلمنا */}
        <section className="bg-black/20 border border-white/10 p-8 rounded-[3rem]">

          <h2 className="text-3xl font-black text-amber-400 mb-6">
            📚 ماذا تعلمنا؟
          </h2>

          <p className="text-slate-300 text-lg leading-loose">
            تعلمنا أن سطح الأرض يتغير باستمرار نتيجة عمليات التجوية والتعرية
            والترسيب، وأن التجوية تنقسم إلى نوعين هما التجوية الميكانيكية
            والتجوية الكيميائية، كما تعرفنا على دور هذه العمليات في تشكيل مظاهر
            سطح الأرض المختلفة.
          </p>

        </section>

      </div>
    </main>
  );
}