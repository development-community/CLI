import prompts from "prompts";
import { IPrompter } from "../typings";
import QuestionsService from "../services/questions";

export default class Prompter implements IPrompter {
    private static instance: Prompter;

    questionsServices = new QuestionsService();
    
    async askInitial() {
        return await prompts(this.questionsServices.getInitialQuestions)
    }

    async askLanguage() {
        return await prompts(this.questionsServices.getLanguage)
    }

    async askDiscordVersion() {
        return await prompts(this.questionsServices.getDiscordVersion)
    }

    async askPackageManager() {
        return await prompts(this.questionsServices.getPackageManager)
    }
}