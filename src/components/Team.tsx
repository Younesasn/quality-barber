import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">Team</h1>
        </div>
        <div className="md:flex flex-wrap justify-around">
          <div className="space-y-2">
            <Image
              src={"/images/laou.jpg"}
              width={150}
              height={150}
              className="rounded-full"
              alt="Laouny"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold">Lawni</h2>
              <p className="text-gray-500 text-lg">Barber & Co</p>
            </div>
          </div>
          <div className="space-y-2">
            <Image
              src={"/images/bacarus.jpg"}
              width={150}
              height={150}
              className="rounded-full"
              alt="Laouny"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold">Bacaruus</h2>
              <p className="text-gray-500 text-lg">Barber & Co</p>
            </div>
          </div>
          <div className="space-y-2">
            <Image
              src={"/images/fdsstyle.jpg"}
              width={150}
              height={150}
              className="rounded-full"
              alt="Laouny"
            />
            <div className="text-center">
              <h2 className="text-2xl font-bold">Fdsstyle</h2>
              <p className="text-gray-500 text-lg">Barber & Co</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
