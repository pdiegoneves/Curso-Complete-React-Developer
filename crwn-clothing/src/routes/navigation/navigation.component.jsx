import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as Crwlogo } from '../../assets/crown.svg' 

import { UserContext } from '../../contexts/user.context'
import './navigations.styles.scss'

const Navigation = () => {
  const { currentUSer } = useContext(UserContext)
  console.log(currentUSer)
  
  return (
    <Fragment>
          <div className='navigation'>
              <Link className='logo-container' to='/'>
                <Crwlogo className='logo' />
              </Link>
              <div className='nav-links-container'>
                  <Link className='nav-link' to='/shop'>
                      SHOP
                  </Link>
                  <Link className='nav-link' to='/auth'>
                      SIGN IN
                  </Link>
              </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
