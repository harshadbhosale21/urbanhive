
import { useAuthContext } from '../context/userAuth';
import toast from 'react-hot-toast';

const useLogout = () => {

    const { setAuthUser } = useAuthContext();

    const logout = async () => {
        try {

            const res = await fetch('https://urbanhive-zuco.onrender.com/user/logout', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await res.json();

            if (data.error) {
                throw new Error(data.error)
            };

            sessionStorage.removeItem('token');

            localStorage.removeItem('auth-user');

            setAuthUser(null)

        }
        catch (error) {
            toast.error('error.message');
        }
    }
    return { logout }

}

export default useLogout;
