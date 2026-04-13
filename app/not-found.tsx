import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold gradient-text mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          الصفحة غير موجودة
        </h1>
        <p className="text-gray-600 mb-8">
          الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
        </p>
        <Link
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold transition-colors"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}