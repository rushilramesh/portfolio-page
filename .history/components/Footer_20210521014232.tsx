export default function Footer() {
    return (
        <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6">
            <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
                <img src="https://source.unsplash.com/collection/1346951/150x150?sig=1" className="rounded-full shadow h-32 w-32"/>
            </div>
            <div className="flex-1 flex flex-col justify-center md:justify-start">
                <p className="font-semibold text-2xl">David</p>
                <p className="pt-2"></p>
                <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
                    <a className="" href="#">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="pl-4" href="#">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a className="pl-4" href="#">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="pl-4" href="#">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    
    )
}