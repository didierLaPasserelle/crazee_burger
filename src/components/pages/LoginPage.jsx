import { useState } from "react";

export default function LoginPage() {
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
  
  //render
  return (
    <div>
      <h1>Bienvenue chez nous !</h1>

      <br />
      <h2>Connectez-vous</h2>
     
      <form action="submit" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Entrez votre prénom"
          value={prenom}
          onChange={handleChange}
          required
          />
        <button>Accéder à votre espace</button>
      </form>
    </div>
  );
}