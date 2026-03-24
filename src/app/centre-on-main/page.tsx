import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export const metadata: Metadata = {
  title: "Centre on Main",
  description:
    "The Centre on Main in Leitchfield, KY — community hub, event venue, and home of the Grayson County Chamber of Commerce.",
};

const organizations = [
  "Grayson County Chamber of Commerce",
  "Grayson County Tourism",
  "Leitchfield Tourism",
  "Leitchfield/Grayson County Industrial Development Corp",
];

const eventTypes = [
  "Meetings & Conferences",
  "Weddings & Receptions",
  "Bridal & Baby Showers",
  "Birthday Parties",
  "Community Events",
  "Special Gatherings",
];

export default function CentreOnMainPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="relative text-white py-20 sm:py-28">
        <Image
          src="/centre2.jpg"
          alt="Centre on Main building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Centre on Main
          </h1>
          <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-green-100 max-w-2xl mx-auto leading-relaxed">
            Where Grayson County comes together &mdash; for events, business,
            and community.
          </p>
        </div>
      </section>

      {/* 2. Hub Intro */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            A Hub for Community &amp; Business
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Centre on Main is more than a building &mdash; it&apos;s where
            local businesses connect, events come to life, and the community
            gathers. Whether you&apos;re hosting an event, attending one, or
            looking for local resources, this is where it all happens.
          </p>
        </div>
      </section>

      {/* 3. Venue */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Perfect Venue for Your Event
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
            Looking for the perfect place to host your next event? Centre on
            Main offers a flexible, welcoming space for gatherings of all
            sizes &mdash; from business meetings to weddings and community
            celebrations.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
            {eventTypes.map((event) => (
              <div
                key={event}
                className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm hover:shadow-md hover:bg-green-50 transition-all cursor-default"
              >
                <span className="text-base font-semibold text-gray-800">
                  {event}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Real Events at Centre on Main */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Real Events at Centre on Main
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            From business meetings to full celebrations, here&apos;s how the
            space comes to life.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/centrewedding.png"
                alt="Wedding setup at Centre on Main"
                width={900}
                height={700}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/kitchen.png"
                alt="Centre on Main kitchen"
                width={900}
                height={700}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="/centretables.jpg"
                alt="Centre on Main event tables"
                width={900}
                height={700}
                className="w-full h-80 sm:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rental Rates */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Rental Rates
          </h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Affordable rates for events of any size. All prices include tax.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-green-600 text-white px-5 sm:px-6 py-4">
                <h3 className="text-lg font-bold">Full Centre</h3>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-700 font-medium">4 Hours</span>
                  <span className="text-xl font-bold text-green-700">$275.00</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-700 font-medium">4+ Hours</span>
                  <span className="text-xl font-bold text-green-700">$344.50</span>
                </div>
                <p className="text-sm text-gray-500 pt-2 border-t border-gray-100">
                  Requires a refundable $200 deposit
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-green-600 text-white px-5 sm:px-6 py-4">
                <h3 className="text-lg font-bold">Half Centre</h3>
              </div>
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-700 font-medium">4 Hours</span>
                  <span className="text-xl font-bold text-green-700">$159.00</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-gray-700 font-medium">4+ Hours</span>
                  <span className="text-xl font-bold text-green-700">$185.50</span>
                </div>
                <p className="text-sm text-gray-500 pt-2 border-t border-gray-100">
                  Requires a refundable $100 deposit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Booking */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Book Your Event at Centre on Main
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
            Ready to host your event? Contact us to check availability and
            start planning.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="tel:2702595587"
              className="bg-green-600 rounded-2xl p-5 sm:p-8 shadow-md hover:bg-green-700 hover:shadow-lg transition-all text-center group"
            >
              <PhoneIcon className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-lg text-green-100 font-semibold">
                (270) 259-5587
              </p>
            </a>

            <a
              href="mailto:centreonmain@hotmail.com"
              className="bg-white rounded-2xl p-5 sm:p-8 shadow-md hover:shadow-lg transition-all border-2 border-green-600 text-center group"
            >
              <EnvelopeIcon className="w-10 h-10 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Email Us
              </h3>
              <p className="text-lg text-green-600 font-semibold group-hover:text-green-700 break-all">
                centreonmain@hotmail.com
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* 6. Trust / Social Proof */}
      <section className="py-14 sm:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Trusted by Local Businesses &amp; Community Events
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            From monthly luncheons to weddings and community gatherings, Centre
            on Main is a trusted space for events that bring people together.
          </p>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-green-700 to-green-800 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Host Your Next Event Here
          </h2>
          <p className="mt-8 text-lg sm:text-xl text-green-100 leading-relaxed">
            Whether you&apos;re planning a business meeting or a celebration,
            Centre on Main is ready for you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2702595587"
              className="inline-flex items-center justify-center bg-white text-green-700 px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-50 transition-colors shadow-lg"
            >
              Book Your Event
            </a>
            <a
              href="mailto:centreonmain@hotmail.com"
              className="inline-flex items-center justify-center border-2 border-white text-white px-6 sm:px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <p className="mt-6 text-green-200 text-base">
            Located in downtown Leitchfield
          </p>
        </div>
      </section>
    </>
  );
}
