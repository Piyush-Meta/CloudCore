const SpecificationList = ({ specs }) => {

  if (!specs) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">

      {Object.entries(specs).map(([key, value]) => (

        <div key={key}>

          <p className="text-sm text-gray-500">
            {key}
          </p>

          <p className="font-semibold text-gray-800">
            {value}
          </p>

        </div>

      ))}

    </div>
  );
};

export default SpecificationList;