import Router from "./router"
import { Toaster } from "sonner"



const App = () => {
  return (
    <>
      <Router/>
      <Toaster position="top-center" richColors/>
    </>
  )
}

export default App
