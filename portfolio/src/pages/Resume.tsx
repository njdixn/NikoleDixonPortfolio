import { useState, useMemo, useEffect } from "react";
import {
  Download,
  Award,
  Briefcase,
  GraduationCap,
  BookOpen,
  CheckCircle,
  FileText,
  Search,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
  RotateCcw,
  Calendar,
} from "lucide-react";
import FadeIn from "../components/FadeIn";
import Footer from "../components/Footer";
import { KEY_QUALIFICATIONS, WORK_EXPERIENCES, EDUCATION_LIST } from "../data/resume";
import { COURSES, GPA_DATA } from "../data/courses";
import { Course, DegreeProgram } from "../data/types";

type SortKey = "code" | "degree" | "name" | "term" | "gpa" | "units" | "grade";

export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pdfUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  // Filter and sort state for Coursework table
  const [sortKey, setSortKey] = useState<SortKey>("term"); // default by term
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [degreeFilter, setDegreeFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<"All" | "Completed" | "Upcoming">("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const degreeBadgeStyle = (deg: DegreeProgram) => {
    switch (deg) {
      case "AAS SD":
        return "bg-[#195342]/10 text-[#195342] border-[#195342]/25";
      case "BAS SD":
        return "bg-[#483949]/10 text-[#483949] border-[#483949]/25";
      case "Python C":
        return "bg-[#34816a]/15 text-[#226a55] border-[#34816a]/30";
      case "Web C":
        return "bg-sky-50 text-sky-800 border-sky-200";
      case "Extra":
        return "bg-purple-50 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const filteredAndSortedCourses = useMemo(() => {
    return COURSES.filter((c) => {
      // Degree filter
      if (degreeFilter !== "All" && c.degree !== degreeFilter) {
        return false;
      }
      // Status filter
      if (statusFilter === "Completed" && !c.grade) {
        return false;
      }
      if (statusFilter === "Upcoming" && c.grade) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesCode = c.code.toLowerCase().includes(q);
        const matchesName = c.name.toLowerCase().includes(q);
        const matchesTerm = c.term.toLowerCase().includes(q);
        const matchesDegree = c.degree.toLowerCase().includes(q);
        return matchesCode || matchesName || matchesTerm || matchesDegree;
      }
      return true;
    }).sort((a: Course, b: Course) => {
      let aVal: string | number = a[sortKey] ?? "";
      let bVal: string | number = b[sortKey] ?? "";

      // Special numeric handling for GPA and Units
      if (sortKey === "gpa" || sortKey === "units") {
        aVal = typeof aVal === "number" ? aVal : Number(aVal) || 0;
        bVal = typeof bVal === "number" ? bVal : Number(bVal) || 0;
      } else if (sortKey === "grade") {
        // Strip % if present for numeric comparison
        const aNum = aVal ? parseFloat(String(aVal).replace("%", "")) : -1;
        const bNum = bVal ? parseFloat(String(bVal).replace("%", "")) : -1;
        return sortOrder === "asc" ? aNum - bNum : bNum - aNum;
      }

      if (typeof aVal === "string" && typeof bVal === "string") {
        return sortOrder === "asc"
          ? aVal.localeCompare(bVal)
          : bVal.localeCompare(aVal);
      }

      if (aVal < bVal) return sortOrder === "asc" ? -1 : 1;
      if (aVal > bVal) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [sortKey, sortOrder, degreeFilter, statusFilter, searchQuery]);

  const resetFilters = () => {
    setSortKey("term");
    setSortOrder("asc");
    setDegreeFilter("All");
    setStatusFilter("All");
    setSearchQuery("");
  };

  const completedCount = COURSES.filter((c) => c.grade).length;
  const upcomingCount = COURSES.length - completedCount;

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      {/* ── HEADER ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1C0920] via-[#195342] to-[#226a55] text-white pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-4">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest text-[#a3d4c5] uppercase">
              Curriculum Vitae & Credentials
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-tight text-white mt-2">
              Resume & Education
            </h1>
            <p className="text-white/70 text-base max-w-xl mx-auto font-light">
              10+ years of technical operations and enterprise leadership at The Boeing Company, paired with high-honors Software Development degrees (AAS-T & BAS) and certificates.
            </p>

            {/* Prominent PDF Download Button */}
            <div className="pt-4 flex justify-center">
              <a
                href={pdfUrl}
                download="Nikole_Dixon_Resume.pdf"
                className="btn-primary bg-white text-[#195342] hover:bg-[#a3d4c5] hover:text-[#10382c] text-sm py-3 px-6 shadow-xl"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── ACADEMIC HONORS & DEGREE TIMELINE BANNER ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <FadeIn delay={0.1}>
          <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-8 shadow-sm space-y-6">
            {/* Top Stat Row */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-[#195342]/10 pb-6">
              {/* GPA Display */}
              <div className="md:col-span-4 border-b md:border-b-0 md:border-r border-[#195342]/10 pb-4 md:pb-0 md:pr-6 text-center md:text-left">
                <div className="inline-flex items-center gap-1.5 text-[#195342] mb-1">
                  <Award className="w-4 h-4" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Bellevue College GPA
                  </span>
                </div>
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                  <span className="font-serif text-5xl font-light text-[#195342]">
                    {GPA_DATA.overallGpa}
                  </span>
                  <span className="text-xs font-mono text-[#5e595b]">
                    / {GPA_DATA.scale}
                  </span>
                </div>
                <span className="inline-block mt-1 font-mono text-[11px] px-2.5 py-0.5 rounded bg-[#195342]/10 text-[#195342] font-semibold">
                  {GPA_DATA.honor}
                </span>
              </div>

              {/* Institution Context */}
              <div className="md:col-span-5 space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#34816a] font-medium">
                  Academic Focus
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#2b2025]">
                  {GPA_DATA.program}
                </h3>
                <p className="text-xs sm:text-sm text-[#5e595b] font-light">
                  {GPA_DATA.institution} · 4.00 Grade Point Average across all completed computer science & programming classes
                </p>
              </div>

              {/* PDF Action */}
              <div className="md:col-span-3 text-center md:text-right">
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-xs w-full justify-center"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Standalone PDF</span>
                </a>
              </div>
            </div>

            {/* Degree Milestones Cards */}
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#5e595b] mb-3">
                Degree & Certificate Milestones:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {GPA_DATA.degrees.map((deg) => (
                  <div
                    key={deg.title}
                    className="p-4 rounded-lg bg-[#f7f5f2]/90 border border-[#195342]/15 space-y-2 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded bg-[#195342]/10 text-[#195342]">
                          {deg.credential}
                        </span>
                        <span className="font-mono text-[11px] text-[#34816a] font-medium">
                          {deg.completionDate}
                        </span>
                      </div>
                      <h4 className="font-serif text-base font-normal text-[#2b2025] leading-tight">
                        {deg.title}
                      </h4>
                      {deg.description && (
                        <p className="text-[11px] text-[#5e595b] font-light leading-snug mt-1">
                          {deg.description}
                        </p>
                      )}
                    </div>
                    <div className="pt-1 border-t border-[#195342]/10 flex items-center justify-between text-[11px] font-mono text-[#5e595b]">
                      <span>Status:</span>
                      <span className="font-medium text-[#195342]">{deg.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── COURSEWORK & GRADES SECTION (SORTABLE & FILTERABLE) ── */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-8 shadow-sm space-y-6">
          {/* Section Heading */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#195342]/10 pb-4">
              <div className="flex items-center gap-2.5">
                <BookOpen className="w-5 h-5 text-[#195342]" />
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2b2025]">
                    Coursework & Academic Record
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5e595b] font-light mt-0.5">
                    Interactive course catalog sorted by academic term by default. Click any column header to sort.
                  </p>
                </div>
              </div>

              {/* Summary stat badge */}
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                <span className="font-mono text-xs text-[#195342] bg-[#195342]/10 px-3 py-1 rounded border border-[#195342]/20 font-medium">
                  {completedCount} Completed · {upcomingCount} Upcoming
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Controls: Filters & Search */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-lg bg-[#f7f5f2] border border-[#195342]/10">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search class name, course code (e.g. DEV 108)..."
                className="w-full pl-9 pr-3 py-2 text-xs font-mono rounded bg-white border border-[#195342]/20 text-[#2b2025] focus:outline-none focus:ring-1 focus:ring-[#195342]"
              />
            </div>

            {/* Filter Dropdowns / Selectors */}
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Degree Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono text-[#5e595b]">Degree:</span>
                <select
                  value={degreeFilter}
                  onChange={(e) => setDegreeFilter(e.target.value)}
                  className="text-xs font-mono px-2.5 py-1.5 rounded bg-white border border-[#195342]/20 text-[#2b2025] focus:outline-none focus:ring-1 focus:ring-[#195342]"
                >
                  <option value="All">All Degrees</option>
                  <option value="AAS SD">AAS SD</option>
                  <option value="BAS SD">BAS SD</option>
                  <option value="Python C">Python C</option>
                  <option value="Web C">Web C</option>
                  <option value="Extra">Extra</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] font-mono text-[#5e595b]">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as "All" | "Completed" | "Upcoming")}
                  className="text-xs font-mono px-2.5 py-1.5 rounded bg-white border border-[#195342]/20 text-[#2b2025] focus:outline-none focus:ring-1 focus:ring-[#195342]"
                >
                  <option value="All">All Statuses</option>
                  <option value="Completed">Completed Only ({completedCount})</option>
                  <option value="Upcoming">Upcoming / In Progress ({upcomingCount})</option>
                </select>
              </div>

              {/* Reset Button */}
              {(degreeFilter !== "All" || statusFilter !== "All" || searchQuery !== "" || sortKey !== "term" || sortOrder !== "asc") && (
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-mono text-[#5e595b] hover:text-[#195342] hover:bg-white transition-colors border border-transparent hover:border-[#195342]/20"
                  title="Reset to default sorting (by Term)"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-lg border border-[#195342]/15 shadow-inner">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-[#f7f5f2] border-b border-[#195342]/15 select-none text-left">
                  {/* Column: Code */}
                  <th
                    onClick={() => handleSort("code")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Code</span>
                      {sortKey === "code" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Column: Degree */}
                  <th
                    onClick={() => handleSort("degree")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Degree</span>
                      {sortKey === "degree" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Column: Class (Name) */}
                  <th
                    onClick={() => handleSort("name")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors min-w-[220px]"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Class</span>
                      {sortKey === "name" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Column: Term (Default Sort) */}
                  <th
                    onClick={() => handleSort("term")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors whitespace-nowrap"
                  >
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#34816a]" />
                      <span>Term</span>
                      {sortKey === "term" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Column: GPA */}
                  <th
                    onClick={() => handleSort("gpa")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors text-center whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span>GPA</span>
                      {sortKey === "gpa" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Column: Units */}
                  <th
                    onClick={() => handleSort("units")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors text-center whitespace-nowrap"
                  >
                    <div className="flex items-center justify-center gap-1.5">
                      <span>Units</span>
                      {sortKey === "units" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>

                  {/* Column: Grade */}
                  <th
                    onClick={() => handleSort("grade")}
                    className="py-3.5 px-4 font-mono text-xs uppercase tracking-wider text-[#195342] cursor-pointer hover:bg-[#ede9e2] transition-colors text-right whitespace-nowrap"
                  >
                    <div className="flex items-center justify-end gap-1.5">
                      <span>Grade</span>
                      {sortKey === "grade" ? (
                        sortOrder === "asc" ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ArrowUpDown className="w-3 h-3 text-gray-400 opacity-60" />
                      )}
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#195342]/10 font-light bg-white">
                {filteredAndSortedCourses.map((c) => (
                  <tr key={`${c.code}-${c.term}`} className="hover:bg-[#f7f5f2]/70 transition-colors">
                    {/* Code */}
                    <td className="py-3 px-4 font-mono font-medium text-[#195342] whitespace-nowrap">
                      {c.code}
                    </td>

                    {/* Degree */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span
                        className={`inline-block font-mono text-[11px] px-2 py-0.5 rounded border font-medium ${degreeBadgeStyle(
                          c.degree
                        )}`}
                      >
                        {c.degree}
                      </span>
                    </td>

                    {/* Class Name */}
                    <td className="py-3 px-4 font-normal text-[#2b2025]">
                      {c.name}
                    </td>

                    {/* Term */}
                    <td className="py-3 px-4 font-mono text-xs text-[#5e595b] whitespace-nowrap">
                      {c.term}
                    </td>

                    {/* GPA */}
                    <td className="py-3 px-4 font-mono text-center text-xs text-[#2b2025] font-medium whitespace-nowrap">
                      {c.gpa !== undefined ? c.gpa : <span className="text-gray-300">—</span>}
                    </td>

                    {/* Units */}
                    <td className="py-3 px-4 font-mono text-center text-xs text-[#5e595b] whitespace-nowrap">
                      {c.units}
                    </td>

                    {/* Grade */}
                    <td className="py-3 px-4 text-right whitespace-nowrap font-mono text-xs">
                      {c.grade ? (
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded font-semibold ${
                            parseFloat(c.grade) >= 100
                              ? "bg-[#195342]/15 text-[#195342]"
                              : "bg-[#a3d4c5]/25 text-[#10382c]"
                          }`}
                        >
                          {c.grade}
                        </span>
                      ) : (
                        <span className="text-gray-400 font-normal italic text-[11px]">
                          Upcoming
                        </span>
                      )}
                    </td>
                  </tr>
                ))}

                {filteredAndSortedCourses.length === 0 && (
                  <tr>
                    <td colSpan={7} className="py-8 text-center text-[#5e595b] font-mono text-xs">
                      No classes found matching your current filter criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#5e595b] pt-1">
            <p>
              Showing {filteredAndSortedCourses.length} of {COURSES.length} courses
            </p>
            <p className="text-[11px]">
              Default sorted chronologically by Term (Summer 2025 → Spring 2028)
            </p>
          </div>
        </div>
      </section>

      {/* ── KEY QUALIFICATIONS ── */}
      <section className="pb-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.15}>
          <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-[#195342]">
              <CheckCircle className="w-5 h-5 text-[#34816a]" />
              <h2 className="font-serif text-2xl font-light text-[#2b2025]">
                Key Professional Qualifications
              </h2>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
              {KEY_QUALIFICATIONS.map((q, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-[#5e595b] font-light leading-relaxed flex items-start gap-2.5 p-3 rounded bg-[#f7f5f2]/70 border border-[#195342]/10"
                >
                  <span className="text-[#34816a] font-bold text-base leading-none">›</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </section>

      {/* ── WORK EXPERIENCE (THE BOEING COMPANY) ── */}
      <section className="pb-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-10 shadow-sm space-y-8">
          <FadeIn>
            <div className="flex items-center justify-between border-b border-[#195342]/10 pb-4">
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-5 h-5 text-[#195342]" />
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2b2025]">
                  Professional Work History
                </h2>
              </div>
              <span className="font-mono text-xs text-[#34816a] tracking-wider uppercase font-semibold">
                The Boeing Company (2012 – 2025)
              </span>
            </div>
          </FadeIn>

          <div className="relative border-l-2 border-[#195342]/20 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {WORK_EXPERIENCES.map((job, i) => (
              <FadeIn key={job.id} delay={i * 0.08}>
                <div className="relative group">
                  {/* Timeline node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[#195342] border-2 border-white ring-2 ring-[#195342]/20 group-hover:scale-125 transition-transform" />

                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#2b2025]">
                        {job.title}
                      </h3>
                      <span className="font-mono text-xs text-[#34816a] font-medium tracking-wide">
                        {job.period}
                      </span>
                    </div>

                    <p className="font-serif text-sm italic text-[#483949] font-medium">
                      {job.company} — {job.team} {job.location && `· ${job.location}`}
                    </p>

                    <ul className="pt-2 space-y-2">
                      {job.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-xs sm:text-sm text-[#5e595b] font-light leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#34816a] text-xs pt-1">▪</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACADEMIC DEGREES ── */}
      <section className="pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl border border-[#195342]/15 p-6 sm:p-10 shadow-sm space-y-6">
          <FadeIn>
            <div className="flex items-center gap-2.5 border-b border-[#195342]/10 pb-4">
              <GraduationCap className="w-5 h-5 text-[#195342]" />
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#2b2025]">
                Degrees & Educational Background
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu) => (
              <FadeIn key={edu.id}>
                <div className="h-full p-6 rounded-lg bg-[#f7f5f2]/80 border border-[#195342]/10 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#34816a] font-medium uppercase tracking-wider">
                        {edu.period}
                      </span>
                      <span className="font-mono text-[11px] text-[#5e595b] bg-white px-2 py-0.5 rounded border border-[#195342]/10">
                        {edu.note}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-normal text-[#2b2025]">
                      {edu.degree}
                    </h3>

                    <p className="text-xs font-mono text-[#483949] font-medium">
                      {edu.school} {edu.gpa && `· ${edu.gpa}`}
                    </p>

                    <ul className="pt-2 space-y-1.5">
                      {edu.details.map((item, idx) => (
                        <li key={idx} className="text-xs text-[#5e595b] font-light flex items-start gap-1.5">
                          <span className="text-[#34816a] text-xs">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
