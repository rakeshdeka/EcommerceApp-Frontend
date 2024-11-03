import { Link, Outlet, useLocation } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const steps = ['bag', 'address', 'payment'];

  // Determine active step based on the current path
  const activeStepIndex = steps.findIndex((step) =>
    location.pathname.includes(step)
  );

  return (
    <div>
      <div className="border-b py-8 px-3 flex items-center justify-between">
        <Link to="/">
          <img
            src="https://cdn.freelogovectors.net/wp-content/uploads/2021/02/myntra-logo-freelogovectors.net_.png"
            alt="Logo"
            className="h-10"
          />
        </Link>

        {/* Steps Navigation */}
        <div className="flex space-x-2">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <span
                className={`text-xs font-semibold ${index === activeStepIndex ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'
                  }`}
              >
                {step.toUpperCase()}
              </span>
              {index < steps.length - 1 && (
                <span className="mx-2 text-gray-500">--------</span>
              )}
            </div>
          ))}
        </div>


        <div className="flex items-center">
          <img
            src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png"
            alt="Secure Logo"
            className="h-10"
          />
          <p>100% SECURE</p>
        </div>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Checkout;
