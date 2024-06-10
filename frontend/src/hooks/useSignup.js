
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/userAuth';
import toast from 'react-hot-toast';

const useSignup = () => {

    const { setAuthUser } = useAuthContext();
    const nav = useNavigate();

    const signup = async ({ fullName, email, phoneNumber, password, confirmPassword }) => {
        const success = handleInputErrors({ fullName, email, phoneNumber, password, confirmPassword })
        if (!success) return;

        // const payload = { fullName, email, phoneNumber, password, confirmPassword };

        // console.log('Sending payload:', payload);

        try {
            // const response = await axios.post('http://localhost:5000/user/signup', payload,
            //     {
            //         headers: { "Content-Type": "application/json" }
            //     }

            // );
            const res = await fetch('http://localhost:5000/user/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, email, phoneNumber, password, confirmPassword })
            });


            const data = await res.json();
            console.log(data)

            if (data.error) {
                throw new Error(data.error)
            }

            if (data.token) {
                sessionStorage.setItem("token", data.token);
            }

            sessionStorage.setItem("auth-user", JSON.stringify(data));
            setAuthUser(data);
            toast.success("User registered successfully!");
            nav('/user-dashboard')
        }
        catch (error) {
            toast.error(error.message);
        }
    }
    return { signup }
}

export default useSignup;

function handleInputErrors({ fullName, email, phoneNumber, password, confirmPassword }) {
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
        toast.error("Please fill all fields");
        return false
    }

    if (password !== confirmPassword) {
        toast.error('Password do not match')
        return false
    }

    if (password.length < 4) {
        toast.error('Password must be atleast 4 characters')
        return false
    }
    return true
}
