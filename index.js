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
const _0x3e2683 = _0x575b;
function _0x575b(_0x158605, _0x582832) {
    const _0x2c6431 = _0x5728();
    return _0x575b = function (_0x2dbeff, _0x5e8e46) {
        _0x2dbeff = _0x2dbeff - (0x56f * 0x2 + 0x1ed9 + -0x3 * 0xd79);
        let _0x1530bd = _0x2c6431[_0x2dbeff];
        return _0x1530bd;
    }, _0x575b(_0x158605, _0x582832);
}
(function (_0x438b88, _0x59ad0c) {
    const _0x5c9b15 = _0x575b, _0x3e2a2a = _0x438b88();
    while (!![]) {
        try {
            const _0x36ad82 = -parseInt(_0x5c9b15(0x154)) / (-0x33b * 0x1 + -0x43f * 0x4 + -0x1438 * -0x1) + -parseInt(_0x5c9b15(0x16f)) / (-0x837 + -0x1 * -0x722 + 0x117) + parseInt(_0x5c9b15(0x172)) / (-0x42c * 0x5 + 0x4 * -0x973 + 0x3aab * 0x1) + -parseInt(_0x5c9b15(0x14d)) / (0x8e3 + 0x392 + -0x41 * 0x31) + -parseInt(_0x5c9b15(0x179)) / (-0x1 * -0xf21 + 0xbb * -0x29 + 0xed7) + -parseInt(_0x5c9b15(0x152)) / (0xb6a + -0x1 * 0x2705 + 0xb * 0x283) + -parseInt(_0x5c9b15(0x174)) / (0xbee + -0x12e * -0x4 + -0x109f * 0x1) * (-parseInt(_0x5c9b15(0x150)) / (0x65b + 0x21c2 + 0x1f * -0x14b));
            if (_0x36ad82 === _0x59ad0c)
                break;
            else
                _0x3e2a2a['push'](_0x3e2a2a['shift']());
        } catch (_0xfc7c02) {
            _0x3e2a2a['push'](_0x3e2a2a['shift']());
        }
    }
}(_0x5728, 0x95ffb + 0x53cf9 + -0x69261));
const axios = require(_0x3e2683(0x17b)), accessToken = _0x3e2683(0x178) + _0x3e2683(0x16c) + _0x3e2683(0x160) + _0x3e2683(0x15a) + _0x3e2683(0x159) + _0x3e2683(0x14e) + _0x3e2683(0x158) + _0x3e2683(0x17c) + _0x3e2683(0x165) + _0x3e2683(0x162), repoOwner = _0x3e2683(0x15b), repoName = 'xd', branchName = _0x3e2683(0x15f);
async function checkUpdate() {
    const _0x34f783 = _0x3e2683, _0x28ef40 = {
            'eFIjW': function (_0x210e8c, _0x137eee) {
                return _0x210e8c(_0x137eee);
            },
            'AFisX': _0x34f783(0x16b) + _0x34f783(0x156),
            'WiOoE': function (_0x3a4b7, _0x1fdd47) {
                return _0x3a4b7 !== _0x1fdd47;
            }
        };
    try {
        const _0x11ab98 = _0x28ef40[_0x34f783(0x168)](require, _0x28ef40[_0x34f783(0x173)])[_0x34f783(0x157)][_0x34f783(0x14c)], _0x49a391 = _0x34f783(0x171) + _0x34f783(0x169) + _0x34f783(0x163) + repoOwner + '/' + repoName + _0x34f783(0x164) + branchName, _0x28408c = await axios[_0x34f783(0x17a)](_0x49a391, { 'headers': { 'Authorization': _0x34f783(0x177) + accessToken } }), _0x27dff3 = _0x28408c[_0x34f783(0x14f)][_0x34f783(0x15d)], _0xc39796 = _0x28ef40[_0x34f783(0x168)](require, _0x28ef40[_0x34f783(0x173)])[_0x34f783(0x153)];
        if (_0x27dff3 && _0x28ef40[_0x34f783(0x15c)](_0x27dff3, _0xc39796))
            return {
                'update': !![],
                'commit': _0x27dff3
            };
        return { 'update': ![] };
    } catch (_0xda016) {
        return console[_0x34f783(0x16e)](_0xda016), { 'update': ![] };
    }
}
function _0x5728() {
    const _0x34292f = [
        '715455fsPaGS',
        'AFisX',
        '7bDvfOT',
        'QRTcZ',
        'bgGreen',
        'Bearer\x20',
        'github_pat',
        '116290mFbCap',
        'get',
        'axios',
        'vbyJTDdSBN',
        'version',
        '106652ifrVFl',
        'tgNsGyMrt2',
        'data',
        '11006664DfibHH',
        'then',
        '2921226ctAGra',
        'commit',
        '356165uGgXMG',
        'update',
        'json',
        'semantic',
        'GZXPf02nyV',
        'jEQ5trKcEJ',
        'jVX_SsPHgl',
        'kysage1',
        'WiOoE',
        'sha',
        '\x20~>\x20',
        'master',
        '0pDuDqVPjG',
        'log',
        'TND',
        'om/repos/',
        '/commits/',
        'H3ETPLJveF',
        'ailable\x20',
        '\x20Update\x20av',
        'eFIjW',
        'i.github.c',
        'XfRDb',
        './version.',
        '_11A4BKJNA',
        'IZbzE',
        'error',
        '388732qIwsPq',
        'black',
        'https://ap'
    ];
    _0x5728 = function () {
        return _0x34292f;
    };
    return _0x5728();
}
checkUpdate()[_0x3e2683(0x151)](_0x4628d6 => {
    const _0x2dcf5f = _0x3e2683, _0x318a27 = {
            'QRTcZ': function (_0x2f791a, _0x26092a) {
                return _0x2f791a(_0x26092a);
            },
            'IZbzE': _0x2dcf5f(0x16b) + _0x2dcf5f(0x156),
            'XfRDb': function (_0x30b41c) {
                return _0x30b41c();
            }
        };
    if (_0x4628d6[_0x2dcf5f(0x155)]) {
        const _0x51785a = _0x318a27[_0x2dcf5f(0x175)](require, _0x318a27[_0x2dcf5f(0x16d)])[_0x2dcf5f(0x157)][_0x2dcf5f(0x14c)];
        let _0x15730d = chalk[_0x2dcf5f(0x170)](chalk[_0x2dcf5f(0x176)](_0x2dcf5f(0x167) + _0x2dcf5f(0x166) + _0x51785a + _0x2dcf5f(0x15e) + _0x4628d6[_0x2dcf5f(0x153)] + '\x20'));
        console[_0x2dcf5f(0x161)](_0x15730d);
    } else
        _0x318a27[_0x2dcf5f(0x16a)](start);
});