import Article from "@/components/Article/Article";
import {ArticleLists, ArticleList} from "@/components/Article/ArticleList";
import ArticleSection from "@/components/Article/ArticleSection";
import ArticleBody from "@/components/Article/ArticleBody";


const NebulaProject = () => (
    <Article title="Nebula">
        <ArticleLists>
            <ArticleList title="Links">
                <ul>
                    <li><a href="https://github.com/brian-fouts/nebula/" target="_blank">Source</a></li>
                    <li><a href="https://nebula.brian-fouts.com/" target="_blank">Demo</a></li>
                </ul>
            </ArticleList>
            <ArticleList title="Languages">
                <ul>
                    <li>Javascript</li>
                </ul>
            </ArticleList>
            <ArticleList title="Frameworks">
                <ul>
                    <li>THREE.js</li>
                    <li>Vue</li>
                </ul>
            </ArticleList>
        </ArticleLists>
        <ArticleBody>
            <ArticleSection>
                <div className="float-left p-5">
                    <img src="/images/projects/nebula.png" alt="nebula" width="250" height="250"/>
                </div>
                <div>
                    <p>
                        The nebula is generated using THREE.js to create a visual representation of the scene. 
                        This representation includes various features such as clouds, stars, glow, illumination, 
                        and fog.
                    </p>
                    <p>
                        The clouds are generated using PNGs that are placed in a weighted distribution with a 
                        fixed rotation. This creates a more natural and organic appearance to the cloud 
                        formations. The rotation of each cloud is fixed to create a consistent appearance 
                        throughout the scene.
                    </p>
                    <p>
                        The stars are created using a custom shader effect. This shader simulates the 
                        appearance of a glowing star using textures, colors, and lighting effects.
                    </p>
                    <p>
                        The glow effect is created using a bloom effect, which is a post-processing effect 
                        applied to the brightest objects in the scene, such as the stars and planets. This
                        effect creates a vibrant and ethereal glow around these objects.
                    </p>
                    <p>
                        The clouds are illuminated with colored light sources. These light sources are 
                        positioned at various locations throughout the scene, and their colors are set to 
                        create a sense of depth and atmosphere within the nebula.
                    </p>
                </div>
            </ArticleSection>
        </ArticleBody>
    </Article>
)

export default NebulaProject;
