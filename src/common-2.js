
function setStyle(node,props){
    for(var p in props){
        node.style[p]=props[p];
    }

    return node;
}

export default setStyle;