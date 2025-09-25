### s3-request-presigner
Signed URL for Image:  https://ledida.s3.us-east-1.wasabisys.com/image-2921843c19eo652602829f5i7w04v847.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=XHJ7YFDB99A1GTJE3V6V%2F20230720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230720T080625Z&X-Amz-Expires=900&X-Amz-Signature=a43a07223797958b4dd6349ebb47cabea659946fc20d3df1d5268abfa64252ef&X-Amz-SignedHeaders=host&x-id=GetObject

### web
https://s3.us-east-1.wasabisys.com/ledida/image-2921843c19eo652602829f5i7w04v847.jpg

### imageUrl
https://ledida.s3.us-east-1.wasabisys.com/image-2921843c19eo652602829f5i7w04v847.jpg

### getObjectCommand response:
```bash
getObjectCommand response:  {
  '$metadata': {
    httpStatusCode: 200,
    requestId: '1BEA53569D91F2CD',
    extendedRequestId: '7c7Qv+kSHOnKUMb5TKSvjyBkfbe2x8Bi7MFqp72IhBKnTm0FGeLBTwAD28PEKa8NKFJStbTJLhqw',
    ...
  },
  AcceptRanges: 'bytes',
  LastModified: 2023-07-20T13:53:37.000Z,
  ContentLength: 21955,
  ETag: '"535bd376032dcaa19d40b50460470696"',
  ContentType: 'application/octet-stream',
  Metadata: {},
  Body: <ref *1> IncomingMessage {
    _readableState: ReadableState {
      ...
      buffer: BufferList { head: [Object], tail: [Object], length: 1 },
      length: 3145,
      ...
    },
    _events: [Object: null prototype] { end: [Function: responseOnEnd] },
    ...
    socket: TLSSocket {
      _tlsOptions: [Object],
      ...
      servername: 'ledida.s3.us-east-1.wasabisys.com',
      ...
      _host: 'ledida.s3.us-east-1.wasabisys.com',
      ...
      server: undefined,
      ...
      [Symbol(connect-options)]: [Object]
    },
    httpVersionMajor: 1,
    ...
    url: '',
    method: null,
    statusCode: 200,
    statusMessage: 'OK',
    client: TLSSocket {
      _tlsOptions: [Object],
      ...
      servername: 'ledida.s3.us-east-1.wasabisys.com',
      ...
      _host: 'ledida.s3.us-east-1.wasabisys.com',
      ...
      [Symbol(connect-options)]: [Object]
    },
    _consuming: false,
    _dumped: false,
    req: ClientRequest {
      _events: [Object: null prototype],
      ...
      socket: [TLSSocket],
      _header: 'GET /image-6gq23032f15y977ls9352n593h8m9cr7.jpg?x-id=GetObject HTTP/1.1\r\n' +
        'host: ledida.s3.us-east-1.wasabisys.com\r\n' +
        'x-amz-user-agent: aws-sdk-js/3.370.0\r\n' +
        'user-agent: aws-sdk-js/3.370.0 ua/2.0 os/darwin#19.6.0 lang/js md/nodejs#18.12.1 api/s3#3.370.0\r\n' +
        'amz-sdk-invocation-id: 4b4d3904-7ef7-4415-8cf7-a510b59ebc64\r\n' +
        'amz-sdk-request: attempt=1; max=3\r\n' +
        'x-amz-date: 20230720T135336Z\r\n' +
        'x-amz-content-sha256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\r\n' +
        'authorization: AWS4-HMAC-SHA256 Credential=XHJ7YFDB99A1GTJE3V6V/20230720/us-east-1/s3/aws4_request, SignedHeaders=amz-sdk-invocation-id;amz-sdk-request;host;x-amz-content-sha256;x-amz-date;x-amz-user-agent, Signature=f802318e6994edc758b8eedc9d6962f0ee2d3b01859e016c6db44c479c1198b3\r\n' +
        'Connection: keep-alive\r\n' +
        '\r\n',
      _keepAliveTimeout: 0,
      ...
      socketPath: undefined,
      method: 'GET',
      ...
      path: '/image-6gq23032f15y977ls9352n593h8m9cr7.jpg?x-id=GetObject',
      ...
      host: 'ledida.s3.us-east-1.wasabisys.com',
      protocol: 'https:',
      ...
    },
    transformToByteArray: [AsyncFunction: transformToByteArray],
    ...
    [Symbol(kHeaders)]: {
      'accept-ranges': 'bytes',
      'content-length': '21955',
      'content-type': 'application/octet-stream',
      date: 'Thu, 20 Jul 2023 13:53:37 GMT',
      etag: '"535bd376032dcaa19d40b50460470696"',
      'last-modified': 'Thu, 20 Jul 2023 13:53:37 GMT',
      server: 'WasabiS3/7.14.311-2023-06-21-10defea71f (head18)',
      'x-amz-id-2': '7c7Qv+kSHOnKUMb5TKSvjyBkfbe2x8Bi7MFqp72IhBKnTm0FGeLBTwAD28PEKa8NKFJStbTJLhqw',
      'x-amz-request-id': '1BEA53569D91F2CD'
    },
    ...
  }
}
```
