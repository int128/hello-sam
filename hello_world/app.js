'use strict';

const Slack = require('@slack/client');

exports.handler = async (slack, event, context) => {
    const sent = await slack.send("```" + JSON.stringify(event) + "```")
    return { statusCode: 200, body: sent.text };
};

exports.lambda_handler = async (event, context, callback) => {
    try {
        const slack = new Slack.IncomingWebhook(process.env.SLACK_WEBHOOK);
        const response = await exports.handler(slack, event, context)
        callback(null, response);
    } catch (e) {
        console.error(e);
        callback(e, null);
    }
};
