import React from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  FileText, 
  Edit, 
  Award, 
  Code, 
  CheckCircle2, 
  Plus, 
  ExternalLink,
  Sparkles,
  Download,
  Eye,
  ShieldCheck
} from 'lucide-react';

export default function StudentProfilePage({ 
  profile, 
  onOpenEditModal, 
  onOpenResumeModal 
}) {
  return (
    <div className="space-y-8 pb-16">
      
      {/* Profile Header Banner */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center space-x-5">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-extrabold text-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20 flex-shrink-0">
              {profile.name ? profile.name.split(' ').map(n=>n[0]).join('') : 'AS'}
            </div>

            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{profile.name}</h1>
                <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Student</span>
                </span>
              </div>

              <p className="text-sm font-semibold text-slate-700 flex items-center space-x-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>{profile.degree}</span>
              </p>

              <p className="text-xs text-slate-500 font-medium flex flex-wrap items-center gap-3 pt-0.5">
                <span>{profile.college}</span>
                <span>•</span>
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{profile.location}</span>
                </span>
                <span>•</span>
                <span className="font-bold text-slate-800">CGPA: {profile.cgpa}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 self-start md:self-auto">
            <button
              onClick={onOpenEditModal}
              className="px-5 py-2.5 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold rounded-2xl shadow-2xs hover:bg-slate-50 flex items-center space-x-2 text-xs transition-all"
            >
              <Edit className="w-4 h-4 text-indigo-600" />
              <span>Edit Profile</span>
            </button>
          </div>

        </div>

        {/* Profile Completion Bar */}
        <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between text-xs font-extrabold">
              <span className="text-indigo-950 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Your profile is {profile.completionPercentage || 85}% complete</span>
              </span>
              <span className="text-indigo-700">{profile.completionPercentage || 85}%</span>
            </div>
            <div className="w-full h-2 bg-indigo-200/60 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-500"
                style={{ width: `${profile.completionPercentage || 85}%` }}
              ></div>
            </div>
          </div>
          
          <div className="text-xs text-indigo-800 font-semibold bg-white/80 px-3 py-1.5 rounded-xl border border-indigo-200/80 flex-shrink-0">
            Tip: Upload certified certificates to hit 100%
          </div>
        </div>

      </div>

      {/* Main Grid: Details & Resume Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* About Me */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-3">
            <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">About Me</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {profile.bio}
            </p>
          </div>

          {/* Education */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-indigo-600" />
              <span>Education</span>
            </h3>

            <div className="space-y-4">
              {profile.education && profile.education.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start justify-between">
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm">{edu.degree}</h4>
                    <p className="text-xs text-slate-600 font-medium">{edu.institution}</p>
                    <p className="text-[11px] text-slate-400 font-semibold">{edu.duration}</p>
                  </div>
                  <span className="text-xs font-extrabold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-xl border border-indigo-200">
                    {edu.score}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Tags */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-extrabold text-slate-900 flex items-center space-x-2">
                <Code className="w-5 h-5 text-indigo-600" />
                <span>Skills & Expertise</span>
              </h3>
              <button 
                onClick={onOpenEditModal}
                className="text-xs text-indigo-600 font-bold hover:underline"
              >
                + Add Skills
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {profile.skills && profile.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 border border-slate-200/80 hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">Projects & Technical Work</h3>
            
            <div className="space-y-4">
              {profile.projects && profile.projects.map((proj, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 text-sm">{proj.title}</h4>
                    {proj.link && (
                      <a href={`https://${proj.link}`} target="_blank" rel="noreferrer" className="text-xs font-bold text-indigo-600 hover:underline flex items-center space-x-1">
                        <span>Repository</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-slate-600">{proj.description}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (Resume & Certifications) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Resume Card */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3">Official Resume</h3>
            
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{profile.resumeName}</h4>
                  <p className="text-[11px] text-slate-400">Updated {profile.resumeUpdated}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <button
                  onClick={onOpenResumeModal}
                  className="py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-xs flex items-center justify-center space-x-1 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </button>
                <button
                  onClick={onOpenResumeModal}
                  className="py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 rounded-xl text-xs font-bold flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-slate-500" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-4">
            <h3 className="font-extrabold text-slate-900 text-base border-b border-slate-100 pb-3 flex items-center space-x-2">
              <Award className="w-4.5 h-4.5 text-indigo-600" />
              <span>Certifications</span>
            </h3>

            <div className="space-y-3">
              {profile.certifications && profile.certifications.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-indigo-50/50 border border-indigo-100 space-y-1">
                  <h4 className="text-xs font-bold text-slate-900">{cert.title}</h4>
                  <p className="text-[11px] text-slate-500">{cert.issuer} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
