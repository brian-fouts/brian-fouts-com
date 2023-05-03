import Article from "@/components/Article/Article";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleSection from "@/components/Article/ArticleSection";

const SecuritySkill = () => (
    <Article title="Security">
        <ArticleBody>
            <ArticleSection>
                <p>
                    I offer a range of services that can help improve your security posture. I specialize in implementing strong authentication and 
                    authorization mechanisms such as OAuth and JSON Web Tokens, and I can help you identify and address potential security vulnerabilities 
                    in your applications. This includes protection against common web vulnerabilities like SQL injection, cross-site scripting (XSS), and 
                    cross-site request forgery (CSRF).
                </p>
                <p>
                    I can also provide security policies to protect your sensitive data and systems such as:
                    <ul className="px-10">
                        <li>key rotation, which involves regularly changing cryptographic keys to reduce the risk of unauthorized access</li>
                        <li>least privilege, which involves giving users and service accounts only the minimum permissions necessary to perform their tasks</li>
                        <li>limiting blast radius, which involves implementing measures to contain the impact of a security breach</li>
                        <li>audit trails, which involve keeping records of all user activity to help identify potential security issues</li>
                    </ul>
                </p>
            </ArticleSection>
        </ArticleBody>
    </Article>
);

export default SecuritySkill;