import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Shortcut,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function GhosttyPage() {
  return (
    <>
      <ToolHero
        name="Ghostty"
        description="GPU-accelerated terminal emulator created by Mitchell Hashimoto (HashiCorp founder). Blazingly fast, native macOS experience, and highly configurable through a simple config file."
        href="https://ghostty.org"
        tags={[
          { type: "free" },
          { type: "oss" },
          { type: "recommended", label: "Recommended" },
        ]}
        glow="green"
        installCommand="brew install --cask ghostty"
      />

      <DetailSection title="Why Ghostty?">
        <FeatureList
          features={[
            "GPU-accelerated rendering for buttery-smooth scrolling and animations",
            "Native macOS app - not Electron, feels like a first-class Mac citizen",
            "Zero config needed - works great out of the box",
            "Splits and tabs with intuitive keyboard shortcuts",
            "Ligature support for fonts like JetBrains Mono and Fira Code",
            "True color and undercurl support for modern CLI tools",
            "Shell integration for click-to-open URLs and smart selection",
          ]}
        />
      </DetailSection>

      <DetailSection title="Configuration">
        <p className="text-muted-foreground mb-6">
          Create a config file at <code className="text-primary">~/.config/ghostty/config</code>.
          No restart needed - changes apply automatically.
        </p>

        <ConfigBlock filename="~/.config/ghostty/config">
{`# Font - Use Nerd Font for icons in eza, starship, etc.
font-family = "JetBrains Mono Nerd Font"
font-size = 14
font-thicken = true

# Theme - Catppuccin Mocha for consistency with Starship and delta
theme = catppuccin-mocha
background-opacity = 0.95

# Window
window-padding-x = 12
window-padding-y = 8
window-decoration = true
macos-titlebar-style = tabs

# Cursor
cursor-style = block
cursor-style-blink = false

# Shell integration (enables click-to-open, smart selection)
shell-integration = zsh
shell-integration-features = cursor,sudo,title

# Mouse
mouse-hide-while-typing = true
copy-on-select = clipboard

# Scrollback
scrollback-limit = 10000

# Key bindings (fix Ctrl+Enter for some apps)
keybind = ctrl+enter=text:\\x1b[13;5u`}
        </ConfigBlock>

        <Tip>
          This config uses the same Catppuccin Mocha theme as Starship and delta for a unified look.
          See the <a href="/#config" className="text-primary underline">Complete Configuration Files</a> section for all configs.
        </Tip>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Cmd", "D"]} description="Split pane vertically" />
          <Shortcut keys={["Cmd", "Shift", "D"]} description="Split pane horizontally" />
          <Shortcut keys={["Cmd", "["]} description="Navigate to previous pane" />
          <Shortcut keys={["Cmd", "]"]} description="Navigate to next pane" />
          <Shortcut keys={["Cmd", "T"]} description="New tab" />
          <Shortcut keys={["Cmd", "W"]} description="Close pane/tab" />
          <Shortcut keys={["Cmd", "+"]} description="Increase font size" />
          <Shortcut keys={["Cmd", "-"]} description="Decrease font size" />
          <Shortcut keys={["Cmd", "K"]} description="Clear scrollback" />
          <Shortcut keys={["Cmd", "Shift", "Enter"]} description="Toggle fullscreen" />
        </div>
      </DetailSection>

      <DetailSection title="Themes">
        <p className="text-muted-foreground mb-4">
          Ghostty comes with many built-in themes. You can also create custom themes.
        </p>

        <CodeBlock language="bash">
          <Comment># List available themes</Comment>
          {"\n"}
          <Cmd>ls</Cmd> /Applications/Ghostty.app/Contents/Resources/ghostty/themes
          {"\n\n"}
          <Comment># Popular themes to try</Comment>
          {"\n"}
          <Comment># In your config file:</Comment>
          {"\n"}
          theme = catppuccin-mocha{"\n"}
          theme = tokyonight{"\n"}
          theme = dracula{"\n"}
          theme = nord{"\n"}
          theme = gruvbox-dark
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Shell Integration">
        <p className="text-muted-foreground mb-4">
          Shell integration enables advanced features like click-to-open URLs,
          command tracking, and smart text selection.
        </p>

        <CodeBlock language="bash">
          <Comment># Add to your ~/.zshrc (usually automatic)</Comment>
          {"\n"}
          <Cmd>if</Cmd> [[ -n <Str>&quot;$GHOSTTY_RESOURCES_DIR&quot;</Str> ]]; <Cmd>then</Cmd>
          {"\n"}
          {"  "}<Cmd>source</Cmd> <Str>&quot;$GHOSTTY_RESOURCES_DIR/shell-integration/zsh/ghostty-integration&quot;</Str>
          {"\n"}
          <Cmd>fi</Cmd>
        </CodeBlock>

        <Tip>
          If URLs aren&apos;t clickable, make sure shell integration is enabled in your config
          and the integration script is sourced in your shell config.
        </Tip>
      </DetailSection>

      <DetailSection title="Troubleshooting">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Ctrl+Enter not working?</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Add this keybinding to send the proper escape sequence:
            </p>
            <code className="text-sm text-primary font-mono">
              keybind = ctrl+enter=text:\x1b[13;5u
            </code>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Font rendering issues?</h4>
            <p className="text-sm text-muted-foreground">
              Try enabling <code className="text-primary">font-thicken = true</code> for
              bolder text rendering on Retina displays.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Config not loading?</h4>
            <p className="text-sm text-muted-foreground">
              Run <code className="text-primary">ghostty +show-config</code> to see active
              configuration and debug any issues.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
