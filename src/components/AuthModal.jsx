import React, { useState } from 'react';
import { X, Briefcase, Mail, Lock, User, GraduationCap, Building2, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AuthModal({ 
  isOpen, 
  onClose, 
  mode = 'login', 
  onLoginSuccess 
}) {
  const [authTab, setAuthTab] = useState(mode);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('aarav.sharma@college.edu');
  const [loginPassword, setLoginPassword] = useState('••••••••••••');
  const [rememberMe, setRememberMe] = useState(true);

  // Sign up form state
  const [fullName, setFullName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [college, setCollege] = useState('');
  const [degree, setDegree] = useState('B.Tech CS');
  const [gradYear, setGradYear] = useState('2027');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: loginEmail.includes('aarav') ? 'Aarav Sharma' : 'Student User',
      email: loginEmail,
      degree: 'B.Tech in Computer Science',
      college: 'National Institute of Technology',
      graduationYear: '2027',
      cgpa: '8.85 / 10.0'
    });
    onClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess({
      name: fullName || 'New Student',
      email: signupEmail || 'student@college.edu',
      degree: degree || 'B.Tech CS',
      college: college || 'NIT Karnataka',
      graduationYear: gradYear || '2027',
      cgpa: '8.5 / 10.0'
    });
    onClose();
  };

  const fillDemoAccount = () => {
    setLoginEmail('aarav.sharma@college.edu');
    setLoginPassword('studentPass123!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md">
              <Briefcase className="w-5.5 h-5.5" />
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight">
                Career<span className="text-indigo-400">Connect</span>
              </span>
              <p className="text-xs text-slate-400">Student Placement Access Portal</p>
            </div>
          </div>

          {/* Toggle Tabs */}
          <div className="grid grid-cols-2 gap-1 p-1 bg-slate-800/80 rounded-xl mt-4">
            <button
              onClick={() => setAuthTab('login')}
              className={`py-2 text-xs font-bold rounded-lg transition-colors ${
                authTab === 'login' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setAuthTab('signup')}
              className={`py-2 text-xs font-bold rounded-lg transition-colors ${
                authTab === 'signup' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
              }`}
            >
              Create Account
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          
          {authTab === 'login' ? (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              
              {/* Quick Fill Button */}
              <button
                type="button"
                onClick={fillDemoAccount}
                className="w-full py-2 px-3 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 rounded-xl text-xs font-bold flex items-center justify-center space-x-2 transition-colors"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Auto-fill Demo Student Account</span>
              </button>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Email or Student ID</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="student@college.edu"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-slate-700">Password</label>
                  <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-indigo-600 font-semibold hover:underline">
                    Forgot?
                  </a>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <span>Remember me</span>
                </label>
                <span className="text-emerald-600 font-bold flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>College SSO Ready</span>
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-500/20 transition-all"
              >
                Log In to Portal
              </button>

            </form>
          ) : (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Aarav Sharma"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">College Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={signupEmail}
                    onChange={(e) => setSignupEmail(e.target.value)}
                    placeholder="student@nitk.edu.in"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">College / Institution</label>
                  <input
                    type="text"
                    required
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="NIT Karnataka"
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Graduation Year</label>
                  <select
                    value={gradYear}
                    onChange={(e) => setGradYear(e.target.value)}
                    className="w-full p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="2026">2026 Batch</option>
                    <option value="2027">2027 Batch</option>
                    <option value="2028">2028 Batch</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type="password"
                    required
                    value={signupPassword}
                    onChange={(e) => setSignupPassword(e.target.value)}
                    placeholder="Minimum 8 characters"
                    className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-md shadow-indigo-500/20 transition-all mt-2"
              >
                Create Student Account
              </button>

            </form>
          )}

        </div>

      </div>
    </div>
  );
}
