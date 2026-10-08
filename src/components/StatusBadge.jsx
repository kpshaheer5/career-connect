import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  UserCheck, 
  Calendar, 
  Trophy, 
  XCircle,
  Briefcase
} from 'lucide-react';

export default function StatusBadge({ status, size = "md" }) {
  const normalized = status ? status.trim() : '';

  const getBadgeStyle = () => {
    switch (normalized) {
      case 'Applied':
        return {
          bg: 'bg-blue-50 text-blue-700 border-blue-200/80',
          icon: Clock,
          label: 'Applied'
        };
      case 'Under Review':
        return {
          bg: 'bg-amber-50 text-amber-700 border-amber-200/80',
          icon: Clock,
          label: 'Under Review'
        };
      case 'Shortlisted':
        return {
          bg: 'bg-purple-50 text-purple-700 border-purple-200/80',
          icon: UserCheck,
          label: 'Shortlisted'
        };
      case 'Interview Scheduled':
      case 'Interview':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200/80',
          icon: Calendar,
          label: 'Interview Scheduled'
        };
      case 'Selected':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
          icon: Trophy,
          label: 'Selected'
        };
      case 'Rejected':
        return {
          bg: 'bg-rose-50 text-rose-700 border-rose-200/80',
          icon: XCircle,
          label: 'Rejected'
        };
      default:
        return {
          bg: 'bg-slate-100 text-slate-700 border-slate-200',
          icon: Briefcase,
          label: status || 'Unknown'
        };
    }
  };

  const config = getBadgeStyle();
  const Icon = config.icon;

  const sizeClasses = size === 'sm' 
    ? 'text-[11px] px-2 py-0.5 space-x-1' 
    : 'text-xs px-2.5 py-1 space-x-1.5 font-semibold';

  return (
    <span className={`inline-flex items-center rounded-full border ${config.bg} ${sizeClasses} shadow-2xs font-medium`}>
      <Icon className={size === 'sm' ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
      <span>{config.label}</span>
    </span>
  );
}
