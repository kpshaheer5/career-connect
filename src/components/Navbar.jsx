import React, { useState } from 'react';
import { 
  Briefcase, 
  Home, 
  Search, 
  FileText, 
  Info, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Sparkles, 
  Bookmark,
  ChevronRight,
  ShieldCheck,
  Building2,
  Users
} from 'lucide-react';

export default function Navbar({ 
  activeTab, 
  setActiveTab, 
  savedCount, 
  applicationsCount, 
  currentUser, 
  isLoggedIn, 
  setIsLoggedIn,
  onOpenAuthModal,
  userRole,
  setUserRole
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems = userRole === 'officer'
    ? [
        { id: 'officer-dashboard', label: 'Officer Dashboard', icon: ShieldCheck },
        { id: 'jobs', label: 'All Openings', icon: Search },
        { id: 'about', label: 'Portal Info', icon: Info },
      ]
    : [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'jobs', label: 'Find Jobs', icon: Search },
        { id: 'applications', label: 'Applications', icon: FileText, badge: applicationsCount },
        { id: 'about', label: 'About', icon: Info },
      ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            onClick={() => handleNavClick(userRole === 'officer' ? 'officer-dashboard' : 'home')} 
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Briefcase className="w-5.5 h-5.5" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                  Career<span className="text-indigo-600">Connect</span>
                </span>
                <span className="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-1.5 py-0.5 rounded border border-indigo-200 uppercase tracking-wider hidden sm:inline-block">
                  Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">
                {userRole === 'officer' ? 'Placement Cell Admin' : 'Campus Placement System'}
              </p>
            </div>
          </div>

          {/* Role Switcher Pill */}
          <div className="hidden lg:flex items-center p-1 bg-slate-100 rounded-xl border border-slate-200/80">
            <button
              onClick={() => {
                setUserRole('student');
                if (activeTab === 'officer-dashboard') setActiveTab('home');
              }}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                userRole === 'student' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              <span>Student View</span>
            </button>
            <button
              onClick={() => {
                setUserRole('officer');
                setActiveTab('officer-dashboard');
              }}
              className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                userRole === 'officer' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Placement Officer</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                    isActive
                      ? 'bg-indigo-50/90 text-indigo-600 shadow-sm border border-indigo-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className={`ml-1 px-2 py-0.5 text-xs rounded-full font-bold ${
                      isActive ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action / Profile */}
          <div className="hidden md:flex items-center space-x-3">
            {userRole === 'student' && savedCount > 0 && (
              <button
                onClick={() => handleNavClick('jobs')}
                title="View Saved Jobs"
                className="flex items-center space-x-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all shadow-xs"
              >
                <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                <span>Saved ({savedCount})</span>
              </button>
            )}

            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center space-x-3 p-1.5 pl-2.5 pr-2 rounded-xl border border-slate-200 bg-white hover:border-indigo-200 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold flex items-center justify-center text-xs shadow-xs">
                    {userRole === 'officer' ? 'PO' : (currentUser.name ? currentUser.name.split(' ').map(n=>n[0]).join('') : 'ST')}
                  </div>
                  <div className="text-left hidden lg:block">
                    <div className="text-xs font-bold text-slate-900 leading-tight">
                      {userRole === 'officer' ? 'Placement Cell Admin' : currentUser.name}
                    </div>
                    <div className="text-[11px] text-slate-500 font-medium">
                      {userRole === 'officer' ? 'Placement Officer' : (currentUser.degree ? currentUser.degree.split(' in ')[0] : 'Student')}
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 text-slate-400 transform transition-transform ${profileDropdownOpen ? 'rotate-90' : ''}`} />
                </button>

                {/* Profile Dropdown */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-4 py-3 border-b border-slate-100">
                      <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Active Role</p>
                      <p className="text-sm font-bold text-slate-900 truncate">
                        {userRole === 'officer' ? 'Placement Officer' : currentUser.name}
                      </p>
                    </div>

                    <div className="py-1">
                      {userRole === 'student' ? (
                        <>
                          <button
                            onClick={() => {
                              handleNavClick('profile');
                              setProfileDropdownOpen(false);
                            }}
                            className="w-full flex items-center space-x-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 font-medium"
                          >
                            <User className="w-4 h-4 text-slate-400" />
                            <span>My Student Profile</span>
                          </button>
                          <button
                            onClick={() => {
                              handleNavClick('applications');
                              setProfileDropdownOpen(false);
                            }}
                            className="w-full flex items-center justify-between px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 font-medium"
                          >
                            <div className="flex items-center space-x-2.5">
                              <FileText className="w-4 h-4 text-slate-400" />
                              <span>Track Applications</span>
                            </div>
                            {applicationsCount > 0 && (
                              <span className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded-full font-bold">
                                {applicationsCount}
                              </span>
                            )}
                          </button>
                        </>
                      ) : (
                        <button
                          onClick={() => {
                            handleNavClick('officer-dashboard');
                            setProfileDropdownOpen(false);
                          }}
                          className="w-full flex items-center space-x-2.5 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 font-medium"
                        >
                          <ShieldCheck className="w-4 h-4 text-indigo-600" />
                          <span>Officer Control Hub</span>
                        </button>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-1 mt-1">
                      <button
                        onClick={() => {
                          setIsLoggedIn(false);
                          setProfileDropdownOpen(false);
                          handleNavClick('home');
                        }}
                        className="w-full flex items-center space-x-2.5 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 font-medium"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => onOpenAuthModal('login')}
                  className="px-4 py-2 text-sm font-bold text-slate-700 hover:text-indigo-600 transition-colors"
                >
                  Log In
                </button>
                <button
                  onClick={() => onOpenAuthModal('signup')}
                  className="flex items-center space-x-1.5 px-4.5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-sm font-bold shadow-sm shadow-indigo-500/20 transition-all hover:shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Get Started</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex items-center justify-between p-2 bg-slate-100 rounded-xl mb-2">
            <button
              onClick={() => { setUserRole('student'); handleNavClick('home'); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${userRole === 'student' ? 'bg-white text-indigo-600 shadow-xs' : 'text-slate-600'}`}
            >
              Student Mode
            </button>
            <button
              onClick={() => { setUserRole('officer'); handleNavClick('officer-dashboard'); }}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg text-center ${userRole === 'officer' ? 'bg-indigo-600 text-white shadow-xs' : 'text-slate-600'}`}
            >
              Officer Mode
            </button>
          </div>

          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold ${
                    isActive ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="bg-indigo-600 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
