//Home ComponentP
import boxPic from "/assets/HomeComPics/boxPic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HomePage() {
  return (
    <div className="relative  md:h-fit">
      {/* Image Layer */}
      <div className="relative">
        <img
          src={boxPic}
          alt="boxPic"
          className="w-full h-full object-cover md:h-[600px]"
        />
        {/* Overlay Layer */}
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      </div>

      <div>
        {/* Text Layer with Lazy Load and Slide-Up Effect */}
        <section className="absolute top-24 px-3 text-slate-50  font-bold z-10 tracking-wide uppercase opacity-0 translate-y-10 animate-fadeInUp md:w-7/12 md:px-6 lg:px-10 lg:w-full">
          <h1 className="font-extrabold mb-4 font-sans text-sm tracking-tight text-deepYellow lg:text-xl lg:pt-3 lg:pb-3">
            Move with meezHaul
          </h1>

          <p className="font-medium text-3xl tracking-wide mb-4 font-Roboto md:font-extrabold lg:text-5xl lg:pb-2">
            moving every customer with care
          </p>
          <p className="font-normal text-xl tracking-wider text-lightGray md:font-normal lg:text-2xl">
            Every step of your move, handled with care and precision.
          </p>
          <div className="flex relative top-20 gap-4 w-full ">
            <button className="border p-2 rounded bg-deepYellow text-royalBlue lg:text-2xl">
              Start Move
            </button>
            <button className="border p-2 rounded bg-royalBlue text-deepYellow lg:text-2xl">
              About Us
            </button>
          </div>
          <div className="flex space-x-4 relative top-36 px-6 ">
            <button className="w-10 p-2 bg-deepYellow rounded-full cursor-pointer lg:text-xl">
              <FontAwesomeIcon icon={faArrowLeft} className="text-royalBlue" />
            </button>
            <button className=" w-10 p-2 bg-royalBlue rounded-full  cursor-pointer lg:text-xl">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-deepYellow"
              />
            </button>
          </div>
        </section>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
          reprehenderit vitae placeat ab corrupti doloribus ipsa quasi adipisci.
          Earum soluta laudantium illum ex repellat, rerum voluptatum
          perferendis temporibus iste eos deleniti quod. Similique maiores quod
          autem temporibus omnis sunt soluta neque adipisci dolorem. Aut iure
          atque itaque sint commodi expedita ipsam laborum aliquid, enim debitis
          quam rem neque necessitatibus maxime eveniet est eligendi ratione!
          Labore veniam mollitia enim eaque pariatur odio, dicta numquam, porro
          dolor iure provident? Nulla, dolore corrupti quis architecto autem
          veritatis ea deserunt ab fuga commodi voluptate consectetur, quasi
          voluptatem atque velit! Nulla incidunt deserunt dolore debitis
          dolorum, illo sed numquam reiciendis magni ratione suscipit ullam.
          Accusamus earum doloremque necessitatibus, iure quasi ut laudantium
          expedita odio odit facere quisquam placeat fugiat provident quos
          reprehenderit nobis et consequuntur quidem possimus nihil dolorem unde
          animi? Suscipit asperiores facilis nam autem exercitationem ipsam
          veniam, odio laudantium quos recusandae aut sequi velit doloremque
          veritatis accusantium obcaecati aperiam, cum nisi? Accusamus facilis
          obcaecati veniam repellendus exercitationem a ad? Quas quaerat totam
          dolores consequuntur laborum voluptate iure, debitis quo autem magni
          similique esse provident repudiandae cupiditate beatae possimus
          veritatis nemo? Delectus, ut? Laborum quod pariatur mollitia totam
          nihil labore odit eligendi. Nisi, magni?
        </div>
      </div>
    </div>
  );
}

export default HomePage;
