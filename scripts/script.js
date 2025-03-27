const buttons = document.querySelectorAll('.onglets-bas-de-page button')

for (const button of buttons) {
    button.addEventListener('click', function(event) {
        event.preventDefault();

        let contents = document.querySelectorAll(".tab-content");
        for(let i = 0; i < contents.length; i++){
            contents[i].style.display = "none";
        }
        
        const tabToOpen = this.dataset.tab;

        contents[tabToOpen].style.display = "block"
    });
}
