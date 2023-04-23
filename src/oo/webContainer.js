import { WebContainer } from "@webcontainer/api";
const modules = import.meta.glob("./src/**/*");

class WebOS {
    #instance;
    #files;

    async #init(module) {
        this.#files = await this.#getFileObject(module);
        this.#instance = await WebContainer.boot();
        await this.#instance.mount(this.#files);
    }
    #loadedHandler() {
        this.#init(modules);
    }
    constructor(modules) {
        this.#this = this;
        window.addEventListener("load", () => this.#loadedHandler);
    }

    async #run(cmd) {
        const args = cmd.match(/[\S]+/g);
        const res = await this.#instance.spawn(args[0], args.slice(1));
        res.output.pipeTo(
            new WritableStream({
                write(data) {
                    console.log(data);
                },
            })
        );
    }

    async #installDependencies() {
        await this.#run("npm install");
    }

    async #startDevServer() {
        await this.#run("npm run dev");
        webcontainerInstance.on("server-ready", (port, url) => {
            iframeEl.src = url;
        });
    }

    async #writeIndexJSX(content) {
        await webcontainerInstance.fs.writeFile("/mock.js", content);
    }

    async #getFileObject(modules) {
        return new Promise((resolve, reject) => {
            const append = "?raw";
            const generateDir = (directory, fileTreeRootNode) => {
                if (!(directory in fileTreeRootNode)) {
                    fileTreeRootNode[directory] = {};
                }
                fileTreeRootNode = fileTreeRootNode[directory];
                return fileTreeRootNode;
            };
            const generateFile = (filename, filecontent, fileTreeRootNode) => {
                fileTreeRootNode[filename] = {
                    file: {
                        contents: filecontent,
                    },
                };
            };
            const travelFilePath = (basePath, append, fileTreeRootNode) => {
                return new Promise((resolve, reject) => {
                    let path = basePath + append;
                    import(path).then((res) => {
                        const dirs = basePath.split("/").filter((e) => e != ".");
                        let node = fileTreeRootNode;
                        for (var i = 0; i < dirs.length; i++) {
                            if (i == dirs.length - 1) {
                                generateFile(dirs[i], res.default, node);
                            } else {
                                node = generateDir(dirs[i], node);
                            }
                        }
                        resolve(fileTreeRootNode);
                    });
                });
            };
            const fileTreeRootNode = {};
            Promise.all(
                Object.keys(modules).map((module) =>
                    travelFilePath(
                        module,
                        append,
                        JSON.parse(JSON.stringify(fileTreeRootNode))
                    )
                )
            ).then((res) => {
                const resultObj = {};
                const travel = (obj, currentLevelObj) => {
                    Object.keys(obj).forEach((key) => {
                        if (typeof obj[key] === "object") {
                            if (currentLevelObj[key] == null) currentLevelObj[key] = {};
                            travel(obj[key], currentLevelObj[key]);
                        } else {
                            currentLevelObj[key] = obj[key];
                        }
                    });
                };
                for (var obj of res) {
                    travel(obj, resultObj);
                }
                resolve(resultObj);
            });
        });
    }
}
export default new WebOS(modules);
