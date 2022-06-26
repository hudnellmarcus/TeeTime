const ViewButton = (props) => {

   const url = `https://localhost4000/dashboard/${props.teetime.id}`
    
    
    return (
        <a href={url} className="btn waves-effect light-green darken-2">View</a>
    )
}


export default ViewButton; 