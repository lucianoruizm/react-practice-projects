import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";

export default function View(){
    const [item, setItem] = useState(null);
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId);
        setItem(book);
    }, []);

    const itemStyles = {
        container: {
            display: "flex",
            gap: "20px",
            color: "#f1f1f1",
            width: "800px",
            margin: "0 auto",
        }
    }

    if(!item){ 
        // si item esta vacio
        return <Layout>Item not found</Layout>
    }

    return (
        <Layout>
           <div style={itemStyles.container}>
             <div>
             {/* ? significa que es opcional, puede llegar a no existir el item */}
               <div>{item?.cover ? <img src={item?.cover} width="400" /> : ''}</div>
             </div>
             <div>
               <h2>{item?.title}</h2> 
               <div>{item?.author}</div>
               <div>{item?.intro}</div>
               <div>{item?.completed ? 'Completed' : 'Por terminar'}</div>
               <div>{item?.review}</div>
             </div>
            </div>
        </Layout>
    )
}