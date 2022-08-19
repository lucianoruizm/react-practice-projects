import { useRef } from 'react';
import EmojiPicker from "./emojiPicker";
import styles from "./emojiPicker.module.scss";

export default function EmojiPickerInput(){
    
    const refInput = useRef(null);

    // function handleClick(){
    //     refInput.current.focus();
    // } // Al hacer click se hace focus en el input

    return (
        <div>
            <input className={styles.emojiInput} placeholder="Write your text here..." ref={refInput} />
            {/* <button onClick={handleClick}>Click</button> */}
            <EmojiPicker ref={refInput}/>
        </div>
    )
}