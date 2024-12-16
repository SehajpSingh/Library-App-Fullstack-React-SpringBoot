export const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark main-color py-3'>
      <div className='container-fluid'>
        <span className='navbar-brand'>Luv 2 Read</span>
        
        ##Hamburger Button for Mobile View
        <button 
          className='navbar-toggler' 
          type='button'
          data-bs-toggle='collapse' 
          data-bs-target='#navbarNavDropDown'
          aria-controls='navbarNavDropDown' 
          aria-expanded='false' 
          aria-label='Toggle Navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropDown'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='javascript:void(0);'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='javascript:void(0);'>Search Books</a>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item m-1'>
              <a type='button' className='btn btn-outline-light' href='javascript:void(0);'>Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}

