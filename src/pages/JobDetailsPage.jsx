import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Calendar, 
  Bookmark, 
  CheckCircle2, 
  Building, 
  Briefcase, 
  DollarSign, 
  Award, 
  Check, 
  Share2, 
  ShieldCheck, 
  Send 
} from 'lucide-react';
import JobCard from '../components/JobCard';

export default function JobDetailsPage({ 
  job, 
  allJobs, 
  onBack, 
  onApplyClick, 
  isApplied, 
  isSaved, 
  onToggleSave,
  onSelectJob 
}) {
  if (!job) return null;

  // Filter similar opportunities
  const similarJobs = allJobs
    .filter(j => j.id !== job.id && (j.department === job.department || j.type === job.type))
    .slice(0, 3);

  return (
    <div className="space-y-8 pb-16">
      
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors shadow-2xs"
      >
        <ArrowLeft className="w-4 h-4 text-slate-500" />
        <span>Back to Opportunities</span>
      </button>

      {/* Main Job Banner Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          
          {/* Left info */}
          <div className="flex items-start space-x-4">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${job.logoColor || 'from-blue-600 to-indigo-600'} text-white font-black text-2xl flex items-center justify-center shadow-md flex-shrink-0`}>
              {job.logoInitial || 'TC'}
            </div>

            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {job.type}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {job.workMode}
                </span>
                <span className="text-xs font-extrabold text-slate-400">
                  Posted {job.postedDate}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {job.title}
              </h1>

              <p className="text-sm font-semibold text-slate-600 flex items-center space-x-2">
                <Building className="w-4 h-4 text-indigo-600" />
                <span>{job.company}</span>
                <span>•</span>
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{job.location}</span>
              </p>
            </div>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center space-x-3 self-stretch md:self-auto">
            <button
              onClick={() => onToggleSave(job.id)}
              className={`p-3 rounded-2xl border transition-all ${
                isSaved
                  ? 'bg-amber-50 border-amber-200 text-amber-600 shadow-2xs'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title={isSaved ? "Saved" : "Save Job"}
            >
              <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
            </button>

            {isApplied ? (
              <div className="px-6 py-3 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-2xl text-sm font-extrabold flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <span>Application Submitted</span>
              </div>
            ) : (
              <button
                onClick={() => onApplyClick(job)}
                className="px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-sm rounded-2xl shadow-lg shadow-indigo-500/25 flex items-center space-x-2 transition-all hover:scale-[1.02]"
              >
                <Send className="w-4.5 h-4.5" />
                <span>Apply Now</span>
              </button>
            )}
          </div>

        </div>

      </div>

      {/* Grid Layout: Content & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Main Sections */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* About the Role */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">About the Role</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {job.description}
            </p>
          </div>

          {/* Responsibilities */}
          {job.responsibilities && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Key Responsibilities</h3>
              <ul className="space-y-3">
                {job.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-slate-600">
                    <span className="w-5 h-5 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                      {idx + 1}
                    </span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Required Skills */}
          {job.requiredSkills && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Required Skills & Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.requiredSkills.map((skill, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center space-x-2.5 text-xs font-semibold text-slate-800">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Eligibility Criteria */}
          {job.eligibility && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Campus Eligibility Criteria</h3>
              <ul className="space-y-2.5">
                {job.eligibility.map((el, idx) => (
                  <li key={idx} className="flex items-center space-x-2.5 text-sm font-medium text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>{el}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Benefits */}
          {job.benefits && (
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Benefits & Perks</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-100 text-xs font-semibold text-indigo-950 flex items-center space-x-2.5">
                    <Award className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Job Overview */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-5">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3">Job Overview</h3>
            
            <div className="space-y-4 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Experience Level</span>
                <span className="font-bold text-slate-900">{job.experience}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Work Mode</span>
                <span className="font-bold text-slate-900">{job.workMode}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Salary Package</span>
                <span className="font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {job.salary}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Employment Type</span>
                <span className="font-bold text-slate-900">{job.type}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Application Deadline</span>
                <span className="font-bold text-rose-600">{job.deadline}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              {isApplied ? (
                <div className="w-full py-3 bg-emerald-100 text-emerald-800 rounded-2xl text-center text-xs font-bold">
                  Applied to {job.company}
                </div>
              ) : (
                <button
                  onClick={() => onApplyClick(job)}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-center text-xs font-extrabold shadow-md transition-colors"
                >
                  Apply for this Role
                </button>
              )}
            </div>
          </div>

          {/* About Company */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3">About the Company</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {job.aboutCompany}
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Similar Opportunities */}
      {similarJobs.length > 0 && (
        <div className="pt-8 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900">Similar Placement Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarJobs.map((simJob) => (
              <JobCard
                key={simJob.id}
                job={simJob}
                isSaved={isSaved}
                onToggleSave={onToggleSave}
                isApplied={isApplied}
                onSelectJob={onSelectJob}
                onApplyClick={onApplyClick}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
