import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Join the Chamber",
  description:
    "Become a member of the Grayson County Chamber of Commerce. View membership levels, pricing, and apply today.",
};

const categoryRates = [
  { category: "Banks / Savings & Loans", price: "$841.50" },
  { category: "Public Utilities", price: "$535.50" },
  {
    category: "Hotels / Motels",
    price: "$510.00",
    note: "Base rate per year up to 10 units; $3 for each additional unit",
  },
  { category: "Out-of-County Membership", price: "$306.00", note: "Any business NOT located within Grayson County unless non-profit" },
  { category: "Accounting Firms", price: "$280.50" },
  {
    category: "Professional",
    price: "$178.50",
    note: "Real Estate, Insurance Agents, Attorneys, Physicians",
  },
  { category: "Travel Agents", price: "$150.00" },
  {
    category: "Civic",
    price: "$127.50",
    note: "Charitable, service club, or religious institution not affiliated with a business",
  },
  { category: "Individual Membership", price: "$75.00" },
];

const employeeRates = [
  { range: "0–3 Employees", price: "$127.50" },
  { range: "4–6 Employees", price: "$178.50" },
  { range: "7–10 Employees", price: "$255.00" },
  { range: "11–20 Employees", price: "$306.00" },
  { range: "21–31 Employees", price: "$382.50" },
  { range: "31–50 Employees", price: "$433.50" },
  { range: "51–100 Employees", price: "$510.00" },
  { range: "101–200 Employees", price: "$663.00" },
  { range: "201–300 Employees", price: "$714.00" },
  { range: "301+ Employees", price: "$790.50" },
  { range: "Food Trucks", price: "$150.00" },
];

