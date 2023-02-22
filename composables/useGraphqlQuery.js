export default async function useGraphqlQuery({query, variables = {}}) {
    // a unique key to ensure that data fetching
    // can be properly de-duplicated across requests,
    const key = JSON.stringify({
        query,
        variables
    });

    // read runtime config to get access
    // to the DatoCMS API Token
    const runtimeConfig = useRuntimeConfig();

    // perform the GraphQL request to the
    // DatoCMS Content Delivery API
    return useFetch('https://graphql.datocms.com', {
        key,
        method: 'POST',
        headers: {
            Authorization: `Bearer ${runtimeConfig.public.datocms.apiToken}`,
        },
        body: {
            query,
            variables,
        },
        transform: ({ data, errors }) => {
            if (errors) {
                throw new errors;
            }

            return data;
        },
    });
};
