import Link from "next/link";
import { DoctorPortrait } from "@/components/doctor-portrait";
import { LeadForm } from "@/components/lead-form";
import { RioPinarLogo } from "@/components/rio-pinar-logo";
import { siteConfig } from "@/lib/site";

const quickLinks = [
  {
    title: "Request Appointment",
    href: "/appointments",
    body: "Send your preferred day and the office will confirm availability.",
  },
  {
    title: "Insurance & Payments",
    href: "/insurance",
    body: "View accepted insurance information and payment options.",
  },
  {
    title: "Patient Forms",
    href: "/intake",
    body: "Complete intake and new patient information before your visit.",
  },
];

export default function Home() {
  const openingHours = siteConfig.hours
    .filter((item) => item.hours !== "Closed")
    .map((item) => {
      const [opens, closes] = item.hours.split(" - ");
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.day,
        opens,
        closes,
      };
    });

  return (
    <main className="bg-[#f7fafc] text-slate-900">
      <section className="border-b border-slate-200 bg-gradient-to-b from-[#eaf7f6] to-white">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8 md:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700">
              Orlando Family Dentistry
            </div>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
                Friendly, modern dental care for the Rio Pinar community.
              </h1>
              <p className="max-w-xl text-base leading-7 text-slate-600">
                {siteConfig.name} offers comprehensive dental care in Orlando
                with online appointment requests, clear treatment planning, and
                a patient-first experience for families and individuals.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/appointments"
                className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                Request Appointment
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-teal-500 hover:text-teal-700"
              >
                Call {siteConfig.phone}
              </a>
            </div>
            <div className="grid gap-3 pt-2 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Address
                </p>
                <p className="mt-2">{siteConfig.addressLine}</p>
                <a
                  href={siteConfig.mapLink}
                  className="mt-3 inline-flex text-sm font-semibold text-teal-700"
                >
                  Get Directions →
                </a>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Appointment Requests
                </p>
                <p className="mt-2">
                  Submitted online and reviewed by the office before
                  confirmation.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Notifications can be routed to {siteConfig.email}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Schedule Request
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-900">
                Request an appointment online
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Fill out the form and the office will contact you to confirm
                the appointment time.
              </p>
              <div className="mt-5">
                <LeadForm />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  New Patient Focus
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Demo section modeled after the reference site. We can add
                  your finalized first-visit process and paperwork details.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Emergency Support
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Call the office for urgent dental concerns and same-day
                  availability when possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 md:grid-cols-3 md:px-8">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-teal-300 hover:bg-white"
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#fbfdff]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1fr_1fr] md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Meet the Dentist
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900">
              {siteConfig.founder.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-500">
              {siteConfig.founder.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {siteConfig.founder.bio}
            </p>
            <Link
              href="/team"
              className="mt-5 inline-flex text-sm font-semibold text-teal-700"
            >
              Learn more about the team →
            </Link>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-teal-50 via-white to-sky-50 p-6 shadow-sm">
            <div className="absolute -right-8 top-4 h-24 w-24 rounded-full bg-orange-200/60 blur-2xl" />
            <div className="absolute -left-8 bottom-2 h-24 w-24 rounded-full bg-teal-200/60 blur-2xl" />
            <div className="relative flex h-full min-h-[280px] flex-col justify-between">
              <div className="flex items-center gap-3">
                <RioPinarLogo compact />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Dr. Erick Argueta
                </p>
              </div>
              <DoctorPortrait
                src={siteConfig.founder.imagePath}
                alt={siteConfig.founder.name}
                initials={siteConfig.founder.initials}
                priority
                className="mx-auto h-44 w-44 border-4 border-white shadow-lg"
              />
              <p className="text-center text-sm font-semibold text-slate-700">
                Dr. Erick Argueta
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
                Services
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900">
                Comprehensive dental services
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
                Demo service categories modeled after stadiumfamilydentistry.com.
                We can customize wording and final offerings for Rio Pinar
                Dental Care.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden text-sm font-semibold text-teal-700 md:inline-flex"
            >
              View full services →
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {siteConfig.serviceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {category.title}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  {category.items.map((item) => (
                    <li key={item} className="leading-6">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-[#f7fbfb]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.05fr_0.95fr] md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Hours & Contact
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-slate-900">
              Visit Rio Pinar Dental Care
            </h2>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>{siteConfig.addressLine}</p>
              <p>
                Phone:{" "}
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="font-semibold text-teal-700"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                Appointment notifications:{" "}
                <span className="font-medium text-slate-800">
                  {siteConfig.email}
                </span>
              </p>
            </div>
            <a
              href={siteConfig.mapLink}
              className="mt-5 inline-flex rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-700"
            >
              Get Directions
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Office Hours</h3>
            <div className="mt-4 space-y-2">
              {siteConfig.hours.map((item) => (
                <div
                  key={item.day}
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-sm"
                >
                  <span className="font-medium text-slate-800">{item.day}</span>
                  <span className="text-slate-600">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-2 md:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Insurance
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Popular insurance plans accepted
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Demo list shown for website planning. Final accepted plans should
              be confirmed by the office.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-700 sm:grid-cols-3">
              {siteConfig.insurance.map((plan) => (
                <div
                  key={plan}
                  className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-center"
                >
                  {plan}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              Payments
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-slate-900">
              Forms of payment accepted in office
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              No online payment processing is enabled on this website.
            </p>
            <ul className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {siteConfig.payments.map((payment) => (
                <li
                  key={payment}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  {payment}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: siteConfig.name,
            address: {
              "@type": "PostalAddress",
              streetAddress: "531 S Chickasaw Trail",
              addressLocality: "Orlando",
              addressRegion: "FL",
              postalCode: "32825",
              addressCountry: "US",
            },
            telephone: siteConfig.phone,
            email: siteConfig.email,
            openingHoursSpecification: openingHours,
          }),
        }}
      />
    </main>
  );
}
