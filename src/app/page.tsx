import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grayson County Chamber of Commerce | Growing Together",
  description:
    "Join the Grayson County Chamber of Commerce. Networking, promotion, and support for local businesses in Leitchfield, Kentucky.",
};

function HeroSection() {
  return (
    <section className="relative text-white">
      <div className="absolute inset-0">
        <Image
          src="/women.png"
          alt="Grayson County Chamber of Commerce community members"
          fill
          className="object-cover object-[center_35%]"
          priority
        />
        {/* Mobile: strong uniform overlay for readability. Desktop: directional gradient for visual depth */}
        <div
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div
          className="absolute inset-0 hidden sm:block"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.25) 100%)",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-28 lg:py-36">
        <div className="max-w-3xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.4)" }}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Growing Stronger
            <span className="block" style={{ color: '#33a241' }}>Together</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl">
            The Grayson County Chamber connects local businesses, builds
            community, and helps your business thrive in the heart of Kentucky.
          </p>
          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row gap-2.5 sm:gap-4">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-white text-green-700 px-5 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Join the Chamber
            </Link>
            <Link
              href="/benefits"
              className="inline-flex items-center justify-center border-2 border-white/80 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-lg hover:bg-white/10 transition-colors"
            >
              Explore Benefits
            </Link>
          </div>
          <div className="mt-4 sm:mt-6 flex flex-row sm:flex-row gap-5 sm:gap-6 text-white/70 sm:text-white/80 text-sm sm:text-base">
            <Link
              href="/directory"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Local Businesses &rarr;
            </Link>
            <Link
              href="/events"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Events &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyJoinSection() {
  const reasons = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Real Connections That Turn Into Customers",
      description:
        "Build relationships with local business owners that lead to real opportunities.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: "Get Your Business Seen Year-Round",
      description:
        "Promote your business through our directory, events, and community exposure.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Grow With a Strong Local Network",
      description:
        "Be part of a community that supports and refers each other.",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "Tools & Support to Help You Succeed",
      description:
        "Access resources, guidance, and opportunities designed for local businesses.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Businesses Choose the Chamber
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Your membership is an investment in your business and your community.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="text-green-600 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsPreviewSection() {
  const benefits = [
    "Business referrals — we ONLY refer Chamber Members",
    "Online directory listing seen by locals and visitors",
    "Monthly networking luncheons and events",
    "Free job postings to reach local talent",
    "Ribbon cutting ceremonies for your milestones",
    "Email marketing and social media promotion",
    "Discounts on venues, office supplies, and tools",
    "Leadership programs to grow your skills",
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Member Benefits
            </h2>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Your Chamber membership is an investment that pays for itself.
              Here&apos;s what you get when you join:
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <svg
                    className="w-6 h-6 text-green-500 shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base sm:text-lg text-gray-700">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              href="/benefits"
              className="inline-flex items-center mt-8 bg-green-600 text-white px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              See All Benefits
            </Link>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div className="bg-gradient-to-br from-green-100 to-blue-50 rounded-3xl p-12 text-center">
              <div className="text-6xl font-bold text-green-700">100+</div>
              <div className="text-xl text-gray-600 mt-2">
                Local Businesses Trust the Chamber
              </div>
              <div className="mt-8 text-5xl font-bold text-blue-600">50+</div>
              <div className="text-xl text-gray-600 mt-2">
                Years Serving Grayson County
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsPreviewSection() {
  const events = [
    {
      title: "Monthly Chamber Luncheon",
      description:
        "Join fellow business leaders for lunch, networking, and a guest speaker. The easiest way to stay connected.",
      label: "Monthly",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Business After Hours",
      description:
        "Relax, network, and tour a local business. A casual evening event hosted at rotating member locations.",
      label: "Quarterly",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Ribbon Cuttings",
      description:
        "Celebrate new businesses and expansions with the community. We love welcoming new members.",
      label: "Ongoing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Where Real Connections Happen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join monthly events, meet local leaders, and grow your network.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="group bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-green-100 transition-shadow duration-200 hover:shadow-md"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: 'rgba(51, 162, 65, 0.1)' }}
              >
                <div style={{ color: '#33a241' }}>{event.icon}</div>
              </div>
              <span className="inline-block mb-4 text-sm font-semibold px-3 py-1 rounded-full" style={{ color: '#33a241', backgroundColor: 'rgba(51, 162, 65, 0.1)' }}>
                {event.label}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {event.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            href="/events"
            className="inline-flex items-center text-green-600 font-semibold text-lg hover:text-green-700 transition-colors"
          >
            View All Events
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Joining the Chamber helped us connect with other local businesses and grow faster than we expected. The networking alone has been worth every penny.",
      name: "Local Business Owner",
      business: "Grayson County",
    },
    {
      quote:
        "The Chamber team genuinely cares about our success. From ribbon cuttings to referrals, they've been there for us since day one.",
      name: "Chamber Member",
      business: "Leitchfield, KY",
    },
    {
      quote:
        "We've gotten more visibility in the community through the Chamber than any advertising we've ever done. It's been a game-changer.",
      name: "Small Business Owner",
      business: "Grayson County",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Local Businesses Are Saying
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.quote}
              className="bg-gray-50 rounded-2xl p-5 sm:p-8 border border-gray-100"
            >
              <svg
                className="w-8 h-8 text-green-300 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-700 to-green-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ready to Grow Your Business?
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed max-w-2xl mx-auto">
          Join the Grayson County Chamber of Commerce and connect with a
          community that&apos;s invested in your success.
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link
            href="/join"
            className="inline-flex items-center justify-center bg-white text-green-700 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-green-50 transition-colors shadow-lg"
          >
            Become a Member Today
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
        <p className="mt-6 text-green-200 text-base">
          Join 100+ local businesses already growing together.
        </p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyJoinSection />
      <BenefitsPreviewSection />
      <EventsPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
