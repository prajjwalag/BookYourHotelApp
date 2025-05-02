import AuthLayout from '@/components/layouts/auth.layout'
import SignIn from './signin'
import SignUp from './signup'
import React from 'react'

const SignInPage = () => {
  return (
    <AuthLayout title={"Welcome Back"} description="Please enter your details to Sign in">
        <SignIn />
    </AuthLayout>
  )
}

const SignUpPage = () => {
    return (
      <AuthLayout title={"Create Account"} description="Please fill the form to Sign up">
          <SignUp />
      </AuthLayout>
    )
  }

export {SignInPage, SignUpPage}
