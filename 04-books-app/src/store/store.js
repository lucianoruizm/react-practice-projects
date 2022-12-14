// Store generalmente se le da como nombre a la carpeta que contiene
// los archivos que permitan manejar el estado de la aplicación, es decir, un estado de forma global
import { createContext, useContext, useState } from "react"

const AppContext = createContext({
    items: [],
    createItem: (item) =>{},
    getItem: (id) => {},
    updateItem: (item) => {},
    deleteItem: (item) => {},
});

export default function Store({children}){
    const [items, setItems] = useState([]);
    
    function createItem(item) {
        const temp = [ ...items];
        temp.push(item);

        setItems(temp);
    }

    function getItem(id){
        const item = items.find(item => item.id === id);

        return item;
    }

    function updateItem(item){
        const index = items.findIndex((i) => i.id === item.id);
        const temp = [ ...items];

        temp[index] = { ...item};
    }

    function deleteItem(id){
        const item = items.filter(item => item.id !== id)

        return item;
    }

    return (
        <AppContext.Provider
          value={{
              items,
              createItem,
              getItem,
              updateItem,
              deleteItem,
          }}
        >
          {children}
        </AppContext.Provider>
    )
}

export function useAppContext(){
    return useContext(AppContext);
}