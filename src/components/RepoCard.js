import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import '../css/repo_card.css'

const RepoCard = ({repo}) => (
    <a href={repo.homepageUrl}>
        <div className="repo-card">
            <Row className="repo-header">
                <Col xs={2} sm={3}>
                    <img src={repo.owner.avatarUrl} alt="repo avatar"/>
                </Col>
                <Col xs={10} sm={9}>
                    <h2>{repo.name}</h2>
                    <p>{repo.description}</p>
                </Col>
            </Row>
            < Row around = "xs" >
                <Col><i className="fa fa-circle" aria-hidden="true"></i>{repo.primaryLanguage.name}</Col>
                <Col><i className="fa fa-code-fork" aria-hidden="true"></i>{repo.forkCount}</Col >
                <Col><i className="fa fa-question-circle-o" aria-hidden="true"></i>{repo.issues.totalCount}</Col>
            </Row>            
        </div>
    </a>
    
)


export default RepoCard
