# SSH Keys

Secure your communication and manage privacy effectively with the following guidelines.

## Main Document

Visit [Using SSH keys to secure Git operations](https://confluence.atlassian.com/bitbucketserver071/using-ssh-keys-to-secure-git-operations-998653473.html) for comprehensive documentation.

**SSH user keys for personal use**

Add an SSH key to your Bitbucket Server account by following the instructions 
- [Creating SSH keys](https://confluence.atlassian.com/bitbucketserver071/creating-ssh-keys-998653482.html)
- [SSH user keys for personal use](https://confluence.atlassian.com/bitbucketserver071/ssh-user-keys-for-personal-use-998653487.html).

## Youtube Tutorial

**Generate SSH Key on Mac & DigitalOcean**

Watch this helpful video tutorial on [How to Generate an SSH Key on Mac & DigitalOcean](https://www.youtube.com/watch?v=ncua01HTxis).

## SSH Key Generation Commands

This is the code from the example on youtube in case you want to delete old key values.

```bash
# Navigate to the SSH directory
cd ~/.ssh

# Remove existing SSH keys (optional, use with caution)
rm -rf .ssh
```

**Generate a new SSH key**

If you don't have an existing SSH key that you wish to use, generate one as follows:

```bash
# Navigate to the SSH directory
cd ~/.ssh

# Generate a new RSA SSH key with your email
ssh-keygen -t rsa -C "example@example.com"
```

**Add an SSH key to your Bitbucket Server account**

On macOS or Linux simply run the following in a terminal:

```bash
# Copy the public key to the clipboard
pbcopy < ~/.ssh/id_rsa.pub
```

Feel free to follow these commands to generate and manage your SSH keys. Ensure that you use caution when removing existing keys, as this action is irreversible.

For more details and customization options, refer to the official [SSH documentation]().

Secure your connections and keep your information private! 🔒
