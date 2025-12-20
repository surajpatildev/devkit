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

      <DetailSection title="Essential Extensions">
        <p className="text-muted-foreground mb-4">
          Cursor is compatible with all VS Code extensions. Here are essentials:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <ExtensionCard
            name="ESLint"
            id="dbaeumer.vscode-eslint"
            description="JavaScript/TypeScript linting."
            category="JavaScript"
          />
          <ExtensionCard
            name="Prettier"
            id="esbenp.prettier-vscode"
            description="Code formatter."
            category="Formatting"
          />
          <ExtensionCard
            name="Python"
            id="ms-python.python"
            description="Python language support."
            category="Python"
          />
          <ExtensionCard
            name="GitLens"
            id="eamodio.gitlens"
            description="Git superpowers."
            category="Git"
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
