exports.handler = async (event) => {
  const response = {
    statusCode: 200, 
    body: JSON.stringify("Hello from Lambda - Github Actions!"),
  }
  
  return response
}
