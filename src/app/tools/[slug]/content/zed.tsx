import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function ZedPage() {
  return (
    <>
      <ToolHero
        name="Zed"
        description="A high-performance, multiplayer code editor from the creators of Atom. Built in Rust for native speed, with AI assistance and real-time collaboration built in."
        href="https://zed.dev"
        tags={[{ type: "free" }, { type: "oss" }]}
        glow="yellow"
        installCommand="brew install --cask zed"
        downloadUrl="https://zed.dev/download"
      />

      <DetailSection title="Why Zed?">
        <FeatureList
          features={[
            "Blazingly fast - written in Rust, starts in milliseconds",
            "Native macOS app - not Electron, true Metal rendering",
            "Built-in AI assistant with multiple provider support",
            "Real-time collaboration - pair program like Google Docs",
            "Multibuffer editing - view multiple files in one buffer",
            "Language server integration out of the box",
            "Vim mode with full keybinding support",
          ]}
        />
      </DetailSection>

      <DetailSection title="Configuration">
        <p className="text-muted-foreground mb-4">
          Zed uses JSON for configuration. Open settings with Cmd+, or edit
          <code className="text-primary ml-2">~/.config/zed/settings.json</code>.
        </p>

        <ConfigBlock filename="~/.config/zed/settings.json">
{`{
  // UI
  "theme": "One Dark",
  "ui_font_size": 14,
  "buffer_font_size": 14,
  "buffer_font_family": "JetBrains Mono",
  "buffer_line_height": "comfortable",

  // Editor behavior
  "tab_size": 2,
  "soft_wrap": "editor_width",
  "show_whitespaces": "selection",
  "format_on_save": "on",
  "autosave": "on_focus_change",

  // Vim mode
  "vim_mode": false,

  // AI Assistant
  "assistant": {
    "enabled": true,
    "version": "2",
    "default_model": {
      "provider": "anthropic",
      "model": "claude-3-5-sonnet-20241022"
    }
  },

  // Terminal
  "terminal": {
    "font_family": "JetBrains Mono",
    "font_size": 13,
    "line_height": "comfortable",
    "shell": {
      "program": "zsh"
    }
  },

  // Git
  "git": {
    "git_gutter": "tracked_files",
    "inline_blame": {
      "enabled": true
    }
  },

  // File types
  "file_types": {
    "Dockerfile": ["Dockerfile*"],
    "JSON": ["*.json", ".prettierrc", ".eslintrc"]
  }
}`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Cmd", "P"]} description="File finder" />
          <Shortcut keys={["Cmd", "Shift", "P"]} description="Command palette" />
          <Shortcut keys={["Cmd", "T"]} description="Symbol search" />
          <Shortcut keys={["Cmd", "Shift", "F"]} description="Project search" />
          <Shortcut keys={["Cmd", "B"]} description="Toggle sidebar" />
          <Shortcut keys={["Cmd", "`"]} description="Toggle terminal" />
          <Shortcut keys={["Cmd", "Shift", "E"]} description="Toggle file tree" />
          <Shortcut keys={["Cmd", "K", "Cmd", "S"]} description="Open shortcuts" />
          <Shortcut keys={["Ctrl", "Shift", "?"]} description="AI Assistant" />
          <Shortcut keys={["Cmd", "Enter"]} description="AI inline assist" />
        </div>
      </DetailSection>

      <DetailSection title="AI Assistant">
        <p className="text-muted-foreground mb-4">
          Zed has a built-in AI assistant that supports multiple providers.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Inline Assist</h4>
            <p className="text-sm text-muted-foreground">
              Select code and press Cmd+Enter to transform it with AI.
              Works for generation, refactoring, and explanations.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Assistant Panel</h4>
            <p className="text-sm text-muted-foreground">
              Press Ctrl+Shift+? to open the assistant panel for longer
              conversations and multi-step tasks.
            </p>
          </div>
        </div>

        <CodeBlock language="bash">
          <Comment># Set up Anthropic API key for Claude</Comment>
          {"\n"}
          <Cmd>export</Cmd> ANTHROPIC_API_KEY=<Str>&quot;sk-ant-...&quot;</Str>
          {"\n\n"}
          <Comment># Or set up OpenAI</Comment>
          {"\n"}
          <Cmd>export</Cmd> OPENAI_API_KEY=<Str>&quot;sk-...&quot;</Str>
        </CodeBlock>

        <Tip>
          Configure your preferred AI provider in Settings → Assistant.
          Zed supports Anthropic Claude, OpenAI, and Ollama for local models.
        </Tip>
      </DetailSection>

      <DetailSection title="Collaboration">
        <p className="text-muted-foreground mb-4">
          Zed has built-in real-time collaboration, no plugins needed.
        </p>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Start Collaborating</h4>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Sign in with GitHub (click avatar in title bar)</li>
              <li>Click &quot;Share Project&quot; in the title bar</li>
              <li>Share the link with collaborators</li>
              <li>They can join and edit in real-time</li>
            </ol>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>See collaborator cursors in real-time</li>
              <li>Follow mode to watch someone code</li>
              <li>Share terminals and run commands together</li>
              <li>Voice chat built-in (optional)</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Multibuffer">
        <p className="text-muted-foreground mb-4">
          Zed is multibuffer allows you to view excerpts from multiple files
          in a single scrollable view.
        </p>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Use Cases</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>Project-wide search results - edit in place</li>
            <li>View all usages of a symbol together</li>
            <li>Compare related code across files</li>
            <li>Diagnostic view for fixing multiple errors</li>
          </ul>
        </div>
      </DetailSection>

      <DetailSection title="Vim Mode">
        <p className="text-muted-foreground mb-4">
          Zed has excellent Vim emulation. Enable it in settings:
        </p>

        <ConfigBlock filename="~/.config/zed/settings.json">
{`{
  "vim_mode": true,
  "vim": {
    "use_system_clipboard": "always",
    "use_multiline_find": true
  }
}`}
        </ConfigBlock>

        <Tip>
          Customize Vim keybindings in <code className="text-primary">~/.config/zed/keymap.json</code>.
          Zed supports most Vim motions and commands.
        </Tip>
      </DetailSection>

      <DetailSection title="Themes">
        <p className="text-muted-foreground mb-4">
          Zed comes with many built-in themes. Change via Cmd+K, Cmd+T or in settings.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">One Dark</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Gruvbox Dark</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Tokyo Night</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Catppuccin</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Dracula</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Nord</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Solarized</div>
          <div className="bg-card/50 border border-border/50 rounded-lg p-2 text-center">Rosé Pine</div>
        </div>
      </DetailSection>
    </>
  );
}
