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

export default function PyCharmPage() {
  return (
    <>
      <ToolHero
        name="PyCharm"
        description="The most intelligent Python IDE. Deep code understanding, refactoring, debugging, testing, and scientific tools. Professional-grade development environment from JetBrains."
        href="https://jetbrains.com/pycharm"
        tags={[
          { type: "free", label: "Community" },
          { type: "paid", label: "Pro $249/yr" },
          { type: "recommended", label: "Recommended" },
        ]}
        glow="green"
        installCommand="brew install --cask pycharm"
        downloadUrl="https://jetbrains.com/pycharm/download"
      />

      <DetailSection title="Why PyCharm?">
        <FeatureList
          features={[
            "Intelligent code completion with deep Python understanding",
            "Built-in debugger with variable inspection and breakpoints",
            "Integrated testing with pytest, unittest, and coverage",
            "Database tools and SQL support (Pro)",
            "Django, Flask, FastAPI framework support (Pro)",
            "Scientific tools: Jupyter, NumPy, Pandas support",
            "Docker and remote interpreter support (Pro)",
            "Git integration with visual diff and merge",
          ]}
        />

        <Tip>
          Community Edition is free and covers most Python development needs.
          Pro adds web frameworks, database tools, and remote development.
        </Tip>
      </DetailSection>

      <DetailSection title="First-Time Setup">
        <p className="text-muted-foreground mb-4">
          Configure these settings after installing for optimal development experience.
        </p>

        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">1. Configure Python Interpreter</h4>
            <p className="text-sm text-muted-foreground mb-2">
              PyCharm → Settings → Project → Python Interpreter
            </p>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
              <li>Click the gear icon → Add Interpreter</li>
              <li>Select &quot;Add Local Interpreter&quot; for virtualenv</li>
              <li>Or &quot;On SSH&quot; / &quot;Docker&quot; for remote (Pro)</li>
              <li>Use uv or Poetry for dependency management</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">2. Enable UV Integration</h4>
            <p className="text-sm text-muted-foreground">
              PyCharm → Settings → Tools → Python Integrated Tools → Default test runner: pytest.
              For uv, create a venv with <code className="text-primary">uv venv</code> and point PyCharm to it.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">3. Set Up Code Style</h4>
            <p className="text-sm text-muted-foreground">
              PyCharm → Settings → Editor → Code Style → Python. Set tab size to 4,
              enable &quot;Use tab character&quot; off for PEP 8 compliance.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Essential Plugins">
        <p className="text-muted-foreground mb-6">
          Install via PyCharm → Settings → Plugins → Marketplace.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <ExtensionCard
            name="GitHub Copilot"
            id="com.github.copilot"
            description="AI pair programmer. Code suggestions, chat, and completions."
            category="AI"
          />
          <ExtensionCard
            name="Ruff"
            id="com.koxudaxi.ruff"
            description="Extremely fast Python linter and formatter. Replaces flake8, isort, black."
            category="Linting"
          />
          <ExtensionCard
            name="Rainbow Brackets"
            id="izhangzhihao.rainbow.brackets"
            description="Colorize matching brackets for better readability."
            category="Editor"
          />
          <ExtensionCard
            name=".env files support"
            id="ru.adelf.idea.dotenv"
            description="Syntax highlighting and completion for .env files."
            category="Config"
          />
          <ExtensionCard
            name="Catppuccin Theme"
            id="catppuccin.catppuccin-jetbrains"
            description="Soothing pastel theme. Mocha flavor recommended."
            category="Theme"
          />
          <ExtensionCard
            name="Key Promoter X"
            id="Key Promoter X"
            description="Learn keyboard shortcuts by showing them when you use the mouse."
            category="Productivity"
          />
          <ExtensionCard
            name="Pydantic"
            id="com.koxudaxi.pydantic"
            description="Enhanced support for Pydantic models and validation."
            category="Python"
          />
          <ExtensionCard
            name="GitToolBox"
            id="zielu.gittoolbox"
            description="Enhanced Git integration with inline blame and status."
            category="Git"
          />
        </div>

        <Tip type="info">
          For Node.js development alongside Python, install the &quot;Node.js&quot; plugin
          for syntax highlighting and npm integration.
        </Tip>
      </DetailSection>

      <DetailSection title="Keyboard Shortcuts">
        <p className="text-muted-foreground mb-4">
          Essential shortcuts for productive Python development.
        </p>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-4">
          <h4 className="font-medium text-foreground mb-3">Navigation</h4>
          <Shortcut keys={["Cmd", "Shift", "O"]} description="Go to file" />
          <Shortcut keys={["Cmd", "O"]} description="Go to class" />
          <Shortcut keys={["Cmd", "Opt", "O"]} description="Go to symbol" />
          <Shortcut keys={["Cmd", "E"]} description="Recent files" />
          <Shortcut keys={["Cmd", "B"]} description="Go to definition" />
          <Shortcut keys={["Cmd", "Opt", "B"]} description="Go to implementation" />
          <Shortcut keys={["Cmd", "U"]} description="Go to super method" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-4">
          <h4 className="font-medium text-foreground mb-3">Editing</h4>
          <Shortcut keys={["Cmd", "D"]} description="Duplicate line" />
          <Shortcut keys={["Cmd", "Backspace"]} description="Delete line" />
          <Shortcut keys={["Opt", "Up/Down"]} description="Extend/shrink selection" />
          <Shortcut keys={["Cmd", "Shift", "U"]} description="Toggle case" />
          <Shortcut keys={["Cmd", "/"]} description="Toggle comment" />
          <Shortcut keys={["Cmd", "Opt", "L"]} description="Reformat code" />
          <Shortcut keys={["Ctrl", "Opt", "O"]} description="Optimize imports" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-4">
          <h4 className="font-medium text-foreground mb-3">Refactoring</h4>
          <Shortcut keys={["Shift", "F6"]} description="Rename" />
          <Shortcut keys={["Cmd", "Opt", "M"]} description="Extract method" />
          <Shortcut keys={["Cmd", "Opt", "V"]} description="Extract variable" />
          <Shortcut keys={["Cmd", "Opt", "C"]} description="Extract constant" />
          <Shortcut keys={["Cmd", "Opt", "F"]} description="Extract field" />
          <Shortcut keys={["F6"]} description="Move" />
        </div>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3">Running & Debugging</h4>
          <Shortcut keys={["Ctrl", "R"]} description="Run" />
          <Shortcut keys={["Ctrl", "D"]} description="Debug" />
          <Shortcut keys={["Cmd", "F8"]} description="Toggle breakpoint" />
          <Shortcut keys={["F8"]} description="Step over" />
          <Shortcut keys={["F7"]} description="Step into" />
          <Shortcut keys={["Shift", "F8"]} description="Step out" />
          <Shortcut keys={["Opt", "F9"]} description="Run to cursor" />
        </div>
      </DetailSection>

      <DetailSection title="Recommended Settings">
        <p className="text-muted-foreground mb-4">
          Configure in PyCharm → Settings (Cmd+,).
        </p>

        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Editor → General</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Enable &quot;Show line numbers&quot;</li>
              <li>Enable &quot;Show whitespaces&quot; → Trailing</li>
              <li>Set &quot;Strip trailing whitespace&quot; on save</li>
              <li>Enable &quot;Ensure line feed at file end on save&quot;</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Editor → Font</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Font: JetBrains Mono (comes bundled)</li>
              <li>Size: 14</li>
              <li>Line height: 1.4</li>
              <li>Enable ligatures</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Editor → Code Style → Python</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Tab size: 4 (PEP 8)</li>
              <li>Continuation indent: 4</li>
              <li>Uncheck &quot;Use tab character&quot;</li>
              <li>Hard wrap at: 88 (Black compatible)</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Tools → Actions on Save</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Enable &quot;Reformat code&quot;</li>
              <li>Enable &quot;Optimize imports&quot;</li>
              <li>Enable &quot;Run code cleanup&quot;</li>
              <li>If using Ruff: enable &quot;Run ruff&quot;</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Python Integrated Tools</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Default test runner: pytest</li>
              <li>Docstring format: Google or NumPy</li>
              <li>Package requirements: requirements.txt or pyproject.toml</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Project Configuration">
        <p className="text-muted-foreground mb-4">
          Set up your Python project with these configurations.
        </p>

        <ConfigBlock filename="pyproject.toml">
{`[project]
name = "my-project"
version = "0.1.0"
requires-python = ">=3.11"
dependencies = []

[project.optional-dependencies]
dev = [
    "pytest>=8.0",
    "pytest-cov>=4.0",
    "ruff>=0.4",
    "mypy>=1.10",
]

[tool.ruff]
line-length = 88
target-version = "py311"

[tool.ruff.lint]
select = ["E", "F", "I", "N", "W", "UP", "B", "C4"]
ignore = ["E501"]

[tool.ruff.format]
quote-style = "double"
indent-style = "space"

[tool.pytest.ini_options]
testpaths = ["tests"]
pythonpath = ["src"]
addopts = "-v --cov=src --cov-report=term-missing"

[tool.mypy]
python_version = "3.11"
strict = true
warn_return_any = true
warn_unused_ignores = true`}
        </ConfigBlock>

        <Tip>
          PyCharm automatically detects pyproject.toml settings. It will use
          your configured line length, Python version, and test settings.
        </Tip>
      </DetailSection>

      <DetailSection title="Run Configurations">
        <p className="text-muted-foreground mb-4">
          Create reusable run configurations for different tasks.
        </p>

        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Python Script</h4>
            <p className="text-sm text-muted-foreground">
              Run → Edit Configurations → + → Python. Set script path, parameters,
              and working directory. Enable &quot;Emulate terminal&quot; for interactive scripts.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">pytest</h4>
            <p className="text-sm text-muted-foreground">
              Run → Edit Configurations → + → pytest. Set target to your test directory.
              Add &quot;-v --tb=short&quot; for better output. Enable &quot;Run with coverage&quot;.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">FastAPI / Flask (Pro)</h4>
            <p className="text-sm text-muted-foreground">
              Run → Edit Configurations → + → FastAPI / Flask. PyCharm auto-detects
              your app and provides hot reload. Set host to 0.0.0.0 for Docker access.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Django (Pro)</h4>
            <p className="text-sm text-muted-foreground">
              Run → Edit Configurations → + → Django Server. Configure settings module
              and enable &quot;No reload&quot; for debugging breakpoints to work properly.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Database Tools (Pro)">
        <p className="text-muted-foreground mb-4">
          PyCharm Pro includes a full database IDE.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Supported Databases</h4>
            <p className="text-sm text-muted-foreground">
              PostgreSQL, MySQL, SQLite, MongoDB, Redis, Oracle, SQL Server, and more.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Features</h4>
            <p className="text-sm text-muted-foreground">
              SQL completion, query console, data export, schema diagrams, migrations.
            </p>
          </div>
        </div>

        <CodeBlock language="sql">
          <Comment>-- PyCharm provides intelligent SQL completion</Comment>
          {"\n"}
          <Cmd>SELECT</Cmd> u.name, COUNT(o.id) as order_count
          {"\n"}
          <Cmd>FROM</Cmd> users u
          {"\n"}
          <Cmd>LEFT JOIN</Cmd> orders o ON u.id = o.user_id
          {"\n"}
          <Cmd>GROUP BY</Cmd> u.id
          {"\n"}
          <Cmd>HAVING</Cmd> COUNT(o.id) {">"} 5;
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Scientific Mode">
        <p className="text-muted-foreground mb-4">
          Built-in support for data science workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Jupyter Notebooks</h4>
            <p className="text-sm text-muted-foreground">
              Edit .ipynb files directly. Run cells, see outputs inline.
              Better than Jupyter Lab for code navigation.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Variable Explorer</h4>
            <p className="text-sm text-muted-foreground">
              View DataFrames, arrays, and variables in a table view during debugging.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Plots</h4>
            <p className="text-sm text-muted-foreground">
              Matplotlib and Plotly plots render in the IDE. Zoom, pan, and save.
            </p>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Python Console</h4>
            <p className="text-sm text-muted-foreground">
              IPython console with completion. Execute code snippets interactively.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Community vs Professional">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-emerald-400 mb-2">Community (Free)</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Python development</li>
              <li>Debugging & testing</li>
              <li>Git integration</li>
              <li>Code analysis & refactoring</li>
              <li>Virtual environments</li>
              <li>Jupyter notebooks</li>
              <li>Scientific tools</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Professional ($249/yr)</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>Everything in Community +</li>
              <li>Django, Flask, FastAPI</li>
              <li>Database tools & SQL</li>
              <li>Docker & remote interpreters</li>
              <li>JavaScript & TypeScript</li>
              <li>HTTP client</li>
              <li>Profiler</li>
            </ul>
          </div>
        </div>

        <Tip type="info">
          Students and open-source contributors can get Professional for free.
          Apply at jetbrains.com/community.
        </Tip>
      </DetailSection>

      <DetailSection title="Shell Integration">
        <p className="text-muted-foreground mb-4">
          Enable command-line launcher for quick access.
        </p>

        <CodeBlock language="bash">
          <Comment># Install CLI launcher from PyCharm</Comment>
          {"\n"}
          <Comment># Tools → Create Command-line Launcher</Comment>
          {"\n\n"}
          <Comment># Or add to PATH manually:</Comment>
          {"\n"}
          <Cmd>export</Cmd> PATH=<Str>&quot;$PATH:/Applications/PyCharm.app/Contents/MacOS&quot;</Str>
          {"\n\n"}
          <Comment># Now use:</Comment>
          {"\n"}
          <Cmd>pycharm</Cmd> . <Comment># Open current directory</Comment>
          {"\n"}
          <Cmd>pycharm</Cmd> myfile.py <Comment># Open specific file</Comment>
          {"\n"}
          <Cmd>charm</Cmd> . <Comment># Shorter alias (if configured)</Comment>
        </CodeBlock>
      </DetailSection>
    </>
  );
}
