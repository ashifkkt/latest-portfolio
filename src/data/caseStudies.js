// Case-study content. Every statement here was checked against the project's source code.
export const caseStudies = {
  tecbooks: {
    title: 'Tecbooks',
    company: 'Techon Innovations',
    tagline: 'A multi-branch accounting and business suite, built end to end.',
    role: 'Full-stack developer. Built the Express API, the MongoDB data layer and the Next.js front ends.',
    stack: ['Next.js', 'React', 'TypeScript', 'Express', 'MongoDB', 'Socket.io', 'Firebase', 'Zod', 'React Query', 'Zustand'],
    facts: [
      { value: '24', label: 'API controllers' },
      { value: '43', label: 'MongoDB models' },
      { value: '4', label: 'recurring document types' },
      { value: 'Multi-branch', label: 'with role permissions' },
    ],
    diagram: 'tecbooks',
    problem:
      'Small and mid-size businesses run billing, accounts, stock and projects in separate tools, then reconcile them by hand. Tecbooks puts sales, purchases, accounting, inventory and projects in one system that understands branches and who is allowed to do what.',
    scope: [
      'Sales: invoices, quotations, sale orders, credit notes, delivery notes, customers and payments received.',
      'Purchases: bills, purchase orders, vendor credits and payments made.',
      'Accounting: chart of accounts, journal entries, expenses and financial reports.',
      'Inventory, projects and time tracking, plus team management.',
      'A separate super-admin app for managing companies, subscription plans, pricing and approvals.',
    ],
    decisions: [
      {
        title: 'Permissions checked per module and per action',
        body: 'A middleware checks create, read, update and delete rights for each module on every request. Front-end screen names are mapped to one canonical backend module name (for example "Bills" and "Recurring bill" both resolve to billing), so a renamed screen cannot silently bypass a rule.',
      },
      {
        title: 'Data scoped to the branches a user may see',
        body: 'A helper resolves which branches the signed-in user can access and applies it to queries, so branch managers only see their own branch while owners can see all of them.',
      },
      {
        title: 'Financial writes happen together or not at all',
        body: 'Invoices, payments, credit notes, vendor credits and journal entries post their ledger entries inside MongoDB sessions. If a step fails, the books are not left half-posted.',
      },
      {
        title: 'Recurring documents run themselves',
        body: 'A worker starts with the server and checks daily for active recurring profiles that are due and not expired. Dedicated services then generate the invoice, bill, expense or journal entry.',
      },
      {
        title: 'Document numbers per branch and type',
        body: 'Numbering is configurable per branch and document type: automatic sequential numbers, or a manual number that is checked for uniqueness before it is accepted.',
      },
      {
        title: 'A working chart of accounts from day one',
        body: 'Registering a company seeds default account types and system accounts that are marked as system-generated, so reports and postings work immediately.',
      },
      {
        title: 'Real-time notifications',
        body: 'Socket.io puts each user in a private room for live notifications, and Firebase Cloud Messaging delivers push notifications when the app is closed.',
      },
    ],
    frontend:
      'The super-admin app uses the Next.js App Router with separate public and dashboard route groups. Code is organised by business module (accounts, approvals, plans and pricing, subscriptions, projects and more), each with its own API layer, components, hooks and store. Forms use React Hook Form with Zod validation, server state uses React Query and tables use TanStack Table.',
  },

  tecpos: {
    title: 'TecPos',
    company: 'Techon Innovations',
    tagline: 'A restaurant POS that keeps selling when the internet goes down.',
    role: 'Full-stack developer. Built the POS API, the offline sync worker, printing and the back-office portal.',
    stack: ['React 19', 'TypeScript', 'Express 5', 'MongoDB', 'Socket.IO', 'Docker', 'Turborepo', 'pnpm', 'Tailwind', 'TanStack Query'],
    facts: [
      { value: '~24', label: 'record types synced' },
      { value: '15', label: 'API test files' },
      { value: '1 install', label: 'per company, fully isolated' },
      { value: 'ESC/POS', label: 'network and USB printing' },
    ],
    diagram: 'tecpos',
    problem:
      'A restaurant cannot stop billing because the internet is slow. Owners still want their sales, purchases and expenses in the cloud and clean books at month end. TecPos is built to work fully on the shop PC and catch the cloud up whenever it can.',
    scope: [
      'POS: orders, tables, kitchen tickets, menu, customers and thermal-printer receipts.',
      'Back-office portal: expenses, purchases, suppliers, chart of accounts, profit and loss, VAT and purchase reports with PDF and Excel export.',
      'Role-based staff access, an audit trail, scheduled backups and Docker deployment.',
    ],
    decisions: [
      {
        title: 'Local-first: every shop runs its own API and database',
        body: 'Each company gets its own install with its own API, MongoDB database and secrets. Tills keep working with no internet, and one shop can never affect another. The API refuses to start with an empty or weak secret.',
      },
      {
        title: 'Sync by "changed since last upload" flags',
        body: 'Every record carries a synced flag. A worker checks connectivity, then uploads unsynced records type by type to the online server, and skips quietly when the shop is offline. Dish photos are uploaded first and the local path is replaced by the hosted URL before the dish itself syncs.',
      },
      {
        title: 'Fixing a race in the sync itself',
        body: 'Marking records as synced by id alone meant an order that was paid or cancelled during an upload could be flagged as synced without its latest change ever reaching the server. The worker now marks a record as synced only if it did not change while the upload ran, and a dedicated test covers it.',
      },
      {
        title: 'Rights that cannot be handed out by mistake',
        body: 'Each role has per-module switches that are read live, so a role change applies immediately. An unknown right throws when the routes load, so a typo cannot leave a route open, and a tested rule stops anyone from granting more than they hold.',
      },
      {
        title: 'An audit trail that cannot be edited',
        body: 'Every change to the menu, prices, people, roles and settings is recorded with the actor, the field, the old and new value. There is no route to edit or delete entries, and secrets such as PINs are logged as "changed" without the value.',
      },
      {
        title: 'Scheduled jobs for the kitchen',
        body: 'Agenda jobs backed by MongoDB move kitchen tickets along and automatically reject tickets that were never handled after 24 hours.',
      },
      {
        title: 'Safe on a shop network',
        body: 'The sign-in list of staff names is only served to the shop PC and the local network, never the internet. Requests are rate limited, and receipts and kitchen tickets print as raw ESC/POS bytes over TCP or USB.',
      },
      {
        title: 'Tests that run the real thing',
        body: 'The regression suite boots the real API against a throwaway database, runs a full restaurant day (dine-in, take-away, delivery, credit, cancelled and open orders) and compares reports against hand-worked totals. If a report drifts, the test names it.',
      },
    ],
    frontend:
      'The back-office portal is React 19 with TypeScript, Vite, Tailwind 4 and Radix UI. It uses TanStack Query and Table, Zustand and Zod, and the repository is a pnpm and Turborepo monorepo. The production setup runs the API and portal in Docker behind Nginx on a VPS, with on-site setup documented for shop installs.',
  },
};
