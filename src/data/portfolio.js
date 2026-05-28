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
  Phone,
  Radio,
  Satellite,
  ShieldCheck,
  TerminalSquare,
  Timer,
  Zap,
} from 'lucide-react';
import { embeddedChallenge } from './dailyLearning.js';

export const bootLogs = [
  '[BOOT] Initializing Embedded Systems Portfolio...',
  '[CLK] Calibrating cybernetic timing source: 168 MHz',
  '[MEM] Mapping firmware modules to protected memory',
  '[LOG] Loading 365-day embedded challenge tracker',
  '[C] Mounting daily C practice workspace',
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
  { label: 'Download Resume', href: '/resume-hemanth-k.png', tone: 'secondary', icon: Download },
  { label: 'GitHub Profile', href: 'https://github.com/hemanth068527', tone: 'secondary', icon: Github },
  { label: 'Contact Me', href: '#contact', tone: 'ghost', icon: Mail },
];

export const profileStats = [
  { label: 'Challenge day', value: embeddedChallenge.completedDays, suffix: '/365', icon: Github },
  { label: 'Daily logs', value: embeddedChallenge.dailyLog.length, suffix: '', icon: Boxes },
  { label: 'Learning streak', value: embeddedChallenge.completedDays, suffix: ' days', icon: Zap },
  { label: 'Roadmap target', value: embeddedChallenge.totalDays, suffix: ' days', icon: Timer },
];

export const currentlyLearning = [
  { label: 'Daily C practice habit', progress: 5 },
  { label: 'Embedded fundamentals roadmap', progress: 4 },
  { label: 'Microcontroller project documentation', progress: 12 },
  { label: 'IoT sensor integration notes', progress: 10 },
];

export const skillGroups = [
  {
    title: 'Languages',
    icon: Braces,
    accent: 'cyan',
    skills: [
      { name: 'C', level: 18 },
      { name: 'Python Basics', level: 12 },
      { name: 'Embedded C Roadmap', level: 8 },
    ],
  },
  {
    title: 'Embedded Systems',
    icon: Cpu,
    accent: 'green',
    skills: [
      { name: 'Arduino', level: 28 },
      { name: 'ESP32', level: 22 },
      { name: 'Raspberry Pi Basics', level: 14 },
      { name: 'Sensor Integration', level: 24 },
      { name: 'IoT Data Acquisition', level: 20 },
      { name: 'Wireless Basics', level: 14 },
      { name: 'PCB Basics', level: 16 },
      { name: 'Analog/Digital Circuits', level: 22 },
      { name: 'Microcontroller Roadmap', level: 18 },
    ],
  },
  {
    title: 'Tools',
    icon: MonitorCog,
    accent: 'plasma',
    skills: [
      { name: 'Git', level: 18 },
      { name: 'GitHub', level: 22 },
      { name: 'Arduino IDE', level: 30 },
      { name: 'MATLAB', level: 18 },
      { name: 'Tinkercad', level: 24 },
      { name: 'VS Code', level: 30 },
      { name: 'CodeBlocks', level: 18 },
    ],
  },
];

export const radarSkills = [
  { axis: 'C Basics', value: 12 },
  { axis: 'Sensors', value: 24 },
  { axis: 'IoT', value: 20 },
  { axis: 'Circuits', value: 22 },
  { axis: 'Tools', value: 26 },
  { axis: 'Git', value: 18 },
];

export const projectCategories = ['All', 'IoT', 'C Programming', 'Firmware', 'RTOS', 'Protocols'];

