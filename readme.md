# JSCELLS Code/Text Editor

This project utilizes mainly React/Redux & Typescript to re-create a "Jupyter Notebook" but for Javascript. Because it bundles and transpiles code directly within your browser, much like sites such as CodePen or CodeSandBox. The project was deployed using a multi-package architecture to NPM (jscells);

![Game Overview](https://github.com/ChrisKCarr/Text-Editor-App/blob/main/images/CodeEditorScreen.png)

### Installing

- Make sure you have `npm` installed, to do this, open Terminal and type `npm -v`. If you don't have npm installed, run `brew install node`, then check to make sure it downloaded npm using `npm -v`.
- Next run `npx jscells serve`, this should open the app on port 4005, copy and paste the http address into a browser to start editing.
- When you're done using it `CTRL+C` to close the port, then `exit` in the terminal.

Your progress is saved locally, re-run `npx jscells serve` to pick up where you left off.
