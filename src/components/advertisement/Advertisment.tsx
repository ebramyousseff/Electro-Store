import playstation from "../../assets/ban-1.5e1c424264e23e534bb7.webp";
import laptop from "../../assets/ban-2.9dee723adf4f82656647.webp";
import phone from "../../assets/ban-3.9a55f45078f437c3883e.webp";
import watch from "../../assets/ban-4.64b360e73c2eb7ff8acd.webp";
import headphone from "../../assets/ban-5.121d45e347f00070c078.webp";
import pc from "../../assets/ban-6.447647b4de46bf3d4589.webp";
import tables from "../../assets/ban-7.42f3aee998b28d4a7cec.webp";

const Advertisment = () => {
  return (
    <section className="w-full px-5 md:px-12  dark:bg-black text-black dark:text-white">
      <div className="lg:pl-9">
        <div className="">
          <div className="py-9 mb-14 lg:text-start text-center">
            <h1 className="uppercase text-5xl">
              over <span className="font-bold">1 million</span>
            </h1>
            <p className="uppercase font-semibold">
              OF COOL ELECTRONICS AND TECH GADGETS OUT THERE
            </p>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2 row-span-1">
              <img
                src={playstation}
                alt="Playstation"
                className="min-w-full h-full object-cover "
              />
            </div>

            <img
              src={laptop}
              alt="Laptop"
              className="w-full h-full object-cover"
            />
            <img
              src={phone}
              alt="Phone"
              className="w-full h-full object-cover"
            />

            <img
              src={watch}
              alt="Watch"
              className="w-full h-full object-cover"
            />
            <img
              src={headphone}
              alt="Headphone"
              className="w-full h-full object-cover"
            />
            <img src={pc} alt="PC" className="w-full h-full object-cover" />
            <img
              src={tables}
              alt="Tablet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisment;
