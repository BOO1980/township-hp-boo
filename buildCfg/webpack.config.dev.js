const path = require("path");
//const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
//const HtmlWebPackPlugin = require("html-webpack-plugin");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
//const DefinePlugin = require("webpack/lib/DefinePlugin");
//const fs = require("fs");
//const CleanUpWebpackPlugin = require("./CleanUpWebpackPlugin");
//const CreateLowResAssetsWebpackPlugin = require("./CreateLowResAssetsWebpackPlugin");
//const OptimiseAssetsWebpackPlugin = require("./OptimiseAssetsWebpackPlugin");
//const AudioTranscodeWebpackPlugin = require("./AudioTranscodeWebpackPlugin");
//const customOptimisationsModule = require("../src/customOptimisations");
//const customCreateLowResModule = require("../src/customCreateLowRes");
const packageFile = require("../package.json");

/*

██████╗  █████╗ ██████╗  █████╗ ███╗   ███╗███████╗████████╗███████╗██████╗ ███████╗
██╔══██╗██╔══██╗██╔══██╗██╔══██╗████╗ ████║██╔════╝╚══██╔══╝██╔════╝██╔══██╗██╔════╝
██████╔╝███████║██████╔╝███████║██╔████╔██║█████╗     ██║   █████╗  ██████╔╝███████╗
██╔═══╝ ██╔══██║██╔══██╗██╔══██║██║╚██╔╝██║██╔══╝     ██║   ██╔══╝  ██╔══██╗╚════██║
██║     ██║  ██║██║  ██║██║  ██║██║ ╚═╝ ██║███████╗   ██║   ███████╗██║  ██║███████║
╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝╚══════╝

*/

