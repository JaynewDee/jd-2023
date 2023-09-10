import { TiMediaRewindOutline as MediaIcon } from 'react-icons/ti'
import BackBtn from '../components/BackBtn'
import IconTitle from '../components/IconTitle'

const Media = () => {
    return (
        <div className="category-container">
            <div className="category-header">
                {BackBtn()}
                {IconTitle("MEDIA", MediaIcon, "left")}
            </div>
            <div style={{ marginTop: "3rem" }}>
                <h4>Music</h4>
                <iframe src='https://wmp-retro.vercel.app/' style={{ width: "100vw", height: "15rem", border: "none" }}></iframe>
            </div>
        </div>
    )
}

export default Media