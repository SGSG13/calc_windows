import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {
    setCalculate,
    setProfile,
    setFitting,
    setSill,
    setTide,
    setItem,
    setGlass,
    setInstall,
    setLaminate
} from '../AC'

class Left extends Component {
    static propTypes = {
        // from connect
        item: PropTypes.object.isRequired,
        setCalculate: PropTypes.func.isRequired,
        setProfile: PropTypes.func.isRequired,
        setFitting: PropTypes.func.isRequired,
        setSill: PropTypes.func.isRequired,
        setTide: PropTypes.func.isRequired,
        setItem: PropTypes.func.isRequired,
        setGlass: PropTypes.func.isRequired,
        setLaminate: PropTypes.func.isRequired
    };


    handleChangeSelect = (event) => {
        
        const {
            setCalculate,
            setProfile,
            setFitting,
            setSill,
            setTide,
            setGlass,
            setLaminate,
            setInstall
        } = this.props;
        
        switch (event.target.name) {
            case 'calculate':
                setCalculate(event.target.value);
                break;
            case 'profile':
                setProfile(event.target.value);
                break;
            case 'fittings':
                setFitting(event.target.value);
                break;
            case 'sill':
                setSill(event.target.value);
                break;
            case 'tide':
                setTide(event.target.value);
                break;
            case 'glass':
                setGlass(event.target.value);
                break;
            case 'laminate':
                setLaminate(event.target.value);
                break;
            case 'install':
                setInstall(event.target.value);
                break;
        }
    };

    handleSelectItem = (item) => {
        this.props.setItem(item);
    };

