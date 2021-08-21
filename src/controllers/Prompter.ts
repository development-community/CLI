import prompts from "prompts";
import { IPrompter } from "../typings";
import QuestionsService from "../services/questions";

export default class Prompter implements IPrompter {
    private static instance: Prompter;

    questionsServices = new QuestionsService();
    
    async askInitial() {
        return await prompts(this.questionsServices.getInitialQuestions)
    }

    async askForDetails() {
        return await prompts([
            this.questionsServices.getLanguage,
            this.questionsServices.getDiscordVersion,
            this.questionsServices.getPackageManager,
            ...this.questionsServices.getCredentials
        ])
    }
}