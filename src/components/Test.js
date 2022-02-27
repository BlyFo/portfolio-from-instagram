import React, { useState } from 'react';
import { GetVideo } from '../Services/Endpoints';

function Test(props) {
    const [video, SetVideo] = useState(false)

    async function Salem2() {
        const userInfo = await GetVideo('https://scontent.cdninstagram.com/v/t50.2886-16/173184478_477793946602714_1799093348209448772_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcor14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vqHJlPo627YAX8It7XW&edm=ABfd0MgBAAAA&vs=17931650677523688_4097151731&_nc_vs=HBkcFQAYJEdONlZVZ3JhakhZU2piSUJBRVRYeWtIZXFmY1lia1lMQUFBRhUAAsgBACgAGAAbABUAACbQhaixuK%2FaPxUCKAJDMywXQCPMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=0a2ba51c8a&ccb=7-4&oe=621E141D&oh=00_AT9tpMuaxH25qLsKeJ9PWDUzqQ-wIqi8L-KJJfqSXbbI4A&_nc_sid=7bff83');
        SetVideo(userInfo)
    }

    return (
        <div>
            <button onClick={() => Salem2()}>Click Me</button>
            {(video !== false) ? (
                <div style={{ border: '1px solid black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <video crossOrigin="anonymous" controls autoPlay>
                        {
                            //<source src="https://scontent.cdninstagram.com/v/t50.2886-16/173184478_477793946602714_1799093348209448772_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcor14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vqHJlPo627YAX8It7XW&edm=ABfd0MgBAAAA&vs=17931650677523688_4097151731&_nc_vs=HBkcFQAYJEdONlZVZ3JhakhZU2piSUJBRVRYeWtIZXFmY1lia1lMQUFBRhUAAsgBACgAGAAbABUAACbQhaixuK%2FaPxUCKAJDMywXQCPMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=0a2ba51c8a&ccb=7-4&oe=621E141D&oh=00_AT9tpMuaxH25qLsKeJ9PWDUzqQ-wIqi8L-KJJfqSXbbI4A&_nc_sid=7bff83" type="video/mp4" />
                        }
                        {
                            <source src={video} type="video/mp4" />
                        }
                        This browser doesn't support video tag.
                    </video>
                </div>
            ) : null}
        </div>
    );
}

export default Test;
