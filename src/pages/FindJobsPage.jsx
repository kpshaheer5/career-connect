import React, { useState, useMemo } from 'react';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import JobCard from '../components/JobCard';
import { SearchX, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

export default function FindJobsPage({ 
  jobs, 
  onSelectJob, 
  onApplyClick, 
  savedJobIds, 
  onToggleSave,
  appliedJobIds 
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [sortBy, setSortBy] = useState('relevant');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const [filters, setFilters] = useState({
    jobTypes: [],
    workModes: [],
    experiences: [],
    selectedSkills: []
  });

  const activeFilterCount = 
    (filters.jobTypes?.length || 0) +
    (filters.workModes?.length || 0) +
    (filters.experiences?.length || 0) +
    (filters.selectedSkills?.length || 0);

  const resetFilters = () => {
    setSearchTerm('');
    setLocationQuery('');
    setFilters({
      jobTypes: [],
      workModes: [],
      experiences: [],
      selectedSkills: []
    });
  };

  // Filtering & Sorting Logic
  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      // Search term (title, company, skills, description)
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesCompany = job.company.toLowerCase().includes(query);
        const matchesSkills = job.skills.some(s => s.toLowerCase().includes(query));
        const matchesDesc = job.description.toLowerCase().includes(query);
        if (!matchesTitle && !matchesCompany && !matchesSkills && !matchesDesc) return false;
      }

      // Location query
      if (locationQuery.trim()) {
        const loc = locationQuery.toLowerCase();
        if (!job.location.toLowerCase().includes(loc) && !job.workMode.toLowerCase().includes(loc)) {
          return false;
        }
      }

      // Job Types filter
      if (filters.jobTypes && filters.jobTypes.length > 0) {
        if (!filters.jobTypes.includes(job.type)) return false;
      }

      // Work Modes filter
      if (filters.workModes && filters.workModes.length > 0) {
        if (!filters.workModes.includes(job.workMode)) return false;
      }

      // Experience filter
      if (filters.experiences && filters.experiences.length > 0) {
        if (!filters.experiences.includes(job.experience)) return false;
      }

      // Skills filter
      if (filters.selectedSkills && filters.selectedSkills.length > 0) {
        const hasAnySkill = filters.selectedSkills.some(sk => job.skills.includes(sk));
        if (!hasAnySkill) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'newest') return b.id - a.id;
      if (sortBy === 'deadline') return a.deadline.localeCompare(b.deadline);
      return 0; // Default relevant
    });
  }, [jobs, searchTerm, locationQuery, filters, sortBy]);

  const displayedJobs = filteredJobs.slice(0, visibleCount);

  return (
    <div className="space-y-8 pb-12">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-10 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">
            Campus Placement Directory
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Find Your Next Opportunity
          </h1>
          <p className="text-sm text-slate-300">
            Browse verified job openings, campus recruitment drives, and high-stipend internships for the 2026/2027 batch.
          </p>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/30 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main Discovery Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Desktop Filter Panel */}
        <div className="hidden lg:block lg:col-span-3 space-y-6">
          <FilterPanel 
            filters={filters} 
            setFilters={setFilters} 
            onResetFilters={resetFilters}
            activeFilterCount={activeFilterCount}
          />
        </div>

        {/* Job Listings Column */}
        <div className="lg:col-span-9 space-y-6">
          
          {/* Search & Sort Header */}
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            locationQuery={locationQuery}
            setLocationQuery={setLocationQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            totalResults={filteredJobs.length}
            onToggleMobileFilter={() => setShowMobileFilters(!showMobileFilters)}
            activeFilterCount={activeFilterCount}
          />

          {/* Job Grid */}
          {displayedJobs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {displayedJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    job={job}
                    isSaved={savedJobIds.includes(job.id)}
                    onToggleSave={onToggleSave}
                    isApplied={appliedJobIds.includes(job.id)}
                    onSelectJob={onSelectJob}
                    onApplyClick={onApplyClick}
                  />
                ))}
              </div>

              {/* Load More Button */}
              {visibleCount < filteredJobs.length && (
                <div className="pt-6 text-center">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 4)}
                    className="px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold rounded-2xl shadow-xs hover:bg-slate-50 transition-all text-sm"
                  >
                    Load More Opportunities ({filteredJobs.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200/90 shadow-xs space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
                <SearchX className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-slate-900 text-lg">No matching opportunities found</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Try adjusting your search query, location filter, or resetting skill checkboxes.
                </p>
              </div>
              <button
                onClick={resetFilters}
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors inline-flex items-center space-x-1.5"
              >
                <span>Reset All Filters</span>
              </button>
            </div>
          )}

        </div>

      </div>

      {/* Mobile Drawer Filter Modal */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex justify-end lg:hidden">
          <div className="bg-white w-full max-w-xs h-full p-5 overflow-y-auto space-y-4 shadow-2xl">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">Filters</h3>
              <button 
                onClick={() => setShowMobileFilters(false)}
                className="text-xs font-bold text-indigo-600"
              >
                Done
              </button>
            </div>
            <FilterPanel 
              filters={filters} 
              setFilters={setFilters} 
              onResetFilters={resetFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>
        </div>
      )}

    </div>
  );
}
