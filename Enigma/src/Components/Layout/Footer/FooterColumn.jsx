import {Link} from "react-router-dom";
const FooterColumn = ({ column }) => {
  return (
    <div>
      <h3 className="mb-5 text-lg font-bold text-gray-900">
        {column.title}
      </h3>

      <ul className="space-y-3 ">
        {column.links.map((link) => (
          <li key={link}>
            <Link to={link.path} className="text-gray-600 transition hover:text-blue-600 hover:underline font-bold">
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;