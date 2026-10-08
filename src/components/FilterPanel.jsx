import React from 'react';
import { Filter, RotateCcw, Check, Sparkles } from 'lucide-react';

export default function FilterPanel({ 
  filters, 
  setFilters, 
  onResetFilters,
  activeFilterCount 
}) {
  
  const handleJobTypeToggle = (type) => {
    const current = filters.jobTypes || [];
    const updated = current.includes(type)
      ? current.filter(t => t !== type)
      : [...current, type];
    setFilters({ ...filters, jobTypes: updated });
  };

  const handleWorkModeToggle = (mode) => {
    const current = filters.workModes || [];
    const updated = current.includes(mode)
      ? current.filter(m => m !== mode)
      : [...current, mode];
    setFilters({ ...filters, workModes: updated });
  };

  const handleExperienceToggle = (exp) => {
    const current = filters.experiences || [];
    const updated = current.includes(exp)
      ? current.filter(e => e !== exp)
      : [...current, exp];
    setFilters({ ...filters, experiences: updated });
  };

  const handleSkillToggle = (skill) => {
    const current = filters.selectedSkills || [];
    const updated = current.includes(skill)
      ? current.filter(s => s !== skill)
      : [...current, skill];
    setFilters({ ...filters, selectedSkills: updated });
  };

  const popularSkills = [
    "React", "Python", "Figma", "SQL", "TypeScript", 
    "Node.js", "PyTorch", "Docker", "AWS", "Security"
  ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-indigo-600" />
          <h3 className="font-bold text-slate-900 text-base">Filter Jobs</h3>
          {activeFilterCount > 0 && (
            <span className="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            onClick={onResetFilters}
            className="flex items-center space-x-1 text-xs text-slate-500 hover:text-indigo-600 font-semibold transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        )}
      </div>

      {/* Job Type */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Job Type</h4>
        <div className="space-y-1.5">
          {['Full-time', 'Internship'].map((type) => {
            const checked = (filters.jobTypes || []).includes(type);
            return (
              <label 
                key={type} 
                className="flex items-center space-x-3 cursor-pointer group py-1 select-none"
              >
                <div 
                  onClick={() => handleJobTypeToggle(type)}
                  className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors ${
                    checked 
                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                      : 'border-slate-300 bg-white group-hover:border-indigo-400'
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className={`text-sm font-medium ${checked ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                  {type}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Work Mode */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Work Mode</h4>
        <div className="space-y-1.5">
          {['On-site', 'Hybrid', 'Remote'].map((mode) => {
            const checked = (filters.workModes || []).includes(mode);
            return (
              <label 
                key={mode} 
                className="flex items-center space-x-3 cursor-pointer group py-1 select-none"
              >
                <div 
                  onClick={() => handleWorkModeToggle(mode)}
                  className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors ${
                    checked 
                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                      : 'border-slate-300 bg-white group-hover:border-indigo-400'
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className={`text-sm font-medium ${checked ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                  {mode}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Experience Level */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience Level</h4>
        <div className="space-y-1.5">
          {['0-1 Years', 'Entry Level', 'Internship'].map((exp) => {
            const checked = (filters.experiences || []).includes(exp);
            return (
              <label 
                key={exp} 
                className="flex items-center space-x-3 cursor-pointer group py-1 select-none"
              >
                <div 
                  onClick={() => handleExperienceToggle(exp)}
                  className={`w-4.5 h-4.5 rounded-md border flex items-center justify-center transition-colors ${
                    checked 
                      ? 'bg-indigo-600 border-indigo-600 text-white' 
                      : 'border-slate-300 bg-white group-hover:border-indigo-400'
                  }`}
                >
                  {checked && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className={`text-sm font-medium ${checked ? 'text-slate-900 font-semibold' : 'text-slate-700'}`}>
                  {exp}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Skills Filter Pills */}
      <div className="space-y-2.5">
        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Required Skills</h4>
        <div className="flex flex-wrap gap-1.5">
          {popularSkills.map((skill) => {
            const isSelected = (filters.selectedSkills || []).includes(skill);
            return (
              <button
                key={skill}
                onClick={() => handleSkillToggle(skill)}
                className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-2xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
