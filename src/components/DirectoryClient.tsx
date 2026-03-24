"use client";

import { useState } from "react";
import Link from "next/link";
import { MagnifyingGlassIcon, PhoneIcon } from "@heroicons/react/24/outline";

const categories = [
  "All Categories",
  "Automotive",
  "Banking & Finance",
  "Construction",
  "Dining & Food",
  "Education",
  "Health & Wellness",
  "Home Services",
  "Legal Services",
  "Manufacturing",
  "Professional Services",
  "Real Estate",
  "Retail & Shopping",
  "Technology",
  "Other",
];

const sampleBusinesses = [
  { name: "Leitchfield Family Dentistry", category: "Health & Wellness", phone: "(270) 555-0101", description: "General and family dentistry serving Grayson County." },
  { name: "Main Street Pharmacy", category: "Health & Wellness", phone: "(270) 555-0102", description: "Your locally owned pharmacy on Main Street." },
  { name: "Grayson County Hardware", category: "Retail & Shopping", phone: "(270) 555-0103", description: "Hardware, tools, and supplies for home and business." },
  { name: "Bluegrass Realty Group", category: "Real Estate", phone: "(270) 555-0104", description: "Residential and commercial real estate services." },
  { name: "Kentucky Crossroads Diner", category: "Dining & Food", phone: "(270) 555-0105", description: "Home-style cooking in the heart of Leitchfield." },
  { name: "First Community Bank", category: "Banking & Finance", phone: "(270) 555-0106", description: "Local banking with a personal touch." },
  { name: "Smith & Associates Law", category: "Legal Services", phone: "(270) 555-0107", description: "Legal services for families and businesses." },
  { name: "Grayson Auto Repair", category: "Automotive", phone: "(270) 555-0108", description: "Trusted auto repair and maintenance." },
  { name: "Countryside Builders", category: "Construction", phone: "(270) 555-0109", description: "Custom home building and remodeling." },
];

export default function DirectoryClient() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const filtered = sampleBusinesses.filter((biz) => {
    const matchesSearch =
      biz.name.toLowerCase().includes(search.toLowerCase()) ||
      biz.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Categories" ||
      biz.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Search & Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <MagnifyingGlassIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search businesses..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 sm:py-3.5 rounded-xl border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                aria-label="Search businesses"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full sm:w-auto px-4 py-2.5 sm:py-3.5 rounded-xl border border-gray-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white sm:min-w-48"
              aria-label="Filter by category"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Business Listings */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 mb-6 text-base">
            Showing {filtered.length} business{filtered.length !== 1 ? "es" : ""}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <MagnifyingGlassIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600">
                No businesses found
              </h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((biz) => (
                <div
                  key={biz.name}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <span className="inline-block text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-3">
                    {biz.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {biz.name}
                  </h3>
                  <p className="text-base text-gray-600 mb-4 leading-relaxed">
                    {biz.description}
                  </p>
                  <a
                    href={`tel:${biz.phone.replace(/\D/g, "")}`}
                    className="inline-flex items-center gap-2 text-green-600 font-medium hover:text-green-700 transition-colors"
                  >
                    <PhoneIcon className="w-5 h-5" />
                    {biz.phone}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Join Directory CTA */}
      <section className="py-16 sm:py-20 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Want Your Business Listed?
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            All Chamber members are featured in our business directory. Join
            today and make it easy for customers to find you.
          </p>
          <Link
            href="/join"
            className="inline-flex items-center justify-center mt-8 bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors"
          >
            Become a Member
          </Link>
        </div>
      </section>
    </>
  );
}
