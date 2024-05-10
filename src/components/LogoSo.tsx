import Image from 'next/image'

interface Props{
    width: number
    height: number
}

export const LogoSo = ({width, height} : Props) => {
    return (
        <>
            <Image 
                width={width}
                height={height}
                src={'/logo_so_without_letters.svg'}
                alt='Logo Sales Operations'
            />
        </> 
    )
};
