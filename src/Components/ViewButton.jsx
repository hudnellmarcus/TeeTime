const ViewButton = (props) => {

   const url = `https://teetime0213.herokuapp.com/dashboard/${props.teetime.id}`
    
    
    return (
        <a href={url} className="btn waves-effect light-green darken-2">View</a>
    )
}


export default ViewButton; 