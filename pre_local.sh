#!/bin/bash

cp -r ./.scripts root@123.123.123.123:/root/
# For subsequent projects, only new .env is needeed
cp ./.env root@123.123.123.123:/root/.scripts
ssh root@123.123.123.123 "chmod +x /root/.scripts/pre_remote.sh"
# Verify permissions (optional):
ssh root@123.123.123.123 "ls -la /root/.scripts"
# Install remote repo:
ssh root@123.123.123.123 "bash /root/.scripts/pre_remote.sh"
# Add remote git repo:

git remote add production ssh://root@173.212.207.88/opt/identiform.git
git remote -v
