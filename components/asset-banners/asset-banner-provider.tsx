import AssetMap from "./asset-map";

// specify types of assets

type AssetBannerProviderProps = {
  data: any;
  dataType: string;
};

const AssetBannerProvider = ({
  data,
  dataType,
}: AssetBannerProviderProps) => {
  return (
    <div className="">
      {dataType === "blog" && (
        <AssetMap
          data={data}
          dataType={dataType}
          buttonDataType={"follow"}
        />
      )}
      {dataType === "nation" && (
        <AssetMap
          data={data}
          dataType={dataType}
          buttonDataType={"join"}
        />
      )}
      {dataType === "tube" && (
        <AssetMap
          data={data}
          dataType={dataType}
          buttonDataType={"subscribe"}
        />
      )}
      {dataType === "lanceService" && (
        <AssetMap
          data={data}
          dataType={dataType}
          buttonDataType={"buy"}
        />
      )}
    </div>
  );
};

export default AssetBannerProvider;
