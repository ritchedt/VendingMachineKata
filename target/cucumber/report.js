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
  "duration": 92369963,
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
  "duration": 2542530,
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
  "duration": 892285,
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
  "duration": 38940,
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
  "duration": 23846,
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
  "duration": 56749,
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
  "duration": 109574,
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
  "duration": 37431,
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
  "duration": 26866,
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
  "duration": 111384,
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
  "duration": 38034,
  "status": "passed"
});
});