import { IHelper, IPrompter} from '../../typings';
import { isValidLanguage, isValidDiscordVersion, isValidPackageManager } from '../../utils';

class BotHelper implements IHelper {
    prompter: IPrompter;
    constructor(Prompter: IPrompter) {
        this.prompter = Prompter;
    }

    async __main() {
        const { language } = await this.prompter.askLanguage();
        if(!isValidLanguage(language))return;
        const { discordVersion } = await this.prompter.askDiscordVersion();
        if(!isValidDiscordVersion(discordVersion)) return;
        const { packageManager } = await this.prompter.askPackageManager();
        if(!isValidPackageManager(packageManager)) return;
    }
}

export default BotHelper;