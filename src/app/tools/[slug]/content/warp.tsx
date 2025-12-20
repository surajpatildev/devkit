import {
  ToolHero,
  DetailSection,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";

export default function WarpPage() {
  return (
    <>
      <ToolHero
        name="Warp"
        description="AI-powered terminal with block-based output, intelligent command suggestions, and a modern collaborative workflow. Built with Rust for native performance."
        href="https://warp.dev"
        tags={[
          { type: "free", label: "Free tier" },
          { type: "paid", label: "Pro $15/mo" },
        ]}
        glow="cyan"
        installCommand="brew install --cask warp"
        downloadUrl="https://warp.dev"
      />

      <DetailSection title="Why Warp?">
        <FeatureList
          features={[
            "Block-based output - each command is its own editable block",
            "Built-in AI assistant - ask questions about commands directly",
            "Command palette with fuzzy search for quick actions",
            "Smart autocompletions based on man pages and your history",
            "Workflows - save and share command sequences with your team",
            "Modern text editing - select, copy, and edit like a text editor",
            "Native performance - built with Rust, not Electron",
          ]}
        />
      </DetailSection>

      <DetailSection title="Key Features">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">AI Assistant</h4>
            <p className="text-sm text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 text-xs bg-muted/50 rounded">Ctrl+`</kbd> to
              ask questions about commands, get explanations, or generate complex command lines.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Blocks</h4>
            <p className="text-sm text-muted-foreground">
              Each command and its output is a separate block. Click to select,
              copy just the output, or share the entire block.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Workflows</h4>
            <p className="text-sm text-muted-foreground">
              Save multi-step commands as reusable workflows. Share with your team
              or keep them personal for repeated tasks.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Command Palette</h4>
            <p className="text-sm text-muted-foreground">
              Press <kbd className="px-1.5 py-0.5 text-xs bg-muted/50 rounded">Cmd+P</kbd> to
              access any Warp feature, settings, or action instantly.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Ctrl", "`"]} description="Open AI assistant" />
          <Shortcut keys={["Cmd", "P"]} description="Command palette" />
          <Shortcut keys={["Cmd", "D"]} description="Split pane right" />
          <Shortcut keys={["Cmd", "Shift", "D"]} description="Split pane down" />
          <Shortcut keys={["Cmd", "Enter"]} description="Toggle block selection" />
          <Shortcut keys={["Cmd", "Shift", "C"]} description="Copy block output" />
          <Shortcut keys={["Cmd", "R"]} description="Open workflows" />
          <Shortcut keys={["Up"]} description="Navigate command history" />
          <Shortcut keys={["Cmd", "K"]} description="Clear terminal" />
        </div>
      </DetailSection>

      <DetailSection title="Settings & Customization">
        <p className="text-muted-foreground mb-4">
          Access settings via <kbd className="px-1.5 py-0.5 text-xs bg-muted/50 rounded">Cmd+,</kbd> or
          the command palette.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Recommended Settings</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Enable &quot;Show command suggestions&quot; for smart autocomplete</li>
              <li>Set your preferred theme (many built-in options)</li>
              <li>Configure font and font size (JetBrains Mono recommended)</li>
              <li>Enable &quot;Open links on click&quot; for clickable URLs</li>
            </ul>
          </div>
        </div>

        <Tip type="info">
          Warp syncs settings across devices when you sign in. Your workflows,
          themes, and preferences follow you everywhere.
        </Tip>
      </DetailSection>

      <DetailSection title="MCP Integration">
        <p className="text-muted-foreground mb-4">
          Warp supports the Model Context Protocol (MCP) for connecting AI assistants
          to external tools and data sources.
        </p>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Setting Up MCP</h4>
          <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
            <li>Open Settings → AI → MCP Servers</li>
            <li>Add server configurations (GitHub, databases, etc.)</li>
            <li>The AI assistant can now access these tools</li>
          </ol>
        </div>
      </DetailSection>

      <DetailSection title="Free vs Pro">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-emerald-400 mb-2">Free Tier</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Unlimited terminal usage</li>
              <li>Basic AI requests</li>
              <li>Personal workflows</li>
              <li>All keyboard shortcuts</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Pro ($15/mo)</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Unlimited AI requests</li>
              <li>Team workflows</li>
              <li>Priority support</li>
              <li>Advanced AI models</li>
            </ul>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
