import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Building2, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Target, 
  Zap, 
  ShieldCheck, 
  Search, 
  FileText, 
  UserCheck, 
  Award,
  ChevronRight,
  Briefcase,
  Layers
} from 'lucide-react';
import JobCard from '../components/JobCard';

export default function HomePage({ 
  featuredJobs, 
  onNavigate, 
  onSelectJob, 
  onApplyClick, 
  savedJobIds, 
  onToggleSave,
  appliedJobIds 
}) {
  const stats = [
    { value: '500+', label: 'Placement Opportunities', icon: Briefcase, color: 'text-blue-600 bg-blue-50' },
    { value: '100+', label: 'Partner Companies', icon: Building2, color: 'text-indigo-600 bg-indigo-50' },
    { value: '5K+', label: 'Registered Students', icon: Users, color: 'text-purple-600 bg-purple-50' },
    { value: '90%', label: 'Placement Tracking', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50' }
  ];

  const features = [
    {
      title: 'Personalized Opportunities',
      desc: 'Algorithmically matched job drives tailored to your degree, batch, skills, and eligibility rules.',
      icon: Target,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Easy One-Click Applications',
      desc: 'Apply directly using your verified campus profile and resume without tedious manual forms.',
      icon: Zap,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Application Tracking',
      desc: 'Real-time visibility into every stage: Applied, Under Review, Shortlisted, Interview, and Offer.',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Verified Career Profile',
      desc: 'Showcase your CGPA, projects, certifications, and GitHub portfolio directly to recruiters.',
      icon: Award,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const steps = [
    { num: '01', title: 'Create your profile', desc: 'Add your CGPA, skills, education, and upload your verified PDF resume.' },
    { num: '02', title: 'Discover opportunities', desc: 'Browse verified full-time roles & 6-month internships matching your branch.' },
    { num: '03', title: 'Apply with one click', desc: 'Submit your profile directly to campus recruitment officers and hiring leads.' },
    { num: '04', title: 'Track your application', desc: 'Monitor your interview schedule, test codes, and final selection status live.' }
  ];

  return (
    <div className="space-y-20 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-8 md:pt-16 pb-12">
        
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200/40 rounded-full filter blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/40 rounded-full filter blur-3xl -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-extrabold shadow-2xs">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Official Campus Placement Portal 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Your Career Starts With the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">Right Opportunity.</span>
              </h1>

              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover jobs and internships matched to your skills, education, and career goals. Track your campus applications seamlessly from application to final offer.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate('jobs')}
                  className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-extrabold rounded-2xl shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2 text-base transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Opportunities</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={() => onNavigate('profile')}
                  className="w-full sm:w-auto px-7 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-800 font-bold rounded-2xl shadow-xs hover:bg-slate-50 flex items-center justify-center space-x-2 text-base transition-all"
                >
                  <UserCheck className="w-5 h-5 text-indigo-600" />
                  <span>Create Profile</span>
                </button>
              </div>

              {/* Trust Metrics */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Avg Package</div>
                  <div className="text-lg font-extrabold text-slate-900">₹14.5 LPA</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">Highest Offer</div>
                  <div className="text-lg font-extrabold text-indigo-600">₹44 LPA</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold uppercase">PPO Rate</div>
                  <div className="text-lg font-extrabold text-slate-900">38%</div>
                </div>
              </div>

            </div>

            {/* Right Hero Dashboard / Career Visual */}
            <div className="lg:col-span-5 relative">
              
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xl space-y-5 transform hover:rotate-1 transition-transform duration-300">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <span className="text-xs font-bold text-slate-400 ml-2">Placement Live Hub</span>
                  </div>
                  <span className="text-[11px] font-extrabold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Active Drive
                  </span>
                </div>

                {/* Simulated Opportunity Card Preview */}
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-3 shadow-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider">Top Recruit Drive</span>
                      <h4 className="font-extrabold text-base text-white">Software Developer - Frontend</h4>
                      <p className="text-xs text-slate-300">CloudScale Systems • Bangalore</p>
                    </div>
                    <span className="bg-indigo-600 text-white text-[11px] font-extrabold px-2.5 py-1 rounded-lg">
                      ₹18 LPA
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                    <span className="text-slate-400">Match score: <strong className="text-emerald-400">96% Fit</strong></span>
                    <span className="text-xs font-bold text-indigo-300">Fast Track</span>
                  </div>
                </div>

                {/* Floating Stat Widget */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-indigo-50/80 border border-indigo-100 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                      <FileText className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Active Applications</div>
                      <div className="text-sm font-extrabold text-slate-900">5 Applied</div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-100 flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <CheckCircle className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-semibold">Interview Status</div>
                      <div className="text-sm font-extrabold text-emerald-800">Shortlisted</div>
                    </div>
                  </div>
                </div>

                {/* Micro Progress Bar */}
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-700">Placement Preparation Progress</span>
                    <span className="text-indigo-600">85% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 w-[85%] rounded-full"></div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* QUICK STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`pt-4 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} flex items-center space-x-4`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED OPPORTUNITIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
              Top Recruit Drives
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Featured Placement Opportunities
            </h2>
          </div>
          <button
            onClick={() => onNavigate('jobs')}
            className="flex items-center space-x-1.5 text-sm font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            <span>View All Jobs</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={savedJobIds.includes(job.id)}
              onToggleSave={onToggleSave}
              isApplied={appliedJobIds.includes(job.id)}
              onSelectJob={onSelectJob}
              onApplyClick={onApplyClick}
            />
          ))}
        </div>
      </section>

      {/* WHY CAREERCONNECT */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-3 py-1 rounded-full border border-indigo-800">
              Why Students & Officers Choose Us
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Built Specifically for Campus Recruitment Excellence
            </h2>
            <p className="text-sm text-slate-400">
              CareerConnect modernizes college placement drives with transparent tracking and instant verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <div key={idx} className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 space-y-4 hover:border-indigo-500/50 transition-colors">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feat.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">Seamless Process</span>
          <h2 className="text-3xl font-extrabold text-slate-900">How CareerConnect Works</h2>
          <p className="text-sm text-slate-500">Get hired in 4 simple steps during your campus drive.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-3 relative">
              <span className="text-3xl font-black text-indigo-600/30">{step.num}</span>
              <h3 className="font-bold text-base text-slate-900">{step.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Ready to take the next step in your career?</h2>
            <p className="text-sm text-indigo-100 max-w-xl">
              Join thousands of students securing dream engineering and design roles with CareerConnect.
            </p>
          </div>
          <button
            onClick={() => onNavigate('jobs')}
            className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-extrabold rounded-2xl shadow-lg transition-transform hover:scale-105 flex-shrink-0 text-sm"
          >
            Find Your Opportunity
          </button>
        </div>
      </section>

    </div>
  );
}
