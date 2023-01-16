
function brand (arr) {

    const parent = document.querySelector('.partners__inner');


    class NewBrand {

        constructor(brandsLogo){

            this.name = brandsLogo;
        } 

        render() {

            let logoBlock = document.createElement('div');

            logoBlock.classList.add('bio__item');
            logoBlock.innerHTML = 
            `
                        <img src="./src/icons/partners/${this.name}.svg" alt="${this.name}"
                        class="_brandItem">
            `;

            parent.append(logoBlock);
        }
    }


    arr.forEach(item => {
        new NewBrand(
        item
    ).render();
    });
    

    
}
export default brand;