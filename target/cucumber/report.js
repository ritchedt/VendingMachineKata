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
  "duration": 93513392,
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
  "duration": 2558227,
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
  "duration": 902850,
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
  "duration": 45882,
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
  "duration": 26564,
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
  "duration": 63993,
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
  "duration": 99612,
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
  "duration": 38939,
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
  "duration": 25959,
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
  "duration": 51919,
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
  "duration": 117120,
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
  "duration": 46486,
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
  "duration": 27771,
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
  "duration": 47995,
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
  "duration": 51919,
  "status": "passed"
});
formatter.match({
  "location": "VendingMachineStepDefinition.allCoinsReturnedInTheChangeSlot()"
});
formatter.result({
  "duration": 21734,
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
  "duration": 43769,
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
  "duration": 36223,
  "status": "passed"
});
formatter.match({
  "location": "VendingMachineStepDefinition.noCoinsInVendingMachine()"
});
formatter.result({
  "duration": 13885,
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
  "duration": 50108,
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
  "duration": 33204,
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
  "duration": 48297,
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
  "duration": 307892,
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
  "duration": 87236,
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
  "duration": 54636,
  "status": "passed"
});
});