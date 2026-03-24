import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import {
  UserGroupIcon,
  MegaphoneIcon,
  CalendarDaysIcon,
  WrenchScrewdriverIcon,
  BoltIcon,
  EyeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

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
                  <UserGroupIcon className="w-7 h-7" />
                ),
                title: "Networking & Connections",
                desc: "Build real relationships that lead to opportunities, partnerships, and growth.",
              },
              {
                icon: (
                  <MegaphoneIcon className="w-7 h-7" />
                ),
                title: "Promotion & Visibility",
                desc: "Get your business in front of the local community through events, features, and exposure.",
              },
              {
                icon: (
                  <CalendarDaysIcon className="w-7 h-7" />
                ),
                title: "Events & Growth",
                desc: "Attend events designed to help you learn, connect, and grow your business.",
              },
              {
                icon: (
                  <WrenchScrewdriverIcon className="w-7 h-7" />
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
                <BoltIcon className="w-7 h-7 text-green-600" />
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
                <EyeIcon className="w-7 h-7 text-blue-500" />
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
                  <CheckCircleIcon className="w-5 h-5" />
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
                <CountUp target={100} suffix="+" delay={0} />
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Local Businesses
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                <CountUp target={12} suffix="+" delay={150} />
              </div>
              <p className="mt-2 text-lg text-gray-600">
                Events Annually
              </p>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600">
                <CountUp target={50} suffix="+" delay={300} />
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
