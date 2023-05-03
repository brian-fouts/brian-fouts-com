import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";


const WorkTrackerProject = () => (
    <Article title="Work Tracker">
        <ArticleLists>
            <ArticleList title="Links">
                <a href="https://github.com/brian-fouts/work-tracker" target="_blank">Github</a>
            </ArticleList>
            <ArticleList title="Languages">
                <ul>
                    <li>Python</li>
                    <li>Postgres</li>
                </ul>
            </ArticleList>
            <ArticleList title="Frameworks">
                <ul>
                    <li>Django</li>
                    <li>Docker</li>
                    <li>Docker Compose</li>
                </ul>
            </ArticleList>
        </ArticleLists>
        <ArticleBody>
            <ArticleSection>
                <p>
                    This was a coding challenge that specified requirements of using Django Rest Framework
                    and a hand full of CRUD APIs to manage projects and time tracking.  I have built the 
                    app using the Django web framework in Python. I have used Docker-compose to 
                    containerize my application and have included a Postgres database within the Docker 
                    container. This allows for easy deployment of my application across different 
                    environments.
                </p>
                <p>
                    For authentication, I have implemented JSON Web Tokens (JWTs), which provide 
                    a secure method for representing user claims between parties. This allows for 
                    scalable and flexible authentication within the app, and simplifies extension with
                    with multiple auth providers
                </p>
                <p>
                    To ensure the reliability and maintainability of my code, I have leveraged 
                    the Pytest testing framework for automated testing. This allows me to easily 
                    write and run unit tests to ensure that my code is working as expected.
                </p>
                <p>
                    I have used Setuptools for dependency management, which simplifies the process 
                    of installing and updating dependencies within my app.
                </p>
                <p>
                    To improve performance, I have implemented Redis as a caching 
                    mechanism for frequently accessed database objects. This allows for faster access 
                    to data and can help to reduce the load on the database.
                </p>
            </ArticleSection>
        </ArticleBody>
    </Article>
)

export default WorkTrackerProject;