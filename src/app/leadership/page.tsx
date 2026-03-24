import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Chamber Leadership",
  description:
    "Meet the Board of Directors, President Circle Members, Hall of Fame Inductees, and Ambassadors of the Grayson County Chamber of Commerce.",
};

export default function LeadershipPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Chamber Leadership
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-100 max-w-2xl mx-auto">
            Meet the local leaders working behind the scenes to support
            businesses, strengthen the community, and move Grayson County
            forward.
          </p>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Meet the Board of Directors
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our Board of Directors provides leadership, direction, and vision
            for the Chamber &mdash; ensuring we serve the needs of local
            businesses and the community.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-green-100">
            <Image
              src="/25-26board.jpg"
              alt="Grayson County Chamber Board of Directors 2025-2026"
              width={900}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6 bg-green-50 rounded-2xl p-5 sm:p-8 border border-green-100 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Want to Connect With Our Leadership Team?
            </h3>
            <p className="text-lg text-gray-600">
              Contact the Chamber for current board member information.
            </p>
            <a
              href="tel:2702595587"
              className="inline-flex items-center justify-center mt-5 bg-green-600 text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-green-700 transition-colors"
            >
              Call (270) 259-5587
            </a>
          </div>
        </div>
      </section>

      {/* YP Leadership Council */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Young Professionals Leadership Council
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Supporting the next generation of business leaders in Grayson
            County.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/yp-leadership.jpg"
              alt="YP of Grayson County Leadership Council 2025-2026"
              width={900}
              height={675}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Hope Tollett", role: "President" },
              { name: "Samara Heavrin", role: "Vice President" },
              { name: "Myka Geary", role: "Secretary" },
              { name: "DooDah Hudson", role: "Past President Elect" },
            ].map((person) => (
              <div
                key={person.name}
                className="bg-white rounded-xl p-3 sm:p-5 text-center border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-bold text-gray-900 text-base sm:text-lg">
                  {person.name}
                </p>
                <p className="text-sm text-green-600 font-medium mt-1">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/yp"
              className="inline-flex items-center gap-2 bg-green-700 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-green-800 transition-colors shadow-sm"
            >
              Learn More About YP
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Ambassadors */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Chamber Ambassadors
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl">
            Ambassadors help welcome new businesses, support events, and
            represent the Chamber in the community. They serve at official
            functions including:
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Grand Openings",
              "Ribbon Cuttings",
              "Ground-Breakings",
              "Community Event Ceremonies",
              "Welcoming Visiting Dignitaries",
              "Other Official Chamber Functions",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200"
              >
                <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/ambassador.jpg"
              alt="Grayson County Chamber Ambassadors"
              width={900}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-8 bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 flex flex-col sm:flex-row gap-6 items-start">
            <Image
              src="/leadership-class.jpg"
              alt="Leadership Grayson County Program"
              width={120}
              height={120}
              className="rounded-xl shrink-0"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Become an Ambassador
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-2">
                Any member of the Grayson County Chamber in good standing is
                eligible to apply. All Ambassadors must complete the{" "}
                <strong>Leadership Grayson County Program</strong> before
                applying.
              </p>
              <p className="text-gray-600">
                Contact the Chamber to learn more about the Ambassador program.
              </p>
              <a
                href="tel:2702595587"
                className="inline-block mt-4 text-green-600 font-semibold text-lg hover:text-green-700"
              >
                Call (270) 259-5587
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* President Circle */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            President&apos;s Circle Members
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Our President&apos;s Circle represents businesses that have made a
            deeper investment in the Chamber and in the future of Grayson
            County.
          </p>
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <Image
                src="/presidentscircle.jpg"
                alt="President's Circle members"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <Image
                src="/presidents2.jpg"
                alt="President's Circle members"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <Image
                src="/presidents3.jpg"
                alt="President's Circle members"
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Chamber Hall of Fame
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We recognize individuals who have made a lasting impact on the
            Grayson County business community.
          </p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-green-100 shadow-sm">
            <Image
                src="/halloffame.jpg"
                alt="Chamber Hall of Fame inductees"
                width={900}
                height={600}
                className="w-full h-60 sm:h-96 object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Want to Be Part of the Chamber?
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-green-100 leading-relaxed">
            There are many ways to get involved &mdash; from leadership to
            events to community support.
          </p>
          <Link
            href="/join"
              className="inline-flex items-center justify-center mt-10 bg-white text-green-700 px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Join the Chamber
          </Link>
          <p className="mt-6 text-green-200 text-base">
            Join 100+ local businesses already growing together.
          </p>
        </div>
      </section>
    </>
  );
}
