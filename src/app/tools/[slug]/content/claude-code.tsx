import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function ClaudeCodePage() {
  return (
    <>
      <ToolHero
        name="Claude Code"
        description="An agentic coding assistant that lives in your terminal. Understands your entire codebase, can edit files, run commands, and manage git. Extend with MCP servers for external tools."
        href="https://claude.ai/product/claude-code"
        tags={[
          { type: "paid", label: "Pro $20+" },
          { type: "recommended", label: "Recommended" },
        ]}
        glow="purple"
        installCommand="curl -fsSL https://claude.ai/install.sh | bash"
      />

      <DetailSection title="Why Claude Code?">
        <FeatureList
          features={[
            "Understands your entire codebase through indexing",
            "Edits files directly with confirmation",
            "Runs terminal commands and tests",
            "Creates commits with proper messages",
            "Plans and executes multi-step tasks",
            "MCP integration for GitHub, databases, and more",
            "Works in any terminal - iTerm, Ghostty, Warp",
          ]}
        />
      </DetailSection>

      <DetailSection title="Getting Started">
        <CodeBlock language="bash">
          <Comment># Install Claude Code</Comment>
          {"\n"}
          <Cmd>curl</Cmd> <Flag>-fsSL</Flag> https://claude.ai/install.sh | bash
          {"\n\n"}
          <Comment># Navigate to your project</Comment>
          {"\n"}
          <Cmd>cd</Cmd> ~/Developer/my-project
          {"\n\n"}
          <Comment># Start Claude Code</Comment>
          {"\n"}
          <Cmd>claude</Cmd>
          {"\n\n"}
          <Comment># Or with a specific task</Comment>
          {"\n"}
          <Cmd>claude</Cmd> <Str>&quot;add tests for the auth module&quot;</Str>
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Slash Commands">
        <p className="text-muted-foreground mb-4">
          Use these commands while chatting with Claude Code:
        </p>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div><code className="text-primary">/help</code> - Show all commands</div>
            <div><code className="text-primary">/clear</code> - Clear conversation</div>
            <div><code className="text-primary">/compact</code> - Summarize context</div>
            <div><code className="text-primary">/cost</code> - Show token usage</div>
            <div><code className="text-primary">/status</code> - Show current state</div>
            <div><code className="text-primary">/doctor</code> - Check setup</div>
            <div><code className="text-primary">/config</code> - Open config</div>
            <div><code className="text-primary">/mcp</code> - Manage MCP servers</div>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="MCP Servers">
        <p className="text-muted-foreground mb-4">
          Model Context Protocol (MCP) lets Claude Code connect to external tools.
          Configure in <code className="text-primary">~/.claude/config.json</code>
        </p>

        <ConfigBlock filename="~/.claude/config.json">
{`{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres"],
      "env": {
        "POSTGRES_CONNECTION_STRING": "postgresql://..."
      }
    },
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/you/allowed-directory"
      ]
    }
  }
}`}
        </ConfigBlock>

        <Tip>
          After adding MCP servers, restart Claude Code. The AI can now search
          GitHub issues, query databases, and access files through these servers.
        </Tip>
      </DetailSection>

      <DetailSection title="Workflow Examples">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium text-foreground mb-2">Add a Feature</h4>
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">
                &quot;Add a dark mode toggle to the settings page. Use the existing
                theme context and add a button in the header.&quot;
              </code>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Fix a Bug</h4>
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">
                &quot;Users report that the login form doesn&apos;t show errors.
                Find the issue and fix it.&quot;
              </code>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Refactor Code</h4>
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">
                &quot;The auth module is getting complex. Split it into separate
                files for login, register, and password reset.&quot;
              </code>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Write Tests</h4>
            <div className="bg-card/50 border border-border/50 rounded-lg p-3">
              <code className="text-sm text-muted-foreground">
                &quot;Add unit tests for the cart module. Cover edge cases like
                empty cart, item limits, and discount codes.&quot;
              </code>
            </div>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Settings">
        <p className="text-muted-foreground mb-4">
          Customize Claude Code behavior in <code className="text-primary">~/.claude/settings.json</code>
        </p>

        <ConfigBlock filename="~/.claude/settings.json">
{`{
  "theme": "dark",
  "permissions": {
    "allow_file_edits": true,
    "allow_bash_commands": true,
    "allow_mcp_servers": true
  },
  "editor": "code --wait",
  "auto_compact": true
}`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Tips for Best Results">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Be Specific</h4>
            <p className="text-sm text-muted-foreground">
              Instead of &quot;fix the bug&quot;, say &quot;the login form doesn&apos;t validate
              email format - add validation using the existing validator&quot;.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Provide Context</h4>
            <p className="text-sm text-muted-foreground">
              Mention relevant files, frameworks, or patterns. &quot;We use React
              Query for data fetching&quot; helps Claude make better choices.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Review Changes</h4>
            <p className="text-sm text-muted-foreground">
              Claude shows diffs before applying. Review them carefully.
              Ask for modifications before accepting.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Use /compact</h4>
            <p className="text-sm text-muted-foreground">
              Long conversations use tokens. Use /compact to summarize
              and reduce context size while preserving important info.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
