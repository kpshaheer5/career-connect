import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Send, Building, ShieldCheck, Sparkles } from 'lucide-react';

export default function ApplyConfirmModal({ 
  job, 
  studentProfile, 
  isOpen, 
  onClose, 
  onConfirmApply 
}) {
  const [coverNote, setCoverNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      onConfirmApply(job, coverNote);
      setIsSubmitting(false);
      setCoverNote('');
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3 mb-2">
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${job.logoColor || 'from-blue-600 to-indigo-600'} text-white font-bold text-sm flex items-center justify-center shadow-md`}>
              {job.logoInitial || 'TC'}
            </div>
            <div>
              <p className="text-xs text-indigo-300 font-semibold tracking-wide uppercase">Confirm Application</p>
              <h2 className="text-lg font-bold text-white line-clamp-1">{job.title}</h2>
            </div>
          </div>

          <p className="text-xs text-slate-300 flex items-center space-x-1.5 mt-1">
            <Building className="w-3.5 h-3.5 text-indigo-400" />
            <span>{job.company}</span>
            <span>•</span>
            <span>{job.location}</span>
          </p>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div className="p-4 bg-indigo-50/70 border border-indigo-100 rounded-2xl flex items-start space-x-3">
            <ShieldCheck className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-indigo-950 leading-relaxed">
              <span className="font-bold block text-indigo-900 mb-0.5">Campus Placement Verification</span>
              Your academic profile and verified CGPA (<strong className="font-semibold">{studentProfile.cgpa}</strong>) will be shared directly with the recruiter at {job.company}.
            </div>
          </div>

          {/* Attached Resume summary */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Attached Student Resume</label>
            <div className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-slate-50">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">{studentProfile.resumeName || 'Aarav_Sharma_Resume.pdf'}</p>
                  <p className="text-[11px] text-slate-500">Verified • Last updated {studentProfile.resumeUpdated || 'Recent'}</p>
                </div>
              </div>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                Ready
              </span>
            </div>
          </div>

          {/* Optional Note */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex justify-between">
              <span>Short Pitch / Note for Recruiter (Optional)</span>
              <span className="text-slate-400 font-normal">Max 250 chars</span>
            </label>
            <textarea
              rows={3}
              value={coverNote}
              onChange={(e) => setCoverNote(e.target.value)}
              placeholder="Highlight relevant projects or key skills for this role..."
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 font-medium"
            />
          </div>

          {/* Actions */}
          <div className="pt-2 flex items-center space-x-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-sm hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/20 flex items-center justify-center space-x-2 transition-all"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Confirm Application</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
