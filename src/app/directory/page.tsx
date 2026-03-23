import DirectoryClient from "@/components/DirectoryClient";

export default function DirectoryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Business Directory
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-100 max-w-2xl mx-auto">
            Find and support local businesses in Grayson County. All listed
            businesses are proud Chamber members.
          </p>
        </div>
      </section>

      <DirectoryClient />
    </>
  );
}
