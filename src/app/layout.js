import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "منصة العلوم | الوحدة الرابعة",
  description: "اكتشف عالم تفتت الصخور والجيولوجيا",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#0a0503] antialiased overflow-x-hidden">
        
        {/* 🚀 الـ Navbar "الكبسولة" - تصميم انسيابي ومشجع */}
        <header className="fixed top-0 left-0 w-full z-100 flex justify-center pt-6 px-4 pointer-events-none">
          <nav className="pointer-events-auto relative flex items-center justify-between px-8 h-16 w-full max-w-6xl bg-[#2a1a14]/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
            
            {/* اللوجو */}
            <div className="flex items-center gap-3">
              <span className="text-xl">🔬</span>
              <span className="text-white font-black tracking-tight text-lg">منصة العلوم</span>
            </div>

            {/* الروابط المركزية */}
            <div className="hidden md:flex items-center gap-10 text-white/80 font-bold text-sm">
              <Link href="/" className="hover:text-amber-400 transition-colors">الرئيسية</Link>
              <Link href="/about" className="hover:text-amber-400 transition-colors">حول المنصة</Link>
              <Link href="/Unit4" className="hover:text-amber-400 transition-colors border-b-2 border-amber-500 pb-0.5">الوحدة الرابعة</Link>
            </div>

            {/* زر الاختبارات المضيء */}
            <Link href="/exam" className="bg-linear-to-r from-orange-500 to-amber-500 px-6 py-2 rounded-xl text-black font-black text-xs shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:scale-105 transition-transform">
              الاختبارات
            </Link>
          </nav>
        </header>

        {/* مساحة الـ Padding لضمان عدم اختفاء الكلام تحت النافبار */}
        <div className="pt-28">
          {children}
        </div>

      </body>
    </html>
  );
}