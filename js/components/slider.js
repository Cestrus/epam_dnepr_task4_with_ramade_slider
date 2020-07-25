class Slider {
    constructor(btnBack, btnForward, sliderBox, quantityActiveItems){
        this.sliderBox = sliderBox;
        this.quantityActiveItems = quantityActiveItems; // количество активных элементов в слайдере

        btnForward.addEventListener('click', () => this.transformItem('next'));
        btnBack.addEventListener('click', () => this.transformItem('prev'));
        sliderBox.addEventListener('mousedown', () => this.onMouseDown());
        sliderBox.addEventListener('mouseup', () => this.onMouseUp());
        sliderBox.addEventListener('mousemove', ev => this.mouseMoveCarousel(ev))
        
        this.step = 100 / this.quantityActiveItems;
        this.transform = 0;      
        this.isMouseDown = false;
        this.mouseMoveCoordX = [];        
        
        this.items = [];
    }

    pushItems(callbackCreateObj, ...arr){ // функция для заполнения массива items, согласно заданного в callback формата
        arr.forEach((item, index) => {
            this.items.push(callbackCreateObj(item, index));
        });
    }
    
    transformItem(direction){
        // sliders logic;
    }

    onMouseDown(){
        this.isMouseDown = true;
    }

    onMouseUp(){
        this.isMouseDown = false;
        this.mouseMoveCoordX = [];
    }

    mouseMoveCarousel(ev){
        if(this.isMouseDown){
            this.mouseMoveCoordX.push(ev.clientX);
            if(this.mouseMoveCoordX.length > 1){
                if (this.mouseMoveCoordX[0] > this.mouseMoveCoordX[this.mouseMoveCoordX.length-1]){
                this.transformItem('next');
                this.isMouseDown = false;
                } else {
                    this.transformItem('prev');
                    this.isMouseDown = false;
                }
            }
        }
    }
}


// Slider for Portfolio block

export class SliderPortfolio extends Slider {
    constructor(btnBack, btnForward, sliderBox, quantityActiveItems){

        super(btnBack, btnForward, sliderBox, quantityActiveItems);    
        this.positionLeftElement = 0;    
        
        this.position = { // объект для определения позиционирования элемента
            getItemMin: () => {
                let indexItem = 0;
                this.items.forEach((item, index) => {
                    if(item.position < this.items[indexItem].position){
                        indexItem = index;
                    }
                });
                return indexItem;
            }, 
            getItemMax: () => {
                let indexItem = 0;
                this.items.forEach((item, index) => {
                    if(item.position > this.items[indexItem].position){
                        indexItem = index;
                    }
                });
                return indexItem;
            },             
            getMin: () => this.items[this.position.getItemMin()].position, 
            getMax: () => this.items[this.position.getItemMax()].position
        }

        super.pushItems(this.createObj.bind(this), ...this.sliderBox.children);
        console.log(this.items)
    }

    createObj(item, index){
        return {item, position: index, transform: 0};
    }

    pushItems(...arr){
        arr.forEach((item, index) => {
            this.items.push({item, position: index, transform: 0})
        });
    }
    
    transformItem(direction){
        let nextItem;
        if(direction === 'next'){
            this.positionLeftElement++;
            if((this.positionLeftElement + this.quantityActiveItems - 1) > this.position.getMax()){
                nextItem = this.position.getItemMin();
                this.items[nextItem].position = this.position.getMax() + 1;
                this.items[nextItem].transform += this.items.length * 100;
                this.items[nextItem].item.style.transform = 'translateX(' + this.items[nextItem].transform + '%)';
            }
            this.transform -= this.step;
        } else {
            this.positionLeftElement--;
            if(this.positionLeftElement < this.position.getMin()){
                nextItem = this.position.getItemMax();
                this.items[nextItem].position = this.position.getMin() - 1;
                this.items[nextItem].transform -= this.items.length * 100;
                this.items[nextItem].item.style.transform = 'translateX(' + this.items[nextItem].transform + '%)';
            }
            this.transform += this.step;
        }
        this.sliderBox.style.transform = 'translateX(' + this.transform + '%)';
    }
}


// Slider for Testimonials block

export class SliderTestimonials extends Slider {
    constructor(btnBack, btnForward, sliderBox, quantityActiveItems){

        super(btnBack, btnForward, sliderBox, quantityActiveItems);
        this.sliderBox = sliderBox;
        this.current = 0;
        
        this.arrElements = [ // массив элементов для слайдера, дополненный 2 элементами
            {
                quote: 'We move at a fast pace. I’m always working on something. I am excited about it!', 
                quoteAuthor: 'Martin Oda', 
                quotePosition: 'Product desgner', 
                imgAuthor: './img/people/User img.png'
            },
            {
                quote: 'some wisdom quote', 
                quoteAuthor: 'Ann', 
                quotePosition: 'Product manager', 
                imgAuthor: './img/people/User img 3.png'
            },
            {
                quote: 'Another some wisdom quote', 
                quoteAuthor: 'Sarah', 
                quotePosition: 'Product HR', 
                imgAuthor: './img/people/User img 2.png'
            }
        ];

        super.pushItems(this.createObj.bind(this), ...this.arrElements);
    }

    createObj(item, index){
        return {
            item: this.renderItem(item),
            position: index
        }
    }    

    transformItem(dir){
        if(dir == 'next'){
            this.current ++;
            if(this.current >= this.items.length){
                this.current = 0;
            }
            this.sliderBox.style.flexDirection = 'row';
            this.sliderBox.appendChild(this.items[this.current].item);
            this.sliderBox.style.transition = 'left 0.6s';
            this.sliderBox.style.left = -1 * parseInt(getComputedStyle(this.sliderBox).width) + "px";
        } else {
            this.current --;
            if(this.current < 0){
                this.current = this.items.length -1;
            }
            this.sliderBox.style.flexDirection = 'row-reverse';
            this.sliderBox.appendChild(this.items[this.current].item);
            this.sliderBox.style.transition = 'left 0.6s';
            this.sliderBox.style.left = getComputedStyle(this.sliderBox).width;

        }
        setTimeout(() => {
            this.sliderBox.style.transition = 'none';
            this.sliderBox.children[0].remove();
            this.sliderBox.style.left = 0 +'px';
        },600);

    }

    renderItem(item){
        let div = document.createElement('div');
        div.classList.add('mySlider__item--testimonials');
        div.innerHTML = `<div class="row row--testimonials-item ">
                            <div class="column-testimonials column-testimonials--center-left">
                                <div class="testimonials-main__left">
                                    <div class="quote">
                                        <div class="quote__text"><p><span>,,</span><br/>${item.quote}</p></div>
                                        <div class="quote__author"><p>${item.quoteAuthor}</p></div>
                                        <div class="quote__position"><p>${item.quotePosition}</p></div>
                                    </div>
                                </div>
                            </div>
                            <div class="column-testimonials column-testimonials--center-right">
                                <div class="testimonials-main__right">
                                    <img src="${item.imgAuthor}" alt="user img">
                                </div>
                            </div>
                        </div>`;
        return div;
    }
}

