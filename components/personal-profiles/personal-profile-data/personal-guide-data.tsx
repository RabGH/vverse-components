import {
    IconCalendar,
    IconCalendarTopDash,
    IconHashTag,
    IconMessageCircle,
    IconPrivacy,
    IconShare,
    IconStar,
    IconThumbsUp,
  } from "@/components/icons/logo-icons";
  import { formatCapitalLetters, formatNumber } from "@/lib/utils";
  import React from "react";
  
  type PersonalGuideDataProps = {

    rating: number;
    ratingPoints: number;
  };
  
  const PersonalGuideData = ({

    rating,
    ratingPoints,
  }: PersonalGuideDataProps) => {
    const iconStyles = "w-5 h-5 text-primary";
    return (
      <div className="flex flex-row gap-2 items-center flex-wrap">
        {formatCapitalLetters(type)} | <IconCalendar className={iconStyles} />{" "}
        {dateStart} | <IconCalendarTopDash className={iconStyles} /> {dateEnd} |{" "}
        <IconMessageCircle className={iconStyles} /> {formatNumber(comments)} |{" "}
        <IconThumbsUp className={iconStyles} /> {formatNumber(likes)} |{" "}
        <IconShare className={iconStyles} /> {formatNumber(shares)} |{" "}
        <IconStar className={iconStyles} /> {rating?.toFixed(1)}(
        {formatNumber(ratingPoints)})
      </div>
    );
  };
  
  export default PersonalGuideData;
  