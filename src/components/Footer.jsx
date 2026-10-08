import React from 'react';
import { Briefcase, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart, Globe, Share2 } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
                <Briefcase className="w-5.5 h-5.5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Career<span className="text-indigo-400">Connect</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              The premier campus placement management portal connecting ambitious college students with leading startups and Fortune 500 recruiters.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a href="#portal" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#share" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#link" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Students</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('jobs')} className="hover:text-indigo-400 transition-colors">
                  Explore Opportunities
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('applications')} className="hover:text-indigo-400 transition-colors">
                  Application Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('profile')} className="hover:text-indigo-400 transition-colors">
                  Student Profile Setup
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('jobs')} className="hover:text-indigo-400 transition-colors">
                  Internship Drives
                </button>
              </li>
            </ul>
          </div>

          {/* Recruiters & Placement */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Placement Cell</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                  For Recruiters
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                  Placement Statistics
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                  Eligibility Criteria
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">
                  Campus Drive Calendar
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Support */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Placement Office</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                <span>Placement Cell, Main Academic Block, NIT Campus</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>placements@careerconnect.edu</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>+91 (080) 2345-6789</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} CareerConnect Portal. Built for Campus Recruitment & Placement Management.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-400 cursor-pointer">Student Guidelines</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
