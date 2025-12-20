// Tool data types and centralized tool catalog

export type TagType = "free" | "paid" | "oss" | "recommended" | "essential";
export type GlowColor = "green" | "cyan" | "purple" | "yellow" | "pink" | "orange";
export type InstallMethod = "brew" | "brew-cask" | "curl" | "download" | "mas";
export type Category =
  | "terminal"
  | "shell"
  | "ide"
  | "browser"
  | "ai"
  | "productivity"
  | "dev"
  | "notes";

export interface Tag {
  type: TagType;
  label?: string;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  href: string;
  category: Category;

  // Installation
  installMethod: InstallMethod;
  installCommand?: string;
  downloadUrl?: string;

  // Metadata
  tags: Tag[];
  glow?: GlowColor;

  // Detail page
  hasDetailPage: boolean;
}

// =============================================================================
// TERMINAL TOOLS
// =============================================================================

export const terminalTools: Tool[] = [
  {
    slug: "ghostty",
    name: "Ghostty",
    description: "GPU-accelerated terminal by Mitchell Hashimoto. Extremely fast, native macOS feel, zero-config.",
    href: "https://ghostty.org",
    category: "terminal",
    installMethod: "brew-cask",
    installCommand: "brew install --cask ghostty",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "green",
    hasDetailPage: true,
  },
  {
    slug: "warp",
    name: "Warp",
    description: "AI-powered terminal. Block-based output, command suggestions, MCP support.",
    href: "https://warp.dev",
    category: "terminal",
    installMethod: "brew-cask",
    installCommand: "brew install --cask warp",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "Pro $15/mo" },
    ],
    glow: "cyan",
    hasDetailPage: true,
  },
  {
    slug: "tmux",
    name: "tmux",
    description: "Terminal multiplexer. Split panes, detach sessions, persist work across SSH. Essential for remote development.",
    href: "https://github.com/tmux/tmux",
    category: "terminal",
    installMethod: "brew",
    installCommand: "brew install tmux",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "essential", label: "Essential" },
    ],
    glow: "green",
    hasDetailPage: true,
  },
  {
    slug: "lazygit",
    name: "lazygit",
    description: "Terminal UI for git. Visual staging, interactive rebase, branch management. 95% of git tasks, zero memorization.",
    href: "https://github.com/jesseduffield/lazygit",
    category: "terminal",
    installMethod: "brew",
    installCommand: "brew install lazygit",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
];

// =============================================================================
// SHELL TOOLS
// =============================================================================

