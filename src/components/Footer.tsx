import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">
              Grayson County Chamber
            </h3>
            <p className="text-base leading-relaxed">
              Supporting local businesses and strengthening our community since
              the heart of Kentucky.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Us" },
                { href: "/benefits", label: "Member Benefits" },
                { href: "/events", label: "Events" },
                { href: "/directory", label: "Business Directory" },
                { href: "/centre-on-main", label: "Centre on Main" },
                { href: "/start-a-business", label: "Start a Business" },
                { href: "/resources", label: "Community Resources" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-base">
              <li>425 South Main Street</li>
              <li>Leitchfield, KY 42754</li>
              <li className="pt-1">
                <a
                  href="tel:2702595587"
                  className="hover:text-green-400 transition-colors"
                >
                  (270) 259-5587
                </a>
              </li>
              <li>
                <a
                  href="mailto:graysoncountychamber@gmail.com"
                  className="hover:text-green-400 transition-colors"
                >
                  graysoncountychamber@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Get Involved</h3>
            <p className="text-base mb-4">
              Join the Chamber and grow your business alongside your community.
            </p>
            <Link
              href="/join"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-base hover:bg-green-700 transition-colors"
            >
              Become a Member
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Grayson County Chamber of
            Commerce. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