    renderWhatToCalculate = () => {
        const {item} = this.props;
        switch (item.calculate) {
            case 'windows':
                return (
                    <ul className="wincalc-item-selector">
                        <li className={item.selectItem == 1 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 1)}
                        ><img src="img/lay1-thumb.png" title="Односекционное окно"/></li>
                        <li className={item.selectItem == 2 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 2)}
                        ><img src="img/lay2-thumb.png" title="Двухсекционное окно"/></li>
                        <li className={item.selectItem == 3 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 3)}
                        ><img src="img/lay3-thumb.png" title="Трёхсекционное окно"/></li>
                        <li className={item.selectItem == 4 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 4)}
                        ><img src="img/lay4-thumb.png" title="Четырёхсекционное окно"/></li>
                    </ul>
                );
            case 'doors':
                return (
                    <ul class="wincalc-item-selector">
                        <li className={item.selectItem == 1 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 1)}
                        ><img src="img/lay1d-thumb.png" title="Дверь"/></li>
                        <li className={item.selectItem == 2 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 2)}
                        ><img src="img/lay2d-thumb.png" title="Односекционное окно и дверь"/></li>
                        <li className={item.selectItem == 3 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 3)}
                        ><img src="img/lay3d-thumb.png" title="Двухсекционное окно и дверь"/></li>
                    </ul>
                );

            default:
                return (
                    <ul className="wincalc-item-selector">
                        <li className={item.selectItem == 1 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 1)}
                        ><img src="img/lay1-thumb.png" title="Односекционное окно"/></li>
                        <li className={item.selectItem == 2 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 2)}
                        ><img src="img/lay2-thumb.png" title="Двухсекционное окно"/></li>
                        <li className={item.selectItem == 3 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 3)}
                        ><img src="img/lay3-thumb.png" title="Трёхсекционное окно"/></li>
                        <li className={item.selectItem == 4 ? 'wincalc-current-item' : ''}
                            onClick={this.handleSelectItem.bind(null, 4)}
                        ><img src="img/lay4-thumb.png" title="Четырёхсекционное окно"/></li>
                    </ul>
                )
        }
    };

    
    render() {
        const {item} = this.props;
        return (
            <div className="left-column">
                <div className="wincalc-child-modules">
                    <div className="box layout-select-block layout-select-what">
                        <h1>
                            <ins className="wincalc-mar">1</ins>
                            Что рассчитать?
                        </h1>
                        <div className="wincalc-child-modules">
                            <div className="wincalc-combo-selector-module">
                                <div className="wincalc-module-body">

                                    <select size="1" name="calculate" onChange={this.handleChangeSelect} value={item.calculate}>
                                        <option value="windows">Окна</option>
                                        <option value="doors">Двери</option>
                                    </select>

                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="layout-select-selector">
                                <div className="wincalc-module-body wincalc-item-selector-module">
                                    {this.renderWhatToCalculate()}
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                        </div>
                        <div className="wincalc-clear"></div>
                    </div>
                    <div className="box options-block">
                        <h1>
                            <ins className="wincalc-mar">2</ins>
                            Дополнительные характеристики
                        </h1>
                        <div className="wincalc-child-modules">
                            <div className="wincalc-combo-selector-module"><h1>Тип профиля</h1>
                                <div className="wincalc-module-body">
                                    
                                    <select size="1" name="profile" onChange={this.handleChangeSelect} value={item.profile}>
                                        <option value="KBE Gut">KBE Gut</option>
                                        <option value="KBE Master">KBE Master</option>
                                        <option value="KBE Elite 76">KBE Elite 76</option>
                                    </select>
                                    
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="wincalc-combo-selector-module">
                                <h1>Стеклопакет</h1>
                                <div className="wincalc-module-body">
                                    <select size="1" name="glass" onChange={this.handleChangeSelect} value={item.glass}>
                                        <option value="2 стекла">2 стекла</option>
                                        <option value="3 стекла">3 стекла</option>
                                    </select>
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="wincalc-combo-selector-module">
                                <h1>Фурнитура</h1>
                                <div className="wincalc-module-body">
                                    <select size="1" name="fittings" onChange={this.handleChangeSelect} value={item.fittings}>
                                        <option value="Siegenia Favorit">Siegenia Favorit</option>
                                        <option value="Siegenia Titan">Siegenia Titan</option>
                                    </select>
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="wincalc-combo-selector-module">
                                <h1>Ламинация</h1>
                                <div className="wincalc-module-body">
                                    <select size="1" name="laminate" onChange={this.handleChangeSelect} value={item.laminate}>
                                        <option value="Нет">Нет</option>
                                        <option value="Внутри">Внутри</option>
                                        <option value="Снаружи">Снаружи</option>
                                        <option value="Внутри и снаружи">Внутри и снаружи</option>
                                    </select>
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="wincalc-combo-selector-module">
                                <h1>Ширина подоконника</h1>
                                <div className="wincalc-module-body">
                                    <select size="1" name="sill" onChange={this.handleChangeSelect} value={item.sill}>
                                        <option value="Нет">Нет</option>
                                        <option value="100">100мм</option>
                                        <option value="150">150мм</option>
                                        <option value="200">200мм</option>
                                        <option value="250">250мм</option>
                                        <option value="300">300мм</option>
                                        <option value="350">350мм</option>
                                        <option value="400">400мм</option>
                                        <option value="450">450мм</option>
                                        <option value="500">500мм</option>
                                        <option value="600">600мм</option>
                                    </select></div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="wincalc-combo-selector-module"><h1>Ширина отлива</h1>
                                <div className="wincalc-module-body">
                                    <select size="1" name="tide" onChange={this.handleChangeSelect} value={item.tide}>
                                        <option value="Нет">Нет</option>
                                        <option value="100">100мм</option>
                                        <option value="150">150мм</option>
                                        <option value="200">200мм</option>
                                        <option value="250">250мм</option>
                                        <option value="300">300мм</option>
                                        <option value="350">350мм</option>
                                        <option value="400">400мм</option>
                                    </select>
                                </div>
                                <div className="wincalc-clear"></div>
                            </div>
                            <div className="wincalc-combo-selector-module">
                                <h1>Монтаж</h1>
                                <div className="wincalc-module-body">
                                    <select size="1" name="install" onChange={this.handleChangeSelect} value={item.install}>
                                        <option value="Нет">Нет</option>
                                        <option value="Да">Да</option>
                                    </select>
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
}, {
    setCalculate,
    setProfile,
    setFitting,
    setSill,
    setTide,
    setItem,
    setGlass,
    setInstall,
    setLaminate
})(Left)
