import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function UvPage() {
  return (
    <>
      <ToolHero
        name="uv"
        description="An extremely fast Python package and project manager, written in Rust. Replaces pip, pip-tools, pipx, poetry, pyenv, and virtualenv with a single tool that's 10-100x faster."
        href="https://docs.astral.sh/uv"
        tags={[
          { type: "free" },
          { type: "oss" },
          { type: "essential", label: "Essential" },
        ]}
        glow="orange"
        installCommand="brew install uv"
      />

      <DetailSection title="Why uv?">
        <FeatureList
          features={[
            "10-100x faster than pip for package installation",
            "Drop-in replacement for pip commands",
            "Built-in Python version management (replaces pyenv)",
            "Virtual environment creation and management",
            "Project management with pyproject.toml",
            "Script dependencies without project files",
            "Cross-platform and actively maintained",
          ]}
        />
      </DetailSection>

      <DetailSection title="Quick Start">
        <CodeBlock language="bash">
          <Comment># Install uv</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install uv
          {"\n\n"}
          <Comment># Create a new project</Comment>
          {"\n"}
          <Cmd>uv</Cmd> init my-project
          {"\n"}
          <Cmd>cd</Cmd> my-project
          {"\n\n"}
          <Comment># Add dependencies</Comment>
          {"\n"}
          <Cmd>uv</Cmd> add requests flask pandas
          {"\n\n"}
          <Comment># Run your project</Comment>
          {"\n"}
          <Cmd>uv</Cmd> run python main.py
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Python Version Management">
        <p className="text-muted-foreground mb-4">
          uv can install and manage Python versions, replacing pyenv.
        </p>

        <CodeBlock language="bash">
          <Comment># List available Python versions</Comment>
          {"\n"}
          <Cmd>uv</Cmd> python list
          {"\n\n"}
          <Comment># Install a specific Python version</Comment>
          {"\n"}
          <Cmd>uv</Cmd> python install 3.12
          {"\n\n"}
          <Comment># Pin Python version for a project</Comment>
          {"\n"}
          <Cmd>uv</Cmd> python pin 3.12
          {"\n\n"}
          <Comment># Create project with specific Python</Comment>
          {"\n"}
          <Cmd>uv</Cmd> init <Flag>--python</Flag> 3.11 my-project
        </CodeBlock>

        <Tip>
          uv automatically downloads Python if needed. No more manual
          installation or PATH configuration!
        </Tip>
      </DetailSection>

      <DetailSection title="Package Management">
        <CodeBlock language="bash">
          <Comment># Add dependencies</Comment>
          {"\n"}
          <Cmd>uv</Cmd> add requests
          {"\n"}
          <Cmd>uv</Cmd> add flask <Flag>--dev</Flag>
          {"\n\n"}
          <Comment># Remove dependencies</Comment>
          {"\n"}
          <Cmd>uv</Cmd> remove requests
          {"\n\n"}
          <Comment># Sync dependencies (like npm install)</Comment>
          {"\n"}
          <Cmd>uv</Cmd> sync
          {"\n\n"}
          <Comment># Update all dependencies</Comment>
          {"\n"}
          <Cmd>uv</Cmd> lock <Flag>--upgrade</Flag>
          {"\n"}
          <Cmd>uv</Cmd> sync
          {"\n\n"}
          <Comment># Show installed packages</Comment>
          {"\n"}
          <Cmd>uv</Cmd> pip list
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Virtual Environments">
        <CodeBlock language="bash">
          <Comment># Create a virtual environment</Comment>
          {"\n"}
          <Cmd>uv</Cmd> venv
          {"\n\n"}
          <Comment># With a specific Python version</Comment>
          {"\n"}
          <Cmd>uv</Cmd> venv <Flag>--python</Flag> 3.11
          {"\n\n"}
          <Comment># Activate it</Comment>
          {"\n"}
          <Cmd>source</Cmd> .venv/bin/activate
          {"\n\n"}
          <Comment># Or use uv run (auto-activates)</Comment>
          {"\n"}
          <Cmd>uv</Cmd> run python script.py
        </CodeBlock>

        <Tip>
          Use <code className="text-primary">uv run</code> instead of manually activating
          the virtual environment. It is faster and works consistently.
        </Tip>
      </DetailSection>

      <DetailSection title="Project Configuration">
        <ConfigBlock filename="pyproject.toml">
{`[project]
name = "my-project"
version = "0.1.0"
description = "My awesome project"
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "requests>=2.28.0",
    "pydantic>=2.0.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=7.0.0",
    "ruff>=0.1.0",
    "mypy>=1.0.0",
]

[project.scripts]
my-cli = "my_project:main"

[tool.uv]
dev-dependencies = [
    "pytest>=7.0.0",
    "ruff>=0.1.0",
]`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Running Scripts">
        <p className="text-muted-foreground mb-4">
          uv can run scripts with inline dependencies - no project setup needed.
        </p>

        <CodeBlock language="bash">
          <Comment># Run a script with dependencies</Comment>
          {"\n"}
          <Cmd>uv</Cmd> run <Flag>--with</Flag> requests script.py
          {"\n\n"}
          <Comment># Or add dependencies in the script itself:</Comment>
          {"\n"}
          <Comment># /// script</Comment>
          {"\n"}
          <Comment># dependencies = [&quot;requests&quot;]</Comment>
          {"\n"}
          <Comment># ///</Comment>
          {"\n"}
          <Cmd>uv</Cmd> run script.py
        </CodeBlock>
      </DetailSection>

      <DetailSection title="pip Compatibility">
        <p className="text-muted-foreground mb-4">
          uv works as a drop-in pip replacement for existing workflows.
        </p>

        <CodeBlock language="bash">
          <Comment># Use uv as pip replacement</Comment>
          {"\n"}
          <Cmd>uv</Cmd> pip install requests
          {"\n"}
          <Cmd>uv</Cmd> pip install <Flag>-r</Flag> requirements.txt
          {"\n"}
          <Cmd>uv</Cmd> pip freeze
          {"\n"}
          <Cmd>uv</Cmd> pip list
          {"\n\n"}
          <Comment># Install tools globally (like pipx)</Comment>
          {"\n"}
          <Cmd>uv</Cmd> tool install ruff
          {"\n"}
          <Cmd>uv</Cmd> tool install black
          {"\n\n"}
          <Comment># Run tools without installing</Comment>
          {"\n"}
          <Cmd>uvx</Cmd> ruff check .
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Comparison">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">What uv Replaces</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>pip, pip-tools → <code className="text-primary">uv pip</code></li>
              <li>pyenv → <code className="text-primary">uv python</code></li>
              <li>virtualenv → <code className="text-primary">uv venv</code></li>
              <li>poetry → <code className="text-primary">uv add/sync</code></li>
              <li>pipx → <code className="text-primary">uv tool</code></li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Speed Comparison</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Cold install: 10-100x faster than pip</li>
              <li>Cached install: Near instant</li>
              <li>Lockfile resolution: Seconds vs minutes</li>
              <li>Python download: Parallel, fast</li>
            </ul>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
