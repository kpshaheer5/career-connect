import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import FindJobsPage from './pages/FindJobsPage';
import JobDetailsPage from './pages/JobDetailsPage';
import ApplicationsDashboard from './pages/ApplicationsDashboard';
import StudentProfilePage from './pages/StudentProfilePage';
import AboutPage from './pages/AboutPage';

// Modals
import ApplyConfirmModal from './components/ApplyConfirmModal';
import ApplicationDetailModal from './components/ApplicationDetailModal';
import AuthModal from './components/AuthModal';
import EditProfileModal from './components/EditProfileModal';
import ResumeModal from './components/ResumeModal';

// Initial Mock Data
import { MOCK_JOBS, MOCK_APPLICATIONS, INITIAL_STUDENT_PROFILE } from './data/mockData';

export default function App() {
  // Navigation & View state
  const [activeTab, setActiveTab] = useState('home');
  const [selectedJob, setSelectedJob] = useState(null);
  
  // Data state
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [savedJobIds, setSavedJobIds] = useState([1, 4]);
  const [applications, setApplications] = useState(MOCK_APPLICATIONS);
  const [currentUser, setCurrentUser] = useState(INITIAL_STUDENT_PROFILE);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  // Derived applied job IDs
  const appliedJobIds = applications.map(a => a.jobId);

  // UI / Toast state
  const [toast, setToast] = useState(null);

  // Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [jobToApply, setJobToApply] = useState(null);
  const [selectedAppDetail, setSelectedAppDetail] = useState(null);
  const [editProfileModalOpen, setEditProfileModalOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Helper function to trigger Toast
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Toggle Save Job
  const handleToggleSaveJob = (jobId) => {
    if (savedJobIds.includes(jobId)) {
      setSavedJobIds(savedJobIds.filter(id => id !== jobId));
      showToast('Removed job from saved bookmarks', 'info');
    } else {
      setSavedJobIds([...savedJobIds, jobId]);
      showToast('Job saved to your bookmarks!', 'success');
    }
  };

  // Open Apply Confirmation Modal
  const handleOpenApplyModal = (job) => {
    if (appliedJobIds.includes(job.id)) {
      showToast('You have already applied to this position!', 'warning');
      return;
    }
    setJobToApply(job);
    setApplyModalOpen(true);
  };

  // Confirm Application Submission
  const handleConfirmApply = (job, coverNote) => {
    const newAppId = `APP-${100 + applications.length + 1}`;
    const todayStr = 'Oct 08, 2026';

    const newApplication = {
      id: newAppId,
      jobId: job.id,
      company: job.company,
      logoColor: job.logoColor,
      logoInitial: job.logoInitial,
      role: job.title,
      appliedDate: todayStr,
      status: 'Applied',
      location: job.location,
      salary: job.salary,
      timeline: [
        { step: 'Applied', date: todayStr, active: true, details: coverNote ? `Applied with note: "${coverNote}"` : 'Application submitted via Placement Portal.' },
        { step: 'Under Review', date: 'Pending', completed: false, details: 'Verified profile under screening.' },
        { step: 'Shortlisted', date: 'Pending', completed: false, details: 'Shortlist announcement.' },
        { step: 'Interview Scheduled', date: 'Pending', completed: false, details: 'Technical round.' },
        { step: 'Final Decision', date: 'Pending', completed: false, details: 'HR Offer release.' }
      ]
    };

    setApplications([newApplication, ...applications]);
    showToast(`Application submitted successfully for ${job.title} at ${job.company}!`, 'success');
  };

  // Withdraw Application
  const handleWithdrawApplication = (appId) => {
    setApplications(applications.filter(a => a.id !== appId));
    setSelectedAppDetail(null);
    showToast('Application withdrawn successfully', 'info');
  };

  // View Job Details
  const handleSelectJob = (job) => {
    setSelectedJob(job);
    setActiveTab('job-details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Save Profile Edits
  const handleSaveProfile = (updatedProfile) => {
    setCurrentUser(updatedProfile);
    showToast('Profile updated successfully!', 'success');
  };

  // Upload New Resume
  const handleUploadResume = (fileName) => {
    setCurrentUser({
      ...currentUser,
      resumeName: fileName,
      resumeUpdated: 'Just now'
    });
    showToast(`Uploaded new resume: ${fileName}`, 'success');
  };

  // Open Auth modal
  const handleOpenAuthModal = (mode = 'login') => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  // Login Success handler
  const handleLoginSuccess = (userData) => {
    setIsLoggedIn(true);
    setCurrentUser({
      ...currentUser,
      ...userData
    });
    showToast(`Welcome back, ${userData.name}!`, 'success');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* Toast Notification */}
      {toast && (
        <Toast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* Main Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedCount={savedJobIds.length}
        applicationsCount={applications.length}
        currentUser={currentUser}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        onOpenAuthModal={handleOpenAuthModal}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {activeTab === 'home' && (
          <HomePage
            featuredJobs={jobs.filter(j => j.featured)}
            onNavigate={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectJob={handleSelectJob}
            onApplyClick={handleOpenApplyModal}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSaveJob}
            appliedJobIds={appliedJobIds}
          />
        )}

        {activeTab === 'jobs' && (
          <FindJobsPage
            jobs={jobs}
            onSelectJob={handleSelectJob}
            onApplyClick={handleOpenApplyModal}
            savedJobIds={savedJobIds}
            onToggleSave={handleToggleSaveJob}
            appliedJobIds={appliedJobIds}
          />
        )}

        {activeTab === 'job-details' && (
          <JobDetailsPage
            job={selectedJob || jobs[0]}
            allJobs={jobs}
            onBack={() => setActiveTab('jobs')}
            onApplyClick={handleOpenApplyModal}
            isApplied={appliedJobIds.includes(selectedJob ? selectedJob.id : jobs[0].id)}
            isSaved={savedJobIds.includes(selectedJob ? selectedJob.id : jobs[0].id)}
            onToggleSave={handleToggleSaveJob}
            onSelectJob={handleSelectJob}
          />
        )}

        {activeTab === 'applications' && (
          <ApplicationsDashboard
            applications={applications}
            onSelectApplication={(app) => setSelectedAppDetail(app)}
            onNavigateToJobs={() => setActiveTab('jobs')}
          />
        )}

        {activeTab === 'profile' && (
          <StudentProfilePage
            profile={currentUser}
            onOpenEditModal={() => setEditProfileModalOpen(true)}
            onOpenResumeModal={() => setResumeModalOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage
            onNavigateToJobs={() => setActiveTab('jobs')}
          />
        )}

      </main>

      {/* Footer */}
      <Footer 
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />

      {/* Global Interactive Modals */}
      <ApplyConfirmModal
        job={jobToApply}
        studentProfile={currentUser}
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        onConfirmApply={handleConfirmApply}
      />

      <ApplicationDetailModal
        application={selectedAppDetail}
        isOpen={!!selectedAppDetail}
        onClose={() => setSelectedAppDetail(null)}
        onWithdraw={handleWithdrawApplication}
      />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        mode={authMode}
        onLoginSuccess={handleLoginSuccess}
      />

      <EditProfileModal
        profile={currentUser}
        isOpen={editProfileModalOpen}
        onClose={() => setEditProfileModalOpen(false)}
        onSave={handleSaveProfile}
      />

      <ResumeModal
        studentProfile={currentUser}
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        onUploadNewResume={handleUploadResume}
      />

    </div>
  );
}
