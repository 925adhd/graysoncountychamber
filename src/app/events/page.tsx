import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  MegaphoneIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming events, luncheons, and community gatherings hosted by the Grayson County Chamber of Commerce.",
};

const upcomingEvents = [
  {
    title: "Monthly Chamber Luncheon",
    date: "Second Thursday of Every Month",
    time: "11:30 AM - 1:00 PM",
    location: "Centre on Main, Leitchfield",
    description:
      "Attended by 100–140 members, our monthly luncheon features guest speakers and incredible networking. Sponsor a luncheon for $500 — includes a front-page newsletter article, press releases, 5 tickets, a 3–5 minute presentation, table decorating, and door prizes. Co-sponsorships available.",
    tag: "Monthly",
    image: "/lucheontable.jpg",
    imagePosition: "center 25%",
    category: "networking",
  },
  {
    title: "Business After Hours",
    date: "Quarterly",
    time: "5:00 PM - 7:00 PM",
    location: "Rotating Member Locations",
    description:
      "A relaxed evening networking event at different member businesses. Tour the host business, enjoy refreshments, and connect.",
    tag: "Quarterly",
    image: "/afterhours.jpg",
    category: "networking",
  },
  {
    title: "Annual Chamber Banquet",
    date: "Annually",
    time: "6:00 PM - 9:00 PM",
    location: "Centre on Main, Leitchfield",
    description:
      "Our biggest event of the year! Celebrate member accomplishments, recognize outstanding businesses, and enjoy an evening of fellowship.",
    tag: "Yearly",
    image: "/annual.jpg",
    category: "community",
  },
  {
    title: "Ribbon Cutting Ceremonies",
    date: "As Scheduled",
    time: "Varies",
    location: "At the Business Location",
    description:
      "We celebrate new businesses and expansions with a ribbon cutting ceremony, photos, and social media promotion.",
    tag: "Ongoing",
    image: "/ribboncut.jpg",
    category: "community",
  },
  {
    title: "Hometown Christmas",
    date: "First Weekend in December",
    time: "Parade at 4:00 PM Saturday",
    location: "Downtown Leitchfield Square",
    description:
      "Hosted with Leitchfield Tourism and Grayson County Tourism, Hometown Christmas features the Hometown Christmas Parade, Christmas on the Square with vendors, kids' activities, food trucks, and local shops open for shopping local!",
    tag: "Yearly",
    image: "/festival.jpg",
    category: "community",
  },
  {
    title: "Fall Crawl & Spring Hop",
    date: "Fall & Spring",
    time: "Varies",
    location: "Local Businesses, Grayson County",
    description:
      "Shop local events that encourage residents to visit and support small businesses throughout Grayson County. Participants pick up swag bags filled with goodies from local shops along the way.",
    tag: "Seasonal",
    image: "/fallbags.jpg",
    category: "community",
  },
  {
    title: "Small Business Workshops",
    date: "Periodically",
    time: "Varies",
    location: "Centre on Main, Leitchfield",
    description:
      "Workshops on marketing, social media, business planning, and more — designed to help you learn new skills and grow.",
    tag: "Periodic",
    image: "/workshop.jpg",
    category: "workshops",
  },
];

export default function EventsPage() {
  return (
    <>
      {/* Hero Header with Background Image */}
      <section className="relative min-h-[340px] sm:min-h-[400px] flex items-center">
        <Image
          src="/luncheon-overhead.jpg"
          alt="Grayson County Chamber of Commerce event"
          fill
          className="object-cover object-center"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center w-full">
          <h1
            className="text-4xl sm:text-5xl font-bold text-white"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.4)" }}
          >
            Events & Gatherings
          </h1>
          <p
            className="mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.3)" }}
          >
            Build relationships, grow your business, and stay connected to your
            community through Chamber events.
          </p>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden border border-green-100 shadow-md">
            <div className="p-5 sm:p-8 lg:p-12">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Our Most Popular Event
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Monthly Chamber Luncheon
              </h2>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Join local business owners and community leaders each month for
                networking, meaningful conversations, and opportunities that turn
                into real growth.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <CalendarDaysIcon className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-gray-700 font-medium">First Tuesday</span>
                </div>
                <div className="flex items-center gap-3">
                  <ClockIcon className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-gray-700 font-medium">11:30 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPinIcon className="w-6 h-6 text-green-600 shrink-0" />
                  <span className="text-gray-700 font-medium">Centre on Main</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 sm:h-80">
              <Image
                src="/food.jpg"
                alt="Monthly Chamber Luncheon at Centre on Main"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Chamber Events */}
      <section className="py-14 sm:py-18 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Why Attend Chamber Events?
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Every event is an opportunity to move your business forward.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <UserGroupIcon className="w-7 h-7" />
                ),
                title: "Build Real Connections",
                desc: "Meet local business owners and decision-makers face to face",
              },
              {
                icon: (
                  <MegaphoneIcon className="w-7 h-7" />
                ),
                title: "Get More Visibility",
                desc: "Put your business in front of the community",
              },
              {
                icon: (
                  <ArrowTrendingUpIcon className="w-7 h-7" />
                ),
                title: "Learn & Grow",
                desc: "Gain insights from speakers, workshops, and peers",
              },
              {
                icon: (
                  <HeartIcon className="w-7 h-7" />
                ),
                title: "Stay Involved",
                desc: "Be part of what's happening in Grayson County",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-50 rounded-xl text-green-600 mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Events */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
            All Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {upcomingEvents.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 border border-gray-100 flex flex-col overflow-hidden group"
              >
                {event.image && (
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: event.imagePosition || "center" }}
                    />
                  </div>
                )}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <span className="inline-block self-start text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4">
                    {event.tag}
                  </span>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6 flex-1">
                    {event.description}
                  </p>
                  <div className="space-y-2.5 text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-2.5">
                      <CalendarDaysIcon className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ClockIcon className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPinIcon className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-12 sm:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600"><CountUp target={100} suffix="+" delay={0} /></div>
              <p className="mt-2 text-gray-600">Professionals Attending Monthly</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200" />
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600"><CountUp target={12} suffix="+" delay={150} /></div>
              <p className="mt-2 text-gray-600">Events Every Year</p>
            </div>
            <div className="hidden sm:block w-px h-16 bg-gray-200" />
            <div>
              <div className="text-4xl sm:text-5xl font-bold text-green-600"><CountUp target={50} suffix="+" delay={300} /></div>
              <p className="mt-2 text-gray-600">Years of Community Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Ready to Get Involved?
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-green-100 leading-relaxed">
            Whether you&apos;re looking to grow your business or meet new people,
            there&apos;s a place for you here.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-white text-green-700 px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Become a Member
            </Link>
            <a
              href="tel:2702595587"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Call (270) 259-5587
            </a>
          </div>
          <p className="mt-6 text-green-200 text-base">
            Join 100+ local businesses already growing together.
          </p>
        </div>
      </section>
    </>
  );
}
