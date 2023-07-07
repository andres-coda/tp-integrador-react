function ImgProcucto( { dato } ){
    return (
        <img src={dato.image} alt={dato.title} />
    );
};

export default ImgProcucto;