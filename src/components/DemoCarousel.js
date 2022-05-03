import 'tw-elements';

function CarouselItem(clip, index) {
    if (clip.isImage) {
        return (
            <div key={clip.key} className={`carousel-item ${index === 0 ? "active" : ""} relative float-left w-full`}>
                <img
                    src={clip.src}
                    class="block w-full"
                    alt={clip.alt}
                />
                <div className="carousel-caption hidden md:block absolute text-center mb-4">
                    <h5 className="text-xl">{clip.header}</h5>
                    <p>{clip.caption}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div key={clip.key} className={`carousel-item ${index === 0 ? "active" : ""} relative float-left w-full`}>
                <video className='w-full' autoPlay loop muted>
                    <source src={clip.src} type="video/mp4"></source>
                </video>
                <div className="carousel-caption hidden md:block absolute text-center mb-4">
                    <h5 className="text-xl">{clip.header}</h5>
                    <p>{clip.caption}</p>
                </div>
            </div>
        )
    }
}

function Button(clip, index, targetId) {
    if (index === 0) {
        return (
            <button
                key={clip.key}
                data-bs-target={`#${targetId}`}
                data-bs-slide-to={index}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
            ></button>
        )
    } else {
        return (
            <button
                key={clip.key}
                data-bs-target={`#${targetId}`}
                data-bs-slide-to={index}
                aria-label="Slide 1"
            ></button>
        )
    }
}

function DemoCarousel({ clipInfo, targetId }) {
    console.log("targetId", targetId);
    return (
        <div
            id={targetId}
            className="carousel slide carousel-dark relative"
            data-bs-ride="carousel"
            data-bs-interval="false"
        >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 my-4">
                {clipInfo.map((clip, index) => {
                    return Button(clip, index, targetId);
                })}
            </div>

            <div className="carousel-inner relative w-full overflow-hidden">
                {clipInfo.map((clip, index) => {
                    return CarouselItem(clip, index);
                })}
            </div>

            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target={`#${targetId}`}
                data-bs-slide="prev"
            >
                {/* <span id='left-arrow' className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span> */}
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target={`#${targetId}`}
                data-bs-slide="next"
            >
                {/* <span id='right-arrow' className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span> */}
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default DemoCarousel;