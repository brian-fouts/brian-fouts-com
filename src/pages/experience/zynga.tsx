import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const ZyngaPage = () => (
    <Article title="Zynga: Principal Software Engineer (2010-2015)">
        <ArticleLists>
            <ArticleList title="Languages">
                <ul>
                    <li>PHP</li>
                    <li>Clojure</li>
                    <li>Javascript</li>
                    <li>C#</li>
                </ul>
            </ArticleList>
            <ArticleList title="Databases">
                <ul>
                    <li>MySQL</li>
                    <li>Elastic Search</li>
                    <li>Redis</li>
                    <li>Memcached</li>
                    <li>Membase</li>
                    <li>APC</li>
                </ul>
            </ArticleList>
            <ArticleList title="Services">
                <ul>
                    <li>Facebook</li>
                    <li>Zynga Live</li>
                    <li>AWS</li>
                    <li>Splunk</li>
                    <li>Vertica</li>
                    <li>Jenkins</li>
                    <li>Pager Duty</li>
                    <li>Nagios</li>
                    <li>xhprof</li>
                </ul>
            </ArticleList>
        </ArticleLists>
        <ArticleBody>
            <ArticleSection title="Mafia Wars: Tech Lead">
                <ul>
                    <li>Integrated security framework to protect backend from CSRF attacks</li>
                    <li>Ported social network integrations to Yahoo! and successfully re-launched on Yahoo! Games</li>
                    <li>Overhauled the reward distribution system to a data-driven system that supports bundles</li>
                    <li>Conducted full-stack feature development using PHP and jQuery</li>
                    <li>Optimized API performance using Memcached and Redis</li>
                </ul>
            </ArticleSection>
            <ArticleSection title="Farmville: Sysops Team Lead">
                <ul>
                    <li>Lead team of four DevOps engineers </li>
                    <li>Successfully averted or rectified countless live-ops crises</li>
                    <li>Designed and implemented parallel processing asynchronous task framework</li>
                    <li>Migrated 290 million users from MySQL to durable Membase and AWS S3</li>
                    <li>Integrated Farmville with Zynga Live to enable engagement with Facebook Feed from within the canvas</li>
                    <li>Identified and resolved performance bottlenecks, resulting in thousands of dollars saved monthly</li>
                    <li>Trained the development team to handle day-to-day operational issues</li>
                    <li>Utilized Splunk to significantly reduce the occurrence of fatal errors</li>
                    <li>Served as both Tier 1 and Tier 2 ops responder using PagerDuty</li>
                </ul>
            </ArticleSection>
            <ArticleSection title="NFL Showdown: Backend Lead">
                <ul>
                    <li>Architected and implemented game server for NFL Showdown in PHP</li>
                    <li>Developed matchmaker features using Clojure</li>
                    <li>Played an integral role in the successful launch, from initial brainstorming sessions to final launch preparations</li>
                </ul>
            </ArticleSection>
        </ArticleBody>
    </Article>
)
  export default ZyngaPage;