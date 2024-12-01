import { Link } from "react-router-dom";

import loan from "../assets/book.png";
import book from "../assets/open-book.png"; 
import sub from "../assets/add-friend.png"; 


const Welcome = () => {
  return (
    <>
      <div className="background"></div>
      <div className="content">
        <h1
          style={{
            background: "linear-gradient(30deg, white, wheat)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Bibliothèque
        </h1>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '50px' }}>
          <li>
            <Link to="/livres">
              <button className="livres">
                <img src={book} alt="Livres Icon" style={{ width: '20px', marginRight: '10px' }} />
                Livres
              </button>
            </Link>
          </li>
          <li>
            <Link to="/abonnes">
              <button className="abonnes">
                <img src={sub} alt="Abonnés Icon" style={{ width: '20px', marginRight: '10px' }} />
                Abonnés
              </button>
            </Link>
          </li>
          <li>
            <Link to="/prets">
              <button className="prets">
                <img src={loan} alt="Prêts Icon" style={{ width: '20px', marginRight: '10px' }} />
                Prêts
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Welcome;
