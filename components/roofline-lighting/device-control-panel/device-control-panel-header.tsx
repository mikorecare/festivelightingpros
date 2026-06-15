import Image from "next/image";

const DeviceControlPanelHeader = () => {
  return (
    <div className="flex flex-row items-center justify-around bg-gradient-to-b from-[#1d3156] to-[#101518] py-2">
      <Image
        src="/FLP-LOGO-R-2.png"
        alt="Festive Lighting Pros"
        width={50}
        height={50}
        className="w-auto h-auto transition-transform duration-300 hover:scale-105"
        priority
      />
    </div>
  );
};

export default DeviceControlPanelHeader;
