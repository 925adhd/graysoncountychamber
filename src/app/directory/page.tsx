import DirectoryClient from "@/components/DirectoryClient";

export default function DirectoryPage() {
  return (
    <>
      {/* Page Header — compact on mobile, full on desktop */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-20 text-center">
          <h1 className="text-2xl sm:text-5xl font-bold">
            Business Directory
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-green-200 sm:text-green-100 max-w-2xl mx-auto">
            Find and support local Chamber member businesses.
          </p>
        </div>
      </section>

      <DirectoryClient />
    </>
  );
}
