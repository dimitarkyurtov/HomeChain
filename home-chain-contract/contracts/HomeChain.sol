// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0 <0.9.0;

contract HomeChain
{
    struct RealEstate 
    {
        address payable owner;
        address tenant;
        bool forRent;
        bool forSale;
        uint payday;
        uint256 squaring;
        uint256 floor;
        string construction;
        string city;
        string neighborhood;
        string description;
        string phone;
    }

    RealEstate[] private estates;
    mapping(uint => uint) private pricesSale;
    mapping(uint => uint) private pricesRent;
    mapping(uint => address payable) private buyers;
    mapping(uint => address payable) private tenants;

    address private government;
    address payable private governmentWallet;

    event Announcement(
        string ann,
        uint id,
        uint prices
    );

    event Approval(
        string prs,
        uint id,
        address buyer
    );

    event PropertyUpdate(
        string act,
        address buyer,
        uint id
    );

    constructor(address payable _governmentWallet)
    {
        government = msg.sender;
        governmentWallet = _governmentWallet;
    }

    modifier onlyGovernment()
    {
        require(tx.origin == government, "Not the government of the system!");
        _;
    }

    modifier onlyOwner(uint id)
    {
        require(tx.origin == getOwnerById(id) || tx.origin == government, "Not the owner of the property!");
        _;
    }

    modifier onlyTenant(uint id)
    {
        require(tx.origin == estates[id].tenant, "Not the tenant of the property!");
        _;
    }

    function addEstate(address payable _owner, 
                        uint _squaring,
                        uint _floor, 
                        string memory _construction, 
                        string memory _city, 
                        string memory _neighborhood, 
                        string memory _description, 
                        string memory _phone) 
                        public onlyGovernment
    {  
        estates.push(RealEstate(_owner, address(0), false, false, 0, _squaring, _floor, _construction, _city, _neighborhood, _description, _phone));
    }

    function setSquaring(uint id, uint _squaring) public onlyGovernment
    {
        estates[id].squaring = _squaring; 
    }

    function setFloor(uint id, uint _floor) public onlyGovernment
    {
        estates[id].floor = _floor; 
    }

    function setConstruction(uint id, string memory _construction) public onlyGovernment
    {
        estates[id].construction = _construction; 
    }

    function setNeighborhood(uint id, string memory _neighborhood) public onlyGovernment
    {
        estates[id].neighborhood = _neighborhood; 
    }

    function setDescription(uint id, string memory _description) public onlyGovernment
    {
        estates[id].description = _description; 
    }

    function setPhone(uint id, string memory _phone) public onlyOwner(id)
    {
        estates[id].phone = _phone; 
    }

    function getEstateById(uint id) public view returns(RealEstate memory)
    {
        return estates[id];
    }

    function changeOwner(address payable _newOwner, uint id) public onlyOwner(id)
    {  
        estates[id].owner = _newOwner;
    }
    
    function getOwnerById(uint id) public view returns (address payable)
    {
        return estates[id].owner;
    }
    
    function getEstates() public view returns (RealEstate[] memory)
    {
        return estates;
    }


    function announceEstateFor(uint id, uint price, string memory option, bool b) private onlyOwner(id)
    {
        if(compareStrings(option, "sale"))
        {
            pricesSale[id] = price;
            estates[id].forSale = b; 
        }
        else if(compareStrings(option, "rent") && estates[id].tenant == address(0))
        {   
            pricesRent[id] = price; 
            estates[id].forRent = b;
        }

        emit Announcement(option, id, price);
    }

    function announceEstateForSale(uint id, uint price) public 
    {
        announceEstateFor(id, price, "sale", true);
    }

    function announceEstateForRent(uint id, uint price) public 
    {
        announceEstateFor(id, price, "rent", true);
    }

    function announceEstateNotForSale(uint id) public 
    {
        announceEstateFor(id, 0, "sale", false);
        buyers[id] = payable(address(0));
    }

    function announceEstateNotForRent(uint id) public 
    {
        announceEstateFor(id, 0, "rent", false);
        tenants[id] = payable(address(0));
    }

    function compareStrings(string memory a, string memory b) public pure returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    } 

    function approve(uint id, address payable buyer, string memory option) private  onlyOwner(id)
    {
        string memory prs;
        if(compareStrings(option, "sale"))
        {
            buyers[id] = buyer;
            prs = "buyer";
        }
        else if(compareStrings(option, "rent"))
        {
            tenants[id] = buyer;
            prs = "tenant";
        }
        emit Approval(prs, id, buyer);
    }

    function approveBuyer(uint id, address payable buyer) public 
    {
        approve(id, buyer, "sale");
    }

    function approveTenant(uint id, address payable tenant) public 
    {
        approve(id, tenant, "rent");
    }

    function updateProperty(uint id, string memory option) private
    {
        address payable adr;
        string memory action;
        if(compareStrings(option, "sale"))
        {
            require(tx.origin == buyers[id], "Not the approved buyer of the property!");
            require(msg.value >= pricesSale[id], "Not enough ether supplied to transaction!");
            payTaxes(estates[id].owner);
            estates[id].owner = buyers[id];
            estates[id].forSale = false;
            adr = buyers[id];
            action = "bought";
        }
        else if(compareStrings(option, "rent"))
        {
            require(tx.origin == tenants[id], "Not the approved tenant of the property!");
            require(msg.value >= pricesRent[id], "Not enough ether supplied to transaction!");
            payTaxes(estates[id].owner);
            estates[id].tenant = tenants[id];
            estates[id].payday = block.timestamp;
            updateRentDate(id);
            estates[id].forRent = false;
            adr = tenants[id];
            action = "rented";
        }
        
        emit PropertyUpdate(action, adr, msg.value);
    }

    function purchaseProperty(uint id) public payable
    {
        updateProperty(id, "sale");
    }

    function rentProperty(uint id) public payable
    {
        updateProperty(id, "rent");
    }

    function leave(uint id) public onlyTenant(id)
    {
        estates[id].tenant = address(0);
    }

    function payRent(uint id) public payable onlyTenant(id)
    {
        require(msg.value >= pricesRent[id], "Not enough ether supplied to transaction!");
        payTaxes(estates[id].owner);
        updateRentDate(id);
    }
    
    function updateRentDate(uint id) private
    {
        estates[id].payday += 2592000;
    }

    function payTaxes(address payable reciever) private
    {
        if(reciever == government)
        {
            governmentWallet.transfer(msg.value);
        }
        else
        {
            governmentWallet.transfer(msg.value/10);
            reciever.transfer((msg.value/10)*9);
        }
    }

    function removeTenant(uint id) public onlyOwner(id)
    {
        require(block.timestamp > estates[id].payday, "Rent date is not due!");
        estates[id].tenant = address(0);
    }
}

