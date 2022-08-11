import { useState } from 'react';

export default function Create(){
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [cover, setCover] = useState("")
    const [intro, setIntro] = useState("")
    const [completed, setCompleted] = useState("")
    const [review, setReview] = useState("")

    return (
        <div>
            <form>
                <div>
                    <div>Title</div>
                    <input />
                </div>
            </form>
        </div>
    )
}