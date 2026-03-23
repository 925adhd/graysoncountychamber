import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community Resources",
  description:
    "Helpful links and resources for Grayson County — government, tourism, schools, and economic development.",
};

const resources = [
  {
    category: "Government",
    items: [
      { name: "City of Leitchfield", href: "https://www.leitchfield.org" },
      {
        name: "Grayson County Judge Executive",
        href: "https://www.graysoncountyky.gov",
      },
      {
        name: "Grayson County Clerk",
        href: "https://www.graysoncountyky.gov",
      },
    ],
  },
  {
    category: "Tourism",
    items: [
      {
        name: "Leitchfield Tourism",
        href: "https://www.leitchfieldtourism.com",
      },
      {
        name: "Grayson County Tourism",
        href: "https://www.graysoncountytourism.com",
      },
    ],
  },
  {
    category: "Economic Development",
    items: [
      {
        name: "Leitchfield-Grayson Industrial Development",
        href: "https://www.graysoncountyindustrial.com",
      },
      {
        name: "Grayson County Alliance",
        href: "https://www.graysoncountyalliance.com",
      },
    ],
  },
  {
    category: "Education",
    items: [
      {
        name: "Grayson County Schools",
        href: "https://www.grayson.kyschools.us",
      },
    ],
  },
  {
    category: "Business Resources",
    items: [
      {
        name: "Kentucky One Stop Business Portal",
        href: "https://onestop.ky.gov",
      },
      {
        name: "Kentucky Business Costs",
        href: "https://newkentuckyhome.ky.gov/LP/NKY_BusinessCosts",
      },
      {
        name: "Small Business Development Center (Elizabethtown)",
        href: "https://www.ksbdc.org/locations/elizabethtown/",
      },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-green-700 to-green-800 text-white py-10 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Community Resources
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-green-100 max-w-2xl mx-auto">
            Helpful links to local government, tourism, education, and business
            resources in Grayson County.
          </p>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {resources.map((group) => (
              <div key={group.category}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group flex items-center gap-4"
                    >
                      <div className="bg-green-50 rounded-lg p-2 shrink-0 group-hover:bg-green-100 transition-colors">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <span className="text-base sm:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Follow Us on Facebook
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Stay up to date with Chamber news, events, and local business
            highlights by following us on Facebook.
          </p>
          <a
            href="https://www.facebook.com/GraysonCountyChamber"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Follow Grayson County Chamber
          </a>
        </div>
      </section>
    </>
  );
}
