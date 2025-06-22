import project1 from './videos/project1.mp4'
import project2 from './videos/project2.mp4'
import project3 from './videos/project3.mp4'
import project4 from './videos/project4.mp4'

export default function Slider () {
    return (
        <div className='slider' style={{
            '--width': '60rem',
            '--height': '40rem',
            '--quantity': '4'
        }}>
            <div className="list">
                <div className="item" style={{"--position": "1"}}><video id="projectVideo1" loop playsinline src={project1}></video></div>

                <div className="item" style={{"--position": "2"}}><video id="projectVideo2" loop playsinline src={project2}></video></div>

                <div className="item" style={{"--position": "3"}}><video id="projectVideo3" loop playsinline src={project3}></video></div>

                <div className="item" style={{"--position": "4"}}><video id="projectVideo4" loop playsinline src={project4}></video></div>
            </div>

        </div>
    )
}