### aws command install

bash: aws: command not found
- https://stackoverflow.com/questions/56449855/bash-aws-command-not-found

you need to install python and pip on your mac in order to install the awscli. After the installation of python and pip, please use following command to install aws cli with latest version from AWS.

```bash
sudo pip install awscli --force-reinstall --upgrade
```

### aws command uninstall

Uninstall the AWS CLI version 2
- https://docs.aws.amazon.com/cli/latest/userguide/uninstall.html

To uninstall the AWS CLI version 2, run the following commands, substituting the paths you used to install. The example commands use the default installation paths.

1.Find the folder that contains the symlinks to the main program and the completer.

```bash
$ which aws
/usr/local/bin/aws
```

2.Using that information, run the following command to find the installation folder that the symlinks point to.

```bash
$ ls -l /usr/local/bin/aws
lrwxrwxrwx 1 ec2-user ec2-user 49 Oct 22 09:49 /usr/local/bin/aws -> /usr/local/aws-cli/aws
```

3.Delete the two symlinks in the first folder. If your user already has write permission to these folders, you don't need to use sudo.

```bash
$ sudo rm /usr/local/bin/aws
$ sudo rm /usr/local/bin/aws_completer
```

4.Delete the main installation folder. Use sudo to gain write access to the /usr/local folder.

```bash
$ sudo rm -rf /usr/local/aws-cli
```

5.(Optional) Remove the shared AWS SDK and AWS CLI settings information in the .aws folder.

```
Warning
These configuration and credentials settings are shared across all AWS SDKs and the AWS CLI. If you remove this folder, they cannot be accessed by any AWS SDKs that are still on your system.
```

The default location of the `.aws` folder differs between platforms, by default the folder is located in `~/.aws/`. If your user has write permission to this directory, you don't need to use `sudo`.

```bash
$ sudo rm -rf ~/.aws/
```
