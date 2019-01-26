workflow "Now.sh" {
  on = "push"
  resolves = ["Deploy"]
}

action "isMaster" {
  uses = "actions/bin/filter@master"
  args = "branch master"
}

action "Deploy" {
  uses = "jukefr/actions/node@master"
  needs = ["isMaster"]
  args  = ["npm i -g now && now"]
  secrets = ["NOW_TOKEN"]
}