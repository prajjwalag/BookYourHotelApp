import {z} from 'zod';

const signUpSchema = z.object({
    name: z
        .string()
        .nonempty('Please enter the a valid Name')
        .min(3, 'Name should be atleast 3 characters long.')
        .max(30, 'Name should be less than 30 characters'),

    email: z
        .string()
        .email('Please enter a valid email address'),

    password: z
        .string()
        .regex(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.*\s).{8,30}$/, {
            message: 'Password must be 8-30 characters with atleast one uppercase, one lowercase, one number and one special character.'
        })
});

const signInSchema = signUpSchema.omit({name: true});

export {signInSchema, signUpSchema};
