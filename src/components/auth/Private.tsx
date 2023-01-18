import { ProfileProps } from "./Profile";
import { Login } from "./Login";

type PrivateProps = {
    isLoggedIn: boolean,
    Component: React.ComponentType<ProfileProps>
}

export const Private = ({isLoggedIn, Component}: PrivateProps) => {
    if (isLoggedIn) {
        return <Component name="Huy"/>
    } else {
        return <Login />
    }
}