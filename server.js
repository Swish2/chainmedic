const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema')
const resolvers = require('./schema/resolver')
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT || 5000

const server = new ApolloServer({typeDefs,resolvers,introspection: true,
  playground: true,context:({req})=>{
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
server.listen(PORT).then(({url})=>{
  console.log(`Running on ${url}`)
})