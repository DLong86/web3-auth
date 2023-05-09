import React from "react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import { formatEther } from "@ethersproject/units";

function App() {
	const { activateBrowserWallet, deactivate, account } = useEthers();
	const etherBalance = useEtherBalance(account);
	return (
		<div className="text-white bg-slate-800 h-screen">
			<header className="flex flex-col text-center justify-center">
				{account && `Account: ${account}`}
				<br />
				{etherBalance &&
					`Balance: ${Number(formatEther(etherBalance)).toFixed(4)} ETH`}
				<section className="my-10">
					{account ? (
						<p className="bg-black px-10 py-5 w-1/6 mx-auto rounded-md">
							<code
								onClick={deactivate}
								className="flex text-center justify-center cursor-pointer"
							>
								Logout
							</code>
						</p>
					) : (
						<div className="bg-black px-10 py-5 w-1/6 mx-auto rounded-md cursor-pointer">
							<code onClick={activateBrowserWallet}>Connect Wallet</code>
						</div>
					)}
				</section>
			</header>
		</div>
	);
}

export default App;
