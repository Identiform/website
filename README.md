<p align="center">
  <a href="https://identiform.com/">
    <img alt="identiForm" src="https://github.com/Identiform/token_sale_starter/blob/master/media/logo.png" width="683">
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
cp -r ./.scripts root@173.212.207.88:/root/
# For subsequent projects, only new .env is needeed
cp ./.env root@173.212.207.88:/root/.scripts
ssh root@173.212.207.88 "chmod +x /root/.scripts/pre_remote.sh"
# Verify permissions (optional):
ssh root@173.212.207.88 "ls -la /root/.scripts"
# Install remote repo:
ssh root@173.212.207.88 "bash /root/.scripts/pre_remote.sh"
# Add remote git repo:
chmod +x pre_local.sh
./pre_local.sh
```

Then any push will be:

```bash
git push origin master
```

## Licence

GPL-v3.0
