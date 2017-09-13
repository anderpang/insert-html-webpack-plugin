
function $(query,context){
    return (context||document).querySelector(query);
}

export default $;