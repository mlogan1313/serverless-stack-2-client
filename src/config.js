const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1gy6i7i1h22n7"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://llhvpl8i2b.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_eYOhKLpnY",
    APP_CLIENT_ID: "55lb56ku35kinojckeh7081j3l",
    IDENTITY_POOL_ID: "us-east-1:b4c384c3-1655-4ca7-81ae-791a8c8f0474"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-qoh9aupg477b"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://4aj71ib9b2.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_50kFdAoMV",
    APP_CLIENT_ID: "ra3att56jdilgpud6t99tldl9",
    IDENTITY_POOL_ID: "us-east-1:8c1fac78-aba5-4c78-bb55-8176b471cca6"
  }
};

const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};