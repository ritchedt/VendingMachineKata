$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/AcceptCoins.feature");
formatter.feature({
  "id": "accept-coins",
  "description": "As a vendor\r\nI want a vending machine that accepts coins\r\nSo that I can collect money from the customer",
  "name": "Accept Coins",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Drew Ritcher",
      "line": 1
    }
  ]
});
formatter.scenarioOutline({
  "id": "accept-coins;accepting-valid-coins",
  "description": "",
  "name": "Accepting valid coins",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert a \u003ccoin\u003e into the coin slot",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "the vending machine display shows \u003ccurrentAmount\u003e",
  "keyword": "Then ",
  "line": 14
});
formatter.examples({
  "id": "accept-coins;accepting-valid-coins;accepted-coins",
  "description": "",
  "name": "Accepted coins",
  "keyword": "Examples",
  "line": 16,
  "rows": [
    {
      "id": "accept-coins;accepting-valid-coins;accepted-coins;1",
      "cells": [
        "coin",
        "currentAmount"
      ],
      "line": 17
    },
    {
      "id": "accept-coins;accepting-valid-coins;accepted-coins;2",
      "cells": [
        "quarter",
        "$0.25"
      ],
      "line": 18
    },
    {
      "id": "accept-coins;accepting-valid-coins;accepted-coins;3",
      "cells": [
        "dime",
        "$0.10"
      ],
      "line": 19
    },
    {
      "id": "accept-coins;accepting-valid-coins;accepted-coins;4",
      "cells": [
        "nickel",
        "$0.05"
      ],
      "line": 20
    }
  ]
});
formatter.scenario({
  "id": "accept-coins;accepting-valid-coins;accepted-coins;2",
  "description": "",
  "name": "Accepting valid coins",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert a quarter into the coin slot",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the vending machine display shows $0.25",
  "keyword": "Then ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 88790255,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 2649388,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "quarter",
      "offset": 11
    }
  ],
  "location": "VendingMachineStepDefinition.insertCoinInSlot(String)"
});
formatter.result({
  "duration": 875684,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$0.25",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 43769,
  "status": "passed"
});
formatter.scenario({
  "id": "accept-coins;accepting-valid-coins;accepted-coins;3",
  "description": "",
  "name": "Accepting valid coins",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert a dime into the coin slot",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the vending machine display shows $0.10",
  "keyword": "Then ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 26563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 62182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dime",
      "offset": 11
    }
  ],
  "location": "VendingMachineStepDefinition.insertCoinInSlot(String)"
});
formatter.result({
  "duration": 109573,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$0.10",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 39845,
  "status": "passed"
});
formatter.scenario({
  "id": "accept-coins;accepting-valid-coins;accepted-coins;4",
  "description": "",
  "name": "Accepting valid coins",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert a nickel into the coin slot",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "the vending machine display shows $0.05",
  "keyword": "Then ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 25658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 50712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "nickel",
      "offset": 11
    }
  ],
  "location": "VendingMachineStepDefinition.insertCoinInSlot(String)"
});
formatter.result({
  "duration": 123459,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$0.05",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 44674,
  "status": "passed"
});
formatter.scenario({
  "id": "accept-coins;not-accepting-invalid-coins",
  "description": "",
  "name": "Not accepting invalid coins",
  "keyword": "Scenario",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 25
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 26
});
formatter.step({
  "name": "I insert a penny into the coin slot",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "all coins are returned in the change slot",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 29
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 27770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 53428,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "penny",
      "offset": 11
    }
  ],
  "location": "VendingMachineStepDefinition.insertCoinInSlot(String)"
});
formatter.result({
  "duration": 61881,
  "status": "passed"
});
formatter.match({
  "location": "VendingMachineStepDefinition.allCoinsReturnedInTheChangeSlot()"
});
formatter.result({
  "duration": 22941,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 44071,
  "status": "passed"
});
formatter.uri("features/ExactChange.feature");
formatter.feature({
  "id": "exact-change",
  "description": "As a customer\r\nI want to be told when exact change is required\r\nSo that I can determine if I can buy something with the money I have before inserting it",
  "name": "Exact Change",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Drew Ritcher",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "exact-change;using-a-vending-machine-that-can-only-accept-exact-change",
  "description": "",
  "name": "Using a vending machine that can only accept exact change",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine that only accepts exact change",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "there are no coins inserted into the vending machine",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "the vending machine display shows EXACT CHANGE ONLY",
  "keyword": "Then ",
  "line": 13
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachineThatOnlyAcceptsExactChange()"
});
formatter.result({
  "duration": 35015,
  "status": "passed"
});
formatter.match({
  "location": "VendingMachineStepDefinition.noCoinsInVendingMachine()"
});
formatter.result({
  "duration": 15395,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EXACT CHANGE ONLY",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 56749,
  "status": "passed"
});
formatter.uri("features/MakeChange.feature");
formatter.feature({
  "id": "make-change",
  "description": "As a vendor\r\nI want customers to receive correct change\r\nSo that they will use the vending machine again",
  "name": "Make Change",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Drew Ritcher",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "make-change;selecting-a-product",
  "description": "",
  "name": "Selecting a product",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert $1.00 into the machine",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I select the candy option",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "$0.35 is returned in the change slot",
  "keyword": "Then ",
  "line": 15
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 31091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 50712,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.00",
      "offset": 10
    }
  ],
  "location": "VendingMachineStepDefinition.insertMoneyIntoTheMachine(String)"
});
formatter.result({
  "duration": 242390,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "candy",
      "offset": 13
    }
  ],
  "location": "VendingMachineStepDefinition.selectingAProductOption(String)"
});
formatter.result({
  "duration": 87840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.35",
      "offset": 1
    }
  ],
  "location": "VendingMachineStepDefinition.allRemainingAmountIsReturnedInChangeSlot(String)"
});
formatter.result({
  "duration": 54334,
  "status": "passed"
});
formatter.uri("features/ReturnCoins.feature");
formatter.feature({
  "id": "return-coins",
  "description": "As a customer\r\nI want to have my money returned\r\nSo that I can change my mind about buying stuff from the vending machine",
  "name": "Return Coins",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Drew Ritcher",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "return-coins;return-all-coins-that-are-inserted-into-the-vending-machine",
  "description": "",
  "name": "Return all coins that are inserted into the vending machine",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert $1.00 into the machine",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I choose the return coins option",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "all coins are returned in the change slot",
  "keyword": "Then ",
  "line": 15
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 16
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 45278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 51316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.00",
      "offset": 10
    }
  ],
  "location": "VendingMachineStepDefinition.insertMoneyIntoTheMachine(String)"
});
formatter.result({
  "duration": 184434,
  "status": "passed"
});
formatter.match({
  "location": "VendingMachineStepDefinition.returnCoinsOption()"
});
formatter.result({
  "duration": 14791,
  "status": "passed"
});
formatter.match({
  "location": "VendingMachineStepDefinition.allCoinsReturnedInTheChangeSlot()"
});
formatter.result({
  "duration": 12678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 46184,
  "status": "passed"
});
formatter.uri("features/SelectProduct.feature");
formatter.feature({
  "id": "select-products",
  "description": "As a vendor\r\nI want customers to select products\r\nSo that I can give them an incentive to put money in the machine",
  "name": "Select Products",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Drew Ritcher",
      "line": 1
    }
  ]
});
formatter.scenarioOutline({
  "id": "select-products;selecting-a-product",
  "description": "",
  "name": "Selecting a product",
  "keyword": "Scenario Outline",
  "line": 10,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert $\u003cmoneyInserted\u003e into the machine",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "I select the \u003cproduct\u003e option",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "the vending machine display shows THANK YOU",
  "keyword": "And ",
  "line": 15
});
formatter.examples({
  "id": "select-products;selecting-a-product;purchasing-a-product",
  "description": "",
  "name": "Purchasing a product",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "select-products;selecting-a-product;purchasing-a-product;1",
      "cells": [
        "moneyInserted",
        "product"
      ],
      "line": 18
    },
    {
      "id": "select-products;selecting-a-product;purchasing-a-product;2",
      "cells": [
        "1.00",
        "cola"
      ],
      "line": 19
    },
    {
      "id": "select-products;selecting-a-product;purchasing-a-product;3",
      "cells": [
        "0.50",
        "chips"
      ],
      "line": 20
    },
    {
      "id": "select-products;selecting-a-product;purchasing-a-product;4",
      "cells": [
        "0.65",
        "candy"
      ],
      "line": 21
    }
  ]
});
formatter.scenario({
  "id": "select-products;selecting-a-product;purchasing-a-product;2",
  "description": "",
  "name": "Selecting a product",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert $1.00 into the machine",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I select the cola option",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "the vending machine display shows THANK YOU",
  "keyword": "And ",
  "line": 15
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 32600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 53730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1.00",
      "offset": 10
    }
  ],
  "location": "VendingMachineStepDefinition.insertMoneyIntoTheMachine(String)"
});
formatter.result({
  "duration": 198017,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cola",
      "offset": 13
    }
  ],
  "location": "VendingMachineStepDefinition.selectingAProductOption(String)"
});
formatter.result({
  "duration": 57956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 39845,
  "status": "passed"
});
formatter.scenario({
  "id": "select-products;selecting-a-product;purchasing-a-product;3",
  "description": "",
  "name": "Selecting a product",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert $0.50 into the machine",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I select the chips option",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "the vending machine display shows THANK YOU",
  "keyword": "And ",
  "line": 15
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 31997,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 56447,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.50",
      "offset": 10
    }
  ],
  "location": "VendingMachineStepDefinition.insertMoneyIntoTheMachine(String)"
});
formatter.result({
  "duration": 143683,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chips",
      "offset": 13
    }
  ],
  "location": "VendingMachineStepDefinition.selectingAProductOption(String)"
});
formatter.result({
  "duration": 44977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 472404,
  "status": "passed"
});
formatter.scenario({
  "id": "select-products;selecting-a-product;purchasing-a-product;4",
  "description": "",
  "name": "Selecting a product",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I insert $0.65 into the machine",
  "keyword": "When ",
  "line": 13,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "I select the candy option",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "the vending machine display shows THANK YOU",
  "keyword": "And ",
  "line": 15
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 29280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 67918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.65",
      "offset": 10
    }
  ],
  "location": "VendingMachineStepDefinition.insertMoneyIntoTheMachine(String)"
});
formatter.result({
  "duration": 218242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "candy",
      "offset": 13
    }
  ],
  "location": "VendingMachineStepDefinition.selectingAProductOption(String)"
});
formatter.result({
  "duration": 42260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "THANK YOU",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 34714,
  "status": "passed"
});
formatter.scenario({
  "id": "select-products;seleting-a-product-with-an-insufficent-amount-of-money",
  "description": "",
  "name": "Seleting a product with an insufficent amount of money",
  "keyword": "Scenario",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine",
  "keyword": "Given ",
  "line": 26
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 27
});
formatter.step({
  "name": "I insert $0.80 into the machine",
  "keyword": "When ",
  "line": 28
});
formatter.step({
  "name": "I select the cola option",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "the vending machine display shows PRICE $1.00",
  "keyword": "Then ",
  "line": 30
});
formatter.match({
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachine()"
});
formatter.result({
  "duration": 28676,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 48900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0.80",
      "offset": 10
    }
  ],
  "location": "VendingMachineStepDefinition.insertMoneyIntoTheMachine(String)"
});
formatter.result({
  "duration": 233636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cola",
      "offset": 13
    }
  ],
  "location": "VendingMachineStepDefinition.selectingAProductOption(String)"
});
formatter.result({
  "duration": 87840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PRICE $1.00",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 38034,
  "status": "passed"
});
formatter.uri("features/SoldOut.feature");
formatter.feature({
  "id": "sold-out",
  "description": "As a customer\r\nI want to be told when the item I have selected is not available\r\nSo that I can select another item",
  "name": "Sold Out",
  "keyword": "Feature",
  "line": 4,
  "comments": [
    {
      "value": "#Author: Drew Ritcher",
      "line": 1
    }
  ]
});
formatter.scenario({
  "id": "sold-out;selecting-a-product",
  "description": "",
  "name": "Selecting a product",
  "keyword": "Scenario",
  "line": 10,
  "type": "scenario"
});
formatter.step({
  "name": "I want to use a vending machine that is sold out of candy",
  "keyword": "Given ",
  "line": 11
});
formatter.step({
  "name": "the vending machine display shows INSERT COIN",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "I select the candy option",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "the vending machine display shows SOLD OUT",
  "keyword": "Then ",
  "line": 14
});
formatter.match({
  "arguments": [
    {
      "val": "candy",
      "offset": 52
    }
  ],
  "location": "VendingMachineStepDefinition.iWantToUseAVendingMachineThatIsSoldOutOfAProduct(String)"
});
formatter.result({
  "duration": 84218,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "INSERT COIN",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 39241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "candy",
      "offset": 13
    }
  ],
  "location": "VendingMachineStepDefinition.selectingAProductOption(String)"
});
formatter.result({
  "duration": 39241,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SOLD OUT",
      "offset": 34
    }
  ],
  "location": "VendingMachineStepDefinition.vendingMachineDisplay(String)"
});
formatter.result({
  "duration": 35619,
  "status": "passed"
});
});