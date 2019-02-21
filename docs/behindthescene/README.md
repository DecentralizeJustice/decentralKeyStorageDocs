# Behind The Scenes
Information in this section concerns how MC is run outside of the software.
## Metal Card Construction
### Key Generation
We use a keep key to generate 12 bip39 seeds. This prevents a simple hack from stealing the keys. The attack would have to include an in person attack, such as placing a camera in the room where the keys are being made.
### Hand Stamping
We use a metal stamper to engrave all of our cards. This makes an tech only attack very hard to exploit.
After stamping the cards
#### Warnings
The stainless steel cards that we use are near indestructible using conventional methods. This means that if a mistake is made during the stamping process you have to start over on stamping that set from a new menmonic seed. For example if we completed one card, and messed up on word 11 on the next card we would have to start over completely from a new menmonic. We might also consider simply including the messed up card in the final product as a way to give the user more redundancy and not be as wasteful.
