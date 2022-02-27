import React, { useState } from 'react';
import { GetVideo } from '../Services/Endpoints';

function Test(props) {
    const [video, SetVideo] = useState(false)

    async function Salem2() {
        const userInfo = await GetVideo(`https://instagram.fcor14-1.fna.fbcdn.net/v/t50.2886-16/173184478_477793946602714_1799093348209448772_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&_nc_ht=instagram.fcor14-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=vqHJlPo627YAX-O9l-H&edm=ABfd0MgBAAAA&vs=17931650677523688_4097151731&_nc_vs=HBkcFQAYJEdONlZVZ3JhakhZU2piSUJBRVRYeWtIZXFmY1lia1lMQUFBRhUAAsgBACgAGAAbABUAACbQhaixuK%2FaPxUCKAJDMywXQCPMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&_nc_rid=fbf82693bb&ccb=7-4&oe=621CC29D&oh=00_AT_vWFGxGmns8uYZfgFQMgBx_bpAVWZnMZzZpWjFTPY-bQ&_nc_sid=7bff83`);
        SetVideo(userInfo)
    }

    return (
        <div>
            <button onClick={() => Salem2()}>Click Me</button>
            {(video !== false) ? (
                <div style={{ border: '1px solid black', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <video crossOrigin="anonymous" controls autoPlay>
                        {
                            //<source src="https://scontent.cdninstagram.com/v/t50.2886-16/173184478_477793946602714_1799093348209448772_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5mZWVkLmRlZmF1bHQiLCJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSJ9&amp;_nc_ht=instagram.fcor14-1.fna.fbcdn.net&amp;_nc_cat=110&amp;_nc_ohc=vqHJlPo627YAX-O9l-H&amp;edm=ABfd0MgBAAAA&amp;vs=17931650677523688_4097151731&amp;_nc_vs=HBkcFQAYJEdONlZVZ3JhakhZU2piSUJBRVRYeWtIZXFmY1lia1lMQUFBRhUAAsgBACgAGAAbABUAACbQhaixuK%2FaPxUCKAJDMywXQCPMzMzMzM0YEmRhc2hfYmFzZWxpbmVfMV92MREAdeoHAA%3D%3D&amp;_nc_rid=fbf82693bb&amp;ccb=7-4&amp;oe=621CC29D&amp;oh=00_AT_vWFGxGmns8uYZfgFQMgBx_bpAVWZnMZzZpWjFTPY-bQ&amp;_nc_sid=7bff83" type="video/mp4" />
                        }
                        <source src={video} type="video/mp4" />
                        This browser doesn't support video tag.
                    </video>
                </div>
            ) : null}
        </div>
    );
}

export default Test;
