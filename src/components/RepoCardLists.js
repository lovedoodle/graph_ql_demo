import React, {Component} from 'react';
import apolloClient from '../helpers/apollo_client';
import repo_query from '../helpers/repo_query';
import RepoCard from './RepoCard';
import { Row, Col} from 'react-flexbox-grid'
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
        const {fetchingRepo, repos, fetchRepoErro} = this.state;
        var element;
        if(fetchingRepo){
          element = <span>Fetching Repos</span>
        }else if(fetchRepoErro){
          element = <span>{fetchRepoErro}</span>
        }else{
          element = <Row>
            {repos.map((repo, index) => {
              return <Col xs={12} sm={12} lg={4} md={6} key={index}><RepoCard repo={repo}/> </Col>
            })}
          </Row>
            
        }
        return (
          element
        )

    }


}

