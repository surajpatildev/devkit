import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Flag } from "@/components/code-block";

export default function ModernCliPage() {
  return (
    <>
      <ToolHero
        name="Modern CLI Tools"
        description="Rust-powered replacements for classic Unix commands. bat, eza, ripgrep, fd, fzf, zoxide, tldr. 10-100x faster with better UX."
        href="https://github.com/ibraheemdev/modern-unix"
        tags={[{ type: "free" }, { type: "oss" }, { type: "recommended" }]}
        glow="cyan"
        installCommand="brew install bat eza ripgrep fd fzf zoxide tldr"
      />

      <DetailSection title="Why Modern CLI Tools?">
        <FeatureList
          features={[
            "10-100x faster than traditional commands (Rust/Go)",
            "Syntax highlighting and color output by default",
            "Git-aware - shows file status, respects .gitignore",
            "Better defaults - no flags needed for common cases",
            "Cross-platform - same experience on Mac, Linux, servers",
            "Used by AI coding tools like Claude Code and Copilot",
          ]}
        />
      </DetailSection>

      <DetailSection title="The Tools">
        <div className="space-y-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">bat</h4>
              <span className="text-xs text-muted-foreground font-mono">replaces cat</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Cat with syntax highlighting, line numbers, and git integration.
            </p>
            <CodeBlock language="bash">
              <Cmd>bat</Cmd> package.json
              {"\n"}
              <Cmd>bat</Cmd> <Flag>--diff</Flag> file.js <Comment># Show git changes</Comment>
              {"\n"}
              <Cmd>bat</Cmd> <Flag>-A</Flag> file.txt <Comment># Show whitespace</Comment>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">eza</h4>
              <span className="text-xs text-muted-foreground font-mono">replaces ls</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Modern ls with icons, colors, git status, and tree view.
            </p>
            <CodeBlock language="bash">
              <Cmd>eza</Cmd> <Flag>-la</Flag> <Comment># Long list with hidden files</Comment>
              {"\n"}
              <Cmd>eza</Cmd> <Flag>--tree</Flag> <Flag>--level=2</Flag> <Comment># Tree view</Comment>
              {"\n"}
              <Cmd>eza</Cmd> <Flag>--git</Flag> <Flag>-l</Flag> <Comment># Show git status</Comment>
              {"\n"}
              <Cmd>eza</Cmd> <Flag>--icons</Flag> <Comment># File type icons (needs Nerd Font)</Comment>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">ripgrep (rg)</h4>
              <span className="text-xs text-muted-foreground font-mono">replaces grep</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Blazing fast recursive search. Respects .gitignore by default.
            </p>
            <CodeBlock language="bash">
              <Cmd>rg</Cmd> "TODO" <Comment># Search current directory</Comment>
              {"\n"}
              <Cmd>rg</Cmd> <Flag>-i</Flag> "error" <Comment># Case insensitive</Comment>
              {"\n"}
              <Cmd>rg</Cmd> <Flag>-t</Flag> js "import" <Comment># Only .js files</Comment>
              {"\n"}
              <Cmd>rg</Cmd> <Flag>-C</Flag> 3 "pattern" <Comment># Show 3 lines context</Comment>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">fd</h4>
              <span className="text-xs text-muted-foreground font-mono">replaces find</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Simple, fast file finder. Smart case, regex, respects .gitignore.
            </p>
            <CodeBlock language="bash">
              <Cmd>fd</Cmd> package <Comment># Find files matching &quot;package&quot;</Comment>
              {"\n"}
              <Cmd>fd</Cmd> <Flag>-e</Flag> tsx <Comment># Find all .tsx files</Comment>
              {"\n"}
              <Cmd>fd</Cmd> <Flag>-H</Flag> ".env" <Comment># Include hidden files</Comment>
              {"\n"}
              <Cmd>fd</Cmd> <Flag>-x</Flag> rm <Comment># Delete all matches</Comment>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">fzf</h4>
              <span className="text-xs text-muted-foreground font-mono">fuzzy finder</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Interactive fuzzy finder for files, history, and anything.
            </p>
            <CodeBlock language="bash">
              <Comment># Interactive file search (Ctrl+T)</Comment>
              {"\n"}
              <Cmd>fzf</Cmd>
              {"\n\n"}
              <Comment># Search command history (Ctrl+R)</Comment>
              {"\n"}
              <Cmd>history</Cmd> | <Cmd>fzf</Cmd>
              {"\n\n"}
              <Comment># Open file in editor</Comment>
              {"\n"}
              <Cmd>vim</Cmd> $(<Cmd>fzf</Cmd>)
              {"\n\n"}
              <Comment># With preview</Comment>
              {"\n"}
              <Cmd>fzf</Cmd> <Flag>--preview</Flag> 'bat --color=always {}'
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">zoxide</h4>
              <span className="text-xs text-muted-foreground font-mono">replaces cd</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Smarter cd that learns your habits. Jump anywhere with partial names.
            </p>
            <CodeBlock language="bash">
              <Comment># Jump to frequently used directory</Comment>
              {"\n"}
              <Cmd>z</Cmd> projects <Comment># Jumps to ~/projects</Comment>
              {"\n"}
              <Cmd>z</Cmd> devkit <Comment># Jumps to ~/projects/devkit</Comment>
              {"\n\n"}
              <Comment># Interactive selection</Comment>
              {"\n"}
              <Cmd>zi</Cmd>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-medium text-foreground">tldr</h4>
              <span className="text-xs text-muted-foreground font-mono">replaces man</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">
              Simplified man pages with practical examples.
            </p>
            <CodeBlock language="bash">
              <Cmd>tldr</Cmd> tar <Comment># Shows common tar examples</Comment>
              {"\n"}
              <Cmd>tldr</Cmd> git-rebase
              {"\n"}
              <Cmd>tldr</Cmd> ffmpeg
            </CodeBlock>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Shell Configuration">
        <p className="text-muted-foreground mb-4">
          Add these to your <code className="text-primary">~/.zshrc</code> for the best experience.
        </p>

        <ConfigBlock filename="~/.zshrc">
{`# Modern CLI aliases
alias cat="bat"
alias ls="eza"
alias ll="eza -la --git --icons"
alias tree="eza --tree"
alias grep="rg"
alias find="fd"

# Initialize zoxide (smarter cd)
eval "$(zoxide init zsh)"

# fzf key bindings
# Ctrl+T: file search, Ctrl+R: history, Alt+C: cd
source <(fzf --zsh)

# fzf with preview (uses bat and eza)
export FZF_CTRL_T_OPTS="--preview 'bat -n --color=always --line-range :500 {}'"
export FZF_ALT_C_OPTS="--preview 'eza --tree --color=always {} | head -200'"

# Use fd for fzf (faster, respects .gitignore)
export FZF_DEFAULT_COMMAND="fd --type f --hidden --follow --exclude .git"
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"`}
        </ConfigBlock>

        <Tip>
          After adding these aliases, you use the same commands you know
          (<code className="text-primary">cat</code>, <code className="text-primary">ls</code>, etc.)
          but get the modern versions.
        </Tip>
      </DetailSection>

      <DetailSection title="Nerd Fonts (for icons)">
        <p className="text-muted-foreground mb-4">
          Install a Nerd Font for file icons in eza and other tools.
        </p>

        <CodeBlock language="bash">
          <Comment># Install popular Nerd Fonts</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install <Flag>--cask</Flag> font-jetbrains-mono-nerd-font
          {"\n"}
          <Cmd>brew</Cmd> install <Flag>--cask</Flag> font-fira-code-nerd-font
          {"\n"}
          <Cmd>brew</Cmd> install <Flag>--cask</Flag> font-hack-nerd-font
        </CodeBlock>

        <p className="text-muted-foreground mt-4">
          Then set the font in your terminal (Ghostty, Warp, iTerm2, etc.).
        </p>
      </DetailSection>

      <DetailSection title="Speed Comparison">
        <p className="text-muted-foreground mb-4">
          These tools are significantly faster than their traditional counterparts.
        </p>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 font-mono text-sm">
          <div className="grid grid-cols-3 gap-4 text-muted-foreground">
            <div className="font-medium text-foreground">Command</div>
            <div className="font-medium text-foreground">Traditional</div>
            <div className="font-medium text-foreground">Modern</div>

            <div>Search codebase</div>
            <div>grep: 5.2s</div>
            <div className="text-green-400">rg: 0.3s</div>

            <div>Find files</div>
            <div>find: 3.1s</div>
            <div className="text-green-400">fd: 0.1s</div>

            <div>List directory</div>
            <div>ls: 0.2s</div>
            <div className="text-green-400">eza: 0.05s</div>
          </div>
        </div>

        <Tip type="warning">
          Times vary based on directory size and hardware. The improvement
          is most noticeable on large codebases.
        </Tip>
      </DetailSection>
    </>
  );
}
