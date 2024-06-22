import Image from 'next/image';

interface HeroProps {
  imageUrl: string;
  altText: string;
  title: string;
}

const Hero = ({ imageUrl, altText, title }: HeroProps) => {
  return (
    <div className='relative h-screen'>
      <div className='absolute -z-10 inset-0'>
        <Image
          src={imageUrl}
          alt={altText}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-slate-800' />
      </div>
      <div className='pt-48 flex justify-center items-center'>
        <h1 className='text-white text-6xl'>{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
