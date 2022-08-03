import { forwardRef, useEffect, useRef, useState } from "react";
import { data as emojiList } from './data';
import EmojiButton from "./emojiButton";
import EmojiSearch from "./emojiSearch";

export  function EmojiPicker(props, inputRef){
    
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState([...emojiList]);

    const containerRef = useRef(null); // ContainerRef hace referencia a la capa contenedora de emojis

    useEffect(() => {
        window.addEventListener('click', e => {
            if(!containerRef.current.contains(e.target)) {
                setIsOpen(false);
                setEmojis(emojiList);
            } // El if se refiere a cuando el elemento no sea padre de todo el contenedor
        })
    }, []);  // Por ejemplo cuando se clickea fuera del contenedor setIsOpes se vuelve false, es decir, el contenedor de emojis se cierra 

    function handleClickOpen(){
        setIsOpen(!isOpen);
    }

    function handleSearch(e) {
        const q = e.target.value;
    
        if (!!q) {
          const search = emojiList.filter((emoji) => {
            return (
              emoji.name.toLowerCase().includes(q) ||
              emoji.keywords.toLowerCase().includes(q)
            );
          });
    
          setEmojis(search);
        } else {
          setEmojis(emojiList);
        }
      }

    // function EmojiPickerContainer(){
    //     return (
    //         <div>
    //             <EmojiSearch onSearch={handleSearch} />
    //             <div>
    //                 {emojis.map((emoji) => (
    //                 <div key={emoji.symbol}>{emoji.symbol}</div>))}
    //             </div>
    //         </div>
    //     )
    // }

    function handleOnClickEmoji(emoji){
        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);

        inputRef.current.value = prev + emoji.symbol + next;
        inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
        inputRef.current.focus(); // Mantien el focus en el input cuando se agregan emojis
    }

    return (
        <div ref={containerRef}>
            <button onClick={handleClickOpen}>😃</button>
            
            {isOpen ? (
              <div>
                  <EmojiSearch onSearch={handleSearch} />
                  <div>
                    {emojis.map((emoji) => (
                      <EmojiButton 
                        key={emoji.symbol} 
                        emoji={emoji} 
                        onClick={handleOnClickEmoji} 
                      />
                    ))}
                  </div>
              </div>
            ) : ('')}
        </div>
    )
}

export default forwardRef(EmojiPicker);