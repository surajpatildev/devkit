import { notFound } from "next/navigation";
import { getToolBySlug, getToolsWithDetailPages } from "@/lib/tools";

// Import all tool detail pages
import GhosttyPage from "./content/ghostty";
import WarpPage from "./content/warp";
import TmuxPage from "./content/tmux";
import LazygitPage from "./content/lazygit";
import OhMyZshPage from "./content/oh-my-zsh";
import StarshipPage from "./content/starship";
import ModernCliPage from "./content/modern-cli";
import VSCodePage from "./content/vscode";
import CursorPage from "./content/cursor";
import PyCharmPage from "./content/pycharm";
import ZedPage from "./content/zed";
import RaycastPage from "./content/raycast";
import RectanglePage from "./content/rectangle";
import AeroSpacePage from "./content/aerospace";
import ClaudeCodePage from "./content/claude-code";
import GitHubCopilotPage from "./content/github-copilot";
import ClaudeDesktopPage from "./content/claude-desktop";
import GitPage from "./content/git";
import UvPage from "./content/uv";
import FnmPage from "./content/fnm";
import DockerPage from "./content/docker";
import OrbStackPage from "./content/orbstack";
import ConfigPage from "./content/config";

// Map slugs to components
const toolPages: Record<string, React.ComponentType> = {
  config: ConfigPage,
  ghostty: GhosttyPage,
  warp: WarpPage,
  tmux: TmuxPage,
  lazygit: LazygitPage,
  "oh-my-zsh": OhMyZshPage,
  starship: StarshipPage,
  "modern-cli": ModernCliPage,
  vscode: VSCodePage,
  cursor: CursorPage,
  pycharm: PyCharmPage,
  zed: ZedPage,
  raycast: RaycastPage,
  rectangle: RectanglePage,
  aerospace: AeroSpacePage,
  "claude-code": ClaudeCodePage,
  "github-copilot": GitHubCopilotPage,
  "claude-desktop": ClaudeDesktopPage,
  git: GitPage,
  uv: UvPage,
  fnm: FnmPage,
  docker: DockerPage,
  orbstack: OrbStackPage,
};

export function generateStaticParams() {
  const tools = getToolsWithDetailPages();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) {
    return { title: "Tool Not Found" };
  }
  return {
    title: `${tool.name} Setup Guide | DevKit`,
    description: tool.description,
  };
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  const PageComponent = toolPages[slug];

  if (!tool || !PageComponent) {
    notFound();
  }

  return <PageComponent />;
}
