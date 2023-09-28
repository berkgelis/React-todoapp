import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div className='px-4 w-100 mb-5 mainPage'>
            <div className='mb-4'>
                <Image className='position-relative mb-4' src="https://st-vans.mncdn.com/Content/img/FA23_BTS_HPHero_Desk_NoText.jpg" fluid />
                <div className='px-5 d-flex justify-content-between'>
                    <h1 className='m-0'>TÜM AİLE İÇİN CLASSICS</h1>
                    <Link to={"/classic"} className='mainButton text-decoration-none text-light fw-semibold d-flex align-items-center px-3'>ALIŞVERİŞE BAŞLA</Link>
                </div>
            </div>
            <div className='mb-4'>
                <Image className='position-relative mb-4' src="	https://images.vans.com/is/image/VansBrand/230804_LPSkateWK19_HeroModule_Bg_Desk?$SCALE%2DORIGINAL$" fluid />
                <div className='px-5 d-flex justify-content-between'>
                    <Link to={"/skate"} className='mainButton text-decoration-none text-light fw-semibold d-flex align-items-center px-3'>ALIŞVERİŞE BAŞLA</Link>
                    <h1 className='m-0'>Klasik Vans siluetine, kaykaycı dokunuşu!</h1>
                </div>
            </div>
            <div className='mb-4'>
                <Image className='position-relative mb-4' src="	https://st-vans.mncdn.com/Content/lp-images/surf-shoes/230331-Surf-AS-HERO-SlipOnTRK-desk.webp" fluid />
                <div className='px-5 d-flex justify-content-between'>
                    <h1 className='m-0'>Alçak tabanı sayesinde giyip çıkarmak çok rahat!</h1>
                    <Link to={"/surf"} className='mainButton text-decoration-none text-light fw-semibold d-flex align-items-center px-3'>ALIŞVERİŞE BAŞLA</Link>
                </div>
            </div>
        </div>

    )
}

export default MainPage;