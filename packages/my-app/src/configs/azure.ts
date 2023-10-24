import {Configuration, InteractionRequiredAuthError, PublicClientApplication} from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: "d2fe63a9-2244-4bc0-94ec-9a47dfca8e71",
    authority: "https://login.microsoftonline.com/common/",
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
    secureCookies: false
  },
  system: {
    loggerOptions: {},
    tokenRenewalOffsetSeconds: 120 // time test expire
  },
  telemetry: {
    application: {
      appName: "Triage Connector",
      appVersion: "1.0.0"
    }
  }
};

export const loginRequest = {
  scopes: ['https://outlook.office365.com/.default'],
  prompt: "consent"
}

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
}

export const msalInstance = new PublicClientApplication(msalConfig as Configuration);

export const getAccountInfo = () => {
  const accounts = msalInstance.getAllAccounts();
  return accounts[0];
};

export const fetchAccessToken = async (instance:any, account:any) => {
  try {
    if (account) {
      const silentRequest = {
        account,
        scopes: loginRequest.scopes
      };

      const response:any = await instance.acquireTokenSilent(silentRequest);
      return response.accessToken
    } else {
      console.log("No active account found");
    }
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      console.log("User interaction is required. Prompting for login...");
      instance.loginRedirect();
    } else {
      console.log("Error acquiring token:", error);
    }
  }
};

export const refreshAccessToken = async () => {
  const account:any = getAccountInfo();
  try {
    const token = await msalInstance.acquireTokenSilent({
      account,
      scopes: loginRequest.scopes,
    });
    return token.accessToken;
  } catch (error) {
    if (error instanceof InteractionRequiredAuthError) {
      return msalInstance
        .acquireTokenPopup(loginRequest)
        .then((resp:any) => {
          return resp.accessToken;
        })
        .catch((err:any) => {
          console.log(err);
        });
    } else {
      console.log(error);
    }
  }
};
