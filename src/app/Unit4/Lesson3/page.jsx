"use client";
import React from "react";

export default function Lesson3() {
  return (
    <main
      className="relative min-h-screen bg-[#0a0503] py-16 px-4 md:px-8 overflow-hidden shadow-2xl"
      dir="rtl"
    >

      {/* 🌌 الخلفية السينمائية المتوهجة */}
    <div className="fixed inset-0 z-0 bg-[#411c13] pointer-events-none">
        <div className="absolute top-0 left-0 w-150 h-150 bg-amber-900/10 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-150 h-150 bg-emerald-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">

        {/* هيدر الدرس */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl">

          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-orange-100 to-amber-200 mb-4">
            الدرس الثالث: أسباب تفتت الصخور
          </h1>

          <div className="inline-block px-8 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <p className="text-amber-400 font-bold">
              هدف الدرس: أن يعرف الطالب أسباب تفتيت الصخور وأنواعها.
            </p>
          </div>

          <p className="mt-8 text-slate-300 text-lg leading-loose max-w-4xl mx-auto">
            تتعرض الصخور الموجودة على سطح الأرض لعوامل طبيعية متعددة تؤدي إلى
            تفتتها وتغير شكلها مع مرور الزمن. وقد يحدث هذا التفتت بصورة بطيئة
            جداً تحتاج إلى سنوات طويلة، أو يحدث بسرعة نتيجة تأثير بعض العوامل
            القوية مثل المياه المندفعة أو تغير درجات الحرارة.
          </p>

        </header>

        {/* مقدمة عامة */}
        <section className="bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10">

      

          <div className="grid md:grid-cols-2 gap-6 mt-8">

            <div className="bg-black/20 border border-white/5 p-6 rounded-3xl">
              <h3 className="text-orange-400 text-2xl font-black mb-4">
                🪨 لماذا تتفتت الصخور؟
              </h3>

              <p className="text-slate-400 leading-loose">
                تتفتت الصخور بسبب تعرضها المستمر للعوامل الجوية المختلفة، مما
                يؤدي إلى تشققها وضعفها بمرور الزمن حتى تتحول إلى أجزاء صغيرة.
              </p>
            </div>

            <div className="bg-black/20 border border-white/5 p-6 rounded-3xl">
              <h3 className="text-orange-400 text-2xl font-black mb-4">
                🌍 أهمية دراسة الصخور
              </h3>

              <p className="text-slate-400 leading-loose">
                تساعدنا دراسة الصخور وتفتتها على فهم كيفية تكوين التربة
                والتضاريس المختلفة، كما توضح تأثير العوامل الطبيعية على سطح
                الأرض.
              </p>
            </div>

          </div>
        </section>

        {/* التجوية الميكانيكية */}
        <section className="space-y-10">

          <div className="flex items-center gap-6 border-r-8 border-orange-500 pr-6 group">

            <span className="text-5xl group-hover:rotate-180 transition-transform duration-700">
              ⚙️
            </span>

            <div>
              <h2 className="text-3xl font-black text-white">
                أسباب التجوية الميكانيكية
              </h2>

              <p className="text-orange-400/80 font-medium mt-1 text-lg">
                التعرف على العوامل الفيزيائية لتفتت الصخور.
              </p>
            </div>

          </div>

          <p className="text-slate-300 text-lg leading-loose bg-white/5 border border-white/10 p-6 rounded-3xl">
            التجوية الميكانيكية هي عملية تكسير الصخور إلى أجزاء صغيرة دون أن
            يحدث أي تغير في تركيبها الكيميائي، حيث تبقى المعادن المكونة للصخور
            كما هي ولكن يتغير شكل الصخور وحجمها فقط.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                icon: "🌬️",
                title: "الرياح والرمال",
                img: "/images/17.png",
                desc:
                  "تعمل الرياح على نقل الرمال من مكان إلى آخر، وعندما تصطدم الرمال بالصخور فإنها تؤدي إلى نحتها وتآكلها تدريجياً حتى تتفتت.",
                color: "from-orange-500 to-yellow-600",
              },
              {
                icon: "❄️",
                title: "الحرارة والبرودة",
                img: "/images/18.jpg",
                desc:
                  "تؤدي الحرارة المرتفعة إلى تمدد الصخور بينما تسبب البرودة انكماشها، ومع تكرار هذه العملية تتشقق الصخور وتتفكك.",
                color: "from-blue-500 to-red-500",
              },
              {
                icon: "🌳",
                title: "جذور الأشجار",
                img: "/images/19.jpg",
                desc:
                  "تنمو جذور الأشجار داخل شقوق الصخور، ومع زيادة حجم الجذور تضغط على الصخور بقوة فتؤدي إلى تكسيرها.",
                color: "from-green-500 to-emerald-700",
              },
              {
                icon: "🌊",
                title: "المياه المندفعة",
                img: "/images/20.jpg",
                desc:
                  "تؤدي المياه الجارية إلى تحريك الحصى والصخور الصغيرة، وعندما تصطدم بالصخور الكبيرة تسبب تآكلها وتفتتها.",
                color: "from-cyan-500 to-blue-700",
              },
            ].map((item, index) => (
              <div key={index} className="group relative h-full">

                <div
                  className={`absolute -inset-0.5 bg-linear-to-br ${item.color} rounded-[2.5rem] blur opacity-10 group-hover:opacity-40 transition duration-500`}
                ></div>

                <div className="relative bg-white/5 backdrop-blur-md p-6 rounded-[2.5rem] border border-white/10 h-full flex flex-col hover:bg-white/10 transition-colors">

                  <div className="bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4 shadow-inner border border-white/5">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4">
                    {item.title}
                  </h3>

                  <div className="w-full h-48 overflow-hidden rounded-2xl mb-6 border border-white/5 bg-black/40">

                    <img
                      src={item.img}
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition duration-500"
                      alt={item.title}
                    />

                  </div>

                  <p className="text-slate-400 text-sm leading-loose">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* التجوية الكيميائية */}
        <section className="space-y-10">

          <div className="flex items-center gap-6 border-r-8 border-orange-500 pr-6">

            <span className="text-5xl">🧪</span>

            <div>
              <h2 className="text-3xl font-black text-white">
                أسباب التجوية الكيميائية
              </h2>

              <p className="text-orange-400/80 font-medium mt-1 text-lg">
                تغير تركيب الصخور لإنتاج مواد جديدة.
              </p>
            </div>

          </div>

          <p className="text-slate-300 text-lg leading-loose bg-white/5 border border-white/10 p-6 rounded-3xl">
            تحدث التجوية الكيميائية عندما تتفاعل الصخور مع الماء أو الهواء أو
            بعض المواد الكيميائية، مما يؤدي إلى تغير تركيب الصخور وتكوين مواد
            جديدة تختلف عن الصخور الأصلية.
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {/* الماء */}
            <div className="group relative">

              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-indigo-600 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] h-full border border-white/10 flex flex-col">

                <h3 className="text-2xl font-black text-blue-400 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-blue-500/10 rounded-2xl">
                    💧
                  </span>
                  الماء
                </h3>

                <p className="text-slate-300 leading-loose text-lg mb-5">
                  يعد الماء من أهم أسباب التجوية الكيميائية، حيث يتفاعل مع بعض
                  أنواع الصخور ويؤدي إلى إذابتها أو تغيير تركيبها.
                </p>

                <p className="text-slate-400 leading-loose mb-8">
                  أغلب الكهوف تتكون من الحجر الجيري، وعندما يمر الماء خلاله
                  يذيب أجزاء منه ببطء شديد مما يؤدي إلى تكوين تجاويف وكهوف
                  كبيرة.
                </p>

                <div className="mt-auto h-52 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

                  <img
                    src="/images/14.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt="الكهوف"
                  />

                </div>

              </div>
            </div>

            {/* الهواء */}
            <div className="group relative">

              <div className="absolute -inset-1 bg-linear-to-r from-red-600 to-orange-700 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] h-full border border-white/10 flex flex-col">

                <h3 className="text-2xl font-black text-red-400 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-red-500/10 rounded-2xl">
                    💨
                  </span>
                  الهواء
                </h3>

                <p className="text-slate-300 leading-loose text-lg mb-5">
                  يتفاعل أكسجين الهواء مع بعض المعادن الموجودة داخل الصخور مثل
                  الحديد.
                </p>

                <p className="text-slate-400 leading-loose mb-8">
                  يؤدي هذا التفاعل إلى تكوين الصدأ الذي يضعف الصخور ويجعلها أكثر
                  عرضة للتفتت والانهيار بمرور الزمن.
                </p>

                <div className="mt-auto h-52 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

                  <img
                    src="/images/15.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt="صدأ الصخور"
                  />

                </div>

              </div>
            </div>

            {/* الأحماض */}
            <div className="group relative">

              <div className="absolute -inset-1 bg-linear-to-r from-green-600 to-lime-600 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-500"></div>

              <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] h-full border border-white/10 flex flex-col">

                <h3 className="text-2xl font-black text-green-400 mb-6 flex items-center gap-3">
                  <span className="p-3 bg-green-500/10 rounded-2xl">
                    🍄
                  </span>
                  الأحماض
                </h3>

                <p className="text-slate-300 leading-loose text-lg mb-5">
                  تنتج بعض الكائنات الحية أحماضاً طبيعية تؤثر على الصخور وتعمل
                  على تآكلها.
                </p>

                <p className="text-slate-400 leading-loose mb-8">
                  من أمثلة ذلك الأشنات التي تنمو على الصخور، حيث تفرز مواد حمضية
                  تتغلغل داخل الصخور وتؤدي إلى ضعفها وتفتتها مع الوقت.
                </p>

                <div className="mt-auto h-52 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">

                  <img
                    src="/images/16.jpg"
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    alt="الأشنات"
                  />

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ماذا تعلمنا */}
        <section className="bg-black/20 border border-white/10 p-8 rounded-[3rem]">

          <h2 className="text-3xl font-black text-amber-400 mb-6">
            📚 ماذا تعلمنا؟
          </h2>

          <p className="text-slate-300 text-lg leading-loose">
            تعلمنا أن الصخور تتفتت بسبب عوامل طبيعية مختلفة، وأن التجوية تنقسم
            إلى نوعين هما التجوية الميكانيكية والتجوية الكيميائية. كما تعرفنا
            على دور الرياح والمياه والحرارة والهواء والأحماض في تكسير الصخور
            وتغيير شكل سطح الأرض.
          </p>

        </section>

      </div>
    </main>
  );
}