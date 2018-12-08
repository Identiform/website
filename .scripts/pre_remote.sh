#!/bin/bash

cd /opt && \
  git init --bare identiform.git && \
  git clone identiform.git identiform

cp /root/.scripts/post-receive /opt/identiform.git/hooks
chmod ug+x /opt/identiform.git/hooks/post-receive
