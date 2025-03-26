import "../../index";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="pb-10 flex flex-col justify-center items-center text-white mb-10"
    >
      <h1 className="contact-heading section-heading custom-contact-heading mb-10">
        Contact
      </h1>
      <div className="flex flex-col justify-center text-xl gap-6 rounded-xl p-[2px]">
        <div className="flex items-center gap-[3rem]">
          <span className="font-semibold text-right w-28">Email:</span>
          <span className="text-gray-300 text-left">
            <a href="mailt&#111;&#58;&#37;6Aust%69&#110;to233%40%67mail%&#50;Ec&#111;&#37;6D">
              j&#117;st&#105;nto233&#64;g&#109;&#97;i&#108;&#46;c&#111;&#109;
            </a>
          </span>
        </div>
        <div className="flex items-center gap-[3rem]">
          <span className="font-semibold text-right w-28">City:</span>
          <span className="text-gray-300 text-left">Baldwin Park, 91706</span>
        </div>
        <div className="flex items-center gap-[3rem]">
          <span className="font-semibold text-right w-28">Phone:</span>
          <span className="text-gray-300 text-left">(626) 863-9859</span>
        </div>
      </div>
    </section>
  );
};
