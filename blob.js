let layout = require('onoff').Gpio;

let chart = {
	inout: {
		pin5: {
			mode: 'in',
			ussage: 'sensor5'
		},
		pin6: {
			mode: 'in',
			ussage: 'sensor6'
		},
		pin13: {
			mode: 'in',
			ussage: 'sensor13'
		},
		pin26: {
			mode: 'in',
			ussage: 'sensor26'
		},
		relay16: {
			power: 'external',
			dep: 'ground/active',
			foras: 'irthruput'
		},
		relay20: {
			power: 'external',
			dep: 'ground/active',
			foras: 'irphotorec'
		},
		relay21: {
			power: 'internal',
			dep: 'power/inactive',
			ussage: 'backup'
		}
	}
};

let airbase = {
	release: function(pinout) {
		pinout.unexport();
		return [ true, 'release/freed', pinout ];
	},
	monitor: function(pinout) {
		pinout.watch((err, state) => {
			if (err) {
				throw new Error('Some type of error occured in the hardware');
				return [ false, err ];
			} else {
				pinout.writeState(state);
				return [ true ];
			}
		});
	}
};
