import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const StealthGameProject = () => (
    <Article title="brian-fouts.com">
        <ArticleLists>
            <ArticleList title="Languages">
                <ul>
                    <li>Typescript</li>
                    <li>CSS</li>
                </ul>
            </ArticleList>
            <ArticleList title="Frameworks">
                <ul>
                    <li>Next JS</li>
                    <li>Tailwind</li>
                </ul>
            </ArticleList>
            <ArticleList title="Services">
                <ul>
                    <li>Firebase</li>
                </ul>
            </ArticleList>
        </ArticleLists>
        <ArticleBody>
            <ArticleSection>
                <div className="float-left p-5">
                    <img src="/images/projects/brian-fouts.png" width="250" height="250" alt="Brian Fouts"/>
                </div>
                <div>
                    <p>
                        I have built this website using NextJS, tailwind CSS, and Firebase to create a site that is not only visually appealing 
                        but also optimized for search engine indexing.
                    </p>
                    <p>
                        An important consideration in this project was ensuring that the website was easily discoverable by search engines. 
                        To achieve this, I took advantage of NextJS's ability to hydrate pages. This allowed me to create a site that could be 
                        fully indexed by search engines, making it easier for potential clients, employers, or collaborators to find me online.
                    </p>
                    <p>
                        I utilized tailwind CSS to create a clean and modern design for the website. Tailwind CSS is a utility-first CSS 
                        framework that offers a wide range of pre-designed components and styles. This allowed me to quickly and efficiently 
                        create a visually appealing website that accurately reflected my professional identity.
                    </p>
                </div>
            </ArticleSection>
        </ArticleBody>
    </Article>
)

export default StealthGameProject;