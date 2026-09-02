import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { img } from "../lib/images";

const navGroups = [
  {
    label: "Product",
    items: [
      { to: "/procedure-ai", label: "Procedure AI" },
      { to: "/controlxr", label: "ControlXR" },
      { to: "/technology", label: "Technology" },
    ],
  },
  {
    label: "Company",
    items: [
      { to: "/about", label: "About Us" },
      { to: "/updates", label: "Updates" },
    ],
  },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
          <img src={img["logo-nexicle"]} alt="Nexicle" className="h-8 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-bold text-base">
          {navGroups.map((group) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(group.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="py-2 hover:text-[#362FFA] transition-colors flex items-center gap-1">
                {group.label}
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
              {openMenu === group.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-56">
                  <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-2">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          `block px-4 py-3 rounded-xl text-sm font-semibold hover:bg-gray-100 ${
                            isActive ? "text-[#362FFA]" : "text-black"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <NavLink to="/#use-cases" className="py-2 hover:text-[#362FFA]">
            Use Cases
          </NavLink>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="font-bold text-base text-black hover:text-[#362FFA]">Login</button>
          <Link
            to="/contact"
            className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-5 py-3 font-bold text-sm"
          >
            Contact
          </Link>
          <span className="font-bold text-sm text-gray-500">EN</span>
        </div>

        <button className="lg:hidden p-2" aria-label="Toggle menu" onClick={() => setMobileOpen((v) => !v)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-4">
          {navGroups.map((group) => (
            <div key={group.label}>
              <div className="font-bold text-sm text-gray-500 mb-2">{group.label}</div>
              <div className="space-y-1 pl-2">
                {group.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block py-2 font-semibold text-black"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to="/#use-cases" className="block py-2 font-bold text-black" onClick={() => setMobileOpen(false)}>
            Use Cases
          </Link>
          <Link to="/contact" className="block py-2 font-bold text-[#362FFA]" onClick={() => setMobileOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
