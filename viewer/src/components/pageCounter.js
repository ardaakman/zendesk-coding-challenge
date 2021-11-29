import React from 'react';


//Component that creates a simple counter for which page we are currently on.
function PageCounter(props){
    return (
    <div>
        <h4>Page {props.pageNumber} of {props.totalPages} pages.</h4>
    </div>
    );
}
  
export default PageCounter;