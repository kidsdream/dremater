import { useEffect, useState } from 'react'
import 'scroll-behavior-polyfill'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const ReturnTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false)

  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 800  //ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '60px',
    height: '60px',
    textAlign: 'center',
  } as React.CSSProperties;
  const activeStyle = {
    opacity: 1,
    zIndex: 10,
    transition: '0.5s',
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    width: '60px',
    height: '60px',
    background: '#333',
    borderRadius: '50%',
    color: '#ccc',
    fontSize: '8px',
    textAlign: 'center',
    cursor: 'pointer',
  } as React.CSSProperties;
  const style = isButtonActive ? activeStyle : normalStyle

  const iconStyle = {
    width: '44px',
    height: '44px',
    paddingTop: '16px'
  }

  return (
    <div style={style} onClick={returnTop}>
      <FontAwesomeIcon icon={faArrowUp} style={iconStyle}/>
    </div>
  )
}

export default ReturnTopButton
