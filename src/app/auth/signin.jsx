import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useForm } from 'react-hook-form'

const SignIn = () => {
    const form = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data) => {
        console.log("Got the data...", data);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='w-full mt-8 space-y-5'>

                    <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type='email' {...field} className="h-10 rounded"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <FormField control={form.control} name="password" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type='password' {...field} className="h-10 rounded"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <Button type="submit" className="w-full h-10" aria-label="Login to your Account">Login</Button>
                </form>
            </Form>
            <div className='flex items-center justify-centermt-6'>
                <span className='text-sm '>
                    Dont't have an account? <a href="" className='text-primary hover:underline'>Create Account</a>
                </span>
            </div>
        </>
    )
}

export default SignIn
