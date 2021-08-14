// All h2 lightblue color.
const allH2 = document.getElementsByTagName("h2");
for (const h2 of allH2) {
    h2.style.color = "lightblue"
}
// Backpack section background color set.
document.getElementById("Backpack-section").style.backgroundColor = "tomato";
// Card border radious add.
const allCard = document.getElementsByClassName("card");
for (const card of allCard) {
    console.log(card);
    card.style.borderRadius = "30px"
};