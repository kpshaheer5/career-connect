import React, { useState } from 'react';
import { 
  Building, 
  Plus, 
  Users, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Download, 
  Search, 
  ShieldCheck, 
  ChevronRight,
  TrendingUp,
  MapPin,
  Sparkles
} from 'lucide-react';
import StatusBadge from '../components/StatusBadge';
import { MOCK_CALENDAR_EVENTS } from '../data/mockData';

export default function OfficerDashboard({ 
  applications, 
  jobs, 
  onUpdateAppStatus, 
  onOpenPostJobModal 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState('All');

  const filteredApps = applications.filter(app => {
    if (filterRole !== 'All' && app.role !== filterRole) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = (app.studentName || '').toLowerCase().includes(q);
      const matchRole = (app.role || '').toLowerCase().includes(q);
      const matchCompany = (app.company || '').toLowerCase().includes(q);
      if (!matchName && !matchRole && !matchCompany) return false;
    }
    return true;
  });

  const handleExportCSV = () => {
    alert('Simulated exporting placement applicant records to CSV file (Placement_Master_2026.csv).');
  };

  return (
    <div className="space-y-8 pb-16">
      
      {/* Officer Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="relative z-10 space-y-2 max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-indigo-300 text-xs font-bold">
            <ShieldCheck className="w-4 h-4 text-indigo-400" />
            <span>Placement Officer & Recruiter Control Hub</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Campus Placement Administration
          </h1>
          <p className="text-sm text-slate-300">
            Manage student application rosters, publish recruitment drives, and update candidate interview stages in real time.
          </p>
        </div>

        <div className="relative z-10 flex items-center space-x-3 self-start md:self-auto">
          <button
            onClick={onOpenPostJobModal}
            className="px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-xs rounded-2xl shadow-lg flex items-center space-x-2 transition-transform hover:scale-105"
          >
            <Plus className="w-4 h-4" />
            <span>Post Campus Drive</span>
          </button>
          
          <button
            onClick={handleExportCSV}
            className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs rounded-2xl flex items-center space-x-1.5 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Roster</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Active Drives</div>
          <div className="text-2xl font-extrabold text-slate-900 mt-1">{jobs.length} Openings</div>
        </div>
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Applications</div>
          <div className="text-2xl font-extrabold text-indigo-600 mt-1">{applications.length} Submitted</div>
        </div>
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Shortlisted Candidates</div>
          <div className="text-2xl font-extrabold text-purple-600 mt-1">
            {applications.filter(a => a.status === 'Shortlisted').length} Students
          </div>
        </div>
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs">
          <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Offers Released</div>
          <div className="text-2xl font-extrabold text-emerald-600 mt-1">
            {applications.filter(a => a.status === 'Selected').length} Offers
          </div>
        </div>
      </div>

      {/* Main Applicants Roster Table */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden space-y-4">
        
        {/* Table Filter Bar */}
        <div className="p-4 md:p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Student Placement Roster</h3>
            <p className="text-xs text-slate-500">Update recruitment status directly for registered students</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search student or role..."
                className="pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Table list */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-500 uppercase tracking-wider font-bold">
              <tr>
                <th className="py-3.5 px-5">Student Candidate</th>
                <th className="py-3.5 px-4">Applied Role & Company</th>
                <th className="py-3.5 px-4">CGPA</th>
                <th className="py-3.5 px-4">Applied Date</th>
                <th className="py-3.5 px-4">Current Status</th>
                <th className="py-3.5 px-5 text-right">Update Status Stage</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filteredApps.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/80 transition-colors">
                  
                  {/* Candidate */}
                  <td className="py-4 px-5">
                    <div className="font-bold text-slate-900 text-sm">{app.studentName || 'Aarav Sharma'}</div>
                    <div className="text-[11px] text-slate-500">{app.studentEmail || 'aarav.sharma@college.edu'}</div>
                  </td>

                  {/* Role & Company */}
                  <td className="py-4 px-4">
                    <div className="font-bold text-slate-800">{app.role}</div>
                    <div className="text-[11px] text-indigo-600 font-semibold">{app.company}</div>
                  </td>

                  {/* CGPA */}
                  <td className="py-4 px-4 font-bold text-slate-900">
                    <span className="bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {app.cgpa || '8.85'}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-4 text-slate-500 font-semibold">{app.appliedDate}</td>

                  {/* Status Badge */}
                  <td className="py-4 px-4">
                    <StatusBadge status={app.status} size="sm" />
                  </td>

                  {/* Action dropdown */}
                  <td className="py-4 px-5 text-right">
                    <select
                      value={app.status}
                      onChange={(e) => onUpdateAppStatus(app.id, e.target.value)}
                      className="bg-white border border-slate-300 hover:border-indigo-400 rounded-xl px-2.5 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 cursor-pointer shadow-2xs"
                    >
                      <option value="Applied">Applied</option>
                      <option value="Under Review">Under Review</option>
                      <option value="Shortlisted">Shortlisted</option>
                      <option value="Interview Scheduled">Interview Scheduled</option>
                      <option value="Selected">Selected (Offer)</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Upcoming Drive Calendar Widget */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center space-x-2">
            <Calendar className="w-5 h-5 text-indigo-600" />
            <h3 className="font-extrabold text-slate-900 text-base">Campus Drive Calendar & PPT Schedule</h3>
          </div>
          <span className="text-xs text-indigo-600 font-bold">Oct 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MOCK_CALENDAR_EVENTS.map((event) => (
            <div key={event.id} className={`p-4 rounded-2xl border ${event.color} space-y-2`}>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/70 rounded border border-indigo-200">
                {event.type}
              </span>
              <h4 className="font-extrabold text-sm text-slate-900">{event.title}</h4>
              <div className="text-xs space-y-1 text-slate-700">
                <p className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{event.date} • {event.time}</span>
                </p>
                <p className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{event.venue}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
