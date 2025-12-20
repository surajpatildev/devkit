import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Flag } from "@/components/code-block";

export default function LazygitPage() {
  return (
    <>
      <ToolHero
        name="lazygit"
        description="Simple terminal UI for git commands. Visual staging, interactive rebase, branch management. Makes git actually enjoyable."
        href="https://github.com/jesseduffield/lazygit"
        tags={[{ type: "free" }, { type: "oss" }, { type: "recommended" }]}
        glow="purple"
        installCommand="brew install lazygit"
      />

      <DetailSection title="Why lazygit?">
        <FeatureList
          features={[
            "Visual interface - see staged/unstaged changes at a glance",
            "Interactive rebase made easy - squash, fixup, reorder commits",
            "Stage individual lines or hunks (not just files)",
            "Cherry-pick commits between branches",
            "Resolve merge conflicts with visual diff",
            "Manage stashes, worktrees, and remotes",
            "Customizable keybindings and themes",
            "40k+ GitHub stars - extremely popular",
          ]}
        />
      </DetailSection>

      <DetailSection title="Getting Started">
        <CodeBlock language="bash">
          <Comment># Install lazygit</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install lazygit
          {"\n\n"}
          <Comment># Run in any git repository</Comment>
          {"\n"}
          <Cmd>lazygit</Cmd>
          {"\n\n"}
          <Comment># Or use the common alias</Comment>
          {"\n"}
          <Cmd>lg</Cmd>
        </CodeBlock>

        <ConfigBlock filename="~/.zshrc">
{`# Add lazygit alias
alias lg="lazygit"`}
        </ConfigBlock>

        <Tip>
          Press <code className="text-primary">?</code> anywhere in lazygit to see
          all available keybindings for the current panel.
        </Tip>
      </DetailSection>

      <DetailSection title="Interface Overview">
        <p className="text-muted-foreground mb-4">
          lazygit has 5 main panels. Press <code className="text-primary">1-5</code> to jump to each.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">1. Status</h4>
            <p className="text-sm text-muted-foreground">
              Current branch, repo info, recent activity.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">2. Files</h4>
            <p className="text-sm text-muted-foreground">
              Staged and unstaged changes. Stage with <code className="text-primary">space</code>.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">3. Branches</h4>
            <p className="text-sm text-muted-foreground">
              Local and remote branches. Checkout with <code className="text-primary">space</code>.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">4. Commits</h4>
            <p className="text-sm text-muted-foreground">
              Commit history. Rebase, cherry-pick, revert.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4 md:col-span-2">
            <h4 className="font-medium text-foreground mb-2">5. Stash</h4>
            <p className="text-sm text-muted-foreground">
              Saved stashes. Apply or drop stashes.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Essential Keybindings">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Navigation</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">j/k</span> — Move up/down</li>
              <li><span className="text-primary">h/l</span> — Switch panels</li>
              <li><span className="text-primary">1-5</span> — Jump to panel</li>
              <li><span className="text-primary">enter</span> — Focus/expand</li>
              <li><span className="text-primary">esc</span> — Go back/cancel</li>
              <li><span className="text-primary">q</span> — Quit</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Files Panel</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">space</span> — Stage/unstage file</li>
              <li><span className="text-primary">a</span> — Stage all</li>
              <li><span className="text-primary">enter</span> — Stage individual lines</li>
              <li><span className="text-primary">d</span> — Discard changes</li>
              <li><span className="text-primary">e</span> — Edit file</li>
              <li><span className="text-primary">c</span> — Commit</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Commits Panel</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">s</span> — Squash into previous</li>
              <li><span className="text-primary">f</span> — Fixup (squash, keep msg)</li>
              <li><span className="text-primary">r</span> — Reword commit message</li>
              <li><span className="text-primary">d</span> — Drop commit</li>
              <li><span className="text-primary">e</span> — Edit commit</li>
              <li><span className="text-primary">p</span> — Pick (cherry-pick)</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Branches Panel</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">space</span> — Checkout branch</li>
              <li><span className="text-primary">n</span> — New branch</li>
              <li><span className="text-primary">d</span> — Delete branch</li>
              <li><span className="text-primary">M</span> — Merge into current</li>
              <li><span className="text-primary">r</span> — Rebase onto branch</li>
              <li><span className="text-primary">P</span> — Push</li>
              <li><span className="text-primary">p</span> — Pull</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Common Workflows">
        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Interactive Rebase</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Clean up commits before pushing or merging.
            </p>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Go to Commits panel (<code className="text-primary">4</code>)</li>
              <li>Navigate to the commit where you want to start</li>
              <li>Press <code className="text-primary">e</code> to start editing</li>
              <li>Use <code className="text-primary">s</code> (squash), <code className="text-primary">f</code> (fixup), <code className="text-primary">r</code> (reword)</li>
              <li>Move commits with <code className="text-primary">ctrl+j/k</code></li>
              <li>Press <code className="text-primary">m</code> to continue rebase</li>
            </ol>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Stage Individual Lines</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Commit only specific changes from a file.
            </p>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>In Files panel, press <code className="text-primary">enter</code> on a file</li>
              <li>Navigate to the lines you want to stage</li>
              <li>Press <code className="text-primary">space</code> to stage a line or hunk</li>
              <li>Press <code className="text-primary">a</code> to stage all in hunk</li>
              <li>Press <code className="text-primary">esc</code> to go back</li>
            </ol>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Resolve Merge Conflicts</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Visual conflict resolution.
            </p>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Conflicting files show in Files panel</li>
              <li>Press <code className="text-primary">enter</code> to open conflict view</li>
              <li>Use <code className="text-primary">←/→</code> to pick version</li>
              <li>Or <code className="text-primary">b</code> to pick both</li>
              <li>Press <code className="text-primary">space</code> to mark resolved</li>
            </ol>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Configuration">
        <p className="text-muted-foreground mb-4">
          Config file location: <code className="text-primary">~/.config/lazygit/config.yml</code>
        </p>

        <ConfigBlock filename="~/.config/lazygit/config.yml">
{`gui:
  # Theme
  theme:
    activeBorderColor:
      - '#89b4fa'
      - bold
    inactiveBorderColor:
      - '#6c7086'
    selectedLineBgColor:
      - '#313244'

  # Show file icons (requires nerd font)
  showFileIcons: true

  # Mouse support
  mouseEvents: true

  # Side panel width
  sidePanelWidth: 0.3

git:
  # Auto-fetch interval (0 to disable)
  autoFetch: true
  autoFetchInterval: 120

  # Pull with --rebase
  pull:
    mode: 'rebase'

# Custom commands
customCommands:
  - key: '<c-p>'
    description: 'Push to origin'
    command: 'git push origin {{.SelectedLocalBranch.Name}}'
    context: 'localBranches'`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="IDE Integration">
        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">VS Code / Cursor</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Open lazygit in the integrated terminal.
            </p>
            <ConfigBlock filename="keybindings.json">
{`{
  "key": "cmd+g cmd+g",
  "command": "workbench.action.terminal.sendSequence",
  "args": { "text": "lazygit\\n" }
}`}
            </ConfigBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Neovim</h4>
            <p className="text-sm text-muted-foreground">
              Use <code className="text-primary">lazygit.nvim</code> plugin for seamless integration.
            </p>
          </div>
        </div>

        <Tip>
          lazygit respects your <code className="text-primary">~/.gitconfig</code>, so
          your aliases and settings work here too.
        </Tip>
      </DetailSection>
    </>
  );
}
