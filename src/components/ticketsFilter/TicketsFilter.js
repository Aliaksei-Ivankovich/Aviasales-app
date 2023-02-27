import { useSelector, useDispatch } from 'react-redux'
import cl from 'classnames'

import { filtersChanged } from '../../redux/slices/filtersSlice'

import './ticketsFilter.scss'

const TicketsFilter = () => {
    const { activeFilter, filters } = useSelector((state) => state.filters)
    const dispatch = useDispatch()

    const items = filters.map(({ name, label }) => {
        const clazz = cl('tickets-filter__btn', {
            ' tickets-filter__btn_active': name === activeFilter,
        }) 

        return (
            <button  
                className={clazz}
                type="button"
                key={name}
                onClick={() => dispatch(filtersChanged(name))}
            >
                {label}
            </button>
        )
    }) 

    return <div className="tickets-filter">{items}</div>
}

export default TicketsFilter
