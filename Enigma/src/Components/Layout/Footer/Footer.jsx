import FooterColumn from "./FooterColumn";
import {
  footerLinks,
  socialIcons,
  bottomText,
} from "./FooterData";

const Footer = () => {
  const SecurityIcon = bottomText.icon;
  return (
    <footer className="mt-24 rounded-t-[36px] bg-[#F8FAFF]">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="flex justify-between">
          <div className="max-w-sm">
            <h2 className="text-4xl font-bold">
              CloudCore Pro
            </h2>
            <p className="mt-6 leading-8 text-gray-600">
              Enterprise-grade hosting solutions for modern
              businesses. Reliable, scalable, and secure
              bare metal and cloud infrastructure.
            </p>
            <div className="mt-8 flex gap-4">
              {socialIcons.map((Icon, index) => (
                <button
                  key={index}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow hover:bg-blue-600 hover:text-white transition"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-20">
            {footerLinks.map((column) => (
              <FooterColumn
                key={column.title}
                column={column}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8">
          <p className="text-sm text-gray-600">
            {bottomText.copyright}
          </p>
          <div className="flex items-center gap-3 text-gray-700">
            <SecurityIcon
              size={20}
              className="text-blue-600"
            />
            <span className="font-medium">
              {bottomText.security}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;