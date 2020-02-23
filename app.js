const matCount = [];
db.collection('mattresses').get().then((snapshot) => {
	document.querySelector('.total-count').innerText = snapshot.docs.length;
});

const setDate = () => {
	const date = new Date();
	document.querySelector('.date').innerHTML = date;
};
setInterval(setDate, 3000);

db.collection('mattresses').onSnapshot(querySnapshot=>{
    querySnapshot.docChanges().forEach(change => {
        if(change.type==='modified'){
            console.log("Status changed", change.doc.data());
            alert(`Status changed: ${change.doc.data().pnr}`);
            document.querySelector(".alert-area").innerHTML= `<h6> Unauthorized carry of matress by pnr ${change.doc.data().pnr} ar ${new Date()} </h6>`
        }
    });
});

//const matRef = db.collection('mattresses').ref();
