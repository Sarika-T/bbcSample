import { useState } from 'react';
import { Logo, ProfileIcon } from '../../assests/icon';
import SearchAppBar from '../Common/SearchBar';
import FotterLinks from '../Content/FotterLinks';
import Header from '../Header/Header';
import './Mainpage.scss';



const handleClick = (e) =>{
    console.log("clicked")
        return(
            <a href='https://www.bbc.com/'>e</a>
        )
    }
export default function Mainpage(){


    return(
        <div className="mainpage">
            <div className="mainpage-header">
                <div className="mainpage-header-left">
                    <a href="https://www.bbc.com/">
                        <img 
                            className='mainpage-header-left-image' 
                            src='https://tse3.mm.bing.net/th/id/OIP.X3dlGmWXdTCv8lZa590yMQHaEK?cb=thfc1&w=700&h=394&rs=1&pid=ImgDetMain&o=7&rm=3' 
                            alt='BBCLogo' 
                        />
                    </a>
                    <div className='mainpage-header-left-profile'><ProfileIcon />
                    <span className='mainpage-header-left-image-text'>Sign In</span></div>
                </div>
                <div className='mainpage-header-left-line'></div>
                <div className='mainpage-header-middle'>
                    <Header />
                </div>
                <div className="mainpage-header-right">
                    <SearchAppBar />
                </div>
            </div>
            <div className="mainpage-content">
                <div className="mainpage-content-image">
                    <div className='mainpage-content-image-text'>
                        <h1>Sorry, BBC iPlayer isn't available in your region.</h1>
                        <span>It looks like you're outside of the UK. BBC iPlayer is only available in the UK. If you are using a proxy or VPN, please turn off any of these services and try again.</span>
                        <span className='mainpage-content-image-text-help'>For help, please go to iPlayer help and FAQs</span>
                    </div>
                </div>
                <div className='mainpage-content-explore'>
                    <h2>Explore the BBC</h2>
                    <div className='mainpage-content-explore-links'>
                        <FotterLinks />
                    </div>
                </div>
            </div>
        </div>
    )
}
// https://ichef.bbci.co.uk/images/ic/1184x666/p0k0w8r9.jpg