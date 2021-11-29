import react from 'react'


//Component to draw a horizontal line. Color and height (in this context, it is width) are props.
function LineComponent(props){
    return (
    <hr
        style={{
            color: props.color,
            height: props.height
        }}
    />
    )
}

export default LineComponent