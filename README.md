zmp init

  _____  __  __   ____       ____   _       ___ 
 |__  / |  \/  | |  _ \     / ___| | |     |_ _|
   / /  | |\/| | | |_) |   | |     | |      | | 
  / /_  | |  | | |  __/    | |___  | |___   | | 
 /____| |_|  |_| |_|        \____| |_____| |___|
                                                 Version: 3.15.4

⠋ Checking for available updates...(node:96872) Warning: Setting the NODE_TLS_REJECT_UNAUTHORIZED environment variable to '0' makes TLS connections and HTTPS requests insecure by disabling certificate verification.
(Use `node --trace-warnings ...` to show where the warning was created)
✔ All good, you have latest zmp-cli version.

✔ Login Success!
? What action you want to do? Create a new ZMP project
? App (project) name: zma_example
? Choose an UI library zmp-ui
? What type of framework/library do you prefer? ReactJS
? Do you want to setup CSS Pre-Processor SCSS (SASS)
? Choose starter template: Blank
? More Options?
        - Including Tailwind CSS
        - Including Recoil (React only) Yes, I want to get more options
? Do you want to include Tailwind CSS? No
✔ Generating app-config.json
✔ Generating package.json
✔ Creating required folders structure
✔ Installing NPM Dependencies
✔ Installing NPM Dev Dependencies
✔ Creating project files

✔ Done! 💪

ℹ Next steps:
  - 🔥 Run "npm run start" - run development server
  - 🙏 Run "npm run deploy" - deploy mini app for production
  - 📖 Visit documentation at https://mini.zalo.me/
  - 📖 Check README.md in project root folder with further instructions

## ZMP CLI Options

ZMP app created with following options:

```
{
  "cwd": "/home/coronatus/Downloads/WorkDocument/zma_example",
  "newProject": true,
  "name": "zma_example",
  "package": "zmp-ui",
  "framework": "react",
  "cssPreProcessor": "scss",
  "template": "blank",
  "includeTailwind": false,
  "theming": {
    "color": "#007aff",
    "darkTheme": false,
    "fillBars": false
  },
  "customBuild": false,
  "stateManagement": "recoil"
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🙏 `deploy` - deploy mini app for production