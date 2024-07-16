import React, { useContext } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleIconClick = (prompt) => {
    setInput(prompt);
    onSent(prompt);
  };

  return (
    <div className='main'>
      <div className="nav">
        <p>FEST-techBOT</p>
        <img src={assets.user_icon} alt="User" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p><span>Hello, Browse Enthusiasts</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card" onClick={() => handleIconClick("What is BROWSE?")}>
                <p>Discover!!! What is BROWSE?</p>
                <img src={assets.compass_icon} alt="Compass" />
              </div>
              <div className="card" onClick={() => handleIconClick("Illuminate your ideas with insights from industry experts of Browse")}>
                <p>Illuminate your ideas with insights from industry experts</p>
                <img src={assets.bulb_icon} alt="Bulb" />
              </div>
              <div className="card" onClick={() => handleIconClick("Stay connected with the latest updates and announcements of Browse")}>
                <p>Stay connected with the latest updates and announcements.</p>
                <img src={assets.message_icon} alt="Message" />
              </div>
              <div className="card" onClick={() => handleIconClick("Events of browse")}>
                <p>Dive deep into coding challenges and showcase your skills.</p>
                <img src={assets.code_icon} alt="Code" />
              </div>
            </div>
          </>
        ) : (
          <div className='result'>
            <div className="result-title">
              <img src={assets.user_icon} alt="User" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Gemini" />
              {loading ? (
                <div className='loader'>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="Gallery" />
              <img src={assets.mic_icon} alt="Mic" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="Send" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