export const projects = [
  {
    title: 'IoT Onion Storage Monitoring System',
    category: 'IoT',
    summary: 'Designed an IoT-based onion storage monitoring concept using environmental sensors to improve shelf life and reduce post-harvest losses.',
    tech: ['Arduino/ESP32', 'Sensors', 'IoT', 'Data Logging'],
    difficulty: 'Student Project',
    status: 'Documented',
    timeline: 'Academic project',
    stats: { files: 'Report', lines: 'Sensors', commits: 'Learning' },
    github: 'https://github.com/hemanth068527',
    preview: '#',
    signal: '0xIOT',
  },
  {
    title: 'C Practice 365',
    category: 'C Programming',
    summary: 'A newly started 365-day embedded learning challenge. Currently completed 5 days and updating the log daily.',
    tech: ['C', 'Git', 'Linux'],
    difficulty: 'Beginner',
    status: 'Active',
    timeline: 'Day 5 of 365',
    stats: { files: 5, lines: 'Daily log', commits: '5+' },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xC365',
  },
  {
    title: 'Number Manipulation Programs',
    category: 'C Programming',
    summary: 'Planned C practice module for number logic, digit operations, and clean command-line programs.',
    tech: ['C', 'Math', 'CLI'],
    difficulty: 'Beginner',
    status: 'Roadmap',
    timeline: 'Upcoming',
    stats: { files: 0, lines: 'Planned', commits: 0 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xNUM',
  },
  {
    title: 'Prime Number Checker',
    category: 'C Programming',
    summary: 'Upcoming beginner C program for understanding loops, conditions, and simple algorithm thinking.',
    tech: ['C', 'Algorithms'],
    difficulty: 'Beginner',
    status: 'Roadmap',
    timeline: 'Upcoming',
    stats: { files: 0, lines: 'Planned', commits: 0 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xPRM',
  },
  {
    title: 'LCM Calculator',
    category: 'C Programming',
    summary: 'Upcoming C practice program for functions, math logic, validation, and reusable code structure.',
    tech: ['C', 'CLI', 'Testing'],
    difficulty: 'Beginner',
    status: 'Roadmap',
    timeline: 'Upcoming',
    stats: { files: 0, lines: 'Planned', commits: 0 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xLCM',
  },
  {
    title: 'Embedded Driver Simulations',
    category: 'Firmware',
    summary: 'Future milestone for the challenge after C fundamentals become stronger.',
    tech: ['Embedded C', 'Registers', 'GPIO'],
    difficulty: 'Future',
    status: 'Roadmap',
    timeline: 'Later milestone',
    stats: { files: 0, lines: 'Planned', commits: 0 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xDRV',
  },
  {
    title: 'UART Communication Demo',
    category: 'Protocols',
    summary: 'Future protocol learning project planned for the embedded systems roadmap.',
    tech: ['UART', 'Embedded C', 'Linux'],
    difficulty: 'Future',
    status: 'Roadmap',
    timeline: 'Later milestone',
    stats: { files: 0, lines: 'Planned', commits: 0 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xUART',
  },
  {
    title: 'Mini RTOS Scheduler',
    category: 'RTOS',
    summary: 'Long-term roadmap project after C, data structures, timers, and embedded basics are stronger.',
    tech: ['C', 'RTOS', 'Schedulers'],
    difficulty: 'Future',
    status: 'Roadmap',
    timeline: 'Long-term',
    stats: { files: 0, lines: 'Planned', commits: 0 },
    github: 'https://github.com/',
    preview: '#',
    signal: '0xRTOS',
  },
];

export const contributionLevels = Array.from({ length: 84 }, (_, index) =>
  index < embeddedChallenge.completedDays ? 4 : 0,
);

export const learningDashboard = {
  title: embeddedChallenge.title,
  completedDays: embeddedChallenge.completedDays,
  totalDays: embeddedChallenge.totalDays,
  progressPercent: Math.round((embeddedChallenge.completedDays / embeddedChallenge.totalDays) * 100),
  streak: embeddedChallenge.completedDays,
  currentFocus: embeddedChallenge.currentFocus,
  updateHint: embeddedChallenge.updateHint,
  today: embeddedChallenge.dailyLog
    .slice(-3)
    .reverse()
    .map((entry) => `Day ${entry.day}: ${entry.note}`),
  weekly: [
    { label: 'Challenge progress', value: Math.max(1, Math.round((embeddedChallenge.completedDays / embeddedChallenge.totalDays) * 100)) },
    { label: '5-day consistency', value: 100 },
    { label: 'Learning notes updated', value: 100 },
    { label: 'Future embedded roadmap', value: 5 },
  ],
  codingTracker: [
    { day: 'D1', sessions: 1 },
    { day: 'D2', sessions: 1 },
    { day: 'D3', sessions: 1 },
    { day: 'D4', sessions: 1 },
    { day: 'D5', sessions: 1 },
    { day: 'D6', sessions: 0 },
    { day: 'D7', sessions: 0 },
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
  { title: 'ECE Engineering Foundation', date: '2024-2028', detail: 'Pursuing B.E. Electronics and Communication Engineering at Sona College of Engineering, Salem.', icon: GraduationCap },
  { title: 'IoT Onion Storage Project', date: 'Academic Project', detail: 'Worked on sensor-based onion storage monitoring with Arduino/ESP32 concepts, data logging, and remote monitoring goals.', icon: Cpu },
  { title: '365 Days Embedded Challenge', date: 'Day 5', detail: 'Started the 365-day challenge and completed the first 5 daily learning sessions.', icon: Cpu },
  { title: 'First Firmware Project', date: 'Roadmap', detail: 'Planned as a future milestone after C fundamentals and embedded basics are stronger.', icon: MemoryStick },
  { title: 'RTOS Learning', date: 'Future Layer', detail: 'Long-term goal for the roadmap, not claimed as completed learning yet.', icon: Layers3 },
  { title: 'Internship Placeholder', date: 'Next Mission', detail: 'Targeting firmware, embedded Linux, driver, or microcontroller internship opportunities.', icon: ShieldCheck },
];

export const githubAnalytics = {
  username: 'Hemanth-K',
  streak: embeddedChallenge.completedDays,
  languages: [
    { name: 'C practice', value: 70, color: '#27e8ff' },
    { name: 'Learning notes', value: 20, color: '#66ff99' },
    { name: 'Portfolio', value: 10, color: '#b46cff' },
  ],
  repositories: [
    { name: 'C-Embedded-365', description: 'Daily 365-day embedded learning challenge archive.', icon: Braces, activity: 'Day 5' },
    { name: 'Embedded-Projects', description: 'Future microcontroller and firmware project roadmap.', icon: Cpu, activity: 'Roadmap' },
    { name: 'UART-Communication', description: 'Future serial communication learning project.', icon: Radio, activity: 'Planned' },
    { name: 'RTOS-Learning', description: 'Long-term RTOS learning roadmap.', icon: Layers3, activity: 'Future' },
    { name: 'Linux-For-Embedded', description: 'Future Linux notes for embedded development.', icon: TerminalSquare, activity: 'Planned' },
    { name: 'Portfolio-Website', description: 'Personal engineering operating system UI.', icon: DatabaseZap, activity: 'Live' },
  ],
};

export const contactChannels = [
  { label: 'Email', value: 'khemanth2801@gmail.com', href: 'mailto:khemanth2801@gmail.com', icon: Mail },
  { label: 'Phone', value: '+91 93608 63735', href: 'tel:+919360863735', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/hemanth-k-094b96357', href: 'https://www.linkedin.com/in/hemanth-k-094b96357', icon: Network },
  { label: 'GitHub', value: 'github.com/hemanth068527', href: 'https://github.com/hemanth068527', icon: Github },
  { label: 'Location', value: 'Hosur / Salem, Tamil Nadu', href: '#contact', icon: MapPin },
];

export const terminalCommands = {
  help: 'Available: help, skills, projects, github, resume, contact, clear',
  skills: 'ECE foundation, C basics, Python basics, Arduino, ESP32, sensors, IoT, MATLAB, Arduino IDE, Tinkercad.',
  projects: 'Documented: IoT Onion Storage Monitoring System. Active: C Practice 365.',
  github: 'Open the GitHub dashboard section or connect repositories in src/data/portfolio.js.',
  resume: 'Resume preview and download are available in the Resume section.',
  contact: 'Email: khemanth2801@gmail.com | Phone: +91 93608 63735 | LinkedIn and GitHub links are wired.',
};

export const dashboardSignals = [
  { label: 'MCU Core', value: 'ARM-LITE', icon: Cpu },
  { label: 'Challenge', value: 'DAY 5/365', icon: Radio },
  { label: 'Next Step', value: 'DAY 6', icon: Timer },
  { label: 'Telemetry', value: 'ONLINE', icon: Satellite },
  { label: 'Learning Log', value: 'ACTIVE', icon: MemoryStick },
  { label: 'Roadmap', value: 'READY', icon: Zap },
];

export const resumeHighlights = [
  'Second-year ECE student at Sona College of Engineering, Salem',
  'Current CGPA: 8.67 for B.E. Electronics and Communication Engineering',
  'IoT onion storage monitoring project with sensor integration and Arduino/ESP32 concepts',
  'Skills include C basics, Python basics, Arduino IDE, MATLAB, Tinkercad, analog/digital circuits, and IoT fundamentals',
];

export const education = [
  {
    degree: 'B.E - Electronics and Communication Engineering',
    institution: 'Sona College of Engineering, Salem',
    detail: 'Current CGPA: 8.67',
    year: '2024-2028',
  },
  {
    degree: 'HSC',
    institution: 'St. Joseph Mat Hr Sec School, Hosur',
    detail: 'Percentage: 77',
    year: '2024',
  },
  {
    degree: 'SSC',
    institution: 'St. Joseph Mat Hr Sec School, Hosur',
    detail: 'Percentage: 80',
    year: '2022',
  },
];

export const engineeringQuote =
  'Good firmware is quiet: deterministic at the edge, readable in the lab, and honest under a logic analyzer.';
