import {
  Binary,
  BookOpenCheck,
  Boxes,
  BrainCircuit,
  Braces,
  Cpu,
  DatabaseZap,
  Download,
  Github,
  GraduationCap,
  HardDrive,
  Layers3,
  Mail,
  MapPin,
  Medal,
  MemoryStick,
  MonitorCog,
  Network,
  Radio,
  Satellite,
  ShieldCheck,
  TerminalSquare,
  Timer,
  Zap,
} from 'lucide-react';

export const bootLogs = [
  '[BOOT] Initializing Embedded Systems Portfolio...',
  '[CLK] Calibrating cybernetic timing source: 168 MHz',
  '[MEM] Mapping firmware modules to protected memory',
  '[BUS] Loading UART, SPI, I2C telemetry interfaces',
  '[RTOS] Checking scheduler queues and interrupt vectors',
  '[PCB] Energizing holographic trace layer',
  '[SYS] System Status: ONLINE',
];

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Learning', href: '#learning' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'GitHub', href: '#github' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const heroActions = [
  { label: 'Explore Projects', href: '#projects', tone: 'primary', icon: Cpu },
  { label: 'Download Resume', href: '/resume-hemanth-k.pdf', tone: 'secondary', icon: Download },
  { label: 'GitHub Profile', href: 'https://github.com/', tone: 'secondary', icon: Github },
  { label: 'Contact Me', href: '#contact', tone: 'ghost', icon: Mail },
];

export const profileStats = [
  { label: 'GitHub commits', value: 365, suffix: '+', icon: Github },
  { label: 'Projects completed', value: 7, suffix: '', icon: Boxes },
  { label: 'Learning streak', value: 120, suffix: ' days', icon: Zap },
  { label: 'Coding hours', value: 640, suffix: '+', icon: Timer },
];

export const currentlyLearning = [
  { label: 'RTOS task scheduling', progress: 64 },
  { label: 'Bare-metal ARM startup code', progress: 58 },
  { label: 'Linux device-driver basics', progress: 42 },
  { label: 'Protocol debugging', progress: 72 },
];

export const skillGroups = [
  {
    title: 'Languages',
    icon: Braces,
    accent: 'cyan',
    skills: [
      { name: 'C', level: 82 },
      { name: 'Embedded C', level: 76 },
      { name: 'Python Basics', level: 48 },
    ],
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    accent: 'green',
    skills: [
      { name: 'UART', level: 78 },
      { name: 'SPI', level: 62 },
      { name: 'I2C', level: 64 },
      { name: 'GPIO', level: 84 },
      { name: 'Timers', level: 70 },
      { name: 'Interrupts', level: 68 },
      { name: 'RTOS', level: 48 },
      { name: 'ARM Basics', level: 54 },
      { name: 'Bare-metal programming', level: 66 },
    ],
  },
  {
    title: 'Tools',
    icon: MonitorCog,
    accent: 'plasma',
    skills: [
      { name: 'Git', level: 72 },
      { name: 'GitHub', level: 74 },
      { name: 'Linux', level: 62 },
      { name: 'VS Code', level: 80 },
      { name: 'CodeBlocks', level: 68 },
    ],
  },
];

export const radarSkills = [
  { axis: 'Embedded C', value: 76 },
  { axis: 'Debugging', value: 70 },
  { axis: 'Protocols', value: 68 },
  { axis: 'Linux', value: 62 },
  { axis: 'RTOS', value: 48 },
  { axis: 'Git', value: 72 },
];

export const projectCategories = ['All', 'C Programming', 'Firmware', 'RTOS', 'Protocols'];