let iosBuild = false;
let resolution = 0;
let appBuildInfo = "";
const debugBuild = true;
let ui = "DEFAULT";
let platform = "GAMESYS"; // will be GAMESYS / OCTOPUS or SLOTMASTERS
let demo = false;
let theme = "";
const clientVersion = packageFile.version;
const clientName = packageFile.gameName;

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].indexOf("platform=") !== -1) {
//         // eslint-disable-next-line prefer-destructuring
//         platform = process.argv[i].split("platform=")[1];
//         break;
//     }
// }

// console.log(`Platform = ${platform}`);

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].indexOf("theme=") !== -1) {
//         // eslint-disable-next-line prefer-destructuring
//         theme = process.argv[i].split("theme=")[1];
//         break;
//     }
// }

//console.log(`Theme = ${theme}`);

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].indexOf("debugBuild=") !== -1) {
//         debugBuild = process.argv[i] === "debugBuild=true";
//         break;
//     }
// }

// console.log(`debugBuild = ${debugBuild}`);

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].indexOf("ui=") !== -1) {
//         // eslint-disable-next-line prefer-destructuring
//         ui = process.argv[i].split("=")[1].toUpperCase();
//         break;
//     }
// }

// console.log(`ui = ${ui}`);

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].indexOf("iosBuild=") !== -1) {
//         iosBuild = process.argv[i] === "iosBuild=true";
//         break;
//     }
// }

// console.log(`iosBuild = ${iosBuild}`);

// const distFolder = iosBuild ? "devIOS" : "dev";

// for (let i = 0; i < process.argv.length; i++) {
//     if (process.argv[i].indexOf("demo=") !== -1) {
//         demo = process.argv[i] === "demo=true";
//         break;
//     }
// }

// console.log(`demo = ${demo}`);

// const tweakerAllowed = platform === "YGGDRASIL" || debugBuild || demo;
// console.log(`tweakerAllowed = ${tweakerAllowed}`);

// console.log(`create low res assets = ${!!packageFile.createLowResAssets}`);

// let gatiFile = null;
// if (platform === "YGGDRASIL") {
//     gatiFile = require("../gati.json");
// }

/*

██████╗ ██╗   ██╗██╗██╗     ██████╗                                                           
██╔══██╗██║   ██║██║██║     ██╔══██╗                                                          
██████╔╝██║   ██║██║██║     ██║  ██║                                                          
██╔══██╗██║   ██║██║██║     ██║  ██║                                                          
██████╔╝╚██████╔╝██║███████╗██████╔╝                                                          
╚═════╝  ╚═════╝ ╚═╝╚══════╝╚═════╝                                                           
                                                                                              
 ██████╗  █████╗ ███╗   ███╗███████╗██╗███╗   ██╗██╗████████╗██████╗  █████╗ ████████╗ █████╗ 
██╔════╝ ██╔══██╗████╗ ████║██╔════╝██║████╗  ██║██║╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗
██║  ███╗███████║██╔████╔██║█████╗  ██║██╔██╗ ██║██║   ██║   ██║  ██║███████║   ██║   ███████║
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  ██║██║╚██╗██║██║   ██║   ██║  ██║██╔══██║   ██║   ██╔══██║
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗██║██║ ╚████║██║   ██║   ██████╔╝██║  ██║   ██║   ██║  ██║
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝╚═╝╚═╝  ╚═══╝╚═╝   ╚═╝   ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝

*/

// if (iosBuild === true) {
//     console.log("***************************");
//     console.log("******** IOS Build ********");
//     console.log("***************************");
//     resolution = 1;
//     appBuildInfo = "A1";
// }

// const gameInitData = {
//     forceResolutionRequired: iosBuild === true,
//     forceResolution: resolution,
//     isIOSAppBuild: iosBuild,
//     iosAppBuildVersion: appBuildInfo,
//     tweakerAllowed: tweakerAllowed,
//     demoBuild: demo,
//     productionBuild: false,
//     devBuild: true,
//     platform: platform,
//     clientVersion: clientVersion,
//     clientGameName: clientName,
//     theme: theme,
//     ui: ui,
//     debugBuild: debugBuild,
//     gameID: platform === "YGGDRASIL" ? gatiFile.gameId : -1,
// // };

// /*

//  ██████╗ ██████╗ ██████╗ ██╗   ██╗    ███████╗██╗██╗     ███████╗   
// ██╔════╝██╔═══██╗██╔══██╗╚██╗ ██╔╝    ██╔════╝██║██║     ██╔════╝   
// ██║     ██║   ██║██████╔╝ ╚████╔╝     █████╗  ██║██║     █████╗     
// ██║     ██║   ██║██╔═══╝   ╚██╔╝      ██╔══╝  ██║██║     ██╔══╝     
// ╚██████╗╚██████╔╝██║        ██║       ██║     ██║███████╗███████╗   
//  ╚═════╝ ╚═════╝ ╚═╝        ╚═╝       ╚═╝     ╚═╝╚══════╝╚══════╝   
                                                                    
// ██████╗  █████╗ ████████╗████████╗███████╗██████╗ ███╗   ██╗███████╗
// ██╔══██╗██╔══██╗╚══██╔══╝╚══██╔══╝██╔════╝██╔══██╗████╗  ██║██╔════╝
// ██████╔╝███████║   ██║      ██║   █████╗  ██████╔╝██╔██╗ ██║███████╗
// ██╔═══╝ ██╔══██║   ██║      ██║   ██╔══╝  ██╔══██╗██║╚██╗██║╚════██║
// ██║     ██║  ██║   ██║      ██║   ███████╗██║  ██║██║ ╚████║███████║
// ╚═╝     ╚═╝  ╚═╝   ╚═╝      ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝╚══════╝
                                                                    
// */

// const patterns = [];
// if (platform === "OCTOPUS") {
//     patterns.push({
//         from: "buildCfg/extrasForClients/forOctopus/octopusData/data",
//         to: "data/",
//     });
// }

// let assetTargetPath = "cdn/";
// let sourceTargetPath = "source/";
// if (platform === "SLOTMASTERS") {
//     assetTargetPath = "";
//     sourceTargetPath = "";
// }
// patterns.push({
//     from: "assets",
//     to: `${assetTargetPath}assets/`,
//     globOptions: {
//         ignore: ["**/*.css"],
//     },
// });

// if (platform === "SLOTMASTERS") {
//     patterns.push({
//         from: "assets/game.css",
//         to: "assets/game.css",
//     });
// } else {
//     patterns.push({
//         from: "assets/game.css",
//         to: `${sourceTargetPath}game.css`,
//     });
//     if (ui === "JELLY") {
//         patterns.push({
//             from: "assets/html/jelly.css",
//             to: `${sourceTargetPath}jelly.css`,
//         });
//     }
// }

// if (packageFile.platformBasedLocaleStructure === true) {
//     patterns.push({
//         from: "game/base64@1x.js",
//         to: `${sourceTargetPath}game/base64@1x.js`,
//     });
//     patterns.push({
//         from: "game/base64@2x.js",
//         to: `${sourceTargetPath}game/base64@2x.js`,
//     });
//     patterns.push({
//         from: `game/${platform}/`,
//         to: `${sourceTargetPath}game/`,
//     });
// } else {
//     patterns.push({
//         from: "game",
//         to: `${sourceTargetPath}game`,
//     });
// }
// patterns.push({
//     from: "./CHANGELOG.md",
//     to: `${sourceTargetPath}CHANGELOG.md`,
// });
// patterns.push({
//     from: "honeypot/honeypot.js",
//     to: `${sourceTargetPath}honeypot/honeypot.js`,
// });
// patterns.push({
//     from: "honeypot/honeypot.js.map",
//     to: `${sourceTargetPath}honeypot/honeypot.js.map`,
// });
// patterns.push({
//     from: "honeypot/honeypot.js.LICENSE",
//     to: `${sourceTargetPath}honeypot/honeypot.js.LICENSE`,
// });
// patterns.push({
//     from: "honeypot/phrases",
//     to: `${sourceTargetPath}honeypot/phrases`,
// });
// patterns.push({
//     from: "honeypot/config/platform",
//     to: `${sourceTargetPath}honeypot/config/platform`,
// });
// patterns.push({
//     from: "honeypot/3rdParty",
//     to: `${sourceTargetPath}honeypot/3rdParty`,
// });

// // always take gamebridge from the extras from now on
// if (platform === "OCTOPUS") {
//     patterns.push({
//         from: "buildCfg/extrasForClients/forOctopus/octopusData/3rdParty/octopus",
//         to: `${sourceTargetPath}honeypot/3rdParty/octopus`,
//     });
// }

// // we need to copy common and the specified ui folders over
// const uiTypes = ["common"];
// if (ui !== "custom") {
//     // now depending on the configured ui, we need to add in the extra ui names
//     uiTypes.push(ui.toLowerCase());
// }

// for (let i = 0; i < uiTypes.length; i++) {
//     // patterns.push({
//     //     from: `honeypot/ui/${uiTypes[i]}/sounds`,
//     //     to: `${assetTargetPath}honeypot/ui/${uiTypes[i]}/sounds`,
//     // });
//     // patterns.push({
//     //     from: `honeypot/ui/${uiTypes[i]}/fonts`,
//     //     to: `${assetTargetPath}honeypot/ui/${uiTypes[i]}/fonts`,
//     // });
//     // patterns.push({
//     //     from: `honeypot/ui/${uiTypes[i]}/base64`,
//     //     to: `${sourceTargetPath}honeypot/ui/${uiTypes[i]}/base64`,
//     // });
//     // patterns.push({
//     //     from: `honeypot/ui/${uiTypes[i]}/locales`,
//     //     to: `${sourceTargetPath}honeypot/ui/${uiTypes[i]}/locales`,
//     // });
//     // // this isnt available in all frameworks
//     // // if (fs.existsSync(`honeypot/ui/${uiTypes[i]}/phrases`) === true) {
//     // //     patterns.push({
//     // //         from: `honeypot/ui/${uiTypes[i]}/phrases`,
//     // //         to: `${sourceTargetPath}honeypot/ui/${uiTypes[i]}/phrases`,
//     // //     });
//     // // }
//     // patterns.push({
//     //     from: `honeypot/ui/${uiTypes[i]}/images`,
//     //     to: `${assetTargetPath}honeypot/ui/${uiTypes[i]}/images`,
//     // });
//     // patterns.push({
//     //     from: `honeypot/ui/${uiTypes[i]}/uiConfig.js`,
//     //     to: `${sourceTargetPath}honeypot/ui/${uiTypes[i]}/uiConfig.js`,
//     // });
// //const copyStaticPlugin = new CopyWebpackPlugin({ patterns: patterns });

// //const copyStaticPlugin = new CopyWebpackPlugin({ patterns: patterns });
// }
/*

 █████╗ ███████╗███████╗███████╗████████╗
██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝
███████║███████╗███████╗█████╗     ██║   
██╔══██║╚════██║╚════██║██╔══╝     ██║   
██║  ██║███████║███████║███████╗   ██║   
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝   
                                         
 ██████╗ ██████╗ ████████╗██╗███╗   ███╗██╗███████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗
██╔═══██╗██╔══██╗╚══██╔══╝██║████╗ ████║██║██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║
██║   ██║██████╔╝   ██║   ██║██╔████╔██║██║███████╗███████║   ██║   ██║██║   ██║██╔██╗ ██║
██║   ██║██╔═══╝    ██║   ██║██║╚██╔╝██║██║╚════██║██╔══██║   ██║   ██║██║   ██║██║╚██╗██║
╚██████╔╝██║        ██║   ██║██║ ╚═╝ ██║██║███████║██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║
 ╚═════╝ ╚═╝        ╚═╝   ╚═╝╚═╝     ╚═╝╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝

uses our own webpack plugin now OptimiseAssetsWebpackPlugin

*/

//let listOfFilesToOptimise = [];
// if (customOptimisationsModule && customOptimisationsModule.array) {
//     if (customOptimisationsModule.array.length > 0) {
//         console.log("custom client optimisation patterns detected");
//         listOfFilesToOptimise = listOfFilesToOptimise.concat(customOptimisationsModule.array);
//     }
// }

// if (iosBuild === true) {
//     if (customOptimisationsModule && customOptimisationsModule.arrayForIOS) {
//         if (customOptimisationsModule.arrayForIOS.length > 0) {
//             console.log("custom client optimisation patterns detected for IOS");
//             listOfFilesToOptimise = listOfFilesToOptimise.concat(customOptimisationsModule.arrayForIOS);
//         }
//     }
// }

// const ImageOptimisationPlugin = new OptimiseAssetsWebpackPlugin({
//     enabled: true,
//     useCache: true,
//     pngquant: {
//         speed: iosBuild ? 3 : 4,
//         quality: iosBuild ? [0.4, 0.7] : [0.45, 0.7],
//         strip: true,
//         dithering: false,
//         verbose: false,
//     },
//     jpegRecompress: {
//         max: 70,
//     },
//     distFolder: distFolder,
//     cacheDir: iosBuild ? "./.optiCache/ios/" : "./.optiCache/notios/",
//     globPatterns: listOfFilesToOptimise,
// });

/*

██╗      ██████╗ ██╗    ██╗    ██████╗ ███████╗███████╗
██║     ██╔═══██╗██║    ██║    ██╔══██╗██╔════╝██╔════╝
██║     ██║   ██║██║ █╗ ██║    ██████╔╝█████╗  ███████╗
██║     ██║   ██║██║███╗██║    ██╔══██╗██╔══╝  ╚════██║
███████╗╚██████╔╝╚███╔███╔╝    ██║  ██║███████╗███████║
╚══════╝ ╚═════╝  ╚══╝╚══╝     ╚═╝  ╚═╝╚══════╝╚══════╝
                                                       
 █████╗ ███████╗███████╗███████╗████████╗███████╗      
██╔══██╗██╔════╝██╔════╝██╔════╝╚══██╔══╝██╔════╝      
███████║███████╗███████╗█████╗     ██║   ███████╗      
██╔══██║╚════██║╚════██║██╔══╝     ██║   ╚════██║      
██║  ██║███████║███████║███████╗   ██║   ███████║      
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝   ╚═╝   ╚══════╝                                                          

*/

//let listOfFilesToLowRes = [`./dist/${assetTargetPath}assets/images/**/@2x/**/*.*`];

// if (customCreateLowResModule && customCreateLowResModule.array) {
//     listOfFilesToLowRes = listOfFilesToLowRes.concat(customCreateLowResModule.array);
// }

// const createLowResAssetsPlugin = new CreateLowResAssetsWebpackPlugin({
//     enabled: !!packageFile.createLowResAssets, //
//     distFolder: distFolder,
//     cacheDir: "./.lowResCache/",
//     useCache: true,
//     globPatterns: listOfFilesToLowRes,
// });

/*

███████╗██╗██╗     ███████╗    
██╔════╝██║██║     ██╔════╝    
█████╗  ██║██║     █████╗      
██╔══╝  ██║██║     ██╔══╝      
██║     ██║███████╗███████╗    
╚═╝     ╚═╝╚══════╝╚══════╝    
                               
 ██████╗██╗     ███████╗ █████╗ ███╗   ██╗    ██╗   ██╗██████╗ 
██╔════╝██║     ██╔════╝██╔══██╗████╗  ██║    ██║   ██║██╔══██╗
██║     ██║     █████╗  ███████║██╔██╗ ██║    ██║   ██║██████╔╝
██║     ██║     ██╔══╝  ██╔══██║██║╚██╗██║    ██║   ██║██╔═══╝ 
╚██████╗███████╗███████╗██║  ██║██║ ╚████║    ╚██████╔╝██║     
 ╚═════╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═══╝     ╚═════╝ ╚═╝     
                                                               
*/

// const cleanupFilesPlugin = new CleanUpWebpackPlugin({
//     iosBuild: iosBuild,
//     platform: platform,
//     theme: theme,
//     distFolder: distFolder,
//     dev: true,
// });

// const writeToDisk = true;
// const portnumber = platform === "YGGDRASIL" ? 8080 : 9000;

module.exports = {
    mode: "development",
    watchOptions: {
        ignored: /node_modules/,
    },
    devServer: {
        // static: {
        //     directory: path.join(__dirname, `./${distFolder}`),
        //     watch: true,
        // },
        // hot: false,
        // liveReload: true,
        // devMiddleware: {
        //     writeToDisk: writeToDisk,
        // },
        // port: portnumber,
    },
    devtool: "source-map",
    entry: {
        game: "./src/index.js",
    },
    optimization: {
        runtimeChunk: "single",
        splitChunks: {
            chunks: "all",
        },
    },
    output: {
        // clean: true,
        // filename: `./${sourceTargetPath}[name].bundle.js`,
        // chunkFilename: `./${sourceTargetPath}[name].bundle.js`,
        // path: path.resolve(__dirname, `../${distFolder}`),
    },
    module: {
        rules: [
            // {
            //     // https://www.npmjs.com/package/webpack-preprocessor-loader
            //     test: /\.js$/,
            //     loader: "webpack-preprocessor-loader",
            //     options: {
            //         debug: true, // Provides constant value for built-in #!debug directive
            //         directives: {
            //             // Define custom directives.
            //             dev: true,
            //             prod: false,
            //             // #!dev
            //             // console.log("dev build"); // This line will be left
            //             // #!prod
            //             // console.log("production build"); // This line will be omitted
            //         },
            //         params: {
            //             // Provide constant values for built-in #!if / #!elseif / #!else / #!endif directives
            //             ENV: "development",
            //             DEBUGBUILD: debugBuild,
            //             PLATFORM: platform,
            //             TWEAKER: tweakerAllowed,
            //             TWEAKER_JUST_FORCES: demo,
            //             DEMO: demo,
            //             THEME: theme,
            //             IOSBUILD: iosBuild,
            //             UI: ui,
            //         },
            //         verbose: true, // Preserve all directive comments and omitted lines as comments. Basically for debugging purpose. Note that the normal comments remain as-is(except padding)
            //     },
            // },
        ],
    },
    plugins: [
        // new DefinePlugin({
        //     PROD_BUILD: JSON.stringify(false),
        //     DEV_BUILD: JSON.stringify(true),
        //     GAME_INIT_DATA: JSON.stringify(gameInitData),
        //     PLATFORM: JSON.stringify(platform),
        //     DEMO: JSON.stringify(demo),
        //     CLIENT_VERSION: JSON.stringify(clientVersion),
        //     CLIENT_GAME_NAME: JSON.stringify(clientName),
        //     THEME: JSON.stringify(theme),
        //     IOSBUILD: JSON.stringify(iosBuild),
        //     UI: JSON.stringify(ui),
        //     DEBUGBUILD: JSON.stringify(debugBuild),
        // }),
        // new HtmlWebPackPlugin({
        //     template: "index.html",
        //     hash: true,
        //     filename: "./index.html",
        //     random: `${Date.now()}`,
        // }),
        // copyStaticPlugin,
        //createLowResAssetsPlugin,
        //ImageOptimisationPlugin,
        // new AudioTranscodeWebpackPlugin({
        //     enabled: !!packageFile.transcodeAudio || platform === "YGGDRASIL",
        //     useCache: true,
        //     distFolder: distFolder,
        //     cacheDir: "./.audioCache/",
        //     mobileVersionRequired: !!packageFile.mobileAudioRequired || platform === "YGGDRASIL",
        //     replayVersionRequired: platform === "YGGDRASIL",
        //     globPatterns: [
        //         `./dist/${assetTargetPath}**/*.wav`, //
        //         `./dist/${assetTargetPath}**/*.m4a`,
        //     ],
        // }),
        //cleanupFilesPlugin,
        //new CaseSensitivePathsPlugin({ debug: true }),
    ],
};
