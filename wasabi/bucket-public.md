### Public Access

Defining a Bucket Policy for Public Access
- https://docs.wasabi.com/docs/public-access-enabledisable

!!! This code is combine aws policies

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1689351321124",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::100000217253:user/developer"
      },
      "Action": "s3:*",
      "Resource": "arn:aws:s3:::ledida/*"
    },
    {
      "Sid": "AllowPublicRead",
      "Effect": "Allow",
      "Principal": {
        "AWS": "*"
      },
      "Action": ["s3:GetObject", "s3:GetObjectVersion"],
      "Resource": "arn:aws:s3:::YOURBUCKET/*"
    }
  ]
}
```