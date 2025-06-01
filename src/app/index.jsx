import AuthContextProvider from "@/lib/providers/auth-context-provider"
import Router from "./router"
import { Toaster } from "sonner"



const App = () => {
  return (
    <AuthContextProvider>
      <Router/>
      <Toaster position="top-center" richColors/>
    </AuthContextProvider>
  )
}

export default App
