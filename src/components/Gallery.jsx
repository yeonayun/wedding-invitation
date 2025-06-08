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
        <div style={{ padding: '10px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>ALBUM</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px',
                justifyItems: 'center'
            }}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`기념사진${index + 1}`}
                        style={{
                            width: '105%',
                            maxWidth: '400px',
                            height: '130px',
                            objectFit: 'cover',
                            borderRadius: '10px',
                            boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Gallery;
