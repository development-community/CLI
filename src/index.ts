#!/usr/bin/env node
import Prompter from './controllers/Prompter'
import { isValidAnswer } from './utils'

async function __main(prompter: Prompter) {
    const args: Array<string> = process.argv.slice(2);
    if(args.length <= 0) {
        const answer = await prompter.askInitial();
        if(isValidAnswer(answer.generation)){

        }
    }
}

__main(new Prompter())