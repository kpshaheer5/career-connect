import React, { useState } from 'react';
import { X, FileText, Download, Upload, CheckCircle2, Eye, ShieldCheck, Sparkles } from 'lucide-react';

export default function ResumeModal({ studentProfile, isOpen, onClose, onUploadNewResume }) {
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulateUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploading(true);
      setTimeout(() => {
        setUploading(false);
        setUploadSuccess(true);
        onUploadNewResume(file.name);
        setTimeout(() => setUploadSuccess(false), 3000);
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">Student Resume Document</h2>
              <p className="text-xs text-slate-400">Verified placement document • PDF Format</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 overflow-y-auto flex-1">
          
          {/* Active File Card */}
          <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-indigo-200 flex items-center justify-center text-rose-600 shadow-2xs">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">{studentProfile.resumeName}</h4>
                <p className="text-xs text-slate-500">
                  Size: 1.2 MB • Updated {studentProfile.resumeUpdated}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="#download"
                onClick={(e) => { e.preventDefault(); alert(`Simulated download of ${studentProfile.resumeName}`); }}
                className="flex items-center space-x-1 px-3 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold rounded-xl shadow-2xs transition-colors"
              >
                <Download className="w-4 h-4 text-indigo-600" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Simulated PDF Preview Container */}
          <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50 min-h-[260px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-200/80 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{studentProfile.name}</h3>
                  <p className="text-xs text-slate-500">{studentProfile.degree} | {studentProfile.college}</p>
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  Placement Verified
                </span>
              </div>

              {/* Sample Resume Preview text layout */}
              <div className="space-y-3 text-xs text-slate-600 font-sans">
                <div>
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Core Technical Skills</p>
                  <p className="text-slate-700 font-medium">{studentProfile.skills ? studentProfile.skills.join(', ') : ''}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Academic Records</p>
                  <p className="text-slate-700 font-medium">B.Tech Computer Science (2023 - 2027) — Current CGPA: {studentProfile.cgpa}</p>
                </div>
                <div>
                  <p className="font-bold text-slate-900 uppercase tracking-wider text-[11px]">Key Projects</p>
                  <p className="text-slate-700">1. DevFlow Community Q&A (React, Node, Mongo)</p>
                  <p className="text-slate-700">2. Placement Analytics AI Dashboard (Python, FastAPI)</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-center text-xs text-slate-400 flex items-center justify-center space-x-1">
              <ShieldCheck className="w-4 h-4 text-indigo-600" />
              <span>Official document registered in Placement Database</span>
            </div>
          </div>

          {/* Upload New Resume */}
          <div className="p-4 border border-dashed border-slate-300 rounded-2xl bg-white text-center space-y-2">
            <p className="text-xs font-bold text-slate-800">Upload Updated Resume PDF</p>
            <p className="text-[11px] text-slate-500">Supports PDF, DOCX (Max 5MB)</p>
            
            <label className="inline-flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold cursor-pointer shadow-xs transition-colors">
              <Upload className="w-4 h-4" />
              <span>{uploading ? 'Uploading PDF...' : 'Choose File to Upload'}</span>
              <input 
                type="file" 
                accept=".pdf,.docx" 
                onChange={handleSimulateUpload} 
                className="hidden" 
              />
            </label>

            {uploadSuccess && (
              <p className="text-xs text-emerald-600 font-bold flex items-center justify-center space-x-1 mt-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Resume updated successfully!</span>
              </p>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
