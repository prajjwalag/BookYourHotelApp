import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import React from 'react'
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router';
import PATHS from '@/config/path.config';
import { useSignUpForm } from './hooks/use-sign-up-form';

const SignUp = () => {

    const { form, handleSignUpSubmit, pending } = useSignUpForm();
    const [showPassword, setShowPassword] = useState(false);
    
    const handleHidePassword = (e) => {
        e.preventDefault(); 
        setShowPassword(prev => !prev);
    }

    return (
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSignUpSubmit)} className='w-full mt-8 space-y-5'>
                    <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                                <Input  {...field} className="h-10 rounded"/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

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
                                <div className='relative'>
                                    <Input type={showPassword?'text':'password'} {...field} className="h-10 rounded pr-10"/>
                                    <Button type="button" variant='ghost' onClick={(e) =>handleHidePassword(e)} aria-label="Show Password" className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500'>
                                        <Icon icon="eye"/>
                                    </Button>
                                </div>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} />

                    <Button type="submit" className="w-full h-10" aria-label="Create a New Account" disabled={pending}>Create New Account</Button>
                </form>
            </Form>
            <div className='flex items-center justify-centermt-6'>
                <span className='text-sm '>
                    Already have an account? <Link to={PATHS.SINGIN} className='text-primary hover:underline'>Sign In</Link>
                </span>
            </div>
        </>
    )
}

export default SignUp
