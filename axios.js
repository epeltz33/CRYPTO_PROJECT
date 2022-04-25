const bitcoin = document.getElementById('bitcoin');
const ethereum = document.getElementById('ethereum');
const dogecoin = document.getElementById('dogecoin');



const getPrices = async() => {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd');

        console.log(response.data)
        let data = response.data;
        bitcoin.innerHTML = data.bitcoin.usd
        ethereum.innerHTML = data.ethereum.usd
        dogecoin.innerHTML = data.dogecoin.usd


    } catch (error) {
        console.log(error.response.data);
    }


};
getPrices();