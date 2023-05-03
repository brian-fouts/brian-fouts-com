import Article from "@/components/Article/Article";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleSection from "@/components/Article/ArticleSection";

const DevopsSkill = () => (
    <Article title="Devops">
        <ArticleBody>
            <ArticleSection>
                <p>
                    I provide services to streamline your development processes and ensure high uptime for your applications. 
                    My areas of expertise include continuous integration and deployment, Kubernetes, Docker, Terraform, Salt Stack, 
                    monitoring, alerting, automation, logging, Jenkins, CircleCI, and uptime management.
                </p>
                <p>
                    I can help you automate your build and deployment pipelines, set up containerized solutions, and automate your 
                    cloud infrastructure provisioning and management. Additionally, I can assist you with implementing monitoring and a
                    lerting systems, logging solutions, and uptime management strategies such as redundancy, load balancing, and failover 
                    to ensure the health, performance, and high availability of your applications.
                </p>
            </ArticleSection>
        </ArticleBody>
    </Article>
);

export default DevopsSkill;