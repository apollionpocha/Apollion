const { execSync } = require('child_process');
const axios = require('axios');

exports.run = {
    usage: ['update'],
    category: 'owner',
    async: async (m, { client, Func }) => {
        try {
            const accessToken = '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'; // Replace with your GitHub personal access token
            const repoOwner = 'kysage1';
            const repoName = 'nxb';

            const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits/master`;
            const response = await axios.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

            const latestCommitSHA = response.data.sha;
            const currentCommitSHA = execSync('git rev-parse HEAD').toString().trim();

            if (latestCommitSHA !== currentCommitSHA) {
                var stdout = execSync('git pull');
                var output = stdout.toString();

                if (output.match(new RegExp('Already up to date', 'g'))) {
                    return client.reply(m.chat, Func.texted('bold', `${output.trim()}`), m);
                }

                if (output.match(/stash/g)) {
                    var stdout = execSync('git stash && git pull');
                    var output = stdout.toString();
                    client.reply(m.chat, `${output.trim()}`, m).then(async () => process.send('reset'));
                } else {
                    return client.reply(m.chat, `${output.trim()}`, m).then(async () => process.send('reset'));
                }
            } else {
                return client.reply(m.chat, Func.texted('bold', 'Already up to date'), m);
            }
        } catch (e) {
            return client.reply(m.chat, Func.jsonFormat(e), m);
        }
    },
    owner: true,
    cache: true,
    location: __filename,
};
