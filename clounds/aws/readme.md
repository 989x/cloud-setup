# AWS CLI Guide

**Overview of Document**

Enhance your AWS CLI experience with these installation and uninstallation instructions.



## AWS Command Install

If you encounter the error `bash: aws: command not found`, follow these steps to install the AWS CLI:

### Install Python and Pip

You need to install python and pip on your mac in order to install the awscli. After the installation of python and pip, please use following command to install aws cli with latest version from AWS.

```bash
sudo pip install awscli --force-reinstall --upgrade
```

This ensures that you have the latest version of the AWS CLI from AWS.

For more details, refer to [Stack Overflow: bash: aws: command not found](https://stackoverflow.com/questions/56449855/bash-aws-command-not-found).



## AWS Command Uninstall

To uninstall the AWS CLI version 2, follow these steps:

### Step 1: Find the Installation Paths

Find the folder that contains the symlinks to the main program and the completer.

```bash
$ which aws
/usr/local/bin/aws
```

Using this information, find the installation folder that the symlinks point to.

```bash
$ ls -l /usr/local/bin/aws
lrwxrwxrwx 1 ec2-user ec2-user 49 Oct 22 09:49 /usr/local/bin/aws -> /usr/local/aws-cli/aws
```

### Step 2: Delete Symlinks

Delete the two symlinks in the first folder. If your user already has write permission to these folders, you don't need to use sudo.

```bash
$ sudo rm /usr/local/bin/aws
$ sudo rm /usr/local/bin/aws_completer
```

### Step 3: Delete the Installation Folder

Delete the main installation folder. Use sudo to gain write access to the /usr/local folder.

```bash
$ sudo rm -rf /usr/local/aws-cli
```

### Step 4: Remove AWS SDK and AWS CLI Settings (Optional)

(Optional) Remove the shared AWS SDK and AWS CLI settings information in the .aws folder.

The default location of the `.aws` folder differs between platforms, by default the folder is located in `~/.aws/`. If your user has write permission to this directory, you don't need to use `sudo`.

```bash
$ sudo rm -rf ~/.aws/
```

`Warning:` These configuration and credentials settings are shared across all AWS SDKs and the AWS CLI. If you remove this folder, they cannot be accessed by any AWS SDKs that are still on your system.

For more details, refer to [AWS CLI Documentation: Uninstall the AWS CLI version 2](https://docs.aws.amazon.com/cli/latest/userguide/uninstall.html).
