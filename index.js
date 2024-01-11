if (process.argv.includes('--server')) require('./server')
require('dotenv').config(), require('rootpath')()
const { spawn: spawn } = require('child_process'), { Function: Func } = new(require('@neoxr/wb')), path = require('path'), colors = require('@colors/colors/safe'), CFonts = require('cfonts'), chalk = require('chalk')

const unhandledRejections = new Map()
process.on('unhandledRejection', (reason, promise) => {
   unhandledRejections.set(promise, reason)
   console.log('Unhandled Rejection at:', promise, 'reason:', reason)
})
process.on('rejectionHandled', (promise) => {
   unhandledRejections.delete(promise)
})
process.on('Something went wrong', function(err) {
   console.log('Caught exception: ', err)
})

function start() {
	let args = [path.join(__dirname, 'client.js'), ...process.argv.slice(2)]
	let p = spawn(process.argv[0], args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting...')
			p.kill()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		start()
	})
}

function _0x3a8e() {
    var _0x5bc490 = [
        '1926910BMPwDk',
        '2691670WoAqqT',
        'system',
        'sage1',
        '1655276BNJjio',
        '4NMTPWM',
        'tiny',
        '29cjeosf',
        'ttps://git',
        'Github\x20:\x20h',
        '52310Cujenf',
        'center',
        '4875732LaNqOm',
        'console',
        '40shPtlw',
        '21149535CzIOof',
        '26658cjwypG',
        'SPIKE\x20BOT',
        'hub.com/ky',
        '18RwFRZu',
        'say'
    ];
    _0x3a8e = function () {
        return _0x5bc490;
    };
    return _0x3a8e();
}
function _0x39b5(_0x3b8216, _0x54393a) {
    var _0x219fc1 = _0x3a8e();
    return _0x39b5 = function (_0x3701ee, _0x127af8) {
        _0x3701ee = _0x3701ee - (0x3 * 0x635 + 0x1cf3 + 0x178a * -0x2);
        var _0x3007da = _0x219fc1[_0x3701ee];
        return _0x3007da;
    }, _0x39b5(_0x3b8216, _0x54393a);
}
var _0x4d55fa = _0x39b5;
(function (_0x47fa38, _0x41188c) {
    var _0x5502c2 = _0x39b5, _0x52d72a = _0x47fa38();
    while (!![]) {
        try {
            var _0x5bdf19 = -parseInt(_0x5502c2(0x90)) / (0x7 * -0x439 + -0xfea + 0x2 * 0x16bd) * (parseInt(_0x5502c2(0x7e)) / (-0x19 * 0x121 + -0x4a * 0x67 + 0x3a01)) + -parseInt(_0x5502c2(0x84)) / (-0x9a1 + -0x227e + 0x64e * 0x7) * (-parseInt(_0x5502c2(0x8e)) / (-0xae * 0x16 + -0x5 * -0xf5 + 0xa2f)) + -parseInt(_0x5502c2(0x89)) / (0x1d46 + 0x2251 + 0xce * -0x4f) + -parseInt(_0x5502c2(0x80)) / (0x1da2 * -0x1 + -0x1ec7 + -0x1425 * -0x3) + -parseInt(_0x5502c2(0x8d)) / (-0x172 * 0xa + 0x4 * -0x27d + 0x3 * 0x825) * (-parseInt(_0x5502c2(0x82)) / (-0x12ec * 0x2 + 0x10ed + -0x1 * -0x14f3)) + parseInt(_0x5502c2(0x87)) / (-0x2459 + -0x2460 + -0x48c2 * -0x1) * (-parseInt(_0x5502c2(0x8a)) / (0x1 * -0x23ed + 0x662 + 0x1d95 * 0x1)) + parseInt(_0x5502c2(0x83)) / (-0x204a + 0x22e5 * -0x1 + 0x433a);
            if (_0x5bdf19 === _0x41188c)
                break;
            else
                _0x52d72a['push'](_0x52d72a['shift']());
        } catch (_0x381079) {
            _0x52d72a['push'](_0x52d72a['shift']());
        }
    }
}(_0x3a8e, -0xf821d + 0x71 * -0xca0 + 0x1e8703), (CFonts[_0x4d55fa(0x88)](_0x4d55fa(0x85), {
    'font': _0x4d55fa(0x8f),
    'align': _0x4d55fa(0x7f),
    'colors': [_0x4d55fa(0x8b)]
}), CFonts[_0x4d55fa(0x88)](_0x4d55fa(0x92) + _0x4d55fa(0x91) + _0x4d55fa(0x86) + _0x4d55fa(0x8c), {
    'colors': [_0x4d55fa(0x8b)],
    'font': _0x4d55fa(0x81),
    'align': _0x4d55fa(0x7f)
})));

// dont remove this code if you need update notification
const accessToken = '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';
const repoOwner = 'kysage1';
const repoName = 'nxb';
const branchName = 'master';

async function checkUpdate() {
    try {
        const vcode = require('./version.json').semantic.version;
        const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits/${branchName}`;

        const response = await axios.get(apiUrl, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        const latestCommitSHA = response.data.sha;

        const currentCommitSHA = require('./version.json').commit;

        if (latestCommitSHA && latestCommitSHA !== currentCommitSHA) {
            return {
                update: true,
                commit: latestCommitSHA,
            };
        }

        return { update: false };
    } catch (e) {
        console.error(e);
        return { update: false };
    }
}

checkUpdate().then((json) => {
    if (json.update) {
        const vcode = require('./version.json').semantic.version;
        let i = chalk.black(chalk.bgGreen(` Update available ${vcode} ~> ${json.commit} `));
        console.log(i);
    } else {
        start();
    }
});