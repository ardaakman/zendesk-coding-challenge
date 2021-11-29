import react from 'react'

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