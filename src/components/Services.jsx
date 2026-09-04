"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Grid3X3,
  BatteryCharging,
  Zap,
  Sun,
} from "lucide-react";

const services = [
  {
    id: "on-grid",
    number: "01",
    title: "On-Grid Solar",
    shortTitle: "On-Grid",
    description:
      "Connect to KSEB grid, earn from excess power through net metering. Most popular option.",
    tag: "Most Popular",
    icon: Grid3X3,
    image: "/images/services/on-grid.jpg",
    benefits: [
      "Net metering with KSEB",
      "Lower electricity bills",
      "Government subsidy eligible",
      "No battery maintenance",
    ],
  },
  {
    id: "off-grid",
    number: "02",
    title: "Off-Grid Solar",
    shortTitle: "Off-Grid",
    description:
      "Complete energy independence with battery storage. Perfect for areas with frequent power cuts.",
    tag: "Energy Independent",
    icon: BatteryCharging,
    image: "/images/services/off-grid.jpg",
    benefits: [
      "Battery backup included",
      "Works during long power cuts",
      "100% grid independence",
      "Ideal for remote properties",
    ],
  },
  {
    id: "hybrid",
    number: "03",
    title: "Hybrid Solar",
    shortTitle: "Hybrid",
    description:
      "Grid connected with battery backup. Best of both worlds.",
    tag: "Best of Both",
    icon: Zap,
    image: "/images/services/hybrid.jpg",
    benefits: [
      "KSEB grid + battery backup",
      "Intelligent power switching",
      "Seamless outage protection",
      "Flexible energy storage",
    ],
  },
  {
    id: "inverter",
    number: "04",
    title: "Solar Inverter",
    shortTitle: "Inverters",
    description:
      "High efficiency inverters compatible with all major solar panel brands and battery systems.",
    tag: "High Efficiency",
    icon: Sun,
    image: "/images/services/inverter.jpg",
    benefits: [
      "High conversion efficiency",
      "Multi-brand compatibility",
      "Smart monitoring & control",
      "Long-term warranty",
    ],
  },
];

