import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const NovoEdPage = () => (
  <Article title="NovoEd (2015-2016)">
    <ArticleLists>
        <ArticleList title="Languages">
            <ul>
                <li>Ruby</li>
                <li>Javascript</li>
                <li>MySQL</li>
            </ul>
        </ArticleList>
        <ArticleList title="Frameworks">
            <ul>
                <li>Rails</li>
                <li>Sidekiq</li>
                <li>Angular JS</li>
            </ul>
        </ArticleList>
        <ArticleList title="Services">
            <ul>
                <li>AWS</li>
                <li>New Relic</li>
                <li>Blaze Meter</li>
            </ul>
        </ArticleList>
    </ArticleLists>
    <ArticleBody>
        <ArticleSection title="Software Engineer">
            <ul>
                <li>Researched, implemented, and rolled out Ruby on Rails upgrade: v1.9.2 to v2.2.2</li>
                <li>Utilized BlazeMeter to exercise and test performance of the platform and resolved bottlenecks</li>
                <li>Architected and implemented deploy scripts</li>
                <li>Pinpointed and resolved infrastructure reliability concerns</li>
                <li>Developed full stack features using Ruby on Rails and Angular JS</li>
            </ul>
        </ArticleSection>
    </ArticleBody>
  </Article>
)
export default NovoEdPage;