import { useState } from 'react';
import Layout from '../components/layout';
import { useAppContext } from '../store/store';

export default function Create(){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [cover, setCover] = useState("")
    const [intro, setIntro] = useState("")
    const [completed, setCompleted] = useState("")
    const [review, setReview] = useState("")

    const store = useAppContext();

    function handleChange(e){
        const name = e.target.name;
        const value = e.target.value;

        switch(name){
            case 'title':
                setTitle(value);
                break;
            case 'author':
                setAuthor(value);
                break;
            case 'intro':
                setIntro(value);
                break;
            case 'completed':
                setCompleted(e.target.checked);
                break;
            case 'review':
                setReview(value);
                break;
            default:
        }
    }

    // Se procesara imagen desde el mismo frontend para no utilizar un servidor o DB
    function handleOnChangeFile(e){
        const element = e.target; // element se refiere al elemento html, es decir, el input
        const file = element.files[0];
        const reader = new FileReader(); // FileReader es una api que permite manipular archivos desde el navegador

        reader.readAsDataURL(file);

        reader.onloadend = function(){ // Se ejecuta una vez que se pueda leer el archivo
            setCover(reader.result.toString());
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        const newBook = {
            id: crypto.randomUUID(),
            title,
            author,
            cover,
            intro,
            completed,
            review,
        }

        store.createItem(newBook);  // Al importar useAppContext se habilitan las funciones createItem, getItem y updateItem.

    }

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>Title</div>
                    <input 
                     type="text" 
                     name="title" 
                     onChange={handleChange} 
                     value={title}
                    />
                </div>

                <div>
                    <div>Author</div>
                    <input 
                     type="text" 
                     name="author" 
                     onChange={handleChange} 
                     value={author}
                    />
                </div>

                <div>
                    <div>Cover</div>
                    <input 
                     type="file" 
                     name="cover" 
                     onChange={handleOnChangeFile}
                    />
                    <div>{ !!cover ? <img src={cover} width="200" /> : ""} </div> {/* Si cover tiene contenido se cargara imagen sino quedara vacio */}
                </div>

                <div>
                    <div>Introduction</div>
                    <input 
                     type="text" 
                     name="intro" 
                     onChange={handleChange} 
                     value={intro}
                    />
                </div>

                <div>
                    <div>Completed</div>
                    <input 
                     type="checkbox" 
                     name="completed" 
                     onChange={handleChange} 
                     value={completed}
                    />
                </div>

                <div>
                    <div>Review</div>
                    <input 
                     type="text" 
                     name="review" 
                     onChange={handleChange} 
                     value={review}
                    />
                </div>
                <input type="submit" value="Register book"/>
            </form>
        </Layout>
    )
}