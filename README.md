# Typescript GraphQL Server

### Queries & Mutations
```graphql
type tasks {
    id: Int
    description: String
    date: String
}
```

```graphql
mutation {
    createTask(options) {
        id
        description
        date
    }
}
```