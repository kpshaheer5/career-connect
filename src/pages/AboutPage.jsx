import React from 'react';
import { 
  ShieldCheck, 
  Target, 
  Users, 
  Award, 
  Building2, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  Heart,
  Globe
} from 'lucide-react';

export default function AboutPage({ onNavigateToJobs }) {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Header Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-xl text-center">
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-950 px-3.5 py-1.5 rounded-full border border-indigo-800">
            About CareerConnect Portal
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Empowering College Students to Land Their Dream Roles
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto">
            CareerConnect bridges the gap between ambitious graduating talent and premier campus recruiters through an all-in-one placement portal.
          </p>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl"></div>
      </div>

      {/* MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-wider text-indigo-600">Our Mission</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Democratizing Access to Top Campus Opportunities
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              College recruitment can often feel fragmented, opaque, and stress-inducing. CareerConnect was founded to provide 100% transparency for students, placement officers, and hiring managers.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              Every job posting on our platform undergoes strict campus verification so students can apply with confidence knowing CGPA eligibility rules, stipend details, and timeline deadlines upfront.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-md space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Transparent Hiring</h3>
                <p className="text-xs text-slate-500">Zero hidden criteria or unexpected disqualifications</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg">Verified Recruiter Drives</h3>
                <p className="text-xs text-slate-500">Direct integration with official college placement cells</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* HOW CAREERCONNECT HELPS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-white">How CareerConnect Helps Students</h2>
            <p className="text-sm text-slate-400">Streamlining every aspect of your placement journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-white">Smart Skill Matching</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Filter jobs by specific branch, CGPA cutoff, programming languages, and location preferences.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500 text-white flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-white">Live Status Timelines</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Track whether your resume is under review, shortlisted for test round, or scheduled for technical interview.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-3xl p-6 border border-slate-700/80 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500 text-white flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-white">One Profile, Unlimited Drives</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                No need to fill duplicate application forms for every visiting company.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* WHY STUDENTS CHOOSE US */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-slate-900">Why Students Choose CareerConnect</h2>
          <p className="text-sm text-slate-500">Empowering over 5,000+ students across top engineering & design institutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
            <h3 className="font-extrabold text-2xl text-indigo-600">98%</h3>
            <h4 className="font-bold text-slate-900 text-sm">Response Rate</h4>
            <p className="text-xs text-slate-500">Recruiters respond within 7 business days.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
            <h3 className="font-extrabold text-2xl text-emerald-600">100+</h3>
            <h4 className="font-bold text-slate-900 text-sm">Hiring Partners</h4>
            <p className="text-xs text-slate-500">From unicorns to Fortune 500 enterprises.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
            <h3 className="font-extrabold text-2xl text-purple-600">₹14 LPA</h3>
            <h4 className="font-bold text-slate-900 text-sm">Average Package</h4>
            <p className="text-xs text-slate-500">High-growth technical engineering roles.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-xs space-y-2">
            <h3 className="font-extrabold text-2xl text-rose-600">24/7</h3>
            <h4 className="font-bold text-slate-900 text-sm">Placement Support</h4>
            <p className="text-xs text-slate-500">Dedicated campus officer helpdesk.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Start Exploring Your Placement Drives Today</h2>
          <button
            onClick={onNavigateToJobs}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
          >
            Explore Openings
          </button>
        </div>
      </section>

    </div>
  );
}
