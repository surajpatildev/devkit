import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function FnmPage() {
  return (
    <>
      <ToolHero
        name="fnm"
        description="Fast Node Manager - a fast and simple Node.js version manager built in Rust. Automatically switches versions based on .node-version or .nvmrc files."
        href="https://github.com/Schniz/fnm"
        tags={[
          { type: "free" },
          { type: "oss" },
          { type: "recommended", label: "Recommended" },
        ]}
        glow="green"
        installCommand="brew install fnm"
      />

      <DetailSection title="Why fnm?">
        <FeatureList
          features={[
            "Blazingly fast - written in Rust",
            "Cross-platform - works on macOS, Linux, Windows",
            "Automatic version switching per directory",
            "Compatible with .node-version and .nvmrc",
            "Simple commands, easy to remember",
            "No dependencies or complex setup",
          ]}
        />
      </DetailSection>

      <DetailSection title="Installation & Setup">
        <CodeBlock language="bash">
          <Comment># Install fnm</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install fnm
          {"\n\n"}
          <Comment># Add to ~/.zshrc</Comment>
          {"\n"}
          <Cmd>eval</Cmd> <Str>&quot;$(fnm env --use-on-cd)&quot;</Str>
          {"\n\n"}
          <Comment># Reload shell</Comment>
          {"\n"}
          <Cmd>source</Cmd> ~/.zshrc
        </CodeBlock>

        <Tip>
          The <code className="text-primary">--use-on-cd</code> flag makes fnm automatically
          switch Node versions when you enter a directory with a .node-version file.
        </Tip>
      </DetailSection>

      <DetailSection title="Basic Usage">
        <CodeBlock language="bash">
          <Comment># Install Node.js versions</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> install 22 <Comment># Latest v22</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> install 20 <Comment># Latest v20</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> install <Flag>--lts</Flag> <Comment># Latest LTS</Comment>
          {"\n\n"}
          <Comment># Use a specific version</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> use 22
          {"\n\n"}
          <Comment># Set default version</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> default 22
          {"\n\n"}
          <Comment># List installed versions</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> list
          {"\n\n"}
          <Comment># List available versions</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> list-remote
          {"\n\n"}
          <Comment># Show current version</Comment>
          {"\n"}
          <Cmd>fnm</Cmd> current
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Per-Project Versions">
        <p className="text-muted-foreground mb-4">
          Create a .node-version file to pin Node version per project.
        </p>

        <CodeBlock language="bash">
          <Comment># Create .node-version file</Comment>
          {"\n"}
          <Cmd>echo</Cmd> <Str>&quot;22&quot;</Str> {">"} .node-version
          {"\n\n"}
          <Comment># Or use .nvmrc format</Comment>
          {"\n"}
          <Cmd>echo</Cmd> <Str>&quot;v22.0.0&quot;</Str> {">"} .nvmrc
          {"\n\n"}
          <Comment># fnm auto-switches when you cd into the directory</Comment>
          {"\n"}
          <Cmd>cd</Cmd> my-project
          {"\n"}
          <Comment># Automatically uses version from .node-version</Comment>
        </CodeBlock>

        <ConfigBlock filename=".node-version">
{`22`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Shell Configuration">
        <p className="text-muted-foreground mb-4">
          Add this to your ~/.zshrc for the best experience.
        </p>

        <ConfigBlock filename="~/.zshrc">
{`# fnm - Fast Node Manager
eval "$(fnm env --use-on-cd)"

# Optional: Log when fnm switches versions
export FNM_VERSION_FILE_STRATEGY="local"

# Optional: Install version if not found
# Add this to auto-install missing versions
fnm_on_cd() {
  if [[ -f .node-version || -f .nvmrc ]]; then
    fnm use --install-if-missing
  fi
}
add-zsh-hook chpwd fnm_on_cd`}
        </ConfigBlock>
      </DetailSection>

      <DetailSection title="Commands Reference">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4">
          <div className="grid md:grid-cols-2 gap-2 text-sm">
            <div><code className="text-primary">fnm install 22</code> - Install Node 22</div>
            <div><code className="text-primary">fnm use 22</code> - Switch to Node 22</div>
            <div><code className="text-primary">fnm default 22</code> - Set default</div>
            <div><code className="text-primary">fnm current</code> - Show current</div>
            <div><code className="text-primary">fnm list</code> - List installed</div>
            <div><code className="text-primary">fnm list-remote</code> - List available</div>
            <div><code className="text-primary">fnm uninstall 18</code> - Remove version</div>
            <div><code className="text-primary">fnm alias 22 default</code> - Create alias</div>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="fnm vs nvm">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">fnm</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Written in Rust - very fast</li>
              <li>Simple shell integration</li>
              <li>Works on macOS, Linux, Windows</li>
              <li>Single binary, no dependencies</li>
              <li>~40x faster than nvm</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">nvm</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Written in shell script</li>
              <li>Slower shell startup</li>
              <li>macOS and Linux only</li>
              <li>More mature, widely used</li>
              <li>Some features fnm lacks</li>
            </ul>
          </div>
        </div>

        <Tip type="info">
          fnm is compatible with .nvmrc files, so you can switch from nvm
          without changing your projects.
        </Tip>
      </DetailSection>

      <DetailSection title="Tips">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-foreground mb-2">Corepack with fnm</h4>
            <p className="text-sm text-muted-foreground">
              Enable Corepack to manage pnpm and yarn versions:
            </p>
            <code className="text-primary text-sm mt-1 block">corepack enable</code>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">CI/CD Usage</h4>
            <p className="text-sm text-muted-foreground">
              fnm works great in CI. Install, use, and it respects your .node-version file.
            </p>
          </div>
        </div>
      </DetailSection>
    </>
  );
}
