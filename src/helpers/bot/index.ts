import { ADDRGETNETWORKPARAMS } from 'dns';
import { IHelper, IPrompter, IScaffolder } from '../../typings';
import { isValidLanguage, isValidDiscordVersion, isValidPackageManager } from '../../utils';

class BotHelper implements IHelper {
    prompter: IPrompter;
    scaffolder: IScaffolder;
    constructor(Prompter: IPrompter, BotScaffolder: IScaffolder) {
        this.prompter = Prompter;
        this.scaffolder = BotScaffolder
    }

    async __main() {
        const details = await this.prompter.askForDetails();
        console.log(details)
    }
}

export default BotHelper;