export const shellTools: Tool[] = [
  {
    slug: "config",
    name: "Complete Configuration",
    description: "All dotfiles in one place. Optimized configs for Zsh, Ghostty, Starship, and Git with Catppuccin Mocha theme.",
    href: "https://github.com/catppuccin/catppuccin",
    category: "shell",
    installMethod: "brew",
    installCommand: "brew install font-jetbrains-mono-nerd-font",
    tags: [
      { type: "recommended", label: "Start Here" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
  {
    slug: "oh-my-zsh",
    name: "Oh My Zsh",
    description: "Framework for managing Zsh configuration. Thousands of plugins and themes. Essential for shell productivity.",
    href: "https://ohmyz.sh",
    category: "shell",
    installMethod: "curl",
    installCommand: 'sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"',
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "essential", label: "Essential" },
    ],
    glow: "green",
    hasDetailPage: true,
  },
  {
    slug: "starship",
    name: "Starship",
    description: "Minimal, fast, customizable prompt. Works with any shell. Shows git status, language versions, and more.",
    href: "https://starship.rs",
    category: "shell",
    installMethod: "brew",
    installCommand: "brew install starship",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
  {
    slug: "modern-cli",
    name: "Modern CLI Tools",
    description: "Rust-powered replacements for cat, ls, grep, find. bat, eza, ripgrep, fd, fzf, zoxide. 10-100x faster.",
    href: "https://github.com/ibraheemdev/modern-unix",
    category: "terminal",
    installMethod: "brew",
    installCommand: "brew install bat eza ripgrep fd fzf zoxide tldr",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "cyan",
    hasDetailPage: true,
  },
];

// =============================================================================
// IDE & EDITOR TOOLS
// =============================================================================

export const ideTools: Tool[] = [
  {
    slug: "vscode",
    name: "VS Code",
    description: "Industry standard. Massive extension ecosystem. Add GitHub Copilot for AI.",
    href: "https://code.visualstudio.com",
    category: "ide",
    installMethod: "brew-cask",
    installCommand: "brew install --cask visual-studio-code",
    downloadUrl: "https://code.visualstudio.com/download",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "cyan",
    hasDetailPage: true,
  },
  {
    slug: "cursor",
    name: "Cursor",
    description: "VS Code fork with AI. Cmd+K inline gen, Cmd+L codebase chat, smart Tab completions.",
    href: "https://cursor.com",
    category: "ide",
    installMethod: "brew-cask",
    installCommand: "brew install --cask cursor",
    downloadUrl: "https://cursor.com/download",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "Pro $20/mo" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
  {
    slug: "zed",
    name: "Zed",
    description: "High-performance editor from Atom creators. Native Mac, extremely fast. Built-in AI.",
    href: "https://zed.dev",
    category: "ide",
    installMethod: "brew-cask",
    installCommand: "brew install --cask zed",
    downloadUrl: "https://zed.dev/download",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "yellow",
    hasDetailPage: true,
  },
];

// =============================================================================
// BROWSER TOOLS
// =============================================================================

export const browserTools: Tool[] = [
  {
    slug: "zen-browser",
    name: "Zen Browser",
    description: "Firefox-based, Arc-inspired. Vertical tabs, workspaces. Full Firefox extension support.",
    href: "https://zen-browser.app",
    category: "browser",
    installMethod: "brew-cask",
    installCommand: "brew install --cask zen-browser",
    downloadUrl: "https://zen-browser.app/download",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "arc",
    name: "Arc",
    description: "Chromium-based with sidebar, spaces, split view. Note: now in maintenance mode.",
    href: "https://arc.net",
    category: "browser",
    installMethod: "brew-cask",
    installCommand: "brew install --cask arc",
    tags: [{ type: "free" }],
    glow: "orange",
    hasDetailPage: false,
  },
  {
    slug: "firefox",
    name: "Firefox",
    description: "Privacy-focused, open source. Great developer tools. Supports Manifest V2 extensions.",
    href: "https://firefox.com",
    category: "browser",
    installMethod: "brew-cask",
    installCommand: "brew install --cask firefox",
    downloadUrl: "https://firefox.com/download",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "orange",
    hasDetailPage: false,
  },
  {
    slug: "chrome",
    name: "Google Chrome",
    description: "Most popular browser. Best DevTools. Required for some web development testing.",
    href: "https://google.com/chrome",
    category: "browser",
    installMethod: "brew-cask",
    installCommand: "brew install --cask google-chrome",
    downloadUrl: "https://google.com/chrome",
    tags: [{ type: "free" }],
    glow: "cyan",
    hasDetailPage: false,
  },
];

// =============================================================================
// AI TOOLS
// =============================================================================

export const aiTools: Tool[] = [
  {
    slug: "claude-code",
    name: "Claude Code",
    description: "Terminal coding agent. Understands your codebase, edits files, runs tests, handles git. MCP for GitHub, databases.",
    href: "https://claude.ai/product/claude-code",
    category: "ai",
    installMethod: "curl",
    installCommand: "curl -fsSL https://claude.ai/install.sh | bash",
    tags: [
      { type: "paid", label: "Pro $20+" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
  {
    slug: "github-copilot",
    name: "GitHub Copilot",
    description: "AI pair programmer in your IDE. Inline completions, chat, agent mode. 55% productivity boost. Works in VS Code, JetBrains.",
    href: "https://github.com/features/copilot",
    category: "ai",
    installMethod: "download",
    downloadUrl: "https://marketplace.visualstudio.com/items?itemName=GitHub.copilot",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$10/mo" },
      { type: "essential", label: "Essential" },
    ],
    glow: "cyan",
    hasDetailPage: true,
  },
  {
    slug: "aider",
    name: "Aider",
    description: "Open-source terminal coding assistant. Works with any LLM. Strong git integration.",
    href: "https://aider.chat",
    category: "ai",
    installMethod: "brew",
    installCommand: "brew install aider",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "claude-desktop",
    name: "Claude Desktop",
    description: "Native Mac app. Drag-drop files, screenshots. Voice via Caps Lock. MCP for external tools.",
    href: "https://claude.ai/download",
    category: "ai",
    installMethod: "brew-cask",
    installCommand: "brew install --cask claude",
    downloadUrl: "https://claude.ai/download",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "Pro/Max" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
  {
    slug: "chatgpt",
    name: "ChatGPT Desktop",
    description: "Option+Space quick launcher. Can read your IDE code. Built-in voice. DALL-E images.",
    href: "https://openai.com/chatgpt/desktop",
    category: "ai",
    installMethod: "brew-cask",
    installCommand: "brew install --cask chatgpt",
    downloadUrl: "https://openai.com/chatgpt/desktop",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "Plus $20/mo" },
    ],
    glow: "cyan",
    hasDetailPage: false,
  },
];

// =============================================================================
// PRODUCTIVITY TOOLS
// =============================================================================

export const productivityTools: Tool[] = [
  {
    slug: "raycast",
    name: "Raycast",
    description: "Spotlight replacement. Clipboard history, snippets, window management. Extensions for GitHub, Jira, Linear.",
    href: "https://raycast.com",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask raycast",
    downloadUrl: "https://raycast.com",
    tags: [
      { type: "free" },
      { type: "paid", label: "Pro $8/mo" },
      { type: "essential", label: "Essential" },
    ],
    glow: "purple",
    hasDetailPage: true,
  },
  {
    slug: "maccy",
    name: "Maccy",
    description: "Lightweight clipboard manager. Cmd+Shift+V to access history. Search, pin items, keyboard-driven.",
    href: "https://maccy.app",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask maccy",
    downloadUrl: "https://maccy.app",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "essential", label: "Essential" },
    ],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "rectangle",
    name: "Rectangle",
    description: "Simple window snapping. Ctrl+Opt+Arrow for halves, thirds, quarters. Zero config.",
    href: "https://rectangleapp.com",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask rectangle",
    downloadUrl: "https://rectangleapp.com",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "green",
    hasDetailPage: true,
  },
  {
    slug: "aerospace",
    name: "AeroSpace",
    description: "i3-like tiling WM. Windows auto-tile. Keyboard workspaces (Option+1-9). No SIP disable.",
    href: "https://github.com/nikitabobko/AeroSpace",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask aerospace",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "cyan",
    hasDetailPage: true,
  },
  {
    slug: "superwhisper",
    name: "SuperWhisper",
    description: "Offline voice-to-text using Whisper. All processing on device - privacy-first.",
    href: "https://superwhisper.com",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask superwhisper",
    downloadUrl: "https://superwhisper.com",
    tags: [{ type: "paid", label: "$30 one-time" }],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "wispr-flow",
    name: "Wispr Flow",
    description: "AI dictation in any app. Removes filler words, fixes grammar. Cloud-based.",
    href: "https://wisprflow.ai",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask wispr-flow",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$10/mo" },
    ],
    glow: "pink",
    hasDetailPage: false,
  },
  {
    slug: "granola",
    name: "Granola",
    description: "AI meeting notes. Transcribes from Mac audio - no bot joins your call.",
    href: "https://granola.ai",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask granola",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$14/mo" },
    ],
    glow: "orange",
    hasDetailPage: false,
  },
  {
    slug: "numi",
    name: "Numi",
    description: "Text-based calculator. $50 in EUR, today + 2 weeks. Variables, currencies.",
    href: "https://numi.app",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask numi",
    tags: [{ type: "free" }],
    glow: "yellow",
    hasDetailPage: false,
  },
  {
    slug: "ice",
    name: "Ice",
    description: "Menu bar manager - hide icons you don't need. Free Bartender alternative.",
    href: "https://icemenubar.app",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask ice",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "stats",
    name: "Stats",
    description: "System monitor in menu bar. CPU, memory, disk, network, battery.",
    href: "https://github.com/exelban/stats",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask stats",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "cyan",
    hasDetailPage: false,
  },
  {
    slug: "cleanshot",
    name: "CleanShot X",
    description: "Screenshot and screen recording powerhouse. Annotations, cloud upload, scrolling capture, OCR. The gold standard.",
    href: "https://cleanshot.com",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask cleanshot",
    downloadUrl: "https://cleanshot.com",
    tags: [
      { type: "paid", label: "$29 one-time" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "purple",
    hasDetailPage: false,
  },
  {
    slug: "shottr",
    name: "Shottr",
    description: "Blazing fast screenshots. Pixel-perfect measurements, annotations, OCR. Free for personal use.",
    href: "https://shottr.cc",
    category: "productivity",
    installMethod: "brew-cask",
    installCommand: "brew install --cask shottr",
    downloadUrl: "https://shottr.cc",
    tags: [
      { type: "free", label: "Free personal" },
      { type: "paid", label: "$12 commercial" },
    ],
    glow: "green",
    hasDetailPage: false,
  },
];

// =============================================================================
// DEV TOOLS
// =============================================================================

export const devTools: Tool[] = [
  {
    slug: "git",
    name: "Git",
    description: "Version control. Essential for every developer. Configure with delta for beautiful diffs.",
    href: "https://git-scm.com",
    category: "dev",
    installMethod: "brew",
    installCommand: "brew install git gh",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "essential", label: "Essential" },
    ],
    glow: "orange",
    hasDetailPage: true,
  },
  {
    slug: "uv",
    name: "uv",
    description: "Replaces pyenv, pip, pipx, virtualenv, poetry. Rust-based, 10-100x faster.",
    href: "https://docs.astral.sh/uv",
    category: "dev",
    installMethod: "brew",
    installCommand: "brew install uv",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "essential", label: "Essential" },
    ],
    glow: "orange",
    hasDetailPage: true,
  },
  {
    slug: "fnm",
    name: "fnm",
    description: "Fast Node Manager. Rust-based nvm alternative. Cross-platform, .node-version support.",
    href: "https://github.com/Schniz/fnm",
    category: "dev",
    installMethod: "brew",
    installCommand: "brew install fnm",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "green",
    hasDetailPage: true,
  },
  {
    slug: "bun",
    name: "Bun",
    description: "Fast JS runtime, bundler, test runner, package manager. Drop-in Node replacement.",
    href: "https://bun.sh",
    category: "dev",
    installMethod: "brew",
    installCommand: "brew install oven-sh/bun/bun",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "pink",
    hasDetailPage: false,
  },
  {
    slug: "docker",
    name: "Docker Desktop",
    description: "Containers on Mac. GUI for managing images, containers, volumes.",
    href: "https://docker.com/products/docker-desktop",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask docker",
    downloadUrl: "https://docker.com/products/docker-desktop",
    tags: [{ type: "free" }],
    glow: "cyan",
    hasDetailPage: true,
  },
  {
    slug: "orbstack",
    name: "OrbStack",
    description: "Docker Desktop alternative. 2s startup (vs 30s), 4x less power, automatic .orb.local domains. Drop-in replacement.",
    href: "https://orbstack.dev",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask orbstack",
    downloadUrl: "https://orbstack.dev",
    tags: [
      { type: "free", label: "Free personal" },
      { type: "paid", label: "$8/mo teams" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "orange",
    hasDetailPage: true,
  },
  {
    slug: "lazydocker",
    name: "lazydocker",
    description: "Terminal UI for Docker. See containers, logs, stats in one view. No commands to memorize.",
    href: "https://github.com/jesseduffield/lazydocker",
    category: "dev",
    installMethod: "brew",
    installCommand: "brew install lazydocker",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "cyan",
    hasDetailPage: false,
  },
  {
    slug: "bruno",
    name: "Bruno",
    description: "API client with collections as files. Git-friendly. Offline-first. Postman alternative.",
    href: "https://usebruno.com",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask bruno",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "hoppscotch",
    name: "Hoppscotch",
    description: "Open-source API platform. REST, GraphQL, WebSocket. Self-hostable, 71k GitHub stars. Lighter than Postman.",
    href: "https://hoppscotch.io",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask hoppscotch",
    downloadUrl: "https://hoppscotch.io",
    tags: [{ type: "free" }, { type: "oss" }],
    glow: "purple",
    hasDetailPage: false,
  },
  {
    slug: "fork",
    name: "Fork",
    description: "Fast Git client with excellent diff viewer. Clean UI, multiple tabs, interactive rebase. One-time purchase.",
    href: "https://git-fork.com",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask fork",
    downloadUrl: "https://git-fork.com",
    tags: [{ type: "paid", label: "$49.99 one-time" }],
    glow: "cyan",
    hasDetailPage: false,
  },
  {
    slug: "delta",
    name: "delta",
    description: "Beautiful git diffs in terminal. Syntax highlighting, line numbers, side-by-side view. Integrates with git.",
    href: "https://github.com/dandavison/delta",
    category: "dev",
    installMethod: "brew",
    installCommand: "brew install git-delta",
    tags: [
      { type: "free" },
      { type: "oss" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "pink",
    hasDetailPage: false,
  },
  {
    slug: "proxyman",
    name: "Proxyman",
    description: "HTTP debugging proxy. See/modify traffic, auto SSL. Native Mac.",
    href: "https://proxyman.io",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask proxyman",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$69" },
    ],
    glow: "cyan",
    hasDetailPage: false,
  },
  {
    slug: "tableplus",
    name: "TablePlus",
    description: "Database GUI. PostgreSQL, MySQL, SQLite, Redis, MongoDB. Safe mode for production.",
    href: "https://tableplus.com",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask tableplus",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$99" },
    ],
    glow: "purple",
    hasDetailPage: false,
  },
  {
    slug: "devutils",
    name: "DevUtils",
    description: "40+ tools: JSON formatter, JWT decoder, Base64, regex, hashes. Offline.",
    href: "https://devutils.com",
    category: "dev",
    installMethod: "brew-cask",
    installCommand: "brew install --cask devutils",
    tags: [{ type: "paid", label: "$29" }],
    glow: "yellow",
    hasDetailPage: false,
  },
];

