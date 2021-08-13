module.exports = (request, h) => {

  // Input validation
  if (!request.payload) {
    return h.response({
      message: "Please provide input object",      
    }).code(400)
  }

  var payload = null;
  try {
    payload = JSON.parse(request.payload);
  } catch(e) {
    return h.response({message: "Input format unrecognized"}).code(400)
  }

  // Flatten input into array of nodes
  const dataArr = [].concat(...Object.values(payload));

  return parseTree(dataArr, null);
}

// Recursive function
let parseTree = (nodes, parentId) => {
  return nodes
    .filter((node) => node.parent_id === parentId)
    .reduce((tree, node) => [
      ...tree,
      {
        ...node,
        children: parseTree(nodes, node.id)
      }
    ], [])
}