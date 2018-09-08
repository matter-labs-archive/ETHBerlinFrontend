export const config = {
	infura: {
		url: 'wss://rinkeby.infura.io/ws/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		key: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
		secret: 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy',
	},
	contract: {
		address: '0xaaf3a96b8f5e663fc47bcc19f14e10a3fd9c414b',
		abi: [
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": false,
						"name": "invoice",
						"type": "uint256"
					}
				],
				"name": "InvoicePayed",
				"type": "event"
			},
			{
				"constant": false,
				"inputs": [
					{
						"name": "_invoice",
						"type": "uint256"
					}
				],
				"name": "pay",
				"outputs": [],
				"payable": true,
				"stateMutability": "payable",
				"type": "function"
			}
		],
	}
};