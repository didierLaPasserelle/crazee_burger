import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginForm() {
    // state
  const [prenom, setPrenom] = useState("")
  const navigate = useNavigate()
  
  //comportements
  const handleChange = (e) => {
    setPrenom(e.target.value)
    console.log(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Bonjour ${prenom}`)
    setPrenom("")
    navigate(`order/${prenom}`)
  }
  return (
<form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2 style={{ color:"red", backgroundColor: "blue", fontSize: 20 }}>Connectez-vous</h2>
    <input 
        type="text" 
        placeholder="Entrez votre prénom"
        value={prenom}
        onChange={handleChange}
        required
    />
    <div>Accéder à votre espace</div>
</form>  )
}

