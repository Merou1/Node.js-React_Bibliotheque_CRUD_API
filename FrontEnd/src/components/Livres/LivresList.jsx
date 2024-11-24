import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const LivresList = () => {
    const [LivresList,setLivresList] = useState([{}]);
    useEffect(() => {
        fetch("/livres")
        .then(result => result.json())
        .then(data => {
            setLivresList(data)
        })
        .catch(error => {
            console.error("Error fetching data:", error); 
        });
    },[])
    const handleLivreDelete =async (id) => {
        const x = confirm("Are you sure?")
        if(x)  {
            try{
            const response = await axios.delete("http://localhost:4000/livres/delete/"+id);
            console.log("Livre with id : "+id+" Deleted");
            alert("Deleted Successfully")
            setLivresList(l => l.filter(livre => livre.id != id))
            }
            catch(err) {
                console.error(err)
                alert("Error while deleting Livre")
            }

        }
        else {
            return;
        }
    }

    return(
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <div>
            <Link to="/livres/add">Ajouter Livres</Link>
            </div>
            <div>
            <h1>Liste des Livres</h1>
        {
        LivresList.length === 0 
        ? <p>Loading...</p>
        :(
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
            <thead>
                <tr>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Titre</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Nombre De Page</th>
                    <th style={{ border: "1px solid black", padding: "8px" }}>Auteur</th>
                </tr>
            </thead>
            <tbody>
            {LivresList.map((livre,index) => {
                return(
                <tr key={index}>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{livre.titre}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{livre.nbPage}</td>
                    <td style={{ border: "1px solid black", padding: "8px" }}>{livre.auteur}</td>
                    <td>
                        <Link to={`/edit-livre/${livre.id}`}>
                        <button style={{ border: "1px solid black", padding: "8px" , marginRight:"5px"}}>Edit</button>
                        </Link>
                    </td>
                     <td>
                        <button onClick={() => handleLivreDelete(livre.id)} style={{ border: "1px solid black", padding: "8px" }}>Supprimer</button>
                    </td>   

                </tr>
                )
            })}
                
            </tbody>
        </table>)
}
</div>
        </div>
    )
}
export default LivresList;