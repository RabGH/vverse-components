import AssetMap from "./asset-map";

type AssetBannerProviderProps = {
  data: any;
  dataType: string;
};

const AssetBannerProvider = ({ data, dataType }: AssetBannerProviderProps) => {
  return (
    <div className="">
      {dataType === "blog" && <AssetMap data={data} dataType={dataType} />}
      {dataType === "nation" && <AssetMap data={data} dataType={dataType} />}
    </div>
  );
};

export default AssetBannerProvider;
