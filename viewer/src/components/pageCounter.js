import React from 'react';


function PageCounter(props){
    return (
    <div>
        <h4>Page {props.pageNumber} of {props.totalPages} pages.</h4>
    </div>
    );
}
  
export default PageCounter;