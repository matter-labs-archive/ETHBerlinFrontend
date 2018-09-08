pragma solidity ^0.4.23;

contract Shop {
    mapping(uint256 => bool) invoices;
    
    event InvoicePayed(uint256 invoice);

    function pay(uint256 _invoice) public payable {
        require (!invoices[_invoice] && msg.value > 0);
        invoices[_invoice] = true;
        emit InvoicePayed(_invoice);
    }
}