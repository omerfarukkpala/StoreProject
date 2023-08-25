import { useContext } from "react"
import { SiteContext } from "../context/SiteContext"
import Header from "../components/Layout/Header"

export default function Login() {
  const { handleLogin } = useContext(SiteContext)
  return (
    <>
    <Header/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>

      <h3>Login işlemi</h3>
      <button
        className="btn btn-primary"
        onClick={handleLogin}
      >
        Giris Yap..
      </button>
    </>
  )
}