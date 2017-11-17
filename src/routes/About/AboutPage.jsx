import React from 'react';

var author = "PoorPolonius";
var repository = "https://github.com/PoorPolonius/react-ui-demo.git";

function AboutPage() {
    
    return (
        <div>
            <h2>About React UI Demo</h2>
            <br />
            <ul>
                <li>Author: {author}</li>
                <li>Repository: <a href={repository}>{repository}</a></li>
            </ul>
        </div>
    );
}

export default AboutPage;