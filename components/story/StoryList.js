import Image from 'next/image'
import style from './StoryItem.module.scss';

const StoryList = () => {
    return (
        <div className="d-flex flex-row">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Image
                    src="/vercel.svg"
                    alt="Picture of the author"
                    className={style.avatar}
                    width={50}
                    height={50} />
                    <span>kjnvjfk</span>
            </div>
        </div>
    );
};
export default StoryList;