import AssetMap from "./asset-map";

// specify types of assets

type AssetBannerProviderProps = {
  data: any;
  dataType: string;
  isOwner: boolean;
};

const AssetBannerProvider = ({
  data,
  dataType,
  isOwner,
}: AssetBannerProviderProps) => {
  return (
    <div className="">
      {dataType === "blog" && (
        <AssetMap
          data={data}
          dataType={dataType}
          isOwner={isOwner}
          buttonDataType={"follow"}
        />
      )}
      {dataType === "nation" && (
        <AssetMap
          data={data}
          dataType={dataType}
          isOwner={isOwner}
          buttonDataType={"join"}
        />
      )}
      {dataType === "tube" && (
        <AssetMap
          data={data}
          dataType={dataType}
          isOwner={isOwner}
          buttonDataType={"subscribe"}
        />
      )}
      {dataType === "lanceService" && (
        <AssetMap
          data={data}
          dataType={dataType}
          isOwner={isOwner}
          buttonDataType={"buy"}
        />
      )}
    </div>
  );
};

export default AssetBannerProvider;
