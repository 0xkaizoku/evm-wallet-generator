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
  // Generate a new Ethereum wallet using Web3.js
  const web3 = new Web3();
  const wallet = web3.eth.accounts.create();

  // Display the public and private keys on the UI
  document.getElementById('publicKey').textContent = wallet.address;
  document.getElementById('privateKey').textContent = wallet.privateKey;
}

function copyToClipboard(event) {
  const textToCopy = event.target.textContent;

  // Create a temporary textarea element and set its value to the text to copy
  const tempTextarea = document.createElement('textarea');
  tempTextarea.value = textToCopy;

  // Append the textarea to the document to enable the copy command
  document.body.appendChild(tempTextarea);

  // Select the text in the textarea
  tempTextarea.select();
  tempTextarea.setSelectionRange(0, 99999); // For mobile devices

  // Execute the copy command
  document.execCommand('copy');

  // Remove the temporary textarea
  document.body.removeChild(tempTextarea);

  // Show a copied message (optional)
  alert('Copied to clipboard: ' + textToCopy);
}
