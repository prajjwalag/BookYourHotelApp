import API_CONFIG from "@/config/api.config";
import useMutation from "@/lib/hooks/useMutate";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from "../../../lib/validators/auth-form-validator";

const useSignUpForm = () => {

    const {data, pending, mutate} = useMutation(API_CONFIG.AUTH.SIGN_UP, 'POST'); 
    const navigate = useNavigate();

    const form = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        resolver: zodResolver(signUpSchema)
    });

    function handleSignUpSubmit(data) {
        mutate(data, {
            onSuccess: (response) => {
                console.log("Sign Up Success:", response);
                toast("Sign Up Successful!", {
                    description: "You can now log in with your new account.",
                    type: "success"
                });
                navigate("/signin");
            },
            onError: (error) => {
                console.error("Sign Up Error:", error);
                toast("Sign Up Failed!", {
                    description: "Something went wrong.",
                    type: "error"
                });
            }
        });
    }

    return {form, handleSignUpSubmit, pending};

    
}

export {useSignUpForm};