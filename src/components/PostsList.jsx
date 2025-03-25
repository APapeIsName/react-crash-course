import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList() {
    const [ enteredBody, setEnteredBody ] = useState('');
    const [ enteredAuthor, setEnteredAuthor ] = useState('');
    
    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function changeAuthorHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <NewPost onBodyChange={changeBodyHandler} onAuthorChange={changeAuthorHandler}/>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Manual" body="Check out the full course!"/>
            </ul>
        </>
        
    )
}

export default PostsList;