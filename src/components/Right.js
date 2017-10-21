import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addItem} from '../AC'
import {rate, singleWindow} from '../price'

class Right extends Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0,
            
            single: 1,
            singleW: 400,
            singleH: 400,
            count1: 0,

            double1: 1,
            double2: 1,
            doubleW: 1000,
            doubleH: 800,
            count2: 0,

            triple1: 1,
            triple2: 1,
            triple3: 1,
            tripleW: 1500,
            tripleH: 800,
            count3: 0,

            quadruple1: 1,
            quadruple2: 1,
            quadruple3: 1,
            quadruple4: 1,
            quadrupleW: 2000,
            quadrupleH: 800,
            count4: 0,

            singleDoor: 1,
            singleDoorW: 500,
            singleDoorH: 1700,

            doubleDoor1: 1,
            doubleDoor1W: 900,
            doubleDoor1H: 400,
            doubleDoor2: 1,
            doubleDoor2W: 500,
            doubleDoor2H: 1700,
            count5: 0,
            
            tripleDoor1: 1,
            tripleDoor1W: 1500,
            tripleDoor1H: 800,
            tripleDoor2: 1,
            tripleDoor3: 1,
            tripleDoor3W: 500,
            tripleDoor3H: 1700,
            count6: 0
        }
    }
    
    renderItem = () => {
        const {item} = this.props;
        switch (item.calculate) {
            case 'windows':
                return this.renderWindow();
            case 'doors':
                return this.renderDoor();
            default:
                return this.renderWindow();
        }
    };

    setConfigWindow = (item) => {
        const count = this.state[item];

        if(item === 'single'
        || item === 'triple2'
        || item === 'quadruple2'
        || item === 'quadruple3'
        || item === 'tripleDoor2'
        ) {
            if(count === 3) {
                this.setState({[item]: 1});
                switch (item){
                    case 'single':
                        this.setState({ count1: this.state.count1 - 1});
                        break;
                    case 'triple2':
                        this.setState({ count3: this.state.count3 - 1});
                        break;
                    case 'quadruple2':
                        this.setState({ count4: this.state.count4 - 1});
                        break;
                    case 'quadruple3':
                        this.setState({ count4: this.state.count4 - 1});
                        break;
                    case 'tripleDoor2':
                        this.setState({ count6: this.state.count6 - 1});
                        break;
                }
            } else {
                this.setState({[item]: count + 1});
                if(count === 2) return;
                switch (item) {
                    case 'single':
                        this.setState({count1: this.state.count1 + 1});
                        break;
                    case 'triple2':
                        this.setState({count3: this.state.count3 + 1});
                        break;
                    case 'quadruple2':
                        this.setState({count4: this.state.count4 + 1});
                        break;
                    case 'quadruple3':
                        this.setState({count4: this.state.count4 + 1});
                        break;
                    case 'tripleDoor2':
                        this.setState({count6: this.state.count6 + 1});
                        break;
                }
            }
        } else {
            if(count === 2) {
                this.setState({[item]: 1});
                switch (item){
                    case 'double1':
                        this.setState({ count2: this.state.count2 - 1});
                        break;
                    case 'double2':
                        this.setState({ count2: this.state.count2 - 1});
                        break;
                    case 'triple1':
                        this.setState({ count3: this.state.count3 - 1});
                        break;
                    case 'quadruple1':
                        this.setState({ count4: this.state.count4 - 1});
                        break;
                    case 'quadruple4':
                        this.setState({ count4: this.state.count4 - 1});
                        break;
                    case 'doubleDoor1':
                        this.setState({ count5: this.state.count5 - 1});
                        break;
                    case 'tripleDoor1':
                        this.setState({ count6: this.state.count6 - 1});
                        break;
                    case 'triple3':
                        this.setState({ count6: this.state.count6 - 1});
                        break;
                }

            } else {
                this.setState({[item]: count + 1});
                switch (item){
                    case 'double1':
                        this.setState({ count2: this.state.count2 + 1});
                        break;
                    case 'double2':
                        this.setState({ count2: this.state.count2 + 1});
                        break;
                    case 'triple1':
                        this.setState({ count3: this.state.count3 + 1});
                        break;
                    case 'quadruple1':
                        this.setState({ count4: this.state.count4 + 1});
                        break;
                    case 'quadruple4':
                        this.setState({ count4: this.state.count4 + 1});
                        break;
                    case 'doubleDoor1':
                        this.setState({ count5: this.state.count5 + 1});
                        break;
                    case 'tripleDoor1':
                        this.setState({ count6: this.state.count6 + 1});
                        break;
                    case 'triple3':
                        this.setState({ count6: this.state.count6 + 1});
                        break;
                }
            }
        }
    };

    setSingleTitle = (item) => {
        switch (this.state[item]){
            case 1:
                return 'Глухая створка';
            case 2:
                return 'Повортно / откидная левая';
            case 3:
                return 'Повортная / откидная правая';
        }
    };

    setLeftTitle = (item) => {
        switch (this.state[item]){
            case 1:
                return 'Глухая створка';
            case 2:
                return 'Повортно / откидная левая';
        }
    };

    setRightTitle = (item) => {
        switch (this.state[item]){
            case 1:
                return 'Глухая створка';
            case 2:
                return 'Повортная / откидная правая';
        }
    };

    handleChangeSize = (event) => {
      const {value, name} = event.target;
        if(value.match(/^[0-9]+$/) || value === ''){

            switch (name) {
                case "singleW":
                    if(value > 100 && value < 400){
                        this.setState({
                            [name]: 400
                        })
                    } else if (value > 1500) {
                        this.setState({
                            [name]: 1500
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "singleH":
                    if(value > 100 && value < 400){
                        this.setState({
                            [name]: 400
                        })
                    } else if (value > 1900) {
                        this.setState({
                            [name]: 1900
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "doubleW":
                    if(value > 100 && value < 1000){
                        this.setState({
                            [name]: 1000
                        })
                    } else if (value > 2400) {
                        this.setState({
                            [name]: 2400
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "doubleH":
                    if(value > 100 && value < 800){
                        this.setState({
                            [name]: 800
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "tripleW":
                    if(value > 100 && value < 1500){
                        this.setState({
                            [name]: 1500
                        })
                    } else if (value > 2900) {
                        this.setState({
                            [name]: 2900
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "tripleH":
                    if(value > 100 && value < 800){
                        this.setState({
                            [name]: 800
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "quadrupleW":
                    if(value > 100 && value < 2000){
                        this.setState({
                            [name]: 2000
                        })
                    } else if (value > 3400) {
                        this.setState({
                            [name]: 3400
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "quadrupleH":
                    if(value > 100 && value < 800){
                        this.setState({
                            [name]: 800
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "singleDoorW":
                    if(value > 100 && value < 500){
                        this.setState({
                            [name]: 500
                        })
                    } else if (value > 1200) {
                        this.setState({
                            [name]: 1200
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "singleDoorH":
                    if(value > 100 && value < 1700){
                        this.setState({
                            [name]: 1700
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "doubleDoor2W":
                    if(value > 100 && value < 500){
                        this.setState({
                            [name]: 500
                        })
                    } else if (value > 1200) {
                        this.setState({
                            [name]: 1200
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "doubleDoor2H":
                    if(value > 100 && value < 1700){
                        this.setState({
                            [name]: 1700
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "doubleDoor1W":
                    if(value > 100 && value < 900){
                        this.setState({
                            [name]: 900
                        })
                    } else if (value > 2700) {
                        this.setState({
                            [name]: 2700
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "doubleDoor1H":
                    if(value > 100 && value < 400){
                        this.setState({
                            [name]: 400
                        })
                    } else if (value > 1900) {
                        this.setState({
                            [name]: 1900
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "tripleDoor3W":
                    if(value > 100 && value < 500){
                        this.setState({
                            [name]: 500
                        })
                    } else if (value > 1200) {
                        this.setState({
                            [name]: 1200
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "tripleDoor3H":
                    if(value > 100 && value < 1700){
                        this.setState({
                            [name]: 1700
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "tripleDoor1W":
                    if(value > 100 && value < 1500){
                        this.setState({
                            [name]: 1500
                        })
                    } else if (value > 3600) {
                        this.setState({
                            [name]: 3600
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;
                case "tripleDoor1H":
                    if(value > 100 && value < 800){
                        this.setState({
                            [name]: 800
                        })
                    } else if (value > 2300) {
                        this.setState({
                            [name]: 2300
                        })
                    } else {
                        this.setState({
                            [name]: value
                        })
                    }
                    break;

                default:
                    this.setState({
                        [name]: value
                    })
            }
        }
    };


    priceWindow = (price, width, height) => {
      let priceWindow = 0;

        let items = price.filter(win => win.height === height && win.width === width);
        if(items.length < 1) return;
        priceWindow = items[0].price * rate;

        return priceWindow;
    };

    priceProfile = (profile) => {
        let  priceProfile = 1;
        if(profile === 'KBE Gut') {priceProfile = 1}
        else if (profile === 'KBE Master') {priceProfile = 1.05}
        else if (profile === 'KBE Elite 76') {priceProfile = 1.15}

        return priceProfile
    };

    priceGlass = (glass, width, height) => {
        let priceGlass = 0;
        if(glass === '2 стекла') {priceGlass = 0}
        else if (glass === '3 стекла') {priceGlass = ((width * height) / 1000000) * (4 * rate)}

        return priceGlass
    };

    priceFitting = (fittings, count) => {
        let priceFitting = 60;
        if(fittings === 'Siegenia Favorit') {priceFitting = 60}
        else if (fittings === 'Siegenia Titan') {priceFitting = 75}

        return priceFitting * count;
    };
    
    priceLaminate = (laminate) => {
        let priceLaminate = 1;
        if(laminate === 'Нет') {priceLaminate = 1}
        else if (laminate === 'Внутри') {priceLaminate = 1.3}
        else if (laminate === 'Снаружи') {priceLaminate = 1.25}
        else if (laminate === 'Внутри и снаружи') {priceLaminate = 1.55}
        
        return priceLaminate
    };

    priceSill = (sill, width) => {
        let priceSill = 0;
        switch (sill) {
            case 'Нет':
                priceSill = 0;
                break;
            case '100':
                priceSill = ((width/1000) * (1.18 * rate)) + (0.8 * rate);
                break;
            case '150':
                priceSill = ((width/1000) * (1.78 * rate)) + (0.8  * rate);
                break;
            case '200':
                priceSill = ((width/1000) * (2.36 * rate)) + (0.8  * rate);
                break;
            case '250':
                priceSill = ((width/1000) * (2.96 * rate)) + (0.8  * rate);
                break;
            case '300':
                priceSill = ((width/1000) * (3.55 * rate)) + (0.8  * rate);
                break;
            case '350':
                priceSill = ((width/1000) * (4.14 * rate)) + (0.8  * rate);
                break;
            case '400':
                priceSill = ((width/1000) * (4.73 * rate)) + (0.8  * rate);
                break;
            case '450':
                priceSill = ((width/1000) * (5.32 * rate)) + (0.8  * rate);
                break;
            case '500':
                priceSill = ((width/1000) * (5.9 * rate)) + (0.8  * rate);
                break;
            case '600':
                priceSill = ((width/1000) * (7.1 * rate)) + (0.8  * rate);
                break;
        }
        
        return priceSill
    };

    priceTide = (tide, width) => {
        let priceTide = 0;
        if(tide === 'Нет') {priceTide = 0}
        else {priceTide = ((tide * width) / 1000000) * (7 * rate)}
        
        return priceTide
    };
    
    installPrice = (install, calculate, item) => {
        let installPrice = 0;
        
        if(install === 'Да') {
            if (calculate === 'windows') {
                switch (item) {
                    case 1:
                        installPrice = 30;
                        break;
                    case 2:
                        installPrice = 35;
                        break;
                    case 3:
                        installPrice = 40;
                        break;
                    case 4:
                        installPrice = 45;
                        break;
                }
            } else {
                switch (item) {
                    case 1:
                        installPrice = 40;
                        break;
                    case 2:
                        installPrice = 50;
                        break;
                    case 3:
                        installPrice = 50;
                        break;
                }
            }
        } 
            return installPrice;
    };

   WindowPrice = (item, width, height, count, price, door) => {

        let priceWindow = this.priceWindow(price, width, height);
        let priceProfile =  this.priceProfile(item.profile);
        let priceGlass = this.priceGlass(item.glass, width, height);
        let priceFitting = this.priceFitting(item.fittings, count);
        let priceLaminate = this.priceLaminate(item.laminate);
        let priceSill = !door ? this.priceSill(item.sill, width): 0;
        let priceTide = !door ? this.priceTide(item.tide, width): 0;
        let installPrice = !door ? this.installPrice(item.install, item.calculate, item.selectItem) : 0;

        let sum = priceWindow
            + ((priceProfile * priceWindow) - priceWindow)
            + priceGlass
            + priceFitting
            + ((priceLaminate * priceWindow) - priceWindow)
            + priceSill
            + priceTide
            + installPrice;

        return Math.ceil((sum)*100)/100;
    };
    
    totalPrice = () => {
        const {item} = this.props;

        if (item.calculate === 'windows') {
            switch (item.selectItem) {
                case 1:
                    const width = Math.ceil((this.state.singleW)/100)*100;
                    const height = Math.ceil((this.state.singleH)/100)*100;
                    return this.WindowPrice(item, width, height, this.state.count1, singleWindow, false);
                case 2:
                    const widthD = Math.ceil((this.state.doubleW)/100)*100;
                    const heightD = Math.ceil((this.state.doubleH)/100)*100;
                    return this.WindowPrice(item, widthD, heightD, this.state.count2, singleWindow, false);
                    break;
                case 3:
                    const widthT = Math.ceil((this.state.tripleW)/100)*100;
                    const heightT = Math.ceil((this.state.tripleH)/100)*100;
                    return this.WindowPrice(item, widthT, heightT, this.state.count3, singleWindow, false);
                    break;
                case 4:
                    const widthQ = Math.ceil((this.state.quadrupleW)/100)*100;
                    const heightQ = Math.ceil((this.state.quadrupleH)/100)*100;
                    return this.WindowPrice(item, widthQ, heightQ, this.state.count4, singleWindow, false);
                    break;
            }
        } else {
            switch (item) {
                case 1:
                    const widthS = Math.ceil((this.state.singleDoorW)/100)*100;
                    const heightS = Math.ceil((this.state.singleDoorH)/100)*100;
                    return this.WindowPrice(item, widthS, heightS, 1, singleWindow, false);
                    break;
                case 2:
                    const widthD1 = (Math.ceil((this.state.doubleDoor1W - this.state.doubleDoor2W)/100)*100) < 400 ? 400: (Math.ceil((this.state.doubleDoor1W - this.state.doubleDoor2W)/100)*100);
                    const heightD1 = Math.ceil((this.state.doubleDoor1H)/100)*100;
                    const widthD2 = Math.ceil((this.state.doubleDoor2W)/100)*100;
                    const heightD2 = Math.ceil((this.state.doubleDoor2H)/100)*100;
                    return (this.WindowPrice(item, widthD1, heightD1, this.state.count5, singleWindow, false) + this.WindowPrice(item, widthD2, heightD2, 1, singleWindow, true));
                    break;
                case 3:
                    const widthT1 = (Math.ceil((this.state.tripleDoor1W - this.state.tripleDoor3W)/100)*100) < 1000 ? 1000: (Math.ceil((this.state.tripleDoor1W - this.state.tripleDoor3W)/100)*100);
                    const heightT1 = Math.ceil((this.state.tripleDoor1H)/100)*100;
                    const widthT2 = Math.ceil((this.state.tripleDoor3W)/100)*100;
                    const heightT2 = Math.ceil((this.state.tripleDoor3H)/100)*100;
                    return (this.WindowPrice(item, widthT1, heightT1, this.state.count5, singleWindow, false) + this.WindowPrice(item, widthT2, heightT2, 1, singleWindow, true));
                    break;
            }
        }
    };
    
    renderWindow = () => {
        const {item} = this.props;
        switch (item.selectItem) {
            case 1:
                return (
                    <div style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380}}>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'single')}
                             style={{cursor: 'pointer', position: 'absolute', left: 185, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-${this.state.single}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 195, top: 245, width: 80, height: 20}}>
                            {this.setSingleTitle('single')}
                        </div>
                        <div className="sizer-up" title="Ширина"
                             style={{position: 'absolute', left: 185, top: 55, width: 98, height: 30}}>
                            <div className="sizer-up-line"
                                 style={{position: 'absolute', left: 0, top: 14, width: 98}}></div>
                            <div className="sizer-up-arrow1"
                                 style={{position: 'absolute', left: 0, top: 8.5}}></div>
                            <div className="sizer-up-arrow2"
                                 style={{position: 'absolute', left: 85, top: 8.5}}></div>
                            <input name="singleW"
                                   style={{position: 'absolute', left: 27, top: 5.5}}
                                   value={this.state.singleW}
                                   type="text"
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-right" title="Высота"
                             style={{position: 'absolute', left: 285, top: 95, width: 40, height: 198}}>
                            <div className="sizer-right-line"
                                 style={{position: 'absolute', left: 39, top: 0, height: 198}}></div>
                            <div className="sizer-right-arrow1"
                                 style={{position: 'absolute', left: 33.5, top: 0}}></div>
                            <div className="sizer-right-arrow2"
                                 style={{position: 'absolute', left: 33.5, top: 185}}></div>
                            <input name="singleH"
                                   style={{position: 'absolute', left: 18, top: 88.5}}
                                   value={this.state.singleH}
                                   type="text"
                                   onChange={this.handleChangeSize}
                            /></div>
                    </div>
                );
            case 2:
                return (
                    <div
                        style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380}}>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'double1')}
                             style={{cursor: 'pointer', position: 'absolute', left: 135, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-r-${this.state.double1}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 145, top: 245, width: 80, height: 20}}>
                            {this.setRightTitle('double1')}
                        </div>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'double2')}
                             style={{cursor: 'pointer', position: 'absolute', left: 235, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-l-${this.state.double2}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 245, top: 245, width: 80, height: 20}}>
                            {this.setLeftTitle('double2')}
                        </div>
                        <div className="sizer-up" title="Общая ширина окна"
                             style={{position: 'absolute', left: 135, top: 55, width: 198, height: 30}}>
                            <div className="sizer-up-line"
                                 style={{position: 'absolute', left: 0, top: 14, width: 198}}></div>
                            <div className="sizer-up-arrow1"
                                 style={{position: 'absolute', left: 0, top: 8.5}}></div>
                            <div className="sizer-up-arrow2"
                                 style={{position: 'absolute', left: 185, top: 8.5}}></div>
                            <input name="doubleW"
                                   style={{position: 'absolute', left: 77, top: 4.5}}
                                   value={this.state.doubleW}
                                   type="text"
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-right" title="Высота"
                             style={{position: 'absolute', left: 335, top: 95, width: 40, height: 198}}>
                            <div className="sizer-right-line"
                                 style={{position: 'absolute', left: 39, top: 0, height: 198}}></div>
                            <div className="sizer-right-arrow1"
                                 style={{position: 'absolute', left: 33.5, top: 0}}></div>
                            <div className="sizer-right-arrow2"
                                 style={{position: 'absolute', left: 33.5, top: 185}}></div>
                            <input name="doubleH"
                                   
                                   style={{position: 'absolute', left: 18, top: 88.5}}
                                   value={this.state.doubleH}
                                   type="text"
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-down" title="Ширина левой створки"
                             style={{position: 'absolute', left: 135, top: 295, width: 98, height: 30, display: 'none'}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                            <div className="sizer-down-arrow1"
                                 style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2"
                                 style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input name="left_width"
                                   style={{position: 'absolute', left: 27, top: 14.5}}
                                   value="750" type="text"/></div>
                    </div>
                );
            case 3:
                return (
                    <div
                        style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380}}>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'triple1')}
                             style={{cursor: 'pointer', position: 'absolute', left: 85, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-r-${this.state.triple1}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 95, top: 245, width: 80, height: 20}}>
                            {this.setRightTitle('triple1')}
                        </div>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'triple2')}
                             style={{cursor: 'pointer', position: 'absolute', left: 185, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-${this.state.triple2}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 195, top: 245, width: 80, height: 20}}>
                            {this.setSingleTitle('triple2')}
                        </div>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'triple3')}
                             style={{cursor: 'pointer', position: 'absolute', left: 285, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-l-${this.state.triple3}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 295, top: 245, width: 80, height: 20}}>
                            {this.setLeftTitle('triple3')}
                        </div>
                        <div className="sizer-up" title="Общая ширина"
                             style={{position: 'absolute', left: 85, top: 55, width: 298, height: 30}}>
                            <div className="sizer-up-line"
                                 style={{position: 'absolute', left: 0, top: 14, width: 298}}></div>
                            <div className="sizer-up-arrow1"
                                 style={{position: 'absolute', left: 0, top: 8.5}}></div>
                            <div className="sizer-up-arrow2"
                                 style={{position: 'absolute', left: 285, top: 8.5}}></div>
                            <input name="tripleW"
                                   style={{position: 'absolute', left: 127, top: 4.5}}
                                   value={this.state.tripleW}
                                   type="text"
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-right" title="Высота"
                             style={{position: 'absolute', left: 385, top: 95, width: 40, height: 198}}>
                            <div className="sizer-right-line"
                                 style={{position: 'absolute', left: 39, top: 0, height: 198}}></div>
                            <div className="sizer-right-arrow1"
                                 style={{position: 'absolute', left: 33.5, top: 0}}></div>
                            <div className="sizer-right-arrow2"
                                 style={{position: 'absolute', left: 33.5, top: 185}}></div>
                            <input name="tripleH"
                                   style={{position: 'absolute', left: 18, top: 88.5}}
                                   value={this.state.tripleH}
                                   type="text"
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-down" title="Ширина левой створки"
                             style={{position: 'absolute', left: 85, top: 295, width: 98, height: 30, display: 'none'}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                            <div className="sizer-down-arrow1"
                                 style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2"
                                 style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input name="left_width"
                                   style={{position: 'absolute', left: 27, top: 14.5}}
                                   value="700" type="text"/></div>
                        <div className="sizer-down" title="Ширина правой створки"
                             style={{position: 'absolute', left: 285, top: 295, width: 98, height: 30, display: 'none'}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                            <div className="sizer-down-arrow1"
                                 style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2"
                                 style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input name="right_width"
                                   style={{position: 'absolute', left: 27, top: 14.5}}
                                   value="700" type="text"/></div>
                    </div>
                );
            case 4:
                return (
                    <div style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380}}>
                    <div className="wincalc-layout-leaf"
                         onClick={this.setConfigWindow.bind(null, 'quadruple1')}
                         style={{cursor: 'pointer', position: 'absolute', left: 60, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-r-${this.state.quadruple1}.png)`}}
                         title="Глухая створка"></div>
                    <div className="wincalc-layout-label"
                         style={{position: 'absolute', left: 70, top: 245, width: 80, height: 20}}>
                        {this.setRightTitle('triple1')}
                    </div>
                    <div className="wincalc-layout-leaf"
                         onClick={this.setConfigWindow.bind(null, 'quadruple2')}
                         style={{cursor: 'pointer', position: 'absolute', left: 160, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-${this.state.quadruple2}.png)`}}
                         title="Глухая створка"></div>
                    <div className="wincalc-layout-label"
                         style={{position: 'absolute', left: 170, top: 245, width: 80, height: 20}}>
                        {this.setSingleTitle('quadruple2')}
                    </div>
                    <div className="wincalc-layout-leaf"
                         onClick={this.setConfigWindow.bind(null, 'quadruple3')}
                         style={{cursor: 'pointer', position: 'absolute', left: 260, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-${this.state.quadruple3}.png)`}}
                         title="Глухая створка"></div>
                    <div className="wincalc-layout-label"
                         style={{position: 'absolute', left: 270, top: 245, width: 80, height: 20}}>
                        {this.setSingleTitle('quadruple3')}
                    </div>
                    <div className="wincalc-layout-leaf"
                         onClick={this.setConfigWindow.bind(null, 'quadruple4')}
                         style={{cursor: 'pointer', position: 'absolute', left: 360, top: 95, width: 100, height: 200, backgroundImage: `url(img/leaf-l-${this.state.quadruple4}.png)`}}
                         title="Глухая створка"></div>
                    <div className="wincalc-layout-label"
                         style={{position: 'absolute', left: 370, top: 245, width: 80, height: 20}}>
                        {this.setLeftTitle('quadruple4')}
                    </div>
                    <div className="sizer-up" title="Общая ширина"
                         style={{position: 'absolute', left: 60, top: 55, width: 398, height: 30}}>
                        <div className="sizer-up-line"
                             style={{position: 'absolute', left: 0, top: 14, width: 398}}></div>
                        <div className="sizer-up-arrow1"
                             style={{position: 'absolute', left: 0, top: 8.5}}></div>
                        <div className="sizer-up-arrow2"
                             style={{position: 'absolute', left: 385, top: 8.5}}></div>
                        <input name="quadrupleW"
                               style={{position: 'absolute', left: 177, top: 4.5}}
                               value={this.state.quadrupleW}
                               type="text"
                               onChange={this.handleChangeSize}
                        /></div>
                    <div className="sizer-right" title="Высота"
                         style={{position: 'absolute', left: 460, top: 95, width: 40, height: 198}}>
                        <div className="sizer-right-line"
                             style={{position: 'absolute', left: 39, top: 0, height: 198}}></div>
                        <div className="sizer-right-arrow1"
                             style={{position: 'absolute', left: 33.5, top: 0}}></div>
                        <div className="sizer-right-arrow2"
                             style={{position: 'absolute', left: 33.5, top: 185}}></div>
                        <input name="quadrupleH"
                               style={{position: 'absolute', left: 18, top: 88.5}}
                               value={this.state.quadrupleH}
                               type="text"
                               onChange={this.handleChangeSize}
                        /></div>
                    <div className="sizer-down" title="Ширина левой створки"
                         style={{position: 'absolute', left: 60, top: 295, width: 98, height: 30, display: 'none'}}>
                        <div className="sizer-down-line"
                             style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                        <div className="sizer-down-arrow1"
                             style={{position: 'absolute', left: 0, top: 18.5}}></div>
                        <div className="sizer-down-arrow2"
                             style={{position: 'absolute', left: 85, top: 18.5}}></div>
                        <input name="left_width"
                               style={{position: 'absolute', left: 27, top: 14.5}}
                               value="700" type="text"/></div>
                    <div className="sizer-down" title="Ширина правой створки"
                         style={{position: 'absolute', left: 360, top: 295, width: 98, height: 30, display: 'none'}}>
                        <div className="sizer-down-line"
                             style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                        <div className="sizer-down-arrow1"
                             style={{position: 'absolute', left: 0, top: 18.5}}></div>
                        <div className="sizer-down-arrow2"
                             style={{position: 'absolute', left: 85, top: 18.5}}></div>
                        <input name="right_width"
                               style={{position: 'absolute', left: 27, top: 14.5}}
                               value="700" type="text"/></div>
                </div>);
           
        }
    };

    renderDoor = () => {
        const {item} = this.props;
        switch (item.selectItem) {
            case 1:
                return (
                    <div style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380, display: 'block'}}>
                        <div className="wincalc-layout-leaf"
                             style={{cursor: 'pointer', position: 'absolute', left: 190, top: 40, width: 100, height: 300, backgroundImage: `url(img/door-1.png)`}}
                             title="Дверь левая"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 200, top: 270, width: 80, height: 20}}>
                            Дверь левая с откр-ем вверх
                        </div>
                        <div className="sizer-down" title="Ширина"
                             style={{position: 'absolute', left: 190, top: 340, width: 98, height: 30}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                            <div className="sizer-down-arrow1" style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2" style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input type="text"
                                   name="singleDoorW"
                                   style={{position: 'absolute', left: 27, top: 15.5}}
                                   value={this.state.singleDoorW}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-right" title="Высота"
                             style={{position: 'absolute', left: 290, top: 40, width: 40, height: 298}}>
                            <div className="sizer-right-line"
                                 style={{position: 'absolute', left: 39, top: 0, height: 298}}></div>
                            <div className="sizer-right-arrow1" style={{position: 'absolute', left: 33.5, top: 0}}></div>
                            <div className="sizer-right-arrow2" style={{position: 'absolute', left: 33.5, top: 285}}></div>
                            <input type="text"
                                   name="singleDoorH"
                                   style={{position: 'absolute', left: 18, top: 139.5}}
                                   value={this.state.singleDoorH}
                                   onChange={this.handleChangeSize}
                            /></div>
                    </div>
                );
            case 2:
                return (
                    <div style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380}}>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'doubleDoor1')}
                             style={{cursor: 'pointer', position: 'absolute', left: 140, top: 40, width: 100, height: 200, backgroundImage: `url(img/leaf-r-${this.state.doubleDoor1}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 150, top: 190, width: 80, height: 20}}>
                            {this.setRightTitle('doubleDoor1')}
                        </div>
                        <div className="wincalc-layout-leaf"
                             style={{cursor: 'pointer', position: 'absolute', left: 240, top: 40, width: 100, height: 300, backgroundImage: `url(img/door-1.png)`}}
                             title="Дверь левая"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 250, top: 270, width: 80, height: 20}}>
                            Дверь левая с откр-ем вверх
                        </div>
                        <div className="sizer-up" title="Ширина"
                             style={{position: 'absolute', left: 140, top: 0, width: 198, height: 30}}>
                            <div className="sizer-up-line"
                                 style={{position: 'absolute', left: 0, top: 14, width: 198}}></div>
                            <div className="sizer-up-arrow1" style={{position: 'absolute', left: 0, top: 8.5}}></div>
                            <div className="sizer-up-arrow2" style={{position: 'absolute', left: 185, top: 8.5}}></div>
                            <input type="text"
                                   name="doubleDoor1W"
                                   style={{position: 'absolute', left: 77, top: 5.5}}
                                   value={this.state.doubleDoor1W}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-left" title="Высота окна"
                             style={{position: 'absolute', left: 80, top: 40, width: 40, height: 198}}>
                            <div className="sizer-left-line"
                                 style={{position: 'absolute', left: 19, top: 0, height: 198}}></div>
                            <div className="sizer-left-arrow1" style={{position: 'absolute', left: 13.5, top: 0}}></div>
                            <div className="sizer-left-arrow2" style={{position: 'absolute', left: 13.5, top: 185}}></div>
                            <input type="text" 
                                   name="doubleDoor1H"
                                   style={{position: 'absolute', left: -2, top: 89.5}}
                                   value={this.state.doubleDoor1H}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-down" title="Ширина двери"
                             style={{position: 'absolute', left: 240, top: 340, width: 98, height: 30}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                            <div className="sizer-down-arrow1" style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2" style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input type="text" 
                                   name="doubleDoor2W"
                                   style={{position: 'absolute', left: 27, top: 15.5}} 
                                   value={this.state.doubleDoor2W}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-right" title="Высота двери"
                             style={{position: 'absolute', left: 340, top: 40, width: 40, height: 298}}>
                            <div className="sizer-right-line"
                                 style={{position: 'absolute', left: 39, top: 0, height: 298}}></div>
                            <div className="sizer-right-arrow1" style={{position: 'absolute', left: 33.5, top: 0}}></div>
                            <div className="sizer-right-arrow2" style={{position: 'absolute', left: 33.5, top: 285}}></div>
                            <input type="text" 
                                   name="doubleDoor2H"
                                   style={{position: 'absolute', left: 18, top: 139.5}}
                                   value={this.state.doubleDoor2H}
                                   onChange={this.handleChangeSize}
                            /></div>
                    </div>
                );
            case 3:
                return (
                    <div style={{position: 'absolute', left: 0, top: 0, width: 420, height: 380}}>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'tripleDoor1')}
                             style={{cursor: 'pointer', position: 'absolute', left: 90, top: 40, width: 100, height: 200, backgroundImage: `url(img/leaf-r-${this.state.tripleDoor1}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 100, top: 190, width: 80, height: 20}}>
                            {this.setRightTitle('tripleDoor1')}
                        </div>
                        <div className="wincalc-layout-leaf"
                             onClick={this.setConfigWindow.bind(null, 'tripleDoor2')}
                             style={{cursor: 'pointer', position: 'absolute', left: 190, top: 40, width: 100, height: 200, backgroundImage: `url(img/leaf-${this.state.tripleDoor2}.png)`}}
                             title="Глухая створка"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 200, top: 190, width: 80, height: 20}}>
                            {this.setSingleTitle('tripleDoor2')}
                        </div>
                        <div className="wincalc-layout-leaf"
                             // onClick={this.setConfigDoor.bind(null, 'tripleDoor3')}
                             style={{cursor: 'pointer', position: 'absolute', left: 290, top: 40, width: 100, height: 300, backgroundImage: `url(img/door-1.png)`}}
                             title="Дверь левая с откр-ем вверх"></div>
                        <div className="wincalc-layout-label"
                             style={{position: 'absolute', left: 300, top: 270, width: 80, height: 20}}>
                            Дверь левая с откр-ем вверх
                        </div>
                        <div className="sizer-up" title="Ширина"
                             style={{position: 'absolute', left: 90, top: 0, width: 298, height: 30}}>
                            <div className="sizer-up-line"
                                 style={{position: 'absolute', left: 0, top: 14, width: 298}}></div>
                            <div className="sizer-up-arrow1" style={{position: 'absolute', left: 0, top: 8.5}}></div>
                            <div className="sizer-up-arrow2" style={{position: 'absolute', left: 285, top: 8.5}}></div>
                            <input type="text" 
                                   name="tripleDoor1W"
                                   style={{position: 'absolute', left: 127, top: 5.5}} 
                                   value={this.state.tripleDoor1W}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-left" title="Высота окна"
                             style={{position: 'absolute', left: 30, top: 40, width: 40, height: 198}}>
                            <div className="sizer-left-line"
                                 style={{position: 'absolute', left: 19, top: 0, height: 198}}></div>
                            <div className="sizer-left-arrow1" style={{position: 'absolute', left: 13.5, top: 0}}></div>
                            <div className="sizer-left-arrow2" style={{position: 'absolute', left: 13.5, top: 185}}></div>
                            <input type="text"
                                   name="tripleDoor1H"
                                   style={{position: 'absolute', left: -2, top: 89.5}}
                                   value={this.state.tripleDoor1H}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-down" title="Ширина левой створки"
                             style={{position: 'absolute', left: 90, top: 240, width: 98, height: 30, display: 'none'}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98, display: 'none'}}></div>
                            <div className="sizer-down-arrow1" style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2" style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input type="text" name="left_width"  style={{position: 'absolute', left: 27, top: 15.5}} value="750"/></div>
                        <div className="sizer-down" title="Ширина двери"
                             style={{position: 'absolute', left: 290, top: 340, width: 98, height: 30}}>
                            <div className="sizer-down-line"
                                 style={{position: 'absolute', left: 0, top: 24, width: 98}}></div>
                            <div className="sizer-down-arrow1" style={{position: 'absolute', left: 0, top: 18.5}}></div>
                            <div className="sizer-down-arrow2" style={{position: 'absolute', left: 85, top: 18.5}}></div>
                            <input type="text"
                                   name="tripleDoor3W"
                                   style={{position: 'absolute', left: 27, top: 15.5}} 
                                   value={this.state.tripleDoor3W}
                                   onChange={this.handleChangeSize}
                            /></div>
                        <div className="sizer-right" title="Высота двери"
                             style={{position: 'absolute', left: 390, top: 40, width: 40, height: 298}}>
                            <div className="sizer-right-line"
                                 style={{position: 'absolute', left: 39, top: 0, height: 298}}></div>
                            <div className="sizer-right-arrow1" style={{position: 'absolute', left: 33.5, top: 0}}></div>
                            <div className="sizer-right-arrow2" style={{position: 'absolute', left: 33.5, top: 285}}></div>
                            <input type="text" 
                                   name="tripleDoor3H"
                                   style={{position: 'absolute', left: 18, top: 139.5}}
                                   value={this.state.tripleDoor3H}
                                   onChange={this.handleChangeSize}
                            />
                        </div>
                    </div>
                );
          
        }
    };

    handleAddItem = (event) => {
        event.preventDefault();

        const {item, addItem} = this.props;
        const {singleW, singleH, single} = this.state;
        const sum = this.sum.innerHTML;
        
        addItem({
            id: item.id,
            calculate: item.calculate,
            profile: item.profile,
            glass: item.glass,
            fittings: item.fittings,
            laminate: item.laminate,
            sill: item.sill,
            tide: item.tide,
            selectItem: item.selectItem,
            width: singleW,
            height: singleH,
            price: sum,
            win1: single
        })
    };
    
    render() {
        return (
            <div className="right-column">
                <div className="wincalc-child-modules">
                    <div className="box wincalc-layout-module">
                        <h1>
                            <ins className="wincalc-mar">3</ins>
                            Задайте параметры
                        </h1>
                        <div className="wincalc-module-descr"><span className="calc-click-icon"><img
                            title="Нажмите на створку, чтобы изменить её тип"
                            src="img/calc-icon-click.png"/></span></div>
                        <div className="wincalc-module-body">
                            <div className="wincalc-layout" style={{width: 420, height: 380}}>

                                {this.renderItem()}

                                
                            </div>
                        </div>
                        <div className="wincalc-clear"></div>
                    </div>
                    <div className="full-width-column wincalc-page-select-module">
                        <div className="wincalc-module-body"></div>
                        <div className="wincalc-child-modules"
                             style={{position: 'relative', width: 'auto', height: 'auto'}}>
                            <div style={{display: 'block', position: 'relative', top: 0}}>
                                <div className="wincalc-child-modules">
                                    <div className="box-left-column price-box wincalc-price-module">
                                        <h1>
                                            <ins className="wincalc-mar">4</ins>
                                        </h1>
                                        <div className="wincalc-module-body">
                                            <div className="wincalc-price">
                                                <div className="b-priceset">
                                                    <div className="priceset__box priceset__box-1 priceset__total">
                                                        <div className="priceset__mtitle">Цена:</div>
                                                        <div className="priceset__body">
                                                            <div 
                                                                style={{display: 'inline-block'}}
                                                                ref={(sum) => this.sum = sum}
                                                            >
                                                                {this.totalPrice()}
                                                            </div>
                                                            <span> руб.</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="wincalc-child-modules">
                                            <div className="wincalc-add-to-basket-module">
                                                <div className="wincalc-module-body">
                                                    <a href="#" onClick={this.handleAddItem}>Добавить</a></div>
                                                <div className="wincalc-clear"></div>
                                            </div>
                                        </div>
                                        <div className="wincalc-clear"></div>
                                    </div>
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
        item: state.item
    }
}, {addItem})(Right)

