const repo_query = `query {
        Bitcoin: repository(owner: "bitcoin", name: "bitcoin") {
            ...getRelevantRepoInfo
        },
        Ethereum: repository(owner: "ethereum", name: "go-ethereum") {
            ...getRelevantRepoInfo
        },
        Ripple: repository(owner: "ripple", name: "rippled") {
            ...getRelevantRepoInfo
        },
        Bitcoin_Cash: repository(owner: "bitcoincashorg", name: "bitcoincash.org") {
            ...getRelevantRepoInfo
        },
        Litecoin: repository(owner: "litecoin-project", name: "litecoin") {
            ...getRelevantRepoInfo
        },
        Cardano: repository(owner: "input-output-hk", name: "cardano-sl") {
            ...getRelevantRepoInfo
        },
    },

    fragment getRelevantRepoInfo on Repository {
        primaryLanguage {
            id,
            name
        },
        name,
        forkCount,
        createdAt,
        description,
        owner {
            avatarUrl,
            login,
        },
        issues(states: OPEN) {
            totalCount
        },
        homepageUrl,
        forkCount,
    }
`

export default repo_query