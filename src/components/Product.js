import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {  addToLiked, removeToLiked } from '../store/slices/likedList'
import { removeToProduct } from '../store/slices/products'

const Product = ({product}) => {
  const dispatch = useDispatch()
  const [isLiked, setIsLiked] = useState(false)

  const handleAddToLike = () => {
    if(isLiked) {
      dispatch(removeToLiked(product))
      setIsLiked(false)
    } else {
      dispatch(addToLiked(product))
      setIsLiked(true)
    }
  }

  const handleRemoveToLike = () => {
    dispatch(removeToProduct(product))
    dispatch(removeToLiked(product))
  }

  return (
    <div className='product'>
      <div className='btns'>
        <button  className=''>
          <FontAwesomeIcon onClick={handleRemoveToLike} icon={faTrash}/>
        </button>
        <button className=''>
          <FontAwesomeIcon onClick={handleAddToLike} icon={faHeart} className={isLiked ? 'like' : ''}/>
        </button>
      </div>
      <div className='img'>
        <img src={product.img} alt={product.title} />
      </div>
      <p className='title'>{product.title} </p>
    </div>
  )
}

export default Product