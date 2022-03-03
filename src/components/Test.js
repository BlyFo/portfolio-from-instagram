import React, { useState } from 'react';
import { GetVideo, TestEndpoint, GetUserInfo } from '../Services/Endpoints';

function Test(props) {
    const [video, SetVideo] = useState(false)

    async function Salem2() {
        const anotherUserInfo = await GetUserInfo();

        const userInfo = await TestEndpoint(anotherUserInfo.id, anotherUserInfo.edge_owner_to_timeline_media.page_info.end_cursor);
        SetVideo(userInfo)
    }

    return (
        <div>
            <button onClick={() => Salem2()}>Click Me</button>
            {(video !== false) ? (
                <div style={{ border: '1px solid black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                </div>
            ) : null}
        </div>
    );
}
//https://www.instagram.com/graphql/query/?query_hash=17842794232208280&variables=%7B%22id%22:%221476919210%22,%22first%22:12,%22after%22:%22QVFBdzl5NGZscTZzUzh0R21jbGJENUJRYVkya0...%22%7D

export default Test;
