import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const OutpostPage = () => (
  <Article title="Outpost (2017-2018)">
      <ArticleLists>
          <ArticleList title="Languages">
              <ul>
                  <li>Clojure</li>
                  <li>Javascript</li>
              </ul>
          </ArticleList>
          <ArticleList title="Frameworks">
              <ul>
                  <li>Kubernetes</li>
                  <li>Terraform</li>
                  <li>React</li>
              </ul>
          </ArticleList>
          <ArticleList title="Services">
              <ul>
                  <li>AWS</li>
                  <li>GCP</li>
                  <li>Jenkins</li>
                  <li>Treasure Data</li>
                  <li>VictorOps</li>
                  <li>Twitch</li>
              </ul>
          </ArticleList>
      </ArticleLists>
      <ArticleBody>
        <ArticleSection title="Senior Devops Engineer">
            <ul>
                <li>Created autoscaling system for game servers</li>
                <li>Configured multi-cloud game server hosting (AWS and GCP)</li>
                <li>Maintained software deployment systems using Jenkins</li>
                <li>Migrated microservices from AWS Elastic Beanstalk to Kubernetes</li>
                <li>Integrated with VictorOps and configured rules for oncall alerting</li>
                <li>Integrated with Treasure Data for stats collection using Fluentd</li>
                <li>Developed platform features using Clojure</li>
            </ul>
        </ArticleSection>
    </ArticleBody>
</Article>
)
export default OutpostPage;