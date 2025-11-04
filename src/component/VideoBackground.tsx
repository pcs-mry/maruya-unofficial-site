
import './VideoBackground.css'
import bgVideo from '../assets/video/vid-02.mp4'

export default function VideoBackground() {
    return (
        <>
            <div className='vid-bg'>
                <div className='overlay'></div>
                <video src={bgVideo} autoPlay muted loop></video>
            </div>
        </>
    )
}