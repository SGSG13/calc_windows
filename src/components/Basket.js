import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {deleteItem} from '../AC'

class Basket extends Component {



    renderBasketItem = (order) => {

        function getName (item) {
            if(item.calculate === 'windows') {
                switch (item.selectItem) {
                    case 1:
                        return 'Односекционное окно';
                    case 2:
                        return 'Двухсекционное окно';
                    case 3:
                        return 'Трёхсекционное окно';
                    case 4:
                        return 'Четырёхсекционное окно';
                }
            } else {
                switch (item.selectItem) {
                    case 1:
                        return 'Дверь';
                    case 2:
                        return 'Односекционное окно и дверь';
                    case 3:
                        return 'Трёхсекционное окно';
                    case 4:
                        return 'Двухсекционное окно и дверь';
                }
            }
        }

        function getConfig(item) {
            if(item.calculate === 'windows') {
                switch (item.selectItem) {
                    case 1:
                        return `Створка: ${getConfigSingle(item.win1)}`;
                        break;
                    case 2:
                        return 'Двухсекционное окно';
                    case 3:
                        return 'Трёхсекционное окно';
                    case 4:
                        return 'Четырёхсекционное окно';
                }
            } else {
                switch (item.selectItem) {
                    case 1:
                        return 'Дверь';
                    case 2:
                        return 'Односекционное окно и дверь';
                    case 3:
                        return 'Трёхсекционное окно';
                    case 4:
                        return 'Двухсекционное окно и дверь';
                }
            }
        }
        
        function getConfigSingle(win) {
            switch (win) {
                case 1:
                    return 'Глухая створка';
                case 2:
                    return 'Повортно / откидная левая';
                case 3:
                    return 'Повортная / откидная правая';
            }
        }

        
        return order.map(item =>
            <div className="wincalc-basket-item" key={item.id}>
                <div className="icon"
                     style={{height: 45, backgroundRepeat: 'no-repeat', backgroundImage: `url(img/lay${item.selectItem}${item.calculate === 'doors' ? 'd' : ''}-thumb.png)`}}
                ></div>
                <div className="wincalc-basket-content">
                    <div className="title">{getName(item)}</div>
                    <div className="size">{item.width}x{item.height}</div>
                    <div className="delete-row"
                        onClick={this.handleDeleteItem.bind(null, item.id)}
                    >
                        <div>&nbsp;</div>
                    </div>
                    <div className="price">{item.price}<span> pуб.</span></div>
                    <div className="description">Профиль: {item.profile}, Стеклопакет: {item.glass}, Фурнитура:
                        {item.fittings}, Ламинация: {item.laminate}, Подоконник: {item.sill}, Отлив: {item.tide}, Ширина: {item.width}, Высота:
                        {item.height}, {getConfig(item)}
                    </div>
                </div>
            </div>
        )
    };

    handleDeleteItem = (id) => {
        this.props.deleteItem(id);
    };

    totalPrice = () => {
        let sum = 0;
        this.props.order.forEach(item => {
            sum += +item.price
        });
        
        return Math.ceil((sum)*100)/100;
    };
    
    render() {
        const {order} = this.props;
        return (
            <div className="full-width-column wincalc-page-select-module">
                <div className="wincalc-module-body"></div>
                <div className="wincalc-child-modules"
                     style={{position: 'relative', width: 'auto', height: 'auto'}}>
                    <div className="box wincalc-basket-module" style={{ position: 'relative', top: 0}}>
                        <h1>Корзина</h1>
                        <div className="wincalc-module-body">

                            {this.renderBasketItem(order)}
                            
                        </div>

                        <div className="wincalc-child-modules">
                            <div className="wincalc-send-order-module">
                                <div className="wincalc-module-body"><span className="label-price"><ins><img
                                    src="/img/icon-calc-basket.png" alt=""/></ins>Итоговая стоимость</span>
                                    <div className="total-price js-total-price">
                                        {this.totalPrice()}
                                        <span> руб.</span>
                                    </div>
                                    <div className="label-price-btn"><a id="js-payment" href="#">Отправить заказ</a></div>
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                        </div>

                        <div className="wincalc-clear"></div>
                    </div>
                </div>
                <div className="wincalc-clear"></div>
            </div>
        );
    }
}


export default connect((state) => {
    return {
        order: state.basket.order
    }
}, {deleteItem})(Basket)
