"use client";

export default function AboutPage() {
  return (
    <main className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#0a0503]" dir="rtl">
      
      {/* 🌌 الخلفية السينمائية (تأثير النيون المتوهج) */}
      <div className="fixed inset-0 z-0 bg-[#0a0503]">
        {/* توهج برتقالي كبير في النصف السفلي */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full max-w-5xl h-125 bg-orange-900/20 rounded-full blur-[120px]"></div>
        {/* توهج برتقالي مركزي خلف النص */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-125 bg-orange-900/20 rounded-full blur-[130px]"></div>
        
        {/* بقع ضوئية جانبية خفيفة */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#6b3f2e]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl text-center px-6">
        
        

        {/* العنوان الرئيسي بتأثير التدرج اللوني */}
        <h1 className="text-5xl md:text-5xl font-black mb-12 select-none">
          <span className="bg-clip-text text-transparent bg-linear-to-b from-white via-white to-orange-200 drop-shadow-lg">
            نبذة عن الوحدة الرابعة
          </span>
        </h1>

        {/* صندوق المحتوى الشفاف (Glassmorphism) */}
        <div className="relative">
          {/* ظل ضوئي خلف الصندوق */}
          <div className="absolute -inset-1 bg-linear-to-r from-orange-600/20 to-amber-500/20 rounded-3xl blur-xl opacity-30"></div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
            <p className="text-xl md:text-1xl text-orange-50/90 leading-[1.8] font-medium drop-shadow-sm">
              تناول هذه الوحدة <span className="text-amber-400 font-bold border-b-2 border-amber-400/30">تفتت الصخور</span> وحركتها وتغير شكل سطح الأرض، 
              مثل التجوية والتعرية وأسباب تفتت الصخور والعوامل المؤثرة عليها بطريقة 
              <span className="text-amber-400 font-bold"> مبسطة وسهلة الفهم</span>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
