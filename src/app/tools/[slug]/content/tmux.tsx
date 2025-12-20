import {
  ToolHero,
  DetailSection,
  ConfigBlock,
  FeatureList,
  Tip,
} from "@/components/tool-detail";
import { CodeBlock, Comment, Cmd, Str, Flag } from "@/components/code-block";

export default function TmuxPage() {
  return (
    <>
      <ToolHero
        name="tmux"
        description="Terminal multiplexer. Run multiple terminal sessions in one window. Detach and reattach sessions. Essential for remote development and SSH work."
        href="https://github.com/tmux/tmux"
        tags={[{ type: "free" }, { type: "oss" }, { type: "essential" }]}
        glow="green"
        installCommand="brew install tmux"
      />

      <DetailSection title="Why tmux?">
        <FeatureList
          features={[
            "Split terminal into multiple panes (horizontal/vertical)",
            "Detach sessions and reattach later (survives SSH disconnects)",
            "Run long processes without keeping terminal open",
            "Switch between windows like browser tabs",
            "Works identically on Mac, Linux, and servers",
            "Highly customizable with plugins",
            "Share sessions for pair programming",
          ]}
        />
      </DetailSection>

      <DetailSection title="Getting Started">
        <CodeBlock language="bash">
          <Comment># Install tmux</Comment>
          {"\n"}
          <Cmd>brew</Cmd> install tmux
          {"\n\n"}
          <Comment># Start a new session</Comment>
          {"\n"}
          <Cmd>tmux</Cmd>
          {"\n\n"}
          <Comment># Start a named session</Comment>
          {"\n"}
          <Cmd>tmux</Cmd> new <Flag>-s</Flag> myproject
          {"\n\n"}
          <Comment># List sessions</Comment>
          {"\n"}
          <Cmd>tmux</Cmd> ls
          {"\n\n"}
          <Comment># Attach to a session</Comment>
          {"\n"}
          <Cmd>tmux</Cmd> attach <Flag>-t</Flag> myproject
        </CodeBlock>

        <Tip>
          The default prefix key is <code className="text-primary">Ctrl+b</code>.
          All tmux commands start with this prefix.
        </Tip>
      </DetailSection>

      <DetailSection title="Essential Commands">
        <p className="text-muted-foreground mb-4">
          Press <code className="text-primary">Ctrl+b</code> first, then the key.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Sessions</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">d</span> — Detach from session</li>
              <li><span className="text-primary">$</span> — Rename session</li>
              <li><span className="text-primary">s</span> — List/switch sessions</li>
              <li><span className="text-primary">(</span> — Previous session</li>
              <li><span className="text-primary">)</span> — Next session</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Windows (Tabs)</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">c</span> — Create new window</li>
              <li><span className="text-primary">n</span> — Next window</li>
              <li><span className="text-primary">p</span> — Previous window</li>
              <li><span className="text-primary">0-9</span> — Switch to window #</li>
              <li><span className="text-primary">,</span> — Rename window</li>
              <li><span className="text-primary">&</span> — Close window</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Panes (Splits)</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">%</span> — Split vertical</li>
              <li><span className="text-primary">&quot;</span> — Split horizontal</li>
              <li><span className="text-primary">arrows</span> — Navigate panes</li>
              <li><span className="text-primary">z</span> — Toggle pane zoom</li>
              <li><span className="text-primary">x</span> — Close pane</li>
              <li><span className="text-primary">space</span> — Cycle layouts</li>
            </ul>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-3">Other</h4>
            <ul className="text-sm text-muted-foreground space-y-2 font-mono">
              <li><span className="text-primary">?</span> — List all keybindings</li>
              <li><span className="text-primary">[</span> — Enter copy mode</li>
              <li><span className="text-primary">:</span> — Enter command mode</li>
              <li><span className="text-primary">t</span> — Show clock</li>
            </ul>
          </div>
        </div>
      </DetailSection>

      <DetailSection title="Configuration">
        <p className="text-muted-foreground mb-4">
          Create <code className="text-primary">~/.tmux.conf</code> for customization.
        </p>

        <ConfigBlock filename="~/.tmux.conf">
{`# Better prefix (Ctrl+a instead of Ctrl+b)
unbind C-b
set -g prefix C-a
bind C-a send-prefix

# Enable mouse support
set -g mouse on

# Start windows and panes at 1, not 0
set -g base-index 1
setw -g pane-base-index 1

# Renumber windows when one is closed
set -g renumber-windows on

# Split panes using | and -
bind | split-window -h -c "#{pane_current_path}"
bind - split-window -v -c "#{pane_current_path}"
unbind '"'
unbind %

# Navigate panes with vim keys
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Resize panes with Shift+arrows
bind -r H resize-pane -L 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5
bind -r L resize-pane -R 5

# Fast reload config
bind r source-file ~/.tmux.conf \\; display "Config reloaded!"

# Increase scrollback buffer
set -g history-limit 50000

# Better colors
set -g default-terminal "screen-256color"
set -ga terminal-overrides ",xterm-256color:Tc"

# Status bar styling
set -g status-style 'bg=#1e1e2e fg=#cdd6f4'
set -g status-left '#[fg=#89b4fa,bold] #S '
set -g status-right '#[fg=#a6adc8] %H:%M '`}
        </ConfigBlock>

        <CodeBlock language="bash">
          <Comment># Reload config after changes</Comment>
          {"\n"}
          <Cmd>tmux</Cmd> source-file ~/.tmux.conf
        </CodeBlock>
      </DetailSection>

      <DetailSection title="Common Workflows">
        <div className="space-y-4">
          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Development Layout</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Editor on left, terminal on right, logs at bottom.
            </p>
            <CodeBlock language="bash">
              <Comment># Create a dev session with layout</Comment>
              {"\n"}
              <Cmd>tmux</Cmd> new <Flag>-s</Flag> dev
              {"\n"}
              <Comment># In tmux: Ctrl+b % (split right)</Comment>
              {"\n"}
              <Comment># In tmux: Ctrl+b &quot; (split bottom in right pane)</Comment>
            </CodeBlock>
          </div>

          <div className="bg-card/50 border border-border/50 rounded-lg p-4">
            <h4 className="font-medium text-foreground mb-2">Remote Work</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Start a session on server, detach, reconnect later.
            </p>
            <CodeBlock language="bash">
              <Comment># SSH to server and start tmux</Comment>
              {"\n"}
              <Cmd>ssh</Cmd> server
              {"\n"}
              <Cmd>tmux</Cmd> new <Flag>-s</Flag> work
              {"\n\n"}
              <Comment># Do your work, then detach (Ctrl+b d)</Comment>
              {"\n"}
              <Comment># Later, reconnect</Comment>
              {"\n"}
              <Cmd>ssh</Cmd> server
              {"\n"}
              <Cmd>tmux</Cmd> attach <Flag>-t</Flag> work
            </CodeBlock>
          </div>
        </div>

        <Tip>
          If you get disconnected from SSH, your tmux session keeps running.
          Just reconnect and <code className="text-primary">tmux attach</code>.
        </Tip>
      </DetailSection>

      <DetailSection title="Plugin Manager (TPM)">
        <CodeBlock language="bash">
          <Comment># Install TPM</Comment>
          {"\n"}
          <Cmd>git</Cmd> clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
        </CodeBlock>

        <ConfigBlock filename="~/.tmux.conf (add at bottom)">
{`# List of plugins
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'tmux-plugins/tmux-resurrect'  # Save/restore sessions
set -g @plugin 'tmux-plugins/tmux-continuum'  # Auto-save sessions
set -g @plugin 'catppuccin/tmux'              # Nice theme

# Initialize TPM (keep at very bottom)
run '~/.tmux/plugins/tpm/tpm'`}
        </ConfigBlock>

        <p className="text-muted-foreground mt-4">
          Press <code className="text-primary">Ctrl+b I</code> (capital I) to install plugins.
        </p>
      </DetailSection>
    </>
  );
}
