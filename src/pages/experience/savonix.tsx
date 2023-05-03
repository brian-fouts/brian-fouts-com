import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const SavonixPage = () => (
  <Article title="Savonix (2016-2017)">
    <ArticleLists>
        <ArticleList title="Languages">
            <ul>
                <li>Python</li>
                <li>Javascript</li>
            </ul>
        </ArticleList>
        <ArticleList title="Frameworks">
            <ul>
                <li>CherryPy</li>
                <li>Celery</li>
                <li>Angular JS</li>
                <li>PyTest</li>
            </ul>
        </ArticleList>
        <ArticleList title="Services">
            <ul>
                <li>Heroku</li>
                <li>Stormpath</li>
                <li>Azure AD</li>
            </ul>
        </ArticleList>
    </ArticleLists>
    <ArticleBody>
        <ArticleSection title="Senior Software Engineer">
            <ul>
                <li>Developed backend features using CherryPy and Celery in Python</li>
                <li>Overhauled backend to adhere to DRY and SOLID design principles</li>
                <li>Integrated with Stormpath authentication</li>
                <li>Migrated user accounts to Azure Active Directory</li>
                <li>Managed and collaborated with outsourcing team that developed Physician Portal using Angular JS</li>
                <li>Created robust HIPAA compliant web APIs and systems</li>
                <li>Created performant and meaningful unit tests for all new features</li>
            </ul>
        </ArticleSection>
    </ArticleBody>
  </Article>
)
export default SavonixPage;