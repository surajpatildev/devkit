import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Flag } from "@/components/code-block";

export default function GitHubCopilotPage() {
  return (
    <>
      <ToolHero
        name="GitHub Copilot"
        description="AI pair programmer in your IDE. Real-time code suggestions, chat, and agent mode. Developers report 55% productivity boost."
        href="https://github.com/features/copilot"
        tags={[
          { type: "free", label: "Free tier" },
          { type: "paid", label: "$10/mo" },
          { type: "essential" },
        ]}
        glow="cyan"
        downloadUrl="https://marketplace.visualstudio.com/items?itemName=GitHub.copilot"
      />

      <DetailSection title="Why GitHub Copilot?">
        <FeatureList
          features={[
            "Inline code completions as you type",
            "Chat interface for questions and explanations",
            "Agent mode for multi-step coding tasks",
            "Works in VS Code, JetBrains, Neovim, and more",
            "Context-aware - understands your codebase",
            "Supports all major programming languages",
            "Free tier available (2000 completions/month)",
          ]}
        />
      </DetailSection>

      <DetailSection title="Installation">
        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">VS Code / Cursor</h4>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Open Extensions (Cmd+Shift+X)</li>
              <li>Search for &quot;GitHub Copilot&quot;</li>
              <li>Install both Copilot and Copilot Chat extensions</li>
              <li>Sign in with your GitHub account</li>
            </ol>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">JetBrains (IntelliJ, PyCharm, WebStorm)</h4>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Open Settings → Plugins</li>
              <li>Search for &quot;GitHub Copilot&quot;</li>
              <li>Install and restart IDE</li>
              <li>Sign in via Tools → GitHub Copilot → Login</li>
            </ol>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Neovim</h4>
            <CodeBlock language="lua">
              <Comment>-- Using lazy.nvim</Comment>
              {"\n"}
              {`{
  "github/copilot.vim",
  lazy = false,
}`}
            </CodeBlock>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Key Features">
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Inline Completions</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Suggestions appear as you type (gray text)</li>
              <li><span className="text-primary font-mono">Tab</span> — Accept suggestion</li>
              <li><span className="text-primary font-mono">Esc</span> — Dismiss suggestion</li>
              <li><span className="text-primary font-mono">Alt+]</span> — Next suggestion</li>
              <li><span className="text-primary font-mono">Alt+[</span> — Previous suggestion</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Copilot Chat</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li><span className="text-primary font-mono">Cmd+I</span> — Inline chat</li>
              <li><span className="text-primary font-mono">Cmd+Shift+I</span> — Chat panel</li>
              <li>Ask questions about code</li>
              <li>Generate tests, docs, refactors</li>
              <li>Explain complex code</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Agent Mode</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Multi-step autonomous coding</li>
              <li>Runs terminal commands</li>
              <li>Edits multiple files</li>
              <li>Auto-corrects based on errors</li>
              <li>Perfect for larger refactors</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Slash Commands</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">/explain</span> — Explain selected code</li>
              <li><span className="text-primary">/fix</span> — Fix bugs in selection</li>
              <li><span className="text-primary">/tests</span> — Generate tests</li>
              <li><span className="text-primary">/doc</span> — Generate documentation</li>
              <li><span className="text-primary">/simplify</span> — Simplify code</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Best Practices">
        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Write Good Comments</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Copilot uses comments to understand intent. Be specific.
            </p>
            <CodeBlock language="typescript">
              <Comment>// Bad: get users</Comment>
              {"\n"}
              <Comment>// Good: Fetch active users from database, sorted by last login,</Comment>
              {"\n"}
              <Comment>// excluding users who haven&apos;t logged in for 30 days</Comment>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Provide Context</h4>
            <p className="text-sm text-muted-foreground">
              Open relevant files in your editor. Copilot uses open tabs
              as context for better suggestions.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Use AGENTS.md</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Create a project-level file with coding guidelines for Copilot.
            </p>
            <ConfigBlock filename="AGENTS.md">
{`# Coding Guidelines for Copilot

## Style
- Use TypeScript for all new files
- Prefer functional components with hooks
- Use Tailwind CSS for styling

## Architecture
- Components in src/components/
- API routes in src/app/api/
- Shared utilities in src/lib/

## Testing
- Write tests for all utility functions
- Use React Testing Library for components`}
            </ConfigBlock>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="VS Code Settings">
        <ConfigBlock filename="settings.json">
{`{
  // Enable/disable Copilot for specific languages
  "github.copilot.enable": {
    "*": true,
    "markdown": true,
    "plaintext": false
  },

  // Show inline suggestions
  "editor.inlineSuggest.enabled": true,

  // Copilot Chat settings
  "github.copilot.chat.localeOverride": "en",

  // Agent mode settings
  "github.copilot.chat.agent.enabled": true
}`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 font-mono text-sm">
          <div className="grid grid-cols-2 gap-4 text-muted-foreground">
            <div className="font-medium text-foreground">Action</div>
            <div className="font-medium text-foreground">Shortcut</div>

            <div>Accept suggestion</div>
            <div className="text-primary">Tab</div>

            <div>Dismiss suggestion</div>
            <div className="text-primary">Esc</div>

            <div>Next suggestion</div>
            <div className="text-primary">Alt+]</div>

            <div>Previous suggestion</div>
            <div className="text-primary">Alt+[</div>

            <div>Inline chat</div>
            <div className="text-primary">Cmd+I</div>

            <div>Chat panel</div>
            <div className="text-primary">Cmd+Shift+I</div>

            <div>Quick chat</div>
            <div className="text-primary">Cmd+Shift+C</div>
          </div>
        </div>

        <Tip>
          You can customize these shortcuts in VS Code via
          Cmd+K Cmd+S → search for &quot;copilot&quot;.
        </Tip>
      </DetailSection>

      <DetailSection title="Pricing">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Free</h4>
            <p className="text-2xl font-bold text-foreground mb-2">$0</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>2,000 completions/month</li>
              <li>50 chat messages/month</li>
              <li>VS Code only</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-primary/50 rounded-lg p-4 ring-1 ring-primary/50">
            <h4 className="font-medium text-foreground mb-2">Pro</h4>
            <p className="text-2xl font-bold text-foreground mb-2">$10/mo</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Unlimited completions</li>
              <li>Unlimited chat</li>
              <li>All IDEs</li>
              <li>Agent mode</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Business</h4>
            <p className="text-2xl font-bold text-foreground mb-2">$19/mo</p>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Everything in Pro</li>
              <li>Organization controls</li>
              <li>Audit logs</li>
              <li>IP indemnity</li>
            </ul>
          </div>
        </div>

        <Tip>
          Students and open source maintainers get Copilot Pro free through
          GitHub Education.
        </Tip>
      </DetailSection>
    </>
  );
}
