# SSH Keygen

To generate an SSH key pair, use the following command:

```bash
❯ ssh-keygen

Generating public/private ed25519 key pair.
Enter file in which to save the key (/Users/usernamex/.ssh/id_ed25519): /Users/usernamex/.ssh/id_ed25519_digitalocean
# Leave passphrase empty if not needed
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

To display the public key, use:

```bash
❯ cat ~/.ssh/id_ed25519_digitalocean.pub
```

# Access To Server

```bash
ssh -i /Users/userabc/.ssh/id_ed25519_digitalocean root@139.59.127.244
```

---

# Tutorial

In this example, we use Golang, but the process can be adapted for other environments.

### Deploy Node.js App to DigitalOcean in 10 Minutes (Free SSL & Custom Domain)

Watch this tutorial on YouTube:  
[Deploy Node.js App](https://www.youtube.com/watch?v=SSLhGanxmCg)
