import React, {Component} from 'react';
import apolloClient from '../helpers/apollo_client';
import repo_query from '../helpers/repo_query'

const gql = require('graphql-tag');

export default class RepoCardLists extends Component {
    constructor(props){
      super(props)
      this.state = {
          repos: [],
          fetchingRepo: true,
          fetchRepoErro: null
      }
    }
    componentDidMount() { 
        apolloClient.query({
            query: gql `
            ${repo_query}
            `
            })
            .then(resp => {
                var repoArray = Object.values(resp.data);
                console.log(repoArray)
                this.setState({
                    repos: repoArray,
                    fetchingRepo: false
                })
            })
            .catch(error => {
                console.error(error)
                this.setState({
                    fetchRepoErro: error
                })
            });
    };

    render() {
      return (
        <div>hello world</div>
      )
    }


}

