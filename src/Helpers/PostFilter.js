import { hashTagFilterInclude, hashTagFilterExclude } from '../Config/Posts';

function PostFilter(posts) {

    let finalPostLists = '';

    finalPostLists = posts.edges.map((post) => {
        let filter = true;
        let passFilter = true;

        //include hashtag
        if (hashTagFilterInclude.length > 0) {

            filter = hashTagFilterInclude.map((hashTags) => {
                let result = hashTags.map((hashTag) => {
                    return post.node.edge_media_to_caption.edges[0].node.text.includes(hashTag);
                })
                return result.reduce((a, b) => a && b);
            })

            passFilter = filter.reduce((a, b) => a || b);
            if (!passFilter) return null;
        }


        //exclude hashtag
        if (hashTagFilterExclude.length > 0) {

            filter = hashTagFilterExclude.map((hashTags) => {
                let result = hashTags.map((hashTag) => {
                    return !post.node.edge_media_to_caption.edges[0].node.text.includes(hashTag);
                })
                return result.reduce((a, b) => a && b);
            })
            passFilter = filter.reduce((a, b) => a && b);
        }

        return (passFilter) ? post : null;

    })
    posts.edges = finalPostLists.filter(a => a !== null);
    return posts;
}

export default PostFilter;