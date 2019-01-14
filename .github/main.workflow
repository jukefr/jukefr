workflow "Master Publish" {
  on = "push"
  resolves = ["Git Push"]
}

action "isMaster" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Remove Public" {
  uses = "actions/bin/sh@master"
  needs = ["isMaster"]
  args = ["rm -rf out/"]
}

action "Create Public" {
  uses = "actions/bin/sh@master"
  args = ["mkdir out"]
  needs = ["Remove Public"]
}

action "Clean Worktree" {
  uses = "jukefr/actions/git@master"
  needs = ["Create Public"]
  args = ["worktree prune"]
}

action "Clean Worktree Public" {
  uses = "actions/bin/sh@master"
  needs = ["Clean Worktree"]
  args = ["rm -rf .git/worktrees/out/"]
}

action "Checkout gh-pages" {
  uses = "jukefr/actions/git@master"
  args = ["worktree add -B gh-pages out origin/gh-pages"]
  needs = ["Clean Worktree Public"]
}

action "Clean Public (gh-pages)" {
  uses = "actions/bin/sh@master"
  args = ["rm -rf out/*"]
  needs = ["Checkout gh-pages"]
}

action "Build" {
  uses = "jukefr/actions/node@master"
  needs = ["Clean Public (gh-pages)"]
  args  = ["npm i && npm run build"]
}

action "Add CNAME" {
  uses = "actions/bin/sh@master"
  args = ["echo juke.fr >> out/CNAME"]
  needs = ["Build"]
}

action "Add .nojekyll" {
  uses = "actions/bin/sh@master"
  args = ["echo nextjs >> out/.nojekyll"]
  needs = ["Add CNAME"]
}

action "Git Add" {
  uses = "jukefr/actions/git@master"
  needs = ["Add .nojekyll"]
  args = ["-C out add --all"]
} 

action "Git Commit" {
  uses = "jukefr/actions/git@master"
  needs = ["Git Add"]
  args = ["-C out commit -m github-actions-build"]
}

action "Git Push" {
  uses = "jukefr/actions/git@master"
  args = ["push origin gh-pages"]
  needs = ["Git Commit"]
  secrets = ["GIT_TOKEN", "GIT_USER"]
}
