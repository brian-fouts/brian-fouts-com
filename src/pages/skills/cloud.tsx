import Article from "@/components/Article/Article";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleSection from "@/components/Article/ArticleSection";

const CloudSkill = () => (
    <Article title="Cloud">
        <ArticleBody>
            <ArticleSection>
                <p>
                    I offer expertise in cloud-based solutions using AWS, GCP, and Azure services. With my knowledge in storage, pubsub, 
                    IAM permissions, elastic computing, cost management, Lambda, databases, autoscaling, Amplify, and DNS, I can help you 
                    design and implement solutions that meet your specific needs.
                </p>
                <p>
                    I can help you set up and configure cloud storage solutions such as S3, GCS, and Azure Blob Storage, and pubsub systems 
                    like AWS SNS and GCP Pub/Sub. I can also help you ensure the security of your applications by configuring IAM permissions.
                </p>
                <p>
                    Additionally, I can help you optimize your cloud spending with cost management tools and set up elastic computing solutions 
                    to ensure that your applications are always available and responsive. With my experience in Lambda functions and databases, 
                    I can help you build cost-effective and scalable serverless applications.
                </p>
            </ArticleSection>
        </ArticleBody>
    </Article>
);

export default CloudSkill;