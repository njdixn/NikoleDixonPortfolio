import { Terminal, Database, Code, Globe, Cpu } from "lucide-react";
import { LANGUAGE_STATS } from "../data/skills";

const ICONS = {
  Python: Terminal,
  "C#": Cpu,
  SQL: Database,
  "JavaScript & React": Code,
  "HTML5 & CSS3": Globe,
};

export default function LanguageBreakdown() {
  return (
    <div className="bg-white rounded-lg border border-[#195342]/15 p-6 sm:p-8 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <p className="font-mono text-xs tracking-widest uppercase text-[#34816a] font-medium">
            Multi-Stack Breadth
          </p>
          <h3 className="font-serif text-2xl text-[#2b2025] font-light">
            Core Technical & Language Range
          </h3>
        </div>
        <span className="font-mono text-xs text-[#5e595b] bg-[#f7f5f2] px-3 py-1 rounded border border-[#195342]/10 self-start sm:self-auto">
          Multi-Language Proficiency
        </span>
      </div>

      {/* Multi-segmented visual bar */}
      <div className="w-full h-4 rounded-full overflow-hidden flex bg-gray-100 mb-6 shadow-inner">
        {LANGUAGE_STATS.map((stat) => (
          <div
            key={stat.name}
            style={{ width: `${stat.percentage}%`, backgroundColor: stat.color }}
            className="h-full relative group transition-all duration-300 hover:opacity-90 cursor-pointer"
            title={`${stat.name}: ${stat.percentage}%`}
          />
        ))}
      </div>

      {/* Grid of languages with descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {LANGUAGE_STATS.map((stat) => {
          const IconComponent = ICONS[stat.name as keyof typeof ICONS] || Code;
          return (
            <div
              key={stat.name}
              className="p-3.5 rounded bg-[#f7f5f2]/80 border border-[#195342]/10 hover:border-[#195342]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: stat.color }}
                    />
                    <span className="font-mono text-xs font-semibold text-[#2b2025]">
                      {stat.name}
                    </span>
                  </div>
                  <IconComponent className="w-3.5 h-3.5 text-[#34816a]" />
                </div>
                <p className="text-xs text-[#5e595b] font-light leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

