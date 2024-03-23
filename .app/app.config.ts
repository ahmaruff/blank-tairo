export default defineAppConfig({
  "title": "Waktoo Commerce",
  "error": {
    "logo": {
      "component": "TairoLogo",
      "props": {
        "class": "text-primary-500 mx-auto h-40 p-6"
      }
    }
  },
  "panels": [],
  "topnav": {
    "navigation": {
      "enabled": true,
      "logo": {
        "component": "TairoLogo",
        "props": {
          "class": "text-primary-500 h-10 w-10"
        }
      },
      "header": {},
      "items": []
    },
    "circularMenu": {
      "enabled": true,
      "tools": []
    },
    "toolbar": {
      "enabled": true,
      "showTitle": false,
      "tools": []
    },
    "footer": {
      "enabled": false,
      "logoSeparator": {
        "component": "TairoLogo",
        "props": {
          "class": "text-primary-500 h-7 w-7"
        }
      },
      "logo": {
        "component": "TairoLogoText",
        "props": {
          "class": "text-muted-300 ltablet:mx-0 mx-auto h-4 transition-all duration-200 lg:mx-0"
        }
      },
      "copyright": {
        "name": "",
        "to": "",
        "since": ""
      },
      "links": []
    }
  },
  "collapse": {
    "navigation": {
      "enabled": true,
      "header": {
        "component": ""
      },
      "footer": {
        "component": ""
      },
      "items": []
    },
    "circularMenu": {
      "enabled": true,
      "tools": []
    },
    "toolbar": {
      "enabled": true,
      "showTitle": false,
      "showNavBurger": false,
      "tools": []
    }
  },
  "sidebar": {
    "circularMenu": {
      "enabled": false,
      "tools": []
    },
    "toolbar": {
      "enabled": true,
      "showTitle": true,
      "showNavBurger": false,
      "tools": []
    },
    "navigation": {
      "enabled": true,
      "startOpen": true,
      "logo": {
        "component": "TairoLogo",
        "props": {
          "class": "text-primary-600 h-10"
        }
      },
      "items": []
    }
  }
})
