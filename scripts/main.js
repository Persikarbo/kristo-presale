$(function () {
    const PRE_SALE_ABI = [{"inputs": [{"internalType": "uint8", "name": "decimals", "type": "uint8"}], "stateMutability": "nonpayable", "type": "constructor"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "spender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Approval", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"}, {"stateMutability": "payable", "type": "fallback"}, {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}], "name": "allowance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "account", "type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "tokenToSendAmount", "type": "uint256"}], "name": "buyAvailablePoolTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "checkSupplyLeft", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "decimals", "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "subtractedValue", "type": "uint256"}], "name": "decreaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "getAvailablePoolTokensPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getAvailablePoolTokensVolume", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getLockUpEnd", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getMultiplier", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getPreSaleEnd", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "getPriceAccuracy", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "tokenToSendAmount", "type": "uint256"}], "name": "getTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "addedValue", "type": "uint256"}], "name": "increaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address payable", "name": "newWorkingWallet", "type": "address"}], "name": "setNewWorkingWallet", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "totalSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "recipient", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transfer", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "sender", "type": "address"}, {"internalType": "address", "name": "recipient", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transferFrom", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "poolTokensSending", "type": "uint256"}], "name": "withdraw", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]
    const ERC20_ABI = [{"constant": true, "inputs": [{"name": "_owner", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "balance", "type": "uint256"}], "payable": false, "type": "function"}, {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}]
    const CONTRACT_ADDRESS = '0xF0a4E73Ed25D5829db2E665150Fdd0BF66B40b00';
    const USDT_ADDRESS = '0x6B175474E89094C44Da98b954EedeAC495271d0F';
    const k = 10**18; //coefficient to multiply the amount before sending

    // Initialize constants
    const $infoText = document.getElementById('info');
    const $usdtWrapper = document.getElementById('usdt-amount-wrapper');
    const $krstWrapper = document.getElementById('krst-amount-wrapper');
    const $arrowIcon = document.getElementById('arrow-icon');
    const $amountInput = document.getElementById('usdt-amount-input'); //Input for amount
    const $approveButton = document.getElementById('approve-btn');
    const $investButton = document.getElementById('invest-btn');
    const $maxButton = document.getElementById('max-btn');
    const $balanceWrapper = document.getElementById('balance-wrapper');
    const $balanceInfo = document.getElementById('balance-info');
    let $balance = document.getElementById('balance-text');
    const $krstAmount = document.getElementById('krst-amount');
    const $approveButtonText = document.getElementById("approve-btn-text");
    const $investButtonText = document.getElementById("invest-btn-text");
    const $approveLoader = document.getElementById("approve-loader");
    const $investLoader = document.getElementById("invest-loader");
    const $connectWalletText = document.getElementById("connect-wallet-text");
    const $connectWalletButton = document.getElementById("connect-wallet-btn");
    const $connectWalletButton2 = document.getElementById("connect-wallet-btn-2");
    const $downloadLink = document.getElementsByClassName("download-link")[0];

    //Initialize colors variables
    $error = "#E27B7B";
    $info = "#6EBBE7";

    // Initialize variables
    let web3;
    let preSaleContract; //our contract
    let usdtContract;
    let userAccount;
    let balance;
    let isApproved = false;
    let approvedAmount;
    let approveError;
    let investError;
    let multiplier = 0.00000000001/120;
    let isSuccessInvest = false;

    //Connect the wallet after the page loads
    window.addEventListener('load',  async () => await initApp());

    window.addEventListener("focus", async function (event) {
        if ($connectWalletButton.textContent!=='Подключить кошелек')
        {
            await setUserAccount();
            $connectWalletText.innerText = renderShortAddress(userAccount);
        }
    }, false);

    //Connects to the wallet with the buttons
    $connectWalletButton.onclick = async () => await initApp();
    $connectWalletButton2.onclick = async () => await initApp();

    //Connect to wallet and initialize app variables
    const initApp = async () => {
        if(checkMetaMaskInstallation()) {
            try {
                if ($connectWalletButton.textContent==='Подключить кошелек')
                    $connectWalletButton2.style.display = "block";
                $infoText.style.display = "none";
                $usdtWrapper.style.display = "flex";
                $krstWrapper.style.display = "flex";
                $arrowIcon.style.display = "block";
                $amountInput.disabled = true;
                //Connect to wallet
                web3 = new Web3(window.web3.currentProvider);
                //Set variables
                setContracts();
                await setUserAccount();
                await setBalance();
                $amountInput.disabled = false;
                $balanceWrapper.style.display = "flex";
                $balanceInfo.style.display = "flex";
                $maxButton.style.display = "block";
                //Change the button text to a short wallet address
                $connectWalletText.innerText = renderShortAddress(userAccount);
                $connectWalletButton.style.pointerEvents = "none";
                //Hide other connection button
                $connectWalletButton2.style.display = "none";
                //Show approve and invest buttons
                $approveButton.style.display = "block";
                $investButton.style.display = "block";
                $investButton.style.pointerEvents = "none";
            } catch (e) {
                console.log(e);
            }
        } else {
            $infoText.style.display = "block";
            $downloadLink.style.display = "block";
        }
    }

    //Checks if a MetaMask is installed
    const checkMetaMaskInstallation = () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log('MetaMask is installed!');
            return true;
        } else {
            console.log('Please install MetaMask')
            return false;
        }
    }

    const setContracts = () => {
        preSaleContract = new web3.eth.Contract(PRE_SALE_ABI, CONTRACT_ADDRESS);
        usdtContract = new web3.eth.Contract(ERC20_ABI, USDT_ADDRESS);
    }

    const setUserAccount = async () => {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        userAccount = accounts[0];
    }

    const setBalance = async () => {
        balance = 0;
        try {
            balance = await getUSDTBalance();
        }
        catch (e) {
            console.log(e);
        }
        $balance.innerText = `Баланс: ${balance} DAI`;
    }

    //Approve amount before investing
    $approveButton.onclick = async () => {
        let amount = $amountInput.value ? Number($amountInput.value) : 0;
        if ($krstAmount.innerText === "-")
            setMessageToButton($approveButton, $approveButtonText, "Ошибка. Пожалуйста, перезагрузите страницу", $error);
        else {
            if (amount === 0) {
                approveError = true;
                setMessageToButton($approveButton, $approveButtonText, "Введите сумму DAI", $error);
            } else {
                let amountToSend = amount * k;
                $amountInput.disabled = true;
                showLoader($approveButton, $approveButtonText, $approveLoader);
                let result = await approveAmount(amountToSend);
                hideLoader($approveButton, $approveButtonText, $approveLoader);
                $amountInput.disabled = false;
                if (result.status !== undefined && result.status) {
                    console.log('message: Approve success!');
                    approveError = false;
                    isApproved = true;
                    approvedAmount = amount;
                    //Toggle invest button
                    $investButton.style.pointerEvents = "auto";
                    $investButton.style.removeProperty("background");
                    $investButtonText.innerText = "Инвестировать";
                    setMessageToButton($approveButton, $approveButtonText, "Транзакция подтверждена");
                } else {
                    approveError = true;
                    setMessageToButton($approveButton, $approveButtonText, "Ошибка. Попробуйте еще раз", $error);
                }
            }
        }
    }

    //Send amount to contract (investing)
    $investButton.onclick = async () => {
        let amount = $amountInput.value ? Number($amountInput.value) : 0;
        if (amount > approvedAmount) {
            investError = false;
            isApproved = false;
            setMessageToButton($investButton, $investButtonText, "Подтвердите новую сумму");
            returnOldButton($approveButton, $approveButtonText, 'Подтвердить транзакцию');
        } else if (amount === 0) {
            investError = true;
            setMessageToButton($investButton, $investButtonText, "Введите сумму DAI", $error);
        } else {
            let amountToSend = amount * k;
            $amountInput.disabled = true;
            showLoader($investButton, $investButtonText, $investLoader);
            let getTokensResult = await getTokens(amountToSend);
            hideLoader($investButton, $investButtonText, $investLoader);
            $amountInput.disabled = false;
            if(getTokensResult === `Success getTokens`) {
                console.log('message: Invest Success');
                investError = false;
                isSuccessInvest = true;
                setMessageToButton($investButton, $investButtonText, "Средства инвестированы");
                await setBalance();
                await watchAsset();
            } else {
                investError = true;
                setMessageToButton($investButton, $investButtonText, "Ошибка. Попробуйте еще раз", $error);
            }
        }
    }

    $amountInput.oninput = async () => {
        setKRSTAmount();
        if(investError) {
            returnOldButton($investButton, $investButtonText, 'Инвестировать');
        }
        if(approveError) {
            returnOldButton($approveButton, $approveButtonText, 'Подтвердить транзакцию');
        }
        if(isSuccessInvest) {
            returnOldButton($approveButton, $approveButtonText, 'Подтвердить транзакцию');
            returnOldButton($investButton, $investButtonText, 'Инвестировать');
            $investButton.style.pointerEvents = "none";
            isSuccessInvest = false;
            isApproved = false;
        }
    }

    $amountInput.onkeyup = (event) =>  {
        if (event.keyCode === 13) {
            event.preventDefault();
            if(isApproved)
                $investButton.click();
            else
                $approveButton.click();
        }
    }

    /*
    Checks for the KRST token price, if there was an error when it was received,
    it outputs it and lock input, otherwise it multiplies the amount by the price
     */

    const setKRSTAmount = () => {
        $krstAmount.innerText = Math.round((Number($amountInput.value / multiplier / 10 ** 9)) * 100) / 100;
    }

    $maxButton.onclick = () => {
        $amountInput.value = balance;
        setKRSTAmount();
    }

    const showLoader = (btn, btnText, loader) => {
        btnText.style.display = "none";
        btn.style.pointerEvents = "none";
        loader.style.display = "block";
    }

    const hideLoader = (btn, btnText, loader) => {
        btn.style.background = $info;
        loader.style.display = "none";
        btnText.style.display = "block";
    }

    const setMessageToButton = (btnObj, btnTextObj, message, backgroundColor = $info) => {
        btnObj.style.background = backgroundColor;
        btnObj.style.pointerEvents = "none";
        btnTextObj.innerText = message;
    }

    //Set old view to buttons with info or errors
    const returnOldButton = (buttonObj, buttonTextObj, buttonText) => {
        buttonObj.style.pointerEvents = "auto";
        buttonObj.style.removeProperty("background");
        buttonTextObj.innerText = buttonText;
    }

    const renderShortAddress = (address , chars = 4) => {
        if (!address) {
            return address;
        }
        return `${address.substr(0, chars + 2)}...${address.substr(-chars)}`;
    }

    /*
    Smart contract feature wrappers
    */

    //Approve function
    const approveAmount = async (amount) => {
        try {
            return await usdtContract.methods.approve(CONTRACT_ADDRESS, amount.toString()).send({ from: userAccount });
        }
        catch (e) {
            console.log(e);
            return e;
        }
    };

    //Investment function
    const getTokens = async (amount) => {
        try {
            let address = await web3.utils.toChecksumAddress(userAccount);
            await preSaleContract.methods.getTokens(amount.toString()).send({from: address})
            return `Success getTokens`;
        }
        catch (e) {
            return e;
        }
    };

    //Add asset to MetaMask list
    const watchAsset = async () => {
        try {
            let success = await ethereum
                .request({
                    method: 'wallet_watchAsset',
                    params: {
                        type: 'ERC20',
                        options: {
                            address: CONTRACT_ADDRESS,
                            symbol: 'KRSTzr',
                            decimals: 6,
                            image: '',
                        },
                    },
                })
            if (success) {
                return 'FOO successfully added to wallet!';
            } else {
                return 'Something went wrong.';
            }
        }
        catch (e) {
            return e;
        }

    };

    const getUSDTBalance = async () => {
        let balance = await usdtContract.methods.balanceOf(userAccount).call();
        return Math.round((balance / k) * k) / k;
    };
})
