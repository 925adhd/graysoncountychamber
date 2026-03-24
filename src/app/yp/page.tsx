import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  EyeIcon,
  BoltIcon,
  UserGroupIcon,
  BookOpenIcon,
  HeartIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Young Professionals of Grayson County",
  description:
    "YP of Grayson County is a dynamic network empowering the next generation of leaders through networking, education, and community involvement.",
};

export default function YPPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[140px] sm:min-h-[200px] flex items-center bg-green-800">
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20 text-center w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Young Professionals of Grayson County
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            Connection. Collaboration. Growth.
          </p>
        </div>
      </section>

      {/* About YP */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                What is YP of Grayson County?
              </h2>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                YP of Grayson County is a dynamic network dedicated to empowering the next generation of leaders in our community. A YP group brings together individuals in the early to mid-stages of their careers who are looking to grow professionally, expand their networks, and make a positive impact on their community.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                We don&apos;t want &ldquo;young&rdquo; to only mean age. Our group is about creating opportunities for young businesses, fresh ideas, and new energy &mdash; no matter if you&apos;re 25 or 55. YP is about the people who are building, starting, dreaming, and hustling in our community.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/yp-leadership.jpg"
                alt="YP of Grayson County Leadership Council"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-2.5">
                  <EyeIcon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed italic">
                &ldquo;To be a community partner; to be an asset for young entrepreneurs and business professionals looking to connect and network in a positive way.&rdquo;
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-2.5">
                  <BoltIcon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed italic">
                &ldquo;Provide resources to young entrepreneurs and business professionals in Grayson County while focusing on economic growth.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            What We Do
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Through networking events, educational programs, and service projects, YP of Grayson County strengthens the local economy, encourages innovation, and builds a supportive environment where young leaders can thrive.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-3">
                  <UserGroupIcon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Networking Events</h3>
              <p className="text-base text-gray-600">Connect with fellow professionals and build relationships that drive your career forward.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-3">
                  <BookOpenIcon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Educational Programs</h3>
              <p className="text-base text-gray-600">Develop new skills and gain insights from experienced business leaders and mentors.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm text-center">
              <div className="flex justify-center mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-3">
                  <HeartIcon className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Community Service</h3>
              <p className="text-base text-gray-600">Give back through fundraising and service projects that make a real difference locally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Making a Difference
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            YP has already donated over <strong>$2,000</strong> to several organizations through fundraising efforts to support our community. Future events will bring even more donations to various organizations in Grayson County.
          </p>
        </div>
      </section>

      {/* Leadership Council */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Leadership Council
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Guiding the next generation of business and community leaders.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
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
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Join YP of Grayson County
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed">
            We encourage all professionals to join our group and become the next generation of business and community leaders.
          </p>
          <div className="mt-6 inline-block bg-white/10 rounded-2xl px-8 py-5 border border-white/20">
            <p className="text-4xl font-bold">$40</p>
            <p className="text-green-200 mt-1">per year</p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:youngprofessionalsofgc@gmail.com"
              className="inline-flex items-center justify-center bg-white text-green-700 px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Email to Join
              <ArrowRightIcon className="w-5 h-5 ml-2" strokeWidth={2} />
            </a>
            <Link
              href="/join"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Chamber Membership
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
