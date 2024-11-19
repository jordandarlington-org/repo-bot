/**
    * This is the main entrypoint to your Probot app
    * @param {import('probot').Probot} app
*/
export default (app) => {
    // app.log = app.log.child({ timestamp: true });
    app.log.info("REPO-BOT STARTED");

    app.on("issues.opened", async (context) => {
        const issueComment = context.issue({
            body: "Thanks for opening this issue!",
        });
        return context.octokit.issues.createComment(issueComment);
    });
};
