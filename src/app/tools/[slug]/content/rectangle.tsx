import {
  ToolHero,
  DetailSection,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";

export default function RectanglePage() {
  return (
    <>
      <ToolHero
        name="Rectangle"
        description="Move and resize windows in macOS using keyboard shortcuts or snap areas. Simple, powerful, and completely free. The spiritual successor to Spectacle."
        href="https://rectangleapp.com"
        tags={[{ type: "free" }, { type: "oss" }]}
        glow="green"
        installCommand="brew install --cask rectangle"
        downloadUrl="https://rectangleapp.com"
      />

      <DetailSection title="Why Rectangle?">
        <FeatureList
          features={[
            "Keyboard shortcuts for window halves, thirds, and quarters",
            "Snap areas - drag windows to screen edges",
            "Multi-monitor support with easy window moving",
            "Cycle through sizes with repeated shortcuts",
            "Completely free and open source",
            "No login or account required",
            "Lightweight - minimal CPU and memory usage",
          ]}
        />

        <Tip>
          After installing, grant Rectangle accessibility permissions in
          System Settings → Privacy & Security → Accessibility.
        </Tip>
      </DetailSection>

      <DetailSection title="Essential Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-foreground mb-4">Halves</h4>
          <Shortcut keys={["Ctrl", "Opt", "Left"]} description="Left half" />
          <Shortcut keys={["Ctrl", "Opt", "Right"]} description="Right half" />
          <Shortcut keys={["Ctrl", "Opt", "Up"]} description="Top half" />
          <Shortcut keys={["Ctrl", "Opt", "Down"]} description="Bottom half" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-foreground mb-4">Corners</h4>
          <Shortcut keys={["Ctrl", "Opt", "U"]} description="Top left quarter" />
          <Shortcut keys={["Ctrl", "Opt", "I"]} description="Top right quarter" />
          <Shortcut keys={["Ctrl", "Opt", "J"]} description="Bottom left quarter" />
          <Shortcut keys={["Ctrl", "Opt", "K"]} description="Bottom right quarter" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
          <h4 className="font-medium text-foreground mb-4">Sizing</h4>
          <Shortcut keys={["Ctrl", "Opt", "Enter"]} description="Maximize" />
          <Shortcut keys={["Ctrl", "Opt", "Backspace"]} description="Restore (undo)" />
          <Shortcut keys={["Ctrl", "Opt", "C"]} description="Center" />
          <Shortcut keys={["Ctrl", "Opt", "F"]} description="Almost maximize" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-4">Thirds</h4>
          <Shortcut keys={["Ctrl", "Opt", "D"]} description="First third" />
          <Shortcut keys={["Ctrl", "Opt", "E"]} description="Center third" />
          <Shortcut keys={["Ctrl", "Opt", "T"]} description="Last third" />
          <Shortcut keys={["Ctrl", "Opt", "F"]} description="First two thirds" />
          <Shortcut keys={["Ctrl", "Opt", "G"]} description="Last two thirds" />
        </div>
      </DetailSection>

      <DetailSection title="Multi-Monitor">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Ctrl", "Opt", "Cmd", "Right"]} description="Next display" />
          <Shortcut keys={["Ctrl", "Opt", "Cmd", "Left"]} description="Previous display" />
          <Shortcut keys={["Ctrl", "Opt", "Cmd", "N"]} description="Move to next display + maximize" />
        </div>

        <Tip>
          Rectangle remembers window positions per display, so moving a window
          to another monitor keeps its relative position.
        </Tip>
      </DetailSection>

      <DetailSection title="Snap Areas">
        <p className="text-muted-foreground mb-4">
          Drag a window to the edge of your screen to snap it into position.
          Enable in Rectangle Preferences → Snapping.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Edge Snapping</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Left edge → Left half</li>
              <li>Right edge → Right half</li>
              <li>Top edge → Maximize</li>
              <li>Corners → Quarter screen</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Options</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Show snap preview overlay</li>
              <li>Hold modifier key to activate</li>
              <li>Adjust trigger area size</li>
              <li>Customize snap positions</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Cycle Sizes">
        <p className="text-muted-foreground mb-4">
          Press the same shortcut multiple times to cycle through sizes.
          For example, pressing Ctrl+Opt+Left repeatedly cycles through:
        </p>

        <div className="flex gap-2 flex-wrap">
          <span className="px-3 py-1 bg-card/50 border border-border/50 rounded text-sm">1/2</span>
          <span className="text-muted-foreground">→</span>
          <span className="px-3 py-1 bg-card/50 border border-border/50 rounded text-sm">2/3</span>
          <span className="text-muted-foreground">→</span>
          <span className="px-3 py-1 bg-card/50 border border-border/50 rounded text-sm">1/3</span>
          <span className="text-muted-foreground">→</span>
          <span className="px-3 py-1 bg-card/50 border border-border/50 rounded text-sm">1/2</span>
        </div>

        <Tip>
          Customize the cycle sizes in Preferences. You can add fourths, sixths,
          or any custom ratios.
        </Tip>
      </DetailSection>

      <DetailSection title="Recommended Settings">
        <p className="text-muted-foreground mb-4">
          Open Rectangle from the menu bar → Preferences.
        </p>

        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">General</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Launch on login: Enabled</li>
              <li>Check for updates automatically: Enabled</li>
              <li>Hide menu bar icon: Personal preference</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Gaps</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Gap between windows: 0-20px (try 8px)</li>
              <li>Gap at screen edges: Match window gap</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Rectangle Pro">
        <p className="text-muted-foreground mb-4">
          Rectangle Pro ($10 one-time) adds advanced features:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Pro Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>App-specific shortcuts</li>
              <li>Multiple snap layouts per edge</li>
              <li>Stash windows to edges</li>
              <li>Groups and pinned windows</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Free Version</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>All basic shortcuts</li>
              <li>Snap areas</li>
              <li>Multi-monitor support</li>
              <li>Size cycling</li>
            </ul>
          </div>
        </div>

        <Tip type="info">
          The free version of Rectangle has everything most users need.
          Pro is for power users who want advanced layouts.
        </Tip>
      </DetailSection>
    </>
  );
}
