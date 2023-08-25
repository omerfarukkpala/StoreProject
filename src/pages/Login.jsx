import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"
import Header from "../components/Layout/Header"

export default function Login() {
  const { handleLogin } = useContext(SiteContext)
  return (
    <>
    <Header/>
      <h1>Login</h1>
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Giris Yap..
      </button>
    </>
  )
}