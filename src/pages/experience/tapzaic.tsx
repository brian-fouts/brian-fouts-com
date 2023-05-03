import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const TapzaicPage = () => (
  <Article title="Tapzaic (2015)">
    <ArticleLists>
        <ArticleList title="Languages">
            <ul>
                <li>C#</li>
            </ul>
        </ArticleList>
        <ArticleList title="Frameworks">
            <ul>
                <li>Unity Engine</li>
            </ul>
        </ArticleList>
        <ArticleList title="Services">
            <ul>
                <li>Google Play Store</li>
                <li>iOS App Store</li>
                <li>AWS</li>
                <li>Unity Ads</li>
                <li>Google AdMob</li>
                <li>Google Analytics</li>
                <li>Google Cloud Messaging</li>
            </ul>
        </ArticleList>
    </ArticleLists>
    <ArticleBody>
        <ArticleSection title="CTO">
            <ul>
                <li>Rapidly prototyped games for iOS and Android devices using Unity</li>
                <li>Launched Jezzy (Jezzball) for iOS and Android</li>
                <li>Integrated with third party APIs such as Google AdMob and Unity Ads</li>
                <li>Developed reusable runtime system to enable instant level tuning after launch</li>
            </ul>
        </ArticleSection>
    </ArticleBody>
  </Article>
)
export default TapzaicPage;

