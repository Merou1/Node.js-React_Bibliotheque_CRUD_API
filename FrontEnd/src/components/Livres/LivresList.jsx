import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../components/style.css'




const LivresList = () => {
    const [LivresList,setLivresList] = useState([{}]);
    const [search,setSearch] = useState("");
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
    const handleSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }
    const handleFilter = async() => {
        try {
            console.log("search from frontend : "+search)
            const result =await axios.post("http://localhost:4000/livres/filter",{search});
            console.log(result)
            const data = result.data;
            console.log(data)
            if(data.length == 0) alert("No matching data...")
            else setLivresList(data)
        }   
        catch(err) {
            console.error(err)
            alert("Error While Filtering")
        }
    }
    const handleLivreDelete =async (id) => {
        const x = confirm("Are you sure?")
        if(x)  {
            try{
            const pretResp = await axios.get("http://localhost:4000/prets/");
            const result = pretResp.data;

            result.forEach(pret => {
                if (pret.idLivre == id) {
                    throw new Error("Livre est déjà en prêt.");
                }
            });
            const response = await axios.delete("http://localhost:4000/livres/delete/"+id);
            console.log("Livre with id : "+id+" Deleted");
            alert("Deleted Successfully")
            setLivresList(l => l.filter(livre => livre.id != id))
            }
            catch(err) {
                if(err.message == "Livre est déjà en prêt.") {
                    alert("Livre est déjà en pret.");
                    console.error(err.message)
                }
                else {
                    console.error(err)
                    alert("Error while deleting Livre")
                }
            }

        }
        else {
            return;
        }
    }

    return(
        <div className="component">
            <div>
            <Link to="/livres/add"><h3>Ajouter Livres</h3></Link>
            </div>
            <div className="filter">
                <input onChange={handleSearch} type="text" name="" id="" placeholder="Chercher un livre"/>
                <button onClick={handleFilter}>Chercher</button>
            </div>
            <div>
            <h1>Liste des Livres</h1>
        {
        LivresList.length === 0 
        ? <p>Loading...</p>
        :(
        <table >
            <thead>
                <tr>
                    <th >Titre</th>
                    <th >Nombre De Page</th>
                    <th>Auteur</th>
                </tr>
            </thead>
            <tbody>
            {LivresList.map((livre,index) => {
                return(
                <tr key={index}>
                    <td >{livre.titre}</td>
                    <td >{livre.nbPage}</td>
                    <td >{livre.auteur}</td>
                    <td>
                        <Link to={`/edit-livre/${livre.id}`}>
                        <button 
                        >Edit</button>
                        </Link>
                    </td>
                     <td>
                        <button onClick={() => handleLivreDelete(livre.id)}>Supprimer</button>
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