<p align="center">
  <a href="https://identiform.com/">
    <img alt="identiForm" src="https://github.com/Identiform/website/blob/master/src/assets/img/logo.svg" width="683">
  </a>
</p>

# [identiForm Website](https://identiform.com/)

## Install

```bash
npm i
```

## Run

```bash
npm start
```

## One click deployments

Initially:

```bash
cp -r ./.scripts root@123.123.123.123:/root/
# For subsequent projects, only new .env is needeed
cp ./.env root@123.123.123.123:/root/.scripts
ssh root@123.123.123.123 "chmod +x /root/.scripts/pre_remote.sh"
# Verify permissions (optional):
ssh root@123.123.123.123 "ls -la /root/.scripts"
# Install remote repo:
ssh root@123.123.123.123 "bash /root/.scripts/pre_remote.sh"
# Add remote git repo:
chmod +x pre_local.sh
./pre_local.sh
```

Then any push will be:

```bash
git push production master
```

## Licence

GPL-v3.0
