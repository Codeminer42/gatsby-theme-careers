#!/usr/bin/env bash

SESSION=gatsby-theme-careers

tmux new-session -d -s $SESSION
tmux select-window -t $SESSION:0

tmux send-keys 'cd packages/gatsby-theme-careers; clear' C-m

tmux split-window -h
tmux send-keys 'cd packages/gatsby-theme-careers; clear' C-m

tmux split-window
tmux send-keys 'cd packages/example; clear' C-m

tmux split-window -h
tmux send-keys 'cd packages/example; clear' C-m

tmux select-layout tiled

tmux attach -t $SESSION
