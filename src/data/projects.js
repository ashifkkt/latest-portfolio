export const projects = [
  {
    id: 6,
    company: 'Techon Innovations',
    category: 'Business Suite',
    title: 'Tecbooks',
    caseStudy: 'tecbooks',
    image: '/projects/tecbooks.svg',
    role: 'Full-stack developer: built both the frontend and the backend, from the Next.js admin apps to the Express API and MongoDB data layer.',
    overview:
      'Zoho-style business suite for accounting, sales, purchases, inventory and projects, with a separate super-admin app for managing companies and subscription plans.',
    problem:
      'Small and mid-size businesses juggle separate tools for billing, accounts, stock and projects. Tecbooks brings these workflows into one multi-branch system.',
    features: [
      'Sales and purchases: invoices, quotations, sale orders, credit notes, delivery notes, bills, purchase orders and vendor credits',
      'Accounting: chart of accounts, journal entries, expenses and financial reports',
      'Recurring invoices, bills, expenses and journals generated automatically by a background worker',
      'Multi-branch access with per-module create, read, update and delete permissions',
      'Real-time notifications over Socket.io with Firebase push',
      'Super-admin app for company management, subscription plans and approvals'
    ],
    architecture:
      'TypeScript Express API on MongoDB (Mongoose) with JWT cookie authentication, a permission middleware that checks each module action, and branch-level data access. A daily worker creates due recurring documents; Socket.io and Firebase Cloud Messaging deliver notifications. The super-admin front end is Next.js with React Query, Zustand and Zod.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Express', 'MongoDB', 'Socket.io', 'Firebase'],
    liveDemo: null,
    github: null
  },
  {
    id: 7,
    company: 'Techon Innovations',
    category: 'Biometric System',
    title: 'Bio Tech',
    image: '/projects/bio-tech.svg',
    role: 'Full-stack developer: built both the frontend and the backend of the complete biometric system.',
    overview:
      'Complete biometric solution covering device integration, employee identity and attendance, with an admin interface for managing and reporting on the data.',
    problem:
      'Organizations needed reliable, tamper-resistant identity and attendance tracking instead of manual registers, tied into one manageable system.',
    features: [
      'Biometric device integration and enrolment',
      'Attendance and access tracking',
      'Admin dashboard and reports',
      'Full-stack implementation from device data to UI'
    ],
    techStack: ['React', 'Node.js'],
    liveDemo: null,
    github: null
  },
  {
    id: 8,
    company: 'Techon Innovations',
    category: 'POS Software',
    title: 'TecPos',
    caseStudy: 'tecpos',
    image: '/projects/tecpos.svg',
    role: 'Full-stack developer: built both the frontend and the backend, including the POS API, the sync worker and the back-office portal.',
    overview:
      'Offline-first restaurant POS installed on the shop PC, plus a back-office portal for purchases, expenses, suppliers and finance reports.',
    problem:
      'Restaurants and workshops need fast, dependable billing at the counter, even when the internet is down, and owners need clean books without re-typing data.',
    features: [
      'Orders, tables, kitchen tickets, menu and customers with receipts on ESC/POS thermal printers (network or USB)',
      'Works offline: each shop runs its own API and database, and changed records sync to the online server when the internet returns',
      'Back-office portal: expenses, purchases, suppliers, chart of accounts, profit and loss, and VAT reports with PDF and Excel export',
      'Role-based permissions, audit log and scheduled on-site backups',
      'Docker and VPS deployment, with a regression test suite for orders, money flow, printing and sync'
    ],
    architecture:
      'pnpm and Turborepo monorepo. Express 5 API on MongoDB (Mongoose) with Socket.IO and JWT. Every company gets its own install (API, database and secrets) so one shop never affects another. A sync worker checks connectivity and uploads only records changed since the last sync, and the sign-in staff list is limited to the shop network. The portal is React 19, TypeScript, Vite, Tailwind, TanStack Query and Zustand.',
    techStack: ['React', 'TypeScript', 'Express', 'MongoDB', 'Socket.IO', 'Docker', 'Turborepo'],
    liveDemo: null,
    github: null
  },
  {
    id: 9,
    category: 'Barber Shop POS',
    title: 'TecBarber',
    image: '/projects/tecbarber.svg',
    overview:
      'NestJS backend for a barber-shop point of sale: services, staff, customers, sales, purchases, expenses and thermal receipt printing.',
    problem:
      'Small salons track sales, staff and expenses on paper. TecBarber puts billing, VAT, purchasing and reports behind one documented API.',
    features: [
      'Sales with line items and payment methods, plus VAT settings',
      'Customers, services, staff, suppliers, purchases and expenses',
      'Receipts printed to an Epson-style thermal printer over the network',
      'Reports, image upload with resizing, and Swagger API documentation'
    ],
    architecture:
      'NestJS modules with JWT authentication (Passport), class-validator DTOs, and Prisma on an embedded SQLite (libSQL) database managed through versioned migrations.',
    techStack: ['NestJS', 'TypeScript', 'Prisma', 'SQLite', 'JWT', 'Swagger'],
    liveDemo: null,
    github: null
  },
  {
    id: 1,
    company: 'Texol iCohort',
    category: 'Admin Panel',
    title: 'Vanforces (Admin Panel)',
    image: '/projects/vanforces-admin.svg',
    overview:
      'Production SaaS application for van sales management with complete admin functionality. Built the entire admin interface using React and Ant Design, handling sales operations, real-time tracking, transactions, and regulatory compliance.',
    problem:
      'Van sales businesses required a centralized admin system to manage operations, track field salesmen in real-time, process transactions, and generate compliant invoices with ZATCA integration.',
    features: [
      'Role-based authentication and granular access control',
      'Real-time salesman tracking with Google Maps integration and mobile app synchronization',
      'Socket.io-based live chat and real-time notifications',
      'Invoice generation and printing using react-pdf',
      'Transaction management system for sales, collections, and load operations',
      'ZATCA e-invoicing integration for regulatory compliance',
      'Custom report builder with dynamic column selection and export functionality'
    ],
    techStack: ['React', 'Ant Design', 'Socket.io', 'Google Maps API', 'REST APIs', 'react-pdf', 'ZATCA Integration'],
    liveDemo: 'https://admin.dev.vanforces.com/',
    github: null
  },
  {
    id: 2,
    company: 'Texol iCohort',
    category: 'Super Admin',
    title: 'Vanforces – Super Admin',
    image: '/projects/vanforces-super-admin.svg',
    overview:
      'Office-level super admin system built with React, TypeScript, and Shadcn UI. Manages multi-tenant subscriptions, pricing plans, user administration, and platform-wide settings with scalable architecture.',
    problem:
      'The platform needed a centralized super admin system to manage multiple tenants, subscription plans, pricing tiers, and organizational-level user administration.',
    features: [
      'Subscription plan and pricing management',
      'Multi-tenant user and subscription administration',
      'Platform-wide settings and configuration management',
      'Scalable architecture with TypeScript for type safety',
      'Clean, maintainable UI built with Shadcn UI'
    ],
    techStack: ['React', 'TypeScript', 'Shadcn UI', 'REST APIs', 'State Management'],
    liveDemo: 'https://admin.dev.vanforces.com/',
    github: null
  },
  {
    id: 3,
    company: 'Texol iCohort',
    category: 'Restaurant SaaS',
    title: 'Skipee (Restaurant Management System)',
    image: '/projects/skipee.svg',
    overview:
      'Production restaurant management system built with React and Material UI. Handles order processing, table management, staff coordination, and complete restaurant workflow operations.',
    problem:
      'Restaurants required an integrated system to manage daily operations including real-time order processing, table assignments, staff scheduling, and end-to-end workflow coordination.',
    features: [
      'Real-time order management and processing',
      'Table assignment and reservation management',
      'Staff scheduling and coordination',
      'Complete restaurant workflow automation',
      'Production-ready system with Material UI components'
    ],
    techStack: ['React', 'Material UI', 'REST APIs', 'State Management'],
    liveDemo: 'https://spstg-skippy.texol.work/',
    github: null
  },
  {
    id: 4,
    company: 'Texol iCohort',
    category: 'Multi-venue Admin',
    title: 'Skipee Admin',
    image: '/projects/skipee-admin.svg',
    overview:
      'Centralized admin panel built with React and Tailwind CSS for managing multiple restaurants. Provides unified administration, performance tracking, and comprehensive reporting across all restaurant locations.',
    problem:
      'The platform needed a centralized admin system to manage multiple restaurant locations, track performance metrics across venues, and provide unified reporting and analytics.',
    features: [
      'Multi-restaurant management and administration',
      'Centralized reporting and analytics dashboard',
      'Restaurant performance tracking and metrics',
      'Unified platform administration interface',
      'Tailwind CSS for responsive, modern UI'
    ],
    techStack: ['React', 'Tailwind CSS', 'REST APIs', 'State Management'],
    liveDemo: 'https://skippy-stg.texol.work/',
    github: null
  },
  {
    id: 5,
    company: 'Texol iCohort',
    category: 'Web Portal',
    title: 'Alamawasil Web Portal',
    image: '/projects/alamawasil.svg',
    overview:
      'Web portal built with React, TypeScript, and Shadcn UI for bulk invoice management, digital signing, and ZATCA integration. Includes comprehensive admin features for customer management, invoice tracking, and detailed reporting.',
    problem:
      'Businesses required a system to handle bulk invoice processing, digital signing workflows, ZATCA regulatory compliance, and comprehensive invoice management with real-time tracking and detailed reporting.',
    features: [
      'Bulk invoice upload and batch processing',
      'Digital signing workflow and document management',
      'ZATCA e-invoicing integration for regulatory compliance',
      'Customer management and relationship tracking',
      'Real-time invoice status monitoring and tracking',
      'Comprehensive reporting on invoice processing and status'
    ],
    techStack: ['React', 'TypeScript', 'Shadcn UI', 'REST APIs', 'ZATCA Integration'],
    liveDemo: 'https://admin.almawasil.com/',
    github: null
  }
];
