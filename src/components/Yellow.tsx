import yellow from '../assets/yellow.png';

interface YellowProps {
    visible: boolean;
}

const Yellow = ({ visible }: YellowProps) => {
    return (
        <>
            {visible && <img src={yellow} className='absolute w-20 object-cover top-2 right-2' />}
        </>
    );
};

export default Yellow;