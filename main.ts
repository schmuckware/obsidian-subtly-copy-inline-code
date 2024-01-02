import {
	App,
	Notice,
	Plugin,
	PluginSettingTab,
	Setting,
} from "obsidian";

export default class MyPlugin extends Plugin {

	async onload() {
		this.registerMarkdownPostProcessor((el, ctx) => {
			// Grab all code blocks during reading mode
			el.querySelectorAll("code").forEach(
				(codeBlock) => {
					codeBlock.addEventListener("click", (event) => {
						const textContent = codeBlock.textContent;
						if (textContent !== null) {
							navigator.clipboard
								.writeText(textContent)
								.then(() => {
									new Notice("Copied to your clipboard!");
								})
								.catch((err) => {
									new Notice(
										"Error copying to your clipboard: ",
										err
									);
								});
						}
					});
				}
			);
		});
	}

	onunload() {}
}
