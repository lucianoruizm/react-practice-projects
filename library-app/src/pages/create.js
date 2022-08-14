import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    const inputStyles = {
        formContainer: {
          width: "400px",
          margin: "0 auto",
        },
        container: {
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          margin: "15px 0",
        },
        title: {
          fontSize: "16px",
          textAlign: "left",
          color: "#f1f1f1"
        },
        input: {
          padding: "10px",
          borderRadius: "5px",
          fontSize: "16px",
        },
      };

    const buttonStyle = {
        padding: "15px 20px",
        minWidth: "200px",
        border: "none",
        borderRadius: "5px",
        background: "#1e9638",
        color: "f1f1f1",
        fontWeight: "bolder",
        fontSize: "18px",
    }

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
        navigate("/"); // Con esta función y el parametro dado se enviará a la página Home una vez cargado un libro
    }

    return (
        <Layout>
            <form onSubmit={handleSubmit} style={inputStyles.formContainer}>
                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Title</div>
                    <input
                     style={inputStyles.input} 
                     type="text" 
                     name="title" 
                     onChange={handleChange} 
                     value={title}
                    />
                </div>

                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Author</div>
                    <input
                     style={inputStyles.input} 
                     type="text" 
                     name="author" 
                     onChange={handleChange} 
                     value={author}
                    />
                </div>

                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Cover</div>
                    <input
                     type="file" 
                     name="cover" 
                     onChange={handleOnChangeFile}
                    />
                    <div>{ !!cover ? <img src={cover} width="200" /> : ""} </div> {/* Si cover tiene contenido se cargara imagen sino quedara vacio */}
                </div>

                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Introduction</div>
                    <input
                     style={inputStyles.input} 
                     type="text" 
                     name="intro" 
                     onChange={handleChange} 
                     value={intro}
                    />
                </div>

                <div>
                    <div style={inputStyles.title}>Completed</div>
                    <input
                     type="checkbox" 
                     name="completed" 
                     onChange={handleChange} 
                     value={completed}
                    />
                </div>

                <div style={inputStyles.container}>
                    <div style={inputStyles.title}>Review</div>
                    <input
                     style={inputStyles.input}
                     type="text" 
                     name="review" 
                     onChange={handleChange} 
                     value={review}
                    />
                </div>
                <input style={buttonStyle} type="submit" value="Register book"/>
            </form>
        </Layout>
    )
}