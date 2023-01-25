import _ from 'lodash';
export function numbers() {
    const numbers = [1, 2, 3, 4, 5];
    const squaredNumbers = _.map(numbers, (n) => n * n);
    console.log(squaredNumbers); // [1, 4, 9, 16, 25]
}

export function counter() {
    const $counter = document.querySelector('.counter');
    const $count = document.querySelector('.count');
    
    $counter.addEventListener('click', () => {
        let currNum = parseInt($count.innerText);
    
        currNum++;
        
        $count.innerText = currNum;
    });
}