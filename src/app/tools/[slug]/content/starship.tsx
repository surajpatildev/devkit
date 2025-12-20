import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function StarshipPage() {
  return (
    <>
      <ToolHero
        name="Starship"
        description="The minimal, blazing-fast, and infinitely customizable prompt for any shell. Shows relevant information at a glance while staying out of your way."
        href="https://starship.rs"
        tags={[
          { type: "free" },
          { type: "oss" },
          { type: "recommended", label: "Recommended" },
        ]}
        glow="purple"
        installCommand="brew install starship"
      />

      <DetailSection title="Why Starship?">
        <FeatureList
          features={[
            "Blazing fast - written in Rust, renders in milliseconds",
            "Works with any shell - Zsh, Bash, Fish, PowerShell",
            "Smart defaults - shows info only when relevant",
            "Git integration - branch, status, stash count at a glance",
            "Language detection - shows version for Python, Node, Rust, Go, etc.",
            "Highly customizable with simple TOML configuration",
            "Battery status, command duration, and more",
          ]}
        />
      </DetailSection>

      <DetailSection title="Installation">
        <CodeBlock language="bash">
          <Comment># Install Starship</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install starship
          {"\n\n"}
          <Comment># Add to your ~/.zshrc (at the end)</Comment>
          {"\n"}
          <Cmd>eval</Cmd> <Str>&quot;$(starship init zsh)&quot;</Str>
          {"\n\n"}
          <Comment># If using Oh My Zsh, set ZSH_THEME=&quot;&quot; to disable its theme</Comment>
        </CodeBlock>

        <Tip>
          Starship requires a Nerd Font for icons. Install one with:
          <code className="text-primary ml-2">brew install font-jetbrains-mono-nerd-font</code>
        </Tip>
      </DetailSection>

      <DetailSection title="Configuration">
        <p className="text-muted-foreground mb-4">
          Create a config file at <code className="text-primary">~/.config/starship.toml</code>.
          Starship hot-reloads configuration changes.
        </p>

        <ConfigBlock filename="~/.config/starship.toml">
{`# General settings
add_newline = true
command_timeout = 1000

# Prompt format - clean and minimal
format = """
$directory\
$git_branch\
$git_status\
$python\
$nodejs\
$rust\
$golang\
$docker_context\
$line_break\
$character"""

# Directory - Catppuccin Mocha blue
[directory]
truncation_length = 3
truncate_to_repo = true
style = "bold #89b4fa"

# Git branch - Catppuccin Mocha mauve
[git_branch]
symbol = " "
style = "bold #cba6f7"

# Git status - Catppuccin Mocha red
[git_status]
style = "bold #f38ba8"
format = "([$all_status$ahead_behind]($style) )"

# Python - Catppuccin Mocha yellow
[python]
symbol = " "
style = "bold #f9e2af"
format = "[\${symbol}\${pyenv_prefix}(\${version})](\$style) "

# Node.js - Catppuccin Mocha green
[nodejs]
symbol = " "
style = "bold #a6e3a1"
format = "[\${symbol}(\${version})](\$style) "

# Rust - Catppuccin Mocha peach
[rust]
symbol = " "
style = "bold #fab387"

# Go - Catppuccin Mocha teal
[golang]
symbol = " "
style = "bold #94e2d5"

# Character (prompt symbol)
[character]
success_symbol = "[❯](#a6e3a1)"
error_symbol = "[❯](#f38ba8)"
vimcmd_symbol = "[❮](#a6e3a1)"`}
        </ConfigBlock>

        <Tip>
          This config uses Catppuccin Mocha colors for consistency with Ghostty and delta.
          See the <a href="/#config" className="text-primary underline">Complete Configuration Files</a> section for the full setup.
        </Tip>
      </DetailSection>

      <DetailSection title="Presets">
        <p className="text-muted-foreground mb-4">
          Starship comes with several presets you can use as a starting point.
        </p>

        <CodeBlock language="bash">
          <Comment># List available presets</Comment>
          {"\n"}
          <Cmd>starship</Cmd> preset <Flag>--list</Flag>
          {"\n\n"}
          <Comment># Apply a preset (this overwrites your config)</Comment>
          {"\n"}
          <Cmd>starship</Cmd> preset nerd-font-symbols <Flag>-o</Flag> ~/.config/starship.toml
          {"\n\n"}
          <Comment># Popular presets:</Comment>
          {"\n"}
          <Comment># - nerd-font-symbols: Compact with icons</Comment>
          {"\n"}
          <Comment># - plain-text-symbols: No special fonts needed</Comment>
          {"\n"}
          <Comment># - tokyo-night: Tokyo Night theme colors</Comment>
          {"\n"}
          <Comment># - pastel-powerline: Powerline-style prompt</Comment>
        </CodeBlock>
      </DetailSection>

      <DetailSection title="What Starship Shows">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Git Info</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Current branch name</li>
              <li>Ahead/behind remote count</li>
              <li>Staged, modified, untracked files</li>
              <li>Stash count</li>
              <li>Merge conflicts</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Languages</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Python version (when in Python project)</li>
              <li>Node.js version (when package.json exists)</li>
              <li>Rust, Go, Ruby, Java, PHP...</li>
              <li>Virtual environment name</li>
              <li>Package version from project files</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">System</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Command duration (if &gt;2s)</li>
              <li>Exit code (if non-zero)</li>
              <li>Battery level (if low)</li>
              <li>Current time</li>
              <li>Username/hostname (if SSH)</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Cloud/DevOps</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Docker context</li>
              <li>Kubernetes context</li>
              <li>AWS profile</li>
              <li>Terraform workspace</li>
              <li>Nix shell</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Minimal Configuration">
        <p className="text-muted-foreground mb-4">
          If you prefer a cleaner prompt, here is a minimal setup:
        </p>

        <ConfigBlock filename="~/.config/starship.toml (minimal)">
{`add_newline = false

format = "$directory$git_branch$git_status$character"

[directory]
truncation_length = 2

[character]
success_symbol = "[→](bold green)"
error_symbol = "[→](bold red)"`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Troubleshooting">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Icons not showing?</h4>
            <p className="text-sm text-muted-foreground">
              Install a Nerd Font and set it as your terminal font.
              JetBrains Mono Nerd Font is a great choice.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Prompt too slow?</h4>
            <p className="text-sm text-muted-foreground">
              Increase <code className="text-primary">command_timeout</code> or disable
              slow modules like git_status for large repos.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
