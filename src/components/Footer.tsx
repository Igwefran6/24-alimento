const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-white p-8 lg:px-24 w-screen flex lg:items-center justify-between font-sans border-t-8 border-gold">
      <div className="flex flex-col lg:flex-row gap-6 text-xl">
        <h3 className="underline hover:opacity-75 cursor-pointer">Contact</h3>
        <h3 className="underline hover:opacity-75 cursor-pointer">Instagram</h3>
        <h3 className="underline hover:opacity-75 cursor-pointer">Facebook</h3>
      </div>
      <div>
        <span className="text-xl underline hover:opacity-75 cursor-pointer">
          Scroll to top
        </span>
      </div>
    </footer>
  );
};

export default Footer;
