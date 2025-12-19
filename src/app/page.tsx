import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Section, SubSection } from "@/components/section";
import { ToolCard, ToolGrid } from "@/components/tool-card";
import {
  CodeBlock,
  Comment,
  Cmd,
  Str,
  Flag,
  TerminalWindow,
} from "@/components/code-block";
import { CheckItem, Checklist } from "@/components/checklist";
import { DataTable } from "@/components/data-table";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen noise-overlay">
      <Nav />
      <Hero />
      <main className="max-w-6xl mx-auto px-6 relative">
        {/* QUICK START */}
        <Section
          id="quick-start"
          number="01"
          title="Quick Start"
          description="Essential setup checklist for a new Mac."
        >
          <Checklist>
            <CheckItem
              title="Xcode CLI + Homebrew"
              description="xcode-select --install, then brew.sh"
            />
            <CheckItem
              title="Terminal (Ghostty or Warp)"
              description="Speed vs AI features"
            />
            <CheckItem
              title="Raycast"
              description="Replace Spotlight. Clipboard history, snippets, window management"
            />
            <CheckItem
              title="Git + SSH + uv"
              description="Version control, Python tooling"
            />
            <CheckItem
              title="VS Code or Cursor"
              description="Extensions, settings sync"
            />
            <CheckItem
              title="Modern CLI tools"
              description="eza, bat, zoxide, ripgrep, fzf, delta, lazygit"
            />
            <CheckItem
              title="Claude Desktop + Claude Code"
              description="Desktop for questions, Claude Code for terminal agent"
            />
            <CheckItem
              title="Window management"
              description="Rectangle (simple) or AeroSpace (tiling)"
            />
          </Checklist>

          <CodeBlock language="bash">
            <Comment># Homebrew</Comment>
            {"\n"}
            /bin/bash -c{" "}
            <Str>
              &quot;$(curl -fsSL
              https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
            </Str>
            {"\n"}
            <Cmd>echo</Cmd>{" "}
            <Str>
              &apos;eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;&apos;
            </Str>{" "}
            {">>"} ~/.zshrc{"\n\n"}
            <Comment># macOS tweaks</Comment>
            {"\n"}
            <Cmd>defaults</Cmd> write NSGlobalDomain KeyRepeat <Flag>-int</Flag>{" "}
            1{"\n"}
            <Cmd>defaults</Cmd> write NSGlobalDomain InitialKeyRepeat{" "}
            <Flag>-int</Flag> 10{"\n"}
            <Cmd>defaults</Cmd> write com.apple.finder AppleShowAllFiles{" "}
            <Flag>-bool</Flag> true{"\n"}
            <Cmd>killall</Cmd> Finder
          </CodeBlock>
        </Section>

        {/* TERMINAL */}
        <Section
          id="terminal"
          number="02"
          title="Terminal"
          description="Modern terminal setup — fast emulators, shell config, CLI tools."
        >
          <ToolGrid>
            <ToolCard
              name="Ghostty"
              href="https://ghostty.org"
              description="GPU-accelerated terminal by Mitchell Hashimoto. Extremely fast, native macOS feel, zero-config."
              installCommand="brew install --cask ghostty"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="green"
            />
            <ToolCard
              name="Warp"
              href="https://warp.dev"
              description="AI-powered terminal. Block-based output, command suggestions, MCP support."
              installCommand="brew install --cask warp"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "Pro $15/mo" },
              ]}
              glow="cyan"
            />
          </ToolGrid>

          <SubSection title="Modern CLI Replacements">
            <DataTable
              columns={[
                { header: "Tool", key: "tool" },
                { header: "Replaces", key: "replaces" },
                { header: "Why better", key: "why" },
              ]}
              data={[
                {
                  tool: <strong className="text-foreground">eza</strong>,
                  replaces: "ls",
                  why: "Icons, git status, tree view",
                },
                {
                  tool: <strong className="text-foreground">bat</strong>,
                  replaces: "cat",
                  why: "Syntax highlighting, line numbers",
                },
                {
                  tool: <strong className="text-foreground">zoxide</strong>,
                  replaces: "cd",
                  why: (
                    <>
                      Learns habits.{" "}
                      <code className="text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded text-xs">
                        z proj
                      </code>{" "}
                      → ~/Developer/project
                    </>
                  ),
                },
                {
                  tool: <strong className="text-foreground">ripgrep</strong>,
                  replaces: "grep",
                  why: "10x faster, respects .gitignore",
                },
                {
                  tool: <strong className="text-foreground">fd</strong>,
                  replaces: "find",
                  why: (
                    <>
                      Simple:{" "}
                      <code className="text-muted-foreground bg-muted/50 px-1.5 py-0.5 rounded text-xs">
                        fd &quot;\.py$&quot;
                      </code>
                    </>
                  ),
                },
                {
                  tool: <strong className="text-foreground">fzf</strong>,
                  replaces: "—",
                  why: "Fuzzy finder for files, history",
                },
                {
                  tool: <strong className="text-foreground">delta</strong>,
                  replaces: "diff",
                  why: "Beautiful git diffs",
                },
                {
                  tool: <strong className="text-foreground">lazygit</strong>,
                  replaces: "git cli",
                  why: "TUI for git",
                },
              ]}
            />
          </SubSection>

          <CodeBlock language="bash">
            <Comment># Install all CLI tools</Comment>
            {"\n"}
            <Cmd>brew</Cmd> install eza bat zoxide ripgrep fd fzf delta tldr
            btop lazygit{"\n\n"}
            <Comment># Add to ~/.zshrc</Comment>
            {"\n"}
            <Cmd>alias</Cmd> ls=
            <Str>&quot;eza --color=always --icons=always --git&quot;</Str>
            {"\n"}
            <Cmd>alias</Cmd> ll=
            <Str>&quot;eza -la --icons=always --git&quot;</Str>
            {"\n"}
            <Cmd>alias</Cmd> cat=<Str>&quot;bat --paging=never&quot;</Str>
            {"\n"}
            <Cmd>eval</Cmd> <Str>&quot;$(zoxide init zsh)&quot;</Str>
            {"\n"}
            <Cmd>eval</Cmd> <Str>&quot;$(fzf --zsh)&quot;</Str>
          </CodeBlock>
        </Section>

        {/* AI TOOLS */}
        <Section
          id="ai"
          number="03"
          title="AI Tools"
          description="Coding agents, AI assistants, voice dictation, meeting tools."
        >
          <SubSection title="Coding Agents">
            <ToolGrid>
              <ToolCard
                name="Claude Code"
                href="https://claude.ai/product/claude-code"
                description="Terminal coding agent. Understands your codebase, edits files, runs tests, handles git. MCP for GitHub, databases."
                installCommand="curl -fsSL https://claude.ai/install.sh | bash"
                tags={[
                  { type: "paid", label: "Pro $20+" },
                  { type: "recommended", label: "Recommended" },
                ]}
                glow="purple"
              />
              <ToolCard
                name="Cursor"
                href="https://cursor.com"
                description="VS Code fork with AI. ⌘K inline gen, ⌘L codebase chat, smart Tab completions."
                installCommand="brew install --cask cursor"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "Pro $20/mo" },
                ]}
                glow="cyan"
              />
              <ToolCard
                name="Aider"
                href="https://aider.chat"
                description="Open-source terminal coding assistant. Works with any LLM. Strong git integration."
                installCommand="brew install aider"
                tags={[{ type: "free" }, { type: "oss" }]}
                glow="green"
              />
            </ToolGrid>
          </SubSection>

          <SubSection title="AI Assistants">
            <ToolGrid>
              <ToolCard
                name="Claude Desktop"
                href="https://claude.ai/download"
                description="Native Mac app. Drag-drop files, screenshots. Voice via Caps Lock. MCP for external tools."
                installCommand="brew install --cask claude"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "Pro/Max" },
                ]}
                glow="purple"
              />
              <ToolCard
                name="ChatGPT Desktop"
                href="https://openai.com/chatgpt/desktop"
                description="Option+Space quick launcher. Can read your IDE code. Built-in voice. DALL-E images."
                installCommand="brew install --cask chatgpt"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "Plus $20/mo" },
                ]}
                glow="cyan"
              />
            </ToolGrid>
          </SubSection>

          <SubSection title="Voice & Meetings">
            <ToolGrid>
              <ToolCard
                name="Wispr Flow"
                href="https://wisprflow.ai"
                description="AI dictation in any app. Removes filler words, fixes grammar. Cloud-based."
                installCommand="brew install --cask wispr-flow"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "$10/mo" },
                ]}
                glow="pink"
              />
              <ToolCard
                name="SuperWhisper"
                href="https://superwhisper.com"
                description="Offline voice-to-text using Whisper. All processing on device — privacy-first."
                installCommand="brew install --cask superwhisper"
                tags={[{ type: "paid", label: "$30 one-time" }]}
                glow="green"
              />
              <ToolCard
                name="Granola"
                href="https://granola.ai"
                description="AI meeting notes. Transcribes from Mac audio — no bot joins your call."
                installCommand="brew install --cask granola"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "$14/mo" },
                ]}
                glow="orange"
              />
            </ToolGrid>
          </SubSection>
        </Section>

        {/* EDITORS & BROWSERS */}
        <Section id="editors" number="04" title="Editors & Browsers">
          <ToolGrid>
            <ToolCard
              name="VS Code"
              href="https://code.visualstudio.com"
              description="Industry standard. Massive extension ecosystem. Add GitHub Copilot for AI."
              installCommand="brew install --cask visual-studio-code"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="cyan"
            />
            <ToolCard
              name="Zed"
              href="https://zed.dev"
              description="High-performance editor from Atom creators. Native Mac, extremely fast. Built-in AI."
              installCommand="brew install --cask zed"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="yellow"
            />
            <ToolCard
              name="Zen Browser"
              href="https://zen-browser.app"
              description="Firefox-based, Arc-inspired. Vertical tabs, workspaces. Full Firefox extension support."
              installCommand="brew install --cask zen-browser"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="green"
            />
            <ToolCard
              name="Arc"
              href="https://arc.net"
              description="Chromium-based with sidebar, spaces, split view. Note: now in maintenance mode."
              installCommand="brew install --cask arc"
              tags={[{ type: "free" }]}
              glow="orange"
            />
          </ToolGrid>
        </Section>

        {/* PRODUCTIVITY */}
        <Section id="productivity" number="05" title="Productivity">
          <ToolGrid>
            <ToolCard
              name="Raycast"
              href="https://raycast.com"
              description="Spotlight replacement. Clipboard history, snippets, window management. Extensions for GitHub, Jira, Linear."
              installCommand="brew install --cask raycast"
              tags={[
                { type: "free" },
                { type: "paid", label: "Pro $8/mo" },
                { type: "essential", label: "Essential" },
              ]}
              glow="purple"
            />
            <ToolCard
              name="Rectangle"
              href="https://rectangleapp.com"
              description="Simple window snapping. ⌃⌥← left half, ⌃⌥→ right half. Zero config."
              installCommand="brew install --cask rectangle"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="green"
            />
            <ToolCard
              name="AeroSpace"
              href="https://github.com/nikitabobko/AeroSpace"
              description="i3-like tiling WM. Windows auto-tile. Keyboard workspaces (Option+1-9). No SIP disable."
              installCommand="brew install --cask aerospace"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="cyan"
            />
            <ToolCard
              name="Numi"
              href="https://numi.app"
              description="Text-based calculator. $50 in EUR, today + 2 weeks. Variables, currencies."
              installCommand="brew install --cask numi"
              tags={[{ type: "free" }]}
              glow="yellow"
            />
            <ToolCard
              name="Ice"
              href="https://icemenubar.app"
              description="Menu bar manager — hide icons you don't need. Free Bartender alternative."
              installCommand="brew install --cask ice"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="green"
            />
            <ToolCard
              name="Stats"
              href="https://github.com/exelban/stats"
              description="System monitor in menu bar. CPU, memory, disk, network, battery."
              installCommand="brew install --cask stats"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="cyan"
            />
          </ToolGrid>
        </Section>

        {/* DEV TOOLS */}
        <Section id="dev" number="06" title="Dev Tools">
          <ToolGrid>
            <ToolCard
              name="Bruno"
              href="https://usebruno.com"
              description="API client with collections as files. Git-friendly. Offline-first. Postman alternative."
              installCommand="brew install --cask bruno"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="green"
            />
            <ToolCard
              name="Proxyman"
              href="https://proxyman.io"
              description="HTTP debugging proxy. See/modify traffic, auto SSL. Native Mac."
              installCommand="brew install --cask proxyman"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "$69" },
              ]}
              glow="cyan"
            />
            <ToolCard
              name="TablePlus"
              href="https://tableplus.com"
              description="Database GUI. PostgreSQL, MySQL, SQLite, Redis, MongoDB. Safe mode for production."
              installCommand="brew install --cask tableplus"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "$99" },
              ]}
              glow="purple"
            />
            <ToolCard
              name="DevUtils"
              href="https://devutils.com"
              description="40+ tools: JSON formatter, JWT decoder, Base64, regex, hashes. Offline."
              installCommand="brew install --cask devutils"
              tags={[{ type: "paid", label: "$29" }]}
              glow="yellow"
            />
            <ToolCard
              name="uv"
              href="https://docs.astral.sh/uv"
              description="Replaces pyenv, pip, pipx, virtualenv, poetry. Rust-based, 10-100x faster."
              installCommand="brew install uv"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "essential", label: "Essential" },
              ]}
              glow="orange"
            />
            <ToolCard
              name="fnm"
              href="https://github.com/Schniz/fnm"
              description="Fast Node Manager. Rust-based nvm alternative. Cross-platform, .node-version support."
              installCommand="brew install fnm"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="green"
            />
            <ToolCard
              name="Bun"
              href="https://bun.sh"
              description="Fast JS runtime, bundler, test runner, package manager. Drop-in Node replacement."
              installCommand="brew install oven-sh/bun/bun"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="pink"
            />
            <ToolCard
              name="Docker Desktop"
              href="https://www.docker.com/products/docker-desktop/"
              description="Containers on Mac. GUI for managing images, containers, volumes."
              installCommand="brew install --cask docker"
              tags={[{ type: "free" }]}
              glow="cyan"
            />
          </ToolGrid>

          <CodeBlock language="bash">
            <Comment># fnm setup — add to ~/.zshrc</Comment>
            {"\n"}
            <Cmd>eval</Cmd> <Str>&quot;$(fnm env --use-on-cd)&quot;</Str>
            {"\n\n"}
            <Comment># Install Node</Comment>
            {"\n"}
            <Cmd>fnm</Cmd> install 22{"\n"}
            <Cmd>fnm</Cmd> default 22{"\n\n"}
            <Comment># Bun — works as npm/yarn replacement</Comment>
            {"\n"}
            <Cmd>bun</Cmd> install <Comment># instead of npm install</Comment>
            {"\n"}
            <Cmd>bun</Cmd> run dev <Comment># instead of npm run dev</Comment>
            {"\n"}
            <Cmd>bun</Cmd> test <Comment># built-in test runner</Comment>
          </CodeBlock>
        </Section>

        {/* NOTES & CALENDAR */}
        <Section id="notes" number="07" title="Notes & Calendar">
          <ToolGrid>
            <ToolCard
              name="Obsidian"
              href="https://obsidian.md"
              description="Local-first markdown notes with [[linking]]. Build a personal knowledge graph. Thousands of plugins."
              installCommand="brew install --cask obsidian"
              tags={[
                { type: "free" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="purple"
            />
            <ToolCard
              name="Notion"
              href="https://notion.so"
              description="All-in-one workspace. Docs, databases, wikis, projects. Great for teams. AI built-in."
              installCommand="brew install --cask notion"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "Plus $10/mo" },
              ]}
              glow="cyan"
            />
            <ToolCard
              name="Bear"
              href="https://bear.app"
              description="Beautiful markdown notes for Apple. Elegant tagging, focus mode. Simple and fast."
              installCommand="mas install 1091189122"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "$3/mo" },
              ]}
              glow="orange"
            />
            <ToolCard
              name="Fantastical"
              href="https://flexibits.com/fantastical"
              description="Best calendar for Mac. Natural language input, multiple views, tasks, Calendly-style scheduling."
              installCommand="brew install --cask fantastical"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "$6.99/mo" },
              ]}
              glow="pink"
            />
            <ToolCard
              name="Notion Calendar"
              href="https://www.notion.so/product/calendar"
              description="Clean calendar with keyboard shortcuts. Deep Google Calendar sync. Was called Cron."
              installCommand="brew install --cask notion-calendar"
              tags={[{ type: "free" }]}
              glow="green"
            />
            <ToolCard
              name="BusyCal"
              href="https://www.busymac.com/busycal/"
              description="Highly customizable calendar. Natural language, weather, travel time. One-time purchase."
              installCommand="brew install --cask busycal"
              tags={[{ type: "paid", label: "$49.99 one-time" }]}
              glow="yellow"
            />
          </ToolGrid>
        </Section>

        {/* BREWFILE */}
        <Section
          id="brewfile"
          number="08"
          title="Brewfile"
          description="Copy to ~/.Brewfile and run brew bundle --global"
        >
          <TerminalWindow filename="~/.Brewfile">
            <Comment># CLI</Comment>
            {"\n"}
            brew &quot;git&quot;{"\n"}
            brew &quot;gh&quot;{"\n"}
            brew &quot;eza&quot;{"\n"}
            brew &quot;bat&quot;{"\n"}
            brew &quot;zoxide&quot;{"\n"}
            brew &quot;fzf&quot;{"\n"}
            brew &quot;ripgrep&quot;{"\n"}
            brew &quot;fd&quot;{"\n"}
            brew &quot;delta&quot;{"\n"}
            brew &quot;tldr&quot;{"\n"}
            brew &quot;btop&quot;{"\n"}
            brew &quot;lazygit&quot;{"\n"}
            brew &quot;jq&quot;{"\n"}
            brew &quot;starship&quot;{"\n\n"}
            <Comment># Languages</Comment>
            {"\n"}
            brew &quot;uv&quot;{"\n"}
            brew &quot;fnm&quot;{"\n"}
            brew &quot;oven-sh/bun/bun&quot;{"\n"}
            brew &quot;go&quot;{"\n"}
            brew &quot;rust&quot;{"\n\n"}
            <Comment># DevOps</Comment>
            {"\n"}
            brew &quot;awscli&quot;{"\n"}
            brew &quot;terraform&quot;{"\n"}
            brew &quot;kubectl&quot;{"\n"}
            brew &quot;k9s&quot;{"\n\n"}
            <Comment># Terminal & Editors</Comment>
            {"\n"}
            cask &quot;ghostty&quot;{"\n"}
            cask &quot;warp&quot;{"\n"}
            cask &quot;visual-studio-code&quot;{"\n"}
            cask &quot;cursor&quot;{"\n"}
            cask &quot;zed&quot;{"\n\n"}
            <Comment># AI</Comment>
            {"\n"}
            cask &quot;claude&quot;{"\n"}
            cask &quot;chatgpt&quot;{"\n\n"}
            <Comment># Browsers</Comment>
            {"\n"}
            cask &quot;zen-browser&quot;{"\n"}
            cask &quot;firefox&quot;{"\n"}
            cask &quot;google-chrome&quot;{"\n\n"}
            <Comment># Productivity</Comment>
            {"\n"}
            cask &quot;raycast&quot;{"\n"}
            cask &quot;rectangle&quot;{"\n"}
            cask &quot;ice&quot;{"\n"}
            cask &quot;alt-tab&quot;{"\n"}
            cask &quot;stats&quot;{"\n"}
            cask &quot;numi&quot;{"\n"}
            cask &quot;maccy&quot;{"\n"}
            cask &quot;granola&quot;{"\n\n"}
            <Comment># Development</Comment>
            {"\n"}
            cask &quot;docker&quot;{"\n"}
            cask &quot;tableplus&quot;{"\n"}
            cask &quot;bruno&quot;{"\n"}
            cask &quot;proxyman&quot;{"\n"}
            cask &quot;devutils&quot;{"\n\n"}
            <Comment># Notes & Calendar</Comment>
            {"\n"}
            cask &quot;obsidian&quot;{"\n"}
            cask &quot;notion&quot;{"\n"}
            cask &quot;fantastical&quot;{"\n"}
            cask &quot;notion-calendar&quot;{"\n\n"}
            <Comment># Communication</Comment>
            {"\n"}
            cask &quot;slack&quot;{"\n"}
            cask &quot;1password&quot;{"\n\n"}
            <Comment># Fonts</Comment>
            {"\n"}
            cask &quot;font-jetbrains-mono-nerd-font&quot;{"\n"}
            cask &quot;font-fira-code-nerd-font&quot;
          </TerminalWindow>

          <CodeBlock language="bash">
            <Cmd>brew</Cmd> bundle <Flag>--global</Flag>
            {"\n"}
            <Cmd>curl</Cmd> <Flag>-fsSL</Flag> https://claude.ai/install.sh |
            bash
          </CodeBlock>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
