import * as THREE from 'three';

class ResourceManager {
    constructor() {
        this.textureLoader = new THREE.TextureLoader();
        this.textures = {}
        this.shaders = {}
    }
    
    init() {
        return Promise.all([
            this.textureLoader.loadAsync('/images/smoke.png').then((texture) => {
                this.textures['smoke'] = texture
            }),
            this.textureLoader.loadAsync('/images/milky-way.webp').then((texture) => {
                this.textures['milky-way'] = texture
            }),
            fetch(process.env.PUBLIC_URL + "/shaders/stars/corona-vertex-shader.txt").then(r => {
                return r.text().then(shader => {
                    this.shaders['corona-vertex'] = shader;
                })
            }),
            fetch(process.env.PUBLIC_URL + "/shaders/stars/corona-fragment-shader.txt").then(r => {
                return r.text().then(shader => {
                    this.shaders['corona-fragment'] = shader;
                })
            }),
        ]);
    }

    getTexture(name) {
        return this.textures[name];
    }

    getShader(name) {
        return this.shaders[name];
    }
};

export default ResourceManager;