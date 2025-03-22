import * as AWSCognitoIdentity from "amazon-cognito-identity-js";

const userPoolData: AWSCognitoIdentity.ICognitoUserPoolData = {
  UserPoolId: "ap-northeast-2_36GFLZBtI",
  ClientId: "7j09fmn00udb6fpt8hhij1jlqk",
};

export async function signUp({
  Username,
  Password,
  Email,
}: {
  Username: string;
  Password: string;
  Email: string;
}): Promise<{ message: string }> {
  /*
   * Required attributes를 추가
   * */
  const attributeData: AWSCognitoIdentity.ICognitoUserAttributeData = {
    Name: "nickname",
    Value: Username,
  };

  let attributeList: AWSCognitoIdentity.CognitoUserAttribute[] = [
    new AWSCognitoIdentity.CognitoUserAttribute(attributeData),
  ];
  /*
   * CognitoUserPool.signUp() 함수에 다음과 같이 Username, Password, Required attributes를 전달
   * 콜백함수를 통해 결과를 반환
   * */
  return await new Promise((resolve, reject) => {
    const userPool = new AWSCognitoIdentity.CognitoUserPool(userPoolData);

    userPool.signUp(
      Email,
      Password,
      attributeList,
      attributeList,
      (
        err: Error | undefined,
        result: AWSCognitoIdentity.ISignUpResult | undefined
      ): void => {
        if (err) reject({ message: err.message || JSON.stringify(err) });
        else
          resolve({
            message:
              result?.user.getUsername() +
              "님, 회원 가입이 성공적으로 완료되었습니다.",
          });
      }
    );
  });
}
