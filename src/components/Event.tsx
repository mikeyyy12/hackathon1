// EventsList.tsx
import React, { useEffect, useState, type JSX } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import eventsData from "./EventList"; // keep your existing data file

// lightweight event type (expand if you keep more fields)
interface EventType {
  slug: string;
  category: string;
  title: string;
  short?: string;
  description?: string;
  date?: string;
  time?: string;
  venue?: string;
  rules?: string[];
  eligibility?: string[];
  image?: string;
  [key: string]: any;
}

const eventsDataTyped = eventsData as Record<string, EventType>;

const groupOrder = [
  "School Level Events",
  "College Level Events",
  "Outdoor Events",
];

export default function EventsList(): JSX.Element {
  const [selected, setSelected] = useState<string | null>(null); // slug of selected event
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // open modal for a given slug
  const openModal = (slug: string) => {
    setSelected(slug);
    setIsOpen(true);
    // lock scroll
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelected(null);
    document.body.style.overflow = "";
  };

  // allow Esc to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const groups: { name: string; items: EventType[] }[] = groupOrder.map((cat) => ({
    name: cat,
    items: Object.values(eventsDataTyped).filter((e) => e.category === cat),
  }));

  const ev: EventType | null = selected ? eventsDataTyped[selected] ?? null : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D7EEFF] to-[#DFF5FC] bg-white/0 px-4 sm:px-6 lg:px-8 py-8 font-geist">
      <motion.nav
        className="nav flex justify-between items-center max-w-4xl mx-auto bg-white w-full  p-[4px] px-2 rounded-2xl
            shadow-[0_84.76px_24.09px_0_rgba(255,103,92,0),0_54.42px_21.41px_0_rgba(255,103,92,0.01),0_30.33px_18.74px_0_rgba(255,103,92,0.03),0_13.38px_13.38px_0_rgba(255,103,92,0.04),0_3.57px_7.14px_0_rgba(255,103,92,0.05)]"
      >
        <div>
          <motion.img src="/logo_color.png" width={20} className="w-20 h-16" alt="logo" />
        </div>
        <div className="flex gap-11">
          <div className="flex items-center gap-7 text-[14.5px] font-normal cursor-pointer ">
            <a href="/">
              <motion.span className="inline-block nab">Home</motion.span>
            </a>
            <a href="/event">
              <motion.span className="inline-block nab">Events</motion.span>
            </a>
            <a href="/event">
              <motion.span className="inline-block nab">Workshop</motion.span>
            </a>
          </div>
          <button
            className=" text-white max-w-sm py-2 px-6 rounded-xl bg-[#68BBFF]
        shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(65,157,234,0.4),0px_7.14px_17.84px_0_rgba(79,160,227,0.45)]"
          >
            Register Now
          </button>
        </div>
      </motion.nav>

      <div className="max-w-6xl mx-auto mt-8">
        <header className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#262E40]"
          >
            Events
          </motion.h1>
          <p className="mt-2 text-sm sm:text-base text-[#263340] max-w-2xl mx-auto">
            Browse school, college and outdoor events. Click any card to view event details and participate.
          </p>
        </header>

        {groups.map((g) => (
          <section key={g.name} className="mb-8">
            <h3 className="text-lg font-bold text-[#262E40] mb-4">{g.name}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {g.items.map((evItem) => (
                <motion.article
                  key={evItem.slug}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden"
                >
                  <img src={evItem.image} alt={evItem.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <h4 className="text-lg font-semibold text-[#262E40]">{evItem.title}</h4>
                    <p className="text-sm text-[#52606D] mt-1">{evItem.short}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-[#52606D]">
                        <div>{evItem.date}</div>
                        <div className="mt-1">{evItem.time}</div>
                      </div>

                      {/* keep Link markup but prevent default and open modal */}
                      <Link
                        to={`/events/${evItem.slug}`}
                        onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          e.preventDefault();
                          openModal(evItem.slug);
                        }}
                        className="inline-flex items-center px-3 py-2 rounded-lg text-white bg-[#68BBFF] hover:brightness-95
                          shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(65,157,234,0.4),0px_7.14px_17.84px_0_rgba(79,160,227,0.45)]"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal / Popup */}
      {isOpen && ev && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" aria-modal="true" role="dialog">
          {/* backdrop */}
          <div onClick={closeModal} className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="relative z-10 w-[92%] max-w-3xl bg-white rounded-2xl shadow-xl overflow-auto max-h-[85vh]"
          >
            <div className="flex items-start justify-between p-4 border-b">
              <div className="flex items-center gap-4">
                <img src={ev.image} alt={ev.title} className="w-20 h-16 object-cover rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold text-[#262E40]">{ev.title}</h3>
                  <p className="text-sm text-[#52606D]">{ev.short}</p>
                </div>
              </div>

              <button onClick={closeModal} aria-label="Close" className="ml-4 text-slate-500 hover:text-slate-700 p-2 rounded-full">
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-[#52606D]">
                    <strong>Date</strong>
                  </div>
                  <div className="mt-1 text-sm text-[#263340]">{ev.date || "TBA"}</div>
                </div>
                <div>
                  <div className="text-xs text-[#52606D]">
                    <strong>Time</strong>
                  </div>
                  <div className="mt-1 text-sm text-[#263340]">{ev.time || "TBA"}</div>
                </div>
                <div>
                  <div className="text-xs text-[#52606D]">
                    <strong>Venue</strong>
                  </div>
                  <div className="mt-1 text-sm text-[#263340]">{ev.venue || "TBA"}</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-[#262E40]">Description</h4>
                <p className="text-sm text-[#52606D] mt-2">{ev.description || ev.short}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-[#262E40]">Rules</h5>
                  <ul className="list-disc ml-5 mt-2 text-sm text-[#52606D]">
                    {(ev.rules || []).map((r: string, i: number) => (
                      <li key={i}>{r}</li>
                    ))}
                    {(!ev.rules || ev.rules.length === 0) && <li>TBA</li>}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-[#262E40]">Eligibility</h5>
                  <ul className="list-disc ml-5 mt-2 text-sm text-[#52606D]">
                    {(ev.eligibility || []).map((r: string, i: number) => (
                      <li key={i}>{r}</li>
                    ))}
                    {(!ev.eligibility || ev.eligibility.length === 0) && <li>TBA</li>}
                  </ul>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div

                  onClick={() => {
                    // keep original navigation available — will still navigate
                    closeModal();
                  }}
                  className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-[#68BBFF] hover:brightness-95
                  shadow-[inset_0px_0.89px_0.89px_0_rgba(255,255,255,0.4),inset_0px_-3.57px_1.78px_0_rgba(65,157,234,0.4),0px_7.14px_17.84px_0_rgba(79,160,227,0.45)]"
                >
                  Open full event page
                </div>

                <button onClick={closeModal} className="px-4 py-2 rounded-lg border border-slate-200">
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
