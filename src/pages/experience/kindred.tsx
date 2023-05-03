import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const KindredPage = () => (
  <Article title="Kindred (2018-2020)">
    <ArticleLists>
        <ArticleList title="Languages">
            <ul>
                <li>Python</li>
                <li>Postgres</li>
                <li>Go</li>
                <li>C++</li>
            </ul>
        </ArticleList>
        <ArticleList title="Frameworks">
            <ul>
                <li>Pytest</li>
                <li>ROS</li>
            </ul>
        </ArticleList>
        <ArticleList title="Services">
            <ul>
                <li>Circle CI</li>
                <li>Datadog</li>
            </ul>
        </ArticleList>
    </ArticleLists>
    <ArticleBody>
        <ArticleSection title="Senior Robot Software Engineer">
            <ul>
                <li>Enhanced and maintained microservice written in Go that triggers and collects images from Intel Realsense</li>
                <li>Diagnosed and improved depth camera performance by experimenting with lighting, camera positioning, and camera configuration</li>
                <li>Designed collision scenes and performed feasibility studies robot layouts using ROS</li>
                <li>Developed microservice written in Go to control conveyance hardware</li>
                <li>Ported robot software to Nvidia Jetson by patching and recompiling dependencies</li>
            </ul>
        </ArticleSection>
        <ArticleSection title="Software Engineer">
            <ul>
                <li>Created customer-facing automated reporting pipeline for performance analytics</li>
                <li>Created automated tests to ensure reliable delivery of reports</li>
                <li>Collaborated on ETL development using Luigi</li>
            </ul>
        </ArticleSection>
    </ArticleBody>
  </Article>
)
export default KindredPage;