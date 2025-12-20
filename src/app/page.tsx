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
        {/* 01 - QUICK START */}
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
              title="Shell (Oh My Zsh + Starship)"
              description="Plugins, aliases, beautiful prompt"
            />
            <CheckItem
              title="Terminal (Ghostty or Warp)"
              description="Fast GPU-accelerated or AI-powered"
            />
            <CheckItem
              title="Git + SSH"
              description="Version control with proper config"
            />
            <CheckItem
              title="IDE (VS Code or Cursor)"
              description="Extensions, settings, themes"
            />
            <CheckItem
              title="Modern CLI tools"
              description="eza, bat, zoxide, ripgrep, fzf, delta"
            />
            <CheckItem
              title="Raycast"
              description="Spotlight replacement with superpowers"
            />
            <CheckItem
              title="Window management"
              description="Rectangle (simple) or AeroSpace (tiling)"
            />
          </Checklist>

          <CodeBlock language="bash">
            <Comment># Install Xcode Command Line Tools</Comment>
            {"\n"}
            <Cmd>xcode-select</Cmd> <Flag>--install</Flag>
            {"\n\n"}
            <Comment># Install Homebrew</Comment>
            {"\n"}
            /bin/bash -c{" "}
            <Str>
              &quot;$(curl -fsSL
              https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;
            </Str>
            {"\n\n"}
            <Comment># Add Homebrew to PATH (run this after install)</Comment>
            {"\n"}
            <Cmd>echo</Cmd>{" "}
            <Str>
              &apos;eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;&apos;
            </Str>{" "}
            {">>"} ~/.zshrc{"\n"}
            <Cmd>eval</Cmd>{" "}
            <Str>&quot;$(/opt/homebrew/bin/brew shellenv)&quot;</Str>
            {"\n\n"}
            <Comment># Show hidden files in Finder</Comment>
            {"\n"}
            <Cmd>defaults</Cmd> write com.apple.finder AppleShowAllFiles{" "}
            <Flag>-bool</Flag> true{"\n"}
            <Cmd>killall</Cmd> Finder
          </CodeBlock>
        </Section>

        {/* 02 - SHELL SETUP */}
        <Section
          id="shell"
          number="02"
          title="Shell Setup"
          description="Configure your terminal environment with Oh My Zsh, Starship, and essential tools."
        >
          <ToolGrid>
            <ToolCard
              name="Oh My Zsh"
              href="https://ohmyz.sh"
              description="Framework for managing Zsh configuration. Thousands of plugins and themes. The foundation for a productive shell."
              installCommand='sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"'
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "essential", label: "Essential" },
              ]}
              glow="green"
              detailSlug="oh-my-zsh"
            />
            <ToolCard
              name="Starship"
              href="https://starship.rs"
              description="Minimal, fast, customizable prompt. Works with any shell. Shows git status, language versions, and more."
              installCommand="brew install starship"
              tags={[
                { type: "free" },
                { type: "oss" },
                { type: "recommended", label: "Recommended" },
              ]}
              glow="purple"
              detailSlug="starship"
            />
          </ToolGrid>

          <SubSection title="Essential Plugins">
            <CodeBlock language="bash">
              <Comment># Install zsh plugins</Comment>
              {"\n"}
              <Cmd>git</Cmd> clone
              https://github.com/zsh-users/zsh-autosuggestions{" "}
              {"${ZSH_CUSTOM:-~/.oh-my-zsh/custom}"}/plugins/zsh-autosuggestions
              {"\n"}
              <Cmd>git</Cmd> clone
              https://github.com/zsh-users/zsh-syntax-highlighting{" "}
              {"${ZSH_CUSTOM:-~/.oh-my-zsh/custom}"}
              /plugins/zsh-syntax-highlighting
            </CodeBlock>
          </SubSection>

          <SubSection title="Complete .zshrc Configuration">
            <TerminalWindow filename="~/.zshrc">
              <Comment># Path to Oh My Zsh installation</Comment>
              {"\n"}
              export ZSH=&quot;$HOME/.oh-my-zsh&quot;{"\n\n"}
              <Comment>
                # Use minimal theme (Starship handles the prompt)
              </Comment>
              {"\n"}
              ZSH_THEME=&quot;&quot;{"\n\n"}
              <Comment># Plugins</Comment>
              {"\n"}
              plugins=(git zsh-autosuggestions zsh-syntax-highlighting){"\n\n"}
              source $ZSH/oh-my-zsh.sh{"\n\n"}
              <Comment># Homebrew</Comment>
              {"\n"}
              eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;{"\n\n"}
              <Comment># Modern CLI aliases</Comment>
              {"\n"}
              alias ls=&quot;eza --color=always --icons=always --git&quot;{"\n"}
              alias ll=&quot;eza -la --icons=always --git&quot;{"\n"}
              alias tree=&quot;eza --tree --icons=always&quot;{"\n"}
              alias cat=&quot;bat --paging=never&quot;{"\n\n"}
              <Comment># Tool initializations</Comment>
              {"\n"}
              eval &quot;$(starship init zsh)&quot;{"\n"}
              eval &quot;$(zoxide init zsh)&quot;{"\n"}
              eval &quot;$(fzf --zsh)&quot;{"\n"}
              eval &quot;$(fnm env --use-on-cd)&quot;{"\n\n"}
              <Comment># Editor</Comment>
              {"\n"}
              export EDITOR=&quot;code --wait&quot;{"\n"}
              export VISUAL=&quot;$EDITOR&quot;
            </TerminalWindow>
          </SubSection>

          <SubSection title="Git Configuration">
            <CodeBlock language="bash">
              <Comment># Generate SSH key (ed25519 is recommended)</Comment>
              {"\n"}
              <Cmd>ssh-keygen</Cmd> <Flag>-t</Flag> ed25519 <Flag>-C</Flag>{" "}
              <Str>&quot;your@email.com&quot;</Str>
              {"\n\n"}
              <Comment># Start ssh-agent and add key</Comment>
              {"\n"}
              <Cmd>eval</Cmd> <Str>&quot;$(ssh-agent -s)&quot;</Str>
              {"\n"}
              <Cmd>ssh-add</Cmd> ~/.ssh/id_ed25519{"\n\n"}
              <Comment># Copy public key to clipboard</Comment>
              {"\n"}
              <Cmd>pbcopy</Cmd> {"<"} ~/.ssh/id_ed25519.pub{"\n\n"}
              <Comment># Configure git</Comment>
              {"\n"}
              <Cmd>git</Cmd> config <Flag>--global</Flag> user.name{" "}
              <Str>&quot;Your Name&quot;</Str>
              {"\n"}
              <Cmd>git</Cmd> config <Flag>--global</Flag> user.email{" "}
              <Str>&quot;your@email.com&quot;</Str>
              {"\n"}
              <Cmd>git</Cmd> config <Flag>--global</Flag> init.defaultBranch
              main{"\n"}
              <Cmd>git</Cmd> config <Flag>--global</Flag> core.pager delta{"\n"}
              <Cmd>git</Cmd> config <Flag>--global</Flag> interactive.diffFilter{" "}
              <Str>&quot;delta --color-only&quot;</Str>
            </CodeBlock>
          </SubSection>
        </Section>

        {/* 03 - TERMINAL */}
        <Section
          id="terminal"
          number="03"
          title="Terminal"
          description="Modern terminal emulators and CLI tools that replace outdated defaults."
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
              detailSlug="ghostty"
            />
            <ToolCard
              name="Warp"
              href="https://warp.dev"
              description="AI-powered terminal. Block-based output, command suggestions, built-in AI assistant."
              installCommand="brew install --cask warp"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "Pro $15/mo" },
              ]}
              glow="cyan"
              detailSlug="warp"
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
                      jumps to ~/Developer/project
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
                  why: "Fuzzy finder for files, history, everything",
                },
                {
                  tool: <strong className="text-foreground">delta</strong>,
                  replaces: "diff",
                  why: "Beautiful git diffs with syntax highlighting",
                },
                {
                  tool: <strong className="text-foreground">lazygit</strong>,
                  replaces: "git cli",
                  why: "TUI for git - visual staging, rebasing",
                },
              ]}
            />
          </SubSection>

          <CodeBlock language="bash">
            <Comment># Install all CLI tools</Comment>
            {"\n"}
            <Cmd>brew</Cmd> install eza bat zoxide ripgrep fd fzf delta tldr btop
            lazygit
          </CodeBlock>
        </Section>

        {/* 04 - IDEs & EDITORS */}
        <Section
          id="ide"
          number="04"
          title="IDEs & Editors"
          description="Code editors with AI integration, extensions, and powerful features."
        >
          <ToolGrid>
            <ToolCard
              name="VS Code"
              href="https://code.visualstudio.com"
              description="Industry standard. Massive extension ecosystem. Add GitHub Copilot for AI assistance."
              installCommand="brew install --cask visual-studio-code"
              downloadUrl="https://code.visualstudio.com/download"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="cyan"
              detailSlug="vscode"
            />
            <ToolCard
              name="Cursor"
              href="https://cursor.com"
              description="VS Code fork with AI built-in. Cmd+K inline gen, Cmd+L codebase chat, smart Tab completions."
              installCommand="brew install --cask cursor"
              downloadUrl="https://cursor.com/download"
              tags={[
                { type: "free", label: "Free tier" },
                { type: "paid", label: "Pro $20/mo" },
              ]}
              glow="purple"
              detailSlug="cursor"
            />
            <ToolCard
              name="Zed"
              href="https://zed.dev"
              description="High-performance editor from Atom creators. Native Mac, extremely fast. Built-in AI assistant."
              installCommand="brew install --cask zed"
              downloadUrl="https://zed.dev/download"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="yellow"
              detailSlug="zed"
            />
          </ToolGrid>
        </Section>

        {/* 05 - BROWSERS */}
        <Section
          id="browsers"
          number="05"
          title="Browsers"
          description="Modern browsers for development and daily use."
        >
          <ToolGrid>
            <ToolCard
              name="Zen Browser"
              href="https://zen-browser.app"
              description="Firefox-based, Arc-inspired. Vertical tabs, workspaces. Full Firefox extension support."
              installCommand="brew install --cask zen-browser"
              downloadUrl="https://zen-browser.app/download"
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
            <ToolCard
              name="Firefox"
              href="https://firefox.com"
              description="Privacy-focused, open source. Great developer tools. Supports Manifest V2 extensions."
              installCommand="brew install --cask firefox"
              downloadUrl="https://firefox.com/download"
              tags={[{ type: "free" }, { type: "oss" }]}
              glow="orange"
            />
            <ToolCard
              name="Google Chrome"
              href="https://google.com/chrome"
              description="Most popular browser. Best DevTools. Required for some web development testing."
              installCommand="brew install --cask google-chrome"
              downloadUrl="https://google.com/chrome"
              tags={[{ type: "free" }]}
              glow="cyan"
            />
          </ToolGrid>
        </Section>

        {/* 06 - AI TOOLS */}
        <Section
          id="ai"
          number="06"
          title="AI Tools"
          description="Coding agents and AI assistants to supercharge your development."
        >
          <SubSection title="Coding Agents">
            <ToolGrid>
              <ToolCard
                name="Claude Code"
                href="https://claude.ai/product/claude-code"
                description="Terminal coding agent. Understands your codebase, edits files, runs tests, handles git. MCP for external tools."
                installCommand="curl -fsSL https://claude.ai/install.sh | bash"
                tags={[
                  { type: "paid", label: "Pro $20+" },
                  { type: "recommended", label: "Recommended" },
                ]}
                glow="purple"
                detailSlug="claude-code"
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
                downloadUrl="https://claude.ai/download"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "Pro/Max" },
                ]}
                glow="purple"
                detailSlug="claude-desktop"
              />
              <ToolCard
                name="ChatGPT Desktop"
                href="https://openai.com/chatgpt/desktop"
                description="Option+Space quick launcher. Can read your IDE code. Built-in voice. DALL-E images."
                installCommand="brew install --cask chatgpt"
                downloadUrl="https://openai.com/chatgpt/desktop"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "Plus $20/mo" },
                ]}
                glow="cyan"
              />
            </ToolGrid>
          </SubSection>
        </Section>

        {/* 07 - PRODUCTIVITY */}
        <Section
          id="productivity"
          number="07"
          title="Productivity"
          description="Window management, launchers, dictation, and utilities."
        >
          <SubSection title="Launchers & Utilities">
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
                detailSlug="raycast"
              />
              <ToolCard
                name="Numi"
                href="https://numi.app"
                description="Text-based calculator. $50 in EUR, today + 2 weeks. Variables, currencies."
                installCommand="brew install --cask numi"
                tags={[{ type: "free" }]}
                glow="yellow"
              />
            </ToolGrid>
          </SubSection>

          <SubSection title="Window Management">
            <ToolGrid>
              <ToolCard
                name="Rectangle"
                href="https://rectangleapp.com"
                description="Simple window snapping. Ctrl+Opt+Arrow for halves, thirds, quarters. Zero config."
                installCommand="brew install --cask rectangle"
                downloadUrl="https://rectangleapp.com"
                tags={[{ type: "free" }, { type: "oss" }]}
                glow="green"
                detailSlug="rectangle"
              />
              <ToolCard
                name="AeroSpace"
                href="https://github.com/nikitabobko/AeroSpace"
                description="i3-like tiling WM. Windows auto-tile. Keyboard workspaces (Option+1-9). No SIP disable."
                installCommand="brew install --cask aerospace"
                tags={[{ type: "free" }, { type: "oss" }]}
                glow="cyan"
                detailSlug="aerospace"
              />
            </ToolGrid>
          </SubSection>

          <SubSection title="Voice & Meetings">
            <ToolGrid>
              <ToolCard
                name="SuperWhisper"
                href="https://superwhisper.com"
                description="Offline voice-to-text using Whisper. All processing on device - privacy-first."
                installCommand="brew install --cask superwhisper"
                downloadUrl="https://superwhisper.com"
                tags={[{ type: "paid", label: "$30 one-time" }]}
                glow="green"
              />
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
                name="Granola"
                href="https://granola.ai"
                description="AI meeting notes. Transcribes from Mac audio - no bot joins your call."
                installCommand="brew install --cask granola"
                tags={[
                  { type: "free", label: "Free tier" },
                  { type: "paid", label: "$14/mo" },
                ]}
                glow="orange"
              />
            </ToolGrid>
          </SubSection>

          <SubSection title="Menu Bar">
            <ToolGrid>
              <ToolCard
                name="Ice"
                href="https://icemenubar.app"
                description="Menu bar manager - hide icons you don't need. Free Bartender alternative."
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
          </SubSection>
        </Section>

        {/* 08 - DEV TOOLS */}
        <Section
          id="dev"
          number="08"
          title="Dev Tools"
          description="Language managers, containers, API clients, and development utilities."
        >
          <SubSection title="Language & Runtime Managers">
            <ToolGrid>
              <ToolCard
                name="uv"
                href="https://docs.astral.sh/uv"
                description="Replaces pyenv, pip, pipx, virtualenv, poetry. Rust-based, 10-100x faster than pip."
                installCommand="brew install uv"
                tags={[
                  { type: "free" },
                  { type: "oss" },
                  { type: "essential", label: "Essential" },
                ]}
                glow="orange"
                detailSlug="uv"
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
                detailSlug="fnm"
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
            </ToolGrid>
          </SubSection>

          <SubSection title="Containers & Databases">
            <ToolGrid>
              <ToolCard
                name="Docker Desktop"
                href="https://docker.com/products/docker-desktop"
                description="Containers on Mac. GUI for managing images, containers, volumes. Dev Containers support."
                installCommand="brew install --cask docker"
                downloadUrl="https://docker.com/products/docker-desktop"
                tags={[{ type: "free" }]}
                glow="cyan"
                detailSlug="docker"
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
            </ToolGrid>
          </SubSection>

          <SubSection title="API & Debugging">
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
                name="DevUtils"
                href="https://devutils.com"
                description="40+ tools: JSON formatter, JWT decoder, Base64, regex, hashes. Offline."
                installCommand="brew install --cask devutils"
                tags={[{ type: "paid", label: "$29" }]}
                glow="yellow"
              />
            </ToolGrid>
          </SubSection>

          <CodeBlock language="bash">
            <Comment># fnm setup - add to ~/.zshrc</Comment>
            {"\n"}
            <Cmd>eval</Cmd> <Str>&quot;$(fnm env --use-on-cd)&quot;</Str>
            {"\n\n"}
            <Comment># Install Node LTS</Comment>
            {"\n"}
            <Cmd>fnm</Cmd> install 22{"\n"}
            <Cmd>fnm</Cmd> default 22{"\n\n"}
            <Comment># Create Python project with uv</Comment>
            {"\n"}
            <Cmd>uv</Cmd> init my-project{"\n"}
            <Cmd>cd</Cmd> my-project{"\n"}
            <Cmd>uv</Cmd> add requests
          </CodeBlock>
        </Section>

        {/* 09 - NOTES & CALENDAR */}
        <Section id="notes" number="09" title="Notes & Calendar">
          <ToolGrid>
            <ToolCard
              name="Obsidian"
              href="https://obsidian.md"
              description="Local-first markdown notes with [[linking]]. Build a personal knowledge graph. Thousands of plugins."
              installCommand="brew install --cask obsidian"
              downloadUrl="https://obsidian.md/download"
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
              downloadUrl="https://apps.apple.com/app/bear/id1091189122"
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
              href="https://notion.so/product/calendar"
              description="Clean calendar with keyboard shortcuts. Deep Google Calendar sync. Was called Cron."
              installCommand="brew install --cask notion-calendar"
              tags={[{ type: "free" }]}
              glow="green"
            />
            <ToolCard
              name="BusyCal"
              href="https://busymac.com/busycal"
              description="Highly customizable calendar. Natural language, weather, travel time. One-time purchase."
              installCommand="brew install --cask busycal"
              tags={[{ type: "paid", label: "$49.99 one-time" }]}
              glow="yellow"
            />
          </ToolGrid>
        </Section>

        {/* 10 - BREWFILE */}
        <Section
          id="brewfile"
          number="10"
          title="Brewfile"
          description="Copy to ~/.Brewfile and run brew bundle --global"
        >
          <TerminalWindow filename="~/.Brewfile">
            <Comment># CLI Tools</Comment>
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
            <Comment># Language Managers</Comment>
            {"\n"}
            brew &quot;uv&quot;{"\n"}
            brew &quot;fnm&quot;{"\n"}
            brew &quot;oven-sh/bun/bun&quot;{"\n\n"}
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
            cask &quot;stats&quot;{"\n"}
            cask &quot;numi&quot;{"\n\n"}
            <Comment># Development</Comment>
            {"\n"}
            cask &quot;docker&quot;{"\n"}
            cask &quot;tableplus&quot;{"\n"}
            cask &quot;bruno&quot;{"\n"}
            cask &quot;proxyman&quot;{"\n\n"}
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
            <Comment># Install everything</Comment>
            {"\n"}
            <Cmd>brew</Cmd> bundle <Flag>--global</Flag>
            {"\n\n"}
            <Comment># Install Claude Code</Comment>
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
