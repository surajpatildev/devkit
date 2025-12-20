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

export default function CursorPage() {
  return (
    <>
      <ToolHero
        name="Cursor"
        description="The AI-first code editor. Built on VS Code, Cursor adds powerful AI features like inline generation, codebase-aware chat, and predictive editing that understand your entire project."
        href="https://cursor.com"
        tags={[
          { type: "free", label: "Free tier" },
          { type: "paid", label: "Pro $20/mo" },
        ]}
        glow="purple"
        installCommand="brew install --cask cursor"
        downloadUrl="https://cursor.com/download"
      />

      <DetailSection title="Why Cursor?">
        <FeatureList
          features={[
            "Cmd+K to generate or edit code inline with natural language",
            "Cmd+L opens AI chat that understands your entire codebase",
            "Smart Tab completions predict your next edit",
            "Built on VS Code - all your extensions work",
            "Privacy mode keeps your code off training data",
            "Multiple AI models - Claude, GPT-4, and more",
            "Codebase indexing for context-aware suggestions",
          ]}
        />
      </DetailSection>

      <DetailSection title="Key AI Features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Cmd+K (Inline Edit)</h4>
            <p className="text-sm text-muted-foreground">
              Select code and press Cmd+K to transform it. Examples:
              &quot;add error handling&quot;, &quot;convert to async&quot;, &quot;add types&quot;.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Cmd+L (Chat)</h4>
            <p className="text-sm text-muted-foreground">
              Open the AI chat panel. Ask questions about your code, get explanations,
              or request multi-file changes.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Tab (Autocomplete)</h4>
            <p className="text-sm text-muted-foreground">
              Cursor predicts your next edit based on context. Press Tab to accept
              multi-line suggestions.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">@ Mentions</h4>
            <p className="text-sm text-muted-foreground">
              In chat, use @file, @folder, @codebase, or @docs to give the AI
              specific context.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <Shortcut keys={["Cmd", "K"]} description="Inline AI edit" />
          <Shortcut keys={["Cmd", "L"]} description="Open AI chat" />
          <Shortcut keys={["Cmd", "Shift", "L"]} description="Add selection to chat" />
          <Shortcut keys={["Cmd", "I"]} description="Composer (multi-file edit)" />
          <Shortcut keys={["Tab"]} description="Accept AI suggestion" />
          <Shortcut keys={["Cmd", "Enter"]} description="Submit chat/edit prompt" />
          <Shortcut keys={["Escape"]} description="Reject suggestion" />
          <Shortcut keys={["Cmd", "."]} description="Quick actions" />
        </div>
      </DetailSection>

      <DetailSection title="Cursor Rules">
        <p className="text-muted-foreground mb-4">
          Create a <code className="text-primary">.cursorrules</code> file in your project root
          to customize how Cursor AI behaves for your codebase.
        </p>

        <ConfigBlock filename=".cursorrules">
{`You are an expert developer working on this codebase.

Project context:
- This is a Next.js 14 app with TypeScript
- We use Tailwind CSS for styling
- State management with Zustand
- API calls with React Query

Code style:
- Use functional components with hooks
- Prefer named exports over default exports
- Use early returns for guard clauses
- Add TypeScript types, avoid 'any'
- Keep components small and focused

When generating code:
- Follow existing patterns in the codebase
- Add error handling for async operations
- Include loading states for data fetching
- Write self-documenting code with clear names`}
        </ConfigBlock>

        <Tip>
          Cursor reads .cursorrules automatically. You can also add project-specific
          rules in Settings → Features → Rules for AI.
        </Tip>
      </DetailSection>

      <DetailSection title="Recommended Settings">
        <p className="text-muted-foreground mb-4">
          Access Cursor settings via Cmd+, or Cursor → Settings → Cursor Settings.
        </p>

        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">AI Features</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Enable &quot;Copilot++&quot; for enhanced predictions</li>
              <li>Turn on &quot;Codebase Indexing&quot; for full context</li>
              <li>Set preferred model (Claude 3.5 Sonnet recommended)</li>
              <li>Enable &quot;Privacy Mode&quot; if needed</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Editor</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Most VS Code settings work the same</li>
              <li>Import settings from VS Code on first launch</li>
              <li>All VS Code extensions are compatible</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Python Development Setup">
        <p className="text-muted-foreground mb-4">
          Install these extensions for a complete Python development environment.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ExtensionCard
            name="Python"
            id="ms-python.python"
            description="Core Python support. IntelliSense, debugging, linting, Jupyter."
            category="Python"
          />
          <ExtensionCard
            name="Pylance"
            id="ms-python.vscode-pylance"
            description="Fast, feature-rich Python language server. Type checking, auto-imports."
            category="Python"
          />
          <ExtensionCard
            name="Ruff"
            id="charliermarsh.ruff"
            description="Blazing fast Python linter & formatter. Replaces flake8, isort, black."
            category="Python"
          />
          <ExtensionCard
            name="Python Debugger"
            id="ms-python.debugpy"
            description="Full debugging support with breakpoints, stepping, variable inspection."
            category="Python"
          />
          <ExtensionCard
            name="Jupyter"
            id="ms-toolsai.jupyter"
            description="Interactive notebooks in VS Code. Run cells, see outputs inline."
            category="Python"
          />
          <ExtensionCard
            name="Python Environment Manager"
            id="donjayamanne.python-environment-manager"
            description="Manage virtual environments, conda, and interpreters."
            category="Python"
          />
          <ExtensionCard
            name="autoDocstring"
            id="njpwerner.autodocstring"
            description="Generate Python docstrings automatically. Google, NumPy, Sphinx formats."
            category="Python"
          />
          <ExtensionCard
            name="Python Indent"
            id="KevinRose.vsc-python-indent"
            description="Correct Python indentation when pressing Enter."
            category="Python"
          />
        </div>

        <CodeBlock language="bash">
          <Comment># Install Python extensions via CLI</Comment>
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> ms-python.python
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> ms-python.vscode-pylance
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> charliermarsh.ruff
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> ms-python.debugpy
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> ms-toolsai.jupyter
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Node.js Development Setup">
        <p className="text-muted-foreground mb-4">
          Complete Node.js and TypeScript development environment.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <ExtensionCard
            name="ESLint"
            id="dbaeumer.vscode-eslint"
            description="JavaScript/TypeScript linting with auto-fix on save."
            category="JavaScript"
          />
          <ExtensionCard
            name="Prettier"
            id="esbenp.prettier-vscode"
            description="Code formatter for JS, TS, CSS, JSON, HTML, and more."
            category="Formatting"
          />
          <ExtensionCard
            name="TypeScript Importer"
            id="pmneo.tsimporter"
            description="Auto-import TypeScript modules as you type."
            category="TypeScript"
          />
          <ExtensionCard
            name="Pretty TypeScript Errors"
            id="yoavbls.pretty-ts-errors"
            description="Human-readable TypeScript errors with explanations."
            category="TypeScript"
          />
          <ExtensionCard
            name="npm Intellisense"
            id="christian-kohler.npm-intellisense"
            description="Autocomplete npm modules in import statements."
            category="JavaScript"
          />
          <ExtensionCard
            name="Path Intellisense"
            id="christian-kohler.path-intellisense"
            description="Autocomplete filenames in import paths."
            category="Productivity"
          />
          <ExtensionCard
            name="Auto Rename Tag"
            id="formulahendry.auto-rename-tag"
            description="Auto rename paired HTML/JSX tags."
            category="HTML"
          />
          <ExtensionCard
            name="ES7+ Snippets"
            id="dsznajder.es7-react-redux-react-native-snippets"
            description="React/Redux snippets for modern JavaScript."
            category="React"
          />
        </div>

        <CodeBlock language="bash">
          <Comment># Install Node.js extensions via CLI</Comment>
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> dbaeumer.vscode-eslint
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> esbenp.prettier-vscode
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> yoavbls.pretty-ts-errors
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> christian-kohler.npm-intellisense
          {"\n"}
          <Cmd>cursor</Cmd> <Flag>--install-extension</Flag> christian-kohler.path-intellisense
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Essential Extensions">
        <p className="text-muted-foreground mb-4">
          Core extensions for any development workflow.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <ExtensionCard
            name="GitLens"
            id="eamodio.gitlens"
            description="Git superpowers. Blame, history, file changes, repository insights."
            category="Git"
          />
          <ExtensionCard
            name="Error Lens"
            id="usernamehw.errorlens"
            description="Highlight errors and warnings inline in your code."
            category="Productivity"
          />
          <ExtensionCard
            name="Todo Tree"
            id="Gruntfuggly.todo-tree"
            description="Find and organize TODO, FIXME, and HACK comments."
            category="Productivity"
          />
          <ExtensionCard
            name="Docker"
            id="ms-azuretools.vscode-docker"
            description="Docker container management, Dockerfile support."
            category="DevOps"
          />
          <ExtensionCard
            name="REST Client"
            id="humao.rest-client"
            description="Send HTTP requests directly from .http files."
            category="API"
          />
          <ExtensionCard
            name="YAML"
            id="redhat.vscode-yaml"
            description="YAML language support with schema validation."
            category="Config"
          />
          <ExtensionCard
            name="dotenv"
            id="mikestead.dotenv"
            description="Syntax highlighting for .env files."
            category="Config"
          />
          <ExtensionCard
            name="EditorConfig"
            id="EditorConfig.EditorConfig"
            description="Consistent coding styles across editors."
            category="Formatting"
          />
        </div>
      </DetailSection>

      <DetailSection title="Recommended Settings">
        <p className="text-muted-foreground mb-4">
          Complete settings.json for Python and Node.js development.
          Access via Cmd+Shift+P → &quot;Open User Settings (JSON)&quot;.
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
  "editor.smoothScrolling": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.stickyScroll.enabled": true,
  "editor.inlineSuggest.enabled": true,
  "editor.linkedEditing": true,

  // Auto-save and formatting
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "editor.formatOnSave": true,
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
    "**/__pycache__": true,
    "**/.pytest_cache": true,
    "**/.mypy_cache": true,
    "**/.ruff_cache": true,
    "**/*.pyc": true,
    "**/.venv": true
  },

  // Python
  "[python]": {
    "editor.defaultFormatter": "charliermarsh.ruff",
    "editor.tabSize": 4,
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.ruff": "explicit",
      "source.organizeImports.ruff": "explicit"
    }
  },
  "python.analysis.typeCheckingMode": "basic",
  "python.analysis.autoImportCompletions": true,
  "python.analysis.inlayHints.functionReturnTypes": true,
  "python.analysis.inlayHints.variableTypes": true,
  "python.testing.pytestEnabled": true,
  "python.testing.unittestEnabled": false,

  // Ruff (Python)
  "ruff.lint.run": "onSave",
  "ruff.format.args": ["--line-length=88"],

  // JavaScript / TypeScript
  "[javascript][typescript][typescriptreact][javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 2
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "typescript.suggest.autoImports": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",

  // JSON
  "[json][jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // Prettier
  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.trailingComma": "es5",
  "prettier.printWidth": 80,

  // ESLint
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

  // Git
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.enableSmartCommit": true,

  // Search
  "search.exclude": {
    "**/node_modules": true,
    "**/dist": true,
    "**/.git": true,
    "**/.venv": true,
    "**/__pycache__": true
  },

  // Workbench
  "workbench.startupEditor": "none",
  "workbench.colorTheme": "Catppuccin Mocha",
  "workbench.iconTheme": "catppuccin-mocha",
  "workbench.editor.enablePreview": false
}`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Themes & Icons">
        <div className="grid md:grid-cols-2 gap-4">
          <ExtensionCard
            name="Catppuccin"
            id="Catppuccin.catppuccin-vsc"
            description="Soothing pastel theme. Mocha, Macchiato, Frappé, Latte flavors."
            category="Theme"
          />
          <ExtensionCard
            name="Catppuccin Icons"
            id="Catppuccin.catppuccin-vsc-icons"
            description="Matching file icons for Catppuccin theme."
            category="Icons"
          />
          <ExtensionCard
            name="One Dark Pro"
            id="zhuangtongfa.material-theme"
            description="Atom One Dark theme. Very popular choice."
            category="Theme"
          />
          <ExtensionCard
            name="Material Icon Theme"
            id="PKief.material-icon-theme"
            description="File and folder icons for all languages."
            category="Icons"
          />
        </div>
      </DetailSection>

      <DetailSection title="Pro Tips">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Use @ Mentions Effectively</h4>
            <p className="text-sm text-muted-foreground">
              <code className="text-primary">@codebase</code> searches your entire project.
              <code className="text-primary">@file</code> adds specific files.
              <code className="text-primary">@docs</code> references documentation.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Composer for Multi-File Edits</h4>
            <p className="text-sm text-muted-foreground">
              Press Cmd+I to open Composer. It can edit multiple files at once,
              perfect for refactoring or adding features across files.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Import from VS Code</h4>
            <p className="text-sm text-muted-foreground">
              On first launch, Cursor offers to import your VS Code settings,
              extensions, and keybindings. Accept it for a seamless transition.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Free vs Pro">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-emerald-400 mb-2">Free</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>2000 completions/month</li>
              <li>50 slow premium requests</li>
              <li>Basic chat features</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Pro ($20/mo)</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Unlimited completions</li>
              <li>500 fast premium requests</li>
              <li>Unlimited slow requests</li>
              <li>All AI models</li>
            </ul>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
