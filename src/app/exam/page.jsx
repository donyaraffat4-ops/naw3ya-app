"use client";
import React, { useState } from "react";

export default function ExamPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    { q: "ما العملية التي تفتت الصخور دون تغيير تركيبها؟", options: ["تجوية ميكانيكية", "تجوية كيميائية", "تعرية"], a: "تجوية ميكانيكية" },
    { q: "تفاعل الأكسجين مع الحديد في الصخور يسبب:", options: ["صدأ أحمر (تجوية كيميائية)", "تفتت ميكانيكي", "ترسيب رياحي"], a: "صدأ أحمر (تجوية كيميائية)" },
    { q: "عندما يتجمد الماء في شقوق الصخور، فإنه:", options: ["ينكمش", "يتمدد ويفتت الصخر", "يتبخر"], a: "يتمدد ويفتت الصخر" },
    { q: "قوة تسحب الصخور والحطام إلى أسفل المنحدرات:", options: ["الرياح", "الجاذبية الأرضية", "المغناطيسية"], a: "الجاذبية الأرضية" },
    { q: "أي مما يلي يعتبر تغيراً سريعاً لسطح الأرض؟", options: ["تكون الأخدود", "انهيار القلاع الرملية بفعل الموج", "نمو الجبال"], a: "انهيار القلاع الرملية بفعل الموج" },
    { q: "تكون الكثبان الرملية هو مثال حي على عملية:", options: ["الترسيب", "التعرية", "التجوية"], a: "الترسيب" },
    { q: "الأمطار الحمضية تسبب نوعاً من التجوية يُعرف بـ:", options: ["الميكانيكية", "الكيميائية", "البيولوجية"], a: "الكيميائية" },
    { q: "ما العامل الرئيسي في نحت الصخور بالصحراء؟", options: ["الماء", "الرياح المحملة بالرمال", "الثلج"], a: "الرياح المحملة بالرمال" },
    { q: "تسمى عملية استقرار الفتات في موقع جديد بـ:", options: ["التعرية", "التجوية", "الترسيب"], a: "الترسيب" },
    { q: "جذور الأشجار التي تكسر الأرصفة مثال على:", options: ["تجوية كيميائية", "تجوية ميكانيكية", "تآكل مائي"], a: "تجوية ميكانيكية" },
    { q: "الأخاديد والوديان تتكون نتيجة عمليات:", options: ["سريعة جداً", "بطيئة جداً (ملايين السنين)", "تحدث في يوم واحد"], a: "بطيئة جداً (ملايين السنين)" },
    { q: "أي غاز يتفاعل مع معادن الصخر ويغير لونها؟", options: ["النيتروجين", "الأكسجين", "الهيدروجين"], a: "الأكسجين" },
    { q: "اندفاع الأمواج التي تنقل الرمال بعيداً تسمى:", options: ["تجوية", "تعرية", "ترسيب"], a: "تعرية" },
    { q: "تفتت الصخور في مكانها دون انتقال يسمى:", options: ["تجوية", "تعرية", "ترسيب"], a: "تجوية" },
    { q: "تغير شكل الصخور الساحلية يستغرق وقتاً:", options: ["قصير جداً", "طويلاً جداً", "متوسطاً"], a: "طويلاً جداً" }
  ];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    const correct = option === questions[currentQuestion].a;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
      }
    }, 800);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#0a0503] p-4 overflow-hidden" dir="rtl">
      
      {/* 🌌 الخلفية المتوهجة البعيدة */}
      <div className="fixed inset-0 z-0 bg-[#3a0f0a]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-orange-900/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        
        {/* ✨ الإضاءة المركزة خلف الكارت مباشرة */}
        <div className="absolute -inset-4 z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-orange-500/20 via-amber-500/10 to-transparent rounded-[3rem] blur-[60px] animate-pulse"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/20 rounded-full blur-[80px]"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-600/20 rounded-full blur-[80px]"></div>
        </div>

        {/* صندوق الاختبار الشفاف */}
        <div className="relative bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-500">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-[#2a1a14] to-[#42261d] p-8 text-white text-center border-b border-white/5">
            <h1 className="text-3xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              الاختبار النهائي
            </h1>

            {!showResult && (
              <div className="mt-6 bg-white/10 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-linear-to-r from-orange-500 to-amber-400 h-full transition-all duration-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            {showResult ? (
              <div className="text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="text-7xl drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">🏆</div>
                <div>
                  <h2 className="text-4xl font-black text-white mb-2">انتهى الاختبار</h2>
                  <p className="text-xl text-slate-400 font-medium">
                    نتيجتك النهائية:
                    <span className="text-amber-500 font-black text-5xl block mt-3 drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]"> {score} / {questions.length}</span>
                  </p>
                </div>

                <button
                  onClick={() => window.location.reload()}
                  className="w-full bg-white text-black py-5 rounded-2xl font-black text-xl hover:bg-amber-500 hover:text-white transition-all active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.1)]"
                >
                  إعادة المحاولة
                </button>
              </div>
            ) : (
              <>
                {/* Question */}
                <div className="mb-10 text-right">
                  <p className="text-sm text-amber-500 font-black tracking-[0.2em] mb-3 uppercase">
                    السؤال {currentQuestion + 1} من {questions.length}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight drop-shadow-sm">
                    {questions[currentQuestion].q}
                  </h2>
                </div>

                {/* Options */}
                <div className="grid gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-6 text-right rounded-2xl border-2 transition-all duration-300 font-bold text-lg
                        ${
                          selectedAnswer === option
                            ? isCorrect
                              ? "bg-green-500/20 border-green-500 text-green-400 shadow-[0_0_25px_rgba(34,197,94,0.3)]"
                              : "bg-red-500/20 border-red-500 text-red-400 shadow-[0_0_25px_rgba(239,68,68,0.3)]"
                            : "bg-white/5 border-white/5 text-slate-300 hover:bg-white/10 hover:border-white/20 active:scale-[0.98]"
                        }
                      `}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}