# History

## Project Inspiration
The History behind the project is simple; I was tired of storing my keys on paper and I did not want
the usability cost of using an hardware wallet. I thought a while about the issue and came to a conclusion.
I could have one card that acted as a main storage key and add a passphrase to this card for each wallet that I used. Now instead of having a draw filled with paper with my keys scribbled on them, I could have one main card and just produce passphrase when I needed them. The passphrase could be stored by whatever means I wanted to, such as being online in my email or irl on metal, if I wanted to. This base idea lead me to learn more about bip 39.

## BIP 39
BIP 39 is Unanimously Discourage for implementation, but seems to be the default method for a lot of wallets in the crypto space, and is often recommend way to store mnemonic seeds. This project seeks to fix some of these issues along with providing another storage solution for crypto.  
Several issues were raised concerning BIP 39 :
* [No Versioning](https://github.com/bitcoin/bips/wiki/Comments:BIP-0039#electrum-criticism-of-bip39)
* [Requires Wordlist](https://github.com/bitcoin/bips/wiki/Comments:BIP-0039#electrum-criticism-of-bip39)
* [Ambiguous Entropy Requirements](https://github.com/bitcoin/bips/wiki/Comments:BIP-0039#electrum-criticism-of-bip39)
* [Low and Static Key Stretching Rounds](https://github.com/bitcoin/bips/pull/17)

Electrum has its own [derivation](http://docs.electrum.org/en/latest/faq.html) scheme for seeds. This implementation has not gained wide support in the crypto community and I do not see a easy way to make it backwards compatible with bip39 seeds in its current implementation.

# Solutions
## Versioning & Key Stretching
We can solve the versioning and Key stretching issues using Pieter Wuille's key grinding [algorithm](https://bitcointalk.org/index.php?topic=102349.0)

## Entropy
Since this is not a standard we can simply implement it with a secure and tested CPRNG.

## Wordlist
We cant git away from this issue and be compatible with wallets that the user might choose to use.
This is a utility tool that is limited by the whatever coin the user chooses to. If the wallet that the user wants to use, requires a wordlist, we will also need the wordlist since we hope to put out something compliant with this wallet.
