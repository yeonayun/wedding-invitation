import '../styles/Gallery.css';

function Gallery() {
    const images = [
        "/image1.jpg",
        "/image2.jpg",
        "/image3.jpg",
        "/image4.jpg",
        "/image1.jpg",
        "/image6.jpg",
        "/image7.jpg",
        "/image8.jpg",
        "/image9.jpg"
    ];

    return (
        <div className="gallery-wrapper">
            <h2 className="gallery-title">ALBUM</h2>
            <div className="gallery-grid">
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`기념사진${index + 1}`}
                        className="gallery-image"
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
