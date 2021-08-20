import { IPrompter } from '../../typings/Prompter'
import { IHelper } from '../../typings/Helper';

class WebsiteHelper implements IHelper {
    prompter: IPrompter;
    constructor(Prompter: IPrompter) {
        this.prompter = Prompter;
    }

    __main() {
        
    }
}

export default WebsiteHelper;