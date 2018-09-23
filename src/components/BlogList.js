import React from 'react'

const BlogList = props => {
    return (
        <div style={styles.parentBox}>
            <div style={styles.blogBox}>
                <h1>{props.title}</h1>
                <p>{props.author} - {props.date}</p>
                <p>{props.content}</p>
            </div>
        </div>
    )
}

const styles = {
    parentBox : {
        display: "flex",
        justifyContent: "center"
    },
    blogBox : {
        width: "500px",
        height: "300px",
        border: "2px solid #111"
    }
}

export default BlogList
