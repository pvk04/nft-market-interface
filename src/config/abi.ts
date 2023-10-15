export type abiType = [
	{
		inputs: [
			{
				internalType: "uint256[]";
				name: "ids";
				type: "uint256[]";
			},
			{
				internalType: "string";
				name: "collectionName";
				type: "string";
			}
		];
		name: "addNftsToCollection";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "bytes";
				name: "refCode";
				type: "bytes";
			}
		];
		name: "applyRefCode";
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
			}
		];
		name: "buyNft";
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
			}
		];
		name: "cancelSellNft";
		outputs: [];
		stateMutability: "nonpayable";
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
		inputs: [
			{
				internalType: "string";
				name: "collection";
				type: "string";
			},
			{
				internalType: "uint256";
				name: "timeStart";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "timeEnd";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "startPrice";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "maxPrice";
				type: "uint256";
			}
		];
		name: "createAuction";
		outputs: [];
		stateMutability: "nonpayable";
		type: "function";
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
			}
		];
		name: "createCollection";
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
				components: [
					{
						internalType: "uint256";
						name: "erc20id";
						type: "uint256";
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
						internalType: "string";
						name: "collection";
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
					},
					{
						internalType: "bool";
						name: "isSoldFromOwner";
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
		inputs: [
			{
				internalType: "uint256";
				name: "id";
				type: "uint256";
			}
		];
		name: "endAuction";
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
				internalType: "address";
				name: "user";
				type: "address";
			}
		];
		name: "giftNft";
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
				name: "increaseValue";
				type: "uint256";
			}
		];
		name: "increaseBet";
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
				name: "bet";
				type: "uint256";
			}
		];
		name: "makeBet";
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
		inputs: [
			{
				internalType: "uint256";
				name: "";
				type: "uint256";
			}
		];
		name: "auctions";
		outputs: [
			{
				internalType: "string";
				name: "collection";
				type: "string";
			},
			{
				internalType: "uint256";
				name: "startPrice";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "maxPrice";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "timeCreation";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "timeStart";
				type: "uint256";
			},
			{
				internalType: "uint256";
				name: "timeEnd";
				type: "uint256";
			},
			{
				internalType: "bool";
				name: "status";
				type: "bool";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [];
		name: "getAuctions";
		outputs: [
			{
				components: [
					{
						internalType: "string";
						name: "collection";
						type: "string";
					},
					{
						internalType: "uint256";
						name: "startPrice";
						type: "uint256";
					},
					{
						internalType: "uint256";
						name: "maxPrice";
						type: "uint256";
					},
					{
						internalType: "uint256";
						name: "timeCreation";
						type: "uint256";
					},
					{
						internalType: "uint256";
						name: "timeStart";
						type: "uint256";
					},
					{
						internalType: "uint256";
						name: "timeEnd";
						type: "uint256";
					},
					{
						internalType: "bool";
						name: "status";
						type: "bool";
					},
					{
						components: [
							{
								internalType: "address";
								name: "owner";
								type: "address";
							},
							{
								internalType: "uint256";
								name: "value";
								type: "uint256";
							}
						];
						internalType: "struct Profi.Bet[]";
						name: "bets";
						type: "tuple[]";
					}
				];
				internalType: "struct Profi.Auction[]";
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
		name: "getBalance";
		outputs: [
			{
				internalType: "uint256";
				name: "";
				type: "uint256";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "string";
				name: "name";
				type: "string";
			}
		];
		name: "getCollection";
		outputs: [
			{
				components: [
					{
						internalType: "string";
						name: "description";
						type: "string";
					},
					{
						internalType: "bool";
						name: "isBuyed";
						type: "bool";
					},
					{
						internalType: "bool";
						name: "isOnAuction";
						type: "bool";
					},
					{
						internalType: "address";
						name: "owner";
						type: "address";
					}
				];
				internalType: "struct Profi.NftCollection";
				name: "";
				type: "tuple";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [];
		name: "getNfts";
		outputs: [
			{
				components: [
					{
						internalType: "uint256";
						name: "erc20id";
						type: "uint256";
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
						internalType: "string";
						name: "collection";
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
					},
					{
						internalType: "bool";
						name: "isSoldFromOwner";
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
					},
					{
						internalType: "bytes";
						name: "refCode";
						type: "bytes";
					},
					{
						internalType: "uint256";
						name: "discount";
						type: "uint256";
					},
					{
						internalType: "bool";
						name: "isRefCodeUsed";
						type: "bool";
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
				internalType: "string";
				name: "";
				type: "string";
			}
		];
		name: "nftCollections";
		outputs: [
			{
				internalType: "string";
				name: "description";
				type: "string";
			},
			{
				internalType: "bool";
				name: "isBuyed";
				type: "bool";
			},
			{
				internalType: "bool";
				name: "isOnAuction";
				type: "bool";
			},
			{
				internalType: "address";
				name: "owner";
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
				internalType: "uint256";
				name: "erc20id";
				type: "uint256";
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
				internalType: "string";
				name: "collection";
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
			},
			{
				internalType: "bool";
				name: "isSoldFromOwner";
				type: "bool";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [
			{
				internalType: "bytes";
				name: "";
				type: "bytes";
			}
		];
		name: "refCodes";
		outputs: [
			{
				internalType: "address";
				name: "";
				type: "address";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [];
		name: "TOKEN";
		outputs: [
			{
				internalType: "contract token";
				name: "";
				type: "address";
			}
		];
		stateMutability: "view";
		type: "function";
	},
	{
		inputs: [];
		name: "totalSupply";
		outputs: [
			{
				internalType: "uint256";
				name: "";
				type: "uint256";
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
			},
			{
				internalType: "bytes";
				name: "refCode";
				type: "bytes";
			},
			{
				internalType: "uint256";
				name: "discount";
				type: "uint256";
			},
			{
				internalType: "bool";
				name: "isRefCodeUsed";
				type: "bool";
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
				internalType: "uint256[]",
				name: "ids",
				type: "uint256[]",
			},
			{
				internalType: "string",
				name: "collectionName",
				type: "string",
			},
		],
		name: "addNftsToCollection",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "refCode",
				type: "bytes",
			},
		],
		name: "applyRefCode",
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
		],
		name: "buyNft",
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
		],
		name: "cancelSellNft",
		outputs: [],
		stateMutability: "nonpayable",
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
		inputs: [
			{
				internalType: "string",
				name: "collection",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "timeStart",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "timeEnd",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "startPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "maxPrice",
				type: "uint256",
			},
		],
		name: "createAuction",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
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
		],
		name: "createCollection",
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
				components: [
					{
						internalType: "uint256",
						name: "erc20id",
						type: "uint256",
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
						internalType: "string",
						name: "collection",
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
					{
						internalType: "bool",
						name: "isSoldFromOwner",
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
		inputs: [
			{
				internalType: "uint256",
				name: "id",
				type: "uint256",
			},
		],
		name: "endAuction",
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
				internalType: "address",
				name: "user",
				type: "address",
			},
		],
		name: "giftNft",
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
				name: "increaseValue",
				type: "uint256",
			},
		],
		name: "increaseBet",
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
				name: "bet",
				type: "uint256",
			},
		],
		name: "makeBet",
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
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "auctions",
		outputs: [
			{
				internalType: "string",
				name: "collection",
				type: "string",
			},
			{
				internalType: "uint256",
				name: "startPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "maxPrice",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "timeCreation",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "timeStart",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "timeEnd",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "status",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getAuctions",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "collection",
						type: "string",
					},
					{
						internalType: "uint256",
						name: "startPrice",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "maxPrice",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "timeCreation",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "timeStart",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "timeEnd",
						type: "uint256",
					},
					{
						internalType: "bool",
						name: "status",
						type: "bool",
					},
					{
						components: [
							{
								internalType: "address",
								name: "owner",
								type: "address",
							},
							{
								internalType: "uint256",
								name: "value",
								type: "uint256",
							},
						],
						internalType: "struct Profi.Bet[]",
						name: "bets",
						type: "tuple[]",
					},
				],
				internalType: "struct Profi.Auction[]",
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
		name: "getBalance",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "string",
				name: "name",
				type: "string",
			},
		],
		name: "getCollection",
		outputs: [
			{
				components: [
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "bool",
						name: "isBuyed",
						type: "bool",
					},
					{
						internalType: "bool",
						name: "isOnAuction",
						type: "bool",
					},
					{
						internalType: "address",
						name: "owner",
						type: "address",
					},
				],
				internalType: "struct Profi.NftCollection",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "getNfts",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "erc20id",
						type: "uint256",
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
						internalType: "string",
						name: "collection",
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
					{
						internalType: "bool",
						name: "isSoldFromOwner",
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
					{
						internalType: "bytes",
						name: "refCode",
						type: "bytes",
					},
					{
						internalType: "uint256",
						name: "discount",
						type: "uint256",
					},
					{
						internalType: "bool",
						name: "isRefCodeUsed",
						type: "bool",
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
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		name: "nftCollections",
		outputs: [
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				internalType: "bool",
				name: "isBuyed",
				type: "bool",
			},
			{
				internalType: "bool",
				name: "isOnAuction",
				type: "bool",
			},
			{
				internalType: "address",
				name: "owner",
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
				internalType: "uint256",
				name: "erc20id",
				type: "uint256",
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
				internalType: "string",
				name: "collection",
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
			{
				internalType: "bool",
				name: "isSoldFromOwner",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "bytes",
				name: "",
				type: "bytes",
			},
		],
		name: "refCodes",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "TOKEN",
		outputs: [
			{
				internalType: "contract token",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
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
			{
				internalType: "bytes",
				name: "refCode",
				type: "bytes",
			},
			{
				internalType: "uint256",
				name: "discount",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "isRefCodeUsed",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
];
