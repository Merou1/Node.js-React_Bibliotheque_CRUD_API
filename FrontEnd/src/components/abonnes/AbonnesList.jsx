import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../components/style.css'


const AbonnesList = () => {

    const [abonnes,setAbonnes] = useState([{}])

    useEffect(() => {
        fetch("/abonnes")
        .then(result => result.json())
        .then(data => setAbonnes(data))
        .catch(error => console.error(error))
    },[])
    const handleDeleteAbonne =async (id) => {
        try{
            const x = confirm("Are you sure ?");
            console.log(x)
            if(x) {
                const response = await axios.delete("http://localhost:4000/abonnes/delete/"+id)
                console.log("Abonne with id: "+id+" deleted")
                alert("Deleted Successfully")
                setAbonnes(a => a.filter(abonne => abonne.id != id))
            }
            else {
                return;
            }
        }
        catch(err) {
            console.error(err);
            alert("Error while deleting Abonne")
        }
    }

    return(
        <>
        <div className="component" >

        <div>
            <Link to="/abonnes/add"><h3>Ajouter abonne</h3></Link>
        </div>
        <div>
        <h1>Liste des Abonnés</h1>
        {
        abonnes.length ==0
        ? (<p>Loading...</p> )
        :(<table >
            <thead>
                <tr>
                    <th >Type d'Abonnement</th>
                    <th >Durrée en Mois</th>
                </tr>
            </thead>
            <tbody>
                {abonnes.map((abonne,index) => {
                    return(
                    <tr key={index}>
                        <td >{abonne.typeAbonnement}</td>
                        <td >{abonne.dureeEnMois}</td>
                        <td>
                            <Link to={`/edit-abonne/${abonne.id}`}>
                            <button >Edit</button>
                            </Link>
                        </td>

                        <td>
                            <button onClick={() => handleDeleteAbonne(abonne.id)}>Supprimer</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>)
        }
         </div>
           </div>
        </>
    )
}
export default AbonnesList;