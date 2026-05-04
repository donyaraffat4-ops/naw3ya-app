"use client";
import React from "react";

export default function Lesson3() {
  return (
    /* الحاوية الرئيسية بالخلفية المظلمة */
    <main className="relative min-h-screen bg-[#0a0503] py-16 px-4 md:px-8 overflow-hidden shadow-2xl" dir="rtl">
      
      {/* 🌌 الخلفية السينمائية المتوهجة (Glow FX) */}
      <div className="fixed inset-0 z-0 bg-[#411c13] pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 bg-orange-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-150 h-150 bg-purple-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        
        {/* هيدر الدرس الثالث - تصميم زجاجي */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-orange-100 to-amber-200 mb-4">
            الدرس الثالث: أسباب تفتت الصخور
          </h1>
          <div className="inline-block px-8 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <p className="text-amber-400 font-bold">هدف الدرس: أن يعرف الطالب أسباب تفتيت الصخور وأنواعها.</p>
          </div>
        </header>

        {/* القسم الأول: التجوية الميكانيكية */}
        <section className="space-y-10">
          <div className="flex items-center gap-6 border-r-8 border-orange-500 pr-6 group">
            <span className="text-5xl group-hover:rotate-180 transition-transform duration-700">⚙️</span>
            <div>
              <h2 className="text-3xl font-black text-white">أسباب التجوية الميكانيكية</h2>
              <p className="text-orange-400/80 font-medium mt-1 text-lg">التعرف على العوامل الفيزيائية لتفتت الصخور.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "🌬️", 
                title: "الرياح والرمال", 
                img: "/images/17.png", 
                desc: "تعمل الرياح على نقل الرمال وتتسبب في نحت وتأكل الصخور الضخمة.",
                color: "from-orange-500 to-yellow-600"
              },
              { 
                icon: "❄️", 
                title: "الحرارة والبرودة", 
                img: "/images/18.jpg", 
                desc: "يتسلل الماء في الشقوق وعندما يتجمد تتسع الشقوق وتتفتت الصخرة.",
                color: "from-blue-500 to-red-500"
              },
              { 
                icon: "🌳", 
                title: "جذور الأشجار", 
                img: "/images/19.jpg", 
                desc: "أثناء نمو جذور الأشجار تضغط على الصخور فتسبب تفتتها.",
                color: "from-green-500 to-emerald-700"
              },
              { 
                icon: "🌊", 
                title: "المياه المندفعة", 
                img: "/images/20.jpg", 
                desc: "تصطدم الحصى بالصخور الكبيرة بفعل جريان الماء القوي.",
                color: "from-cyan-500 to-blue-700"
              }
            ].map((item, index) => (
              <div key={index} className="group relative h-full">
                <div className={`absolute -inset-0.5 bg-linear-to-br ${item.color} rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500`}></div>
                <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10 h-full flex flex-col hover:bg-white/10 transition-colors">
                  <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-inner border border-white/5">{item.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <div className="w-full h-48 overflow-hidden rounded-2xl mb-6 border border-white/5 bg-black/40">
                    <img src={item.img} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-500" alt={item.title} />
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* القسم الثاني: التجوية الكيميائية */}
        <section className="space-y-10">
          <div className="flex items-center gap-6 border-r-8 border-orange-500  pr-6">
            <span className="text-5xl">🧪</span>
            <div>
              <h2 className="text-3xl font-black text-white">أسباب التجوية الكيميائية</h2>
              <p className="text-orange-400/80  font-medium mt-1 text-lg">تغير تركيب الصخور لإنتاج مواد جديدة.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* 1- الماء */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] h-full border border-white/10 flex flex-col">
                <h3 className="text-2xl font-black text-blue-400 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-blue-500/10 rounded-2xl">💧</span> الماء
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  أغلب الكهوف تتكون من <strong className="text-white">الحجر الجيري</strong>، فعندما يمر الماء خلالها يقوم بإذابتها وتتكون معادن جديدة.
                </p>
                <div className="mt-auto h-52 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <img src="/images/14.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="الكهوف" />
                </div>
              </div>
            </div>

            {/* 2- الهواء */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-orange-700 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] h-full border border-white/10 flex flex-col">
                <h3 className="text-2xl font-black text-red-400 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-red-500/10 rounded-2xl">💨</span> الهواء
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  يتفاعل أكسجين الهواء الجوي مع <strong className="text-white">معدن الحديد</strong> المكون منه الصخر، فيتكون صدأ أحمر يضعف الصخر.
                </p>
                <div className="mt-auto h-52 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <img src="/images/15.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="صدأ الصخور" />
                </div>
              </div>
            </div>

            {/* 3- الأحماض */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-linear-to-r from-green-600 to-lime-600 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] h-full border border-white/10 flex flex-col">
                <h3 className="text-2xl font-black text-green-400 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-green-500/10 rounded-2xl">🍄</span> الأحماض
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg mb-8">
                  بعض الكائنات الحية مثل <strong className="text-white">الأشنات</strong> تنتج أحماضاً تتغلغل داخل الصخور فتسبب تأكلها وتفتتها.
                </p>
                <div className="mt-auto h-52 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
                  <img src="/images/16.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="الأشنات" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}