import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import CountUp from "@/components/CountUp";
import {
  EyeIcon,
  UserGroupIcon,
  Cog6ToothIcon,
  ArrowTrendingUpIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  ScissorsIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  EnvelopeIcon,
  CreditCardIcon,
  BuildingOffice2Icon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

export const metadata: Metadata = {
  title: "Member Benefits",
  description:
    "Discover the benefits of joining the Grayson County Chamber of Commerce — networking, promotion, referrals, discounts, and more.",
};

const benefitGroups = [
  {
    category: "Get Seen",
    icon: <EyeIcon className="w-7 h-7" />,
    items: [
      "Online directory listing seen by locals and visitors",
      "Business referrals — we ONLY refer members",
      "Lobby advertising with brochures and rack cards in the Centre on Main lobby",
      "Facebook promotions — we follow and share your posts to expand your reach",
      "Website promotion including Hot Deals listings and community calendar",
      "Monthly newsletter feature",
      "Member window decal",
    ],
  },
  {
    category: "Meet the Right People",
    icon: <UserGroupIcon className="w-7 h-7" />,
    items: [
      "Monthly luncheons & Business After Hours",
      "Ribbon cuttings for your milestones",
      "Sponsorship opportunities at events",
      "Add your events to our community calendar",
    ],
  },
  {
    category: "Tools to Grow Faster",
    icon: <Cog6ToothIcon className="w-7 h-7" />,
    items: [
      "FREE job and internship postings to reach local talent",
      "Member-only marketing tools",
      "Access to membership mailing list",
      "Chamber Gift Certificate Program — encouraging local shopping with $80,000–$100,000 in gift certificates sold annually ($50/year to participate)",
    ],
  },
  {
    category: "Be Part of Something Bigger",
    icon: <ArrowTrendingUpIcon className="w-7 h-7" />,
    items: [
      "Leadership Grayson County — an eight-month program to learn community issues and prepare for a greater role in our community's development",
      "LEAD with Extension leadership classes",
      "Small Business Circle support network",
      "Discounted conference space and venue rentals at the Centre on Main — members save on every booking",
    ],
  },
];

const featureCards = [
  {
    title: "Get Discovered by Local Customers",
    description:
      "Featured in our directory, social media, email marketing, and events — putting you in front of the people who matter most.",
    icon: <MegaphoneIcon className="w-8 h-8" />,
  },
  {
    title: "Be the Trusted Recommendation",
    description:
      "We ONLY refer Chamber Members. When someone asks for a recommendation, your business comes first.",
    icon: <ShieldCheckIcon className="w-8 h-8" />,
  },
  {
    title: "Build Relationships That Drive Revenue",
    description:
      "Luncheons, After Hours, and community events connect you with business owners, leaders, and potential customers.",
    icon: <UserGroupIcon className="w-8 h-8" />,
  },
  {
    title: "Celebrate Your Milestones",
    description:
      "We organize ribbon cuttings to celebrate your success and generate buzz in the community.",
    icon: <ScissorsIcon className="w-8 h-8" />,
  },
  {
    title: "Hire Local Talent for Free",
    description:
      "Post job openings at no cost. Reach qualified candidates through our network instead of expensive job boards.",
    icon: <BriefcaseIcon className="w-8 h-8" />,
  },
  {
    title: "Grow as a Leader",
    description:
      "Leadership programs and classes offered every Spring and Fall to help you and your team develop new skills.",
    icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
  },
];

export default function BenefitsPage() {
  return (
    <>
      {/* Hero — compact band on mobile, full on desktop */}
      <section className="bg-green-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-16 lg:py-20 text-center">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white">
            <span className="sm:hidden">Member Benefits</span>
            <span className="hidden sm:inline">Everything You Need to Grow Your Business &mdash; In One Membership</span>
          </h1>
          <p className="hidden sm:block mt-4 text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto">
            Get visibility, connections, and real opportunities to grow your business.
          </p>
        </div>
      </section>

      {/* Full Value Breakdown */}
      <section className="pt-10 pb-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 text-center">
            Included in Every Membership
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Everything included &mdash; no hidden tiers.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {benefitGroups.map((group) => (
              <div
                key={group.category}
                className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="text-green-600 bg-green-50 rounded-xl p-2.5">
                    {group.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {group.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span className="text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 text-lg font-semibold text-green-700 bg-green-50 rounded-xl p-5 border border-green-100 text-center">
            Everything you need to grow &mdash; all in one membership.
          </p>
        </div>
      </section>

      {/* How This Actually Helps — Outcome Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-4">
            How This Actually Helps Your Business
          </h2>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Real results &mdash; not just perks on paper.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
              >
                <div className="text-green-600 bg-green-50 rounded-xl p-3 inline-block mb-5">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Save Money as a Member */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Save Money as a Member
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Membership doesn&apos;t just help you grow &mdash; it helps you save.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-2.5">
                  <EnvelopeIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Constant Contact
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed flex-1">
                <strong>25% off</strong> email marketing + a{" "}
                <strong>60-day free trial</strong>. Stay in touch with customers
                professionally.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-2.5">
                  <CreditCardIcon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Infintech Group Rate Merchant Processing
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed flex-1">
                Through a partnership with Infintech LLC and other Chambers throughout Kentucky, members receive <strong>special credit/debit card processing rates</strong>. Contact the Chamber for details.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-green-600 bg-green-50 rounded-xl p-2.5">
                  <BuildingOffice2Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Office Depot Discounts
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed flex-1">
                Exclusive savings on office essentials. Call the Chamber for your
                discount card.
              </p>
            </div>
          </div>

          {/* AirMedCare Network */}
          <div className="mt-8 bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/airmedcarelogo.png"
                alt="AirMedCare Network"
                width={280}
                height={80}
                className="mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                AirMedCare Network Affinity Group Membership Discount
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl">
                In order to receive a discount with AirMedCare, you must be an active Member of the Grayson County Chamber of Commerce. An alliance of affiliated air ambulance providers will offer a special group membership pricing rate to individuals who are affiliated with the Chamber of Commerce. For more information, you can reach AirMedCare Network at{" "}
                <a href="tel:2706174317" className="text-green-700 font-semibold hover:underline">(270) 617-4317</a>.
              </p>
              <div className="mt-6 w-full max-w-2xl">
                <Image
                  src="/airpricing.jpg"
                  alt="AirMedCare Network membership pricing"
                  width={800}
                  height={500}
                  className="rounded-xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* ChamberAdvantage Plan */}
          <div className="mt-8 bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/athem.png"
                alt="ChamberAdvantage Plan - Anthem"
                width={280}
                height={80}
                className="mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                ChamberAdvantage Plan
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mb-6">
                Through a partnership with Anthem and the Kentucky Chamber, small businesses can access competitive, medically underwritten health insurance rates with fixed, predictable monthly payments.
              </p>
              <ul className="text-left max-w-2xl space-y-3 mb-6">
                {[
                  "Competitive, medically underwritten rates with fixed, predictable monthly payments",
                  "A great alternative to ACA plans that can lead to significant savings for small businesses",
                  "Discounted rates on Anthem dental, vision, life, and disability coverage",
                  "Multiple plan designs and choices to fit your needs and budget",
                  "Access to Anthem's broad network and pharmacy benefits",
                  "Wide variety of wellness programs to keep employees healthy",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.kychamber.com/anthem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 transition-colors"
              >
                Learn More at KY Chamber
                <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Keystone Financial 401(k) */}
          <div className="mt-8 bg-white rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/Keystone.jpg"
                alt="Keystone Financial Group"
                width={280}
                height={80}
                className="mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Keystone Financial 401(k) for Chamber Members
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-3xl mb-4">
                Kentucky Thoroughbred&apos;s mission is to help companies compete effectively and profitably in a local, national, and global economy. The Kentucky Thoroughbred 401(k) Retirement Program is a Multiple Employer 401(k) Aggregation Program (MEAP) solution that can help companies reduce their fiduciary and administrative responsibilities while delivering an effective and competitive 401(k) benefit for their employees.
              </p>
              <div className="bg-gray-50 rounded-xl p-5 sm:p-6 mt-2 max-w-md">
                <p className="text-sm font-semibold text-gray-900 mb-2">For more information, contact:</p>
                <p className="text-base font-bold text-gray-900">Sean Melican</p>
                <p className="text-sm text-gray-600">Keystone Financial Group, LLC</p>
                <p className="text-sm text-gray-600">6013 Brownsboro Park Blvd, Ste A</p>
                <p className="text-sm text-gray-600 mt-2">
                  <a href="tel:5022063373" className="text-green-700 font-semibold hover:underline">(502) 206-3373 ext. 302</a>
                </p>
                <p className="text-sm text-gray-600">
                  <a href="mailto:Sean.Melican@keystoneky.com" className="text-green-700 font-semibold hover:underline">Sean.Melican@keystoneky.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            An Investment That Pays for Itself
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Most members make back their investment through visibility,
            referrals, and connections &mdash; often many times over.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-green-100">
              <div className="flex justify-center mb-3">
                <CalendarDaysIcon className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-green-700"><CountUp target={12} suffix="+" delay={0} /></div>
              <div className="text-gray-600 mt-2 text-lg">Events Per Year</div>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-green-100">
              <div className="flex justify-center mb-3">
                <MegaphoneIcon className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-green-700"><CountUp target={365} delay={150} /></div>
              <div className="text-gray-600 mt-2 text-lg">Days of Promotion</div>
            </div>
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-green-100">
              <div className="flex justify-center mb-3">
                <UserGroupIcon className="w-10 h-10 text-green-600" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-green-700"><CountUp target={100} suffix="+" delay={300} /></div>
              <div className="text-gray-600 mt-2 text-lg">Business Connections</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Ready to Grow Your Business?
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed">
            Join 100+ local businesses already growing through the Chamber.
            Your membership is tax-deductible.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-white text-green-700 px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Membership Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
