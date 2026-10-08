import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Building, 
  MapPin, 
  DollarSign, 
  FileCheck, 
  AlertCircle,
  Download,
  Share2
} from 'lucide-react';
import StatusBadge from './StatusBadge';

export default function ApplicationDetailModal({ application, isOpen, onClose, onWithdraw }) {
  if (!isOpen || !application) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${application.logoColor || 'from-indigo-600 to-purple-600'} text-white font-extrabold text-base flex items-center justify-center shadow-md`}>
              {application.logoInitial || 'CS'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-indigo-300 font-bold uppercase tracking-wide">Application ID: {application.id}</span>
                <StatusBadge status={application.status} size="sm" />
              </div>
              <h2 className="text-xl font-extrabold text-white">{application.role}</h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
            <div className="flex items-center space-x-1">
              <Building className="w-4 h-4 text-indigo-400" />
              <span className="font-semibold text-white">{application.company}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>{application.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>Applied on {application.appliedDate}</span>
            </div>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          
          {/* Tracking Timeline */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center space-x-2">
              <FileCheck className="w-4.5 h-4.5 text-indigo-600" />
              <span>Application Progress Timeline</span>
            </h3>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
              {application.timeline && application.timeline.map((step, idx) => {
                const isDone = step.completed;
                const isActive = step.active;

                return (
                  <div key={idx} className="relative flex items-start space-x-4">
                    
                    {/* Circle Node */}
                    <div className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isDone
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : isActive
                        ? 'bg-indigo-600 text-white ring-4 ring-indigo-100 shadow-md animate-pulse'
                        : 'bg-slate-200 text-slate-400'
                    }`}>
                      {isDone ? <CheckCircle2 className="w-3.5 h-3.5" /> : idx + 1}
                    </div>

                    <div className={`flex-1 p-3.5 rounded-2xl border transition-all ${
                      isActive 
                        ? 'bg-indigo-50/70 border-indigo-200 shadow-2xs' 
                        : isDone 
                        ? 'bg-slate-50/80 border-slate-200/80' 
                        : 'bg-white border-slate-100 opacity-60'
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-bold ${isActive ? 'text-indigo-950' : 'text-slate-900'}`}>
                          {step.step}
                        </span>
                        <span className="text-[11px] font-semibold text-slate-500">
                          {step.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {step.details}
                      </p>
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Notice */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
            <p className="font-bold text-slate-800">Placement Officer Note:</p>
            <p>Please check your registered student email regularly for official interview links and assessment codes.</p>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => onWithdraw(application.id)}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-2 rounded-xl border border-transparent hover:border-rose-200 transition-colors"
          >
            Withdraw Application
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
