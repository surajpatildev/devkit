import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";

export default function ClaudeDesktopPage() {
  return (
    <>
      <ToolHero
        name="Claude Desktop"
        description="The native macOS app for Claude. Drag and drop files, take screenshots, use voice input, and extend with MCP servers for external tool access."
        href="https://claude.ai/download"
        tags={[
          { type: "free", label: "Free tier" },
          { type: "paid", label: "Pro/Max" },
        ]}
        glow="purple"
        installCommand="brew install --cask claude"
        downloadUrl="https://claude.ai/download"
      />

      <DetailSection title="Why Claude Desktop?">
        <FeatureList
          features={[
            "Native macOS app - fast and responsive",
            "Drag and drop files, images, PDFs for analysis",
            "Screenshot capture with Cmd+Shift+5",
            "Voice input with Caps Lock",
            "MCP servers for GitHub, databases, file access",
            "Projects to organize conversations",
            "Works offline with downloaded conversations",
          ]}
        />
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Cmd", "N"]} description="New conversation" />
          <Shortcut keys={["Cmd", "Shift", "N"]} description="New project" />
          <Shortcut keys={["Cmd", "K"]} description="Quick switcher" />
          <Shortcut keys={["Caps Lock"]} description="Voice input (hold)" />
          <Shortcut keys={["Cmd", "Shift", "5"]} description="Screenshot to Claude" />
          <Shortcut keys={["Cmd", "Enter"]} description="Send message" />
          <Shortcut keys={["Cmd", "["]} description="Previous conversation" />
          <Shortcut keys={["Cmd", "]"]} description="Next conversation" />
        </div>
      </DetailSection>

      <DetailSection title="MCP Servers">
        <p className="text-muted-foreground mb-4">
          Model Context Protocol (MCP) extends Claude Desktop with external tools.
          Configure in <code className="text-primary">~/Library/Application Support/Claude/claude_desktop_config.json</code>
        </p>

        <ConfigBlock filename="claude_desktop_config.json">
{`{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/Documents",
        "/Users/yourname/Developer"
      ]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_..."
      }
    },
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}`}
        </ConfigBlock>

        <Tip>
          After configuring MCP servers, restart Claude Desktop. You will see
          the tools icon in the input area when servers are connected.
        </Tip>
      </DetailSection>

      <DetailSection title="Useful MCP Servers">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Filesystem</h4>
            <p className="text-sm text-muted-foreground">
              Read and write files in specified directories.
              Great for working with documents and code.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">GitHub</h4>
            <p className="text-sm text-muted-foreground">
              Search repos, read issues and PRs, create comments.
              Requires a personal access token.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Memory</h4>
            <p className="text-sm text-muted-foreground">
              Persistent key-value storage. Claude can remember
              information across conversations.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Brave Search</h4>
            <p className="text-sm text-muted-foreground">
              Web search capability. Let Claude search the web
              for current information.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Voice Input">
        <p className="text-muted-foreground mb-4">
          Hold Caps Lock to speak your message. Claude will transcribe and send it.
        </p>

        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Tips for Voice</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Hold Caps Lock while speaking, release when done</li>
              <li>Speak clearly and at a normal pace</li>
              <li>You can edit the transcription before sending</li>
              <li>Works offline using on-device transcription</li>
            </ul>
          </div>
        </div>

        <Tip>
          Remap Caps Lock to something else? You can change the voice key in
          Claude Desktop settings.
        </Tip>
      </DetailSection>

      <DetailSection title="Projects">
        <p className="text-muted-foreground mb-4">
          Organize related conversations into Projects. Each project can have
          its own context and instructions.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Creating Projects</h4>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Click the + button in the sidebar</li>
              <li>Choose &quot;New Project&quot;</li>
              <li>Name it and add optional instructions</li>
              <li>Add files or context that apply to all conversations</li>
            </ol>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Project Ideas</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>&quot;Work Project&quot; with codebase context</li>
              <li>&quot;Writing&quot; with your writing style guide</li>
              <li>&quot;Learning&quot; for study sessions</li>
              <li>&quot;Research&quot; for ongoing investigations</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Tips & Tricks">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Quick File Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Drag any file onto the Claude window. Works with PDFs, images,
              code files, spreadsheets, and more.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Screenshot Workflow</h4>
            <p className="text-sm text-muted-foreground">
              Press Cmd+Shift+5, select area, and it goes directly to Claude.
              Great for asking about UI, errors, or diagrams.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Quick Switcher</h4>
            <p className="text-sm text-muted-foreground">
              Press Cmd+K to quickly search and switch between conversations
              and projects.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
