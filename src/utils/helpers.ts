export function isValidAnswer(answer: string):boolean {
    return ["bot", "api", "website", "folder"].includes(answer);
}

export function isValidLanguage(answer: string):boolean {
    return ["javascript", "typescript"].includes(answer);
}

export function isValidDiscordVersion(answer: string):boolean {
    return ["13.1.0", "13.0.0", "12.5.1", "12.4.1", "12.3.1"].includes(answer);
}

export function isValidPackageManager(answer: string):boolean {
    return ["yarn", "npm"].includes(answer);
}