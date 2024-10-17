### S3 policy generator
AWS Policy Generator
- https://awspolicygen.s3.amazonaws.com/policygen.html

### Past

```json
{
  "Id": "Policy1689247311207",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1689247247508",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::100000217253:user/developer"
      },
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::ledida/*"
    },
    {
      "Sid": "Stmt1689247306635",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::100000217253:user/developer"
      },
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::ledida"
    }
  ]
}
```

### Present

```json
{
  "Id": "Policy1689351325990",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1689351321124",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::ledida/*",
      "Principal": {
        "AWS": [
          "arn:aws:iam::100000217253:user/developer"
        ]
      }
    }
  ]
}
```