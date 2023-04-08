import banner from "../../assets/images/about/banner.webp"

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: '38% 50%' }} className="py-64">
            <div className="h-100 w-100 grid place-items-center">
                <h1 className="font-bold font-xl-extrabold text-6xl lg:text-8xl text-white">About Us</h1>
            </div>
        </div>
    )
}

export default Banner