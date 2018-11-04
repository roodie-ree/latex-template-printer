'use strict'

const graphql = require('graphql')

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
} = graphql

const TemplateType = new GraphQLObjectType({
  name: 'Template',
  fields: {
    name: {
      type: GraphQLString,
      resolve () {
        return 'hello'
      },
    },
  },
})

module.exports = function schema () {
  return new GraphQLSchema({
    query: new GraphQLObjectType({
      name: 'Query',
      fields: {
        template: {
          type: TemplateType,
        },
      },
    }),
  })
}
