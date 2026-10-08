import React from 'react';
import { Search, MapPin, SlidersHorizontal, ArrowUpDown, X } from 'lucide-react';

export default function SearchBar({ 
  searchTerm, 
  setSearchTerm, 
  locationQuery,
  setLocationQuery,
  sortBy, 
  setSortBy, 
  totalResults,
  onToggleMobileFilter,
  activeFilterCount
}) {
  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 border border-slate-200/90 shadow-sm space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
        
        {/* Main Search Input */}
        <div className="md:col-span-6 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4.5 h-4.5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by job title, company name, or skills (e.g. React, UI/UX, Python)..."
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Location Input */}
        <div className="md:col-span-3 relative">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <MapPin className="w-4.5 h-4.5" />
          </div>
          <input
            type="text"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            placeholder="Location or Remote"
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-medium"
          />
          {locationQuery && (
            <button
              onClick={() => setLocationQuery('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Sorting Dropdown & Filter toggle on Mobile */}
        <div className="md:col-span-3 flex items-center space-x-2">
          
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <ArrowUpDown className="w-4 h-4" />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full pl-9 pr-8 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 appearance-none cursor-pointer"
            >
              <option value="relevant">Most Relevant</option>
              <option value="newest">Newest First</option>
              <option value="deadline">Deadline Soonest</option>
            </select>
          </div>

          <button
            onClick={onToggleMobileFilter}
            className="lg:hidden flex items-center space-x-1.5 px-3.5 py-2.5 bg-slate-100 text-slate-800 font-bold rounded-xl text-sm hover:bg-slate-200 transition-colors border border-slate-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-xs font-extrabold flex items-center justify-center ml-1">
                {activeFilterCount}
              </span>
            )}
          </button>

        </div>

      </div>

      <div className="flex items-center justify-between text-xs text-slate-500 pt-1 border-t border-slate-100">
        <div>
          Showing <strong className="text-slate-900 font-bold">{totalResults}</strong> available campus opportunities
        </div>
        {(searchTerm || locationQuery) && (
          <button 
            onClick={() => { setSearchTerm(''); setLocationQuery(''); }} 
            className="text-indigo-600 font-semibold hover:underline"
          >
            Clear Search
          </button>
        )}
      </div>
    </div>
  );
}
