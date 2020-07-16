import React from 'react'
import albin from './Images/albin.jpg'
import yijing from './Images/yijing.jpeg'
import noah from './Images/noah.jpg'
import li from './Images/li.jpg'
import kevin from './Images/kevin.jpg'
import './about.css'


console.log(albin);

window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    console.log(loader);
});

export const About = () => (
    <div className="about">
        <div className="row">
            <div className="member">
                <div><br/></div>
                <h2>&#9992; About us</h2>
                <div><br/></div>
                <h4>Our team is here to help you find out information about Airplanes, Flights, Airports from across the
                    world.</h4>
                <div><br/></div>
                <div><br/></div>
                <h5>Total number of commits: 185</h5>
                <div><br/></div>
                <h5>Total number of issues: 35</h5>
                <div><br/></div>
                <h5>Total number of Unit tests: 10</h5>
                <div><br/></div>
                <div><br/></div>
                <h5>Link to API: <a
                    href="https://documenter.getpostman.com/view/11816121/T17Q4PZq"> AeroInfo API</a>
                </h5>
                <div><br/></div>
                <h5>Gitlab Issues: <a href="https://gitlab.com/Albisourous/naviaero/-/issues">GitLab Issues</a></h5>
                <div><br/></div>
                <h5>GitLab Repo: <a href="https://gitlab.com/Albisourous/naviaero">Project Repository</a></h5>
                <div><br/></div>
                <h5>GitLab Wiki: <a href="https://docs.gitlab.com/ee/user/project/wiki/">GitLab Wiki</a></h5>
                <div><br/></div>
                <h5>Other Sources: <a href="https://aviationstack.com/">AviationStack</a></h5>
                <h5><a href="http://aeroinfo.me/api/test">Test Case</a></h5>
                <h5><a href="">Speak Deck</a></h5>
                <h5>About Source: The Aviation stack API was built to provide a simple way of using information from
                    global aviation data for real-time data.</h5>
                <div><br/></div>
                <h5>Other Tools: N/A</h5>
                <div><br/></div>
                <div><br/></div>
                <div><br/></div>
            </div>

            <div className="member">
                <div><br/></div>
                <h2>&#9992; Albin Shrestha</h2>
                <div class="pic">
                    <img src={albin} alt="Logo"/>
                </div>
                <div><br/></div>
                <p className="role">Frontend</p>
                <p>Albin Shrestha connects tech and project management companies with the information and resources they
                    need in order to properly train their employees. At the University of Texas, Albin has learned how
                    to appropriately communicate with peers and co-workers creating a productive workflow. His personal
                    projects including his UT CS website and Unity games help distinguish him from his peers. Albin is
                    currently pursuing a degree in Computer Science in hopes of working in business management or game
                    design.</p>
                <p>shrestha_albin@yahoo.com</p>
                <p>Number of commits: 60</p>
                <p>Number of issues: 7</p>
                <p>Number of Unit tests: 0</p>
                <p>
                    <button className="contact"><a href="tel:1-817-713-6090">Contact</a></button>
                </p>
                <div><br/></div>
                <div><br/></div>
            </div>

            <div className="member">
                <div><br/></div>
                <h2>&#9992; Yijing Chen</h2>
                <div className="pic">
                    <img src={yijing} alt="Me"/>
                </div>
                <div><br/></div>
                <p className="role">Frontend</p>
                <p>I have 3 cats. I am a college student in the Department of Computer Science at the University of
                    Texas at Austin. I am interested in web design.</p>
                <p>a1024507613@gmail.com</p>
                <p>Number of commits: 110</p>
                <p>Number of issues: 15</p>
                <p>Number of Unit tests: 0</p>
                <p>
                    <button className="contact"><a href="www.cs.utexas.edu/~yijing">Contact</a></button>
                </p>
                <div><br/></div>
            </div>

            <div className="member">
                <div><br/></div>
                <h2>&#9992; Noah Lindley</h2>
                <div className="pic">
                    <img src={noah} alt="Me"/>
                </div>
                <div><br/></div>
                <p className="role">Backend</p>
                <p>I'm Noah Lindley, a Computer Science student at The University of Texas at Austin.
                    I'm interested in the fields of Fin-Tech and Data Science. I enjoy problem-solving and working in
                    team based environments where I can improve my personal and technical skills. In my spare time I
                    enjoy running, making music, writing code, watching a plethora of sports (Used to) and experiencing
                    the fun Austin has to offer such as drinking new local brews.</p>
                <p>lindleywnoah@gmail.com</p>
                <p>Number of commits: 1</p>
                <p>Number of issues: 2</p>
                <p>Number of Unit tests: 0</p>
                <p>
                    <button className="contact"><a href="mailto: lindleywnoah@gmail.com">Contact</a></button>
                </p>
                <div><br/></div>
            </div>

            <div className="member">
                <div><br/></div>
                <h2>&#9992; Kevin Lu</h2>
                <div className="pic">
                    <img src={kevin} alt="Me"/>
                </div>
                <div><br/></div>
                <p className="role">Backend</p>
                <p>I am a third year computer science student at UT Austin. I am interested in machine learning.</p>
                <p>luluwen2000@gmail.com</p>
                <p>Number of commits: 2</p>
                <p>Number of issues: 0</p>
                <p>Number of Unit tests: 10</p>
                <p>
                    <button className="contact"><a href="mainto: a1024507613@gmail.com">Contact</a></button>
                </p>
                <div><br/></div>
            </div>

            <div className="member">
                <div><br/></div>
                <h2>&#9992; Xiaofei Li</h2>
                <div className="pic">
                    <img src={li} alt="Me"/>
                </div>
                <div><br/></div>
                <p className="role">Database</p>
                <p>I am a UTCS senior student. Having interests in programming, I transfered to CS in my junior year. I
                    am trying to catch up with my peers, honing my skills to become a professional programmer.</p>
                <p>xiaofeili@utexas.edu</p>
                <p>Number of commits: 11</p>
                <p>Number of issues: 11</p>
                <p>Number of Unit tests: 0</p>
                <p>
                    <button className="contact"><a href="mainto: xiaofeili@utexas.edu">Contact</a></button>
                </p>
                <div><br/></div>
                <div><br/></div>
            </div>


        </div>
    </div>
)
