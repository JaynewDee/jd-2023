import React from 'react'
import { DisplayProps } from '../../Portal'
import IconTitle from '../IconTitle'
import { TiMediaRewindOutline as MediaIcon } from 'react-icons/ti'

const Media: React.FC<DisplayProps> = ({ backBtn }) => {
    return (
        <div className="category-container">
            <div className="category-header">
                {backBtn()}
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