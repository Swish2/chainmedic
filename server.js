const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./schema/resolver')
const jwt = require('jsonwebtoken')

const server = new ApolloServer({typeDefs,resolvers,context:({req})=>{
  const token = req.headers.authorization || ''
  let user;
  try {
    user = jwt.verify(token, 'shhhhh');
  } catch(err) {
    // err
  }
  if(!user){
    return {user:null}
  }
  return {user}
}})
server.listen(5000).then(({url})=>{
  console.log(`Running on ${url}`)
})