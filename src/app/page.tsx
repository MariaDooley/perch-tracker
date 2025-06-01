"use client"
// import { createClient } from '@supabase/supabase-js';

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
import React, { useState, useMemo } from 'react';
import { CheckCircle, Circle, Calendar, Users, TrendingUp, Filter } from 'lucide-react';

const ProjectTracker = () => {
  // Project data structure
  const [projectData] = useState({
    epics: [
      {
        id: 1,
        title: "User Authentication & GDPR Compliance",
        userStory: "As a European business owner, I want to create an account with GDPR-compliant data handling so I can trust the platform with my business data.",
        phase: "Week 1-2",
        tasks: [
          "Setup project structure (Next.js + TypeScript + Supabase)",
          "Create users table with GDPR fields (consent, business_type, country)",
          "Build registration form with company name, business type, GDPR consent",
          "Implement email verification with EU-compliant templates",
          "Add password reset flow with security best practices",
          "Create GDPR consent component with clear data usage explanation",
          "Setup RLS policies for user data protection",
          "Add form validation using Zod with business rules",
          "Implement session management with secure JWT handling",
          "Create auth hooks (useAuth, useUser) for state management"
        ]
      },
      {
        id: 2,
        title: "Landing Page & EU Marketing",
        userStory: "As a European business researching alternatives to Big Tech, I want to understand how Perched solves my data sovereignty concerns.",
        phase: "Week 1-2",
        tasks: [
          "Design EU color scheme and professional typography",
          "Create hero section with 'Own Your Data' messaging",
          "Build problem section highlighting Big Tech issues",
          "Add EU value props section (GDPR, data residency, local support)",
          "Create pricing preview with business-focused descriptions",
          "Add testimonials section from law firms/agencies",
          "Implement smooth scrolling and navigation",
          "Add EU flag integration and European identity elements",
          "Optimize for mobile with responsive design",
          "Create CTA buttons linking to registration"
        ]
      },
      {
        id: 3,
        title: "Plan Selection & Domain Configuration",
        userStory: "As a business owner, I want to select a hosting plan appropriate for my business size and configure my European domain.",
        phase: "Week 3-4",
        tasks: [
          "Create plans table with business-focused descriptions",
          "Seed plan data (Starter €12, Standard €24, Pro €48)",
          "Build plan cards with target audience messaging",
          "Add 'Most Popular' highlighting for Standard plan",
          "Create zones table with EU regions (Frankfurt, Amsterdam, London)",
          "Build zone selector with country flags and latency info",
          "Implement domain configurator for xxxxx.perched.eu format",
          "Add real-time domain validation (12 char min, availability check)",
          "Create domain availability API with database lookup",
          "Add plan comparison features and EU compliance badges",
          "Implement responsive plan grid for mobile devices"
        ]
      },
      {
        id: 4,
        title: "Stripe Payment Integration",
        userStory: "As a business owner, I want to securely pay for my hosting plan in Euros with European payment protection.",
        phase: "Week 3-4",
        tasks: [
          "Setup Stripe account with EUR currency and EU business settings",
          "Create checkout page with order summary and EU messaging",
          "Integrate Stripe Elements with professional styling",
          "Implement payment intent creation with metadata (plan, domain, zone)",
          "Add payment success handling with deployment trigger",
          "Create payment failure flow with retry mechanism",
          "Setup Stripe webhooks for payment confirmation",
          "Add subscription creation for monthly billing",
          "Implement 30-day guarantee messaging and logic",
          "Create billing history tracking in database",
          "Add payment security (CSP headers, validation)"
        ]
      },
      {
        id: 5,
        title: "Deployment Automation",
        userStory: "As a business owner, I want my server deployed automatically after payment so I can start using my services quickly.",
        phase: "Week 5-6",
        tasks: [
          "Create deployments table with status tracking",
          "Design deployment stages (8 stages from infrastructure to completion)",
          "Implement deployment queue using background jobs",
          "Create infrastructure provisioning API calls to cloud provider",
          "Add YunoHost installation automation scripts",
          "Implement domain configuration (DNS, SSL certificates)",
          "Add Nextcloud installation and business app suite",
          "Create deployment progress tracking with WebSocket updates",
          "Implement error handling and retry mechanisms",
          "Add deployment logging for troubleshooting",
          "Create completion notifications (email + dashboard update)"
        ]
      },
      {
        id: 6,
        title: "Real-time Deployment Tracking",
        userStory: "As a business owner, I want to see real-time progress of my server deployment so I know when my services will be ready.",
        phase: "Week 5-6",
        tasks: [
          "Create deployment status page with progress bar",
          "Implement WebSocket connection for real-time updates",
          "Add stage indicators with descriptive text",
          "Create estimated completion time calculation",
          "Build deployment logs viewer (expandable section)",
          "Add error state handling with retry options",
          "Implement success state with service access links",
          "Create deployment failure notifications with support contact",
          "Add mobile-responsive progress tracking",
          "Setup automatic redirect on completion"
        ]
      },
      {
        id: 7,
        title: "User Dashboard & Service Management",
        userStory: "As a business owner, I want a professional dashboard to access my services and manage my account.",
        phase: "Week 7-8",
        tasks: [
          "Create dashboard layout with business-focused design",
          "Add deployment status cards with quick actions",
          "Implement service access links (Nextcloud, email, calendar)",
          "Create account settings page with business information",
          "Add billing management (subscription, history, invoices)",
          "Implement password manager access and setup",
          "Create support ticket system integration",
          "Add GDPR data export functionality",
          "Build account deletion with data removal",
          "Create usage monitoring (storage, bandwidth)"
        ]
      },
      {
        id: 8,
        title: "Email System & Notifications",
        userStory: "As a business owner, I want professional email communications that reflect the European business context.",
        phase: "Week 7-8",
        tasks: [
          "Setup email service (Resend or SendGrid with EU region)",
          "Create welcome email template with professional EU branding",
          "Build verification email with clear business context",
          "Add deployment completion email with service access instructions",
          "Create payment failure notifications with retry instructions",
          "Implement GDPR notification system for policy updates",
          "Add password reset emails with security messaging",
          "Create support email templates for common issues",
          "Setup email delivery monitoring and bounce handling",
          "Add unsubscribe management with GDPR compliance"
        ]
      },
      {
        id: 9,
        title: "EU Infrastructure & Compliance",
        userStory: "As a European business, I want guaranteed EU data residency and GDPR compliance built into the platform.",
        phase: "Week 7-8",
        tasks: [
          "Setup EU cloud infrastructure (AWS/GCP EU regions)",
          "Implement GDPR compliance tracking in database",
          "Create data residency guarantees and verification",
          "Add compliance dashboard with audit trail",
          "Setup EU-only data routing and validation",
          "Implement data retention policies with automatic cleanup",
          "Create privacy policy generator for businesses",
          "Add GDPR consent management with granular controls",
          "Setup compliance monitoring and reporting",
          "Create EU legal protection documentation"
        ]
      },
      {
        id: 10,
        title: "Testing & Quality Assurance",
        userStory: "As a development team, we want comprehensive testing to ensure platform reliability for business users.",
        phase: "Week 7-8",
        tasks: [
          "Setup unit testing with Jest/Vitest (90%+ coverage)",
          "Create integration tests for payment flow",
          "Add end-to-end testing with Playwright",
          "Implement API testing for all endpoints",
          "Setup load testing for concurrent users",
          "Create deployment testing with staging environment",
          "Add security testing (OWASP, dependency scanning)",
          "Implement accessibility testing (WCAG 2.1 AA)",
          "Setup monitoring (error tracking, performance)",
          "Create test data management with realistic scenarios"
        ]
      }
    ]
  });

  // State for tracking completed tasks
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [selectedPhase, setSelectedPhase] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle task completion
  const toggleTask = (epicId: number, taskIndex: number) => {
    const taskId = `${epicId}-${taskIndex}`;
    const newCompleted = new Set(completedTasks);
    
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    
    setCompletedTasks(newCompleted);
  };

  // Calculate progress statistics
  const stats = useMemo(() => {
    const totalTasks = projectData.epics.reduce((sum, epic) => sum + epic.tasks.length, 0);
    const completedCount = completedTasks.size;
    const progressPercentage = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
    
    const epicProgress = projectData.epics.map(epic => {
      const epicCompleted = epic.tasks.filter((_, index) => 
        completedTasks.has(`${epic.id}-${index}`)
      ).length;
      return {
        id: epic.id,
        title: epic.title,
        completed: epicCompleted,
        total: epic.tasks.length,
        percentage: Math.round((epicCompleted / epic.tasks.length) * 100)
      };
    });
    
    return {
      totalTasks,
      completedCount,
      progressPercentage,
      epicProgress
    };
  }, [completedTasks, projectData.epics]);

  // Filter epics based on phase and search
  const filteredEpics = useMemo(() => {
    return projectData.epics.filter(epic => {
      const phaseMatch = selectedPhase === 'All' || epic.phase === selectedPhase;
      const searchMatch = searchTerm === '' || 
        epic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        epic.tasks.some(task => task.toLowerCase().includes(searchTerm.toLowerCase()));
      return phaseMatch && searchMatch;
    });
  }, [projectData.epics, selectedPhase, searchTerm]);

  const phases = ['All', 'Week 1-2', 'Week 3-4', 'Week 5-6', 'Week 7-8'];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                🏔️ Perched.eu Project Tracker
              </h1>
              <p className="text-gray-600 mt-1">European Data Sovereignty Platform Development</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-600">{stats.progressPercentage}%</div>
                <div className="text-sm text-gray-600">Complete</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{stats.completedCount}</div>
                <div className="text-sm text-gray-600">Tasks Done</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{stats.totalTasks}</div>
                <div className="text-sm text-gray-600">Total Tasks</div>
              </div>
            </div>
          </div>
          
          {/* Overall Progress Bar */}
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Overall Progress</span>
              <span>{stats.completedCount} of {stats.totalTasks} tasks</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${stats.progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Filter by Phase:</span>
            </div>
            {phases.map(phase => (
              <button
                key={phase}
                onClick={() => setSelectedPhase(phase)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedPhase === phase
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {phase}
              </button>
            ))}
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-auto px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* EPIC Progress Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {stats.epicProgress.map(epic => (
            <div key={epic.id} className="bg-white rounded-lg shadow-sm p-4">
              <h3 className="font-semibold text-gray-900 text-sm mb-2 truncate">
                EPIC {epic.id}: {epic.title}
              </h3>
              <div className="flex justify-between text-xs text-gray-600 mb-1">
                <span>{epic.completed} of {epic.total} tasks</span>
                <span>{epic.percentage}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-indigo-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${epic.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* EPICs and Tasks */}
        <div className="space-y-6">
          {filteredEpics.map(epic => {
            const epicProgress = stats.epicProgress.find(p => p.id === epic.id);
            
            return (
              <div key={epic.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2">
                        EPIC {epic.id}: {epic.title}
                      </h2>
                      <p className="text-indigo-100 text-sm mb-3">
                        {epic.userStory}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {epic.phase}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {epic.tasks.length} tasks
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          {epicProgress?.percentage}% complete
                        </span>
                      </div>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold">
                        {epicProgress?.completed}/{epicProgress?.total}
                      </div>
                      <div className="text-sm text-indigo-200">Tasks</div>
                    </div>
                  </div>
                  
                  {/* EPIC Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white h-2 rounded-full transition-all duration-500"
                        style={{ width: `${epicProgress?.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-3">
                    {epic.tasks.map((task, index) => {
                      const taskId = `${epic.id}-${index}`;
                      const isCompleted = completedTasks.has(taskId);
                      
                      return (
                        <div 
                          key={index}
                          className={`flex items-start gap-3 p-3 rounded-lg border transition-all duration-200 ${
                            isCompleted 
                              ? 'bg-green-50 border-green-200' 
                              : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                          }`}
                        >
                          <button
                            onClick={() => toggleTask(epic.id, index)}
                            className="flex-shrink-0 mt-0.5"
                          >
                            {isCompleted ? (
                              <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                            )}
                          </button>
                          <span 
                            className={`flex-1 text-sm ${
                              isCompleted 
                                ? 'text-green-800 line-through' 
                                : 'text-gray-700'
                            }`}
                          >
                            {task}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredEpics.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <div className="text-gray-400 text-lg mb-2">No EPICs found</div>
            <div className="text-gray-600">Try adjusting your filters or search term</div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>🇪🇺 Building the European alternative to Big Tech • Made with ❤️ for EU businesses</p>
          <p className="mt-1">Note: Progress is saved during this session only</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectTracker; 
