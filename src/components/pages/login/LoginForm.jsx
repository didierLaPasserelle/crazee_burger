import { useState } from "react";

export default function LoginForm() {
    // state
  const [prenom, setPrenom] = useState("")
  
  //comportements
  const handleChange = (e) => {
    setPrenom(e.target.value)
    console.log(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bonjour ${prenom}`)
    setPrenom("")
  }
  return (
<form action="submit" onSubmit={handleSubmit}>
    <h1>Bienvenue chez nous !</h1>
    <br />
    <h2>Connectez-vous</h2>
    <input 
        type="text" 
        placeholder="Entrez votre prénom"
        value={prenom}
        onChange={handleChange}
        required
    />
    <button>Accéder à votre espace</button>
</form>  )
}
