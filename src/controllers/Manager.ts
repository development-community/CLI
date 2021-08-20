import { EventEmitter } from "stream";
import { IManager } from "../typings";

export default class Manager extends EventEmitter implements IManager {
    constructor() {
        super()
        this.initializeEvents()
    }
    initializeEvents() {
        
    }
}