export default function Services() {
  const [active, setActive] = useState("on-grid");

  const activeService =
    services.find((service) => service.id === active) ?? services[0];

  const ActiveIcon = activeService.icon;

  return (
    <section id="services" className="relative overflow-hidden bg-[#f7f7f3] py-20 md:py-28">
      {/* keyframes for panel content animation */}
      <style>{`
        @keyframes svcFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .svc-panel-animate {
          animation: svcFadeUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* Decorative ambient background glow */}
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-[#f5a623]/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-16 h-96 w-96 rounded-full bg-[#18382e]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* Section heading */}
        <div className="mb-12 max-w-3xl text-left md:mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#f5a623] sm:w-10" />
            <span className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#e99b1b]">
              Explore Solar Solutions
            </span>
            <span className="h-px w-8 bg-[#f5a623] sm:w-10" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#17382e] sm:text-4xl md:text-5xl lg:text-6xl">
            Find the right solar system
            <br />
            <span className="text-[#e99b1b]">for your energy needs.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#555] sm:text-lg">
            Whether you want lower electricity bills, reliable backup, or complete energy independence,
            Echonix has a solution designed around the way you use power.
          </p>
        </div>

        {/* Main service selector showcase */}
        <div className="grid overflow-hidden rounded-[28px] sm:rounded-[36px] border border-black/10 bg-[#12382d] shadow-[0_24px_70px_rgba(16,39,31,0.18)] lg:grid-cols-12">

          {/* LEFT — service navigation (5 cols) */}
          <div className="flex flex-col justify-between bg-[#12382d] p-5 sm:p-8 lg:col-span-5 lg:p-10">

            <div>
              <div className="mb-5 sm:mb-6">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#f5a623]">
                  Explore Solutions
                </p>
              </div>

              <div className="space-y-2.5">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isActive = active === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setActive(service.id)}
                      className={`group relative flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all duration-300 sm:p-5 ${
                        isActive
                          ? "bg-white text-[#17382e] shadow-xl translate-x-1"
                          : "bg-white/5 text-white hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {/* Number */}
                      <span
                        className={`text-xs font-black ${
                          isActive ? "text-[#f5a623]" : "text-white/40"
                        }`}
                      >
                        {service.number}
                      </span>

                      {/* Icon */}
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isActive
                            ? "bg-[#f5a623]/20 text-[#e99b1b]"
                            : "bg-white/10 text-white/80 group-hover:bg-white/20 group-hover:text-white"
                        }`}
                      >
                        <Icon size={20} />
                      </div>

                      {/* Name & Tag */}
                      <div className="flex-1 min-w-0">
                        <p className={`font-extrabold text-sm sm:text-base leading-tight ${
                          isActive ? "text-[#17382e]" : "text-white"
                        }`}>
                          {service.title}
                        </p>
                        <p
                          className={`mt-1 text-xs truncate ${
                            isActive ? "text-gray-600 font-semibold" : "text-white/60"
                          }`}
                        >
                          {service.tag}
                        </p>
                      </div>

                      {/* Arrow */}
                      <ArrowUpRight
                        size={20}
                        className={`shrink-0 transition-all duration-300 ${
                          isActive
                            ? "text-[#f5a623] scale-110"
                            : "text-white/30 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom help note */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs font-medium text-white/60 sm:text-sm">
                Not sure which system is right for you?
              </p>
              <a
                href="/services#solar-wizard"
                className="mt-2 inline-flex items-center gap-2 text-xs font-extrabold text-[#f5a623] hover:underline sm:text-sm"
              >
                Use our Solar Recommendation Wizard →
              </a>
            </div>
          </div>

          {/* RIGHT — active service visual & details (7 cols) */}
          <div className="relative min-h-[480px] overflow-hidden bg-[#183c31] sm:min-h-[540px] lg:col-span-7 lg:min-h-[620px]">

            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="h-full w-full object-cover transition-all duration-700"
              />
              {/* Dark overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#091f19] via-[#091f19]/70 to-black/30" />
            </div>

            {/* Content overlay */}
            <div className="relative z-10 flex h-full min-h-[480px] flex-col justify-between p-6 sm:p-8 sm:min-h-[540px] lg:min-h-[620px] lg:p-10">

              {/* Tag at top */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-wider text-[#17382e] shadow-lg">
                  <span className="h-2 w-2 rounded-full bg-[#f5a623]" />
                  {activeService.tag}
                </span>
              </div>

              {/* Main content — animated on active tab change */}
              <div key={activeService.id} className="svc-panel-animate mt-auto pt-6">

                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f5a623] text-[#17382e] shadow-lg">
                    <ActiveIcon size={24} />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-white/70">
                    Solar Solution {activeService.number}
                  </span>
                </div>

                <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
                  {activeService.title}
                </h3>

                <p className="mt-4 max-w-xl text-base font-semibold leading-relaxed text-white/90 sm:text-lg">
                  {activeService.description}
                </p>

                {/* Benefits checklist */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-2.5 text-xs font-bold text-white sm:text-sm"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#f5a623] text-[#17382e]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* CTA Link */}
                <div className="mt-8">
                  <a
                    href="/services"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-xs font-black text-[#17382e] shadow-xl transition-all duration-300 hover:bg-[#f5a623] hover:gap-4 sm:text-sm"
                  >
                    Explore {activeService.shortTitle} Solution
                    <ArrowUpRight size={18} />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-bold text-gray-500 sm:text-sm">
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[#e99b1b]" /> KSEB compliant installations</span>
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[#e99b1b]" /> Quality components</span>
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[#e99b1b]" /> Professional installation</span>
          <span className="flex items-center gap-1.5"><Check size={16} className="text-[#e99b1b]" /> After-sales support</span>
        </div>
      </div>
    </section>
  );
}
