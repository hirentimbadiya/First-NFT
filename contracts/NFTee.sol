// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// contract NFT is an ERC721 contract
contract NFTee is ERC721 {
    constructor() ERC721("Hiru's NFT", "HIRU") {
        _mint(msg.sender, 1);
    }
}
