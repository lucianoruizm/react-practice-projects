import { useRef } from 'react';
import EmojiPicker from "./emojiPicker";

export default function EmojiPickerInput(){
    
    const refInput = useRef(null);

    // function handleClick(){
    //     refInput.current.focus();
    // } // Al hacer click se hace focus en el input

    return (
        <div>
            <input ref={refInput} />
            {/* <button onClick={handleClick}>Click</button> */}
            <EmojiPicker ref={refInput}/>
        </div>
    )
}