animals = [
    { ten: "Gà", anh: "img/g/g8.jfif",mota:"Chicken tên Tiến", thuvien: ["img/g/g1.jfif", "img/g/g2.jfif", "img/g/g3.jfif",
        "img/g/g4.jfif", "img/g/g5.jfif", "img/g/g6.jfif", "img/g/g7.jfif"
    ] },
    { ten: "Ngựa", anh: "img/n/n8.jfif",mota:"Kỳ Lân",  thuvien: ["img/n/n1.jfif", "img/n/n2.jfif", "img/n/n3.jfif",
        "img/n/n4.jfif", "img/n/n5.jfif", "img/n/n6.jfif", "img/n/n7.jfif"
    ] },
    { ten: "Sử Tử", anh: "img/s/s8.jfif",mota:"Con hổ có bờm",  thuvien: ["img/s/s1.jfif", "img/s/s2.jfif", "img/s/s3.jfif",
        "img/s/s4.jfif", "img/s/s5.jfif", "img/s/s6.jfif", "img/s/s7.jfif"
    ] },
    { ten: "Cá Heo", anh: "img/h/h8.jfif",mota:"Cá heo dưới nước", thuvien: ["img/h/h1.jfif", "img/h/h2.jfif", "img/h/h3.jfif",
        "img/h/h4.jfif", "img/h/h5.jfif", "img/h/h6.jfif", "img/h/h7.jfif"
    ] },
    { ten: "Báo", anh: "img/b/b8.jfif",mota:"Báo Chí", thuvien: ["img/b/b1.jfif", "img/b/b2.jfif", "img/b/b3.jfif",
        "img/b/b4.jfif", "img/b/b5.jfif", "img/b/b6.jfif", "img/b/b7.jfif"
    ] }
];

const animalListDiv = document.getElementById('animalList');

if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        card.addEventListener("click",() =>{
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
            window.location.href = 'detail.html';
        });
        animalListDiv.appendChild(card);
    });
}
// Huỳnh Tấn Trung 24NT01053