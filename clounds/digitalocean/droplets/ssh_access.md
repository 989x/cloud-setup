# SSH Quickstart


## 1) Generate an SSH key (ed25519)

### Quick command

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_digitalocean
# You’ll be prompted for an optional passphrase (press Enter to skip)
```

### Interactive (prompts shown)

```bash
ssh-keygen

Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/username/.ssh/id_ed25519): /Users/username/.ssh/id_ed25519_digitalocean
# Leave passphrase empty if not needed
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```


## 2) Show your public key

```bash
cat ~/.ssh/id_ed25519_digitalocean.pub
```

Copy this value to your server provider (e.g., DigitalOcean).


## 3) SSH into the server

```bash
ssh -i ~/.ssh/id_ed25519_digitalocean root@139.59.250.179
```


## Tutorial (Optional)

**Deploy Node.js App to DigitalOcean (Free SSL & Custom Domain)**
Watch: [Deploy Node.js App](https://www.youtube.com/watch?v=SSLhGanxmCg)

> Tip: Never share your **private** key (`~/.ssh/id_ed25519_digitalocean`). Only share the **.pub** file.