export default function JoinPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-10 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Join the Chamber
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-xl text-green-100 max-w-2xl mx-auto">
            Find the membership level that fits your business.
          </p>
        </div>
      </section>

      {/* Small Business Circle */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-4 py-1.5 rounded-full mb-4">
                For Businesses Under 50 Employees
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Small Business Circle
              </h2>
              <p className="mt-2 text-3xl font-bold text-green-600">$500<span className="text-lg font-normal text-gray-500"> / year</span></p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Small business is the backbone of our community. The Small Business
                Circle was created to prominently recognize businesses with less than
                50 employees &mdash; ensuring they survive and thrive with more
                exposure and support.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  "Must have less than 50 employees to qualify",
                  "Priority Early-Bird seating at the sold-out Annual Dinner",
                  "Logo on retractable banner displayed at all Chamber functions",
                  "2 free seats at Monthly Chamber Luncheons",
                  "Once-a-year feature in the Chamber newsletter",
                  "Yearly Small Business dinner each May",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-base text-gray-700">{item}</span>
                  </div>
                ))}
            </div>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-gray-200 max-w-3xl mx-auto">
              <Image
                src="/smallbuisness.jpg"
                alt="Small Business Circle 2025 members"
                width={900}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-8 text-center">
              <a
                href="tel:2702595587"
                className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
              >
                Join the Small Business Circle
              </a>
            </div>
        </div>
      </section>

      {/* President's Circle */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold text-green-400 bg-green-900/40 px-4 py-1.5 rounded-full mb-4">
              Premium Membership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              President&apos;s Circle
            </h2>
            <p className="mt-2 text-5xl font-bold text-green-400">$2,000</p>
            <p className="mt-2 text-gray-400">
              Annual investment (annual dues not included)
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Must be a Grayson County business for more than 10 years",
              "Logo displayed on stand-up banner at all Chamber events",
              "Company logo rotation on the Chamber website and monthly newsletter",
              "First \"right of acceptance\" for Chamber sponsorships, publications, and special events",
              "Short feature article about your organization in the Chamber Chatter",
              "Annual Membership Dinner — presenting sponsor with preferred table seating and 8 tickets included",
              "Complimentary invitation for one company representative to attend Leadership Grayson County",
              "2 free seats at the Monthly Chamber Luncheons",
              "Limited to 15 members — exclusive and prestigious",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircleIcon className="w-6 h-6 text-green-400 shrink-0 mt-0.5" />
                <span className="text-base text-gray-200">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="tel:2702595587"
              className="inline-flex items-center justify-center bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
            >
              Inquire About President&apos;s Circle
            </a>
          </div>
        </div>
      </section>

      {/* Category-Based Pricing */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Membership Investment Schedule
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Select the category that best fits your business. If you do not fall
            into any of the categories below, see the employee-based schedule.
          </p>

          <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-green-600 text-white px-4 sm:px-6 py-4">
              <h3 className="text-lg font-bold">By Business Category</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {categoryRates.map((item) => (
                <div
                  key={item.category}
                  className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                >
                  <div>
                    <span className="text-base sm:text-lg font-medium text-gray-900">
                      {item.category}
                    </span>
                    {item.note && (
                      <p className="text-sm text-gray-500 mt-0.5">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <span className="text-lg font-bold text-green-700 sm:shrink-0">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Employee-Based Pricing */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            By Number of Full-Time Employees
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            If your business does not fall into the categories above, use the
            schedule below based on your number of full-time employees.
          </p>

          <div className="mt-10 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-green-600 text-white px-4 sm:px-6 py-4">
              <h3 className="text-lg font-bold">By Employee Count</h3>
            </div>
            <div className="divide-y divide-gray-100">
              {employeeRates.map((item) => (
                <div
                  key={item.range}
                  className="px-4 sm:px-6 py-3.5 flex items-center justify-between"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900">
                    {item.range}
                  </span>
                  <span className="text-lg font-bold text-green-700">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-green-50 rounded-2xl p-6 border border-green-100 space-y-3">
            <p className="text-base text-gray-700">
              <strong>Member Investment Payable Annually</strong> beginning June
              1st.
            </p>
            <p className="text-base text-gray-700">
              Membership dues are <strong>non-transferable</strong>.
            </p>
            <p className="text-base text-gray-700">
              Membership investment in the Grayson County Chamber of Commerce is{" "}
              <strong>tax-deductible as a business expense</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            How to Join
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Getting started is simple:
          </p>

          <div className="mt-12 space-y-8">
            {[
              {
                step: "1",
                title: "Contact Us",
                description:
                  "Reach out by phone, email, or stop by the Chamber office at 425 S. Main Street. We'll answer any questions and help you choose the right membership level.",
              },
              {
                step: "2",
                title: "Complete Your Application",
                description:
                  "Fill out a membership application and submit your annual investment. Due at time of application.",
              },
              {
                step: "3",
                title: "Start Enjoying Benefits",
                description:
                  "You immediately get access to all Chamber benefits — directory listing, event invitations, networking, referrals, promotion, and more.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-lg text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Contact Executive Director April Spalding to get started.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:2702595587"
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group"
            >
              <PhoneIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-lg text-green-600 font-semibold group-hover:text-green-700">
                (270) 259-5587
              </p>
            </a>

            <a
              href="mailto:graysoncountychamber@gmail.com"
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center group"
            >
              <EnvelopeIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-lg text-green-600 font-semibold group-hover:text-green-700 break-all">
                graysoncountychamber@gmail.com
              </p>
            </a>

            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-gray-100 text-center">
              <MapPinIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-lg text-gray-600">
                425 South Main Street
                <br />
                Leitchfield, KY 42754
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Join?</h2>
          <p className="mt-6 text-lg sm:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Give us a call or send an email. We&apos;ll walk you through
            everything and get you started. Your community is waiting.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2702595587"
              className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Call (270) 259-5587
            </a>
            <a
              href="mailto:graysoncountychamber@gmail.com"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Send an Email
            </a>
          </div>
          <p className="mt-6 text-green-200">
            Or{" "}
            <Link href="/benefits" className="underline hover:text-white">
              view all member benefits
            </Link>{" "}
            before you decide.
          </p>
        </div>
      </section>
    </>
  );
}
