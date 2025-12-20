import {
  ToolHero,
  DetailSection,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function RaycastPage() {
  return (
    <>
      <ToolHero
        name="Raycast"
        description="A blazingly fast, extensible launcher that replaces Spotlight. Clipboard history, snippets, window management, and thousands of extensions for your favorite tools."
        href="https://raycast.com"
        tags={[
          { type: "free" },
          { type: "paid", label: "Pro $8/mo" },
          { type: "essential", label: "Essential" },
        ]}
        glow="purple"
        installCommand="brew install --cask raycast"
      />

      <DetailSection title="Why Raycast?">
        <FeatureList
          features={[
            "Lightning fast app launcher and file search",
            "Clipboard history with images and links",
            "Text snippets with variables and placeholders",
            "Window management with keyboard shortcuts",
            "Calculator, unit conversions, timezone lookups",
            "Extensions for GitHub, Jira, Linear, Notion, and more",
            "AI chat and commands (Pro feature)",
          ]}
        />

      </DetailSection>

      <DetailSection title="Replace Spotlight with Raycast">
        <p className="text-muted-foreground mb-4">
          To use Cmd+Space for Raycast instead of Spotlight, follow these steps:
        </p>

        <div className="space-y-3 mb-4">
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center">1</span>
            <p className="text-sm text-muted-foreground">
              Open <strong className="text-foreground">System Settings</strong> → <strong className="text-foreground">Keyboard</strong> → <strong className="text-foreground">Keyboard Shortcuts</strong>
            </p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center">2</span>
            <p className="text-sm text-muted-foreground">
              Click <strong className="text-foreground">Spotlight</strong> in the sidebar
            </p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center">3</span>
            <p className="text-sm text-muted-foreground">
              Uncheck or change the shortcut for <strong className="text-foreground">&quot;Show Spotlight search&quot;</strong> (Cmd+Space)
            </p>
          </div>
          <div className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary text-sm flex items-center justify-center">4</span>
            <p className="text-sm text-muted-foreground">
              Open <strong className="text-foreground">Raycast Settings</strong> → <strong className="text-foreground">General</strong> → Set Raycast Hotkey to <strong className="text-foreground">Cmd+Space</strong>
            </p>
          </div>
        </div>

        <Tip>
          You can also disable Spotlight entirely via System Settings → Siri &amp; Spotlight
          if you want Raycast to handle all searches.
        </Tip>
      </DetailSection>

      <DetailSection title="Recommended Extensions">
        <p className="text-muted-foreground mb-4">
          Install extensions from the Raycast Store (open Raycast → type &quot;Store&quot;).
        </p>

        <h4 className="font-medium text-foreground mb-3 mt-6">Browser Integration</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Zen Browser</h4>
            <p className="text-sm text-muted-foreground">
              Search and open tabs, bookmarks, and history from Zen Browser. Perfect if you use
              Zen as your daily driver.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Helium</h4>
            <p className="text-sm text-muted-foreground">
              Navigate tabs, bookmarks, and search the web in the lightweight Helium browser.
              Open-source Chromium-based browser integration.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Browser Bookmarks</h4>
            <p className="text-sm text-muted-foreground">
              Search bookmarks across Chrome, Safari, Firefox, Arc, and more from one place.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Browser Tabs</h4>
            <p className="text-sm text-muted-foreground">
              Search and switch between tabs across all your open browsers.
            </p>
          </div>
        </div>

        <h4 className="font-medium text-foreground mb-3">Developer Must-Haves</h4>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Port Manager</h4>
            <p className="text-sm text-muted-foreground">
              List open ports and kill processes using them. Essential for web development
              when ports get stuck. Also shows in menu bar.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Kill Port</h4>
            <p className="text-sm text-muted-foreground">
              Quickly release a port by typing the port number. Faster than lsof + kill.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">GitHub</h4>
            <p className="text-sm text-muted-foreground">
              Search repos, PRs, issues. Create issues quickly. View notifications.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Visual Studio Code</h4>
            <p className="text-sm text-muted-foreground">
              Open recent projects. Search workspaces. Launch directly.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Tailwind CSS</h4>
            <p className="text-sm text-muted-foreground">
              Search Tailwind classes, colors, and documentation. Great for quick lookups.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">JSON to TypeScript</h4>
            <p className="text-sm text-muted-foreground">
              Paste JSON and get TypeScript interfaces instantly. Huge time saver.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Brew</h4>
            <p className="text-sm text-muted-foreground">
              Search and install Homebrew packages directly from Raycast.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Vercel</h4>
            <p className="text-sm text-muted-foreground">
              Deploy and manage Vercel projects. Check deployment status and logs.
            </p>
          </div>
        </div>

        <h4 className="font-medium text-foreground mb-3">Productivity</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">1Password</h4>
            <p className="text-sm text-muted-foreground">
              Search and copy passwords. Generate new passwords. Autofill anywhere.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Notion</h4>
            <p className="text-sm text-muted-foreground">
              Quick capture to Notion. Search pages. Create new pages.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Linear</h4>
            <p className="text-sm text-muted-foreground">
              Create and search issues. Update status. Perfect for quick task management.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Todoist</h4>
            <p className="text-sm text-muted-foreground">
              Create tasks, check due items, and manage your todo list without context switching.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">TinyPNG</h4>
            <p className="text-sm text-muted-foreground">
              Compress images directly from Raycast. Select images and shrink them instantly.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Speedtest</h4>
            <p className="text-sm text-muted-foreground">
              Check your internet speed without opening a browser. Quick and simple.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Built-in Features">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <Shortcut keys={["Cmd", "Space"]} description="Open Raycast" />
          <Shortcut keys={["Cmd", "Shift", "V"]} description="Clipboard History" />
          <Shortcut keys={["Ctrl", "Opt", "Left"]} description="Window left half" />
          <Shortcut keys={["Ctrl", "Opt", "Right"]} description="Window right half" />
          <Shortcut keys={["Ctrl", "Opt", "Enter"]} description="Maximize window" />
          <Shortcut keys={["Cmd", "."]} description="Open snippets" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Clipboard History</h4>
            <p className="text-sm text-muted-foreground">
              Access your last copied items. Supports text, images, links, and files.
              Search through history instantly.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Snippets</h4>
            <p className="text-sm text-muted-foreground">
              Save text templates with placeholders. Use {"{cursor}"} for cursor position,
              {"{date}"} for current date, and more.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Window Management</h4>
            <p className="text-sm text-muted-foreground">
              Snap windows to halves, thirds, quarters. Remembers positions.
              Works with multiple displays.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Calculator</h4>
            <p className="text-sm text-muted-foreground">
              Type math expressions directly. Unit conversions, currency exchange,
              timezone calculations.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Quicklinks">
        <p className="text-muted-foreground mb-4">
          Create shortcuts to frequently accessed URLs with dynamic parameters.
        </p>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-2">Example Quicklinks</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>
              <code className="text-primary">gh {"{argument}"}</code> →
              <code className="text-muted-foreground ml-2">https://github.com/{"{argument}"}</code>
            </li>
            <li>
              <code className="text-primary">npm {"{argument}"}</code> →
              <code className="text-muted-foreground ml-2">https://npmjs.com/package/{"{argument}"}</code>
            </li>
            <li>
              <code className="text-primary">mdn {"{argument}"}</code> →
              <code className="text-muted-foreground ml-2">https://developer.mozilla.org/search?q={"{argument}"}</code>
            </li>
          </ul>
        </div>
      </DetailSection>

      <DetailSection title="Script Commands">
        <p className="text-muted-foreground mb-4">
          Run custom scripts directly from Raycast. Create them at
          <code className="text-primary ml-2">~/.config/raycast/scripts/</code>
        </p>

        <CodeBlock language="bash">
          <Comment>#!/bin/bash</Comment>
          {"\n"}
          <Comment># @raycast.title Git Status</Comment>
          {"\n"}
          <Comment># @raycast.mode inline</Comment>
          {"\n"}
          <Comment># @raycast.packageName Developer</Comment>
          {"\n\n"}
          <Cmd>cd</Cmd> ~/Developer/current-project && git status <Flag>-s</Flag>
        </CodeBlock>
      </DetailSection>

      <DetailSection title="AI Features (Pro)">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">AI Chat</h4>
            <p className="text-sm text-muted-foreground">
              ChatGPT-like conversations. Ask questions, get explanations,
              draft emails and messages.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">AI Commands</h4>
            <p className="text-sm text-muted-foreground">
              Custom AI prompts that work on selected text.
              Fix grammar, translate, summarize, and more.
            </p>
          </div>
        </div>

        <Tip type="info">
          AI features require Raycast Pro ($8/month). The free tier includes
          all other features including extensions and clipboard history.
        </Tip>
      </DetailSection>

      <DetailSection title="Tips & Tricks">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Aliases</h4>
            <p className="text-sm text-muted-foreground">
              Right-click any command to set an alias. For example, set
              &quot;ch&quot; for Clipboard History for even faster access.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Hotkeys</h4>
            <p className="text-sm text-muted-foreground">
              Assign global hotkeys to any command. Open Settings → Extensions
              and set hotkeys for your most-used actions.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Fallback Commands</h4>
            <p className="text-sm text-muted-foreground">
              When no results found, Raycast offers fallback commands like
              &quot;Search Google&quot; or &quot;Search GitHub&quot;.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
