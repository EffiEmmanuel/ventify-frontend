import React, { useState } from 'react'
import './index.css'
import '../../App.css'
import ventifyLogo from '../../assets/images/Logo-ventify.png'
import ventifyHeaderShowcase from '../../assets/images/header-ventify.png'
import ventifyBooking from '../../assets/images/booking-ventify.png'
import ventifyInstagram from '../../assets/images/instagram-ventify.png'
import ventifyTwitter from '../../assets/images/twitter-ventify.png'
import ventifyFacebook from '../../assets/images/facebook-ventify.png'
import VentifyDetails from '../VentifyDetails'
import axios from 'axios'

function Waitlist() {
    const [email, setEmail] = useState()
    const [footerEmail, setFooterEmail] = useState()

    const handleHeaderEmailSubmit = async (e) => {
        e.preventDefault()
        
        await axios.post('http://localhost:5010/api/waitlist/join', {
            email
        }).then(response => {
            console.log('Response:', response)
        }).catch(error => {
            console.log('Error:', error)
        })
    }

    const handleFooterEmailSubmit = async (e) => {
        e.preventDefault()
        // console.log('Header Email:', headerEmail)
    }

    const [mobileMenuVibility, setMobileMenuVisibility] = useState('none')

    const toggleMenu = (e) => {
        e.target.checked ? setMobileMenuVisibility('flex') : setMobileMenuVisibility('none')
    }

    return (
        <div className='layout-container'>
            <header className='header'>
                <div className='container'>
                    <nav className='nav'>
                        <img src={ventifyLogo} alt='Ventify' className='logo' />

                        <ul className='nav-items'>
                            <li className='nav-item'>
                                <a href='/about' className='nav-link'>About</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/contact' className='nav-link'>Contact</a>
                            </li>
                            <li className='nav-item'>
                                <a href='/become-a-host' className='nav-link'>Become a host</a>
                            </li>
                        </ul>

                        {/* Mobile menu */}
                        <div className="menu">
                            <input type="checkbox" id="toggle" onChange={toggleMenu} />
                            <label htmlFor="toggle" id="menu-button">
                                <p></p>
                            </label>
                        </div>

                        <div className='mobile-nav' style={{
                            display: `${mobileMenuVibility}`
                        }}>
                            <ul>
                                <li className='mobile-nav-item'>
                                    <a href='/about' className='nav-link'>About</a>
                                </li>
                                <li className='mobile-nav-item'>
                                    <a href='/contact' className='nav-link'>Contact</a>
                                </li>
                                <li className='mobile-nav-item'>
                                    <a href='/become-a-host' className='nav-link'>Become a host</a>
                                </li>
                            </ul>
                        </div>

                    </nav>

                    <div className='header-hero'>
                        <div className='headline'>
                            <h1>All you'll ever need for your <span className='ventify-pink'>events</span> managed within one app</h1>
                            <p>Book event places, stay within budget, hire professionals, track payments</p>
                        </div>

                        <div className='cta'>
                            <form onSubmit={handleHeaderEmailSubmit}>
                                <input
                                    type='text'
                                    name='email'
                                    className='cta-input'
                                    placeholder='abc@gmail.com'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button className='cta-button'>Join waitlist</button>
                            </form>
                        </div>
                    </div>
                </div>
            </header>

            <div className='container showcase'>
                <img src={ventifyHeaderShowcase} alt='Ventify demo' className='header-showcase' />
            </div>

            <main className='main-content waitlist'>
                <div className='container'>
                    <VentifyDetails
                        title='Book event centers'
                        listItems={[
                            'Avoid the stress of moving through different event centers before your big day.',
                            'Get the best event centers based on your desired location, schedule, budget, number of guests and so on.',
                            'Make reservations for your favorite event centers and let Ventify handle the rest.'
                        ]}
                        image={ventifyBooking}
                        alt='Book event centers on Ventify'
                        reverse={false}
                    />

                    <VentifyDetails
                        title='Hire professionals'
                        listItems={[
                            'Avoid the stress of moving through different event centers before your big day.',
                            'Get the best event centers based on your desired location, schedule, budget, number of guests and so on.',
                            'Make reservations for your favorite event centers and let Ventify handle the rest.'
                        ]}
                        image={ventifyBooking}
                        alt='Book event centers on Ventify'
                        reverse={true}
                    />

                    <VentifyDetails
                        title='Track payments'
                        listItems={[
                            'Avoid the stress of moving through different event centers before your big day.',
                            'Get the best event centers based on your desired location, schedule, budget, number of guests and so on.',
                            'Make reservations for your favorite event centers and let Ventify handle the rest.'
                        ]}
                        image={ventifyBooking}
                        alt='Book event centers on Ventify'
                        reverse={false}
                    />

                    <div className='footer-cta'>
                        <h2>Get early access today!</h2>
                        <div className='cta'>
                            <form onSubmit={handleFooterEmailSubmit}>
                                <input
                                    type='text'
                                    name='email'
                                    className='cta-input'
                                    placeholder='abc@gmail.com'
                                    onChange={(e) => setFooterEmail(e.target.value)}
                                />
                                <button className='cta-button'>Join waitlist</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className='container'>
                    <p>&copy; 2022 Ventify</p>
                    <div className='socials'>
                        <a href='#'><img src={ventifyFacebook} alt='visit Ventify on Facebook' /></a>
                        <a href='#'><img src={ventifyInstagram} alt='visit Ventify on Instagram' /></a>
                        <a href='#'><img src={ventifyTwitter} alt='visit Ventify on Twitter' /></a>
                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Waitlist