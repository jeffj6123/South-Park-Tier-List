import React, { useContext } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { UserContext } from '../user-context';


export const refreshTokenSetup = (res) => {
    localStorage.setItem('authToken', res.tokenId);

    // Timing to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
  
    const refreshToken = async () => {
      const newAuthRes = await res.reloadAuthResponse();
      refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
      console.log('newAuthRes:', newAuthRes);
      // saveUserToken(newAuthRes.access_token);  <-- save new token
      localStorage.setItem('authToken', newAuthRes.id_token);
  
      // Setup the other timer after the first one
      setTimeout(refreshToken, refreshTiming);
    };
  
    // Setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
  };

const clientId =
  '242188787504-rgmvikkqhmg0uhruc64udgj7q91ltbnp.apps.googleusercontent.com';


export interface OnLoginInfo {
    name: string;
}

export interface LoginProps {
    // onLogin(info: OnLoginInfo): void;
}

export function Login(props: LoginProps) {
    const { setUserState } = useContext(UserContext)
    console.log(setUserState)
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res);
        refreshTokenSetup(res);
        setUserState(res.profileObj.name);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    );
}

export function Logout(props) {
    const { setUserState } = useContext(UserContext)
    console.log(setUserState)

    const onSuccess = () => {
        console.log('Logout made successfully');
        console.log(setUserState)
        setUserState("");
    };

    return (
        <div>
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={() => onSuccess()}
            ></GoogleLogout>
        </div>
    );
}