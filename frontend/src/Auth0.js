import React from 'react'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const Auth0 = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const { logout } = useAuth0();
    const { user } = useAuth0();
    return (
        <div>
            {isAuthenticated ?
                <>
                    <button onClick={() => logout()}>Logout</button>
                    {/* {JSON.stringify(user, null, 2)} */}
                </>
                :
                <button onClick={() => loginWithRedirect()}>Login</button>
            }


        </div>
    )

}

export default Auth0
