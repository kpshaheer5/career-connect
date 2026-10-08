import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose }) {
  if (!message) return null;

  const typeStyles = {
    success: 'bg-slate-900 text-white border-slate-800 shadow-xl',
    info: 'bg-indigo-900 text-white border-indigo-800 shadow-xl',
    warning: 'bg-amber-950 text-amber-100 border-amber-800 shadow-xl'
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-indigo-400 flex-shrink-0" />,
    warning: <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className={`flex items-center space-x-3 px-4 py-3 rounded-2xl border ${typeStyles[type]} min-w-[280px] max-w-md`}>
        {icons[type]}
        <span className="text-sm font-semibold flex-1 leading-snug">{message}</span>
        <button 
          onClick={onClose}
          className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
