import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  ExtensionCard,
  Shortcut,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function VSCodePage() {
  return (
    <>
      <ToolHero
        name="VS Code"
        description="The most popular code editor with an incredible extension ecosystem. Highly customizable, feature-rich, and works with virtually any programming language."
        href="https://code.visualstudio.com"
        tags={[{ type: "free" }, { type: "oss" }]}
        glow="cyan"
        installCommand="brew install --cask visual-studio-code"
        downloadUrl="https://code.visualstudio.com/download"
      />

      <DetailSection title="Essential Extensions">
        <p className="text-muted-foreground mb-6">
          These extensions will dramatically improve your development experience.
          Install via the Extensions panel (Cmd+Shift+X) or command line.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <ExtensionCard
            name="GitHub Copilot"
            id="GitHub.copilot"
            description="AI pair programmer. Suggests code completions and entire functions."
            category="AI"
          />
          <ExtensionCard
            name="ESLint"
            id="dbaeumer.vscode-eslint"
            description="JavaScript/TypeScript linting with auto-fix on save."
            category="JavaScript"
          />
          <ExtensionCard
            name="Prettier"
            id="esbenp.prettier-vscode"
            description="Code formatter for JS, TS, CSS, JSON, and more."
            category="Formatting"
          />
          <ExtensionCard
            name="Python"
            id="ms-python.python"
            description="Python language support with IntelliSense and debugging."
            category="Python"
          />
          <ExtensionCard
            name="Pylance"
            id="ms-python.vscode-pylance"
            description="Fast, feature-rich Python language server."
            category="Python"
          />
          <ExtensionCard
            name="GitLens"
            id="eamodio.gitlens"
            description="Supercharge Git. Blame, history, and repository insights."
            category="Git"
          />
          <ExtensionCard
            name="Error Lens"
            id="usernamehw.errorlens"
            description="Highlight errors and warnings inline in your code."
            category="Productivity"
          />
          <ExtensionCard
            name="Auto Rename Tag"
            id="formulahendry.auto-rename-tag"
            description="Automatically rename paired HTML/XML tags."
            category="HTML"
          />
        </div>

        <CodeBlock language="bash">
          <Comment># Install extensions via CLI</Comment>
          {"\n"}
          <Cmd>code</Cmd> <Flag>--install-extension</Flag> GitHub.copilot
          {"\n"}
          <Cmd>code</Cmd> <Flag>--install-extension</Flag> dbaeumer.vscode-eslint
          {"\n"}
          <Cmd>code</Cmd> <Flag>--install-extension</Flag> esbenp.prettier-vscode
          {"\n"}
          <Cmd>code</Cmd> <Flag>--install-extension</Flag> ms-python.python
          {"\n"}
          <Cmd>code</Cmd> <Flag>--install-extension</Flag> ms-python.vscode-pylance
          {"\n"}
          <Cmd>code</Cmd> <Flag>--install-extension</Flag> eamodio.gitlens
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Recommended Settings">
        <p className="text-muted-foreground mb-4">
          Open settings with Cmd+, and click the JSON icon in the top right,
          or edit directly at <code className="text-primary">~/Library/Application Support/Code/User/settings.json</code>.
        </p>

        <ConfigBlock filename="settings.json">
{`{
  // Editor
  "editor.fontSize": 14,
  "editor.fontFamily": "JetBrains Mono, Menlo, monospace",
  "editor.fontLigatures": true,
  "editor.lineHeight": 1.6,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "editor.wordWrap": "on",
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "selection",
  "editor.smoothScrolling": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.stickyScroll.enabled": true,
  "editor.inlineSuggest.enabled": true,

  // Auto-save and formatting
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "explicit"
  },

  // Terminal
  "terminal.integrated.fontFamily": "JetBrains Mono",
  "terminal.integrated.fontSize": 13,

  // Files
  "files.trimTrailingWhitespace": true,
  "files.insertFinalNewline": true,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/node_modules": true,
    "**/__pycache__": true
  },

  // Workbench
  "workbench.startupEditor": "none",
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.editor.enablePreview": false,

  // Search
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.git": true
  },

  // Git
  "git.autofetch": true,
  "git.confirmSync": false,

  // Language-specific
  "[python]": {
    "editor.defaultFormatter": "ms-python.black-formatter",
    "editor.tabSize": 4
  },
  "[javascript][typescript][typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json][jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Cmd", "P"]} description="Quick Open (files)" />
          <Shortcut keys={["Cmd", "Shift", "P"]} description="Command Palette" />
          <Shortcut keys={["Cmd", "B"]} description="Toggle sidebar" />
          <Shortcut keys={["Cmd", "`"]} description="Toggle terminal" />
          <Shortcut keys={["Cmd", "D"]} description="Select next occurrence" />
          <Shortcut keys={["Cmd", "Shift", "L"]} description="Select all occurrences" />
          <Shortcut keys={["Alt", "Up/Down"]} description="Move line up/down" />
          <Shortcut keys={["Cmd", "/"]} description="Toggle comment" />
          <Shortcut keys={["Cmd", "Shift", "K"]} description="Delete line" />
          <Shortcut keys={["Ctrl", "-"]} description="Go back" />
          <Shortcut keys={["F12"]} description="Go to definition" />
          <Shortcut keys={["Shift", "F12"]} description="Find all references" />
        </div>
      </DetailSection>

      <DetailSection title="Recommended Themes">
        <div className="grid md:grid-cols-2 gap-4">
          <ExtensionCard
            name="One Dark Pro"
            id="zhuangtongfa.material-theme"
            description="Atom's iconic One Dark theme for VS Code."
            category="Theme"
          />
          <ExtensionCard
            name="Tokyo Night"
            id="enkia.tokyo-night"
            description="Clean, dark theme celebrating Tokyo's night lights."
            category="Theme"
          />
          <ExtensionCard
            name="Catppuccin"
            id="Catppuccin.catppuccin-vsc"
            description="Soothing pastel theme with multiple flavors."
            category="Theme"
          />
          <ExtensionCard
            name="Material Icon Theme"
            id="PKief.material-icon-theme"
            description="Beautiful file and folder icons."
            category="Icons"
          />
        </div>
      </DetailSection>

      <DetailSection title="Shell Integration">
        <p className="text-muted-foreground mb-4">
          Enable the <code className="text-primary">code</code> command in your terminal:
        </p>

        <CodeBlock language="bash">
          <Comment># Open Command Palette (Cmd+Shift+P)</Comment>
          {"\n"}
          <Comment># Type: Shell Command: Install &apos;code&apos; command in PATH</Comment>
          {"\n\n"}
          <Comment># Now you can use:</Comment>
          {"\n"}
          <Cmd>code</Cmd> . <Comment># Open current directory</Comment>
          {"\n"}
          <Cmd>code</Cmd> file.js <Comment># Open specific file</Comment>
          {"\n"}
          <Cmd>code</Cmd> <Flag>--diff</Flag> file1 file2 <Comment># Compare files</Comment>
        </CodeBlock>

        <Tip>
          Add <code className="text-primary">export EDITOR=&quot;code --wait&quot;</code> to your
          ~/.zshrc to use VS Code as your default git editor.
        </Tip>
      </DetailSection>

      <DetailSection title="Settings Sync">
        <p className="text-muted-foreground mb-4">
          VS Code can sync your settings, extensions, and keybindings across devices.
        </p>

        <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
          <li>Click the gear icon in the bottom left</li>
          <li>Select &quot;Turn on Settings Sync...&quot;</li>
          <li>Sign in with GitHub or Microsoft account</li>
          <li>Choose what to sync (all settings recommended)</li>
        </ol>
      </DetailSection>
    </>
  );
}
