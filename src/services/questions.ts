import { IQuestionsService, IQuestion } from "../typings"

export default class QuestionsService implements IQuestionsService {
    private static instance: QuestionsService;

    public get getInitialQuestions() {
        return <IQuestion>{ 
            type: 'select',
            name: 'generation',
            message: 'Que voulez-vous générez ?',
            choices: [
                { title: '🤖 Bot', value: 'bot' },
                { title: '🧪 API', value: 'api' },
                { title: '🚀 Site web', value: 'website' },
                { title: '⚙️  Simple dossier', value: 'folder' }]
        }
    }
    public get getLanguage() {
        return <IQuestion>{ 
            type: 'select',
            name: 'language',
            message: 'Quel language voulez-vous utiliser ?',
            choices: [
                { title: '🟦 Typescript', value: 'typescript' },
                { title: '🟨 Javascript', value: 'javascript' },]
        }
    }
    public get getDiscordVersion() {
        return <IQuestion>{ 
            type: 'select',
            name: 'discordVersion',
            message: 'Quelle version Discord.js voulez-vous utiliser ?',
            choices: [
                { title: '13.1.0', value: '13.1.0' },
                { title: '13.0.0', value: '13.0.0' },
                { title: '12.5.1', value: '12.5.1' },
                { title: '12.4.1', value: '12.4.1' },
                { title: '12.3.1', value: '12.3.1' },]
        }
    }
    public get getPackageManager() {
        return <IQuestion>{ 
            type: 'select',
            name: 'packageManager',
            message: 'Quel package manager utilisez-vous ?',
            choices: [
                { title: 'Yarn', value: 'yarn' },
                { title: 'NPM', value: 'npm' },]
        }
    }
}