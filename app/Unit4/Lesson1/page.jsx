"use client";

export default function Lesson1() {
  return (
    /* الحاوية الرئيسية بالخلفية المظلمة */
    <main className="relative min-h-screen bg-[#0a0503] py-16 px-4 md:px-8 overflow-hidden shadow-2xl" dir="rtl">
      
      {/* 🌌 الخلفية السينمائية المتوهجة (Glow FX) */}
      <div className="fixed inset-0 z-0 bg-[#411c13]">
        <div className="absolute top-0 right-0 w-125 h-125 bg-orange-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-amber-900/5 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12">
        
        {/* عنوان الدرس الرئيسي - تصميم عصري */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-orange-100 to-amber-200 mb-6">
            الدرس الأول: مقدمة عن تفتيت الصخور
          </h1>
          <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <p className="text-amber-400 font-bold">هدف الدرس: توضيح مفهوم تفتيت الصخور وتفسير العوامل المؤثرة فيها.</p>
          </div>
        </header>

        {/* القسم الأول: مفهوم تفتيت الصخور */}
        <section className="bg-white/5 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10 group hover:border-orange-500/30 transition-all duration-500">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
            <span className="w-3 h-8 bg-linear-to-b from-orange-500 to-amber-600 rounded-full"></span>
            مقدمة عامة
          </h2>
          <p className="text-xl leading-relaxed text-slate-300 bg-white/5 p-8 rounded-4xl border-r-8 border-orange-600 shadow-inner">
            يتغير شكل سطح الأرض باستمرار بمرور الزمن نتيجة عوامل طبيعية مثل <span className="text-amber-400 font-bold">الماء والرياح وعوامل الطقس</span>، 
            حيث تؤدي هذه العوامل إلى تآكل الصخور وتفتيتها وتغيير شكل اليابسة (مثل تآكل الشواطئ وانهيار الطرق).
          </p>
        </section>

        {/* القسم الثاني: العوامل التي تسبب تغير سطح الأرض */}
        <section className="grid md:grid-cols-3 gap-8">
          {[
            { id: "01", title: "💨الرياح", desc: "تسبب في تحريك التربة من مكان لآخر وتعمل على تفتيت الصخور.", img: "/images/1.jpg" },
            { id: "02", title: "💧الماء", desc: "عندما تصطدم الأمواج بالشاطئ تسبب تفتت الصخور ونقلها.", img: "/images/4.png" },
            { id: "03", title: "🌡️عوامل الطقس", desc: "تتسبب الحرارة والبرودة والأمطار في تفتت الصخور تدريجياً.", img: "/images/5.png" }
          ].map((item) => (
            <div key={item.id} className="bg-white/5 backdrop-blur-md p-6 rounded-4xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-4xl mb-4 text-orange-500/50 font-black group-hover:text-orange-500 transition-colors">{item.id}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <div className="w-full overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-2 mb-4">
                <img src={item.img} alt={item.title} className="aspect-square w-full rounded-xl object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* القسم الثالث: التغير السريع لسطح الأرض */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#5a1a14] to-[#1a0f0a] text-white p-10 rounded-[3rem] shadow-2xl border border-orange-900/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <h2 className="relative z-10 text-3xl font-black mb-10 text-amber-500 flex items-center gap-3">
             ✨ التغير السريع لسطح الأرض
          </h2>
          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            {/* أثر الأقدام */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white border-r-4 border-blue-500 pr-4">أثر الأقدام</h4>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/6.jpg" className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500" />
                <img src="/images/7.jpg" className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500" />
              </div>
              <p className="text-slate-400 italic bg-black/20 p-3 rounded-lg">يختفي أثر الأقدام بسبب اندفاع مياه الأمواج على الرمال.</p>
            </div>
            {/* القلعة الرملية */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white border-r-4 border-blue-500 pr-4">القلعة الرملية</h4>
              <div className="grid grid-cols-2 gap-4">
                <img src="/images/8.jpg" className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500" />
                <img src="/images/9.jpg" className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500" />
              </div>
              <p className="text-slate-400 italic bg-black/20 p-3 rounded-lg">تختفي القلعة الرملية تماماً بسبب اندفاع مياه الأمواج عليها.</p>
            </div>
          </div>
        </section>

        {/* القسم الرابع: تغيرات بطيئة */}
        <section className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
          <h2 className="text-2xl font-black text-amber-500 mb-10 flex items-center gap-3">
            ⏳ تغيرات بطيئة تحدث في شكل سطح الأرض
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition">
              <img src="/images/10.jpg" className="w-24 h-24 rounded-2xl object-cover shadow-xl border-2 border-amber-900/30" />
              <div>
                <h4 className="font-bold text-white text-xl mb-2">الصخور الساحلية</h4>
                <p className="text-slate-400">تحتاج لفترة زمنية طويلة لتتفتت وتنتقل بفعل الرياح والماء.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition">
              <img src="/images/11.jpg" className="w-24 h-24 rounded-2xl object-cover shadow-xl border-2 border-amber-900/30" />
              <div>
                <h4 className="font-bold text-white text-xl mb-2">الأخدود</h4>
                <p className="text-slate-400">يتكون الأخدود بعد زمن طويل جداً بفعل جريان الماء وتآكل الصخور.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}