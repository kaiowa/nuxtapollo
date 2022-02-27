<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
     <pre>{{getAll}}</pre>
    </v-col>
  </v-row>
</template>

<script>


import gql from 'graphql-tag'

export default {
  components: {},
  name: 'IndexPage',
   apollo: {
    // Simple query that will update the 'hello' vue property
    getAll: gql` query{
        getAll{
          firstName,
          lastName
        }
      }`
  }
 
}
</script>
