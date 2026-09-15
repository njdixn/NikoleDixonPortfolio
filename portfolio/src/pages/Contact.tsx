import { useEffect } from "react";
import { Mail, Phone, MapPin, Palette, ExternalLink, MessageSquare } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons/SocialIcons";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import { CONTACT_DATA } from "../data/contact";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0920] via-[#195342] to-[#226a55] text-white pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
              Get In Touch
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white mt-2">
              Contact & Inquiries
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto font-light">
              Interested in discussing software engineering opportunities, collaborative projects, or creative ideas? Feel free to reach out.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── MAIN CONTENT (CARDS + VALIDATED FORM) ── */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <FadeIn>
              <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#34816a] font-semibold">
                    Direct Channels
                  </span>
                  <h2 className="font-serif text-2xl font-light text-[#2b2025] mt-1">
                    Contact Information
                  </h2>
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href={`mailto:${CONTACT_DATA.email}?subject=Software%20Development%20Inquiry`}
                    className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#f7f5f2]/80 border border-[#195342]/10 hover:border-[#195342]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded bg-[#195342]/10 text-[#195342] flex items-center justify-center shrink-0 group-hover:bg-[#195342] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-[#5e595b] uppercase tracking-wider">Email Address</p>
                      <p className="text-sm font-medium text-[#2b2025] font-mono group-hover:text-[#195342] transition-colors">
                        {CONTACT_DATA.email}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#f7f5f2]/80 border border-[#195342]/10">
                    <div className="w-9 h-9 rounded bg-[#195342]/10 text-[#195342] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-[#5e595b] uppercase tracking-wider">Phone</p>
                      <p className="text-sm font-medium text-[#2b2025] font-mono">
                        {CONTACT_DATA.phone}
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5 p-3.5 rounded-lg bg-[#f7f5f2]/80 border border-[#195342]/10">
                    <div className="w-9 h-9 rounded bg-[#195342]/10 text-[#195342] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] text-[#5e595b] uppercase tracking-wider">Location</p>
                      <p className="text-sm text-[#2b2025] font-light">
                        {CONTACT_DATA.location} (Open to remote & Puget Sound / Seattle hybrid)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2 border-t border-[#195342]/10 space-y-3">
                  <p className="font-mono text-xs uppercase tracking-wider text-[#5e595b]">
                    Profiles & External Links
                  </p>
                  <div className="space-y-2">
                    <a
                      href={CONTACT_DATA.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#f7f5f2] hover:bg-[#ede9e2] text-xs font-mono text-[#2b2025] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <GithubIcon className="w-4 h-4 text-[#195342]" />
                        <span>github.com/njdixn</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    </a>

                    <a
                      href={CONTACT_DATA.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#f7f5f2] hover:bg-[#ede9e2] text-xs font-mono text-[#2b2025] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <LinkedinIcon className="w-4 h-4 text-[#195342]" />
                        <span>linkedin.com/in/nikole-dixon</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    </a>

                    <a
                      href={CONTACT_DATA.artworkSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded bg-[#f7f5f2] hover:bg-[#ede9e2] text-xs font-mono text-[#2b2025] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Palette className="w-4 h-4 text-[#195342]" />
                        <span>njdartwork.com (Fine Art)</span>
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Front-End Form */}
          <div className="lg:col-span-7 space-y-4">
            <FadeIn delay={0.15}>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-[#195342]">
                  <MessageSquare className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-widest font-semibold">
                    Send a Message
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2b2025]">
                  Validated Front-End Message Form
                </h2>
                <p className="text-xs sm:text-sm text-[#5e595b] font-light leading-relaxed">
                  Fill out this form to generate a structured, pre-filled email directly in your native mail client.
                </p>
              </div>

              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

