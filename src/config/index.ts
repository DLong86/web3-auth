import { ChainId } from "@usedapp/core";

export const config = {
	readOnlyChainId: ChainId.Mainnet,
	ReadOnlyUrls: {
		[ChainId.Mainnet]: `https://mainnet.infura.io/v3/password123`,
	},
};
