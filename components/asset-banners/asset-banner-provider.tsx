import AssetMap from "./asset-banner-map";

// specify types of assets

type AssetBannerProviderProps = {
  data: any;
  dataType: string;
};

/**
 * Renders the Asset Banner Provider component.
 *
 * @param {AssetBannerProviderProps} data - The data object containing the necessary information for rendering the component.
 * @param {string} dataType - The type of data to be rendered by the component.
 * @return {JSX.Element} The rendered Asset Banner Provider component.
 */

const AssetBannerProvider = ({ data, dataType }: AssetBannerProviderProps) => {
  return (
    <div className="">
      {dataType === "blog" && (
        <AssetMap data={data} dataType={dataType} buttonDataType={"follow"} />
      )}
      {dataType === "nation" && (
        <AssetMap data={data} dataType={dataType} buttonDataType={"join"} />
      )}
      {dataType === "tube" && (
        <AssetMap
          data={data}
          dataType={dataType}
          buttonDataType={"subscribe"}
        />
      )}
      {dataType === "lanceService" && (
        <AssetMap data={data} dataType={dataType} buttonDataType={"buy"} />
      )}
      {dataType === "college" && (
        <AssetMap data={data} dataType={dataType} buttonDataType={"enroll"} />
      )}
      {dataType === "lanceProject" && (
        <AssetMap data={data} dataType={dataType} buttonDataType={"apply"} />
      )}
    </div>
  );
};

export default AssetBannerProvider;
