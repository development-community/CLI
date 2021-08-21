import { EventEmitter } from "stream";
import { IManager, IPrompter, IScaffolder } from "../typings";
import { promises as fs } from 'fs';
import path from 'path';
import Prompter from "./Prompter";
import Scaffolder from "./Scaffolder";

export default class Manager extends EventEmitter implements IManager {
    prompter: IPrompter;
    constructor() {
        super();
        this.prompter = new Prompter();
        this.initializeEvents()
    }
    async initializeEvents(initialPath = path.join(__dirname, '../helpers')) {
        const events = await fs.readdir(initialPath);
        for(let i = 0; i < events.length; i++) {
            const { default: indexFile } = await import(`${path.join(initialPath, events[i])}/index`);
            const { default: scaffolderFile }: { default: typeof Scaffolder } = await import(`${path.join(initialPath, events[i])}/Scaffolder`);
            this.on(events[i], new indexFile(this.prompter, new scaffolderFile()).__main);
        }
    }
}