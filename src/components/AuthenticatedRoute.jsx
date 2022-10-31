import Auth from "../contexts/Auth";

const AuthenticatedRoute = ({ path, component }) => {
    const {isAuthenticated } = useContext(Auth);

    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to='/login' />
    )
}

export default AuthenticatedRoute