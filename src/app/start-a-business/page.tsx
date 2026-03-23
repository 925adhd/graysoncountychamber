import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Starting a Business",
  description:
    "Step-by-step guide to starting a business in Grayson County, Kentucky. Resources, licensing, financing, and support.",
};

const steps = [
  {
    number: "1",
    title: "Choose Your Business Name",
    content: (
      <>
        <p>
          Pick a name that clearly reflects what your business does. Once
          you&apos;ve decided, you&apos;ll need to register it at the state
          level.
        </p>
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="https://onestop.ky.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:text-green-700 underline underline-offset-2"
            >
              Register your business name at Kentucky One Stop (ky.gov) &rarr;
            </a>
          </li>
          <li className="text-gray-600">
            Search Kentucky Business One Stop to make sure your name isn&apos;t
            already taken.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "2",
    title: "Create a Business Plan",
    content: (
      <>
        <p>
          A detailed business plan helps define your goals, target customers, and
          financial projections. We recommend reaching out to the{" "}
          <a
            href="https://www.ksbdc.org/locations/elizabethtown/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:text-green-700 underline underline-offset-2"
          >
            Small Business Development Center in Elizabethtown, KY
          </a>
          . They provide free coaching to guide you through the process.
        </p>
      </>
    ),
  },
  {
    number: "3",
    title: "Secure Financing",
    content: (
      <>
        <p>
          A small business loan is one of the most common ways to fund your new
          venture. Whether you&apos;re getting started, expanding, or boosting
          cash flow, local banks can help find the right option for you.
        </p>
        <p className="mt-3 text-gray-600">
          We can recommend a local bank that may suit your needs &mdash; just
          ask!
        </p>
        <details className="mt-4 bg-gray-50 rounded-xl border border-gray-200">
          <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-green-600 text-base">
            Documents you&apos;ll typically need for a loan application
          </summary>
          <ul className="px-6 pb-6 pt-2 space-y-2 text-gray-600 text-base">
            <li>Personal and business income tax returns</li>
            <li>Photo ID (driver&apos;s license or passport)</li>
            <li>Balance sheet and income statement</li>
            <li>Net operating income documentation</li>
            <li>Personal and business bank statements</li>
            <li>Articles of incorporation or sole proprietorship documents</li>
            <li>Business licenses</li>
            <li>Commercial leases</li>
            <li>Financial projections (for new businesses)</li>
            <li>Credit history with current credit score</li>
            <li>Detailed business plan</li>
            <li>Collateral documents (deed, equipment ownership, etc.)</li>
            <li>Personal debt-to-credit ratio</li>
            <li>Statement explaining how you plan to use the funds</li>
          </ul>
        </details>
      </>
    ),
  },
  {
    number: "4",
    title: "Get Your Business License",
    content: (
      <>
        <p>Where you apply depends on your business location:</p>
        <div className="mt-4 space-y-4">
          <div className="bg-green-50 rounded-xl p-5 border border-green-100">
            <h4 className="font-bold text-gray-900">
              City of Leitchfield Business License
            </h4>
            <p className="mt-1 text-gray-600">
              Contact Kim Boone at{" "}
              <a
                href="mailto:kim.boone@leitchfield.org"
                className="text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                kim.boone@leitchfield.org
              </a>{" "}
              or call{" "}
              <a
                href="tel:2702594034"
                className="text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                (270) 259-4034
              </a>
            </p>
            <a
              href="https://drive.google.com/drive/folders/1Vp3t57-vBnFIbTFhxS-zfc32MJLRmoOl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-green-600 font-medium hover:text-green-700 underline underline-offset-2"
            >
              Download City Business License Application &rarr;
            </a>
          </div>
          <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
            <h4 className="font-bold text-gray-900">
              County Business License
            </h4>
            <p className="mt-1 text-gray-600">
              Contact DeeDee Whitley at Grayson County Fiscal Court:{" "}
              <a
                href="tel:2702593159"
                className="text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                (270) 259-3159
              </a>
            </p>
            <p className="mt-1 text-gray-600">
              Or call{" "}
              <a
                href="tel:2709711770"
                className="text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                (270) 971-1770
              </a>
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    number: "5",
    title: "Handle Your Tax Registration",
    content: (
      <>
        <p>
          You&apos;ll have <strong>federal</strong>, <strong>state</strong>, and{" "}
          <strong>local</strong> tax requirements:
        </p>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-900">Federal Tax</h4>
            <p className="mt-1 text-gray-600">
              You&apos;ll need a federal Employer Identification Number (EIN)
              from the IRS. If you didn&apos;t get one during the One Stop
              registration, do this now.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-900">State Tax</h4>
            <p className="mt-1 text-gray-600">
              Depending on your industry and business type, there may be
              additional state tax requirements.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-900">Local Tax</h4>
            <p className="mt-1 text-gray-600">
              Many cities and counties require a local business license and/or
              occupational tax. Contact{" "}
              <a
                href="tel:2702594034"
                className="text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                Leitchfield City Hall (270) 259-4034
              </a>{" "}
              for city tax info, or{" "}
              <a
                href="tel:2709711770"
                className="text-green-600 hover:text-green-700 underline underline-offset-2"
              >
                (270) 971-1770
              </a>{" "}
              for county tax info.
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export default function StartBusinessPage() {
  return (
    <>
      {/* Hero — Supportive, not salesy */}
      <section className="relative text-white">
        <div className="absolute inset-0">
          <Image
            src="/ribbon.jpg"
            alt="Grayson County Chamber ribbon cutting"
            fill
            className="object-cover object-[center_60%]"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.2) 100%)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div
            className="max-w-xl"
            style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Starting a Business in Grayson County
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-white/90 leading-relaxed">
              We know it can feel overwhelming. We&apos;re here to guide you
              step-by-step &mdash; from your first idea to opening day.
            </p>
          </div>
        </div>
      </section>

      {/* Transition spacing */}
      <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Before You Begin
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed text-center">
            Start by reviewing these helpful resources from the State of
            Kentucky:
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://onestop.ky.gov/SiteCollectionDocuments/OneStopChecklist.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 text-lg flex items-center gap-2">
                New Business Checklist
                <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </h3>
              <p className="mt-2 text-gray-600">
                Kentucky One Stop Portal checklist to make sure you cover all
                the basics.
              </p>
            </a>
            <a
              href="https://newkentuckyhome.ky.gov/LP/NKY_BusinessCosts"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 rounded-xl p-6 border border-green-100 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 text-lg flex items-center gap-2">
                Kentucky Business Costs
                <svg className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </h3>
              <p className="mt-2 text-gray-600">
                Explore utilities, incentives, and low-cost options for
                businesses in Kentucky.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 text-center">
            Your Step-by-Step Guide
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Follow these steps to get your new business up and running in
            Grayson County.
          </p>

          <div className="space-y-10">
            {steps.map((step, index) => (
              <div key={step.number}>
                <div className="flex items-start gap-5">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold shrink-0">
                    {step.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <div className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {step.content}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="ml-6 mt-6 border-l-2 border-green-200 h-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Business Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Starting a Food Business?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            If your business involves food or cosmetic manufacturing, you&apos;ll
            need to follow additional Kentucky food code regulations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                Kentucky Food Code Info
              </h3>
              <p className="text-gray-600 mb-3">
                Contact the Grayson County Health Department:
              </p>
              <a
                href="tel:2702598046"
                className="text-green-600 font-semibold hover:text-green-700 text-lg"
              >
                (270) 259-8046
              </a>
            </div>
            <a
              href="https://www.chfs.ky.gov/agencies/dph/dphps/fsb/FSDocs/manufacturingstarterguide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow group"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-green-600 text-lg mb-2">
                Manufacturing Starter Guide
              </h3>
              <p className="text-gray-600">
                Commercial food and cosmetic manufacturing guidelines for
                Kentucky.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Need Help?</h2>
          <p className="mt-6 text-lg sm:text-xl text-green-100 leading-relaxed">
            The Chamber is here to help you navigate every step of starting your
            business. Give us a call or join the Chamber for ongoing support and
            resources.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2702595587"
              className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Call (270) 259-5587
            </a>
            <Link
              href="/join"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Join the Chamber
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
