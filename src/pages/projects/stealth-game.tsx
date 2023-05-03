import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";



const StealthGameProject = () => (
    <Article title="Stealth Game">
        <ArticleLists>
            <ArticleList title="Languages">
                <ul>
                    <li>Javascript</li>
                    <li>Python</li>
                </ul>
            </ArticleList>
            <ArticleList title="Frameworks">
                <ul>
                    <li>Jax</li>
                    <li>rollup.js</li>
                    <li>Docker</li>
                    <li>Docker Compose</li>
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
                <p>
                    I have made significant contributions to a game server project by using my expertise in Python, Rollup.js, and other technologies. 
                    One of the key aspects of this project was the deployment of multiple environments to serve the product lifecycle, including dev, 
                    stage, and prod. To achieve this, I provisioned several EC2 environments and created continuous deployment tooling to update them 
                    whenever git tags matched particular patterns.
                </p>
                <p>
                    In order to simplify the deployment process and ensure easy rollbacks, I utilized Docker to containerize both the client and the server 
                    components of the game server project. This allowed for a consistent deployment process across multiple environments and facilitated 
                    rapid scaling in response to changing user demands. To optimize performance and cost-effectiveness, I conducted benchmarking tests 
                    across various instance classes, identifying the most efficient option for each environment.  By leveraging Docker and AWS technologies, 
                    I was able to create a streamlined and cost-effective deployment process that optimized performance, scalability, and security. These 
                    efforts contributed significantly to the overall success of the game server project.
                </p>
                <p>
                    To ensure secure communications, I configured load balancers for SSL termination. This enabled the client to use secure websockets 
                    without needing to manage SSL certificates. Additionally, I updated the compiled client to accept environment-specific variables so 
                    that a single image could be deployed to multiple environments.
                </p>
            </ArticleSection>
        </ArticleBody>
    </Article>
)

export default StealthGameProject;