// =============================================================================
// NOTES & CALENDAR TOOLS
// =============================================================================

export const notesTools: Tool[] = [
  {
    slug: "obsidian",
    name: "Obsidian",
    description: "Local-first markdown notes with [[linking]]. Build a personal knowledge graph. Thousands of plugins.",
    href: "https://obsidian.md",
    category: "notes",
    installMethod: "brew-cask",
    installCommand: "brew install --cask obsidian",
    downloadUrl: "https://obsidian.md/download",
    tags: [
      { type: "free" },
      { type: "recommended", label: "Recommended" },
    ],
    glow: "purple",
    hasDetailPage: false,
  },
  {
    slug: "notion",
    name: "Notion",
    description: "All-in-one workspace. Docs, databases, wikis, projects. Great for teams. AI built-in.",
    href: "https://notion.so",
    category: "notes",
    installMethod: "brew-cask",
    installCommand: "brew install --cask notion",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "Plus $10/mo" },
    ],
    glow: "cyan",
    hasDetailPage: false,
  },
  {
    slug: "bear",
    name: "Bear",
    description: "Beautiful markdown notes for Apple. Elegant tagging, focus mode. Simple and fast.",
    href: "https://bear.app",
    category: "notes",
    installMethod: "mas",
    installCommand: "mas install 1091189122",
    downloadUrl: "https://apps.apple.com/app/bear/id1091189122",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$3/mo" },
    ],
    glow: "orange",
    hasDetailPage: false,
  },
  {
    slug: "fantastical",
    name: "Fantastical",
    description: "Best calendar for Mac. Natural language input, multiple views, tasks, Calendly-style scheduling.",
    href: "https://flexibits.com/fantastical",
    category: "notes",
    installMethod: "brew-cask",
    installCommand: "brew install --cask fantastical",
    tags: [
      { type: "free", label: "Free tier" },
      { type: "paid", label: "$6.99/mo" },
    ],
    glow: "pink",
    hasDetailPage: false,
  },
  {
    slug: "notion-calendar",
    name: "Notion Calendar",
    description: "Clean calendar with keyboard shortcuts. Deep Google Calendar sync. Was called Cron.",
    href: "https://notion.so/product/calendar",
    category: "notes",
    installMethod: "brew-cask",
    installCommand: "brew install --cask notion-calendar",
    tags: [{ type: "free" }],
    glow: "green",
    hasDetailPage: false,
  },
  {
    slug: "busycal",
    name: "BusyCal",
    description: "Highly customizable calendar. Natural language, weather, travel time. One-time purchase.",
    href: "https://busymac.com/busycal",
    category: "notes",
    installMethod: "brew-cask",
    installCommand: "brew install --cask busycal",
    tags: [{ type: "paid", label: "$49.99 one-time" }],
    glow: "yellow",
    hasDetailPage: false,
  },
];

// =============================================================================
// ALL TOOLS & HELPERS
// =============================================================================

export const allTools: Tool[] = [
  ...terminalTools,
  ...shellTools,
  ...ideTools,
  ...browserTools,
  ...aiTools,
  ...productivityTools,
  ...devTools,
  ...notesTools,
];

export function getToolBySlug(slug: string): Tool | undefined {
  return allTools.find((tool) => tool.slug === slug);
}

export function getToolsByCategory(category: Category): Tool[] {
  return allTools.filter((tool) => tool.category === category);
}

export function getToolsWithDetailPages(): Tool[] {
  return allTools.filter((tool) => tool.hasDetailPage);
}
