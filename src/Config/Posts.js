
export const showSinglePosts = {
    'image': true, //show single video posts.
    'video': false, //show single picture posts.
};
export const showSydeCardsPosts = {
    // if both are deactivate then it dosen't show sydecards post at all
    'image': true, //show the images in post with multiple elements
    'video': true, //show the videos in post with multiple elements
};

/*
    example:

        only show posts with the ashtags blender or the hashtags 3d and art.
        (if the post only has the hashtag '3D' but not 'art' it is not shown)
    export const hashTagFilterInclude =[
        {'blender'},{'3D','Art'}
    ];

        dosen't show the post with the tags cooking or personal and travel.
    export const hashTagFilterExclude =[
        {'personal','travel'},{'cooking'}
    ];
*/
export const hashTagFilterInclude = [];

export const hashTagFilterExclude = [];