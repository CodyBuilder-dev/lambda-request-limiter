# lambda-request-limiter
Request Rate Limiter implemented with AWS Lambda &amp; Elasticache

## How To Start
### 1. Set up Elasticache(Redis)

### 2. Create Lambda for request limiter
Do 'npm install' to create 'node_modules'

Create Lambda function named 'Request-limiter'
Rename 'request-limiter.js' to 'index.js'
Zip all files and upload to 'Request-limiter' Lambda function

### 3. Create Lambda for token refiller
Create Lambda function named 'Token-refiller'
Remove 'index.js' that created from 'request-limiter.js'
Rename 'token-refiller.js' to 'index.js'
Zip all files and upload to 'Token-refiller' Lambda function