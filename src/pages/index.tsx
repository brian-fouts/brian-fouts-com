import Article from "@/components/Article/Article";
import ArticleBody from "@/components/Article/ArticleBody";
import ArticleSection from "@/components/Article/ArticleSection";

const AboutPage = () => (
    <Article title="About Me">
        <ArticleBody>
            <ArticleSection>
                <div className="w-full flex justify-center">
                    <img src="/images/brian-fouts.jpg" alt="Brian Fouts" width="600" height="450"/>
                </div>
                <p>
                    I am an experienced software developer with a passion for performance, automation, and reliability. 
                    I have a strong background in web development and have worked on a variety of projects ranging from small 
                    business websites to large scale enterprise applications. I am a full stack developer with a focus on back 
                    end development and infrastucture.  Whether you need a new website, an entire application, or just some help,
                    I can help you build a high-quality solution that meets your needs.
                </p>
            </ArticleSection>
        </ArticleBody>
    </Article>
);

export default AboutPage;