export type abiType = [
	{
		inputs: [
			{
				internalType: "uint256";
				name: "id";
				type: "uint256";
			}
		];
		name: "buyNft";
		outputs: [];
		stateMutability: "payable";
		type: "function";
	},
	{
		inputs: [];
		stateMutability: "nonpayable";
		type: "constructor";
	},
	{
		anonymous: false;
		inputs: [
			{
				indexed: true;
				internalType: "address";
				name: "_from";
				type: "address";
			},
			{
				indexed: true;
				internalType: "address";
				name: "_sellerAddress";
				type: "address";
			},
			{
				indexed: false;
				internalType: "uint256";
				name: "nftId";
				type: "uint256";
			}
		];
		name: "buyNftEvent";
		type: "event";
	},
	{
		inputs: [
			{
				internalType: "uint256";
				name: "id";
				type: "uint256";
			}
		];
		name: "cancelSellNft";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
	},
	{
		anonymous: false;
		inputs: [
			{
				indexed: true;
				internalType: "address";
				name: "_from";
				type: "address";
			},
			{
				indexed: false;
				internalType: "uint256";
				name: "nftId";
				type: "uint256";
			}
		];
		name: "cancelSellNftEvent";
		type: "event";
	},
	{
		inputs: [
			{
				internalType: "uint256";
				name: "id";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "newPrice";
				type: "uint256";
			}
		];
		name: "changeNftPrice";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
	},
	{
		anonymous: false;
		inputs: [
			{
				indexed: true;
				internalType: "address";
				name: "_from";
				type: "address";
			},
			{
				indexed: false;
				internalType: "uint256";
				name: "nftId";
				type: "uint256";
			},
			{
				indexed: false;
				internalType: "uint256";
				name: "newPrice";
				type: "uint256";
			}
		];
		name: "changePriceNftEvent";
		type: "event";
	},
	{
		anonymous: false;
		inputs: [
			{
				indexed: true;
				internalType: "address";
				name: "_from";
				type: "address";
			},
			{
				components: [
					{
						internalType: "uint8";
						name: "ercId";
						type: "uint8";
					},
					{
						internalType: "string";
						name: "name";
						type: "string";
					},
					{
						internalType: "string";
						name: "description";
						type: "string";
					},
					{
						internalType: "string";
						name: "pictureURL";
						type: "string";
					},
					{
						internalType: "uint256";
						name: "price";
						type: "uint256";
					},
					{
						internalType: "uint256";
						name: "creationDate";
						type: "uint256";
					},
					{
						internalType: "address";
						name: "owner";
						type: "address";
					},
					{
						internalType: "bool";
						name: "isOnSale";
						type: "bool";
					}
				];
				indexed: false;
				internalType: "struct Profi.Nft";
				name: "nft";
				type: "tuple";
			}
		];
		name: "createNftEvent";
		type: "event";
	},
	{
		anonymous: false;
		inputs: [
			{
				indexed: true;
				internalType: "address";
				name: "_from";
				type: "address";
			},
			{
				indexed: false;
				internalType: "uint256";
				name: "nftId";
				type: "uint256";
			}
		];
		name: "makeSellNftEvent";
		type: "event";
	},
	{
		inputs: [
			{
				internalType: "string";
				name: "name";
				type: "string";
			},
			{
				internalType: "string";
				name: "description";
				type: "string";
			},
			{
				internalType: "string";
				name: "pictureURL";
				type: "string";
			}
		];
		name: "mintNft";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "address";
				name: "user";
				type: "address";
			},
			{
				internalType: "string";
				name: "login";
				type: "string";
			}
		];
		name: "registration";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "uint256";
				name: "id";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "price";
				type: "uint256";
			}
		];
		name: "sellNft";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
	},
	{
		inputs: [];
		name: "getNfts";
		outputs: [
			{
				components: [
					{
						internalType: "uint8";
						name: "ercId";
						type: "uint8";
					},
					{
						internalType: "string";
						name: "name";
						type: "string";
					},
					{
						internalType: "string";
						name: "description";
						type: "string";
					},
					{
						internalType: "string";
						name: "pictureURL";
						type: "string";
					},
					{
						internalType: "uint256";
						name: "price";
						type: "uint256";
					},
					{
						internalType: "uint256";
						name: "creationDate";
						type: "uint256";
					},
					{
						internalType: "address";
						name: "owner";
						type: "address";
					},
					{
						internalType: "bool";
						name: "isOnSale";
						type: "bool";
					}
				];
				internalType: "struct Profi.Nft[]";
				name: "";
				type: "tuple[]";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "address";
				name: "user";
				type: "address";
			}
		];
		name: "getUser";
		outputs: [
			{
				components: [
					{
						internalType: "enum Profi.Roles";
						name: "role";
						type: "uint8";
					},
					{
						internalType: "string";
						name: "login";
						type: "string";
					}
				];
				internalType: "struct Profi.User";
				name: "";
				type: "tuple";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [];
		name: "NFT";
		outputs: [
			{
				internalType: "contract nft";
				name: "";
				type: "address";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "uint256";
				name: "";
				type: "uint256";
			}
		];
		name: "nfts";
		outputs: [
			{
				internalType: "uint8";
				name: "ercId";
				type: "uint8";
			},
			{
				internalType: "string";
				name: "name";
				type: "string";
			},
			{
				internalType: "string";
				name: "description";
				type: "string";
			},
			{
				internalType: "string";
				name: "pictureURL";
				type: "string";
			},
			{
				internalType: "uint256";
				name: "price";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "creationDate";
				type: "uint256";
			},
			{
				internalType: "address";
				name: "owner";
				type: "address";
			},
			{
				internalType: "bool";
				name: "isOnSale";
				type: "bool";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "address";
				name: "";
				type: "address";
			}
		];
		name: "users";
		outputs: [
			{
				internalType: "enum Profi.Roles";
				name: "role";
				type: "uint8";
			},
			{
				internalType: "string";
				name: "login";
				type: "string";
			}
		];
		stateMutability: "view";
		type: "function";
	}
];

export const abi = [
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "buyNft",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "_sellerAddress",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
		],
		name: "buyNftEvent",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "cancelSellNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
		],
		name: "cancelSellNftEvent",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "newPrice",
				type: "uint256",
			},
		],
		name: "changeNftPrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "newPrice",
				type: "uint256",
			},
		],
		name: "changePriceNftEvent",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				components: [
					{
						internalType: "uint8",
						name: "ercId",
						type: "uint8",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "string",
						name: "pictureURL",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "creationDate",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "bool",
						name: "isOnSale",
						type: "bool",
					},
				],
				indexed: false,
				internalType: "struct Profi.Nft",
				name: "nft",
				type: "tuple",
			},
		],
		name: "createNftEvent",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "_from",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "nftId",
				type: "uint256",
			},
		],
		name: "makeSellNftEvent",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "string",
				name: "pictureURL",
				type: "string",
			},
		],
		name: "mintNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				internalType: "string",
				name: "login",
				type: "string",
			},
		],
		name: "registration",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
		],
		name: "sellNft",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getNfts",
		outputs: [
			{
				components: [
					{
						internalType: "uint8",
						name: "ercId",
						type: "uint8",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "string",
						name: "pictureURL",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "creationDate",
						type: "uint256",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
					{
						internalType: "bool",
						name: "isOnSale",
						type: "bool",
					},
				],
				internalType: "struct Profi.Nft[]",
				name: "",
				type: "tuple[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "user",
				type: "address",
			},
		],
		name: "getUser",
		outputs: [
			{
				components: [
					{
						internalType: "enum Profi.Roles",
						name: "role",
						type: "uint8",
					},
					{
						internalType: "string",
						name: "login",
						type: "string",
					},
				],
				internalType: "struct Profi.User",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "NFT",
		outputs: [
			{
				internalType: "contract nft",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "nfts",
		outputs: [
			{
				internalType: "uint8",
				name: "ercId",
				type: "uint8",
			},
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "string",
				name: "pictureURL",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "creationDate",
				type: "uint256",
			},
			{
				internalType: "address",
				name: "owner",
				type: "address",
			},
			{
				internalType: "bool",
				name: "isOnSale",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "users",
		outputs: [
			{
				internalType: "enum Profi.Roles",
				name: "role",
				type: "uint8",
			},
			{
				internalType: "string",
				name: "login",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];
