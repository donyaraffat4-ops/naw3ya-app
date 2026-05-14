"use client";

export default function Lesson1() {
  return (
    /* الحاوية الرئيسية بالخلفية المظلمة */
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

        {/* عنوان الدرس الرئيسي - تصميم عصري */}
        <header className="text-center bg-white/5 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-white via-orange-100 to-amber-200 mb-6">
            الدرس الأول: مقدمة عن تفتيت الصخور
          </h1>

          <div className="inline-block px-6 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <p className="text-amber-400 font-bold">
              هدف الدرس: توضيح مفهوم تفتيت الصخور وتفسير العوامل المؤثرة فيها.
            </p>
          </div>

          <p className="mt-8 text-slate-300 leading-relaxed text-lg max-w-4xl mx-auto">
            يعد سطح الأرض في حالة تغير مستمر بسبب العديد من العوامل الطبيعية التي
            تؤثر فيه مع مرور الزمن، حيث تعمل هذه العوامل على تغيير شكل الصخور
            والتربة والجبال والشواطئ. وتساعدنا دراسة تفتيت الصخور على فهم كيف
            تتكون التضاريس المختلفة وكيف تتغير البيئة المحيطة بنا باستمرار.
          </p>
        </header>

        {/* القسم الأول: مفهوم تفتيت الصخور */}
        <section className="bg-white/5 backdrop-blur-lg p-8 rounded-[2.5rem] border border-white/10 group hover:border-orange-500/30 transition-all duration-500">
          <h2 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
            <span className="w-3 h-8 bg-linear-to-b from-orange-500 to-amber-600 rounded-full"></span>
            مقدمة عامة
          </h2>

          <p className="text-xl leading-relaxed text-slate-300 bg-white/5 p-8 rounded-4xl border-r-8 border-orange-600 shadow-inner mb-6">
            يتغير شكل سطح الأرض باستمرار بمرور الزمن نتيجة عوامل طبيعية مثل{" "}
            <span className="text-amber-400 font-bold">
              الماء والرياح وعوامل الطقس
            </span>
            ، حيث تؤدي هذه العوامل إلى تآكل الصخور وتفتيتها وتغيير شكل اليابسة
            مثل تآكل الشواطئ وانهيار الطرق وتكوين الوديان والأخاديد.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-black/20 p-6 rounded-3xl border border-white/5">
              <h3 className="text-amber-400 font-bold text-xl mb-4">
                ما المقصود بتفتيت الصخور؟
              </h3>

              <p className="text-slate-400 leading-relaxed">
                تفتيت الصخور هو عملية طبيعية يتم فيها تكسير الصخور الكبيرة إلى
                أجزاء أصغر بفعل عوامل متعددة مثل الحرارة والمياه والرياح. وقد
                يحدث هذا التغير بسرعة أو ببطء شديد حسب نوع العامل المؤثر وقوة
                تأثيره.
              </p>
            </div>

            <div className="bg-black/20 p-6 rounded-3xl border border-white/5">
              <h3 className="text-amber-400 font-bold text-xl mb-4">
                أهمية دراسة تغير سطح الأرض
              </h3>

              <p className="text-slate-400 leading-relaxed">
                تساعدنا دراسة تغيرات سطح الأرض على فهم الظواهر الطبيعية وحماية
                البيئة والتعرف على أسباب بعض المشكلات مثل انجراف التربة وتآكل
                السواحل، كما تساعد في التخطيط الجيد للطرق والمباني والمنشآت.
              </p>
            </div>
          </div>
        </section>

        {/* القسم الثاني: العوامل التي تسبب تغير سطح الأرض */}
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              🌍 العوامل التي تسبب تغير سطح الأرض
            </h2>

            <p className="text-slate-400 leading-relaxed max-w-3xl mx-auto">
              توجد عدة عوامل طبيعية تؤثر في الصخور والتربة بشكل مستمر، وبعض هذه
              العوامل يحتاج إلى سنوات طويلة حتى يظهر تأثيره، بينما يحدث البعض
              الآخر بسرعة كبيرة خاصة أثناء العواصف والأمطار القوية.
            </p>
          </div>

          <section className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                title: "💨 الرياح",
                desc:
                  "تسبب الرياح في تحريك الرمال والتربة من مكان لآخر، كما تعمل الرمال المحمولة بالهواء على الاحتكاك بالصخور مما يؤدي إلى تآكلها وتفتيتها مع مرور الزمن.",
                img: "/images/1.jpg",
              },
              {
                id: "02",
                title: "💧 الماء",
                desc:
                  "يعد الماء من أقوى العوامل الطبيعية المؤثرة على سطح الأرض، فعندما تصطدم الأمواج بالشاطئ أو تجري المياه بين الصخور فإنها تؤدي إلى تفتتها ونقل أجزاء منها إلى أماكن أخرى.",
                img: "/images/4.png",
              },
              {
                id: "03",
                title: "🌡️ عوامل الطقس",
                desc:
                  "تؤدي الحرارة الشديدة والبرودة والأمطار إلى تمدد الصخور وانكماشها بشكل متكرر، مما يسبب تشققها وتكسرها تدريجياً بمرور الوقت.",
                img: "/images/5.png",
              },
            ].map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-md p-6 rounded-4xl border border-white/10 hover:bg-white/10 hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="text-4xl mb-4 text-orange-500/50 font-black group-hover:text-orange-500 transition-colors">
                  {item.id}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>

                <div className="w-full overflow-hidden rounded-2xl border border-white/5 bg-black/20 p-2 mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="aspect-square w-full rounded-xl object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <p className="text-slate-400 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </section>
        </section>

        {/* القسم الثالث: التغير السريع لسطح الأرض */}
        <section className="relative overflow-hidden bg-linear-to-br from-[#5a1a14] to-[#1a0f0a] text-white p-10 rounded-[3rem] shadow-2xl border border-orange-900/30">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

          <h2 className="relative z-10 text-3xl font-black mb-4 text-amber-500 flex items-center gap-3">
            ✨ التغير السريع لسطح الأرض
          </h2>

          <p className="relative z-10 text-slate-300 mb-10 leading-relaxed max-w-4xl">
            بعض التغيرات تحدث بسرعة كبيرة ويمكن ملاحظتها خلال دقائق أو ساعات،
            خاصة عند تأثير الأمواج أو الرياح القوية، حيث تختفي بعض المعالم
            البسيطة بسرعة نتيجة حركة الماء والرمال.
          </p>

          <div className="relative z-10 grid md:grid-cols-2 gap-12">
            
            {/* أثر الأقدام */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white border-r-4 border-amber-500 pr-4">
                أثر الأقدام
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/6.jpg"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500"
                />

                <img
                  src="/images/7.jpg"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500"
                />
              </div>

              <p className="text-slate-400 italic bg-black/20 p-3 rounded-lg leading-relaxed">
                يختفي أثر الأقدام بسرعة بسبب اندفاع مياه الأمواج على الرمال،
                حيث تعمل المياه على تحريك حبيبات الرمل وإعادة توزيعها من جديد،
                فيختفي الشكل الذي تركته الأقدام خلال وقت قصير.
              </p>
            </div>

            {/* القلعة الرملية */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white border-r-4 border-amber-500 pr-4">
                القلعة الرملية
              </h4>

              <div className="grid grid-cols-2 gap-4">
                <img
                  src="/images/8.jpg"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500"
                />

                <img
                  src="/images/9.jpg"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg border border-white/10 hover:scale-105 transition duration-500"
                />
              </div>

              <p className="text-slate-400 italic bg-black/20 p-3 rounded-lg leading-relaxed">
                تختفي القلعة الرملية تماماً بسبب اندفاع مياه الأمواج عليها،
                فالماء يعمل على تفكيك الرمال وإضعاف تماسكها حتى تنهار القلعة
                تدريجياً ثم تختفي بالكامل.
              </p>
            </div>
          </div>
        </section>

        {/* القسم الرابع: تغيرات بطيئة */}
        <section className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10">
          <h2 className="text-2xl font-black text-amber-500 mb-6 flex items-center gap-3">
            ⏳ تغيرات بطيئة تحدث في شكل سطح الأرض
          </h2>

          <p className="text-white leading-relaxed mb-10 text-lg">
            بعض التغيرات تحتاج إلى مئات أو آلاف السنين حتى تظهر بشكل واضح،
            وتحدث هذه التغيرات ببطء شديد نتيجة استمرار تأثير الماء والرياح
            والعوامل الجوية لفترات طويلة جداً.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition">
              <img
                src="/images/10.jpg"
                className="w-24 h-24 rounded-2xl object-cover shadow-xl border-2 border-amber-900/30"
              />

              <div>
                <h4 className="font-bold text-white text-xl mb-2">
                  الصخور الساحلية
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  تحتاج الصخور الساحلية لفترة زمنية طويلة حتى تتفتت بفعل الأمواج
                  والرياح، حيث تستمر المياه في الاصطدام بالصخور بشكل متكرر مما
                  يؤدي إلى تآكلها تدريجياً.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6 p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition">
              <img
                src="/images/11.jpg"
                className="w-24 h-24 rounded-2xl object-cover shadow-xl border-2 border-amber-900/30"
              />

              <div>
                <h4 className="font-bold text-white text-xl mb-2">
                  الأخدود
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  يتكون الأخدود بعد زمن طويل جداً نتيجة جريان الماء باستمرار بين
                  الصخور، حيث يؤدي الماء إلى نحت الصخور وتكوين ممرات عميقة مع
                  مرور الزمن.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-black/20 border border-white/5 p-6 rounded-3xl">
            <h3 className="text-amber-500 font-bold text-2xl mb-4">
              📚 ماذا تعلمنا؟
            </h3>

            <p className="text-white leading-loose text-lg">
              تعلمنا أن سطح الأرض يتغير باستمرار بسبب عوامل طبيعية متعددة مثل
              الماء والرياح وعوامل الطقس، وأن بعض هذه التغيرات يحدث بسرعة كبيرة
              بينما يحتاج البعض الآخر إلى فترات زمنية طويلة جداً. كما تعرفنا على
              دور هذه العوامل في تفتيت الصخور وتغيير شكل اليابسة مع مرور الزمن.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}