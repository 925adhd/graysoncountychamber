import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about the Grayson County Chamber of Commerce, our mission, vision, and commitment to supporting local businesses in Kentucky.",
};

export default function AboutPage() {
  return (
    <>
      {/* Banner Image */}
      <section className="w-full">
        <div className="relative w-full h-64 sm:h-80 md:h-96">
          <Image
            src="/boardofdirectors.png"
            alt="Grayson County Chamber Board of Directors"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 25%' }}
            priority
          />
        </div>
      </section>

      {/* Page Heading + Intro */}
      <section className="pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            About the Chamber
          </h1>
          <p className="mt-4 sm:mt-5 text-xl sm:text-2xl text-gray-500 font-light leading-relaxed">
            Connecting businesses across Grayson County
          </p>
          <span className="inline-block mt-5 sm:mt-6 px-4 py-1.5 text-sm font-semibold text-green-700 bg-green-50 rounded-full tracking-wide border border-green-100">
            Serving Grayson County for 50+ years
          </span>

          <div className="mt-10 space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              The Grayson County Chamber of Commerce brings together local businesses, organizations, and community leaders to support growth, strengthen connections, and move our community forward.
            </p>
            <p>
              Whether you&apos;re a small business owner, a growing company, or someone looking to get involved locally, the Chamber creates opportunities to connect, promote, and succeed together.
            </p>
            <p className="text-green-700 font-medium">
              At the center of it all is one goal: helping Grayson County thrive.
            </p>
          </div>
        </div>
      </section>

      {/* What the Chamber Does - Icon Strip */}
      <section className="py-12 sm:py-14 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            What the Chamber Does
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Networking & Connections",
                desc: "Build real relationships that lead to opportunities, partnerships, and growth.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                ),
                title: "Promotion & Visibility",
                desc: "Get your business in front of the local community through events, features, and exposure.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Events & Growth",
                desc: "Attend events designed to help you learn, connect, and grow your business.",
              },
              {
                icon: (
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Resources & Support",
                desc: "Access tools, guidance, and a network that helps you move forward with confidence.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="text-green-600 shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* See the Chamber in Action */}
      <section className="py-14 sm:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              See the Chamber in Action
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              From networking events to community gatherings, this is what it looks like when local businesses come together.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/network.jpg"
                alt="Grayson County Chamber community members"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/luncheon-table.jpg"
                alt="Chamber members networking at a luncheon"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/chamberaction.jpg"
                alt="Chamber in action"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/leadership-signing.jpg"
                alt="Chamber leadership signing ceremony"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/about1.jpg"
                alt="Chamber group photo"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/cityoflfield.jpg"
                alt="City of Leitchfield"
                width={600}
                height={400}
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <div className="shrink-0">
              <Image
                src="/scholarship-students.jpg"
                alt="Chamber scholarship recipients"
                width={320}
                height={240}
                className="rounded-2xl shadow-md w-full sm:w-80 h-auto object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                $1,000 High School Senior Scholarship
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                The Chamber isn&apos;t just about business. Every spring, we invest in the next generation by awarding a scholarship to a local high school senior. It&apos;s one of the ways we give back to the community that supports us.
              </p>
              <p className="mt-5 text-lg text-green-700 font-semibold">
                Contact the Chamber at (270) 259-5587 for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join & Invest */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Join &amp; Invest in Your Community
          </h2>
          <div className="mt-8 space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              Becoming a Chamber member means more than joining a network. It&apos;s about increasing your visibility, building meaningful connections, and being part of something bigger in Grayson County.
            </p>
            <p>
              As a member, you gain access to opportunities that help your business grow while also contributing to the success of the entire community.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md border border-gray-100">
              <div className="bg-green-50 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To support local businesses and strengthen our community by creating opportunities for growth, connection, and success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-md border border-gray-100">
              <div className="bg-blue-50 rounded-xl w-14 h-14 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a driving force in building a stronger, more connected Grayson County where businesses and people thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Grayson County */}
      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Grayson County?
          </h2>
          <div className="mt-8 space-y-5 text-lg text-gray-600 leading-relaxed">
            <p>
              Grayson County is more than just a place to do business. It&apos;s a community where people support each other, where local businesses matter, and where growth is happening every day.
            </p>
            <p>
              From new developments and education opportunities to our lakes, local shops, and hometown feel, this is a place people are proud to live and work.
            </p>
            <p>
              And at the center of it all is a business community that continues to move forward together.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "Central Location",
                desc: "Easy access to major Kentucky markets and a strategic place for business",
              },
              {
                label: "Strong Community",
                desc: "Neighbors who show up, support local, and invest in each other",
              },
              {
                label: "Growing Economy",
                desc: "New opportunities, development, and a business-friendly environment",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-green-50/70 rounded-2xl p-5 sm:p-8 border border-green-100/80"
              >
                <h4 className="font-bold text-gray-900 text-xl">
                  {item.label}
                </h4>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the Chamber Does for You */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What the Chamber Does for You
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl">
            We&apos;re a member-driven organization funded by local business owners who believe in working together. Here&apos;s what that looks like:
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Helps you get discovered by the local community",
              "Connects you with other business owners and leaders",
              "Gives you opportunities to promote your business",
              "Keeps you informed about local opportunities and events",
              "Supports your growth with resources and guidance",
              "Welcomes new businesses with ribbon cuttings and celebrations",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <div className="text-green-500 shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            Trusted by the Community
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                100+
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Local Businesses
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                12+
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Events Annually
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                50+
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Years Serving
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Be Part of Something Bigger
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-green-100 leading-relaxed">
            The Chamber is only as strong as its members. Join us, attend an
            event, and see firsthand the difference we make together.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-white text-green-700 px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Join the Chamber
            </Link>
            <Link
              href="/events"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Upcoming Events
            </Link>
          </div>
          <p className="mt-6 text-green-200 text-base">
            Join 100+ local businesses already growing together.
          </p>
        </div>
      </section>
    </>
  );
}
