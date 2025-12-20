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
import { getToolsByCategory } from "@/lib/tools";

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

        {/* 02 - TERMINAL & SHELL */}
        <Section
          id="terminal"
          number="02"
          title="Terminal & Shell"
          description="Terminal emulators, shell configuration, and modern CLI tools for a productive command-line experience."
        >
          <SubSection title="Terminal Emulators">
            <ToolGrid>
              {getToolsByCategory("terminal").map((tool) => (
                <ToolCard
                  key={tool.slug}
                  name={tool.name}
                  href={tool.href}
                  description={tool.description}
                  installCommand={tool.installCommand}
                  tags={tool.tags}
                  glow={tool.glow}
                  detailSlug={tool.hasDetailPage ? tool.slug : undefined}
                />
              ))}
            </ToolGrid>
          </SubSection>

          <SubSection title="Shell Framework & Prompt">
            <ToolGrid>
              {getToolsByCategory("shell").map((tool) => (
                <ToolCard
                  key={tool.slug}
                  name={tool.name}
                  href={tool.href}
                  description={tool.description}
                  installCommand={tool.installCommand}
                  tags={tool.tags}
                  glow={tool.glow}
                  detailSlug={tool.hasDetailPage ? tool.slug : undefined}
                />
              ))}
            </ToolGrid>
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

        {/* 03 - IDEs & EDITORS */}
        <Section
          id="ide"
          number="03"
          title="IDEs & Editors"
          description="Code editors with AI integration, extensions, and powerful features."
        >
          <ToolGrid>
            {getToolsByCategory("ide").map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                href={tool.href}
                description={tool.description}
                installCommand={tool.installCommand}
                downloadUrl={tool.downloadUrl}
                tags={tool.tags}
                glow={tool.glow}
                detailSlug={tool.hasDetailPage ? tool.slug : undefined}
              />
            ))}
          </ToolGrid>
        </Section>

        {/* 04 - BROWSERS */}
        <Section
          id="browsers"
          number="04"
          title="Browsers"
          description="Modern browsers for development and daily use."
        >
          <ToolGrid>
            {getToolsByCategory("browser").map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                href={tool.href}
                description={tool.description}
                installCommand={tool.installCommand}
                downloadUrl={tool.downloadUrl}
                tags={tool.tags}
                glow={tool.glow}
                detailSlug={tool.hasDetailPage ? tool.slug : undefined}
              />
            ))}
          </ToolGrid>
        </Section>

        {/* 05 - AI TOOLS */}
        <Section
          id="ai"
          number="05"
          title="AI Tools"
          description="Coding agents and AI assistants to supercharge your development."
        >
          <ToolGrid>
            {getToolsByCategory("ai").map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                href={tool.href}
                description={tool.description}
                installCommand={tool.installCommand}
                downloadUrl={tool.downloadUrl}
                tags={tool.tags}
                glow={tool.glow}
                detailSlug={tool.hasDetailPage ? tool.slug : undefined}
              />
            ))}
          </ToolGrid>
        </Section>

        {/* 06 - PRODUCTIVITY */}
        <Section
          id="productivity"
          number="06"
          title="Productivity"
          description="Window management, launchers, dictation, and utilities."
        >
          <ToolGrid>
            {getToolsByCategory("productivity").map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                href={tool.href}
                description={tool.description}
                installCommand={tool.installCommand}
                downloadUrl={tool.downloadUrl}
                tags={tool.tags}
                glow={tool.glow}
                detailSlug={tool.hasDetailPage ? tool.slug : undefined}
              />
            ))}
          </ToolGrid>
        </Section>

        {/* 07 - DEV TOOLS */}
        <Section
          id="dev"
          number="07"
          title="Dev Tools"
          description="Language managers, containers, API clients, and development utilities."
        >
          <ToolGrid>
            {getToolsByCategory("dev").map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                href={tool.href}
                description={tool.description}
                installCommand={tool.installCommand}
                downloadUrl={tool.downloadUrl}
                tags={tool.tags}
                glow={tool.glow}
                detailSlug={tool.hasDetailPage ? tool.slug : undefined}
              />
            ))}
          </ToolGrid>

          <CodeBlock language="bash">
            <Comment># Install Node LTS with fnm</Comment>
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

        {/* 08 - NOTES & CALENDAR */}
        <Section id="notes" number="08" title="Notes & Calendar">
          <ToolGrid>
            {getToolsByCategory("notes").map((tool) => (
              <ToolCard
                key={tool.slug}
                name={tool.name}
                href={tool.href}
                description={tool.description}
                installCommand={tool.installCommand}
                downloadUrl={tool.downloadUrl}
                tags={tool.tags}
                glow={tool.glow}
                detailSlug={tool.hasDetailPage ? tool.slug : undefined}
              />
            ))}
          </ToolGrid>
        </Section>

        {/* 09 - BREWFILE */}
        <Section
          id="brewfile"
          number="09"
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
