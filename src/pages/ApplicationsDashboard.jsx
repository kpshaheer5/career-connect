import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Calendar, 
  ChevronRight, 
  ExternalLink, 
  Clock, 
  CheckCircle, 
  Trophy, 
  UserCheck, 
  Building,
  Filter,
  XCircle
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';

export default function ApplicationsDashboard({ 
  applications, 
  onSelectApplication,
  onNavigateToJobs
}) {
  const [activeTabFilter, setActiveTabFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate stats
  const totalApplied = applications.length;
  const shortlistedCount = applications.filter(a => a.status === 'Shortlisted').length;
  const interviewCount = applications.filter(a => a.status === 'Interview Scheduled' || a.status === 'Interview').length;
  const selectedCount = applications.filter(a => a.status === 'Selected').length;

  const filteredApps = applications.filter((app) => {
    // Filter tab
    if (activeTabFilter === 'Shortlisted' && app.status !== 'Shortlisted') return false;
    if (activeTabFilter === 'Interview' && app.status !== 'Interview Scheduled' && app.status !== 'Interview') return false;
    if (activeTabFilter === 'Selected' && app.status !== 'Selected') return false;
    if (activeTabFilter === 'Under Review' && app.status !== 'Under Review') return false;

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchRole = app.role.toLowerCase().includes(q);
      const matchCompany = app.company.toLowerCase().includes(q);
      if (!matchRole && !matchCompany) return false;
    }

    return true;
  });

  return (
    <div className="space-y-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">
            Student Placement Portal
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            My Applications Dashboard
          </h1>
          <p className="text-sm text-slate-300">
            Track your recruitment stages, interview schedules, and placement offers in real time.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-slate-900">{totalApplied}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Applied</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
            <UserCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-purple-700">{shortlistedCount}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Shortlisted</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Calendar className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-indigo-700">{interviewCount}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Interview</div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-emerald-700">{selectedCount}</div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Selected</div>
          </div>
        </div>

      </div>

      {/* Main Table / Applications List Card */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden space-y-4">
        
        {/* Filter Bar */}
        <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {['All', 'Under Review', 'Shortlisted', 'Interview', 'Selected'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTabFilter(tab)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTabFilter === tab
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search applications..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>

        </div>

        {/* Applications List */}
        {filteredApps.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {filteredApps.map((app) => (
              <div 
                key={app.id} 
                onClick={() => onSelectApplication(app)}
                className="p-5 md:p-6 hover:bg-slate-50/80 transition-colors cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${app.logoColor || 'from-indigo-600 to-purple-600'} text-white font-extrabold text-base flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    {app.logoInitial || 'CS'}
                  </div>

                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-[11px] font-bold text-slate-400">ID: {app.id}</span>
                      <span className="text-[11px] text-slate-400">• Applied {app.appliedDate}</span>
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {app.role}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold flex items-center space-x-1.5 mt-0.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{app.company}</span>
                      <span>•</span>
                      <span>{app.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end space-x-4">
                  <StatusBadge status={app.status} />
                  
                  <button className="flex items-center space-x-1 text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">
                    <span>View Timeline</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center space-y-3">
            <FileText className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="font-bold text-slate-800 text-base">No applications found</h4>
            <p className="text-xs text-slate-500">You have no active applications matching "{activeTabFilter}".</p>
            <button
              onClick={onNavigateToJobs}
              className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold text-xs shadow-xs"
            >
              Browse Openings
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
