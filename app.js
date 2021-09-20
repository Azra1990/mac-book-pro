const memory8Gb = document.getElementById('memory-8gb');
const memory16Gb = document.getElementById('memory-16gb');

const storage256Gb = document.getElementById('storage-256gb');


const storage512Gb = document.getElementById('storage-512gb');


const storage1Tb = document.getElementById('storage-1tb');

const earlyDelivary = document.getElementById('early-delivary');


const lateDelivary = document.getElementById('late-delivary');

const delivaryCost = document.getElementById('delivary-cost');


const storagePrice = document.getElementById('storage-price');



const memoryPrice = document.getElementById('memory-price');

const bastPrice = document.getElementById('best-price');

const totalPrice = document.getElementById('total-price');

const finalTotal = document.getElementById('final-total')


function updateTotal(){
    const updateBastPeice = Number(bastPrice.innerText);
    
    const updateMemoryPeice = Number(memoryPrice.innerText);
    
    const updateStoragePeice = Number(storagePrice.innerText);
    
    const updateDelivaryCost = Number(delivaryCost.innerText);

    

    const grandTotal = updateBastPeice+ updateMemoryPeice + updateStoragePeice + updateDelivaryCost ;

    totalPrice.innerText = grandTotal ;

    finalTotal.innerText =grandTotal ;
}

memory8Gb.addEventListener('click' , function(){
    memoryPrice.innerText = 0 ;

    updateTotal();
});


memory16Gb.addEventListener('click' , function(){
    memoryPrice.innerText = 180 ;

    updateTotal();
});

storage256Gb.addEventListener('click' , function(){
    storagePrice.innerText = 0 ;

    updateTotal();

})


storage512Gb.addEventListener('click' , function(){
    storagePrice.innerText = 100 ;

    updateTotal();

})
storage1Tb.addEventListener('click' , function(){
    storagePrice.innerText = 180 ;

    updateTotal();

})


earlyDelivary.addEventListener('click' , function(){
    delivaryCost.innerText = 0 ;

    updateTotal();

})

lateDelivary.addEventListener('click' , function(){
    delivaryCost.innerText = 20 ;

    updateTotal();
})