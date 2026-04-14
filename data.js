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
        "yaw": -1.5227776743731702,
        "pitch": 0.12395525516650707,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4961522222015464,
          "pitch": 0.43957898226145886,
          "rotation": 0,
          "target": "4-banho-social"
        },
        {
          "yaw": -1.6590523079082793,
          "pitch": 0.4859508740153764,
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
          "yaw": 1.9157553991974465,
          "pitch": 0.4210267221688717,
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
          "yaw": -2.466546426619459,
          "pitch": 1.4255939823182784,
          "rotation": 0,
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
