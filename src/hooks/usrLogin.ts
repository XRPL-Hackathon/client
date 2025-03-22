import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "ap-northeast-2_36GFLZBtI",
  ClientId: "7j09fmn00udb6fpt8hhij1jlqk",
};
const userPool = new CognitoUserPool(poolData);

const signIn = (username: string, password: string) => {
  return new Promise((resolve, reject) => {
    const user = new CognitoUser({
      Username: username,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (session) => {
        console.log("로그인 성공", session);
        const accessToken = session.getAccessToken().getJwtToken();

        resolve(accessToken);
      },
      onFailure: (err) => {
        console.error("로그인 실패:", err.message);
        reject(err);
      },
    });
  });
};

export default signIn;
