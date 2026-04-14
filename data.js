var APP_DATA = {
  "scenes": [
    {
      "id": "0-sala-cozinha",
      "name": "SALA-COZINHA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.4928445049212904,
        "pitch": 0.3712527634241578,
        "fov": 1.0141528350377254
      },
      "linkHotspots": [
        {
          "yaw": -1.5521523306359803,
          "pitch": 0.4419144264970356,
          "rotation": 0,
          "target": "4-banho-social"
        },
        {
          "yaw": -1.6975841778774488,
          "pitch": 0.5077543367711481,
          "rotation": 5.497787143782138,
          "target": "3-quarto-visita"
        },
        {
          "yaw": 2.273224796809176,
          "pitch": 0.7239985785003054,
          "rotation": 0,
          "target": "1-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sute",
      "name": "SUÍTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4175712111346321,
          "pitch": 0.5775532221252568,
          "rotation": 0,
          "target": "2-banho-sute"
        },
        {
          "yaw": -2.1122886181170593,
          "pitch": 0.5794094081760086,
          "rotation": 4.71238898038469,
          "target": "0-sala-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-banho-sute",
      "name": "BANHO-SUÍTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9929874414427804,
          "pitch": 1.3026600850459644,
          "rotation": 0,
          "target": "1-sute"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-quarto-visita",
      "name": "QUARTO-VISITA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.905526495722878,
          "pitch": 0.4328440951027481,
          "rotation": 0,
          "target": "0-sala-cozinha"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-banho-social",
      "name": "BANHO-SOCIAL",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4347868260982892,
          "pitch": 1.4269355989896884,
          "rotation": 12.566370614359176,
          "target": "0-sala-cozinha"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "APTO CAMILA",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
