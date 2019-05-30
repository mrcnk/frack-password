# Frack Password

Firebase Functions based easy way to authenticate ex. for staging server purposes.

## Docs

### Create auth endpoint

> https://us-central1-frackpassword.cloudfunctions.net/createEndpoint

#### Request body

```json
{
  "authCode": "3x4mp13P4ssw0rd"
}
```

#### Response

```json
{
  "endpoint": "1dc47l98n.3i8"
}
```

### Authorize

> https://us-central1-frackpassword.cloudfunctions.net/createEndpoint/:endpoint

#### Request body

```json
{
  "authCode": "3x4mp13P4ssw0rd"
}
```

#### Response

```json
{
  "success": true
}
```

