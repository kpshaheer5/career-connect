import React from 'react';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Bookmark, 
  CheckCircle, 
  ArrowRight,
  Briefcase,
  DollarSign,
  Building
} from 'lucide-react';

export default function JobCard({ 
  job, 
  isSaved, 
  onToggleSave, 
  isApplied, 
  onSelectJob, 
  onApplyClick 
}) {
  return (
    <div className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-indigo-300 shadow-xs hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative">
      
      {/* Top Section */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          
          <div className="flex items-center space-x-3">
            {/* Logo Badge */}
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.logoColor || 'from-blue-600 to-indigo-600'} text-white font-extrabold text-base flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform`}>
              {job.logoInitial || job.company.substring(0, 2).toUpperCase()}
            </div>
            
            <div>
              <h3 
                onClick={() => onSelectJob(job)} 
                className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors cursor-pointer line-clamp-1"
              >
                {job.title}
              </h3>
              <p className="text-xs text-slate-500 font-medium flex items-center space-x-1.5 mt-0.5">
                <Building className="w-3.5 h-3.5 text-slate-400" />
                <span>{job.company}</span>
              </p>
            </div>
          </div>

          {/* Save Bookmark Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleSave(job.id);
            }}
            className={`p-2 rounded-xl border transition-all ${
              isSaved
                ? 'bg-amber-50 border-amber-200 text-amber-600 shadow-2xs'
                : 'bg-slate-50 border-slate-200/80 text-slate-400 hover:text-slate-600 hover:bg-slate-100'
            }`}
            title={isSaved ? "Saved to Bookmarks" : "Save Job"}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-500 text-amber-500' : ''}`} />
          </button>
        </div>

        {/* Tags / Meta Info */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100">
            {job.type}
          </span>
          <span className="inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700">
            {job.workMode}
          </span>
          <span className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
            {job.salary}
          </span>
        </div>

        {/* Location & Experience */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 font-medium mb-4">
          <div className="flex items-center space-x-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center space-x-1.5 truncate">
            <Briefcase className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span>{job.experience}</span>
          </div>
        </div>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills && job.skills.slice(0, 4).map((skill, idx) => (
            <span 
              key={idx} 
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200/60"
            >
              {skill}
            </span>
          ))}
          {job.skills && job.skills.length > 4 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
              +{job.skills.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer / CTA Section */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        
        <div className="text-[11px] text-slate-400 flex items-center space-x-1">
          <Calendar className="w-3 h-3 text-slate-400" />
          <span>Deadline: <strong className="text-slate-600 font-medium">{job.deadline}</strong></span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => onSelectJob(job)}
            className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Details
          </button>

          {isApplied ? (
            <span className="inline-flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Applied</span>
            </span>
          ) : (
            <button
              onClick={() => onApplyClick(job)}
              className="flex items-center space-x-1 px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-xs transition-all hover:shadow-md"
            >
              <span>Apply</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>

    </div>
  );
}
