import { Link, useParams } from "react-router-dom"

export default function OrderPage() {

  const {prenom} = useParams()
  console.log("prenom :", prenom);

  return (
  <div>
      <h1>Bonjour {prenom} </h1>
      <Link to="/">
        <button>Déconnexion</button>
      </Link>
  </div>
  )
}
