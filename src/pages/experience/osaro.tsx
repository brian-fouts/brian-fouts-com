import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";

const OsaroPage = () => (
  <Article title="Osaro, Inc (2020-2023)">
    <ArticleLists>
        <ArticleList title="Languages">
            <ul>
                <li>Python</li>
                <li>Javascript</li>
                <li>Postgres</li>
                <li>Bash</li>
                <li>Jsonnet</li>
                <li>Rust</li>
                <li>Bash</li>
            </ul>
        </ArticleList>
        <ArticleList title="Frameworks">
            <ul>
                <li>Pytest</li>
                <li>Flask</li>
                <li>Kubernetes</li>
                <li>SaltStack</li>
                <li>Docker</li>
                <li>Terraform</li>
                <li>Docker</li>
            </ul>
        </ArticleList>
        <ArticleList title="Protocols">
            <ul>
                <li>ASCII</li>
                <li>Modbus</li>
                <li>gRPC</li>
                <li>Protobuf</li>
            </ul>
        </ArticleList>
        <ArticleList title="Services">
            <ul>
                <li>AWS</li>
                <li>GCP</li>
                <li>CircleCI</li>
                <li>Big Query</li>
                <li>Terraform Cloud</li>
                <li>Grafana</li>
                <li>Open Telemetry</li>
            </ul>
        </ArticleList>
    </ArticleLists>
    <ArticleBody>
        <ArticleSection title="Software Developer in Test">
            <ul>
                <li>Defined and drove best practices for automated testing with Pytest</li>
                <li>Diagnosed and repaired sporadic segfaults in robot software test suite</li>
                <li>Reduced CI workflow execution time by 50% for robot software</li>
                <li>Developed web based tool for searching and visualizing robot performance using Flask, Postgres, React, and Kubernetes</li>
            </ul>
        </ArticleSection>
        <ArticleSection title="Senior Backend Engineer">
            <ul className="list-square">
                <li>Managed and maintained SaltStack to deploy software to robot hosts</li>
                <li>Managed Google Cloud and AWS resources using Terraform</li>
                <li>Resolved countless daily operational issues across the organization</li>
                <li>Refactored local data pipeline agent to facilitate significantly improve performance, maintainability, reliability, and testing</li>
                <li>Refactored Google Dataflow ingestion software to improve maintainability and testing</li>
                <li>Implemented Ubuntu upgrade from 16.04 to 22.04</li>
                <li>Launched Jenkins instance and rolled out new self-service tasks with it</li>
                <li>Implemented customer success dashboards using Grafana and Big Query</li>
            </ul>
        </ArticleSection>
    </ArticleBody>
  </Article>
)
export default OsaroPage;