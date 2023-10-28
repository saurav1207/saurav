import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Profile from './saurya.png';

const Home = () => {
    return (
        <div className="home section">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello,<br /></h3>
                        <h3 className="my-profession">I'm <span className="name">Saurav Kumar</span><br />A Website Developer</h3>
                        <p className="introPara">I am a passionate web developer with good problem-solving skills
                            and a zeal to learn and work toward my goal.
                        </p>
                        <Link to="/contact"><button className="btn hire me">Hire me</button></Link>
                    </div>
                    <div className="home-img">
                        <img src={Profile} alt="Hero section image" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
