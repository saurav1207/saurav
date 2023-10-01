import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-scroll';
import Profile from '../assets/a.png';

const Home = () => {
    return (
        <section id="hero">
            <div className="hero-content">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introTxt">I'm <span className="introName">Saurav Kumar</span> <br />Website Developer</span>
                    <p className="introPara">I am a passionate web developer with good problem-solving skills <br />
                        and a zeal to learn and work toward my goal.</p>
                    <Link to="contact" smooth={true} duration={500}><button className="btn">Hire me</button></Link>
                </div>
                <img src={Profile} alt="profile-pic" className='profile' />
            </div>


            {/* <div className="hero-socials">
                <div className="hero-social">
                    <a href="https://linkedin.com/in/saurav1207" className="social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/d8e6e1e636531e28274a1b8b6d947b817f6145bd/d42d3/assets/svg/linkedin-dark.svg" alt="Linkedin Profile" className="hero-social-icon" />
                    </a>
                </div>
                <div className="hero-social">
                    <a href="https://github.com/saurav1207" className="social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/38469cf88d038b6ba3322c9fcb93a8f7167df4b9/cb0b9/assets/svg/github-dark.svg" alt="Github Profile" className="hero-social-icon" />
                    </a>
                </div>
                <div className="hero-social">
                    <a href="https://twitter.com/i_saurav1207" className="social-icon-link" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/ba3ef9fd9d500c55ba265adae6087ba71e05f5d9/d0067/assets/svg/twitter-dark.svg" alt="Twitter Profile" className="hero-social-icon" />
                    </a>
                </div>
                <div className="hero-social">
                    <a href="https://www.youtube.com/channel/UCIHl2VlEkrJGf4s2G2PrMGQ" className="social-icon-link social-icon-link--bd-none" rel="noreferrer" target="_blank">
                        <img src="https://d33wubrfki0l68.cloudfront.net/7c95be3350552a5e9f2fc47f1bdbac118ea4dcee/f7a5e/assets/svg/yt-dark.svg" alt="Youtube Channel" className="hero-social-icon" />
                    </a>
                </div>
            </div> */}
        </section>
    );
}

export default Home;
