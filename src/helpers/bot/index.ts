import { ADDRGETNETWORKPARAMS } from 'dns';
import { BotScaffoldDetails, IHelper, IPrompter, IScaffolder } from '../../typings';
import { isValidLanguage, isValidDiscordVersion, isValidPackageManager } from '../../utils';

class BotHelper implements IHelper {
    prompter: IPrompter;
    scaffolder: IScaffolder;
    constructor(Prompter: IPrompter, BotScaffolder: IScaffolder) {
        this.prompter = Prompter;
        this.scaffolder = BotScaffolder
    }

    async __main() {
        const details = <BotScaffoldDetails>(await this.prompter.askForDetails() as unknown);
        console.log(details)
    }
}

export default BotHelper;