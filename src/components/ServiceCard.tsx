import Link from 'next/link';

const Services = () => {

    const textColorClasses = [
        'text-red-600',
        'text-green-600',
        'text-yellow-600',
        'text-blue-600',
    ];

  return (
    <div className="container mx-auto px-4 xl:px-0 mb-10 md:mb-20 relative z-10">
      <div className="flex flex-wrap justify-center -mt-20 md:-mt-40">
        <ServiceCard
          iconUrl="https://sandbox-tailwindcss.ibthemespro.com/assets/img/icons/solid/edit.svg"
          iconColor="#e668b3"
          title="Content Marketing"
          description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
          learnMoreLink="#"
          hoverColor="#e668b3"
          textColor="text-red-600"

        />
        <ServiceCard
          iconUrl="https://sandbox-tailwindcss.ibthemespro.com/assets/img/icons/solid/team.svg"
          iconColor="#a07cc5"
          title="Social Engagement"
          description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
          learnMoreLink="#"
          hoverColor="#a07cc5"
          textColor="text-pink-600"
          />
        <ServiceCard
          iconUrl="https://sandbox-tailwindcss.ibthemespro.com/assets/img/icons/solid/lamp.svg"
          iconColor="#f78b77"
          title="Identity & Branding"
          description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
          learnMoreLink="#"
          hoverColor="#f78b77"
        textColor="text-green-600"
        />
        <ServiceCard
          iconUrl="https://sandbox-tailwindcss.ibthemespro.com/assets/img/icons/solid/delivery-box.svg"
          iconColor="#45c4a0"
          title="Product Design"
          description="Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo."
          learnMoreLink="#"
          hoverColor="#45c4a0"
        textColor="text-yellow-600"
        />
      </div>
    </div>
  );
};

const ServiceCard = ({ iconUrl, iconColor, title, description, learnMoreLink, hoverColor, textColor }:any) => {
    return (
      <div className="md:w-1/2 lg:w-1/2 xl:w-1/4 w-full px-4 xl:px-3 lg:px-3 md:px-3 mt-10 md:mt-20">
        <div className="bg-white shadow-md hover:shadow-lg rounded-lg h-full">
          <div className="p-6 flex flex-col h-full">
            <img src={iconUrl} className="w-14 h-14 mb-3" alt="Service Icon" />
            <h4 className="text-xl font-semibold mb-2">{title}</h4>
            <p className="mb-4 text-gray-700">{description}</p>
            <Link href={learnMoreLink} passHref legacyBehavior>
              <a className={`${textColor} group-hover:text-${hoverColor} group-focus:text-${hoverColor}`}>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  

export default Services;
