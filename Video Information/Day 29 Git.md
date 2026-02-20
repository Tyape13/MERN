This is gonna be Really Useful Series


### 1 - what is git and github
git is version control system
- tool that helps to TRACK change in code. 
1.1 or 1.2 ko versions ma updates and improvements tracks
NICEEEE
- we can COLLABORATE
- free and OpenSource and popular and stable

Github is where we host repositories(folder/directories) online, 
coding ko online profile, like facebook but for our coding skills

### 2 - creating github account
yeah

### 3 - using github
ok I need to master this one, cause Merge related stuff and New concept sala Forking re, I have no idea what are those so i will be learnign this today.
New things.
what is readme.md - optional huxna, tell why this projects exists. good practice. 
Commit - Snapshots from main parent image. that's why it's light in size.

### 4/5 - ways to use git
command lines
gui stuff
ide


### 6 - configuring git
git should have installed cause we installed so it should be on the path so it should work in terminal.

idk if we need to use both command:
`git config --global user.name "MyName"`
`git config --global user.email "emailbatelogin@nothing.com"`

to test:
`git config --list`


### 7 - Clone and status command
`git clone -b NewBranch https://github.com/MyName/MyRepo.git`

Ohh first we need to clone whatever we have branch online with ReadMe.md file.
then we add inside then push.
or use no ReadMe.md and just copy paste every command from github mai diyeko to initialize any folder and connect it to github.

### 8 - status bare
what does this mean.
yeah, she explains whole concepts. 

### 9 - add, commit, push
`git add .`
`git commit -m "Fixes: Frontend Changes and Specific Bugs Fixed"`
`git push`

"git push -u origin main or something k command thyo idk first time."


### 10 - Push command
git push origin main
origin is our git repo, tyo url ko repository ko whole content.
main is branch we are working on.

first time ma it will take you to login through browser and github should be logged in to authorize.
I ME MYSELF didn't remember how to connect new account to git and github cause, 
SYSTEM made it really so easy it will give steps to just click next next and bam.


### 11 - First Initialization of existing folder into Github
git init
git remote add origin  <link>
git remote -v (to verify)
git branch (to chekc branch, can't i use status, checkout, switch)
git branch -M main (to rename branch??? what??? idk bro, it renames but not used frequently)
git push origin main

if it's not possible to git pull, add, commit, push, then try this:
git init 
in that new folder.


### 12 - ohhh from folder to github linking (not cloning and changing)
that's why using git init into new folder. 
creating new repo online. 
then we see code 
and copy paste.

she talks about 
-u = Up stream set garna ki kun thau is orign stuff always for this folder so we git pull/push
when we use `git push -u origin main`
this sets origin main as origin by default or something
so we dont have to always do `git push origin NewBranch`
and we can just `git push`

new command: 
`git commit -am "if no new file, then add and message"`
then git push


### 13 - git branches
concept

### 14 - branch commands
git branch :- (to see which branch we on, like pwd.)
git branch -M main :- (to rename branch)
git checkout -b featureButton :- (to create new branch and switch to it)
git checkout main :- (to switch to another branch)
git branch -d <-BranchName> :- (to delete branch, can't delete current working branch, go to main and delete test branch)


### 15/16 - how to Merge Branch (IMPORTANT VIDEO)
New commands:
git diff <branchName> :- (to compare: commits branches files but we use for branches MOSTLY )
git merge <branchName> :- (to merge branch into current branch)

she shows in github, when we click (compare & pull) button 
we in main branch, it shows (compare & pull) cause feature branch has some changes.
we see it shows "main <- feature" or something
IT SHOWS ABLE TO MERGE.... NICEEEEE

No conflicts here cause new file but when both branch has same file and same line of code, then it will show conflict. idk why it won't take latest one but it doesn't and that's a good thing cause WE CHOOSE.

Now We delete Feature Branch cause Let's not Overcomplicate Branches by keeping nonsense Branch.


### 17 - Pull command.
remote ma change vako things we use Pull command.



### 18 - MERGE CONFLICT
OHHH, NEW CHANGES IN BOTH BRANCHES, in Same LINE. so which change works, GIT DONT KNOW.

current branch: main

git diff NewBranch
git branch
git merge NewBranch

This will give us, code to manually Put or Delete Code from 2 branches. 
we remove "<<<"  ">>>" "===" these 3 lines that specify 'current one' 'incomming change from another branch' and 'separation between code'
removing these lines manually and putting code manually which we need is manual changes.

then we do regular one add, commit and push


### 19 - FIXING MISTAKES. I had to do this once. 
when we add, unwanted changes. so we unadd using:
`git reset app.js`
or
`git reset` - to remove everything added i think or dot at last maybe

case 2: for commited changes (1 commit)
`git reset HEAD~1` - Head is the Pointer that points to last commit.
so HEAD~1 is second last commit. so it reset to last commit.

case 3 - when multiple commits
`git reset HEAD~2` - to reset to 2nd last commit. we dont usually do this i think n use commit hash 

`git log` - we find the commit hash of 2nd last commit.
then we do `git reset <commit-hash>`

then LOCAL FILES will still have those changes. we have to manually remove those changes. 
Green and Yellow status dekhinxa.

`git reset --hard <commit-hash>` - EVERYTHING will be Gone new Change and we be going to PAST. with nothing New Green/Yellow New ones.


when using hard - it's exactly that commit ko point
when not using --hard - new changes will still be locally with green/yellow status


### 20 - FORK - to contribute in open source codes.
when we go to public open source code then we fork it then it will create a new repo in our github account.
then we can learn edit and give changes to the person that created that repo. 

until we created pull request it won't be seen by those developers.
