import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";


const LoadstoneProject = () => (
    <Article title="Loadstone">
        <ArticleLists>
            <ArticleList title="Languages">
                <ul>
                    <li>Python</li>
                    <li>Javascript</li>
                    <li>Dart</li>
                    <li>MySql</li>
                </ul>
            </ArticleList>
            <ArticleList title="Frameworks">
                <ul>
                    <li>Flask</li>
                    <li>React</li>
                    <li>Flutter</li>
                    <li>SqlAlchemy</li>
                    <li>Docker</li>
                </ul>
            </ArticleList>
            <ArticleList title="Services">
                <ul>
                    <li>CircleCI</li>
                    <li>EC2</li>
                </ul>
            </ArticleList>
        </ArticleLists>
        <ArticleBody>
            <ArticleSection>
                <div className="float-left p-5">
                    <img src="/images/projects/loadstone.jpg" alt="Loadstone" width="200" height="400"/>
                </div>
                <div>
                    <p>
                        I have developed and managed a mobile app which has a backend written in Python using 
                        Flask and MySQL, hosted on EC2. As the project lead, I have both contributed to the 
                        codebase and managed a team of three developers working on the backend.
                    </p>
                    <p>
                        I have developed and managed a mobile app which has a backend written in Python using 
                        Flask and MySQL, hosted on EC2. As the project lead, I have both contributed to the 
                        codebase and managed a team of three developers working on the backend.
                    </p>
                    <p>
                        To ensure that the development process runs smoothly, I have implemented continuous 
                        integration, continuous deployment, and continuous testing practices. Specifically, 
                        every time a merge to main occurs, a Docker image is built to facilitate continuous 
                        integration. Then, the app is automatically deployed to the server using continuous
                        deployment.
                    </p>
                    <p>
                        The frontend of the app is written in Flutter, and I have both contributed to the 
                        codebase and managed a team of three developers working on it. In addition to the 
                        mobile app, I have also developed an admin tool written in React, and I have both 
                        contributed to the codebase and managed a developer working on it.
                    </p>
                    <p>
                        I have taken a hands-on approach to managing this app, contributing to 
                        the codebase while also ensuring that the development process runs smoothly by 
                        implementing industry-standard practices for continuous integration, continuous 
                        deployment, and continuous testing.
                    </p>
                </div>
            </ArticleSection>
        </ArticleBody>
    </Article>
)

export default LoadstoneProject;