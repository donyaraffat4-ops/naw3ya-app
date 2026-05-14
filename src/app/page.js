"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      
      {/* 🌌 الخلفية السينمائية (مثل الصورة) */}
      <div className="fixed inset-0 z-0 bg-[#3c1c10]">
        {/* توهج برتقالي كبير في النصف السفلي */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-125 bg-orange-900/20 rounded-full blur-[120px]"></div>
        {/* إضاءة "نيون" ناعمة خلف النصوص */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-amber-600/10 rounded-full blur-[100px]"></div>
      </div>

      <section className="relative z-10 text-center px-6 w-full max-w-5xl">
        
        {/* العنوان الكبير بتأثير الإضاءة */}
   <h1 className="text-7xl md:text-[3rem] font-black leading-none mb-10">
  {/* السطر الأول: نص الترحيب بحجم أصغر قليلاً لجعل التصميم متوازن */}
  <span className="block text-white text-7xl md:text-4xl font-bold mb-4 drop-shadow-lg">
     مرحباً بك في مفهوم تفتت الصخور وحركتها🚀
  </span>

  {/* السطر الثاني: العنوان الرئيسي الكبير */}
   <h1 className="text-2xl md:text-[5rem] font-black leading-none mb-10"></h1>
  <span className="block bg-clip-text text-transparent bg-linear-to-t from-orange-600 to-amber-400 drop-shadow-[0_15px_30px_rgba(234,88,12,0.4)]">
    اكتشف أسرار تفتت الصخور في منصتنا الرقمية الأكثر تطوراً
  </span>
</h1>

        {/* الأزرار المصممة مثل الصورة التي أرفقتها (Glow Cards) */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-16">
          
          {/* زر ابدأ الرحلة */}
          <Link href="/Unit4" className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-500 to-[#6b3f2e] rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative px-10 py-6 bg-[#1a0f0a] rounded-2xl flex items-center gap-4 border border-white/10">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(245,158,11,0.6)]">🚀</div>
              <div className="text-right">
                <p className="text-white font-black text-xl">ابدأ رحلة التعلم</p>
                <p className="text-amber-500/60 text-xs font-bold uppercase">Discover Geology</p>
              </div>
            </div>
          </Link>

          {/* زر من نحن */}
          <Link href="/about" className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-slate-600 to-slate-900 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative px-12 py-6 bg-[#1a0f0a] rounded-2xl flex items-center gap-4 border border-white/10">
              <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-2xl">🔍</div>
              <div className="text-right">
                <p className="text-white font-black text-xl">تعرف علينا</p>
                <p className="text-slate-500 text-xs font-bold uppercase">Who We Are</p>
              </div>
            </div>
          </Link>

        </div>

      </section>
    </main>
  );
}