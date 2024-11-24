import { Link } from "react-router-dom";
const Welcome = () => {
    return(
        <>
        <h1>Bibliothèque</h1>
        <ul style={{listStyleType:'none',display:'flex',gap:'50px'}}>
        <li>
          <Link to="/livres">Livres</Link>
        </li>
        <li>
          <Link to="/abonnes">Abonnés</Link>
        </li>
        <li>
          <Link to="/prets">Prêts</Link>
        </li>
      </ul>   
        </>

        
    )
}
export default Welcome;