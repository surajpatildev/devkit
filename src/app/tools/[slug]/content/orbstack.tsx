import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Flag } from "@/components/code-block";

export default function OrbStackPage() {
  return (
    <>
      <ToolHero
        name="OrbStack"
        description="Fast, light Docker Desktop alternative. 2 second startup, 4x less power, automatic .orb.local domains. Drop-in replacement."
        href="https://orbstack.dev"
        tags={[
          { type: "free", label: "Free personal" },
          { type: "paid", label: "$8/mo teams" },
          { type: "recommended" },
        ]}
        glow="orange"
        installCommand="brew install --cask orbstack"
        downloadUrl="https://orbstack.dev"
      />

      <DetailSection title="Why OrbStack?">
        <FeatureList
          features={[
            "2 second startup (vs 30 seconds for Docker Desktop)",
            "4x less power consumption - better battery life",
            "Automatic .orb.local domains for containers",
            "Run Linux VMs alongside containers",
            "Drop-in Docker replacement - same commands work",
            "Native Apple Silicon support",
            "Built-in debug shell for containers",
            "File sharing is significantly faster",
          ]}
        />
      </DetailSection>

      <DetailSection title="Installation">
        <CodeBlock language="bash">
          <Comment># Install OrbStack</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install <Flag>--cask</Flag> orbstack
          {"\n\n"}
          <Comment># Or download from orbstack.dev</Comment>
        </CodeBlock>

        <Tip>
          If you have Docker Desktop installed, OrbStack can migrate your
          containers and images automatically.
        </Tip>
      </DetailSection>

      <DetailSection title="Migration from Docker Desktop">
        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Automatic Migration</h4>
            <p className="text-sm text-muted-foreground mb-3">
              OrbStack detects Docker Desktop and offers to migrate.
            </p>
            <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
              <li>Quit Docker Desktop</li>
              <li>Open OrbStack</li>
              <li>Click &quot;Migrate from Docker Desktop&quot;</li>
              <li>Your containers, images, and volumes are transferred</li>
            </ol>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Command Compatibility</h4>
            <p className="text-sm text-muted-foreground">
              All <code className="text-primary">docker</code> and
              <code className="text-primary"> docker compose</code> commands work identically.
              Your scripts and CI don&apos;t need any changes.
            </p>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Automatic Domain Names">
        <p className="text-muted-foreground mb-4">
          Every container gets a <code className="text-primary">.orb.local</code> domain automatically.
          No more remembering port numbers.
        </p>

        <CodeBlock language="bash">
          <Comment># Start a container</Comment>
          {"\n"}
          <Cmd>docker</Cmd> run <Flag>-d</Flag> <Flag>--name</Flag> myapp <Flag>-p</Flag> 3000:3000 node:20
          {"\n\n"}
          <Comment># Access via automatic domain</Comment>
          {"\n"}
          <Cmd>curl</Cmd> http://myapp.orb.local:3000
          {"\n\n"}
          <Comment># Also works in your browser!</Comment>
        </CodeBlock>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mt-4">
          <h4 className="font-medium text-foreground mb-2">Domain Patterns</h4>
          <ul className="text-sm text-muted-foreground space-y-2 font-mono">
            <li><span className="text-primary">container-name.orb.local</span> — Docker containers</li>
            <li><span className="text-primary">service.namespace.svc.cluster.local</span> — Kubernetes</li>
            <li><span className="text-primary">machine-name.orb.local</span> — Linux VMs</li>
          </ul>
        </div>
      </DetailSection>

      <DetailSection title="Linux VMs">
        <p className="text-muted-foreground mb-4">
          OrbStack can run full Linux distributions alongside Docker containers.
          Great for testing on different distros.
        </p>

        <CodeBlock language="bash">
          <Comment># Create an Ubuntu VM</Comment>
          {"\n"}
          <Cmd>orb</Cmd> create ubuntu myvm
          {"\n\n"}
          <Comment># SSH into the VM</Comment>
          {"\n"}
          <Cmd>orb</Cmd> shell myvm
          {"\n\n"}
          <Comment># Or use SSH directly</Comment>
          {"\n"}
          <Cmd>ssh</Cmd> myvm@orb
          {"\n\n"}
          <Comment># List available distros</Comment>
          {"\n"}
          <Cmd>orb</Cmd> list <Flag>--available</Flag>
        </CodeBlock>

        <div className="bg-card/50 border border-border/50 rounded-lg p-4 mt-4">
          <h4 className="font-medium text-foreground mb-2">Supported Distributions</h4>
          <p className="text-sm text-muted-foreground">
            Ubuntu, Debian, Fedora, Arch, Alpine, CentOS, Rocky, openSUSE,
            NixOS, and more.
          </p>
        </div>
      </DetailSection>

      <DetailSection title="Debug Shell">
        <p className="text-muted-foreground mb-4">
          OrbStack&apos;s debug shell works even on minimal/distroless containers
          where <code className="text-primary">docker exec</code> fails.
        </p>

        <CodeBlock language="bash">
          <Comment># Open debug shell in any container</Comment>
          {"\n"}
          <Cmd>orb</Cmd> debug mycontainer
          {"\n\n"}
          <Comment># Works even on scratch/distroless images!</Comment>
        </CodeBlock>

        <Tip>
          The debug shell includes common tools like curl, vim, and strace
          even if the container doesn&apos;t have them.
        </Tip>
      </DetailSection>

      <DetailSection title="Docker Compose Example">
        <ConfigBlock filename="docker-compose.yml">
{`services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
    # Access at: web.orb.local:3000

  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: dev
    # Access at: db.orb.local:5432

  redis:
    image: redis:7-alpine
    # Access at: redis.orb.local:6379`}
        </ConfigBlock>

        <CodeBlock language="bash">
          <Comment># Start services</Comment>
          {"\n"}
          <Cmd>docker</Cmd> compose up <Flag>-d</Flag>
          {"\n\n"}
          <Comment># Access via .orb.local domains</Comment>
          {"\n"}
          <Cmd>curl</Cmd> http://web.orb.local:3000
          {"\n"}
          <Cmd>psql</Cmd> <Flag>-h</Flag> db.orb.local <Flag>-U</Flag> postgres
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Performance Comparison">
        <div className="bg-card/50 border border-border/50 rounded-lg p-4 font-mono text-sm">
          <div className="grid grid-cols-3 gap-4 text-muted-foreground">
            <div className="font-medium text-foreground">Metric</div>
            <div className="font-medium text-foreground">Docker Desktop</div>
            <div className="font-medium text-foreground">OrbStack</div>

            <div>Startup time</div>
            <div>~30 seconds</div>
            <div className="text-green-400">~2 seconds</div>

            <div>Power (idle)</div>
            <div>726 mW</div>
            <div className="text-green-400">180 mW</div>

            <div>Background CPU</div>
            <div>2-5%</div>
            <div className="text-green-400">&lt;0.1%</div>

            <div>Disk space</div>
            <div>~2 GB</div>
            <div className="text-green-400">&lt;10 MB base</div>

            <div>File I/O</div>
            <div>Slow (VirtioFS)</div>
            <div className="text-green-400">Fast (native-like)</div>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Kubernetes Support">
        <p className="text-muted-foreground mb-4">
          OrbStack includes a single-node Kubernetes cluster.
        </p>

        <CodeBlock language="bash">
          <Comment># Enable Kubernetes</Comment>
          {"\n"}
          <Comment># Settings → Kubernetes → Enable</Comment>
          {"\n\n"}
          <Comment># Use kubectl normally</Comment>
          {"\n"}
          <Cmd>kubectl</Cmd> get pods
          {"\n\n"}
          <Comment># Services get automatic domains</Comment>
          {"\n"}
          <Comment># myservice.default.svc.cluster.local</Comment>
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Useful Commands">
        <CodeBlock language="bash">
          <Comment># OrbStack CLI</Comment>
          {"\n"}
          <Cmd>orb</Cmd> start <Comment># Start OrbStack</Comment>
          {"\n"}
          <Cmd>orb</Cmd> stop <Comment># Stop OrbStack</Comment>
          {"\n"}
          <Cmd>orb</Cmd> status <Comment># Show status</Comment>
          {"\n\n"}
          <Comment># Linux VMs</Comment>
          {"\n"}
          <Cmd>orb</Cmd> create ubuntu myvm <Comment># Create VM</Comment>
          {"\n"}
          <Cmd>orb</Cmd> shell myvm <Comment># Enter VM</Comment>
          {"\n"}
          <Cmd>orb</Cmd> delete myvm <Comment># Delete VM</Comment>
          {"\n\n"}
          <Comment># Debug</Comment>
          {"\n"}
          <Cmd>orb</Cmd> debug container_name <Comment># Debug shell</Comment>
        </CodeBlock>

        <Tip type="warning">
          OrbStack is free for personal use. Teams and commercial use
          require a paid license ($8/user/month).
        </Tip>
      </DetailSection>
    </>
  );
}
