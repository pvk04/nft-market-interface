interface INft {
	// arrayIndex: MatchPrimitiveType<"uint256", bigint>;
	ercId: MatchPrimitiveType<"uint256", bigint>;
	name: string;
	description: string;
	pictureURL: string;
	collection: string;
	price: MatchPrimitiveType<"uint256", bigint>;
	showPrice?: string;
	creationDate: MatchPrimitiveType<"uint256", bigint>;
	owner: string;
	isOnSale: boolean;
	isSoldFromOwner: boolean;
}
