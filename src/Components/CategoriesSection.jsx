
import { categoriesItems } from '../Constant/categoriesItems'

const CategoriesSection = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
      {categoriesItems.map(({ id, image, title }) => (
        <div
          key={id}
          className="relative  transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img src={image} alt={title} className='w-full h-full object-cover rounded-lg shadow-md'/>
          <div className='absolute top-20 left-12'>
            <p className='text-xl  font-bold'>{title}</p>
            <p className='text-gray-600'>Veiw All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoriesSection
