
//i'll start here

document.addEventListener('DOMContentLoaded', function () {
  const generateWalletButton = document.getElementById('generateWallet');
  generateWalletButton.addEventListener('click', generateWallet);

  // Add copy to clipboard functionality
  const publicKeyElement = document.getElementById('publicKey');
  publicKeyElement.addEventListener('click', copyToClipboard);

  const privateKeyElement = document.getElementById('privateKey');
  privateKeyElement.addEventListener('click', copyToClipboard);
});

function generateWallet() {
  // Generating a new Ethereum wallet using Web3.js
  const web3 = new Web3();
  const wallet = web3.eth.accounts.create();

  // Display the public and private keys on the UI
  document.getElementById('publicKey').textContent = wallet.address;
  document.getElementById('privateKey').textContent = wallet.privateKey;
}

function copyToClipboard(event) {
  const textToCopy = event.target.textContent;


  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = textToCopy;

  document.body.appendChild(tempTextarea);


  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); 

  // Execute the copy command
  document.execCommand('copy'); //this probably not supported in modern day browsers :/


  document.body.removeChild(tempTextarea);


  alert('Copied to clipboard :) ' + textToCopy);
}
