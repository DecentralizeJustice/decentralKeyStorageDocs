# Cautions
## Key Leaking
Due to the fact that MC engraves 2 of the bip39 seeds for our users, there is a risk that this can lead to an user having their menmonics  leaked. This leak can happen only if the following things are true:
1. MC leaks your engraved menmonics.
2. Your web wordlist are leaked also.
3. Your self engraved cards are leaked.
4. An attacker collects all of the information leaked in 1-3

In this case your crypto can be stolen. This is not an specific to MC, but true for any system that saves your harddware wallet seed outside of the wallet. For example, [Casa](https://keys.casa/key-management/) avoids this by using a 3 out of 5 hardware wallet setup with no menmonic backup for any of the hardware wallets.

Using MC does not expose you to any more of a risk than the standard way of using a hardware wallet. If MC system fails, you would not be put at any more risk than using a hardware wallet the standard way, you would simply not have some of the protections that MC offers.

### Prevent This Issue
In order to help prevent key leaking, if your specific threat model calls for it, you can simply backup your own menmonic seeds beyond the standard hardware wallet backup that MC uses. This would help prevent your key leaking by removing step 1 from the equation and pushing the threat of key leaking onto step 3, which can be self managed. This is by no means a standard procedure and you should be an expert in order to attempt this step. 
