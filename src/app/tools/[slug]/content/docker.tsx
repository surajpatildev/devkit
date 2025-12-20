import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function DockerPage() {
  return (
    <>
      <ToolHero
        name="Docker Desktop"
        description="Run containers on your Mac with an intuitive GUI. Manage images, containers, and volumes. Includes Docker Compose and supports Dev Containers for VS Code."
        href="https://docker.com/products/docker-desktop"
        tags={[{ type: "free" }]}
        glow="cyan"
        installCommand="brew install --cask docker"
        downloadUrl="https://docker.com/products/docker-desktop"
      />

      <DetailSection title="Why Docker Desktop?">
        <FeatureList
          features={[
            "Run Linux containers natively on macOS",
            "GUI for managing containers, images, and volumes",
            "Docker Compose included",
            "Kubernetes cluster built-in (optional)",
            "Dev Containers support for VS Code",
            "Resource controls for CPU and memory",
            "Automatic updates and security patches",
          ]}
        />
      </DetailSection>

      <DetailSection title="Getting Started">
        <CodeBlock language="bash">
          <Comment># Install Docker Desktop</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install <Flag>--cask</Flag> docker
          {"\n\n"}
          <Comment># Verify installation</Comment>
          {"\n"}
          <Cmd>docker</Cmd> <Flag>--version</Flag>
          {"\n"}
          <Cmd>docker</Cmd> compose version
          {"\n\n"}
          <Comment># Run hello-world to test</Comment>
          {"\n"}
          <Cmd>docker</Cmd> run hello-world
        </CodeBlock>

        <Tip>
          After installation, launch Docker Desktop from Applications.
          The Docker daemon must be running for commands to work.
        </Tip>
      </DetailSection>

      <DetailSection title="Essential Commands">
        <CodeBlock language="bash">
          <Comment># Container management</Comment>
          {"\n"}
          <Cmd>docker</Cmd> ps <Comment># List running containers</Comment>
          {"\n"}
          <Cmd>docker</Cmd> ps <Flag>-a</Flag> <Comment># List all containers</Comment>
          {"\n"}
          <Cmd>docker</Cmd> stop container_name
          {"\n"}
          <Cmd>docker</Cmd> rm container_name
          {"\n\n"}
          <Comment># Image management</Comment>
          {"\n"}
          <Cmd>docker</Cmd> images <Comment># List images</Comment>
          {"\n"}
          <Cmd>docker</Cmd> pull nginx <Comment># Download image</Comment>
          {"\n"}
          <Cmd>docker</Cmd> rmi image_name <Comment># Remove image</Comment>
          {"\n\n"}
          <Comment># Run a container</Comment>
          {"\n"}
          <Cmd>docker</Cmd> run <Flag>-d</Flag> <Flag>-p</Flag> 8080:80 nginx
          {"\n\n"}
          <Comment># Access container shell</Comment>
          {"\n"}
          <Cmd>docker</Cmd> exec <Flag>-it</Flag> container_name bash
          {"\n\n"}
          <Comment># View logs</Comment>
          {"\n"}
          <Cmd>docker</Cmd> logs <Flag>-f</Flag> container_name
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Docker Compose">
        <p className="text-muted-foreground mb-4">
          Define multi-container applications in a YAML file.
        </p>

        <ConfigBlock filename="docker-compose.yml">
{`services:
  web:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    depends_on:
      - db
      - redis

  db:
    image: postgres:16
    environment:
      POSTGRES_USER: dev
      POSTGRES_PASSWORD: dev
      POSTGRES_DB: myapp
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:`}
        </ConfigBlock>

        <CodeBlock language="bash">
          <Comment># Start services</Comment>
          {"\n"}
          <Cmd>docker</Cmd> compose up <Flag>-d</Flag>
          {"\n\n"}
          <Comment># View logs</Comment>
          {"\n"}
          <Cmd>docker</Cmd> compose logs <Flag>-f</Flag>
          {"\n\n"}
          <Comment># Stop services</Comment>
          {"\n"}
          <Cmd>docker</Cmd> compose down
          {"\n\n"}
          <Comment># Rebuild after changes</Comment>
          {"\n"}
          <Cmd>docker</Cmd> compose up <Flag>-d</Flag> <Flag>--build</Flag>
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Dev Containers">
        <p className="text-muted-foreground mb-4">
          Develop inside a container with all dependencies included.
          VS Code and Cursor support Dev Containers natively.
        </p>

        <ConfigBlock filename=".devcontainer/devcontainer.json">
{`{
  "name": "Node.js Development",
  "image": "mcr.microsoft.com/devcontainers/javascript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },
  "forwardPorts": [3000],
  "postCreateCommand": "npm install",
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode"
      ],
      "settings": {
        "editor.formatOnSave": true
      }
    }
  }
}`}
        </ConfigBlock>

        <Tip>
          Open a project with a .devcontainer folder in VS Code/Cursor and
          it will prompt you to &quot;Reopen in Container&quot;.
        </Tip>
      </DetailSection>

      <DetailSection title="Resource Settings">
        <p className="text-muted-foreground mb-4">
          Configure resources in Docker Desktop → Settings → Resources.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Recommended</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>CPUs: 4-6 (half your cores)</li>
              <li>Memory: 8-12 GB</li>
              <li>Swap: 2 GB</li>
              <li>Disk: 64+ GB</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Tips</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>Increase memory for JVM apps</li>
              <li>Use VirtioFS for faster file sharing</li>
              <li>Enable &quot;Use Rosetta&quot; for x86 images</li>
              <li>Clean up unused images regularly</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Cleanup Commands">
        <CodeBlock language="bash">
          <Comment># Remove stopped containers</Comment>
          {"\n"}
          <Cmd>docker</Cmd> container prune
          {"\n\n"}
          <Comment># Remove unused images</Comment>
          {"\n"}
          <Cmd>docker</Cmd> image prune <Flag>-a</Flag>
          {"\n\n"}
          <Comment># Remove unused volumes</Comment>
          {"\n"}
          <Cmd>docker</Cmd> volume prune
          {"\n\n"}
          <Comment># Remove everything unused</Comment>
          {"\n"}
          <Cmd>docker</Cmd> system prune <Flag>-a</Flag> <Flag>--volumes</Flag>
          {"\n\n"}
          <Comment># Check disk usage</Comment>
          {"\n"}
          <Cmd>docker</Cmd> system df
        </CodeBlock>

        <Tip type="warning">
          <code className="text-primary">docker system prune -a</code> removes all unused
          images, not just dangling ones. Use with caution.
        </Tip>
      </DetailSection>

      <DetailSection title="Useful Aliases">
        <p className="text-muted-foreground mb-4">
          Add these to your ~/.zshrc for faster Docker workflows.
        </p>

        <ConfigBlock filename="~/.zshrc">
{`# Docker aliases
alias d="docker"
alias dc="docker compose"
alias dps="docker ps"
alias dpsa="docker ps -a"
alias dimg="docker images"
alias dlog="docker logs -f"
alias dexec="docker exec -it"
alias dprune="docker system prune -a"

# Quick container shell
dsh() { docker exec -it $1 /bin/sh }
dbash() { docker exec -it $1 /bin/bash }`}
        </ConfigBlock>
      </DetailSection>
    </>
  );
}
