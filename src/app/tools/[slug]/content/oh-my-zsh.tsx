import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function OhMyZshPage() {
  return (
    <>
      <ToolHero
        name="Oh My Zsh"
        description="A delightful framework for managing your Zsh configuration. Comes with thousands of helpful functions, plugins, and themes to supercharge your terminal experience."
        href="https://ohmyz.sh"
        tags={[
          { type: "free" },
          { type: "oss" },
          { type: "essential", label: "Essential" },
        ]}
        glow="green"
        installCommand='sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"'
      />

      <DetailSection title="Why Oh My Zsh?">
        <FeatureList
          features={[
            "300+ plugins for git, docker, npm, python, and more",
            "150+ themes to customize your prompt",
            "Auto-completion for commands, paths, and arguments",
            "Smart directory navigation and history",
            "Easy plugin management with a single config line",
            "Active community with regular updates",
          ]}
        />
      </DetailSection>

      <DetailSection title="Installation">
        <CodeBlock language="bash">
          <Comment># Install Oh My Zsh</Comment>
          {"\n"}
          <Cmd>sh</Cmd> <Flag>-c</Flag> <Str>&quot;$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</Str>
          {"\n\n"}
          <Comment># This will:</Comment>
          {"\n"}
          <Comment># 1. Clone Oh My Zsh to ~/.oh-my-zsh</Comment>
          {"\n"}
          <Comment># 2. Create a new ~/.zshrc from template</Comment>
          {"\n"}
          <Comment># 3. Backup your existing ~/.zshrc</Comment>
          {"\n"}
          <Comment># 4. Set Zsh as your default shell</Comment>
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Essential Plugins">
        <p className="text-muted-foreground mb-4">
          These plugins will dramatically improve your terminal workflow.
          Add them to the plugins array in your ~/.zshrc.
        </p>

        <CodeBlock language="bash">
          <Comment># Install external plugins</Comment>
          {"\n"}
          <Cmd>git</Cmd> clone https://github.com/zsh-users/zsh-autosuggestions {"${ZSH_CUSTOM:-~/.oh-my-zsh/custom}"}/plugins/zsh-autosuggestions
          {"\n\n"}
          <Cmd>git</Cmd> clone https://github.com/zsh-users/zsh-syntax-highlighting {"${ZSH_CUSTOM:-~/.oh-my-zsh/custom}"}/plugins/zsh-syntax-highlighting
        </CodeBlock>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">zsh-autosuggestions</h4>
            <p className="text-sm text-muted-foreground">
              Shows ghost text suggestions based on your history.
              Press → to accept the full suggestion.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">zsh-syntax-highlighting</h4>
            <p className="text-sm text-muted-foreground">
              Colors your commands as you type. Red = invalid, green = valid.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">git</h4>
            <p className="text-sm text-muted-foreground">
              150+ aliases like <code className="text-primary">gst</code> (status),
              <code className="text-primary">gco</code> (checkout),
              <code className="text-primary">gp</code> (push).
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">z</h4>
            <p className="text-sm text-muted-foreground">
              Jump to frequently used directories. Type <code className="text-primary">z proj</code> to
              jump to ~/Developer/project.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Recommended Configuration">
        <p className="text-muted-foreground mb-4">
          See the <a href="/#terminal" className="text-primary underline">Terminal & Shell</a> section on the homepage for the complete, optimized <code className="text-primary">~/.zshrc</code> configuration. Here&apos;s the essential structure:
        </p>

        <ConfigBlock filename="~/.zshrc">
{`# Path to Oh My Zsh installation
export ZSH="$HOME/.oh-my-zsh"

# Theme - leave empty if using Starship
ZSH_THEME=""

# Essential plugins only (fewer = faster startup)
plugins=(
  git
  zsh-autosuggestions
  zsh-syntax-highlighting
)

# Load Oh My Zsh
source $ZSH/oh-my-zsh.sh

# Homebrew
eval "$(/opt/homebrew/bin/brew shellenv)"

# Editor
export EDITOR="code --wait"
export VISUAL="$EDITOR"

# Modern CLI aliases
alias ls="eza --color=always --icons=always --git"
alias ll="eza -la --icons=always --git"
alias tree="eza --tree --icons=always"
alias cat="bat --paging=never"
alias grep="rg"
alias find="fd"

# Tool initializations
eval "$(starship init zsh)"
eval "$(zoxide init zsh)"
eval "$(fzf --zsh)"
eval "$(fnm env --use-on-cd)"`}
        </ConfigBlock>

        <Tip>
          The complete configuration with all sections properly organized is available in the{" "}
          <a href="/#config" className="text-primary underline">Complete Configuration Files</a> section.
        </Tip>
      </DetailSection>

      <DetailSection title="Useful Git Aliases (Built-in)">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div><code className="text-primary">gst</code> → git status</div>
            <div><code className="text-primary">gco</code> → git checkout</div>
            <div><code className="text-primary">gcb</code> → git checkout -b</div>
            <div><code className="text-primary">gp</code> → git push</div>
            <div><code className="text-primary">gl</code> → git pull</div>
            <div><code className="text-primary">gaa</code> → git add --all</div>
            <div><code className="text-primary">gcmsg</code> → git commit -m</div>
            <div><code className="text-primary">gd</code> → git diff</div>
            <div><code className="text-primary">glog</code> → git log --oneline</div>
            <div><code className="text-primary">gsta</code> → git stash</div>
          </div>
        </div>

        <Tip>
          Run <code className="text-primary">alias | grep git</code> to see all available git aliases.
          There are over 150 of them!
        </Tip>
      </DetailSection>

      <DetailSection title="Updating">
        <CodeBlock language="bash">
          <Comment># Update Oh My Zsh</Comment>
          {"\n"}
          <Cmd>omz</Cmd> update
          {"\n\n"}
          <Comment># Or set auto-update in ~/.zshrc</Comment>
          {"\n"}
          zstyle <Str>&apos;:omz:update&apos;</Str> mode auto
          {"\n"}
          zstyle <Str>&apos;:omz:update&apos;</Str> frequency 7
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Troubleshooting">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Slow startup?</h4>
            <p className="text-sm text-muted-foreground">
              Too many plugins can slow down shell startup. Keep only essential plugins.
              Use <code className="text-primary">time zsh -i -c exit</code> to measure startup time.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Plugin not working?</h4>
            <p className="text-sm text-muted-foreground">
              Make sure the plugin is installed and listed in the plugins array.
              Order matters - put zsh-syntax-highlighting last.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
