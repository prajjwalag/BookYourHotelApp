import API_CONFIG from "@/config/api.config";
import PATHS from "@/config/path.config";
import useMutation from "@/lib/hooks/useMutate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { zodResolver } from '@hookform/resolvers/zod';
import { signInSchema } from "@/lib/validators/auth-form-validator";
import { AUTH_TOKEN_KEY, setStorageItem } from "@/lib/storage-manager";
import { useAuthContext } from "@/lib/providers/auth-context-provider";

const useSignInForm = () => {

    const {pending, mutate} = useMutation(API_CONFIG.AUTH.SIGN_IN, 'POST'); 
    const navigate = useNavigate();
    const {refetchCurrentUser} = useAuthContext();

    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(signInSchema)
    });

    function handleSignInSubmit(data) {
        mutate(data, {
            onSuccess: (response) => {
                console.log("Signin Success:", response);
                toast("Logged In Successfully!", {
                    type: "success"
                });
                setStorageItem(AUTH_TOKEN_KEY, response.data.accessToken);
                refetchCurrentUser();
                navigate(PATHS.LANDING );
                
            },
            onError: (error) => {
                console.error("Sign In Error:", error);
                toast("Signin Failed!", {
                    description: error.message,
                    type: "error"
                });
            }
        });
    }

    return {form, handleSignInSubmit, pending};

    
}

export {useSignInForm};