export const projects = [
  {
    title: 'C Practice 365',
    category: 'C Programming',
    summary: 'A disciplined daily C programming archive focused on pointers, arrays, strings, bitwise logic, and problem solving.',
    tech: ['C', 'Git', 'Linux'],
    difficulty: 'Intermediate',
    status: 'Active',
    timeline: '365 day roadmap',
    stats: { files: 365, lines: '18k+', commits: '365+' },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xC365',
  },
  {
    title: 'Number Manipulation Programs',
    category: 'C Programming',
    summary: 'Optimized arithmetic routines covering digit extraction, reverse, palindrome, Armstrong checks, and base conversions.',
    tech: ['C', 'Math', 'CLI'],
    difficulty: 'Beginner+',
    status: 'Stable',
    timeline: '2 weeks',
    stats: { files: 24, lines: '1.9k', commits: 41 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xNUM',
  },
  {
    title: 'Prime Number Checker',
    category: 'C Programming',
    summary: 'A compact prime validation module with time-complexity notes and clean terminal input handling.',
    tech: ['C', 'Algorithms'],
    difficulty: 'Beginner',
    status: 'Complete',
    timeline: '3 days',
    stats: { files: 6, lines: 420, commits: 14 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xPRM',
  },
  {
    title: 'LCM Calculator',
    category: 'C Programming',
    summary: 'LCM and GCD calculator demonstrating modular functions, validation, and reusable number theory utilities.',
    tech: ['C', 'CLI', 'Testing'],
    difficulty: 'Beginner',
    status: 'Complete',
    timeline: '2 days',
    stats: { files: 5, lines: 360, commits: 10 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xLCM',
  },
  {
    title: 'Embedded Driver Simulations',
    category: 'Firmware',
    summary: 'Register-level driver simulations for GPIO, timers, and interrupt-style callbacks before moving to physical boards.',
    tech: ['Embedded C', 'Registers', 'GPIO'],
    difficulty: 'Advanced',
    status: 'Prototype',
    timeline: '4 weeks',
    stats: { files: 18, lines: '3.4k', commits: 73 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xDRV',
  },
  {
    title: 'UART Communication Demo',
    category: 'Protocols',
    summary: 'UART packet simulation with baud-rate framing, parity notes, transmit buffers, and serial console diagnostics.',
    tech: ['UART', 'Embedded C', 'Linux'],
    difficulty: 'Intermediate',
    status: 'Active',
    timeline: '3 weeks',
    stats: { files: 14, lines: '2.2k', commits: 52 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xUART',
  },
  {
    title: 'Mini RTOS Scheduler',
    category: 'RTOS',
    summary: 'A learning scheduler that models task states, cooperative switching, tick timing, and priority experiments.',
    tech: ['C', 'RTOS', 'Schedulers'],
    difficulty: 'Advanced',
    status: 'Research',
    timeline: '6 weeks',
    stats: { files: 21, lines: '4.1k', commits: 84 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xRTOS',
  },
];

export const contributionLevels = [
  1, 3, 2, 4, 0, 2, 1, 2, 4, 3, 1, 0, 2, 3, 4, 1, 2, 2, 4, 3, 0, 1, 3, 4,
  2, 1, 0, 3, 2, 4, 4, 2, 1, 3, 0, 2, 3, 4, 1, 2, 4, 3, 1, 0, 2, 3, 4, 4,
  2, 1, 3, 2, 4, 0, 1, 3, 4, 2, 3, 1, 0, 4, 2, 3, 4, 1, 2, 3, 0, 4, 3, 2,
  1, 4, 4, 2, 0, 1, 3, 2, 4, 3, 1, 0,
];

export const learningDashboard = {
  streak: 120,
  today: [
    'Refined pointer arithmetic notes with memory diagrams.',
    'Simulated UART frame timing and parity fault handling.',
    'Reviewed RTOS task states and cooperative scheduling tradeoffs.',
  ],
  weekly: [
    { label: 'C drills', value: 91 },
    { label: 'Firmware notes', value: 74 },
    { label: 'Linux practice', value: 58 },
    { label: 'Protocol labs', value: 67 },
  ],
  codingTracker: [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 3.1 },
    { day: 'Wed', hours: 1.8 },
    { day: 'Thu', hours: 3.6 },
    { day: 'Fri', hours: 2.9 },
    { day: 'Sat', hours: 4.2 },
    { day: 'Sun', hours: 2.2 },
  ],
};

export const certificates = [
  { title: 'Embedded Systems Fundamentals', category: 'Embedded Systems', issuer: 'Upload Certificate', status: 'Placeholder', icon: Cpu },
  { title: 'C Programming Mastery', category: 'C Programming', issuer: 'Upload Certificate', status: 'Placeholder', icon: Braces },
  { title: 'Linux for Embedded', category: 'Linux', issuer: 'Upload Certificate', status: 'Placeholder', icon: HardDrive },
  { title: 'Firmware Workshop', category: 'Workshops', issuer: 'Upload Certificate', status: 'Placeholder', icon: GraduationCap },
  { title: 'Technical Event Participation', category: 'Technical Events', issuer: 'Upload Certificate', status: 'Placeholder', icon: Medal },
];

export const timeline = [
  { title: 'Started C Programming', date: 'Foundation', detail: 'Built the core mental model for memory, functions, arrays, pointers, and command-line problem solving.', icon: Binary },
  { title: 'GitHub Portfolio Creation', date: 'Version Control', detail: 'Organized repositories, daily coding logs, and public engineering progress.', icon: Github },
  { title: 'Embedded Systems Learning', date: 'Hardware Layer', detail: 'Moved from pure C to GPIO, timers, communication protocols, and low-level system thinking.', icon: Cpu },
  { title: 'First Firmware Project', date: 'Driver Lab', detail: 'Created simulation-first firmware modules to understand register-level behavior and debugging flow.', icon: MemoryStick },
  { title: 'RTOS Learning', date: 'Scheduler Layer', detail: 'Exploring tasks, ticks, state machines, priorities, and deterministic embedded design.', icon: Layers3 },
  { title: 'Internship Placeholder', date: 'Next Mission', detail: 'Targeting firmware, embedded Linux, driver, or microcontroller internship opportunities.', icon: ShieldCheck },
];

export const githubAnalytics = {
  username: 'Hemanth-K',
  streak: 120,
  languages: [
    { name: 'C', value: 62, color: '#27e8ff' },
    { name: 'Embedded C', value: 18, color: '#66ff99' },
    { name: 'Python', value: 8, color: '#b46cff' },
    { name: 'Shell', value: 7, color: '#f8d66d' },
    { name: 'Docs', value: 5, color: '#ff6b9d' },
  ],
  repositories: [
    { name: 'C-Embedded-365', description: 'Daily C and embedded practice archive.', icon: Braces, activity: 'Active' },
    { name: 'Embedded-Projects', description: 'Microcontroller and firmware experiments.', icon: Cpu, activity: 'Building' },
    { name: 'UART-Communication', description: 'Serial communication simulations and notes.', icon: Radio, activity: 'Active' },
    { name: 'RTOS-Learning', description: 'Scheduler concepts, task states, timing labs.', icon: Layers3, activity: 'Research' },
    { name: 'Linux-For-Embedded', description: 'Linux commands, build notes, device concepts.', icon: TerminalSquare, activity: 'Learning' },
    { name: 'Portfolio-Website', description: 'Personal engineering operating system UI.', icon: DatabaseZap, activity: 'Live' },
  ],
};

export const contactChannels = [
  { label: 'Email', value: 'hemanth.k@example.com', href: 'mailto:hemanth.k@example.com', icon: Mail },
  { label: 'LinkedIn', value: 'linkedin.com/in/hemanth-k-094b96357', href: 'https://www.linkedin.com/in/hemanth-k-094b96357', icon: Network },
  { label: 'GitHub', value: 'github.com/Hemanth-K', href: 'https://github.com/', icon: Github },
  { label: 'Location', value: 'India - open to embedded roles', href: '#contact', icon: MapPin },
];

export const terminalCommands = {
  help: 'Available: help, skills, projects, github, resume, contact, clear',
  skills: 'C | Embedded C | UART | SPI | I2C | GPIO | Timers | Interrupts | RTOS | Linux | Git',
  projects: 'C Practice 365, Driver Simulations, UART Demo, Mini RTOS Scheduler and more.',
  github: 'Open the GitHub dashboard section or connect repositories in src/data/portfolio.js.',
  resume: 'Resume preview is available in the Resume section. Replace /resume-hemanth-k.pdf with the final PDF.',
  contact: 'Email: hemanth.k@example.com | LinkedIn and GitHub links are wired in contactChannels.',
};

export const dashboardSignals = [
  { label: 'MCU Core', value: 'ARM-LITE', icon: Cpu },
  { label: 'UART', value: '115200 8N1', icon: Radio },
  { label: 'RTOS Tick', value: '1ms', icon: Timer },
  { label: 'Telemetry', value: 'ONLINE', icon: Satellite },
  { label: 'Memory Map', value: 'CLEAN', icon: MemoryStick },
  { label: 'Interrupts', value: 'READY', icon: Zap },
];

export const resumeHighlights = [
  'Embedded C and low-level programming foundation',
  'Microcontroller protocol practice: UART, SPI, I2C, GPIO, timers, interrupts',
  'RTOS learning path with scheduler and task-state experiments',
  'Linux-first tooling mindset with GitHub-driven public progress',
];

export const engineeringQuote =
  'Good firmware is quiet: deterministic at the edge, readable in the lab, and honest under a logic analyzer.';
