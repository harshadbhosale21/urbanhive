import toast from "react-hot-toast";
import { useAuthContext } from "../context/userAuth"
import { useNavigate } from "react-router-dom";


const useLogin = () => {

    const { setAuthUser } = useAuthContext();
    const nav = useNavigate();

    const login = async ({ email, password }) => {
        const success = handleInputErrors({ email, password });

        if (!success) return;

        try {
            const res = await fetch('http://localhost:5000/user/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            console.log(data);

            if (data.error) {
                throw new Error(data.error)
            }

            if (data.token) {
                sessionStorage.setItem('token', data.token)
            }

            sessionStorage.setItem('auth-user', JSON.stringify(data));
            setAuthUser(data)
            toast.success('Successful Login');
            nav('/user-dashboard')
        }
        catch (error) {
            toast.error(error.message)
        }
    }
    return { login }
}

export default useLogin;

function handleInputErrors({ email, password }) {
    if (!email || !password) {
        toast.error('Please fill all fields');
        return false
    }
    return true
}
