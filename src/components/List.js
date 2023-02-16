import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/slices/products';
import Product from './Product';

const List = () => {
  const dispatch = useDispatch()
  const {products} = useSelector(state => state.products)
  const {likedList} = useSelector(state => state.likedList)

  const isLoading = products.status === 'loading'
  const [isFilter, setIsFilter] = useState(false)

  useEffect(()=> {
    dispatch(fetchProducts("Влагостойкий"))
  }, [])

  return (
    <section> 
        <button className={`filter__btn ` + (isFilter ? 'filter__btn--active' : '')} onClick={() => setIsFilter(!isFilter)}>Только залайканные карточки</button>

          <div className='wrapper'>
          { isLoading 

          ? ( <div className='loading'><p>Загрузка товаров</p></div> )
          
          : (isFilter 
            ? ( 
              likedList.length > 0 
                ? likedList.map(product => 
                  ( <Product
                      key={product.title}
                      product={product}
                  />))
                : ( <div className='loading'>Вы еще не поставили лайк ни одному товару</div> )
              ) 
            : (
              products.items.map(product => 
                ( <Product
                    key={product.title}
                    product={product}
                />)
                  )
              )) }
          </div>
    </section>
  )
}

export default List