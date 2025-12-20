import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function ConfigPage() {
  return (
    <>
      <ToolHero
        name="Complete Configuration"
        description="All your dotfiles in one place. Optimized configurations for Ghostty, Starship, Zsh, and Git with consistent Catppuccin Mocha theming."
        href="https://github.com/catppuccin/catppuccin"
        tags={[
          { type: "recommended", label: "Copy & Paste Ready" },
        ]}
        glow="purple"
        installCommand="brew install font-jetbrains-mono-nerd-font"
      />

      <DetailSection title="Unified Defaults">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔤</div>
            <h4 className="font-medium text-foreground">Font</h4>
            <p className="text-sm text-muted-foreground">JetBrains Mono Nerd Font</p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🎨</div>
            <h4 className="font-medium text-foreground">Theme</h4>
            <p className="text-sm text-muted-foreground">Catppuccin Mocha</p>
          </div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">📏</div>
            <h4 className="font-medium text-foreground">Font Size</h4>
            <p className="text-sm text-muted-foreground">14px</p>
          </div>
        </div>

        <FeatureList
          features={[
            "Consistent Catppuccin Mocha colors across all tools",
            "Nerd Font icons in terminal, prompt, and file listings",
            "Optimized for productivity with sensible defaults",
            "Git-aware prompt with branch and status info",
            "Modern CLI aliases (eza, bat, ripgrep, fd, zoxide)",
          ]}
        />

        <Tip>
          Install the font first, then set it in your terminal. All configs below assume the font is installed.
        </Tip>
      </DetailSection>

      <DetailSection title="1. Shell Configuration (~/.zshrc)">
        <p className="text-muted-foreground mb-4">
          Complete Zsh configuration with Oh My Zsh, modern CLI aliases, and tool initializations.
          This is the single source of truth for your shell setup.
        </p>

        <ConfigBlock filename="~/.zshrc">
{`# ============================================================================
# OH MY ZSH CONFIGURATION
# ============================================================================
export ZSH="$HOME/.oh-my-zsh"

# Use minimal theme - Starship prompt handles styling
ZSH_THEME=""

# Essential plugins (fewer = faster startup)
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# ============================================================================
# HOMEBREW & ENVIRONMENT
# ============================================================================
eval "$(/opt/homebrew/bin/brew shellenv)"

export EDITOR="code --wait"
export VISUAL="$EDITOR"

# ============================================================================
# COMMAND ALIASES - Modern CLI replacements
# ============================================================================
alias ls="eza --color=always --icons=always --git"
alias ll="eza -la --icons=always --git"
alias tree="eza --tree --icons=always"
alias cat="bat --paging=never"
alias grep="rg"
alias find="fd"

# ============================================================================
# TOOL INITIALIZATION
# ============================================================================
eval "$(starship init zsh)"    # Prompt styling
eval "$(zoxide init zsh)"      # Smart directory jumping (z command)
eval "$(fzf --zsh)"            # Fuzzy finder keybindings
eval "$(fnm env --use-on-cd)"  # Node version manager`}
        </ConfigBlock>

        <div className="mt-4">
          <h4 className="font-medium text-foreground mb-2">Required Plugins (external)</h4>
          <CodeBlock language="bash">
            <Comment># Install zsh-autosuggestions</Comment>
            {"\n"}
            <Cmd>git</Cmd> clone https://github.com/zsh-users/zsh-autosuggestions {"${ZSH_CUSTOM:-~/.oh-my-zsh/custom}"}/plugins/zsh-autosuggestions
            {"\n\n"}
            <Comment># Install zsh-syntax-highlighting</Comment>
            {"\n"}
            <Cmd>git</Cmd> clone https://github.com/zsh-users/zsh-syntax-highlighting {"${ZSH_CUSTOM:-~/.oh-my-zsh/custom}"}/plugins/zsh-syntax-highlighting
          </CodeBlock>
        </div>
      </DetailSection>

      <DetailSection title="2. Terminal Configuration (~/.config/ghostty/config)">
        <p className="text-muted-foreground mb-4">
          Ghostty terminal with GPU acceleration, Catppuccin Mocha theme, and Nerd Font support.
        </p>

        <ConfigBlock filename="~/.config/ghostty/config">
{`# Font - Use Nerd Font for icons
font-family = "JetBrains Mono Nerd Font"
font-size = 14
font-thicken = true

# Theme - Catppuccin Mocha for consistency
theme = catppuccin-mocha
background-opacity = 0.95

# Window
window-padding-x = 12
window-padding-y = 8
window-decoration = true
macos-titlebar-style = tabs

# Cursor
cursor-style = block
cursor-style-blink = false

# Shell integration
shell-integration = zsh
shell-integration-features = cursor,sudo,title

# Behavior
mouse-hide-while-typing = true
copy-on-select = clipboard
scrollback-limit = 10000

# Fix Ctrl+Enter for some apps
keybind = ctrl+enter=text:\\x1b[13;5u`}
        </ConfigBlock>

        <Tip>
          Create the config directory first: <code className="text-primary">mkdir -p ~/.config/ghostty</code>
        </Tip>
      </DetailSection>

      <DetailSection title="3. Prompt Configuration (~/.config/starship.toml)">
        <p className="text-muted-foreground mb-4">
          Minimal Starship prompt with Catppuccin Mocha colors. Shows directory, git info, and language versions.
        </p>

        <ConfigBlock filename="~/.config/starship.toml">
{`# Minimal, fast prompt configuration
add_newline = true
command_timeout = 1000

# Clean format - shows only what matters
format = """
$directory\\
$git_branch\\
$git_status\\
$python\\
$nodejs\\
$rust\\
$golang\\
$line_break\\
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
format = "[$symbol$pyenv_prefix($version)]($style) "

# Node.js - Catppuccin Mocha green
[nodejs]
symbol = " "
style = "bold #a6e3a1"
format = "[$symbol($version)]($style) "

# Rust - Catppuccin Mocha peach
[rust]
symbol = " "
style = "bold #fab387"

# Go - Catppuccin Mocha teal
[golang]
symbol = " "
style = "bold #94e2d5"

# Prompt character
[character]
success_symbol = "[❯](#a6e3a1)"
error_symbol = "[❯](#f38ba8)"`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="4. Git Configuration (~/.gitconfig)">
        <p className="text-muted-foreground mb-4">
          Git config with delta for beautiful diffs, using Catppuccin Mocha syntax highlighting.
        </p>

        <ConfigBlock filename="~/.gitconfig">
{`[user]
    name = Your Name
    email = your@email.com

[init]
    defaultBranch = main

# Use delta for beautiful diffs
[core]
    pager = delta

[interactive]
    diffFilter = delta --color-only

[delta]
    navigate = true
    dark = true
    side-by-side = true
    line-numbers = true
    syntax-theme = Catppuccin Mocha

[merge]
    conflictstyle = diff3

[diff]
    colorMoved = default`}
        </ConfigBlock>

        <CodeBlock language="bash">
          <Comment># Or run these commands:</Comment>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> user.name <Str>&quot;Your Name&quot;</Str>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> user.email <Str>&quot;your@email.com&quot;</Str>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> init.defaultBranch main
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> core.pager delta
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Catppuccin Mocha Color Palette">
        <p className="text-muted-foreground mb-4">
          Reference for customizing your configs with consistent colors.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { name: "Rosewater", hex: "#f5e0dc" },
            { name: "Flamingo", hex: "#f2cdcd" },
            { name: "Pink", hex: "#f5c2e7" },
            { name: "Mauve", hex: "#cba6f7" },
            { name: "Red", hex: "#f38ba8" },
            { name: "Maroon", hex: "#eba0ac" },
            { name: "Peach", hex: "#fab387" },
            { name: "Yellow", hex: "#f9e2af" },
            { name: "Green", hex: "#a6e3a1" },
            { name: "Teal", hex: "#94e2d5" },
            { name: "Sky", hex: "#89dceb" },
            { name: "Blue", hex: "#89b4fa" },
          ].map((color) => (
            <div key={color.name} className="flex items-center gap-2 bg-card/50 border border-border/50 rounded-lg p-2">
              <div
                className="w-6 h-6 rounded-md border border-border/50"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <div className="text-xs font-medium text-foreground">{color.name}</div>
                <div className="text-xs text-muted-foreground font-mono">{color.hex}</div>
              </div>
            </div>
          ))}
        </div>
      </DetailSection>

      <DetailSection title="Quick Setup Script">
        <p className="text-muted-foreground mb-4">
          Run this to create all config directories and download the configs.
        </p>

        <CodeBlock language="bash">
          <Comment># Create config directories</Comment>
          {"\n"}
          <Cmd>mkdir</Cmd> <Flag>-p</Flag> ~/.config/ghostty ~/.config
          {"\n\n"}
          <Comment># Install required tools</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install starship zoxide fzf eza bat ripgrep fd delta
          {"\n\n"}
          <Comment># Install Nerd Font</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install font-jetbrains-mono-nerd-font
          {"\n\n"}
          <Comment># Then copy the configs above to their respective locations</Comment>
        </CodeBlock>
      </DetailSection>
    </>
  );
}
