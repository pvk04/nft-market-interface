interface INft {
	erc20id: MatchPrimitiveType<"uint256", bigint>;
	name: string;
	description: string;
	pictureURL: string;
	collection: string;
	price: MatchPrimitiveType<"uint256", bigint>;
	creationDate: MatchPrimitiveType<"uint256", bigint>;
	owner: string;
	isOnSale: boolean;
	isSoldFromOwner: boolean;
}
