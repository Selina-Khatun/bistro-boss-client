
import { Parallax } from 'react-parallax';
const Cover = ({ img, title }) => {
    return (

        <div className='-mt-8 h-full mb-10'>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the dog"
                strength={-200}

            >
                <div className="hero py-10 my-5" >
                    <div className=" w-3/4 h-[35vh] my-10 mt-10 hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                        </div>
                    </div>
                </div>
            </Parallax>
        </div>


    );
};

export default Cover;