import { Navigate } from "react-router-dom"
import useAppContext from "../../hook/useAppContext"

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAppContext()
    return isAuthenticated ? <>{children}</> : <Navigate to='/login' />
}

function RejectedRoute({ children }) {
    const { isAuthenticated } = useAppContext()
    return !isAuthenticated ? <>{children}</> : <Navigate to='/' />
}

function AdminRoute({ children }) {
    const { profile } = useAppContext();
    return profile.role === 'admin' ? <>{children}</> : <Navigate to='/' />
}


export { ProtectedRoute, RejectedRoute, AdminRoute }