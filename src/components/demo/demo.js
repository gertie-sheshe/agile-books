import React from 'react';
import './demo.scss';

const Demo = () => (
    <div className="sections">
        <div className="section-settings">Settings</div>
        <div className="section section-to-read">
            <div className="section-title">
                <h3>To Read</h3>
            </div>
            <div className="section-description">Pick your next title! :)</div>
        </div>
        <div className="section section-reading">
            <div className="section-title">
                <h3>Reading</h3>
            </div>
            <div className="section-description">Books you are currently enjoying :)</div>
        </div>
        <div className="section section-onhold">
            <div className="section-title">
                <h3>On Hold</h3>
            </div>
            <div className="section-description">Uh Oh, you did not like?</div>
        </div>
        <div className="section section-done">
            <div className="section-title">
                <h3>Done</h3>
            </div>
            <div className="section-description">One more book down! Yes to knowledge!</div>
        </div>
    </div>
)

export default Demo;
