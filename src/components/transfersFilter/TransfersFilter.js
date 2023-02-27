import { useSelector, useDispatch } from 'react-redux';

import { transfersChanged, transfersAllChanged } from '../../redux/slices/transfersSlice';

import './transfersFilter.scss'

const TransfersFilter = () => {

    const { stops, activeStops } = useSelector(state => state.transfers)
    const dispatch = useDispatch()

    const renderItems = (itemsArr, activeItemsArr) => {
    
        const isChecked = (id ,activeItemsArr) => {
            if (activeItemsArr) {
                return activeItemsArr.findIndex(item => item.id === id) > -1 ? true : false;
            }
        }

        if (itemsArr && itemsArr.length) {
            return itemsArr.map(({id, label}) => {

                return (
                    <label key={id} className="stops-filter__btn">
                        <input
                            type="checkbox"
                            className="stops-filter__check"
                            checked={isChecked(id, activeItemsArr)}
                            onChange={(e) => dispatch(transfersChanged({id: id, isChecked: e.target.checked}))}
                        />
                        <span className="stops-filter__text">{label}</span>
                    </label>
                )
            })
        }
        return <span>Произошла ошибка</span>
    }

    const isAllItemsChecked = (itemsArr, activeItemsArr) => {
        if (itemsArr && activeItemsArr) {
            return itemsArr.length === activeItemsArr.length ? true : false
        }  
    }

    const isChecked = isAllItemsChecked(stops, activeStops)
    const items = renderItems(stops, activeStops)

    return (
        <div className="stops-filter">
            <span className="stops-filter__title">Количество пересадок</span>
            <div className="stops-filter__btn-wrapper">
            <label className="stops-filter__btn">
                <input
                    type="checkbox"
                    className="stops-filter__check"
                    checked={isChecked}
                    onChange={(e) => dispatch(transfersAllChanged(e.target.checked))}
                />
                <span className="stops-filter__text">ВСЕ</span>
            </label>
                {items}
            </div>
        </div>
    )
}

export default TransfersFilter
