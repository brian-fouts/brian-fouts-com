import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";


const CatfeederProject = () => (
    <Article title="Catfeeder">
        <ArticleLists>
            <ArticleList title="Links">
                <a href="https://github.com/brian-fouts/catfeeder/" target="_blank">Github</a>
            </ArticleList>
            <ArticleList title="Languages">
                <ul>
                    <li>Python</li>
                </ul>
            </ArticleList>
            <ArticleList title="Hardware">
                <ul>
                    <li>Raspberry Pi</li>
                </ul>
            </ArticleList>
        </ArticleLists>
        <ArticleBody>
            <ArticleSection>
                <div className="float-left p-5">
                    <img src="/images/projects/catfeeder.jpg" alt="Cat Feeder" width="200" height="400"/>
                </div>
                <div>
                    <p>
                        I needed a way to feed my cat while I was away from home. I purchased an automatic
                        cat feeder, but it did not reliably dispense food. I took it apart and built software
                        using Raspberry Pi to address its shortcomings.
                    </p>
                </div>
            </ArticleSection>
        </ArticleBody>
    </Article>
)

export default CatfeederProject;