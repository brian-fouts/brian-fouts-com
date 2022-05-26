import Simulation from './simulation'

let config = {
    "debugMode": true,
    "camera": {
        "fieldOfView": 75,
        "near": 0.1,
        "far": 1000,
        "zPosition": 1 
    },
    "lights": {
        "directional": {
            "color": 0xffffff,
            "position": [0, 0, 1]
        },
        "ambient": {
            "color": 0xffffff,
        }
    },
    "fog": {
        "color": 0x03544e,
        "density": 0.001
    },
    "effectComposer": {
        "renderDelay": 0.1,
        "effects": {
            "texture": {
                "textureName": "milky-way",
                "opacity": 0.2
            },
            "bloom": {
                "luminanceThreshold": 0.5,
                "luminanceSmoothing": 0.75,
                "opacity": 1.5
            }
        }
    },
    "nebula": {
        "lights": [
            {
                "name": "orange",
                "intensity": 50,
                "distance": 400,
                "decay": 1.7,
                "color": 0xcc6600,
                "position":  [-150, 150, -150]
            },
            {
                "name": "red",
                "intensity": 50,
                "distance": 400,
                "decay": 1.7,
                "color": 0xd8547e,
                "position":  [150, 150, -150]
            },
            {
                "name": "blue",
                "intensity": 50,
                "distance": 400,
                "decay": 1.7,
                "color": 0xc3677ac,
                "position":  [-150, -150, -150]
            }
        ],
        "clouds": {
            "count": 50,
            "textureName": "smoke",
            "positionRange": {
                "x": [-600, 300],
                "y": [-50, 250],
                "z": [-400, -400],
            },
            "planeBuffer": [500, 500],
            "opacity": 0.55
        }
    },
    "stars": {
        "data": [
            {
                "position": [15, 20, -30],
                "temperature": 2400,
                "radius": 15,
                "numSegments": 32,
            },
            {
                "position": [-30, -10, -30,],
                "temperature": 2600,
                "radius": 15,
                "numSegments": 32,
            }
        ],
        "shader": {
            "vertex": "corona-vertex",
            "fragment": "corona-fragment",
        }
    }
}

function main() {
    const canvas = document.querySelector('#scene-viewport')
    const simulation = new Simulation(config, canvas);
    simulation.init();
}

export default main;