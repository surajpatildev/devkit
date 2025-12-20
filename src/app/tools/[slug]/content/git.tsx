import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function GitPage() {
  return (
    <>
      <ToolHero
        name="Git"
        description="The essential version control system. Configure it properly with SSH keys, helpful aliases, and beautiful diffs using delta."
        href="https://git-scm.com"
        tags={[
          { type: "free" },
          { type: "oss" },
          { type: "essential", label: "Essential" },
        ]}
        glow="orange"
        installCommand="brew install git gh"
      />

      <DetailSection title="Initial Setup">
        <CodeBlock language="bash">
          <Comment># Install git and GitHub CLI</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install git gh delta
          {"\n\n"}
          <Comment># Configure your identity</Comment>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> user.name <Str>&quot;Your Name&quot;</Str>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> user.email <Str>&quot;your@email.com&quot;</Str>
          {"\n\n"}
          <Comment># Set default branch name</Comment>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> init.defaultBranch main
        </CodeBlock>
      </DetailSection>

      <DetailSection title="SSH Key Setup">
        <p className="text-muted-foreground mb-4">
          SSH keys let you authenticate with GitHub without entering passwords.
        </p>

        <CodeBlock language="bash">
          <Comment># Generate a new SSH key (ed25519 is recommended)</Comment>
          {"\n"}
          <Cmd>ssh-keygen</Cmd> <Flag>-t</Flag> ed25519 <Flag>-C</Flag> <Str>&quot;your@email.com&quot;</Str>
          {"\n\n"}
          <Comment># Start the ssh-agent</Comment>
          {"\n"}
          <Cmd>eval</Cmd> <Str>&quot;$(ssh-agent -s)&quot;</Str>
          {"\n\n"}
          <Comment># Add your SSH key to the agent</Comment>
          {"\n"}
          <Cmd>ssh-add</Cmd> <Flag>--apple-use-keychain</Flag> ~/.ssh/id_ed25519
          {"\n\n"}
          <Comment># Copy public key to clipboard</Comment>
          {"\n"}
          <Cmd>pbcopy</Cmd> {"<"} ~/.ssh/id_ed25519.pub
          {"\n\n"}
          <Comment># Go to github.com/settings/keys and add the key</Comment>
          {"\n\n"}
          <Comment># Test the connection</Comment>
          {"\n"}
          <Cmd>ssh</Cmd> <Flag>-T</Flag> git@github.com
        </CodeBlock>

        <Tip>
          Add the SSH key to your macOS keychain so you do not need to enter the
          passphrase every time. The --apple-use-keychain flag does this.
        </Tip>
      </DetailSection>

      <DetailSection title="Recommended Configuration">
        <ConfigBlock filename="~/.gitconfig">
{`[user]
    name = Your Name
    email = your@email.com

[init]
    defaultBranch = main

[core]
    editor = code --wait
    pager = delta
    excludesfile = ~/.gitignore_global

[interactive]
    diffFilter = delta --color-only

[delta]
    navigate = true
    line-numbers = true
    side-by-side = true
    syntax-theme = Dracula

[merge]
    conflictstyle = diff3

[diff]
    colorMoved = default

[pull]
    rebase = true

[push]
    autoSetupRemote = true
    default = current

[fetch]
    prune = true

[alias]
    co = checkout
    br = branch
    ci = commit
    st = status -sb
    last = log -1 HEAD
    unstage = reset HEAD --
    amend = commit --amend --no-edit

    # Pretty log
    lg = log --oneline --graph --decorate --all

    # Show what you've done today
    today = log --since=midnight --author='Your Name' --oneline

    # Undo last commit (keep changes)
    undo = reset --soft HEAD~1

    # Stash shortcuts
    ss = stash save
    sp = stash pop
    sl = stash list

[credential]
    helper = osxkeychain

[filter "lfs"]
    clean = git-lfs clean -- %f
    smudge = git-lfs smudge -- %f
    process = git-lfs filter-process
    required = true`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Global Gitignore">
        <p className="text-muted-foreground mb-4">
          Create a global gitignore for files you never want to commit.
        </p>

        <ConfigBlock filename="~/.gitignore_global">
{`# macOS
.DS_Store
.AppleDouble
.LSOverride
._*

# Thumbnails
Thumbs.db

# IDE
.idea/
.vscode/
*.swp
*.swo
*~

# Environment
.env
.env.local
.env.*.local

# Dependencies
node_modules/
__pycache__/
*.pyc
.venv/
venv/

# Build
dist/
build/
*.egg-info/

# Logs
*.log
npm-debug.log*

# Misc
.cache/
.tmp/`}
        </ConfigBlock>

        <CodeBlock language="bash">
          <Comment># Tell git to use your global gitignore</Comment>
          {"\n"}
          <Cmd>git</Cmd> config <Flag>--global</Flag> core.excludesfile ~/.gitignore_global
        </CodeBlock>
      </DetailSection>

      <DetailSection title="GitHub CLI (gh)">
        <p className="text-muted-foreground mb-4">
          The GitHub CLI makes it easy to work with GitHub from your terminal.
        </p>

        <CodeBlock language="bash">
          <Comment># Authenticate with GitHub</Comment>
          {"\n"}
          <Cmd>gh</Cmd> auth login
          {"\n\n"}
          <Comment># Clone a repository</Comment>
          {"\n"}
          <Cmd>gh</Cmd> repo clone owner/repo
          {"\n\n"}
          <Comment># Create a new repository</Comment>
          {"\n"}
          <Cmd>gh</Cmd> repo create my-project <Flag>--private</Flag>
          {"\n\n"}
          <Comment># Create a PR from current branch</Comment>
          {"\n"}
          <Cmd>gh</Cmd> pr create <Flag>--fill</Flag>
          {"\n\n"}
          <Comment># View and checkout PRs</Comment>
          {"\n"}
          <Cmd>gh</Cmd> pr list
          {"\n"}
          <Cmd>gh</Cmd> pr checkout 123
          {"\n\n"}
          <Comment># View issues</Comment>
          {"\n"}
          <Cmd>gh</Cmd> issue list
          {"\n"}
          <Cmd>gh</Cmd> issue create
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Delta for Beautiful Diffs">
        <p className="text-muted-foreground mb-4">
          Delta makes git diffs beautiful with syntax highlighting and side-by-side view.
        </p>

        <FeatureList
          features={[
            "Syntax highlighting for code changes",
            "Side-by-side diff view",
            "Line numbers",
            "Word-level diff highlighting",
            "Git blame with syntax highlighting",
          ]}
        />

        <Tip>
          Delta is already configured in the .gitconfig above. Just install it
          with <code className="text-primary">brew install delta</code>.
        </Tip>
      </DetailSection>

      <DetailSection title="Useful Commands">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <div className="grid gap-2 text-sm">
            <div><code className="text-primary">git status -sb</code> - Short status</div>
            <div><code className="text-primary">git log --oneline -10</code> - Last 10 commits</div>
            <div><code className="text-primary">git diff --staged</code> - Show staged changes</div>
            <div><code className="text-primary">git stash</code> - Stash changes temporarily</div>
            <div><code className="text-primary">git stash pop</code> - Restore stashed changes</div>
            <div><code className="text-primary">git reset --soft HEAD~1</code> - Undo last commit</div>
            <div><code className="text-primary">git cherry-pick abc123</code> - Apply specific commit</div>
            <div><code className="text-primary">git rebase -i HEAD~3</code> - Interactive rebase</div>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
