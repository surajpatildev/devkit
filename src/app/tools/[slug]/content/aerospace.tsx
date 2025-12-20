import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function AeroSpacePage() {
  return (
    <>
      <ToolHero
        name="AeroSpace"
        description="An i3-like tiling window manager for macOS. Windows automatically tile, workspaces are keyboard-driven, and everything stays organized. No SIP disable required."
        href="https://github.com/nikitabobko/AeroSpace"
        tags={[{ type: "free" }, { type: "oss" }]}
        glow="cyan"
        installCommand="brew install --cask aerospace"
      />

      <DetailSection title="Why AeroSpace?">
        <FeatureList
          features={[
            "Windows auto-tile - no manual arrangement needed",
            "i3/Sway-inspired keybindings and behavior",
            "10 workspaces accessible via Option+1-0",
            "Tree-based window layout model",
            "No SIP disable - works out of the box",
            "TOML configuration - easy to customize",
            "Floating mode for dialogs and popups",
          ]}
        />

        <Tip>
          AeroSpace is different from Rectangle/Magnet. Instead of manual
          snapping, windows automatically arrange themselves in a tree layout.
        </Tip>
      </DetailSection>

      <DetailSection title="Key Concepts">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Tiling</h4>
            <p className="text-sm text-muted-foreground">
              Windows automatically split the available space. New windows tile
              next to existing ones. No overlap, no wasted space.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Workspaces</h4>
            <p className="text-sm text-muted-foreground">
              10 virtual desktops (1-0). Switch instantly with keyboard.
              Each monitor can show a different workspace.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Split Direction</h4>
            <p className="text-sm text-muted-foreground">
              Control whether new windows split horizontally or vertically.
              Default follows the longest dimension.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Floating</h4>
            <p className="text-sm text-muted-foreground">
              Some windows (dialogs, preferences) float above tiles.
              Toggle any window between tiling and floating.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Essential Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-foreground mb-4">Workspaces</h4>
          <Shortcut keys={["Alt", "1-0"]} description="Switch to workspace 1-10" />
          <Shortcut keys={["Alt", "Shift", "1-0"]} description="Move window to workspace" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-foreground mb-4">Focus</h4>
          <Shortcut keys={["Alt", "H"]} description="Focus left" />
          <Shortcut keys={["Alt", "J"]} description="Focus down" />
          <Shortcut keys={["Alt", "K"]} description="Focus up" />
          <Shortcut keys={["Alt", "L"]} description="Focus right" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-foreground mb-4">Move Windows</h4>
          <Shortcut keys={["Alt", "Shift", "H"]} description="Move window left" />
          <Shortcut keys={["Alt", "Shift", "J"]} description="Move window down" />
          <Shortcut keys={["Alt", "Shift", "K"]} description="Move window up" />
          <Shortcut keys={["Alt", "Shift", "L"]} description="Move window right" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-4">Layout</h4>
          <Shortcut keys={["Alt", "/"]} description="Toggle split direction" />
          <Shortcut keys={["Alt", ","]} description="Toggle accordion mode" />
          <Shortcut keys={["Alt", "F"]} description="Toggle fullscreen" />
          <Shortcut keys={["Alt", "Shift", "F"]} description="Toggle floating" />
        </div>
      </DetailSection>

      <DetailSection title="Configuration">
        <p className="text-muted-foreground mb-4">
          AeroSpace uses TOML for configuration at
          <code className="text-primary ml-2">~/.aerospace.toml</code>
        </p>

        <ConfigBlock filename="~/.aerospace.toml">
{`# Start AeroSpace at login
start-at-login = true

# Gaps between windows
gaps.inner = 8
gaps.outer = 8

# Mouse follows focus
on-focused-monitor-changed = ['move-mouse monitor-lazy-center']

# Default layout
default-root-container-layout = 'tiles'
default-root-container-orientation = 'auto'

# Keyboard mappings
[mode.main.binding]
# Workspaces
alt-1 = 'workspace 1'
alt-2 = 'workspace 2'
alt-3 = 'workspace 3'
alt-4 = 'workspace 4'
alt-5 = 'workspace 5'
alt-6 = 'workspace 6'
alt-7 = 'workspace 7'
alt-8 = 'workspace 8'
alt-9 = 'workspace 9'
alt-0 = 'workspace 10'

# Move to workspace
alt-shift-1 = 'move-node-to-workspace 1'
alt-shift-2 = 'move-node-to-workspace 2'
alt-shift-3 = 'move-node-to-workspace 3'
# ... etc

# Focus
alt-h = 'focus left'
alt-j = 'focus down'
alt-k = 'focus up'
alt-l = 'focus right'

# Move
alt-shift-h = 'move left'
alt-shift-j = 'move down'
alt-shift-k = 'move up'
alt-shift-l = 'move right'

# Layout
alt-slash = 'layout tiles horizontal vertical'
alt-comma = 'layout accordion horizontal vertical'
alt-f = 'fullscreen'
alt-shift-f = 'layout floating tiling'

# Resize
alt-shift-minus = 'resize smart -50'
alt-shift-equal = 'resize smart +50'

# App rules (optional)
[[on-window-detected]]
if.app-id = 'com.apple.finder'
run = 'layout floating'

[[on-window-detected]]
if.app-id = 'com.apple.systempreferences'
run = 'layout floating'`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Workflow Tips">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Workspace Strategy</h4>
            <p className="text-sm text-muted-foreground">
              Assign workspaces to activities: 1=Terminal, 2=Editor, 3=Browser,
              4=Chat, etc. This creates muscle memory for instant switching.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Master-Stack Layout</h4>
            <p className="text-sm text-muted-foreground">
              Use horizontal split for main window, then vertical for the rest.
              Creates a &quot;master&quot; window on the left with a stack on the right.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Multiple Monitors</h4>
            <p className="text-sm text-muted-foreground">
              Each monitor shows one workspace. Use Alt+Tab to focus between monitors,
              or Alt+number to switch the current monitor&apos;s workspace.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Troubleshooting">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Windows not tiling?</h4>
            <p className="text-sm text-muted-foreground">
              Some apps (like System Preferences) default to floating.
              Press Alt+Shift+F to toggle tiling, or add an app rule.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Keybindings not working?</h4>
            <p className="text-sm text-muted-foreground">
              Grant accessibility permissions in System Settings → Privacy →
              Accessibility. Restart AeroSpace after.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Reload config</h4>
            <CodeBlock language="bash">
              <Comment># Reload configuration</Comment>
              {"\n"}
              <Cmd>aerospace</Cmd> reload-config
            </CodeBlock>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
