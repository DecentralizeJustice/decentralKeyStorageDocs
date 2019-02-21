# Purchase
## Risk
### General Privacy
The less information that is reveled about a user during the purchase phase, the more secure
their experience will be with cryptocurrency and MC specifically. Any information leaked during the purchase phase can lead to attacks later in the users use of MC. This attacks can also come from MC team themselves, if we suffer from a hack or state level actor takeover. These types of attacks are only useful if the takeover or hack isn't publicly known. Keeping all communication public limits the severity of these type of attacks.
### Targeted Key Leak
Since we engrave some of the keys for the user ,if we were to record identifying information such as email or ip address this could lead to a targeted attack where an hacker targets a MC user.
## Examples
### Email Phishing
Email phishing is when an attacker acquires the email of users of a crypto service. The attacker then
sends emails to the users, often posing as  support staff. The attacker might want to trick the end user into installing malicious software or convince the user to send the attacker their private keys.

[Myether Wallet Email Phishing](https://twitter.com/myetherwallet/status/1092498871157051392)

[Trezor Wallet Email Phishing](https://twitter.com/trezor/status/797170025161510914)
### Targeted Key Leak
An attacker could use the users ip address to target them specifically and escalate an attack using the keys that we made for that user. A person who stores the users keys for them, if the users decides, could also use these keys to spend the users funds if they have the right number of keys.

## Plan to Address Risks
### No Email Communication
We will not use email to communication with any users at all. We do not offer email communication anytime during the buying process.
### Web Page Communication
We will communicate through the webpage, and they will get help with their order via this main webpage.
We will also route all identifying information via proxy using end to end encryption. This communication methods hides ip and other identifying information but not completely.
### Lightning payments
In order to hide the main payment address, we require [lightning payments](https://en.wikipedia.org/wiki/Lightning_Network) or other services like [submarine swaps](https://submarineswaps.org/).
## Compromises
### Logistical Constraints
Given the nature of shipping items in 2019, we will have to have the users address.
### Internet Constraints
Due to the nature of how the internet works currently, by visiting my website you will reveal some information by visiting the website. The information that would leak would be your ip address . This can be avoided by using a vpn or other service.
